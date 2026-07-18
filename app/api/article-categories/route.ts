import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

function slugify(text: string): string {
    return text.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

export async function GET() {
    try {
        const result = await query("SELECT name FROM article_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("GET /api/article-categories error:", error);
        return NextResponse.json({ error: "Failed to fetch article categories" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        const id = slugify(value);
        await query(
            "INSERT INTO article_categories (id, name) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name",
            [id, value]
        );

        const result = await query("SELECT name FROM article_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("POST /api/article-categories error:", error);
        return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { value } = await request.json();
        if (!value) return NextResponse.json({ error: "Value required" }, { status: 400 });

        await query("DELETE FROM article_categories WHERE name = $1", [value]);

        const result = await query("SELECT name FROM article_categories ORDER BY name ASC");
        const categories = result.rows.map((row) => row.name);
        return NextResponse.json({ categories });
    } catch (error) {
        console.error("DELETE /api/article-categories error:", error);
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
