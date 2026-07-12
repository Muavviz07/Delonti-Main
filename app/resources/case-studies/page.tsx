import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import OverviewSection from "@/components/OverviewSection"
import StatsSection from "@/components/StatsSection"
import SplitContentSection from "@/components/SplitContentSection"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
    title: "Case Studies | Delonti",
    description: "Real-world results from technology deployments across government and enterprise organizations."
}

import { CASE_STUDIES } from "@/lib/data/case-studies"

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <PageHero
                title="Case Studies"
                subtitle="Real-world results from technology deployments across government and enterprise organizations."
                breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Case Studies" }]}
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            />

            <section className="bg-slate-50 dark:bg-slate-950 py-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Case Studies</span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">Client Success Stories</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {CASE_STUDIES.map((study) => (
                            <Link
                                href={study.href}
                                key={study.title}
                                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <Image
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={study.image}
                                        alt={study.title}
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {study.tag}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                                        {study.client}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                                        {study.shortDescription}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.results.slice(0, 2).map((r, i) => (
                                            <span key={i} className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1 rounded-full">
                                                {r.metric} {r.label}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                        Read More <ArrowRight className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <OverviewSection
                title="Track Record"
                heading="Proven Results Across Sectors"
                description="Explore how Delonti has partnered with government agencies and enterprise organizations to deliver measurable outcomes through intelligent infrastructure, RFID tracking, cybersecurity modernization, and data analytics platforms."
                background="white"
            />

            <StatsSection
                stats={[
                    { value: "500", suffix: "+", label: "Projects Delivered" },
                    { value: "95", suffix: "%", label: "Avg. Client Satisfaction" },
                    { value: "40", suffix: "%", label: "Avg. Efficiency Gain" },
                    { value: "0", label: "Failed Implementations" }
                ]}
                background="slate"
            />

            {/*
            <SplitContentSection
                title="Featured Project"
                heading="Proactive Infrastructure Through IoT"
                description="Delonti partnered with a transportation authority to deploy IoT sensors across critical infrastructure systems, enabling real-time monitoring and predictive maintenance that reduced unplanned downtime by 40%."
                listItems={[
                    "IoT sensors deployed across all infrastructure touchpoints",
                    "Real-time monitoring dashboards for operations teams",
                    "Automated alerting and predictive maintenance analytics",
                    "Full integration with existing management systems"
                ]}
                imageSrc="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070"
                imageAlt="IoT Infrastructure Monitoring"
                imagePosition="left"
                background="slate"
            />
            */}

            <CTASection
                heading="Ready to Start Your Success Story?"
                description="Engage our architects to discover what your organization is capable of achieving."
                buttonText="Contact Our Team"
            />

            <Footer />
        </main>
    )
}
