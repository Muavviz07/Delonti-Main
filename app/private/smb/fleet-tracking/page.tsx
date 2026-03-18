import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { MapPin, UserCheck, Route, Fuel } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet & Vehicle Tracking | SMB Solutions | Delonti",
};

export default function FleetTrackingPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Fleet & Vehicle Tracking"
                    subtitle="GPS-powered fleet intelligence for logistics, construction, and field service teams."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Fleet & Vehicle Tracking" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070"
                />

                <OverviewSection
                    title="GPS / IoT"
                    heading="Full Visibility Over Your Fleet"
                    description={
                        "For SMBs that depend on vehicles — whether delivery vans, service trucks, or construction equipment — losing visibility means losing money. Delonti's GPS and IoT-powered fleet tracking gives you real-time location data, driver behavior insights, and fuel usage reporting so you can reduce costs, improve safety, and keep your team accountable."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Solutions"
                    heading="Fleet Management Capabilities"
                    features={[
                        {
                            icon: <MapPin className="w-6 h-6" />,
                            title: "Vehicle Tracking",
                            description:
                                "Real-time GPS location for every vehicle in your fleet. Know where each asset is at any moment, from any device."
                        },
                        {
                            icon: <UserCheck className="w-6 h-6" />,
                            title: "Driver Monitoring",
                            description:
                                "Monitor speed, harsh braking, idling, and driving patterns to improve safety and reduce liability exposure."
                        },
                        {
                            icon: <Route className="w-6 h-6" />,
                            title: "Route Optimization",
                            description:
                                "Automatically calculate the most efficient routes to reduce fuel costs, delivery times, and vehicle wear."
                        },
                        {
                            icon: <Fuel className="w-6 h-6" />,
                            title: "Fuel Usage Monitoring",
                            description:
                                "Track fuel consumption per vehicle and identify inefficiencies — reducing fleet operating costs significantly."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Industries"
                    heading="Logistics, Construction & Field Services"
                    description={
                        "Whether you operate a last-mile delivery fleet, a construction equipment yard, or a field service operation, Delonti's fleet tracking integrates seamlessly with your dispatch and scheduling workflows — giving your team the visibility they need to operate efficiently."
                    }
                    listItems={[
                        "Logistics: On-time delivery tracking and proof-of-delivery reporting",
                        "Construction: Heavy equipment location and idle time monitoring",
                        "Field Services: Technician dispatch optimization and ETAs",
                        "All Industries: Maintenance scheduling and breakdown alerts"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069"
                    imageAlt="Fleet tracking dashboard"
                    imagePosition="left"
                    background="white"
                />

                <BenefitsSection
                    title="Impact"
                    heading="The Fleet Advantage"
                    benefits={[
                        "Reduce fuel costs by up to 20% through route optimization",
                        "Cut unauthorized vehicle use and after-hours incidents",
                        "Improve on-time delivery rates with live ETA tracking",
                        "Lower insurance premiums with driver safety reporting",
                        "Automate maintenance scheduling based on mileage and usage",
                        "Access fleet data from any device, anywhere, in real time"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Track Your Fleet Smarter"
                    description="Start with a free fleet assessment and see how much you can save in the first 90 days."
                    buttonText="Get a Free Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
