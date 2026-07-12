"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import { Laptop, Code, Award, Users, Briefcase, Clock, MapPin, Search, ChevronRight } from "lucide-react";
import { timeAgo } from "@/lib/utils-client";

interface Job {
    id: string;
    slug?: string;
    title: string;
    category: string;
    jobType: string;
    location: string;
    postedAt: string;
    jobCode: string;
    qualification: string;
    experience: string;
    requiredSkills: string[];
    rolesAndResponsibilities: string[];
    isActive: boolean;
}

interface CategoriesData {
    categories: string[];
    jobTypes: string[];
    locations: string[];
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2 font-display">
                No Positions Found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                No open positions match your current filters. Try adjusting your search or check back later.
            </p>
        </div>
    );
}

function JobCard({ job }: { job: Job }) {
    const router = useRouter();

    return (
        <div
            className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-6
        hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
            onClick={() => router.push(`/about/careers/${job.slug || job.id}`)}
        >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#2b2b4f] dark:group-hover:text-indigo-300 transition-colors font-display">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">
                            <Briefcase className="w-3 h-3" />
                            {job.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {job.jobType}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                        </span>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Posted {timeAgo(job.postedAt)}
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/about/careers/${job.slug || job.id}`);
                        }}
                        className="inline-flex items-center gap-2 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 group/btn whitespace-nowrap"
                    >
                        Apply Now
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [categories, setCategories] = useState<CategoriesData>({ categories: [], jobTypes: [], locations: [] });
    const [loading, setLoading] = useState(true);

    const [filterCategory, setFilterCategory] = useState("");
    const [filterJobType, setFilterJobType] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [appliedFilters, setAppliedFilters] = useState({ category: "", jobType: "", location: "" });

    const fetchJobs = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (appliedFilters.category) params.set("category", appliedFilters.category);
            if (appliedFilters.jobType) params.set("jobType", appliedFilters.jobType);
            if (appliedFilters.location) params.set("location", appliedFilters.location);

            const res = await fetch(`/api/jobs${params.toString() ? "?" + params.toString() : ""}`);
            const data = await res.json();
            setJobs(data);
        } catch (err) {
            console.error("Failed to fetch jobs", err);
        } finally {
            setLoading(false);
        }
    }, [appliedFilters]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    useEffect(() => {
        fetch("/api/categories")
            .then((r) => r.json())
            .then(setCategories)
            .catch(console.error);
    }, []);

    const handleSearch = () => {
        setAppliedFilters({ category: filterCategory, jobType: filterJobType, location: filterLocation });
    };

    const handleClear = () => {
        setFilterCategory("");
        setFilterJobType("");
        setFilterLocation("");
        setAppliedFilters({ category: "", jobType: "", location: "" });
    };

    const hasFilters = appliedFilters.category || appliedFilters.jobType || appliedFilters.location;

    const selectClass =
        "bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent outline-none transition-all w-full cursor-pointer";

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Careers at Delonti"
                    subtitle="Join the engineers, architects, and innovators building the future of distributed infrastructure."
                    breadcrumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Culture"
                    heading="Engineering Excellence"
                    description={
                        <>
                            <p>
                                Working at Delonti means tackling some of the most complex infrastructure challenges in the world. We build solutions that keep supply chains moving, protect classified intelligence, and make cities smarter.
                            </p>
                            <p>
                                We foster a culture of rigorous engineering, high autonomy, and continuous learning. If you are passionate about the intersection of software and the physical world—IoT, RFID, and advanced networking—you&apos;ve found your home.
                            </p>
                        </>
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Benefits"
                    heading="Why Join Delonti"
                    features={[
                        { title: "Remote-First", description: "Work from anywhere with our distributed global engineering team.", icon: <Laptop className="w-6 h-6" /> },
                        { title: "Deep Technical Work", description: "Solve hard problems in distributed systems, Rust, and Go.", icon: <Code className="w-6 h-6" /> },
                        { title: "Top-Tier Health", description: "Comprehensive medical, dental, and vision for you and your family.", icon: <Award className="w-6 h-6" /> },
                        { title: "Equity Grants", description: "Ownership in a hyper-growth enterprise technology firm.", icon: <Users className="w-6 h-6" /> }
                    ]}
                    columns={4}
                    background="slate"
                />

                {/* Open Positions Section */}
                <section className="py-20 lg:py-28 bg-white dark:bg-[#16161c]">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="mb-12">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#2b2b4f] dark:text-indigo-400 mb-3">
                                Join Our Team
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 dark:text-white font-display">
                                Current Open Positions
                            </h2>
                        </div>

                        {/* Filter Bar */}
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 mb-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <select
                                    value={filterCategory}
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                    className={selectClass}
                                    aria-label="Filter by category"
                                >
                                    <option value="">All Categories</option>
                                    {categories.categories.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>

                                <select
                                    value={filterJobType}
                                    onChange={(e) => setFilterJobType(e.target.value)}
                                    className={selectClass}
                                    aria-label="Filter by job type"
                                >
                                    <option value="">All Job Types</option>
                                    {categories.jobTypes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>

                                <select
                                    value={filterLocation}
                                    onChange={(e) => setFilterLocation(e.target.value)}
                                    className={selectClass}
                                    aria-label="Filter by location"
                                >
                                    <option value="">All Locations</option>
                                    {categories.locations.map((l) => (
                                        <option key={l} value={l}>{l}</option>
                                    ))}
                                </select>

                                <div className="flex gap-3 flex-shrink-0">
                                    <button
                                        onClick={handleSearch}
                                        className="inline-flex items-center gap-2 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
                                    >
                                        <Search className="w-4 h-4" />
                                        Search
                                    </button>
                                    {hasFilters && (
                                        <button
                                            onClick={handleClear}
                                            className="px-5 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all whitespace-nowrap"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Job Count Indicator */}
                        {!loading && (
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                {jobs.length === 0
                                    ? "No positions found"
                                    : `${jobs.length} position${jobs.length === 1 ? "" : "s"} available`}
                                {hasFilters && " (filtered)"}
                            </p>
                        )}

                        {/* Job Cards */}
                        {loading ? (
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-6 animate-pulse"
                                    >
                                        <div className="flex justify-between">
                                            <div className="flex-1">
                                                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4" />
                                                <div className="flex gap-2">
                                                    <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-28" />
                                                    <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-20" />
                                                    <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-24" />
                                                </div>
                                            </div>
                                            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-xl w-28" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : jobs.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="space-y-4">
                                {jobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
