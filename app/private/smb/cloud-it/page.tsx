import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { CloudUpload, DatabaseBackup, Monitor, Headphones } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud & IT Modernization | SMB Solutions | Delonti",
};

export default function CloudItPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Cloud & IT Modernization"
                    subtitle="Modern, managed IT infrastructure for businesses ready to scale."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Cloud & IT Services" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034"
                />

                <OverviewSection
                    title="SMB IT Infrastructure"
                    heading="Modern IT, Without the Complexity"
                    description={
                        "Outdated IT infrastructure holds businesses back — slow systems, data loss risk, and high maintenance costs. Delonti's Cloud & IT Modernization services move your business to modern, cloud-based infrastructure that is faster, more secure, and easier to manage — with full support from our team every step of the way."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Services"
                    heading="IT Solutions for SMBs"
                    features={[
                        {
                            icon: <CloudUpload className="w-6 h-6" />,
                            title: "Cloud Migration",
                            description:
                                "Move your data, applications, and workloads to the cloud with minimal disruption and a clear migration roadmap."
                        },
                        {
                            icon: <DatabaseBackup className="w-6 h-6" />,
                            title: "Backup & Disaster Recovery",
                            description:
                                "Automated backup schedules and tested disaster recovery plans so your business never loses critical data."
                        },
                        {
                            icon: <Monitor className="w-6 h-6" />,
                            title: "Office Infrastructure Modernization",
                            description:
                                "Upgrade networking, hardware, and collaboration tools to support a modern, productive workplace."
                        },
                        {
                            icon: <Headphones className="w-6 h-6" />,
                            title: "Managed IT Services",
                            description:
                                "Ongoing monitoring, helpdesk support, and IT management — so you can focus on running your business."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Industries"
                    heading="Professional Services & SMB Enterprises"
                    description={
                        "From law firms and accounting practices to growing logistics companies, Delonti's managed IT services provide the foundation for reliable, secure operations. We become your outsourced IT department — proactive, responsive, and aligned with your business goals."
                    }
                    listItems={[
                        "Cloud-first infrastructure with Microsoft 365 and AWS/Azure integration",
                        "24/7 monitoring and proactive issue resolution",
                        "Predictable monthly pricing — no surprise IT bills",
                        "On-site and remote support available nationwide"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                    imageAlt="Modern office IT setup"
                    imagePosition="left"
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="What Modern IT Delivers"
                    benefits={[
                        "Eliminate costly on-premise server maintenance and upgrades",
                        "Reduce IT downtime with proactive 24/7 monitoring and response",
                        "Enable secure remote work across your entire team",
                        "Recover from any data loss event within hours, not days",
                        "Scale your IT infrastructure as your team and business grows",
                        "Consolidate IT costs into a single, predictable monthly fee"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Modernize Your IT Today"
                    description="Book a free IT review and get a clear, jargon-free modernization roadmap."
                    buttonText="Book a Free IT Review"
                />
            </main>
            <Footer />
        </>
    );
}
