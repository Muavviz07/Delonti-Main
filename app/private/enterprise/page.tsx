import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import StatsSection from "@/components/StatsSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTASection from "@/components/CTASection";
import { ScanLine, Factory, ShieldAlert, BrainCircuit, CloudCog, Network, BriefcaseBusiness } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Solutions | Delonti",
};

export default function EnterprisePage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Enterprise Solutions"
                    subtitle="Enterprise Platforms for Visibility, Security, and Operational Intelligence."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Enterprise" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                />

                <OverviewSection
                    title="Who We Serve"
                    heading="Built for Complex, Multi-Site Operations"
                    description={
                        "Large organizations require integrated technology platforms that support complex operations across multiple locations. Delonti provides enterprise-grade solutions that combine RFID, IoT, cybersecurity, and advanced analytics to deliver real-time operational intelligence. From global supply chains to smart industrial facilities, we architect the infrastructure that powers enterprise performance."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Our Platforms"
                    heading="Enterprise Technology Suite"
                    features={[
                        {
                            icon: <ScanLine className="w-6 h-6" />,
                            title: "Asset Visibility",
                            description:
                                "Large-scale RFID and IoT platforms for multi-site inventory, supply chain traceability, and asset lifecycle management."
                        },
                        {
                            icon: <Factory className="w-6 h-6" />,
                            title: "Industrial IoT",
                            description:
                                "Smart facilities, predictive maintenance, and industrial monitoring for energy, manufacturing, and transportation."
                        },
                        {
                            icon: <ShieldAlert className="w-6 h-6" />,
                            title: "Enterprise Cybersecurity",
                            description:
                                "Zero Trust architecture, compliance frameworks, and risk governance for finance, healthcare, and technology sectors."
                        },
                        {
                            icon: <BrainCircuit className="w-6 h-6" />,
                            title: "Data & AI Platforms",
                            description:
                                "Enterprise data platforms, AI automation, and predictive analytics that convert operational data into intelligence."
                        },
                        {
                            icon: <CloudCog className="w-6 h-6" />,
                            title: "Cloud & DevOps",
                            description:
                                "Multi-cloud infrastructure, DevOps pipelines, cloud security, and legacy system modernization at scale."
                        },
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Systems Integration",
                            description:
                                "ERP integration, IoT platform connectivity, and enterprise system interoperability for unified operations."
                        },
                        {
                            icon: <BriefcaseBusiness className="w-6 h-6" />,
                            title: "Workforce Solutions",
                            description:
                                "Engineering teams, IT transformation specialists, managed technical services, and offshore development programs."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Our Approach"
                    heading="Integrated Platforms, Not Isolated Tools"
                    description={
                        "Enterprise transformation fails when technology is deployed in silos. Delonti architects integrated platforms where RFID, IoT, cybersecurity, and data systems share a common data layer — giving your operations a single source of truth across every site, system, and stakeholder."
                    }
                    listItems={[
                        "Architecture-first approach — designed for your scale from day one",
                        "Native integration with SAP, Oracle, Azure, AWS, and major ERPs",
                        "Dedicated enterprise delivery team with a single point of accountability",
                        "Ongoing managed services, SLA-backed support, and continuous optimization"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                    imageAlt="Enterprise technology infrastructure"
                    imagePosition="right"
                    background="white"
                />

                <StatsSection
                    background="slate"
                    stats={[
                        { value: "500", suffix: "+", label: "Enterprise Deployments" },
                        { value: "50", suffix: "M+", label: "Assets Tracked Globally" },
                        { value: "99.9", suffix: "%", label: "Platform Uptime SLA" },
                        { value: "10", suffix: "+", label: "Years Enterprise Experience" }
                    ]}
                />

                <IndustryUseCases
                    title="Industries"
                    heading="Enterprise Sectors We Serve"
                    background="white"
                    useCases={[
                        {
                            title: "Manufacturing",
                            description:
                                "Asset visibility, predictive maintenance, and production floor intelligence for global manufacturing operations.",
                            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
                            href: "/private/enterprise/asset-visibility"
                        },
                        {
                            title: "Logistics & Transportation",
                            description:
                                "End-to-end supply chain traceability, fleet intelligence, and warehouse automation for logistics enterprises.",
                            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
                            href: "/private/enterprise/industrial-iot"
                        },
                        {
                            title: "Financial Services",
                            description:
                                "Zero Trust cybersecurity, compliance frameworks, and secure cloud infrastructure for banks and financial institutions.",
                            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
                            href: "/private/enterprise/cybersecurity"
                        }
                    ]}
                />

                <CTASection
                    heading="Design Your Enterprise Platform"
                    description="Engage our enterprise architects for a tailored technology strategy and implementation roadmap."
                    buttonText="Schedule a Strategy Call"
                />
            </main>
            <Footer />
        </>
    );
}
