import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
    const result = await query("SELECT * FROM jobs WHERE id = $1 OR slug = $1", [resolvedParams.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const job = {
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

    return NextResponse.json(job);
  } catch (error) {
    console.error("GET /api/jobs/[id] error:", error);
    return NextResponse.json({ error: "Failed to fetch job" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
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

    const now = new Date().toISOString();

    const result = await query(
      `UPDATE jobs SET title = $1, category = $2, job_type = $3, location = $4, job_code = $5, qualification = $6, experience = $7, required_skills = $8, roles_responsibilities = $9, is_active = $10, updated_at = $11
       WHERE id = $12 OR slug = $12
       RETURNING *`,
      [
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
        resolvedParams.id,
      ]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const row = result.rows[0];
    const updatedJob = {
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

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error("PUT /api/jobs/[id] error:", error);
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await params;
    const result = await query("DELETE FROM jobs WHERE id = $1 OR slug = $1 RETURNING id", [resolvedParams.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error("DELETE /api/jobs/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
