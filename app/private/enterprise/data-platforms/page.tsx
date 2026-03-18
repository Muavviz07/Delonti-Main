import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Database, BrainCircuit, TrendingUp, LayoutDashboard } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Platforms, AI & Automation | Delonti",
};

export default function DataPlatformsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Data Platforms, AI & Automation"
                    subtitle="Enterprise data infrastructure that converts operational complexity into competitive intelligence."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Data Platforms & AI" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                />

                <OverviewSection
                    title="Data & AI"
                    heading="From Raw Data to Operational Intelligence"
                    description={
                        "Enterprise organizations generate more data than they can use — siloed in systems, buried in reports, or simply ignored. Delonti's Data Platforms, AI & Automation solutions unify your enterprise data into a single intelligence layer, applying machine learning and AI automation to deliver predictive insights that drive operational and financial performance."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Capabilities"
                    heading="Data & AI Platform Services"
                    features={[
                        {
                            icon: <Database className="w-6 h-6" />,
                            title: "Enterprise Data Platforms",
                            description:
                                "Design and deploy scalable data lakes, warehouses, and lakehouse architectures on AWS, Azure, or hybrid cloud."
                        },
                        {
                            icon: <BrainCircuit className="w-6 h-6" />,
                            title: "AI Automation",
                            description:
                                "Intelligent process automation using ML models that learn from your operational data and continuously improve."
                        },
                        {
                            icon: <TrendingUp className="w-6 h-6" />,
                            title: "Predictive Analytics",
                            description:
                                "Demand forecasting, predictive maintenance, and supply chain optimization powered by enterprise-grade ML pipelines."
                        },
                        {
                            icon: <LayoutDashboard className="w-6 h-6" />,
                            title: "Operational Intelligence",
                            description:
                                "Executive dashboards, real-time KPI monitoring, and automated alerting that keeps every stakeholder informed."
                        }
                    ]}
                                        columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Pipeline"
                    heading="Enterprise Data Architecture"
                    layers={[
                        {
                            name: "Data Ingestion Layer",
                            description:
                                "Real-time and batch ingestion from ERP, IoT, RFID, CRM, and third-party systems via unified connectors."
                        },
                        {
                            name: "Data Processing & Storage",
                            description:
                                "Scalable data lake and warehouse infrastructure with automated data quality, governance, and lineage tracking."
                        },
                        {
                            name: "AI & ML Engine",
                            description:
                                "Model training, deployment, and monitoring pipelines for predictive analytics and intelligent automation."
                        },
                        {
                            name: "Intelligence & Reporting Layer",
                            description:
                                "Executive dashboards, operational reports, and real-time alerts distributed to every level of the organization."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="Data Platform Outcomes"
                    benefits={[
                        "Unify siloed enterprise data into a single operational truth",
                        "Reduce reporting cycle time from days to minutes with automation",
                        "Increase forecast accuracy by 40% with ML-powered demand prediction",
                        "Enable self-service analytics for business users without IT dependency",
                        "Detect operational anomalies in real time before they become incidents",
                        "Deliver board-level insights from operational data within 24 hours"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Build Your Data Intelligence Platform"
                    description="Engage our data architects for an enterprise data strategy and platform design workshop."
                    buttonText="Schedule a Data Workshop"
                />
            </main>
            <Footer />
        </>
    );
}
