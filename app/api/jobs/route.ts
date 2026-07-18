import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { generateId, generateContentSlug } from "@/lib/jobs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const jobType = searchParams.get("jobType");
    const location = searchParams.get("location");
    const all = searchParams.get("all");

    let queryStr = "SELECT * FROM jobs";
    const params: any[] = [];
    let paramIndex = 1;
    const conditions: string[] = [];

    if (all !== "true") {
      conditions.push("is_active = true");
    }

    if (category) {
      conditions.push(`category = $${paramIndex}`);
      params.push(category);
      paramIndex++;
    }

    if (jobType) {
      conditions.push(`job_type = $${paramIndex}`);
      params.push(jobType);
      paramIndex++;
    }

    if (location) {
      conditions.push(`location = $${paramIndex}`);
      params.push(location);
      paramIndex++;
    }

    if (conditions.length > 0) {
      queryStr += " WHERE " + conditions.join(" AND ");
    }

    queryStr += " ORDER BY posted_at DESC";

    const result = await query(queryStr, params);

    const jobs = result.rows.map(row => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      jobType: row.job_type,
      location: row.location,
      postedAt: row.posted_at,
      jobCode: row.job_code,
      qualification: row.qualification,
      experience: row.experience,
      requiredSkills: row.required_skills || [],
      rolesAndResponsibilities: row.roles_responsibilities || [],
      isActive: row.is_active,
    }));

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET /api/jobs error:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      category,
      jobType,
      location,
      jobCode,
      qualification,
      experience,
      requiredSkills = [],
      rolesAndResponsibilities = [],
      isActive = true,
    } = body;

    if (!title || !category || !jobType || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = generateId();
    const slug = generateContentSlug(title);
    const now = new Date().toISOString();

    const result = await query(
      `INSERT INTO jobs (id, slug, title, category, job_type, location, job_code, qualification, experience, required_skills, roles_responsibilities, is_active, posted_at, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
       RETURNING *`,
      [
        id,
        slug,
        title,
        category,
        jobType,
        location,
        jobCode || null,
        qualification || null,
        experience || null,
        requiredSkills,
        rolesAndResponsibilities,
        isActive,
        now,
        now,
        now,
      ]
    );

    const row = result.rows[0];
    const newJob = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      category: row.category,
      jobType: row.job_type,
      location: row.location,
      postedAt: row.posted_at,
      jobCode: row.job_code,
      qualification: row.qualification,
      experience: row.experience,
      requiredSkills: row.required_skills || [],
      rolesAndResponsibilities: row.roles_responsibilities || [],
      isActive: row.is_active,
    };

    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error("POST /api/jobs error:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
