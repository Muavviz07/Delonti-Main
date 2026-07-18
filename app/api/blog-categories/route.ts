import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

function slugify(text: string): string {
    return text.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

export async function GET() {
    try {
        const result = await query("SELECT name FROM blog_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("GET /api/blog-categories error:", error);
        return NextResponse.json({ error: "Failed to fetch blog categories" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        const id = slugify(value);
        await query(
            "INSERT INTO blog_categories (id, name) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name",
            [id, value]
        );

        const result = await query("SELECT name FROM blog_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("POST /api/blog-categories error:", error);
        return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        await query("DELETE FROM blog_categories WHERE name = $1", [value]);

        const result = await query("SELECT name FROM blog_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("DELETE /api/blog-categories error:", error);
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
