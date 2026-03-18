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

                        {/* ✅ NEW CLEAN PREMIUM CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

                            {/* SMB Card */}
                            <Link
                                href="/private/smb"
                                className="group relative rounded-2xl overflow-hidden h-[440px] bg-slate-900"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070')`
                                    }}
                                />

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />

                                <div className="relative h-full flex flex-col justify-between p-8">

                                    <span className="w-fit text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 border border-white/20 px-3 py-1 rounded-full backdrop-blur">
                                        SMB
                                    </span>

                                    <div>
                                        <Building2 className="w-8 h-8 text-white/70 mb-4" />

                                        <h3 className="text-2xl md:text-3xl font-semibold text-white font-display">
                                            Small & Medium Business
                                        </h3>

                                        <p className="mt-3 text-sm text-white/70 max-w-sm leading-relaxed">
                                            Affordable smart technology designed for growing businesses.
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {[
                                                "Cost Efficient",
                                                "Fast Deploy",
                                                "Immediate ROI",
                                            ].map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="text-[10px] uppercase tracking-widest text-white/70 border border-white/20 px-2.5 py-1 rounded-full"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center text-sm font-medium text-white/80">
                                            <span className="transition-all duration-300 group-hover:translate-x-1">
                                                Explore Solutions
                                            </span>
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Enterprise Card */}
                            <Link
                                href="/private/enterprise"
                                className="group relative rounded-2xl overflow-hidden h-[440px] bg-slate-900"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070')`
                                    }}
                                />

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />

                                <div className="relative h-full flex flex-col justify-between p-8">

                                    <span className="w-fit text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 border border-white/20 px-3 py-1 rounded-full backdrop-blur">
                                        Enterprise
                                    </span>

                                    <div>
                                        <Briefcase className="w-8 h-8 text-white/70 mb-4" />

                                        <h3 className="text-2xl md:text-3xl font-semibold text-white font-display">
                                            Enterprise Solutions
                                        </h3>

                                        <p className="mt-3 text-sm text-white/70 max-w-sm leading-relaxed">
                                            Scalable platforms for visibility, security, and operational intelligence.
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {[
                                                "Scalable",
                                                "Secure",
                                                "Integrated",
                                            ].map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="text-[10px] uppercase tracking-widest text-white/70 border border-white/20 px-2.5 py-1 rounded-full"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center text-sm font-medium text-white/80">
                                            <span className="transition-all duration-300 group-hover:translate-x-1">
                                                Explore Solutions
                                            </span>
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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