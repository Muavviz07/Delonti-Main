import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitContentSection from "@/components/SplitContentSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Public Sector | Delonti Enterprise",
};

export default function PublicSectorPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Public Sector Solutions"
                    subtitle="Empowering defense, state, and local agencies with secure, modern infrastructure."
                    breadcrumbs={[{ label: "Public Sector" }]}
                    backgroundImage="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2070&auto=format&fit=crop"
                />

                {/* Civilian */}
                <Link href="/state" style={{ display: "block" }}>
                    <div style={{ cursor: "pointer" }}>
                        <SplitContentSection
                            title="Civilian"
                            heading="State & Local Government"
                            description="Modernizing municipal infrastructure through intelligent technology. We architects smart city grids, digitize health and human services, and secure public safety communications."
                            listItems={[
                                "Smart City IoT Deployments",
                                "Transportation & Mobility Tracking",
                                "Homeless & Social Impact Analytics",
                            ]}
                            imageSrc="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144"
                            imageAlt="Smart City"
                            imagePosition="right"
                            background="white"
                        />
                    </div>
                </Link>

                {/* Defense */}
                <Link href="/federal" style={{ display: "block" }}>
                    <div style={{ cursor: "pointer" }}>
                        <SplitContentSection
                            title="Defense"
                            heading="Federal Capabilities"
                            description="Delivering mission-critical reliability to defense and federal agencies. Our Zero-Trust architectures and global logistics pipelines are built for high-stakes compliance."
                            listItems={[
                                "Zero-Trust Cybersecurity per OMB M-22-09",
                                "Secure RFID Logistics & Asset Tracking",
                                "FedRAMP Cloud Modernization",
                            ]}
                            imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
                            imageAlt="Federal Security"
                            imagePosition="left"
                            background="slate"
                        />
                    </div>
                </Link>

                <CTASection
                    heading="Partner with Delonti"
                    description="Speak with our public sector specialists to initiate your modernization effort."
                />
            </main>
            <Footer />
        </>
    );
}