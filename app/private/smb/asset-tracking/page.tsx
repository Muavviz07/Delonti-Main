import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { PackageSearch, Warehouse, ShoppingCart, Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Asset Tracking & Inventory | SMB Solutions | Delonti",
};

export default function AssetTrackingPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Asset Tracking & Inventory Management"
                    subtitle="Real-time visibility for your inventory, equipment, and warehouse assets."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Asset Tracking" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072"
                />

                <OverviewSection
                    title="RFID / IoT"
                    heading="Know Where Everything Is, Always"
                    description={
                        "Manual inventory counts are slow, error-prone, and expensive. Delonti's RFID and IoT-powered asset tracking gives small and medium businesses complete, real-time visibility over their inventory, warehouse assets, and equipment — without the enterprise price tag. From retail stockrooms to healthcare equipment bays, our solutions eliminate blind spots and deliver accuracy from day one."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="What We Track"
                    features={[
                        {
                            icon: <PackageSearch className="w-6 h-6" />,
                            title: "Inventory Visibility",
                            description:
                                "Live stock counts across all locations without manual scanning. Know exactly what you have, where it is, and when it moves."
                        },
                        {
                            icon: <Warehouse className="w-6 h-6" />,
                            title: "Warehouse Asset Tracking",
                            description:
                                "Automate the tracking of pallets, bins, equipment, and tools across your warehouse floor with passive RFID arrays."
                        },
                        {
                            icon: <ShoppingCart className="w-6 h-6" />,
                            title: "Retail Stock Monitoring",
                            description:
                                "Prevent stockouts and overstocking with smart shelf sensors and automated replenishment alerts for retail environments."
                        },
                        {
                            icon: <Wrench className="w-6 h-6" />,
                            title: "Equipment Tracking",
                            description:
                                "Track high-value tools, medical devices, and equipment across multiple rooms or sites with real-time location data."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Industries"
                    heading="Built for Retail, Warehousing, Logistics & Clinics"
                    description={
                        "Our asset tracking solutions are deployed across a wide range of SMB environments. Whether you're managing retail inventory across multiple stores, tracking warehouse pallets, or ensuring medical equipment is always where it should be, our platform adapts to your environment."
                    }
                    listItems={[
                        "Retail: Multi-location stock accuracy and loss prevention",
                        "Warehousing: Dock-to-dock asset visibility and automated cycle counts",
                        "Logistics: Equipment and shipment tracking across facilities",
                        "Healthcare Clinics: Medical device location and utilization tracking"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                    imageAlt="Warehouse asset tracking"
                    imagePosition="right"
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="What You Gain"
                    benefits={[
                        "Achieve 99%+ inventory accuracy — eliminate manual count errors",
                        "Reduce time spent on stock checks by up to 75%",
                        "Prevent equipment loss and unauthorized asset removal",
                        "Improve customer service with real-time stock availability",
                        "Integrate directly with your existing ERP or POS systems",
                        "Deploy in days, not months — minimal infrastructure changes"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="See It In Action"
                    description="Book a live demo and see how RFID asset tracking works in your type of business."
                    buttonText="Request a Demo"
                />
            </main>
            <Footer />
        </>
    );
}
