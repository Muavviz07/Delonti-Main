"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import OverviewSection from "@/components/OverviewSection"
import CTASection from "@/components/CTASection"

export interface Article {
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
    "All",
    "Government Infrastructure",
    "Smart Cities",
    "Asset Management",
    "Cybersecurity for Government",
    "Infrastructure Data & Analytics"
]

export default function InsightsPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        async function fetchArticles() {
            try {
                setLoading(true)
                const url = selectedCategory === "All"
                    ? "/api/articles?published=true"
                    : `/api/articles?published=true&category=${encodeURIComponent(selectedCategory)}`

                const res = await fetch(url)
                if (res.ok) {
                    const data = await res.json()
                    setArticles(data)
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchArticles()
    }, [selectedCategory])

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Header />

            <PageHero
                title="Public Sector Insights"
                subtitle="Research, analysis, and technology perspectives for government agencies and public infrastructure leaders."
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "Public Sector Insights" }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070"
            />

            <OverviewSection
                title="Knowledge Base"
                heading="Intelligence for the Public Sector"
                description="Practical insights on how government agencies are modernizing infrastructure, improving asset management, strengthening cybersecurity, and building data-driven operations."
                background="white"
            />

            <div className="bg-slate-50 dark:bg-slate-900 py-6 border-b border-gray-100 dark:border-white/10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-white/10 hover:border-primary cursor-pointer"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-slate-50 dark:bg-slate-900 py-12 pb-24 border-t border-gray-100 dark:border-white/10">
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
                    ) : articles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/resources/insights/${article.slug}`}
                                    className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={article.image || "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070"}
                                            alt={article.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
                                            {article.date}
                                            <span className="text-xs">{timeAgo(article.createdAt)}</span>
                                        </p>
                                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 flex-grow">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 gap-2 transition-all mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-white/10">
                            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">No articles found</h3>
                            <p className="text-slate-600 dark:text-slate-400">Try selecting a different category or check back soon.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection
                heading="Stay Ahead of the Curve"
                description="Subscribe to receive the latest public sector technology insights directly in your inbox."
                buttonText="Subscribe to Insights"
                buttonHref="#subscribe"
            />

            <Footer />
        </div>
    )
}
