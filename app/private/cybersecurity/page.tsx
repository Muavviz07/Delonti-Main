import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import ImplementationSteps from "@/components/ImplementationSteps";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Activity, ShieldCheck, ClipboardCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Cybersecurity | Delonti Enterprise",
};

export default function PrivateCybersecurityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Commercial Security"
                    subtitle="Enterprise-grade threat intelligence and intellectual property protection."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Cybersecurity" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Risk Mitigation"
                    heading="Protecting the Commercial Core"
                    description="Corporate intellectual property and customer databases are the primary targets of modern cyber rings. We synthesize military-grade security doctrines with commercial cloud agility to build resilient perimeters that don't bottleneck employee productivity."
                    background="white"
                />

                <FeatureGrid
                    title="Services"
                    heading="Protective Measures"
                    features={[
                        { title: "SOC Monitoring", description: "24/7/365 managed threat hunting and SIEM oversight.", icon: <Activity className="w-6 h-6" /> },
                        { title: "Endpoint Protection", description: "Next-gen AV and EDR deployed across corporate devices.", icon: <ShieldCheck className="w-6 h-6" /> },
                        { title: "Risk Assessments", description: "Penetration testing and compliance readiness audits.", icon: <ClipboardCheck className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Enterprise Defense Stack"
                    layers={[
                        { name: "Continuous Monitoring", description: "Ingesting cloud logs (AWS CloudTrail, Azure Monitor)." },
                        { name: "Big Data Analytics", description: "Correlating millions of events per second against threat feeds." },
                        { name: "Security Dashboards", description: "A unified glass pane for CISO-level visibility." }
                    ]}
                    background="white"
                />

                <ImplementationSteps
                    title="Onboarding"
                    heading="Securing the Perimeter"
                    steps={[
                        { title: "Vulnerability Scan", description: "Identifying open ports and unpatched systems." },
                        { title: "Tool Deployment", description: "Rolling out EDR agents silently across the workforce." },
                        { title: "Log Routing", description: "Piping AWS, O365, and firewall logs to the SOC." },
                        { title: "Active Defense", description: "Transitioning to 24/7 active hunting posture." }
                    ]}
                    background="slate"
                />

                <BenefitsSection
                    title="Assurance"
                    heading="The Security Advantage"
                    benefits={[
                        "Lower cyber insurance premiums through documented compliance",
                        "Stop ransomware propagation instantly via automated endpoint isolation",
                        "Safely enable remote-work policies without compromising the perimeter",
                        "Meet PCI-DSS, HIPAA, and SOC2 compliance mandates"
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Audit Your Defenses"
                    description="Request a complimentary external vulnerability scan from our red team."
                />
            </main>
            <Footer />
        </>
    );
}
