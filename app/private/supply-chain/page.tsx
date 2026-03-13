import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import IndustryUseCases from "@/components/IndustryUseCases";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { SearchCode, Forklift, Map } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Supply Chain Tech | Delonti Enterprise",
};

export default function SupplyChainPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Supply Chain Visibility"
                    subtitle="Precision tracking and automation for global logistics networks."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "Supply Chain" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Logistics"
                    heading="End-to-End Transparency"
                    description="In modern commerce, a blind spot in your supply chain equates to lost revenue. Utilizing ultra-high frequency RFID tracking and global IoT platforms, we provide complete, real-time visibility from the manufacturing floor to the final retail destination."
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Logistical Automation"
                    features={[
                        { title: "Inventory Tracking", description: "Automated stock counts without line-of-sight.", icon: <SearchCode className="w-6 h-6" /> },
                        { title: "Warehouse Flow", description: "Smart docking and autonomous forklift routing.", icon: <Forklift className="w-6 h-6" /> },
                        { title: "Transit Monitoring", description: "Cold-chain temperature sensing and GPS tracing.", icon: <Map className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <StatsSection
                    stats={[
                        { value: "99.9", suffix: "%", label: "Inventory Accuracy" },
                        { value: "40", suffix: "%", label: "Faster Dock Times" },
                        { value: "10", suffix: "M+", label: "Tags Read Daily" },
                        { value: "0", suffix: "%", label: "Blind Spots" }
                    ]}
                    background="white"
                />

                <TechnologyArchitecture
                    title="Pipeline"
                    heading="Data Ingestion Flow"
                    layers={[
                        { name: "Passive RFID Tags", description: "Attached to individual SKUs and shipping pallets." },
                        { name: "Dock Door Readers", description: "Antenna arrays capturing thousands of tags per second." },
                        { name: "Edge Middleware", description: "Filtering redundant read-events to save bandwidth." },
                        { name: "ERP Integration", description: "Pushing clean data directly into SAP or Oracle systems." }
                    ]}
                    background="white"
                />

                <IndustryUseCases
                    title="Applications"
                    heading="Sector Implementations"
                    useCases={[
                        { title: "Retail", description: "Preventing stockouts and enabling true omnichannel fulfillment.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" },
                        { title: "Manufacturing", description: "Just-In-Time (JIT) parts tracking on the assembly line.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" },
                        { title: "Pharmaceuticals", description: "FDA compliant cold-chain monitoring vaccines.", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079" }
                    ]}
                    background="slate"
                />

                <ProcessTimeline
                    title="Execution"
                    heading="Deployment Approach"
                    nodes={[
                        { title: "Facility Mapping", description: "RF interference testing and optimal antenna placement." },
                        { title: "Tag Selection", description: "Choosing inlays based on material (metal, liquid)." },
                        { title: "Middleware Config", description: "Setting up read-zone boundaries and ERP APIs." },
                        { title: "Go-Live", description: "Parallel run testing followed by full automation." }
                    ]}
                    background="white"
                />

                <BenefitsSection
                    title="Metrics"
                    heading="Operational Impact"
                    benefits={[
                        "Achieve 99.9% inventory accuracy across distribution centers",
                        "Reduce truck loading and unloading times by 40%",
                        "Virtually eliminate shrinkage, loss, and misplaced pallets",
                        "Redirect labor from manual barcode scanning to high-value tasks"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Automate Your Logistics"
                    description="Speak with an RFID architect to design your tracking infrastructure."
                />
            </main>
            <Footer />
        </>
    );
}
