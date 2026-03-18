import { notFound } from "next/navigation";
import { readJobs } from "@/lib/jobs";
import JobDetailClient from "./JobDetailClient";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const jobs = readJobs();
    const job = jobs.find((j) => j.id === id);
    return {
        title: job ? `${job.title} | Careers — Delonti` : "Job Not Found | Delonti",
    };
}

export default async function JobDetailPage({ params }: PageProps) {
    const { id } = await params;
    const jobs = readJobs();
    const job = jobs.find((j) => j.id === id);

    if (!job || !job.isActive) {
        notFound();
    }

    return <JobDetailClient job={job} />;
}
