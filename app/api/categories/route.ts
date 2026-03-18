import { NextRequest, NextResponse } from "next/server";
import { readCategories, writeCategories } from "@/lib/jobs";

export async function GET() {
    try {
        const data = readCategories();
        return NextResponse.json(data);
    } catch (error) {
        console.error("GET /api/categories error:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}

// POST body: { type: "categories"|"jobTypes"|"locations", value: string }
export async function POST(request: NextRequest) {
    try {
        const { type, value } = await request.json();
        if (!type || !value) {
            return NextResponse.json({ error: "type and value are required" }, { status: 400 });
        }

        const data = readCategories();

        if (!(type in data)) {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        const list = data[type as keyof typeof data] as string[];
        if (!list.includes(value)) {
            list.push(value);
            writeCategories(data);
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("POST /api/categories error:", error);
        return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
    }
}

// DELETE body: { type: "categories"|"jobTypes"|"locations", value: string }
export async function DELETE(request: NextRequest) {
    try {
        const { type, value } = await request.json();
        if (!type || !value) {
            return NextResponse.json({ error: "type and value are required" }, { status: 400 });
        }

        const data = readCategories();

        if (!(type in data)) {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        const list = data[type as keyof typeof data] as string[];
        data[type as keyof typeof data] = list.filter((item) => item !== value) as never;
        writeCategories(data);

        return NextResponse.json(data);
    } catch (error) {
        console.error("DELETE /api/categories error:", error);
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
