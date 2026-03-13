import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { ShieldAlert, PackageCheck, Cloud } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Federal Technology | Delonti Enterprise",
};

export default function FederalPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Federal Infrastructure"
                    subtitle="Mission-critical technology architectures for national security and planetary-scale operations."
                    breadcrumbs={[{ label: "Federal" }]}
                    backgroundImage="https://images.unsplash.com/photo-1523995462485-3d171b5c4fac?q=80&w=2070"
                />

                <OverviewSection
                    title="National Security"
                    heading="Defending the Homeland"
                    description="Delonti partners with the Department of Defense, Intelligence Community, and civilian federal agencies to architect systems where failure is not an option. From global secure logistics networks to classified cloud migrations, we deliver compliance-driven engineering excellence."
                    background="white"
                />

                <FeatureGrid
                    title="Core Operations"
                    heading="Federal Capabilities"
                    features={[
                        { title: "Defensive Cyber", description: "Zero-trust endpoints and active threat hunting protocols.", icon: <ShieldAlert className="w-6 h-6" /> },
                        { title: "Tactical Logistics", description: "Global RFID tracking for military hardware.", icon: <PackageCheck className="w-6 h-6" /> },
                        { title: "Cloud Migration", description: "IL4 and IL5 compliant data center transitions.", icon: <Cloud className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <SplitContentSection
                    title="Scale"
                    heading="Planetary Infrastructure"
                    description="The modern battlefield is digital. Our federal capabilities are designed to operate in Disconnected, Intermittent, and Limited (DIL) bandwidth environments, ensuring mission continuity regardless of geographical conditions."
                    listItems={[
                        "DoD CIO Zero Trust Architecture alignment",
                        "FedRAMP High & DISA IL5 cleared solutions",
                        "ITAR compliant hardware supply chains",
                        "Clearance-holding engineering teams"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                    imageAlt="Military Operations Data Center"
                    imagePosition="right"
                    background="white"
                />

                <IndustryUseCases
                    title="Agencies"
                    heading="Mission Deployments"
                    useCases={[
                        { title: "Defense Logistics", description: "Tracking critical munitions and rations across global supply lines.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" },
                        { title: "Civilian Health", description: "Securing national healthcare databases for the VA.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" },
                        { title: "Cyber Command", description: "Architecting the nation's digital perimeter defenses.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070", href: "/federal/cybersecurity" }
                    ]}
                    background="slate"
                />

                <BenefitsSection
                    title="Assurance"
                    heading="The Delonti Federal Advantage"
                    benefits={[
                        "100% US-based engineering and support personnel",
                        "Rigorous supply chain risk management (SCRM) protocols",
                        "Native integration with legacy DoD mainframes",
                        "Accelerated OTA (Other Transaction Authority) contracting capable"
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Engage the Federal Division"
                    description="Contact our cleared architects to discuss your specific agency requirements."
                />
            </main>
            <Footer />
        </>
    );
}
