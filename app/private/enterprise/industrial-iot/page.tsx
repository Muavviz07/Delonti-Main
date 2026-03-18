import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Building2, Activity, Wrench, Radio } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart Infrastructure & Industrial IoT | Delonti",
};

export default function IndustrialIotPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Smart Infrastructure & Industrial IoT"
                    subtitle="Connecting physical operations to real-time intelligence across energy, manufacturing, and transportation."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Industrial IoT & Smart Infrastructure" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                />

                <OverviewSection
                    title="Industrial IoT"
                    heading="Intelligence for the Physical Enterprise"
                    description={
                        "Industrial operations generate enormous amounts of data — from machinery vibration patterns to energy consumption metrics. Delonti's Industrial IoT platform transforms this raw telemetry into actionable intelligence, enabling smart facilities, predictive maintenance programs, and infrastructure monitoring that prevents downtime before it occurs."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Industrial Capabilities"
                    features={[
                        {
                            icon: <Building2 className="w-6 h-6" />,
                            title: "Smart Facilities",
                            description:
                                "Sensor-driven facility management including occupancy monitoring, energy optimization, and automated building controls."
                        },
                        {
                            icon: <Activity className="w-6 h-6" />,
                            title: "Industrial Monitoring",
                            description:
                                "Real-time monitoring of machinery, production lines, and critical infrastructure with anomaly detection and alerts."
                        },
                        {
                            icon: <Wrench className="w-6 h-6" />,
                            title: "Predictive Maintenance",
                            description:
                                "Acoustic and thermal sensors predict equipment failures before they occur — eliminating unplanned downtime."
                        },
                        {
                            icon: <Radio className="w-6 h-6" />,
                            title: "Infrastructure Monitoring",
                            description:
                                "Continuous monitoring of critical infrastructure including pipelines, grids, and transport networks for operational integrity."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Stack"
                    heading="IoT Data Architecture"
                    layers={[
                        {
                            name: "Industrial Sensor Layer",
                            description:
                                "Acoustic, thermal, vibration, and environmental sensors deployed on machinery and infrastructure assets."
                        },
                        {
                            name: "Edge Computing Gateway",
                            description:
                                "On-site processing of sensor data with local alerting and bandwidth-efficient cloud transmission."
                        },
                        {
                            name: "IoT Data Platform",
                            description:
                                "Centralized data ingestion, normalization, and ML-powered anomaly detection engine."
                        },
                        {
                            name: "Operations Intelligence Layer",
                            description:
                                "Maintenance scheduling, executive dashboards, and integration with CMMS and ERP systems."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Results"
                    heading="Industrial IoT Impact"
                    benefits={[
                        "Eliminate unplanned downtime with 90-day failure prediction accuracy",
                        "Reduce energy consumption across facilities by up to 25%",
                        "Extend asset lifespan through condition-based maintenance programs",
                        "Achieve real-time visibility across all industrial sites globally",
                        "Integrate IoT data directly with existing CMMS and ERP platforms",
                        "Meet industrial compliance and environmental monitoring requirements"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Connect Your Industrial Operations"
                    description="Start with a facility assessment and IoT pilot deployment scoped for your environment."
                    buttonText="Schedule a Site Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
