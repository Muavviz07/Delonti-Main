"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Tag, Truck, ShieldCheck, Cloud, BarChart3, Users } from "lucide-react";


function HorizontalScrollSection({
    label,
    heading,
    description,
    features,
}: {
    label: string
    heading: string
    description: string
    features: { icon: React.ReactNode; title: string; description: string }[]
}) {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: containerRef })

    const CARD_WIDTH = 420
    const CARD_GAP = 24
    const DESC_PANEL_WIDTH = 380
    const PADDING = 128

    // Total width = description panel + all cards + gaps
    const totalScrollWidth =
        DESC_PANEL_WIDTH +
        CARD_GAP +
        features.length * CARD_WIDTH +
        features.length * CARD_GAP

    const visibleWidth =
        typeof window !== "undefined"
            ? window.innerWidth - PADDING
            : 900

    const xRange = -(totalScrollWidth - visibleWidth)

    const rawX = useTransform(scrollYProgress, [0.05, 0.95], [0, xRange])
    const x = useSpring(rawX, {
        stiffness: 400,
        damping: 60,
        restDelta: 0.001,
        mass: 0.5,
    })

    return (
        <div
            ref={containerRef}
            style={{ height: `${features.length * 80}vh` }}
            className="relative"
        >
            <div className="sticky top-0 h-screen section-dark overflow-hidden flex flex-col justify-center px-8 lg:px-16">

                {/* Top heading — always visible */}
                <div className="mb-10 lg:mb-14">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
                        {label}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white font-display tracking-wide">
                        {heading}
                    </h2>
                </div>

                {/* Desktop: everything scrolls horizontally together */}
                <div className="hidden lg:block overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex gap-6 will-change-transform"
                    >
                        {/* Description panel as first item */}
                        <div className="flex-shrink-0 w-[380px] flex flex-col justify-center pr-8 border-r border-white/10 mr-4">
                            <p className="text-white text-lg font-light leading-relaxed">
                                {description}
                            </p>
                            <div className="mt-10 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    {features.map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-slate-500"
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-slate-400 uppercase tracking-widest">
                                    Scroll to explore
                                </span>
                            </div>
                        </div>

                        {/* Cards */}
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[420px] bg-white/5 border border-white/10
                           rounded-2xl p-10 hover:bg-white/[0.08] hover:border-white/20
                           transition-all duration-300 group"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl bg-white/10 border border-white/10
                             flex items-center justify-center text-white mb-6
                             group-hover:bg-primary group-hover:border-primary
                             transition-all duration-300"
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile: normal horizontal swipe */}
                <div className="lg:hidden w-full overflow-x-auto scrollbar-hide pb-4">
                    <div className="flex gap-4 w-max">
                        {/* Description as first mobile item */}
                        <div className="flex-shrink-0 w-[280px] flex flex-col justify-center">
                            <p className="text-white text-sm font-light leading-relaxed">
                                {description}
                            </p>
                        </div>
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[280px] bg-white/5 border border-white/10
                           rounded-2xl p-6"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/10
                             flex items-center justify-center text-white mb-4"
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function SmbPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="SMB Solutions"
                    subtitle="Affordable Smart Technology for Growing Businesses. Fast to deploy, easy to manage, and built to grow with you."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070"
                />

                <OverviewSection
                    title="Who We Serve"
                    heading="Built for Growing Businesses"
                    description={
                        "Small and mid-sized businesses need cost-effective technology solutions that deliver fast results. Delonti provides scalable solutions that improve visibility, security, and operational efficiency without the complexity or cost of enterprise platforms. Whether you run a retail chain, a logistics fleet, or a growing healthcare clinic, our solutions are designed to deliver measurable ROI from day one."
                    }
                    background="white"
                />

                <HorizontalScrollSection
                    label="Our Solutions"
                    heading="Everything Your Business Needs"
                    description="Six integrated technology solutions built specifically for small and medium businesses — affordable, fast to deploy, and designed to deliver measurable results from day one."
                    features={[
                        {
                            icon: <Tag className="w-6 h-6" />,
                            title: "Asset Tracking & Inventory",
                            description: "Real-time inventory visibility and warehouse asset tracking using RFID and IoT — no manual counts, no blind spots.",
                        },
                        {
                            icon: <Truck className="w-6 h-6" />,
                            title: "Fleet & Vehicle Tracking",
                            description: "GPS-powered vehicle tracking with driver monitoring, route optimization, and fuel usage reporting.",
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6" />,
                            title: "Cybersecurity Essentials",
                            description: "Affordable security packages covering risk assessments, endpoint protection, network security, and incident readiness.",
                        },
                        {
                            icon: <Cloud className="w-6 h-6" />,
                            title: "Cloud & IT Modernization",
                            description: "Cloud migration, backup and recovery, office infrastructure upgrades, and fully managed IT services.",
                        },
                        {
                            icon: <BarChart3 className="w-6 h-6" />,
                            title: "Data & Business Insights",
                            description: "Operational dashboards, inventory analytics, sales reporting, and automated business intelligence built for SMBs.",
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: "Technical Staffing",
                            description: "On-demand software developers, DevOps engineers, IT admins, and short-term project teams — exactly when you need them.",
                        },
                    ]}
                />

                <SplitContentSection
                    title="Our Approach"
                    heading="Simple, Fast, and Affordable"
                    description={
                        "We know SMBs don't have the budget or bandwidth for lengthy implementations. Every Delonti SMB solution is designed for rapid deployment, minimal disruption, and immediate impact. Our team works alongside yours to ensure technology works for your business — not the other way around."
                    }
                    listItems={[
                        "Deployment timelines measured in weeks, not months",
                        "Flat-rate pricing with no hidden enterprise fees",
                        "Dedicated onboarding support and training included",
                        "Scalable infrastructure that grows as your business grows"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                    imageAlt="SMB team collaboration"
                    imagePosition="right"
                    background="white"
                />

                <IndustryUseCases
                    title="Industries"
                    heading="Sectors We Serve"
                    background="slate"
                    useCases={[
                        {
                            title: "Retail & Warehousing",
                            description:
                                "Inventory accuracy, loss prevention, and stock monitoring across single or multi-location retail operations.",
                            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
                            href: "/private/smb/asset-tracking"
                        },
                        {
                            title: "Logistics & Field Services",
                            description:
                                "Fleet visibility, route efficiency, and driver accountability for logistics companies and field service teams.",
                            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
                            href: "/private/smb/fleet-tracking"
                        },
                        {
                            title: "Healthcare Clinics",
                            description:
                                "Equipment tracking, cybersecurity compliance, and secure IT infrastructure for clinics and medical service providers.",
                            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
                            href: "/private/smb/cybersecurity"
                        }
                    ]}
                />

                <StatsSection
                    background="white"
                    stats={[
                        { value: "3", suffix: "x", label: "Faster Deployment vs Enterprise" },
                        { value: "40", suffix: "%", label: "Average Cost Savings" },
                        { value: "99", suffix: "%", label: "Client Satisfaction Rate" },
                        { value: "30", suffix: "+", label: "SMB Clients Served" }
                    ]}
                />

                <CTASection
                    heading="Ready to Modernize Your Business?"
                    description="Get started with a free technology assessment. No commitment, no complexity — just clarity."
                    buttonText="Book a Free Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
