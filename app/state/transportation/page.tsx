import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import IndustryUseCases from "@/components/IndustryUseCases";
import ImplementationSteps from "@/components/ImplementationSteps";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Truck, MapPin, BarChart3 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transportation Tech | Delonti Enterprise",
};

export default function TransportationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Smart Transportation"
                    subtitle="Intelligent infrastructure for civic mobility."
                    breadcrumbs={[
                        { label: "State", href: "/state" },
                        { label: "Transportation" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Mobility"
                    heading="Next-Generation Transit"
                    description="We equip Departments of Transportation with the sensor density and analytics engines required to optimize traffic flow, reduce emissions, and manage comprehensive fleet operations across expansive state networks."
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Transportation Logistics"
                    features={[
                        { title: "Fleet Tracking", description: "Real-time telemetry and maintenance predicting.", icon: <Truck className="w-6 h-6" /> },
                        { title: "Traffic Analytics", description: "AI-driven intersection optimization.", icon: <BarChart3 className="w-6 h-6" /> },
                        { title: "Vehicle Monitoring", description: "V2X / Connected road infrastructure.", icon: <MapPin className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="System Layers"
                    heading="Transit Data Flow"
                    layers={[
                        { name: "IoT Road Sensors", description: "Lidar, induction loops, and smart traffic cameras." },
                        { name: "Edge Processing", description: "On-site filtration of useless telemetry data." },
                        { name: "Central Analytics", description: "AI models predicting congestion and rerouting logic." }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Sectors"
                    heading="Transport Applications"
                    useCases={[
                        { title: "Public Transit", description: "Bus scheduling optimizations and passenger metrics.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069" },
                        { title: "Traffic Control", description: "Automated tolling and dynamic lane management.", image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070" },
                        { title: "Logistics Networks", description: "State-wide commercial port scheduling.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" }
                    ]}
                    background="slate"
                />

                <ImplementationSteps
                    title="Phases"
                    heading="Deployment Roadmap"
                    steps={[
                        { title: "Corridor Analysis", description: "Identifying highest-impact congestion nodes." },
                        { title: "Sensor Installation", description: "Minimal-disruption hardware mounting." },
                        { title: "Algorithm Tuning", description: "Calibrating AI logic against real-world traffic." }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Results"
                    heading="Civic Impact"
                    benefits={[
                        "Reduce average commuter delay by 18%",
                        "Lower municipal fleet maintenance costs through predictive analysis",
                        "Eliminate manual road surveys via automated distress detection",
                        "Decrease carbon emissions through optimized signal timing"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Modernize Your Corridors"
                    description="Engage our transit engineering team for a feasibility study."
                />
            </main>
            <Footer />
        </>
    );
}
