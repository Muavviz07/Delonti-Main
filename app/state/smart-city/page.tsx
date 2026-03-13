import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import IndustryUseCases from "@/components/IndustryUseCases";
import CTASection from "@/components/CTASection";
import { Lightbulb, CloudRain, LayoutDashboard } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart City Tech | Delonti Enterprise",
};

export default function SmartCityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Smart City Ecosystems"
                    subtitle="Building the cognitive infrastructure for tomorrow's metropolises."
                    breadcrumbs={[
                        { label: "State", href: "/state" },
                        { label: "Smart City" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070"
                />

                <OverviewSection
                    title="Urban Optimization"
                    heading="The Intelligent Municipality"
                    description="A smart city is more than just connected streetlights; it is a holistic data ecosystem that breathes with its citizens. By deploying massive-scale IoT networks, we allow municipal governments to make proactive, mathematically backed decisions regarding urban planning, utilities, and citizen services."
                    background="white"
                />

                <FeatureGrid
                    title="Deployments"
                    heading="City-Wide Sensors"
                    features={[
                        { title: "Smart Lighting", description: "Responsive grid illumination reducing energy waste.", icon: <Lightbulb className="w-6 h-6" /> },
                        { title: "Environmental", description: "Micro-climate and air quality monitoring stations.", icon: <CloudRain className="w-6 h-6" /> },
                        { title: "Urban Analytics", description: "Pedestrian flow and commercial corridor health metrics.", icon: <LayoutDashboard className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Framework"
                    heading="The Smart City Operating System"
                    layers={[
                        { name: "Sensor Mesh Network", description: "Low-power WANs (LoRaWAN / 5G) distributed across city assets." },
                        { name: "IoT Gateway Layer", description: "Aggregating millions of telemetry pings securely." },
                        { name: "Civic Data Platform", description: "Centralized cloud brain analyzing patterns via Machine Learning." },
                        { name: "Citizen & Mayoral Dashboards", description: "Distributing insights to policy makers and the public." }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Applications"
                    heading="Municipal Functions"
                    useCases={[
                        { title: "Urban Planning", description: "Using foot-traffic data to optimize zoning.", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070" },
                        { title: "Waste Management", description: "Fill-level sensors optimizing garbage truck routes.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070" },
                        { title: "Environment Monitoring", description: "Predictive flood detection networks near river basins.", image: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?q=80&w=2070" }
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Begin Your Smart District Pilot"
                    description="Start with a localized IoT pilot program to prove ROI before city-wide expansion."
                />
            </main>
            <Footer />
        </>
    );
}
