import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronRight, MessageSquare } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const CASE_STUDIES = [
    {
        title: "RFID-Based Asset Tracking for Government Infrastructure",
        client: "State Government Agency",
        tag: "RFID",
        shortDescription: "Improved asset visibility and reduced audit time using an RFID-based tracking platform across multiple facilities.",
        overview: "A state agency managing infrastructure assets across multiple facilities needed improved visibility into equipment, tools, and inventory.",
        challenges: [
            "Limited visibility into asset locations",
            "Manual tracking processes causing inefficiency",
            "Frequent asset misplacement and loss",
            "Time-consuming and inaccurate audits"
        ],
        solution: "Delonti implemented an RFID-based asset tracking platform with RFID tags for all assets, fixed and handheld RFID readers, a centralized tracking dashboard, and integration with existing agency systems.",
        solutionItems: [
            "RFID tags deployed across all asset types",
            "Fixed portal and handheld reader infrastructure",
            "Centralized real-time tracking dashboard",
            "Full integration with existing agency systems"
        ],
        results: [
            { metric: "95%", label: "Improvement in Asset Visibility" },
            { metric: "60%", label: "Reduction in Audit Time" },
            { metric: "↓", label: "Significant Reduction in Asset Loss" },
            { metric: "↑", label: "Improved Operational Efficiency" }
        ],
        valueDelivered: "Real-time asset tracking and centralized visibility improved accountability and operational performance across all facilities.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072",
        href: "/resources/case-studies/rfid-asset-tracking-government"
    },
    {
        title: "IoT-Based Smart Infrastructure Monitoring for Transportation Agency",
        client: "Transportation Authority",
        tag: "IoT",
        shortDescription: "Enabled proactive infrastructure management and reduced unplanned downtime using IoT monitoring and predictive analytics.",
        overview: "A transportation authority required real-time monitoring of infrastructure systems and environmental conditions across its network.",
        challenges: [
            "Lack of real-time monitoring capabilities",
            "Delayed detection of infrastructure issues",
            "High reactive maintenance costs"
        ],
        solution: "Delonti deployed an IoT-based monitoring platform with sensors across infrastructure systems, real-time dashboards, automated alerts, and predictive maintenance analytics.",
        solutionItems: [
            "IoT sensors deployed across all infrastructure systems",
            "Real-time monitoring and operations dashboards",
            "Automated alerting for anomaly detection",
            "Predictive maintenance analytics engine"
        ],
        results: [
            { metric: "40%", label: "Reduction in Unplanned Downtime" },
            { metric: "↑", label: "Faster Response to Infrastructure Issues" },
            { metric: "↑", label: "Improved Infrastructure Reliability" }
        ],
        valueDelivered: "Enabled proactive infrastructure management and significantly reduced operational risks and maintenance costs.",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070",
        href: "/resources/case-studies/iot-infrastructure-monitoring-transportation"
    },
    {
        title: "Cybersecurity Modernization for Public Sector Organization",
        client: "Government Organization",
        tag: "Cybersecurity",
        shortDescription: "Strengthened infrastructure security and enhanced compliance readiness through a Zero Trust cybersecurity framework.",
        overview: "A government organization required modernization of its cybersecurity infrastructure to protect critical systems against growing threats and meet compliance requirements.",
        challenges: [
            "Legacy security systems with known vulnerabilities",
            "Increasing volume and sophistication of cyber threats",
            "Strict regulatory compliance requirements"
        ],
        solution: "Delonti implemented a Zero Trust cybersecurity framework with identity-based access controls, network segmentation, continuous monitoring, and regular security assessments.",
        solutionItems: [
            "Zero Trust architecture design and implementation",
            "Identity-based access controls and MFA enforcement",
            "Network segmentation and micro-perimeter controls",
            "Continuous monitoring and security assessments"
        ],
        results: [
            { metric: "↑", label: "Improved Security Posture" },
            { metric: "↓", label: "Reduced Risk of Unauthorized Access" },
            { metric: "↑", label: "Enhanced Compliance Readiness" }
        ],
        valueDelivered: "Strengthened infrastructure security while enabling modern digital operations and maintaining full regulatory compliance.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
        href: "/resources/case-studies/cybersecurity-modernization-public-sector"
    },
    {
        title: "Data & Analytics Platform for Operational Intelligence",
        client: "Enterprise Organization",
        tag: "Data & Analytics",
        shortDescription: "Enabled data-driven operations and improved strategic planning through a centralized analytics and intelligence platform.",
        overview: "An enterprise organization required better visibility into operational performance across siloed systems to support faster decision-making.",
        challenges: [
            "Data siloed across multiple disconnected systems",
            "Limited reporting capabilities for leadership",
            "Slow decision-making due to lack of unified data"
        ],
        solution: "Delonti developed a centralized data and analytics platform with data integration across all systems, real-time dashboards, and predictive analytics capabilities.",
        solutionItems: [
            "Unified data integration across all enterprise systems",
            "Real-time operational dashboards for leadership",
            "Predictive analytics and trend identification",
            "Automated reporting and alerting workflows"
        ],
        results: [
            { metric: "↑", label: "Faster Decision-Making" },
            { metric: "↑", label: "Improved Operational Efficiency" },
            { metric: "↑", label: "Increased Visibility Across Operations" }
        ],
        valueDelivered: "Enabled data-driven operations and significantly improved strategic planning and organizational responsiveness.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        href: "/resources/case-studies/data-analytics-operational-intelligence"
    },
    {
        title: "Smart Homeless Services Kiosk for City Government",
        client: "City Government",
        tag: "Smart City",
        shortDescription: "Enhanced community support and improved social service delivery through an interactive smart kiosk platform.",
        overview: "A city government sought to improve access to services for individuals experiencing homelessness through a scalable technology solution.",
        challenges: [
            "Limited awareness of available services among those in need",
            "Fragmented and disconnected service delivery systems",
            "Difficulty connecting individuals to the right resources"
        ],
        solution: "Delonti deployed a Smart Homeless Services Kiosk platform with interactive touchscreen kiosks, real-time service information, integration with local service providers, and multi-language support.",
        solutionItems: [
            "Interactive touchscreen kiosks deployed citywide",
            "Real-time integration with local service providers",
            "Multi-language support for diverse populations",
            "Analytics dashboard for city planning and reporting"
        ],
        results: [
            { metric: "↑", label: "Increased Access to Services" },
            { metric: "↑", label: "Improved Service Coordination" },
            { metric: "↑", label: "Better Data Insights for City Planning" }
        ],
        valueDelivered: "Enhanced community support infrastructure and significantly improved social service delivery across the city.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144",
        href: "/resources/case-studies/smart-homeless-services-kiosk"
    }
]

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

                        <div className="mt-10 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
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
                                    Interested in a similar solution?
                                </h3>

                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    Contact our team to discuss your specific requirements and how we
                                    can deliver similar outcomes for your organization.
                                </p>

                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest py-3 rounded-xl transition-all duration-200 mb-3 group"
                                >
                                    Contact Delonti
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
