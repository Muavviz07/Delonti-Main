import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { Tag, Truck, ShieldCheck, Cloud, BarChart3, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SMB Solutions | Delonti",
};

export default function SmbPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="SMB Solutions"
                    subtitle="Affordable Smart Technology for Growing Businesses. Fast to deploy, easy to manage, and built to grow with you."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070"
                />

                <OverviewSection
                    title="Who We Serve"
                    heading="Built for Growing Businesses"
                    description={
                        "Small and mid-sized businesses need cost-effective technology solutions that deliver fast results. Delonti provides scalable solutions that improve visibility, security, and operational efficiency without the complexity or cost of enterprise platforms. Whether you run a retail chain, a logistics fleet, or a growing healthcare clinic, our solutions are designed to deliver measurable ROI from day one."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Our Solutions"
                    heading="Everything Your Business Needs"
                    features={[
                        {
                            icon: <Tag className="w-6 h-6" />,
                            title: "Asset Tracking & Inventory",
                            description:
                                "Real-time inventory visibility and warehouse asset tracking using RFID and IoT — no manual counts, no blind spots."
                        },
                        {
                            icon: <Truck className="w-6 h-6" />,
                            title: "Fleet & Vehicle Tracking",
                            description:
                                "GPS-powered vehicle tracking with driver monitoring, route optimization, and fuel usage reporting."
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6" />,
                            title: "Cybersecurity Essentials",
                            description:
                                "Affordable security packages covering risk assessments, endpoint protection, network security, and incident readiness."
                        },
                        {
                            icon: <Cloud className="w-6 h-6" />,
                            title: "Cloud & IT Modernization",
                            description:
                                "Cloud migration, backup and recovery, office infrastructure upgrades, and fully managed IT services."
                        },
                        {
                            icon: <BarChart3 className="w-6 h-6" />,
                            title: "Data & Business Insights",
                            description:
                                "Operational dashboards, inventory analytics, sales reporting, and automated business intelligence built for SMBs."
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: "Technical Staffing",
                            description:
                                "On-demand software developers, DevOps engineers, IT admins, and short-term project teams — exactly when you need them."
                        }
                    ]}
                    columns={3}
                    background="slate"
                />

                <SplitContentSection
                    title="Our Approach"
                    heading="Simple, Fast, and Affordable"
                    description={
                        "We know SMBs don't have the budget or bandwidth for lengthy implementations. Every Delonti SMB solution is designed for rapid deployment, minimal disruption, and immediate impact. Our team works alongside yours to ensure technology works for your business — not the other way around."
                    }
                    listItems={[
                        "Deployment timelines measured in weeks, not months",
                        "Flat-rate pricing with no hidden enterprise fees",
                        "Dedicated onboarding support and training included",
                        "Scalable infrastructure that grows as your business grows"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                    imageAlt="SMB team collaboration"
                    imagePosition="right"
                    background="white"
                />

                <IndustryUseCases
                    title="Industries"
                    heading="Sectors We Serve"
                    background="slate"
                    useCases={[
                        {
                            title: "Retail & Warehousing",
                            description:
                                "Inventory accuracy, loss prevention, and stock monitoring across single or multi-location retail operations.",
                            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
                            href: "/private/smb/asset-tracking"
                        },
                        {
                            title: "Logistics & Field Services",
                            description:
                                "Fleet visibility, route efficiency, and driver accountability for logistics companies and field service teams.",
                            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
                            href: "/private/smb/fleet-tracking"
                        },
                        {
                            title: "Healthcare Clinics",
                            description:
                                "Equipment tracking, cybersecurity compliance, and secure IT infrastructure for clinics and medical service providers.",
                            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
                            href: "/private/smb/cybersecurity"
                        }
                    ]}
                />

                <StatsSection
                    background="white"
                    stats={[
                        { value: "3", suffix: "x", label: "Faster Deployment vs Enterprise" },
                        { value: "40", suffix: "%", label: "Average Cost Savings" },
                        { value: "99", suffix: "%", label: "Client Satisfaction Rate" },
                        { value: "30", suffix: "+", label: "SMB Clients Served" }
                    ]}
                />

                <CTASection
                    heading="Ready to Modernize Your Business?"
                    description="Get started with a free technology assessment. No commitment, no complexity — just clarity."
                    buttonText="Book a Free Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
