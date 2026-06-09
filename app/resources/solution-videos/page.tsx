import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import VideoGallery from "@/components/VideoGallery";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solution Videos | Delonti Enterprise",
    description: "Explore our library of intelligent infrastructure and RFID tracking solution videos.",
};

export default function SolutionVideosPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Solution Videos"
                    subtitle="Explore real-world deployments and technical demonstrations of our intelligent infrastructure."
                    breadcrumbs={[{ label: "Resources", href: "#" }, { label: "Solution Videos" }]}
                    backgroundImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
                />

                <VideoGallery />

                <CTASection
                    heading="Ready to Transform Your Operations?"
                    description="Our experts are ready to design a custom solution tailored to your operational needs."
                    buttonText="Request Demo"
                />
            </main>
            <Footer />
        </>
    );
}
