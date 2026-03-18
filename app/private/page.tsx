import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { Building2, Briefcase, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Private Sector Solutions | Delonti",
};

export default function PrivatePage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Private Sector Solutions"
                    subtitle="Whether you're a growing business or a global enterprise, Delonti delivers the technology infrastructure you need to compete."
                    breadcrumbs={[{ label: "Private Sector" }]}
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                />

                {/* Two-Path Chooser */}
                <section className="bg-slate-50 dark:bg-[#16161c] py-24">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3">
                                Who We Serve
                            </p>
                            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white font-display tracking-wide">
                                Find Your Solution Path
                            </h2>
                            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Delonti serves organizations of all sizes — from agile SMBs to complex global enterprises — with tailored technology solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                            <Link
                                href="/private/smb"
                                className="group relative overflow-hidden rounded-2xl min-h-[480px] bg-slate-900 shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20 transition-opacity duration-500" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                                        SMB
                                    </span>
                                    <div className="mt-6">
                                        <Building2 className="w-10 h-10 text-white/60 mb-4" />
                                        <h3 className="text-3xl font-bold text-white font-display">Small & Medium Business</h3>
                                        <p className="mt-2 text-base font-light text-slate-300 max-w-md">
                                            Affordable Smart Technology for Growing Businesses
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {[
                                                "Cost Efficient",
                                                "Fast Deploy",
                                                "Immediate ROI",
                                            ].map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="text-xs font-semibold uppercase tracking-widest text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                                            <span className="transition-all duration-300 group-hover:ml-2">Explore SMB Solutions</span>
                                            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="/private/enterprise"
                                className="group relative overflow-hidden rounded-2xl min-h-[480px] bg-slate-900 shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20 transition-opacity duration-500" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                                        Enterprise
                                    </span>
                                    <div className="mt-6">
                                        <Briefcase className="w-10 h-10 text-white/60 mb-4" />
                                        <h3 className="text-3xl font-bold text-white font-display">Enterprise Solutions</h3>
                                        <p className="mt-2 text-base font-light text-slate-300 max-w-md">
                                            Enterprise Platforms for Visibility, Security, and Operational Intelligence
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {[
                                                "Scalable",
                                                "Secure",
                                                "Integrated",
                                            ].map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="text-xs font-semibold uppercase tracking-widest text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                                            <span className="transition-all duration-300 group-hover:ml-2">Explore Enterprise Solutions</span>
                                            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <StatsSection
                    background="slate"
                    stats={[
                        { value: "500", suffix: "+", label: "Deployments Delivered" },
                        { value: "99.9", suffix: "%", label: "Uptime Guaranteed" },
                        { value: "50", suffix: "M+", label: "Assets Tracked" },
                        { value: "10", suffix: "+", label: "Years of Experience" }
                    ]}
                />

                <ClientsSection />

                <CTASection
                    heading="Ready to Get Started?"
                    description="Tell us about your business and we'll match you with the right solution."
                />
            </main>
            <Footer />
        </>
    );
}
