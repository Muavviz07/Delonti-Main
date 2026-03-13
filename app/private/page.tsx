import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { PackageSearch, CloudCog, ShieldCheck, DatabaseZap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Private Sector Transformation | Delonti Enterprise",
};

export default function PrivatePage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Transformation"
                    subtitle="Accelerating commercial growth through strategic digital modernization."
                    breadcrumbs={[{ label: "Private Sector" }]}
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Commercial Edge"
                    heading="Modernizing the Enterprise"
                    description="In today's highly competitive commercial landscape, technological debt is a liability. Delonti partners with Fortune 500 companies in manufacturing, retail, and logistics to architect scalable infrastructures that drive bottom-line efficiency. We transition legacy mindsets into agile, data-first ecosystems."
                    background="white"
                />

                <FeatureGrid
                    title="Practices"
                    heading="Enterprise Capabilities"
                    features={[
                        { title: "Supply Chain Visibilty", description: "RFID and IoT tracking for global logistics networks.", icon: <PackageSearch className="w-6 h-6" /> },
                        { title: "Cloud Architecture", description: "Cost-optimized AWS and Azure deployments.", icon: <CloudCog className="w-6 h-6" /> },
                        { title: "Commercial Cyber", description: "Protecting proprietary IP and customer data.", icon: <ShieldCheck className="w-6 h-6" /> },
                        { title: "Data Analytics", description: "Converting raw telemetry into board-level BI dashboards.", icon: <DatabaseZap className="w-6 h-6" /> }
                    ]}
                    columns={4}
                    background="slate"
                />

                <IndustryUseCases
                    title="Verticals"
                    heading="Industry Focus"
                    useCases={[
                        { title: "Logistics & Supply Chain", description: "End-to-end warehouse automation and fleet tracing.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070", href: "/private/supply-chain" },
                        { title: "Retail", description: "Omnichannel inventory accuracy and loss prevention.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" },
                        { title: "Manufacturing", description: "Predictive maintenance on factory floors using IoT acoustics.", image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070" },
                        { title: "Financial Services", description: "High-frequency trading network security and compliance.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070", href: "/private/cybersecurity" }
                    ]}
                    background="white"
                />

                <SplitContentSection
                    title="Roadmap"
                    heading="The Transformation Journey"
                    description="Digital transformation is not simply purchasing new software; it is a fundamental rewiring of how a business operates. Our methodical approach ensures ROI is captured at every milestone, minimizing cultural friction and maximizing adoption."
                    listItems={[
                        "Infrastructure Discovery & Audit",
                        "Proof-of-Concept Pilot Deployments",
                        "Global Roll-out & Scaling",
                        "Managed Services & Continuous Optimization"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                    imageAlt="Business Strategy Session"
                    imagePosition="right"
                    background="slate"
                />

                <BenefitsSection
                    title="ROI"
                    heading="The Bottom Line"
                    benefits={[
                        "Increase inventory accuracy from 65% to 99.9%",
                        "Reduce cloud computing expenditure by 30% through containerization",
                        "Eliminate unscheduled manufacturing downtime via predictive maintenance",
                        "Ensure GDPR and CCPA compliance through automated data governance"
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Modernize Your Enterprise"
                    description="Schedule a technical strategy workshop with our commercial architects."
                />
            </main>
            <Footer />
        </>
    );
}
