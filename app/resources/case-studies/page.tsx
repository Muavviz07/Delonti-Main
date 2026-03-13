import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import CaseStudySection from "@/components/CaseStudySection";
import SplitContentSection from "@/components/SplitContentSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Delonti Enterprise",
};

export default function CaseStudiesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Case Studies"
                    subtitle="Real-world results from complex digital transformations across the globe."
                    breadcrumbs={[
                        { label: "Resources" },
                        { label: "Case Studies" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Track Record"
                    heading="Proven Enterprise Value"
                    description="Explore how Delonti has partnered with global leaders and government agencies to architect resilient, secure, and data-driven infrastructure systems."
                    background="white"
                />

                <CaseStudySection
                    title="Showcase"
                    heading="Global Implementations"
                    studies={[
                        {
                            title: "Automating 40 Million Sq. Ft. of Defense Logistics",
                            client: "Federal Defense Agency",
                            description: "Deployed the world's largest contiguous UHF RFID tracking network across multiple overseas bases, allowing automated inventory of rations, ammunition, and medical supplies.",
                            metric: "99.8% Accuracy",
                            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
                            href: "#"
                        },
                        {
                            title: "Zero-Trust Mesh for Interstate Toll Systems",
                            client: "State Department of Transportation",
                            description: "Re-architected the entire payment gateway and sensor network for a tri-state tolling authority to prevent skimming and secure driver data.",
                            metric: "0 Data Breaches",
                            image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070",
                            href: "#"
                        },
                        {
                            title: "IoT Predictive Maintenance in Automotive Manufacturing",
                            client: "Global Automaker",
                            description: "Installed thousands of acoustic and thermal sensors across the assembly line to predict robotic arm failures before they halt production.",
                            metric: "$12M Saved",
                            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
                            href: "#"
                        },
                        {
                            title: "Unified FedRAMP Data Lake for Health Systems",
                            client: "State Department of Health",
                            description: "Aggregated legacy siloed health mainframes into a single AWS GovCloud instance, enabling real-time epidemiological tracking.",
                            metric: "50x Query Speed",
                            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
                            href: "#"
                        }
                    ]}
                    background="slate"
                />

                <SplitContentSection
                    title="Featured Project"
                    heading="Project Horizon: City-Wide Intelligence"
                    description="Delonti partnered with a Tier 1 metropolitan area to ingest data from over 50,000 traffic intersections, environmental sensors, and public transit vehicles. The resulting platform allows emergency vehicles to automatically pre-empt traffic lights, dropping response times drastically."
                    listItems={[
                        "50,000+ Endpoints Ingested per second",
                        "V2X infrastructure deployed over municipal 5G",
                        "Open data portal created for civic developers"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070"
                    imageAlt="Smart City Grid"
                    imagePosition="left"
                    background="white"
                />

                <StatsSection
                    stats={[
                        { value: "500", suffix: "+", label: "Completed Projects" },
                        { value: "50", label: "States Deployed In" },
                        { value: "4", suffix: "B+", label: "Sensor Pings/Day" },
                        { value: "0", label: "Failed Migrations" }
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Start Your Success Story"
                    description="Engage our architects to discover what your organization is capable of."
                />
            </main>
            <Footer />
        </>
    );
}
