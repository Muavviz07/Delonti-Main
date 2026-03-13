import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import SplitContentSection from "@/components/SplitContentSection";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import ImplementationSteps from "@/components/ImplementationSteps";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { ShieldOff, Eye, AlertOctagon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Federal Cybersecurity | Delonti Enterprise",
};

export default function FederalCybersecurityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Federal Cybersecurity"
                    subtitle="Advanced threat detection and Zero-Trust architectures for national defense."
                    breadcrumbs={[
                        { label: "Federal", href: "/federal" },
                        { label: "Cybersecurity" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Digital Perimeter"
                    heading="Securing the Nation's Data"
                    description="In an era of state-sponsored APTs (Advanced Persistent Threats), perimeter defenses are no longer sufficient. We implement robust, intelligence-driven Zero-Trust architectures that assume breach and continually verify every transaction across the federal network space."
                    background="white"
                />

                <SplitContentSection
                    title="Pillars"
                    heading="Defensive Operations"
                    description="Our Zero-Trust methodology encompasses robust, intelligence-driven architectures tailored for high-stakes federal environments."
                    listItems={[
                        "Zero Trust Architecture per OMB M-22-09",
                        "Proactive network threat hunting",
                        "Automated isolation and incident eradication"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
                    imageAlt="Cybersecurity Matrix"
                    imagePosition="right"
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Stack"
                    heading="Defense-in-Depth Network Layers"
                    layers={[
                        { name: "Endpoint Telemetry", description: "Analyzing kernel-level behavior across all government devices." },
                        { name: "Identity & Access Broker", description: "Continuous multifactor authentication and role verification." },
                        { name: "Network Flow Analysis", description: "AI anomaly detection monitoring east-west traffic." },
                        { name: "Security Operations Center", description: "Centralized SIEM/SOAR platform for human analysts." }
                    ]}
                    background="white"
                />

                <ImplementationSteps
                    title="Process"
                    heading="Zero-Trust Integration"
                    steps={[
                        { title: "Asset Discovery", description: "Mapping shadow IT and undocumented endpoints." },
                        { title: "Micro-Segmentation", description: "Isolating critical systems into hardened enclaves." },
                        { title: "Policy Enforcement", description: "Deploying identity-aware proxy gateways." },
                        { title: "Continuous Monitoring", description: "Establishing 24/7 SOC oversight." }
                    ]}
                    background="slate"
                />

                <BenefitsSection
                    title="Outcome"
                    heading="Security Posture Impact"
                    benefits={[
                        "Achieve full compliance with Executive Order 14028",
                        "Reduce lateral movement capability of attackers to zero",
                        "Automated neutralization of ransomware before encryption triggers",
                        "Consolidated visibility across multi-cloud agency environments"
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Schedule a Security Briefing"
                    description="Engage our cleared analysts for a confidential assessment."
                />
            </main>
            <Footer />
        </>
    );
}
