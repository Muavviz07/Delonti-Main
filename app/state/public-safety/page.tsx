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
import { RadioReceiver, LocateFixed, ActivitySquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Public Safety Tech | Delonti Enterprise",
};

export default function PublicSafetyPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Public Safety Infrastructure"
                    subtitle="Mission-critical connectivity and asset tracking for first responders."
                    breadcrumbs={[
                        { label: "State", href: "/state" },
                        { label: "Public Safety" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070"
                />

                <OverviewSection
                    title="Mission First"
                    heading="Enabling Rapid Response"
                    description="In emergency scenarios, seconds dictate outcomes. Delonti equips police, fire, and EMS departments with the real-time situational awareness and secure communications architecture required to operate effectively in volatile environments."
                    background="white"
                />

                <FeatureGrid
                    title="Core Systems"
                    heading="Specialized Capabilities"
                    features={[
                        { title: "Emergency Dispatch", description: "Ultra-low latency CAD integration systems.", icon: <RadioReceiver className="w-6 h-6" /> },
                        { title: "Equipment Tracking", description: "RFID tagging for high-value tactical gear and medical supplies.", icon: <LocateFixed className="w-6 h-6" /> },
                        { title: "Responder Monitoring", description: "Biometric and locational tracking for personnel safety.", icon: <ActivitySquare className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Architecture"
                    heading="Data Pipeline"
                    layers={[
                        { name: "Field Sensors (Edge)", description: "Body cameras, vehicle telemetry, and biometric wearables." },
                        { name: "Secure Mobile Network", description: "Encrypted transmission over FirstNet or dedicated municipal LTE." },
                        { name: "Ingestion Platform", description: "FedRAMP High compliant data processing engine." },
                        { name: "Command Dashboards", description: "Real-time unified operating canvas for dispatchers." }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Users"
                    heading="Agency Implementations"
                    useCases={[
                        { title: "Police Departments", description: "Evidence tracking chains and fleet modernization.", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070" },
                        { title: "Fire & Rescue", description: "Thermal monitoring overlays and apparatus telemetry.", image: "https://images.unsplash.com/photo-1473625247510-8b0126a0c5bd?q=80&w=2047" },
                        { title: "Emergency Management", description: "Disaster coordination centers and resource allocation.", image: "https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070" }
                    ]}
                    background="slate"
                />

                <ImplementationSteps
                    title="Deployment"
                    heading="Project Lifecycle"
                    steps={[
                        { title: "Threat & Network Audit", description: "Mapping existing communication blind spots." },
                        { title: "Hardware Procurement", description: "Sourcing ruggedized, certified field equipment." },
                        { title: "Platform Integration", description: "Connecting new sensors to legacy CAD software." },
                        { title: "Field Training", description: "Comprehensive drills with squad leaders." }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="Operational Advantages"
                    benefits={[
                        "Reduced dispatch-to-scene latency by up to 22%",
                        "Automated chain-of-custody reporting for evidence rooms",
                        "100% visibility of active personnel locations during crises",
                        "Guaranteed network priority during public events"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Secure Your City"
                    description="Speak with our emergency systems architects to audit your current dispatch network."
                />
            </main>
            <Footer />
        </>
    );
}
