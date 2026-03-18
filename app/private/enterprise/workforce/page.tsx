import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Code2, RefreshCcw, Headphones, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Workforce Solutions | Delonti",
};

export default function WorkforcePage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Workforce Solutions"
                    subtitle="Engineering teams, IT transformation specialists, and managed technical services for large-scale enterprise programs."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise", href: "/private/enterprise" },
                        { label: "Workforce Solutions" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                />

                <OverviewSection
                    title="Workforce"
                    heading="The Talent Behind Enterprise Transformation"
                    description={
                        "Large-scale technology transformation programs require more than good architecture — they require experienced, coordinated teams that can deliver at enterprise pace. Delonti's Enterprise Workforce Solutions provide the engineering talent, IT transformation specialists, and managed technical services your program needs — at the scale, clearance level, and expertise your organization demands."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Enterprise Talent Services"
                    features={[
                        {
                            icon: <Code2 className="w-6 h-6" />,
                            title: "Engineering Teams",
                            description:
                                "Full-stack, embedded, cloud, and platform engineering teams assembled and managed for complex multi-year programs."
                        },
                        {
                            icon: <RefreshCcw className="w-6 h-6" />,
                            title: "IT Transformation Teams",
                            description:
                                "Specialists in cloud migration, ERP implementation, digital transformation, and legacy system modernization."
                        },
                        {
                            icon: <Headphones className="w-6 h-6" />,
                            title: "Managed Technical Services",
                            description:
                                "Ongoing managed delivery of defined technical functions — NOC, SOC, helpdesk, platform operations — under SLA."
                        },
                        {
                            icon: <Globe className="w-6 h-6" />,
                            title: "Offshore Development Teams",
                            description:
                                "Cost-optimized offshore engineering centers providing 24/7 development capacity aligned to your delivery standards."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Model"
                    heading="Delivery Engagement Models"
                    layers={[
                        {
                            name: "Staff Augmentation",
                            description:
                                "Individual contributors embedded in your team — filling specific skill gaps with pre-vetted enterprise talent."
                        },
                        {
                            name: "Dedicated Project Teams",
                            description:
                                "Fully managed teams delivering scoped programs with defined milestones, governance, and executive reporting."
                        },
                        {
                            name: "Managed Services",
                            description:
                                "Ongoing technical operations delivered under SLA — your team focuses on strategy while we operate the platforms."
                        },
                        {
                            name: "Offshore Development Centers",
                            description:
                                "Dedicated offshore engineering capacity with onshore program management and quality governance oversight."
                        }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Value"
                    heading="Enterprise Workforce Advantages"
                    benefits={[
                        "Access pre-vetted enterprise engineering talent within 10 business days",
                        "Scale delivery teams up or down based on program phase and demand",
                        "Single vendor accountability for delivery quality and team performance",
                        "Reduce total talent cost by 30–40% through offshore delivery models",
                        "Maintain continuity with Delonti-managed knowledge transfer protocols",
                        "Clearance-eligible personnel available for sensitive federal programs"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Build Your Enterprise Delivery Team"
                    description="Tell us about your program and we'll design the right team model within 48 hours."
                    buttonText="Discuss Your Program"
                />
            </main>
            <Footer />
        </>
    );
}
