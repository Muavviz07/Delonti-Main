import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Cloud, GitBranch, ShieldCheck, RefreshCcw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Transformation & DevOps | Delonti",
};

export default function CloudDevopsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Cloud Transformation & DevOps"
                    subtitle="Multi-cloud infrastructure, DevOps pipelines, and legacy modernization for technology-forward enterprises."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Cloud & DevOps Transformation" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034"
                />

                <OverviewSection
                    title="Cloud & DevOps"
                    heading="Accelerate Your Cloud Transformation"
                    description={
                        "Cloud transformation is not just about moving servers — it is about rebuilding how your organization delivers technology. Delonti's Cloud Transformation & DevOps practice designs and implements multi-cloud architectures, automated delivery pipelines, and security-first cloud operating models that enable your engineering teams to ship faster with confidence."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Services"
                    heading="Cloud & DevOps Capabilities"
                    features={[
                        {
                            icon: <Cloud className="w-6 h-6" />,
                            title: "Multi-Cloud Infrastructure",
                            description:
                                "Architect and manage workloads across AWS, Azure, and GCP — optimized for cost, performance, and resilience."
                        },
                        {
                            icon: <GitBranch className="w-6 h-6" />,
                            title: "DevOps Pipeline Implementation",
                            description:
                                "CI/CD pipeline design, infrastructure-as-code, and automated testing frameworks that accelerate software delivery."
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6" />,
                            title: "Cloud Security",
                            description:
                                "Security posture management, cloud-native WAF, identity governance, and continuous compliance in cloud environments."
                        },
                        {
                            icon: <RefreshCcw className="w-6 h-6" />,
                            title: "Legacy System Modernization",
                            description:
                                "Structured migration of on-premise legacy applications to cloud-native architectures — phased, risk-managed, and audited."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Cloud Operating Model"
                    layers={[
                        {
                            name: "Infrastructure as Code",
                            description:
                                "Terraform and Pulumi-based infrastructure definitions enabling reproducible, version-controlled cloud environments."
                        },
                        {
                            name: "CI/CD Delivery Platform",
                            description:
                                "GitHub Actions, ArgoCD, and automated testing pipelines enabling daily deployments with zero downtime."
                        },
                        {
                            name: "Cloud Security Layer",
                            description:
                                "CSPM, runtime threat protection, and identity governance across all cloud accounts and environments."
                        },
                        {
                            name: "FinOps & Governance",
                            description:
                                "Cost allocation, rightsizing automation, and cloud governance policies ensuring spend control and compliance."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Outcomes"
                    heading="Cloud Transformation Results"
                    benefits={[
                        "Reduce cloud infrastructure costs by 30% through rightsizing and automation",
                        "Achieve daily deployment capability with zero-downtime release pipelines",
                        "Eliminate legacy infrastructure maintenance overhead and licensing costs",
                        "Maintain continuous security compliance across all cloud environments",
                        "Enable engineering teams to focus on product, not infrastructure",
                        "Complete phased cloud migration with zero data loss and minimal disruption"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Accelerate Your Cloud Journey"
                    description="Start with a cloud readiness assessment and a tailored transformation roadmap."
                    buttonText="Request Cloud Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
