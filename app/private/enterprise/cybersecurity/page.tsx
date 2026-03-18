import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { ShieldAlert, Eye, ClipboardCheck, BarChart2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Cybersecurity | Delonti",
};

export default function EnterpriseCybersecurityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Cybersecurity"
                    subtitle="Zero Trust architecture, risk governance, and security operations for complex enterprise environments."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Enterprise Cybersecurity" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
                />

                <OverviewSection
                    title="Enterprise Security"
                    heading="Security at the Scale of Your Operations"
                    description={
                        "Enterprise cybersecurity is not a product — it is a program. Delonti designs and operates comprehensive security programs built on Zero Trust principles, integrating threat detection, compliance frameworks, and risk governance into a continuous security operation that protects your organization across every environment — cloud, on-premise, and hybrid."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Capabilities"
                    heading="Enterprise Security Services"
                    features={[
                        {
                            icon: <ShieldAlert className="w-6 h-6" />,
                            title: "Zero Trust Architecture",
                            description:
                                "Design and implement Zero Trust network architectures aligned to NIST and CISA frameworks — assume breach, verify everything."
                        },
                        {
                            icon: <Eye className="w-6 h-6" />,
                            title: "Security Operations Integration",
                            description:
                                "SIEM/SOAR integration, 24/7 SOC monitoring, and threat intelligence feeds providing continuous detection and response."
                        },
                        {
                            icon: <ClipboardCheck className="w-6 h-6" />,
                            title: "Compliance Frameworks",
                            description:
                                "Implementation and audit support for SOC2, ISO 27001, PCI-DSS, HIPAA, and industry-specific regulatory requirements."
                        },
                        {
                            icon: <BarChart2 className="w-6 h-6" />,
                            title: "Risk Governance Programs",
                            description:
                                "Enterprise risk assessment, risk register management, and board-level security reporting frameworks."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Defense-in-Depth Stack"
                    layers={[
                        {
                            name: "Identity & Access Management",
                            description:
                                "Zero Trust identity verification, MFA enforcement, and privileged access management across all systems."
                        },
                        {
                            name: "Endpoint & Network Defense",
                            description:
                                "EDR deployment, network micro-segmentation, and east-west traffic monitoring for lateral movement prevention."
                        },
                        {
                            name: "Security Operations Center",
                            description:
                                "24/7 SIEM monitoring, automated SOAR playbooks, and human analyst-led threat hunting programs."
                        },
                        {
                            name: "Governance & Compliance Layer",
                            description:
                                "Continuous compliance monitoring, automated reporting, and executive risk dashboards for CISO and board visibility."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Outcomes"
                    heading="Enterprise Security Outcomes"
                    benefits={[
                        "Achieve full Zero Trust maturity aligned to NIST SP 800-207",
                        "Reduce mean time to detect and respond to threats by 60%",
                        "Maintain continuous compliance across multiple regulatory frameworks",
                        "Eliminate lateral movement risk through network micro-segmentation",
                        "Provide CISO-level visibility with real-time risk dashboards",
                        "Automate compliance reporting to reduce audit preparation time by 70%"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Strengthen Your Security Posture"
                    description="Request an enterprise security assessment and Zero Trust maturity review."
                    buttonText="Request Security Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
