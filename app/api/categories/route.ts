import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { readCategories } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const data = await readCategories();
        return NextResponse.json(data);
    } catch (error) {
        console.error("GET /api/categories error:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}

function slugify(text: string): string {
    return text.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

// POST body: { type: "categories"|"jobTypes"|"locations", value: string }
export async function POST(request: NextRequest) {
    try {
        const { type, value } = await request.json();
        if (!type || !value) {
            return NextResponse.json({ error: "type and value are required" }, { status: 400 });
        }

        const tableMap: Record<string, string> = {
            categories: "job_categories",
            jobTypes: "job_types",
            locations: "job_locations",
        };

        const tableName = tableMap[type];
        if (!tableName) {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        const id = slugify(value);
        await query(
            `INSERT INTO ${tableName} (id, name) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name`,
            [id, value]
        );

        const data = await readCategories();
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

        const tableMap: Record<string, string> = {
            categories: "job_categories",
            jobTypes: "job_types",
            locations: "job_locations",
        };

        const tableName = tableMap[type];
        if (!tableName) {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        await query(`DELETE FROM ${tableName} WHERE name = $1`, [value]);

        const data = await readCategories();
        return NextResponse.json(data);
    } catch (error) {
        console.error("DELETE /api/categories error:", error);
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
