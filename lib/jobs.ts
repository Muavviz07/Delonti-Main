import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_FILE = path.join(DATA_DIR, "jobs.json");
const CATEGORIES_FILE = path.join(DATA_DIR, "categories.json");

export interface Job {
    id: string;
    title: string;
    category: string;
    jobType: string;
    location: string;
    postedAt: string;
    jobCode: string;
    qualification: string;
    experience: string;
    requiredSkills: string[];
    rolesAndResponsibilities: string[];
    isActive: boolean;
}

export interface CategoriesData {
    categories: string[];
    jobTypes: string[];
    locations: string[];
}

export function readJobs(): Job[] {
    try {
        const raw = fs.readFileSync(JOBS_FILE, "utf-8");
        return JSON.parse(raw) as Job[];
    } catch {
        return [];
    }
}

export function writeJobs(jobs: Job[]): void {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2), "utf-8");
}

export function readCategories(): CategoriesData {
    try {
        const raw = fs.readFileSync(CATEGORIES_FILE, "utf-8");
        return JSON.parse(raw) as CategoriesData;
    } catch {
        return { categories: [], jobTypes: [], locations: [] };
    }
}

export function writeCategories(data: CategoriesData): void {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function generateId(): string {
    return crypto.randomUUID();
}

export function timeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) return diffYears === 1 ? "1 year ago" : `${diffYears} years ago`;
    if (diffMonths > 0) return diffMonths === 1 ? "1 month ago" : `${diffMonths} months ago`;
    if (diffDays > 0) return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
    if (diffHours > 0) return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
    if (diffMinutes > 0) return diffMinutes === 1 ? "1 minute ago" : `${diffMinutes} minutes ago`;
    return "just now";
}
