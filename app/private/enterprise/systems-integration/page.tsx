import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Database, Cpu, Network, DatabaseZap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Systems Integration | Delonti",
};

export default function SystemsIntegrationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Systems Integration"
                    subtitle="Connecting your enterprise technology stack into a unified, intelligent operational platform."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Systems Integration" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                />

                <OverviewSection
                    title="Integration"
                    heading="One Platform, Every System"
                    description={
                        "Enterprise technology environments are complex — ERP systems, IoT platforms, data warehouses, CRM tools, and custom applications all generating data in isolation. Delonti's Systems Integration practice designs and implements the integration architecture that connects these systems into a unified operational backbone — eliminating data silos and enabling real-time enterprise intelligence."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Capabilities"
                    heading="Integration Services"
                    features={[
                        {
                            icon: <Database className="w-6 h-6" />,
                            title: "ERP Integration",
                            description:
                                "Bi-directional integration with SAP, Oracle, Microsoft Dynamics, and custom ERP systems via REST APIs and EDI."
                        },
                        {
                            icon: <Cpu className="w-6 h-6" />,
                            title: "IoT Platform Integration",
                            description:
                                "Connect RFID, sensor, and IoT platforms to enterprise systems — enabling physical operations data to flow into business processes automatically."
                        },
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Enterprise System Connectivity",
                            description:
                                "API gateway design, middleware architecture, and event-driven integration patterns for complex enterprise environments."
                        },
                        {
                            icon: <DatabaseZap className="w-6 h-6" />,
                            title: "Data Platform Integration",
                            description:
                                "Connect operational systems to data lakes, warehouses, and analytics platforms for unified business intelligence."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Integration Platform Design"
                    layers={[
                        {
                            name: "API Gateway & Management",
                            description:
                                "Centralized API management with rate limiting, authentication, and developer portal for enterprise APIs."
                        },
                        {
                            name: "Integration Middleware",
                            description:
                                "Event-driven messaging, workflow orchestration, and data transformation using enterprise integration patterns."
                        },
                        {
                            name: "Master Data Management",
                            description:
                                "Unified master data layer ensuring consistent product, customer, and asset data across all connected systems."
                        },
                        {
                            name: "Monitoring & Observability",
                            description:
                                "Real-time integration health monitoring, alerting, and SLA tracking across all connected data flows."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="Integration Outcomes"
                    benefits={[
                        "Eliminate data silos and establish a single operational source of truth",
                        "Reduce manual data entry and reconciliation by up to 80%",
                        "Enable real-time data flow between all enterprise systems",
                        "Accelerate business process automation across integrated platforms",
                        "Maintain full data lineage and audit trails across all integrations",
                        "Scale integration architecture as new systems and data sources are added"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Unify Your Enterprise Systems"
                    description="Engage our integration architects for an enterprise systems mapping and design workshop."
                    buttonText="Book an Integration Workshop"
                />
            </main>
            <Footer />
        </>
    );
}
