import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight, MessageSquare, Cpu } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CASE_STUDIES } from "@/lib/data/case-studies"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const study = CASE_STUDIES.find(s => s.href.endsWith(slug))
    return {
        title: study ? `${study.title} | Case Studies — Delonti` : 'Case Study | Delonti'
    }
}

export async function generateStaticParams() {
    return CASE_STUDIES.map(s => ({
        slug: s.href.split('/').pop() as string
    }))
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params
    const study = CASE_STUDIES.find(s => s.href.endsWith(slug))

    if (!study) {
        notFound()
    }

    const relatedStudies = CASE_STUDIES.filter(s => s.href !== study.href).slice(0, 2)

    return (
        <main className="min-h-screen bg-white dark:bg-[#0f0f14]">
            <Header />

            <div className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
                <Image
                    fill
                    className="object-cover"
                    src={study.image}
                    alt={study.title}
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-[#0f0f14]/50 to-transparent"></div>

                <div className="absolute bottom-0 w-full">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                        <div className="text-slate-400 text-sm flex items-center gap-2 flex-wrap mb-4">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
                            <span>/</span>
                            <Link href="/resources/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                            <span>/</span>
                            <span className="text-slate-200">{study.title}</span>
                        </div>

                        <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            {study.tag}
                        </span>

                        <div className="text-slate-300 text-sm mt-4 font-semibold uppercase tracking-widest">
                            {study.client}
                        </div>

                        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
                            {study.title}
                        </h1>
                    </div>
                </div>
            </div>

            <section className="py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-8">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Overview</div>
                            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Background</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {study.overview}
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Challenge</div>
                            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">What We Were Solving</h2>
                            <div className="space-y-3">
                                {study.challenges.map((challenge, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2.5"></div>
                                        <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{challenge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Solution</div>
                            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">How Delonti Delivered</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                {study.solution}
                            </p>
                            <div className="space-y-4">
                                {study.solutionItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* @ts-ignore */}
                        {study.keyCapabilities && (
                            <div className="mt-12">
                                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Key Capabilities</div>
                                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">Platform Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* @ts-ignore */}
                                    {study.keyCapabilities.map((cap, i) => (
                                        <div key={i} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{cap.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* @ts-ignore */}
                        {study.technologiesUsed && (
                            <div className="mt-12">
                                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Technologies Used</div>
                                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">Core Infrastructure</h2>
                                <div className="flex flex-wrap gap-3">
                                    {/* @ts-ignore */}
                                    {study.technologiesUsed.map((tech, i) => (
                                        <div key={i} className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-primary" />
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-12 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
                            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Value Delivered</div>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                {study.valueDelivered}
                            </p>
                        </div>

                        <Link
                            href="/resources/case-studies"
                            className="inline-flex items-center gap-2 text-primary font-bold tracking-wider hover:gap-3 transition-all duration-200 mt-12"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                        </Link>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 h-fit">
                        {/* Results Card — redesigned */}
                        <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden border border-white/10">

                            {/* Card header */}
                            <div className="bg-primary px-6 py-4">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-1">
                                    Measured Outcomes
                                </p>
                                <h3 className="font-display text-xl font-bold text-white">
                                    Results Delivered
                                </h3>
                            </div>

                            {/* Results list */}
                            <div className="p-6 space-y-4">
                                {study.results.map((result, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 bg-white/5 rounded-xl px-4 py-4 
                                           border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        {/* Metric bubble */}
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary 
                                                flex items-center justify-center shadow-lg">
                                            <span className="text-sm font-black text-white font-display leading-none text-center px-1">
                                                {result.metric}
                                            </span>
                                        </div>

                                        {/* Label */}
                                        <p className="text-sm font-semibold text-white leading-snug">
                                            {result.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom note */}
                            <div className="px-6 pb-6">
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Results based on client-reported outcomes following full deployment.
                                </p>
                            </div>
                        </div>

                        {/* CTA Card — redesigned */}
                        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm mt-6">

                            {/* Top accent bar */}
                            <div className="h-1.5 w-full bg-primary" />

                            <div className="bg-white dark:bg-slate-900 p-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                </div>

                                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {/* @ts-ignore */}
                                    {study.cta?.text || "Interested in a similar solution?"}
                                </h3>

                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    Contact our team to discuss your specific requirements and how we
                                    can deliver similar outcomes for your organization.
                                </p>

                                <Link
                                    // @ts-ignore
                                    href={study.cta?.link || "/contact"}
                                    className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest py-3 rounded-xl transition-all duration-200 mb-3 group"
                                >
                                    {/* @ts-ignore */}
                                    {study.cta?.buttonText || "Contact Delonti"}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                </Link>

                                <Link
                                    href="/private"
                                    className="flex items-center justify-center w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm uppercase tracking-widest py-3 rounded-xl transition-all duration-200 border border-gray-100 dark:border-white/10"
                                >
                                    Explore Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 py-20 border-t border-gray-100 dark:border-white/5">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-8">More Case Studies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedStudies.map((related) => (
                            <Link
                                key={related.title}
                                href={related.href}
                                className="flex gap-5 items-center bg-white dark:bg-slate-950 rounded-2xl p-4 border border-gray-100 dark:border-white/10 hover:shadow-lg hover:border-primary/20 transition-all group"
                            >
                                <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={related.image}
                                        alt={related.title}
                                    />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                        {related.tag}
                                    </div>
                                    <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                        {related.title}
                                    </h4>
                                    <div className="text-sm font-semibold text-slate-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                                        <ArrowLeft className="w-3 h-3 rotate-180" /> Read More
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
