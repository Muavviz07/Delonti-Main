import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { generateId, generateContentSlug } from "@/lib/jobs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const published = searchParams.get("published");

    let queryStr = "SELECT * FROM articles";
    const params: any[] = [];
    let paramIndex = 1;
    const conditions: string[] = [];

    if (published === "true") {
      conditions.push("is_published = true");
    }

    if (category) {
      conditions.push(`category = $${paramIndex}`);
      params.push(category);
      paramIndex++;
    }

    if (conditions.length > 0) {
      queryStr += " WHERE " + conditions.join(" AND ");
    }

    queryStr += " ORDER BY created_at DESC";

    const result = await query(queryStr, params);

    const articles = result.rows.map(row => ({
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
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("GET /api/articles error:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, date, description, image, content = [], isPublished = false } = body;

    if (!title || !category || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = generateId();
    const slug = generateContentSlug(title);
    const now = new Date().toISOString();

    const result = await query(
      `INSERT INTO articles (id, slug, title, category, date, description, image, content, is_published, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING *`,
      [id, slug, title, category, date || now, description, image || '', content, isPublished, now, now]
    );

    const row = result.rows[0];
    const newArticle = {
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

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error("POST /api/articles error:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}
