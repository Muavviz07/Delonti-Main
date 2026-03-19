import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"
import { readBlogs } from "@/lib/jobs"

export async function generateStaticParams() {
    return readBlogs()
        .filter(b => b.isPublished)
        .map(b => ({ slug: b.slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = readBlogs().find(b => b.slug === slug)
    return { title: post ? `${post.title} | Delonti Blog` : 'Blog | Delonti' }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const blogs = readBlogs().filter(b => b.isPublished)
    const post = blogs.find(b => b.slug === slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = blogs
        .filter(b => b.id !== post.id)
        .slice(0, 3)

    const readTime = Math.ceil(post.content.join(' ').split(' ').length / 200)

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Header />

            <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    fill
                    className="object-cover"
                    src={post.image || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070"}
                    alt={post.title}
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-[#0f0f14]/60 to-transparent"></div>

                <div className="absolute bottom-0 w-full">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                        <div className="text-slate-400 text-sm flex items-center gap-2 flex-wrap">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/resources/blogs" className="hover:text-white transition-colors">Blogs</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-slate-200">{post.title}</span>
                        </div>

                        <div className="mt-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit">
                            {post.category}
                        </div>

                        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
                            {post.title}
                        </h1>

                        <div className="mt-6 flex items-center gap-6">
                            <div className="text-slate-300 text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="text-slate-300 text-sm flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {readTime} min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white dark:bg-[#0f0f14]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT - Article Body */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {post.content.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className={`text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 ${i === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:font-display' : ''}`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Share this article</h4>
                            <Link
                                href="/resources/blogs"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Blog
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT - Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 h-fit">

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Article Details</h4>

                            <div className="border-b border-gray-100 dark:border-white/10 py-3">
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Category</div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{post.category}</div>
                            </div>
                            <div className="border-b border-gray-100 dark:border-white/10 py-3">
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Published</div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{post.date}</div>
                            </div>
                            <div className="py-3">
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Reading Time</div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{readTime} min read</div>
                            </div>
                        </div>

                        {relatedPosts.length > 0 && (
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">More Insights</h4>

                                <div className="flex flex-col">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.id}
                                            href={`/resources/blogs/${relatedPost.slug}`}
                                            className="flex items-start gap-3 group py-3 border-b border-gray-100 dark:border-white/10 last:border-0 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg px-2 -mx-2 transition-colors"
                                        >
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200 dark:border-white/10">
                                                <Image
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    src={relatedPost.image || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070"}
                                                    alt={relatedPost.title}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h5 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                                                    {relatedPost.title}
                                                </h5>
                                                <p className="text-xs text-slate-400 mt-1">{relatedPost.category}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            <CTASection
                heading="Subscribe to our Engineering Newsletter"
                description="Receive monthly architectural deep-dives directly in your inbox."
                buttonText="Join the Mailing List"
                buttonHref="#subscribe"
            />

            <Footer />
        </div>
    )
}
