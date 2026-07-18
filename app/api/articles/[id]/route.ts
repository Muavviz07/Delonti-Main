import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
    const result = await query("SELECT * FROM articles WHERE id = $1 OR slug = $1", [resolvedParams.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const article = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      date: row.date,
      description: row.description,
      image: row.image || '',
      content: row.content || [],
      isPublished: row.is_published,
      createdAt: row.created_at,
    };

    return NextResponse.json(article);
  } catch (error) {
    console.error("GET /api/articles/[id] error:", error);
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
    const body = await request.json();
    const { title, category, date, description, image, content = [], isPublished = false } = body;

    const now = new Date().toISOString();

    const result = await query(
      `UPDATE articles SET title = $1, category = $2, date = $3, description = $4, image = $5, content = $6, is_published = $7, updated_at = $8
       WHERE id = $9 OR slug = $9
       RETURNING *`,
      [title, category, date, description, image || '', content, isPublished, now, resolvedParams.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const updatedArticle = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      date: row.date,
      description: row.description,
      image: row.image || '',
      content: row.content || [],
      isPublished: row.is_published,
      createdAt: row.created_at,
    };

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error("PUT /api/articles/[id] error:", error);
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
    const result = await query("DELETE FROM articles WHERE id = $1 OR slug = $1 RETURNING id", [resolvedParams.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error("DELETE /api/articles/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 });
  }
}
