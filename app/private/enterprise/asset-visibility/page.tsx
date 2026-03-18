import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { ScanLine, Globe, GitBranch, RefreshCcw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Asset Visibility Platforms | Delonti",
};

export default function AssetVisibilityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Asset Visibility Platforms"
                    subtitle="Large-scale RFID and IoT platforms for real-time operational intelligence across your entire enterprise."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Asset Visibility Platforms" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072"
                />

                <OverviewSection
                    title="RFID + IoT"
                    heading="Complete Visibility Across Every Site"
                    description={
                        "Enterprise operations demand more than basic barcode scanning. Delonti's Asset Visibility Platforms combine ultra-high frequency RFID with IoT sensor networks to deliver real-time tracking of assets, inventory, and supply chain movements — across every warehouse, facility, and distribution center in your network. Fully integrated with your ERP and analytics platforms."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Capabilities"
                    heading="Platform Features"
                    features={[
                        {
                            icon: <ScanLine className="w-6 h-6" />,
                            title: "Large-Scale Asset Tracking",
                            description:
                                "Deploy RFID networks capable of tracking millions of assets simultaneously across multi-site enterprise facilities."
                        },
                        {
                            icon: <Globe className="w-6 h-6" />,
                            title: "Multi-Site Inventory Visibility",
                            description:
                                "A unified inventory view across all warehouses, distribution centers, and retail locations — in real time."
                        },
                        {
                            icon: <GitBranch className="w-6 h-6" />,
                            title: "Supply Chain Traceability",
                            description:
                                "Track products from manufacturer to end customer with full chain-of-custody logging and regulatory compliance."
                        },
                        {
                            icon: <RefreshCcw className="w-6 h-6" />,
                            title: "Asset Lifecycle Management",
                            description:
                                "Monitor utilization, maintenance history, and depreciation of high-value assets across their entire operational life."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Platform Technology Stack"
                    layers={[
                        {
                            name: "RFID & IoT Endpoints",
                            description:
                                "Passive UHF tags, active beacons, and IoT sensors deployed across assets, pallets, and facilities."
                        },
                        {
                            name: "Edge Processing Layer",
                            description:
                                "On-site middleware filtering and aggregating millions of read events into clean, actionable data streams."
                        },
                        {
                            name: "Enterprise Integration Bus",
                            description:
                                "Bi-directional data sync with SAP, Oracle, and custom ERP platforms via REST APIs and webhooks."
                        },
                        {
                            name: "Visibility & Analytics Dashboard",
                            description:
                                "Real-time operational intelligence platform with executive reporting, alerts, and KPI tracking."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="Enterprise Asset Visibility Outcomes"
                    benefits={[
                        "Achieve 99.9% inventory accuracy across all enterprise locations",
                        "Eliminate phantom inventory and reduce excess safety stock by 30%",
                        "Reduce dock-to-stock processing time by up to 50%",
                        "Gain full supply chain traceability for regulatory compliance",
                        "Integrate seamlessly with existing SAP, Oracle, and WMS systems",
                        "Scale from a single site to a global network on one platform"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Architect Your Visibility Platform"
                    description="Engage our RFID architects for an enterprise site survey and deployment roadmap."
                    buttonText="Request Enterprise Consultation"
                />
            </main>
            <Footer />
        </>
    );
}
