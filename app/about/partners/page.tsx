import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import ClientsSection from "@/components/ClientsSection";
import { Server, ShieldCheck, Database, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology Partners | Delonti Enterprise",
};

export default function PartnersPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Technology Partners"
                    subtitle="An ecosystem of industry-leading innovators powering Delonti's enterprise solutions."
                    breadcrumbs={[{ label: "About", href: "/about" }, { label: "Partners" }]}
                    backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Partnerships"
                    heading="The Power of Collaboration"
                    description="We believe that the most robust infrastructures are built upon open ecosystems. By partnering with leading telecommunications providers, hardware manufacturers, and cloud platforms, we ensure our clients receive best-in-class capability without vendor lock-in."
                    background="white"
                />

                <FeatureGrid
                    title="Ecosystem"
                    heading="Partner Network Capabilities"
                    features={[
                        { title: "Network Providers", description: "Global 5G and LTE infrastructure integration, powered by Verizon.", icon: <Zap className="w-6 h-6" /> },
                        { title: "Hardware Solutions", description: "Military-grade RFID arrays and edge IoT sensors.", icon: <Server className="w-6 h-6" /> },
                        { title: "Cloud Platforms", description: "Scalable data lakes hosted on AWS and Azure.", icon: <Database className="w-6 h-6" /> },
                        { title: "Security Vendors", description: "Zero-trust endpoints integrated seamlessly with our architecture.", icon: <ShieldCheck className="w-6 h-6" /> }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Integration API"
                    heading="Unified Partner Architecture"
                    description="Our platform is designed to natively ingest data streams from our partner’s sensors and output to their analytics engines. This bidirectional flow ensures that Delonti sits perfectly at the intersection of your existing technological investments, amplifying their value rather than replacing them."
                    listItems={[
                        "RESTful API & Webhook integrations",
                        "Native Verizon ThingSpace compatibility",
                        "Hardware-agnostic sensor ingestion protocols",
                        "Pre-certified enterprise security profiles"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    imageAlt="Data Integration Dashboard"
                    imagePosition="right"
                    background="white"
                />

                {/* Existing FAQ component works well here as requested */}
                <FAQ />

                <ClientsSection />

                <IndustryUseCases
                    title="Impact"
                    heading="Partner-Driven Solutions"
                    useCases={[
                        { title: "Smart City Grids", description: "Teaming with Verizon to deliver municipal Wi-Fi and IoT traffic monitoring.", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144" },
                        { title: "Defense Logistics", description: "Deploying secure, partnered RFID hardware to overseas military bases.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" },
                        { title: "Healthcare Tracking", description: "Integrating specialized medical-grade sensors into hospital networks.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070" }
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Become a Delonti Partner"
                    description="Join our global ecosystem and deliver transformational technology to the public and private sectors."
                    buttonText="Partner Inquiry"
                />
            </main>
            <Footer />
        </>
    );
}
