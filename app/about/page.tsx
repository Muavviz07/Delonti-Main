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
import { Cpu, ShieldAlert, Wifi, Globe, HeartPulse, Building2, HardHat, Warehouse } from "lucide-react";
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
                    heading="Engineering the Future"
                    description={
                        <>
                            <p>
                                Delonti is a premier technology solutions provider dedicated to bridging the gap between complex infrastructure needs and cutting-edge innovation. With over a decade of experience serving both the public and private sectors, we specialize in high-stakes environments where security, scalability, and reliability are non-negotiable.
                            </p>
                            <p>
                                Our mission is to empower organizations with enterprise-grade RFID, IoT, and Cybersecurity solutions that drive operational efficiency, data security, and sustainable global growth.
                            </p>
                        </>
                    }
                    background="white"
                />

                <StatsSection
                    stats={[
                        { value: "10", suffix: "+", label: "Years Experience" },
                        { value: "500", suffix: "+", label: "Enterprise Deployments" },
                        { value: "99.9", suffix: "%", label: "Uptime Guaranteed" },
                        { value: "50", suffix: "M+", label: "Assets Tracked" }
                    ]}
                    background="slate"
                />

                <SplitContentSection
                    title="Vision"
                    heading="Securing the Connected World"
                    description="We envision a future where technology seamlessly integrates with physical infrastructure to create smarter, safer communities and robust enterprise supply chains. Through strategic partnerships with industry leaders like Verizon, Delonti delivers government-grade excellence."
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    imageAlt="Global Technology Infrastructure"
                    imagePosition="left"
                    background="white"
                />

                <FeatureGrid
                    title="Expertise"
                    heading="Core Capabilities"
                    features={[
                        { title: "RFID Systems", description: "Sub-second asset tracking and logistics automation.", icon: <Wifi className="w-6 h-6" /> },
                        { title: "IoT Ecosystems", description: "Sensor networks providing real-time operational analytics.", icon: <Cpu className="w-6 h-6" /> },
                        { title: "Cybersecurity", description: "Zero-trust architectures protecting critical infrastructure.", icon: <ShieldAlert className="w-6 h-6" /> },
                        { title: "Cloud Platforms", description: "Scalable data ingestion and enterprise cloud modernization.", icon: <Globe className="w-6 h-6" /> }
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
                    heading="Industries We Serve"
                    useCases={[
                        { title: "Government Agencies", description: "Mission-critical infrastructure for civilian and defense departments.", image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070", href: "/federal" },
                        { title: "Enterprise Supply Chain", description: "End-to-end visibility for global logistics operations.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070", href: "/private/supply-chain" },
                        { title: "Manufacturing", description: "Smart factory automation and asset utilization tracking.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", href: "/private" }
                    ]}
                    background="slate"
                />

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
