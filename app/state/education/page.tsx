import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import IndustryUseCases from "@/components/IndustryUseCases";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { UserCheck, Fingerprint, CalendarCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education Tech | Delonti Enterprise",
};

export default function EducationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Educational Infrastructure"
                    subtitle="Securing campuses and automating administrative tracking."
                    breadcrumbs={[
                        { label: "State", href: "/state" },
                        { label: "Education" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Modern Campuses"
                    heading="Safe and Efficient Learning"
                    description="Modern campuses require sophisticated digital ecosystems to protect students and automate laborious administrative tasks. Using RFID technology and secure network architectures, we help universities and K-12 districts modernize their facilities."
                    background="white"
                />

                <FeatureGrid
                    title="Systems"
                    heading="Campus Solutions"
                    features={[
                        { title: "Campus Access", description: "Biometric and RFID secured entry protocols.", icon: <Fingerprint className="w-6 h-6" /> },
                        { title: "Student Tracking", description: "UHF RFID for passive location monitoring during emergencies.", icon: <UserCheck className="w-6 h-6" /> },
                        { title: "Attendance Automation", description: "Frictionless class check-ins via smart ID cards.", icon: <CalendarCheck className="w-6 h-6" /> }
                    ]}
                    columns={3}
                    background="slate"
                />

                <SplitContentSection
                    title="Infrastructure"
                    heading="Connected Campus Blueprints"
                    description="A truly smart campus integrates access controls with HVAC utilization, emergency lockdowns, and library asset management. Our unified platform creates a single pane of glass for university administrators."
                    listItems={[
                        "NFC and RFID dual-band ID cards",
                        "Emergency lockdown integrations",
                        "High-value lab equipment tracking",
                        "Automated facility energy reduction"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
                    imageAlt="University Campus"
                    imagePosition="right"
                    background="white"
                />

                <IndustryUseCases
                    title="Districts"
                    heading="Educational Deployments"
                    useCases={[
                        { title: "Universities", description: "Dormitory access and stadium crowd control.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070" },
                        { title: "K-12 Schools", description: "Automated parent pickup validation and bus tracking.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132" },
                        { title: "Education Departments", description: "State-wide standardized hardware procurement.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" }
                    ]}
                    background="slate"
                />

                <BenefitsSection
                    title="Value"
                    heading="Administrative Impact"
                    benefits={[
                        "Eliminate manual roll-call, saving thousands of instructional hours",
                        "Instantly locate all students and staff during crisis lockdowns",
                        "Reduce theft of high-value laboratory equipment by 90%",
                        "Lower campus energy costs via occupancy-based HVAC control"
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Upgrade Your Campus"
                    description="Schedule a facility technology review with our education specialists."
                />
            </main>
            <Footer />
        </>
    );
}
