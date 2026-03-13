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
import { Tag, Map, RefreshCcw } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RFID Asset Tracking | Delonti Enterprise",
};

export default function RFIDAssetPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="RFID Asset Tracking"
                    subtitle="Real-time visibility for high-value physical infrastructure and inventory."
                    breadcrumbs={[
                        { label: "Technology" },
                        { label: "RFID" },
                        { label: "Asset Tracking" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Technology"
                    heading="Radio-Frequency Identification"
                    description="Legacy barcode systems require manual line-of-sight scanning, introducing human error and severe bottlenecks into logistics channels. Active and Passive RFID architectures enable the simultaneous reading of thousands of assets in milliseconds, fundamentally changing how enterprises manage physical inventory."
                    background="white"
                />

                <FeatureGrid
                    title="Components"
                    heading="Hardware Capabilities"
                    features={[
                        { title: "Tagging Systems", description: "Passive UHF and Active battery-powered inlays for any material type.", icon: <Tag className="w-6 h-6" /> },
                        { title: "Real-Time Tracking", description: "Zonal accuracy using fixed chokepoint antennas.", icon: <Map className="w-6 h-6" /> },
                        { title: "Inventory Automation", description: "Removing manual cyclic counts from the warehouse floor.", icon: <RefreshCcw className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <TechnologyArchitecture
                    title="Stack"
                    heading="RFID Data Topology"
                    layers={[
                        { name: "RFID Tags (Endpoints)", description: "Encrypted memory chips transmitting Electronic Product Codes (EPCs)." },
                        { name: "Readers & Antennas", description: "Fixed portals or handhelds capturing radio backscatter." },
                        { name: "Edge Middleware", description: "Filtering millions of redundant read events into clean datasets." },
                        { name: "Analytics Dashboards", description: "Translating EPC movements into actionable business intelligence." }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Deployments"
                    heading="Where We Build"
                    useCases={[
                        { title: "Warehousing", description: "Automated dock-door shipping and receiving.", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072" },
                        { title: "Manufacturing", description: "Work-In-Process (WIP) tracking across assembly lines.", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070" },
                        { title: "Healthcare Labs", description: "Chain-of-custody tracking for biological samples.", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070" }
                    ]}
                    background="slate"
                />

                <ImplementationSteps
                    title="Rollout"
                    heading="Engineering the Physics"
                    steps={[
                        { title: "RF Survey", description: "Analyzing fluid and metal interference in the facility." },
                        { title: "Hardware Selection", description: "Matching antenna gain and tag memory to the use-case." },
                        { title: "Portal Construction", description: "Mounting arrays at critical facility chokepoints." },
                        { title: "ERP Integration", description: "Piping the clean data into SAP, Oracle, or custom backends." }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Value"
                    heading="The Tracking Edge"
                    benefits={[
                        "Achieve consistent 99.9% inventory accuracy across massive footprints",
                        "Eliminate 'ghost inventory' and over-purchasing safety stock",
                        "Reduce truck dwell times at loading docks by 45%",
                        "Prevent loss and secure chain-of-custody for high-value items"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Deploy RFID Today"
                    description="Speak with an RF engineer to spec out your facility's requirements."
                />
            </main>
            <Footer />
        </>
    );
}
