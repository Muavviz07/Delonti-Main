import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { LayoutDashboard, PackageSearch, TrendingUp, FileBarChart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data & Business Insights | SMB Solutions | Delonti",
};

export default function DataAnalyticsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Data & Business Insights"
                    subtitle="Turn your operational data into decisions that drive growth."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Data & Analytics" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                />

                <OverviewSection
                    title="Analytics"
                    heading="Data-Driven Decisions for SMBs"
                    description={
                        "Most SMBs are sitting on a goldmine of data they never use. Delonti's Data & Business Insights solutions transform your raw operational data — from inventory movements to sales transactions — into clear, actionable dashboards that help you make smarter decisions faster. No data science team required."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Analytics Built for Your Business"
                    features={[
                        {
                            icon: <LayoutDashboard className="w-6 h-6" />,
                            title: "Operational Dashboards",
                            description:
                                "Real-time visibility into your key business metrics — inventory levels, fleet status, team performance — all in one place."
                        },
                        {
                            icon: <PackageSearch className="w-6 h-6" />,
                            title: "Inventory Analytics",
                            description:
                                "Understand stock movement patterns, identify slow-moving items, and optimize reorder points to reduce carrying costs."
                        },
                        {
                            icon: <TrendingUp className="w-6 h-6" />,
                            title: "Sales Analytics",
                            description:
                                "Track revenue trends, top-performing products, and customer patterns to drive smarter sales strategies."
                        },
                        {
                            icon: <FileBarChart className="w-6 h-6" />,
                            title: "Reporting Automation",
                            description:
                                "Schedule and automate your key business reports — delivered to your inbox, no manual spreadsheets required."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Approach"
                    heading="Insights You Can Actually Use"
                    description={
                        "We don't build dashboards for dashboards' sake. Every analytics solution Delonti deploys is designed around your specific business questions — what's selling, what's costing too much, where the bottlenecks are. We integrate with your existing systems and deliver insights in plain language."
                    }
                    listItems={[
                        "Connect to your existing POS, ERP, and inventory systems",
                        "Mobile-friendly dashboards accessible from any device",
                        "Automated weekly and monthly business reports",
                        "Custom KPI tracking tailored to your industry"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                    imageAlt="Business analytics dashboard"
                    imagePosition="right"
                    background="white"
                />

                <BenefitsSection
                    title="Results"
                    heading="Better Decisions, Better Outcomes"
                    benefits={[
                        "Identify your most profitable products and services instantly",
                        "Reduce inventory carrying costs with demand-driven ordering",
                        "Spot operational bottlenecks before they impact customers",
                        "Replace manual reporting with automated, accurate data",
                        "Make confident business decisions backed by real numbers",
                        "Share live dashboards with your team or investors"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Unlock Your Business Data"
                    description="See a live demo of your data transformed into a dashboard built for your business."
                    buttonText="Request a Demo"
                />
            </main>
            <Footer />
        </>
    );
}
