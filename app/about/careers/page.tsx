import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import OverviewSection from "@/components/OverviewSection";
import FeatureGrid from "@/components/FeatureGrid";
import SplitContentSection from "@/components/SplitContentSection";
import ContentGrid from "@/components/ContentGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { Laptop, Code, Award, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Delonti Enterprise",
};

export default function CareersPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Careers at Delonti"
                    subtitle="Join the engineers, architects, and innovators building the future of distributed infrastructure."
                    breadcrumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
                    backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                />

                <OverviewSection
                    title="Culture"
                    heading="Engineering Excellence"
                    description={
                        <>
                            <p>
                                Working at Delonti means tackling some of the most complex infrastructure challenges in the world. We build solutions that keep supply chains moving, protect classified intelligence, and make cities smarter.
                            </p>
                            <p>
                                We foster a culture of rigorous engineering, high autonomy, and continuous learning. If you are passionate about the intersection of software and the physical world—IoT, RFID, and advanced networking—you've found your home.
                            </p>
                        </>
                    }
                    background="white"
                />

                <FeatureGrid
                    title="Benefits"
                    heading="Why Join Delonti"
                    features={[
                        { title: "Remote-First", description: "Work from anywhere with our distributed global engineering team.", icon: <Laptop className="w-6 h-6" /> },
                        { title: "Deep Technical Work", description: "Solve hard problems in distributed systems, Rust, and Go.", icon: <Code className="w-6 h-6" /> },
                        { title: "Top-Tier Health", description: "Comprehensive medical, dental, and vision for you and your family.", icon: <Award className="w-6 h-6" /> },
                        { title: "Equity Grants", description: "Ownership in a hyper-growth enterprise technology firm.", icon: <Users className="w-6 h-6" /> }
                    ]}
                    columns={4}
                    background="slate"
                />

                <SplitContentSection
                    title="Growth"
                    heading="Accelerated Career Velocity"
                    description="At Delonti, career tracks are defined by impact, not tenure. We provide an internal mobility framework allowing engineers to transition between cloud architecture, embedded systems, and cybersecurity focus areas. Continuous learning budgets ensure our team remains at the bleeding edge."
                    imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    imageAlt="Engineering team collaborating"
                    imagePosition="left"
                    background="white"
                />

                <ContentGrid
                    title="Opportunities"
                    heading="Open Positions"
                    items={[
                        { title: "Senior IoT Architect", description: "Design the cloud ingestion pipeline for our next-generation smart city deployments.", category: "Engineering", href: "#", date: "Remote - US" },
                        { title: "Cybersecurity Analyst", description: "Implement zero-trust protocols across our federal agency client base.", category: "Security", href: "#", date: "Washington D.C. / Remote" },
                        { title: "Enterprise Account Executive", description: "Drive strategic partnerships and major deployments in the logistics vertical.", category: "Sales", href: "#", date: "Remote - Global" },
                        { title: "Embedded Systems Engineer - Rust", description: "Develop firmware for high-throughput RFID scanning endpoints.", category: "Hardware", href: "#", date: "Remote - US" }
                    ]}
                    columns={2}
                    background="slate"
                />

                <ProcessTimeline
                    title="Hiring"
                    heading="Our Interview Process"
                    nodes={[
                        { title: "Application Review", description: "Our recruiting team reviews your background for technical alignment.", number: 1 },
                        { title: "Technical Screen", description: "A conversational deep-dive into an architecture you've built recently.", number: 2 },
                        { title: "System Design Panel", description: "Collaborative session designing a distributed system with our senior architects. No white-boarding leetcode.", number: 3 },
                        { title: "Leadership Chat", description: "Final discussion regarding culture, career trajectory, and offer details.", number: 4 }
                    ]}
                    background="white"
                />

                <CTASection
                    heading="Don't see a perfect fit?"
                    description="We are always looking for exceptional talent. Send us your resume and let's start a conversation."
                    buttonText="Submit General Application"
                />
            </main>
            <Footer />
        </>
    );
}
