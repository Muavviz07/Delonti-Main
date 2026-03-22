"use client"

import { useState, useEffect } from "react"
import { Briefcase, PenLine, Newspaper, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboardPage() {
    const router = useRouter()
    const [counts, setCounts] = useState({ jobs: 0, blogs: 0, articles: 0 })

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [jobsRes, blogsRes, articlesRes] = await Promise.all([
                    fetch("/api/jobs"), fetch("/api/blogs"), fetch("/api/articles")
                ])
                const [jobs, blogs, articles] = await Promise.all([
                    jobsRes.json(), blogsRes.json(), articlesRes.json()
                ])
                setCounts({
                    jobs: Array.isArray(jobs) ? jobs.length : (jobs?.jobs?.length || 0),
                    blogs: Array.isArray(blogs) ? blogs.length : 0,
                    articles: Array.isArray(articles) ? articles.length : 0
                })
            } catch (e) { console.error("Failed to fetch counts", e) }
        }
        fetchCounts()
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
            {/* Admin Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 sticky top-0 z-40">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/logo-dark(blue-text).png" alt="Delonti" width={150} height={38} className="h-8 w-auto object-contain" />
                        <Image src="/logo-light.png" alt="Delonti" width={120} height={30} className="h-7 w-auto object-contain hidden dark:block" />
                        <div>
                            <h1 className="text-base font-bold text-slate-900 dark:text-white">Delonti Admin</h1>
                            <p className="text-xs text-slate-400">Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={async () => { await fetch('/api/admin/logout', { method: 'POST' }); router.push('/admin/login') }} className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 mb-12">Select a section to manage.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Careers Card */}
                    <Link href="/admin/careers" className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            <Briefcase className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Careers</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Manage job postings and filter options.</p>

                        <div className="mt-6 inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                            {counts.jobs} Active Jobs
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all">
                            Manage Careers <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                    </Link>

                    {/* Blogs Card */}
                    <Link href="/admin/blogs" className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            <PenLine className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Blog Posts</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Write and manage engineering blog content.</p>

                        <div className="mt-6 inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                            {counts.blogs} Posts
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all">
                            Manage Blogs <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                    </Link>

                    {/* Articles Card */}
                    <Link href="/admin/articles" className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer block">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                            <Newspaper className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Public Sector Articles</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Manage public sector insights and articles.</p>

                        <div className="mt-6 inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold px-3 py-1 rounded-full">
                            {counts.articles} Articles
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all">
                            Manage Articles <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
