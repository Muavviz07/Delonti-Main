import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import { Code2, GitBranch, Server, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Staffing | SMB Solutions | Delonti",
};

export default function TechnicalStaffingPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Technical Staffing"
                    subtitle="On-demand technical talent for growing businesses that need expertise now."
                    breadcrumbs={[
                        { label: "Private Sector", href: "/private" },
                        { label: "SMB", href: "/private/smb" },
                        { label: "Technical Staffing" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                />

                <OverviewSection
                    title="Resource Augmentation"
                    heading="The Right Talent, Right When You Need It"
                    description={
                        "Hiring full-time technical staff is expensive and slow. Delonti's Technical Staffing service gives SMBs flexible access to pre-vetted software developers, DevOps engineers, IT administrators, and project teams — on-demand, at a fraction of the cost of a full-time hire. Scale your team up or down as your projects demand."
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Talent"
                    heading="The Expertise You Need"
                    features={[
                        {
                            icon: <Code2 className="w-6 h-6" />,
                            title: "Software Developers",
                            description:
                                "Full-stack, frontend, backend, and mobile developers for web applications, custom platforms, and integrations."
                        },
                        {
                            icon: <GitBranch className="w-6 h-6" />,
                            title: "DevOps Engineers",
                            description:
                                "CI/CD pipeline setup, cloud infrastructure automation, and deployment expertise for faster, reliable releases."
                        },
                        {
                            icon: <Server className="w-6 h-6" />,
                            title: "IT Administrators",
                            description:
                                "Experienced IT admins for network management, user support, system maintenance, and day-to-day IT operations."
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: "Short-Term Project Teams",
                            description:
                                "Complete, coordinated project teams assembled quickly for defined-scope engagements — delivered on time and on budget."
                        }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="How It Works"
                    heading="Flexible Talent, Seamlessly Integrated"
                    description={
                        "We handle the sourcing, vetting, and onboarding — you get productive technical contributors from day one. Our talent works as an extension of your team, using your tools, following your processes, and delivering to your standards."
                    }
                    listItems={[
                        "Pre-vetted candidates matched to your technical requirements",
                        "Typical placement within 5 to 10 business days",
                        "Contract, contract-to-hire, and project-based engagements",
                        "Ongoing performance management and replacement guarantee"
                    ]}
                    imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                    imageAlt="Technical team collaboration"
                    imagePosition="left"
                    background="white"
                />

                <BenefitsSection
                    title="Value"
                    heading="Why Delonti Staffing"
                    benefits={[
                        "Access senior technical talent without the full-time salary cost",
                        "Start projects immediately — no lengthy hiring cycles",
                        "Scale your team up or down based on project needs",
                        "Reduce HR burden — we handle contracts and compliance",
                        "Work with talent already familiar with SMB environments",
                        "Replacement guarantee if a placement doesn't work out"
                    ]}
                    background="slate"
                />

                <CTASection
                    heading="Build Your Team Today"
                    description="Tell us what you need and we'll match you with the right talent within the week."
                    buttonText="Request Talent Now"
                />
            </main>
            <Footer />
        </>
    );
}
