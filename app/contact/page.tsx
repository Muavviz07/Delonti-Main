"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import SplitContentSection from "@/components/SplitContentSection";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Handshake, PhoneCall, Globe2 } from "lucide-react";
import Contact from "@/components/Contact"; // Re-using existing contact form block if possible, or using split content

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Contact Delonti"
                    subtitle="Initiate a dialogue with our senior engineering architects."
                    breadcrumbs={[{ label: "Contact" }]}
                    backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Direct Line"
                    heading="Global Expertise, Local Deployment"
                    description="Whether you represent a federal agency seeking a Zero-Trust audit, or a global manufacturer looking to automate logistics, our team is ready to analyze your complex requirements."
                    background="white"
                />

                <FeatureGrid
                    title="Inquiries"
                    heading="How Can We Help?"
                    features={[
                        { title: "Strategic Consulting", description: "Architecture audits and feasibility studies.", icon: <Globe2 className="w-6 h-6" /> },
                        { title: "Partnership Network", description: "Integrate your technology into the Delonti ecosystem.", icon: <Handshake className="w-6 h-6" /> },
                        { title: "24/7 Support", description: "Direct access to our dedicated incident response teams.", icon: <PhoneCall className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <SplitContentSection
                    title="Headquarters"
                    heading="Get In Touch"
                    description="Connect with our specialists to discuss your enterprise infrastructure needs. Fill out the form below or reach us directly at our international routing numbers."
                    listItems={[
                        "Address Line 1",
                        "Address Line 2",
                        "Phone / Contact Info 1"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
                    imageAlt="High-end office"
                    imagePosition="left"
                    background="white"
                />

                {/* Existing Contact Form Block */}
                <Contact />

            </main>
            <Footer />
        </>
    );
}
