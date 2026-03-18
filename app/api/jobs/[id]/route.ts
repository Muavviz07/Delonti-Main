import { NextRequest, NextResponse } from "next/server";
import { readJobs, writeJobs } from "@/lib/jobs";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const jobs = readJobs();
        const job = jobs.find((j) => j.id === id);

        if (!job) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(job);
    } catch (error) {
        console.error("GET /api/jobs/[id] error:", error);
        return NextResponse.json({ error: "Failed to fetch job" }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const body = await request.json();
        const jobs = readJobs();
        const index = jobs.findIndex((j) => j.id === id);

        if (index === -1) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        jobs[index] = { ...jobs[index], ...body, id };
        writeJobs(jobs);

        return NextResponse.json(jobs[index]);
    } catch (error) {
        console.error("PUT /api/jobs/[id] error:", error);
        return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
    }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const jobs = readJobs();
        const index = jobs.findIndex((j) => j.id === id);

        if (index === -1) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        jobs.splice(index, 1);
        writeJobs(jobs);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("DELETE /api/jobs/[id] error:", error);
        return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
    }
}
