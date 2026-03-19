import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import StatsSection from "@/components/StatsSection";
import SplitContentSection from "@/components/SplitContentSection";
import FeatureGrid from "@/components/FeatureGrid";
import TeamSection from "@/components/TeamSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTASection from "@/components/CTASection";
import { Cpu, ShieldAlert, Wifi, Globe, ShieldCheck, Lock, ClipboardCheck, Lightbulb } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Delonti Enterprise",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="About Delonti"
                    subtitle="Architecting resilient infrastructure for the modern enterprise and government."
                    breadcrumbs={[{ label: "About" }]}
                    backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Company Overview"
                    heading="Secure Intelligent Infrastructure"
                    description={
                        <>
                            <p className="mb-4">
                                Founded in 1998, Delonti delivers secure intelligent infrastructure solutions that help organizations gain real-time visibility, operational intelligence, and stronger security across critical systems.
                            </p>
                            <p>
                                We integrate RFID, IoT, cybersecurity, and data platforms to build scalable solutions for public sector and private sector organizations. From infrastructure monitoring and asset tracking to digital transformation and cybersecurity, Delonti provides end-to-end technology solutions designed to improve operational efficiency and decision-making.
                            </p>
                        </>
                    }
                    background="white"
                />

                <StatsSection
                    stats={[
                        { value: "1998", label: "Year Founded" },
                        { value: "500", suffix: "+", label: "Projects Delivered" },
                        { value: "99.9", suffix: "%", label: "Uptime Guaranteed" },
                        { value: "50", suffix: "M+", label: "Assets Tracked" }
                    ]}
                    background="slate"
                />

                <SplitContentSection
                    title="Vision"
                    heading="Complete Visibility. Total Security."
                    description="To enable organizations to operate with complete visibility, security, and intelligence across their infrastructure and operations. We envision a future where technology seamlessly integrates with physical infrastructure to create smarter, safer, and more efficient organizations."
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    imageAlt="Global Technology Infrastructure"
                    imagePosition="left"
                    background="white"
                />

                <OverviewSection
                    title="Mission"
                    heading="Built to Deliver. Designed to Last."
                    description={
                        <p>
                            To deliver secure, scalable technology solutions that integrate RFID, IoT, cybersecurity, and data platforms to improve operational visibility, infrastructure performance, and decision-making for public and private sector organizations.
                        </p>
                    }
                    background="slate"
                />

                <FeatureGrid
                    title="Capabilities"
                    heading="What We Do"
                    features={[
                        { title: "RFID & Asset Tracking", description: "RFID-based asset and logistics tracking for real-time visibility across facilities and supply chains.", icon: <Wifi className="w-6 h-6" /> },
                        { title: "IoT & Smart Infrastructure", description: "Smart infrastructure and IoT monitoring platforms that provide continuous operational insight and predictive intelligence.", icon: <Cpu className="w-6 h-6" /> },
                        { title: "Cybersecurity & Zero Trust", description: "Cybersecurity and Zero Trust architectures protecting critical infrastructure and ensuring compliance.", icon: <ShieldAlert className="w-6 h-6" /> },
                        { title: "Data & Analytics", description: "Data analytics and operational intelligence platforms that transform raw data into actionable insights.", icon: <Globe className="w-6 h-6" /> }
                    ]}
                    columns={4}
                    background="white"
                />

                <FeatureGrid
                    title="Our Values"
                    heading="What We Stand For"
                    features={[
                        {
                            icon: <ShieldCheck className="w-6 h-6" />,
                            title: "Trust",
                            description: "We build lasting relationships through transparency, reliability, and consistent delivery on our commitments."
                        },
                        {
                            icon: <Lock className="w-6 h-6" />,
                            title: "Security",
                            description: "Security is not an afterthought — it is foundational to every solution we design and deliver."
                        },
                        {
                            icon: <ClipboardCheck className="w-6 h-6" />,
                            title: "Accountability",
                            description: "We take ownership of outcomes and hold ourselves to the highest standards of performance and integrity."
                        },
                        {
                            icon: <Lightbulb className="w-6 h-6" />,
                            title: "Innovation",
                            description: "We continuously push the boundaries of what technology can do for our clients and their communities."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TeamSection
                    title="Leadership"
                    heading="Guided by Experience"
                    description="Our executive team brings decades of experience leading massive digital transformations across the DoD and Fortune 500."
                    members={[
                        {
                            name: "Name 1",
                            role: "Role 1",
                            bio: "Bio description 1 goes here.",
                            image: "/avatar.svg",
                            socials: { linkedin: "#" }
                        },
                        {
                            name: "Name 2",
                            role: "Role 2",
                            bio: "Bio description 2 goes here.",
                            image: "/avatar.svg",
                            socials: { linkedin: "#" }
                        },
                        {
                            name: "Name 3",
                            role: "Role 3",
                            bio: "Bio description 3 goes here.",
                            image: "/avatar.svg",
                            socials: { linkedin: "#" }
                        }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Sectors"
                    heading="Who We Serve"
                    useCases={[
                        { title: "Federal & Defense", description: "Mission-critical RFID, IoT, and cybersecurity solutions for defense agencies and federal infrastructure.", image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070", href: "/federal" },
                        { title: "State & Local Government", description: "Smart city platforms, public safety infrastructure, and digital services for state and municipal agencies.", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144", href: "/state" },
                        { title: "Enterprise & Commercial", description: "Supply chain visibility, cloud modernization, and cybersecurity for enterprise and growing businesses.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", href: "/private" }
                    ]}
                    background="slate"
                />

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
