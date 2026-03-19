import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "article-categories.json");

const defaultCategories = [
    "Government Infrastructure",
    "Smart Cities",
    "Asset Management",
    "Cybersecurity for Government",
    "Infrastructure Data & Analytics"
];

function readCategories(): string[] {
    try {
        if (!fs.existsSync(filePath)) {
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(filePath, JSON.stringify(defaultCategories, null, 2));
            return defaultCategories;
        }
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch {
        return defaultCategories;
    }
}

function writeCategories(categories: string[]) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
}

export async function GET() {
    return NextResponse.json({ categories: readCategories() });
}

export async function POST(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        const categories = readCategories();
        if (!categories.includes(value)) {
            categories.push(value);
            writeCategories(categories);
        }
        return NextResponse.json({ categories });
    } catch {
        return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        let categories = readCategories();
        categories = categories.filter(c => c !== value);
        writeCategories(categories);

        return NextResponse.json({ categories });
    } catch {
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
