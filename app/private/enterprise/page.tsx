"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import StatsSection from "@/components/StatsSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTASection from "@/components/CTASection";
import { ScanLine, Factory, ShieldAlert, BrainCircuit, CloudCog, Network, BriefcaseBusiness } from "lucide-react";


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

export default function EnterprisePage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Solutions"
                    subtitle="Enterprise Platforms for Visibility, Security, and Operational Intelligence."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                />

                <OverviewSection
                    title="Who We Serve"
                    heading="Built for Complex, Multi-Site Operations"
                    description={
                        "Large organizations require integrated technology platforms that support complex operations across multiple locations. Delonti provides enterprise-grade solutions that combine RFID, IoT, cybersecurity, and advanced analytics to deliver real-time operational intelligence. From global supply chains to smart industrial facilities, we architect the infrastructure that powers enterprise performance."
                    }
                    background="white"
                />

                <HorizontalScrollSection
                    label="Our Platforms"
                    heading="Enterprise Technology Suite"
                    description="Seven enterprise-grade technology platforms combining RFID, IoT, cybersecurity, and advanced analytics — built to operate at global scale across multiple sites and systems."
                    features={[
                        {
                            icon: <ScanLine className="w-6 h-6" />,
                            title: "Asset Visibility",
                            description:
                                "Large-scale RFID and IoT platforms for multi-site inventory, supply chain traceability, and asset lifecycle management."
                        },
                        {
                            icon: <Factory className="w-6 h-6" />,
                            title: "Industrial IoT",
                            description:
                                "Smart facilities, predictive maintenance, and industrial monitoring for energy, manufacturing, and transportation."
                        },
                        {
                            icon: <ShieldAlert className="w-6 h-6" />,
                            title: "Enterprise Cybersecurity",
                            description:
                                "Zero Trust architecture, compliance frameworks, and risk governance for finance, healthcare, and technology sectors."
                        },
                        {
                            icon: <BrainCircuit className="w-6 h-6" />,
                            title: "Data & AI Platforms",
                            description:
                                "Enterprise data platforms, AI automation, and predictive analytics that convert operational data into intelligence."
                        },
                        {
                            icon: <CloudCog className="w-6 h-6" />,
                            title: "Cloud & DevOps",
                            description:
                                "Multi-cloud infrastructure, DevOps pipelines, cloud security, and legacy system modernization at scale."
                        },
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Systems Integration",
                            description:
                                "ERP integration, IoT platform connectivity, and enterprise system interoperability for unified operations."
                        },
                        {
                            icon: <BriefcaseBusiness className="w-6 h-6" />,
                            title: "Workforce Solutions",
                            description:
                                "Engineering teams, IT transformation specialists, managed technical services, and offshore development programs."
                        }
                    ]}
                />

                <SplitContentSection
                    title="Our Approach"
                    heading="Integrated Platforms, Not Isolated Tools"
                    description={
                        "Enterprise transformation fails when technology is deployed in silos. Delonti architects integrated platforms where RFID, IoT, cybersecurity, and data systems share a common data layer — giving your operations a single source of truth across every site, system, and stakeholder."
                    }
                    listItems={[
                        "Architecture-first approach — designed for your scale from day one",
                        "Native integration with SAP, Oracle, Azure, AWS, and major ERPs",
                        "Dedicated enterprise delivery team with a single point of accountability",
                        "Ongoing managed services, SLA-backed support, and continuous optimization"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                    imageAlt="Enterprise technology infrastructure"
                    imagePosition="right"
                    background="white"
                />

                <StatsSection
                    background="slate"
                    stats={[
                        { value: "500", suffix: "+", label: "Enterprise Deployments" },
                        { value: "50", suffix: "M+", label: "Assets Tracked Globally" },
                        { value: "99.9", suffix: "%", label: "Platform Uptime SLA" },
                        { value: "10", suffix: "+", label: "Years Enterprise Experience" }
                    ]}
                />

                <IndustryUseCases
                    title="Industries"
                    heading="Enterprise Sectors We Serve"
                    background="white"
                    useCases={[
                        {
                            title: "Manufacturing",
                            description:
                                "Asset visibility, predictive maintenance, and production floor intelligence for global manufacturing operations.",
                            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
                            href: "/private/enterprise/asset-visibility"
                        },
                        {
                            title: "Logistics & Transportation",
                            description:
                                "End-to-end supply chain traceability, fleet intelligence, and warehouse automation for logistics enterprises.",
                            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
                            href: "/private/enterprise/industrial-iot"
                        },
                        {
                            title: "Financial Services",
                            description:
                                "Zero Trust cybersecurity, compliance frameworks, and secure cloud infrastructure for banks and financial institutions.",
                            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
                            href: "/private/enterprise/cybersecurity"
                        }
                    ]}
                />

                <CTASection
                    heading="Design Your Enterprise Platform"
                    description="Engage our enterprise architects for a tailored technology strategy and implementation roadmap."
                    buttonText="Schedule a Strategy Call"
                />
            </main>
            <Footer />
        </>
    );
}
