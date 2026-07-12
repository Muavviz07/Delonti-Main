"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tag, Cpu, Lock, BarChart3, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import OverviewSection from "@/components/OverviewSection"
import FeatureGrid from "@/components/FeatureGrid"
import CTASection from "@/components/CTASection"

export interface BlogPost {
    id: string
    slug: string
    title: string
    category: string
    date: string
    description: string
    image: string
    content: string[]
    isPublished: boolean
    createdAt: string
}

export function timeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) return diffYears === 1 ? "1 year ago" : `${diffYears} years ago`;
    if (diffMonths > 0) return diffMonths === 1 ? "1 month ago" : `${diffMonths} months ago`;
    if (diffDays > 0) return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
    if (diffHours > 0) return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
    if (diffMinutes > 0) return diffMinutes === 1 ? "1 minute ago" : `${diffMinutes} minutes ago`;
    return "just now";
}

const CATEGORIES = [
    {
        icon: <Tag className="w-8 h-8" />,
        title: "RFID & Asset Tracking",
        description: "Real-world asset visibility and inventory management insights."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "IoT & Smart Infrastructure",
        description: "How connected sensors are transforming infrastructure monitoring."
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Cybersecurity & Risk Management",
        description: "Zero Trust strategies and security frameworks."
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Data & Analytics",
        description: "Turning raw operational data into business intelligence."
    }
]

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch("/api/blogs?published=true")
                if (res.ok) {
                    const data = await res.json()
                    setBlogs(data)
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Header />

            <PageHero
                title="Engineering Insights"
                subtitle="Technical deep-dives, architectural blueprints, and industry analysis from Delonti's core team."
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "Blogs" }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070"
            />

            <OverviewSection
                title="Knowledge Base"
                heading="Exploring the Edge of Infrastructure"
                description="Read our latest publications on distributed systems, Zero-Trust architectures, and the physics of massive-scale IoT deployments."
                background="white"
            />

            <FeatureGrid
                title="Categories"
                heading="Topics We Cover"
                features={CATEGORIES}
                columns={4}
                background="slate"
            />

            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="animate-pulse flex flex-col space-y-4">
                                    <div className="bg-slate-200 dark:bg-slate-800 h-64 w-full rounded-2xl"></div>
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4"></div>
                                    <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
                                </div>
                            ))}
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/resources/blogs/${blog.slug}`}
                                    className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={blog.image || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070"}
                                            alt={blog.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
                                            {blog.date}
                                            <span className="text-xs">{timeAgo(blog.createdAt)}</span>
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 flex-grow">
                                            {blog.description}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-white/10">
                            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">No insights published yet</h3>
                            <p className="text-slate-600 dark:text-slate-400">Check back soon for new articles and deep-dives.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection
                heading="Subscribe to our Engineering Newsletter"
                description="Receive monthly architectural deep-dives directly in your inbox."
                isNewsletter={true}
            />

            <Footer />
        </div>
    )
}
