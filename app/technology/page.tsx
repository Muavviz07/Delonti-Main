import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { ArrowRight, RadioTower, ShieldCheck, Database, Code2, Cpu, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology Solutions | Delonti Enterprise",
};

const TECH_AREAS = [
    { title: "RFID & Logistics", desc: "Precision asset tracking and sub-second inventory visibility across global supply chains.", icon: RadioTower, href: "/tech/rfid/asset" },
    { title: "IoT Systems", desc: "Smart sensors, edge computing, and facility automation for real-time operational telemetry.", icon: Cpu, href: "/tech/iot/smart-infra" },
    { title: "Cybersecurity", desc: "Zero Trust networking, endpoint isolation, and automated threat neutralization capabilities.", icon: ShieldCheck, href: "/tech/cyber/zero-trust" },
    { title: "Data & Analytics", desc: "AI pipelines, BI dashboards, and enterprise data models turning raw data into strategy.", icon: Database, href: "/tech/data/integration" },
    { title: "Software IT", desc: "Custom cloud-native applications and legacy system modernization.", icon: Code2, href: "/tech/software/custom" },
    { title: "Workforce Staffing", desc: "Cleared engineering talent, project-based teams, and global managed support.", icon: Users, href: "/tech/workforce/technical" }
];

export default function TechnologyPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Technology Solutions"
                    subtitle="Enterprise-grade hardware and software implementation methodologies."
                    breadcrumbs={[{ label: "Technology" }]}
                    backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                />

                <section className="py-24 bg-white dark:bg-slate-950">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-4 font-display">
                                Engineering Focus
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white leading-tight font-display mb-8">
                                Scalable architectures for the <span className="font-semibold">modern connected enterprise.</span>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-px bg-gray-200 dark:bg-white/10 border-y border-gray-200 dark:border-white/10">
                            {TECH_AREAS.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <Link key={idx} href={item.href} className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                                        <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-2/3">
                                            <div className="text-slate-300 dark:text-slate-700 font-display text-4xl font-light">
                                                0{idx + 1}
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                    <h4 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-wide">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 md:mt-0 flex shrink-0 items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                                            Explore Architecture <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <CTASection
                    heading="Build With Us"
                    description="Engage our architects to deploy a proof of concept."
                />
            </main>
            <Footer />
        </>
    );
}
