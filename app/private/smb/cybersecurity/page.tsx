import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { ClipboardCheck, Shield, Network, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cybersecurity Essentials | SMB Solutions | Delonti",
};

export default function CybersecurityPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Cybersecurity Essentials"
                    subtitle="Affordable, right-sized security protection for small and medium businesses."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Cybersecurity Essentials" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                />

                <OverviewSection
                    title="SMB Security"
                    heading="Enterprise-Grade Protection at SMB Prices"
                    description={
                        "Cyberattacks don't only target large corporations — in fact, over 60% of attacks target small and medium businesses. Delonti's SMB Cybersecurity Essentials packages deliver the critical security protections your business needs: risk assessments, endpoint security, network protection, and incident response readiness — all at a price point built for your budget."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Services"
                    heading="Your Security Essentials"
                    features={[
                        {
                            icon: <ClipboardCheck className="w-6 h-6" />,
                            title: "Security Risk Assessments",
                            description:
                                "A comprehensive review of your current security posture — identifying vulnerabilities before attackers do."
                        },
                        {
                            icon: <Shield className="w-6 h-6" />,
                            title: "Endpoint Protection",
                            description:
                                "Next-gen antivirus and EDR deployed across every employee device to stop threats before they spread."
                        },
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Network Security",
                            description:
                                "Firewall configuration, secure Wi-Fi, and network segmentation to protect your business data and operations."
                        },
                        {
                            icon: <AlertTriangle className="w-6 h-6" />,
                            title: "Incident Response Readiness",
                            description:
                                "A tested response plan so your team knows exactly what to do if a breach or ransomware attack occurs."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Who It's For"
                    heading="Healthcare Clinics, Retail Chains & Service Companies"
                    description={
                        "Regulated industries and customer-facing businesses face the highest risk from data breaches. Our SMB security packages are purpose-built for businesses that need to protect customer data, maintain compliance, and stay operational — without a dedicated IT security team."
                    }
                    listItems={[
                        "Healthcare clinics: HIPAA compliance and patient data protection",
                        "Retail chains: PCI-DSS compliance and point-of-sale security",
                        "Service companies: Client data security and remote work protection",
                        "All SMBs: Cyber insurance readiness and documented compliance"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
                    imageAlt="Cybersecurity monitoring"
                    imagePosition="right"
                    background="white"
                />

                <BenefitsSection
                    title="Outcomes"
                    heading="What Strong Security Delivers"
                    benefits={[
                        "Reduce risk of a damaging data breach or ransomware attack",
                        "Meet HIPAA, PCI-DSS, and SOC2 compliance requirements",
                        "Lower cyber insurance premiums with documented protections",
                        "Protect remote workers without sacrificing productivity",
                        "Detect and contain threats before they cause business disruption",
                        "Build customer trust with demonstrated data security practices"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Start With a Free Risk Assessment"
                    description="Our security team will identify your top vulnerabilities and recommend a right-sized protection plan."
                    buttonText="Get Your Free Assessment"
                />
            </main>
            <Footer />
        </>
    );
}
