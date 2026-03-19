import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights & Resources | Delonti Enterprise",
};

const RESOURCES = [
    {
        title: "Case Studies",
        desc: "Detailed breakdowns of our largest implementations, architectural decisions, and resulting ROI.",
        href: "/resources/case-studies",
        colSpan: "md:col-span-2",
        bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
    },
    {
        title: "Whitepapers",
        desc: "Deep-dives into emerging architecture patterns and compliance mandates.",
        href: "/resources/whitepapers",
        colSpan: "md:col-span-1",
        bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
    },
    {
        title: "Business Cases",
        desc: "ROI analysis, procurement toolkits, and business case documentation for technology investment decisions.",
        href: "/resources/business-cases",
        colSpan: "md:col-span-1",
        bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
    },
    {
        title: "News & Events",
        desc: "Press releases, webinars, and upcoming conference schedules.",
        href: "/resources/news",
        colSpan: "md:col-span-2",
        bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
    }
];

export default function ResourcesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Insights & Resources"
                    subtitle="Industry research, technical whitepapers, and operational analysis."
                    breadcrumbs={[{ label: "Resources" }]}
                    backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
                />

                <section className="py-24 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-16">
                            <h2 className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white leading-tight font-display mb-6">
                                Delonti <span className="font-semibold">Knowledge Base</span>
                            </h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl">
                                Curated intelligence for enterprise technology leaders.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {RESOURCES.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className={`group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${item.colSpan}`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${item.bgImage})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-white border border-white/20">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>

                <CTASection
                    heading="Need Expert Advice?"
                    description="Our consultants are available for confidential strategy briefings."
                />
            </main>
            <Footer />
        </>
    );
}
