"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { FileDown, X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WHITEPAPERS = [
    {
        title: "Intelligent Infrastructure: The Future of Infrastructure Management",
        tag: "Infrastructure",
        description: "Exploring how intelligent infrastructure solutions — RFID, IoT, cybersecurity frameworks, and integrated data platforms — enable organizations to improve operational efficiency, enhance security, and support data-driven decision-making.",
        topics: "Infrastructure visibility challenges, RFID-based asset visibility, IoT infrastructure monitoring, integrated data platforms, cybersecurity frameworks, implementation approach (5 phases)",
    },
    {
        title: "Modern Asset Tracking with RFID: Improving Operational Visibility",
        tag: "RFID",
        description: "How RFID systems improve asset management practices and operational efficiency across government agencies and enterprise organizations — replacing manual tracking with automated real-time visibility.",
        topics: "Asset management challenges, how RFID works, benefits, government and enterprise use cases, implementation considerations",
    },
    {
        title: "Securing Modern Infrastructure: Cybersecurity for Connected Systems",
        tag: "Cybersecurity",
        description: "How organizations can adopt modern cybersecurity frameworks to protect increasingly connected infrastructure systems and maintain operational resilience in the face of growing cyber threats.",
        topics: "Cybersecurity threat landscape, Zero Trust architecture, securing infrastructure technology, integrating security into infrastructure platforms",
    }
];

export default function WhitepapersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWhitepaper, setSelectedWhitepaper] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const openModal = (title: string) => {
        setSelectedWhitepaper(title);
        setIsModalOpen(true);
        setStatus("idle");
        setEmail("");
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");

        try {
            const response = await fetch("/api/whitepaper-download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, whitepaperTitle: selectedWhitepaper }),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <Header />
            <main>
                <PageHero
                    title="Whitepapers"
                    subtitle="In-depth research and technical guidance from Delonti's engineering team."
                    breadcrumbs={[
                        { label: "Resources", href: "/resources" },
                        { label: "Whitepapers" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
                />

                <section className="py-24 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
                                Research & Reports
                            </p>
                            <h2 className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white leading-tight font-display mb-6">
                                Technical <span className="font-semibold">Whitepapers</span>
                            </h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl">
                                Download our latest research papers. Enter your email to receive your copy.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {WHITEPAPERS.map((paper, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-950 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-8"
                                >
                                    <div className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">
                                        {paper.tag}
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-3">
                                        {paper.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                                        {paper.description}
                                    </p>

                                    <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-gray-100 dark:border-white/5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Topics Covered</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 italic">{paper.topics}</p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                                        <button
                                            onClick={() => openModal(paper.title)}
                                            className="w-full bg-primary text-white font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <FileDown className="w-5 h-5" />
                                            Download Whitepaper
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection
                    heading="Discuss Your Infrastructure Strategy"
                    description="Speak with our engineering team about applying these insights to your organization."
                />
            </main>
            <Footer />

            {/* Email Capture Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 shadow-2xl max-w-md w-full p-8 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <FileDown className="w-12 h-12 text-primary mx-auto mb-4" />

                        <h3 className="font-display text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
                            Download Whitepaper
                        </h3>

                        <p className="text-slate-500 text-sm text-center mb-6">
                            Enter your email address to receive the whitepaper.
                        </p>

                        {status === "idle" || status === "submitting" ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        disabled={status === "submitting"}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting" || !email}
                                    className="w-full bg-primary text-white font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-primary/90 transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Me the Whitepaper"
                                    )}
                                </button>
                            </form>
                        ) : status === "success" ? (
                            <div className="text-center py-4">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Check your inbox!</h4>
                                <p className="text-sm text-slate-500">
                                    We've sent the whitepaper to <strong>{email}</strong>
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="mt-6 w-full px-4 py-2 border border-gray-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-semibold transition-colors"
                                >
                                    Close Window
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-4">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertCircle className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Something went wrong</h4>
                                <p className="text-sm text-slate-500">
                                    We couldn't process your request. Please try again.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 w-full text-primary font-semibold hover:underline"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
}
