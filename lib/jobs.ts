import "server-only";
import fs from "fs";
import path from "path";

const IS_VERCEL = !!process.env.VERCEL;

export function getFilePath(filename: string): string {
    if (IS_VERCEL) {
        const tmpPath = path.join("/tmp", filename);
        if (!fs.existsSync(tmpPath)) {
            const defaultPath = path.join(process.cwd(), "data", filename);
            if (fs.existsSync(defaultPath)) {
                fs.copyFileSync(defaultPath, tmpPath);
            }
        }
        return tmpPath;
    }
    return path.join(process.cwd(), "data", filename);
}

const JOBS_FILE = getFilePath("jobs.json");
const CATEGORIES_FILE = getFilePath("categories.json");

export interface Job {
    id: string;
    slug?: string;
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
    const dir = path.dirname(JOBS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
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
    const dir = path.dirname(CATEGORIES_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
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

// ─── BLOG HELPERS ────────────────────────────────────────────

export interface BlogPost {
    id: string
    slug: string
    title: string
    category: string
    date: string
    description: string
    image: string
    content: string[]
    isPublished: boolean
    createdAt: string
}

const blogsPath = getFilePath("blogs.json")

export function readBlogs(): BlogPost[] {
    try {
        return JSON.parse(fs.readFileSync(blogsPath, 'utf-8'))
    } catch {
        return []
    }
}

export function writeBlogs(blogs: BlogPost[]): void {
    const dir = path.dirname(blogsPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2))
}

// ─── ARTICLE HELPERS ─────────────────────────────────────────

export interface Article {
    id: string
    slug: string
    title: string
    category: string
    date: string
    description: string
    image: string
    content: string[]
    isPublished: boolean
    createdAt: string
}

const articlesPath = getFilePath("articles.json")

export function readArticles(): Article[] {
    try {
        return JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
    } catch {
        return []
    }
}

export function writeArticles(articles: Article[]): void {
    const dir = path.dirname(articlesPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2))
}

// ─── SHARED SLUG GENERATOR ───────────────────────────────────

export function generateContentSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

// ─── ADMIN CONFIG HELPERS ────────────────────────────────────

export interface UserConfig {
    password?: string;
    role?: "super-admin" | "restricted-admin";
}

export interface AdminConfig {
    users?: {
        [username: string]: UserConfig;
    };
}

export function readAdminConfig(): AdminConfig {
    try {
        const configPath = getFilePath("admin-config.json");
        let config: AdminConfig = {};
        if (fs.existsSync(configPath)) {
            const raw = fs.readFileSync(configPath, "utf-8");
            config = JSON.parse(raw) as AdminConfig;
        }
        
        // Ensure users dictionary exists
        if (!config.users) {
            config.users = {};
        }

        // Migrate string values to object values if present
        for (const [uname, uval] of Object.entries(config.users)) {
            if (typeof uval === "string") {
                config.users[uname] = {
                    password: uval,
                    role: uname === "delq-admin" ? "super-admin" : "restricted-admin"
                };
            }
        }
        
        // Ensure defaults exist if no user of that role is present
        if (!Object.values(config.users).some(u => u?.role === "restricted-admin")) {
            config.users["delonti-admin"] = {
                password: process.env.ADMIN_PASSWORD || "admin",
                role: "restricted-admin"
            };
        }
        if (!Object.values(config.users).some(u => u?.role === "super-admin")) {
            config.users["delq-admin"] = {
                password: "delq-admin",
                role: "super-admin"
            };
        }
        return config;
    } catch {
        return {
            users: {
                "delonti-admin": {
                    password: process.env.ADMIN_PASSWORD || "admin",
                    role: "restricted-admin"
                },
                "delq-admin": {
                    password: "delq-admin",
                    role: "super-admin"
                }
            }
        };
    }
}

export function writeAdminConfig(config: AdminConfig): void {
    const configPath = getFilePath("admin-config.json");
    const dir = path.dirname(configPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf-8");
}

