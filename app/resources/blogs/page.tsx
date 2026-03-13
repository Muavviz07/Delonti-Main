import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import ContentGrid from "@/components/ContentGrid";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { BookOpen, Network, Lock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Blog | Delonti Enterprise",
};

export default function BlogsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Engineering Insights"
                    subtitle="Technical deep-dives, architectural blueprints, and industry analysis from Delonti's core team."
                    breadcrumbs={[
                        { label: "Resources" },
                        { label: "Blogs" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Knowledge Base"
                    heading="Exploring the Edge of Infrastructure"
                    description="Read our latest publications on distributed systems, Zero-Trust architectures, and the physics of massive-scale IoT deployments. Designed for CTOs, system architects, and defense personnel."
                    background="white"
                />

                <FeatureGrid
                    title="Categories"
                    heading="Topics We Cover"
                    features={[
                        { title: "Distributed Systems", description: "Scaling data ingestion across global sensor networks.", icon: <Network className="w-6 h-6" /> },
                        { title: "Cyber Defense", description: "Tactics and threat hunting in the modern era.", icon: <Lock className="w-6 h-6" /> },
                        { title: "Physical Infrastructure", description: "The hardware making Smart Cities possible.", icon: <BookOpen className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <ContentGrid
                    title="Latest"
                    heading="Recent Publications"
                    items={[
                        {
                            title: "The Physics of UHF RFID in High-Metal Environments",
                            description: "Extensive breakdown of cross-polarization and backscatter reflection when mounting passive tags inside server chassis.",
                            category: "Hardware",
                            date: "October 12, 2026",
                            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
                            href: "#"
                        },
                        {
                            title: "Implementing Zero-Trust in Disconnected Federal Scenarios",
                            description: "How to maintain identity verification protocols when communication with the central IdP is severed.",
                            category: "Security",
                            date: "September 28, 2026",
                            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
                            href: "#"
                        },
                        {
                            title: "Migrating Legacy CAD Systems to FedRAMP AWS instances",
                            description: "A chronological guide on modernizing local police dispatch software into highly available cloud topologies.",
                            category: "Cloud",
                            date: "September 15, 2026",
                            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
                            href: "#"
                        },
                        {
                            title: "Why V2X Traffic Sensors Fail in Winter Climates",
                            description: "Analyzing the failure rates of common computer-vision traffic sensors during blizzard conditions and why thermal matters.",
                            category: "Smart City",
                            date: "August 30, 2026",
                            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070",
                            href: "#"
                        }
                    ]}
                    columns={2}
                    background="white"
                />

                <CTASection
                    heading="Subscribe to our Engineering Newsletter"
                    description="Receive monthly architectural deep-dives directly in your inbox."
                    buttonText="Join the Mailing List"
                />
            </main>
            <Footer />
        </>
    );
}
