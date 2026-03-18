import { NextRequest, NextResponse } from "next/server";
import { readJobs, writeJobs, generateId } from "@/lib/jobs";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const jobType = searchParams.get("jobType");
        const location = searchParams.get("location");

        let jobs = readJobs().filter((j) => j.isActive);

        if (category) jobs = jobs.filter((j) => j.category === category);
        if (jobType) jobs = jobs.filter((j) => j.jobType === jobType);
        if (location) jobs = jobs.filter((j) => j.location === location);

        return NextResponse.json(jobs);
    } catch (error) {
        console.error("GET /api/jobs error:", error);
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const jobs = readJobs();

        const newJob = {
            id: generateId(),
            title: body.title ?? "",
            category: body.category ?? "",
            jobType: body.jobType ?? "",
            location: body.location ?? "",
            postedAt: new Date().toISOString(),
            jobCode: body.jobCode ?? "",
            qualification: body.qualification ?? "",
            experience: body.experience ?? "",
            requiredSkills: body.requiredSkills ?? [],
            rolesAndResponsibilities: body.rolesAndResponsibilities ?? [],
            isActive: body.isActive !== undefined ? body.isActive : true,
        };

        jobs.push(newJob);
        writeJobs(jobs);

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        console.error("POST /api/jobs error:", error);
        return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
    }
}
