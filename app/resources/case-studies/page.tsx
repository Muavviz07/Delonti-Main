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

            <section className="bg-white dark:bg-slate-950 py-24">
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
                                className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
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

            <CTASection
                heading="Ready to Start Your Success Story?"
                description="Engage our architects to discover what your organization is capable of achieving."
                buttonText="Contact Our Team"
            />

            <Footer />
        </main>
    )
}
