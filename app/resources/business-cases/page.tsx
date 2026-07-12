"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { FileDown, X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const BUSINESS_CASES = [
    {
        title: "RFID Asset Tracking",
        tag: "RFID",
        summary: "Delonti provides secure, real-time RFID solutions that improve asset visibility, reduce loss, and streamline operational efficiency across government and enterprise environments.",
        challenges: [
            "Limited asset visibility",
            "Manual tracking inefficiencies",
            "Compliance audit gaps",
            "Inventory shrinkage"
        ],
        roi: [
            { area: "Inventory Accuracy", improvement: "98–99% visibility" },
            { area: "Asset Loss Reduction", improvement: "20–40% reduction" },
            { area: "Labor Efficiency", improvement: "25–35% time savings" },
            { area: "Audit Preparation Time", improvement: "Up to 50% faster" }
        ],
        compliance: [
            "Improved audit trails",
            "NIST-aligned tracking controls",
            "Reduced operational risk"
        ]
    },
    {
        title: "IoT Solutions",
        tag: "IoT",
        summary: "Delonti IoT solutions enable real-time operational insights, predictive maintenance, and smarter infrastructure management.",
        challenges: [
            "Lack of real-time operational data",
            "Reactive maintenance costs",
            "Inefficient resource utilization"
        ],
        roi: [
            { area: "Operational Visibility", improvement: "Real-time insights" },
            { area: "Maintenance Costs", improvement: "15–30% reduction" },
            { area: "Energy Optimization", improvement: "10–20% savings" },
            { area: "Process Efficiency", improvement: "Improved automation" }
        ],
        compliance: [
            "Improved infrastructure monitoring",
            "Reduced system failure risk",
            "Enhanced compliance reporting"
        ]
    },
    {
        title: "Cybersecurity",
        tag: "Cybersecurity",
        summary: "Delonti delivers proactive cybersecurity solutions that reduce risk exposure, strengthen compliance posture, and protect critical infrastructure.",
        challenges: [
            "Growing cyber threats",
            "Compliance pressures",
            "Operational downtime risk",
            "Data breach exposure"
        ],
        roi: [
            { area: "Risk Reduction", improvement: "30–60% threat mitigation" },
            { area: "Incident Response Time", improvement: "40% faster detection" },
            { area: "Compliance Readiness", improvement: "Improved audit alignment" },
            { area: "Operational Downtime", improvement: "Reduced disruption risk" }
        ],
        compliance: [
            "Zero Trust alignment",
            "Continuous monitoring",
            "Regulatory compliance support"
        ]
    },
    {
        title: "Workforce & Resource Augmentation",
        tag: "Workforce",
        summary: "Delonti provides flexible, scalable technical staffing solutions to accelerate project delivery while maintaining quality and security standards.",
        challenges: [
            "Skill shortages",
            "Project delays",
            "Hiring overhead costs",
            "Limited internal capacity"
        ],
        roi: [
            { area: "Time-to-Hire", improvement: "Up to 50% faster staffing" },
            { area: "Project Acceleration", improvement: "Reduced delays" },
            { area: "Cost Efficiency", improvement: "Lower overhead vs full-time hires" },
            { area: "Flexibility", improvement: "Scalable workforce model" }
        ],
        compliance: [
            "Reduced hiring risk",
            "Security-cleared professionals (as applicable)",
            "Compliance-aligned staffing models"
        ]
    }
];

const IMPLEMENTATION_STEPS = [
    "Assessment & Requirements Analysis",
    "Pilot Deployment",
    "Full Implementation & Integration",
    "Ongoing Support & Optimization"
];

const WHY_DELONTI = [
    "Single point of accountability from strategy through support",
    "Integrated approach across RFID, IoT, Cybersecurity, and IT",
    "Security-first architecture designed for regulated environments",
    "Scalable solutions aligned to mission and business objectives"
];

export default function BusinessCasesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const openModal = (title: string) => {
        setSelectedCase(title);
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
                body: JSON.stringify({ email, whitepaperTitle: `Business Case: ${selectedCase}` }),
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
                    title="Business Cases"
                    subtitle="ROI analysis and procurement documentation to support your technology investment decisions."
                    breadcrumbs={[
                        { label: "Resources", href: "/resources" },
                        { label: "Business Cases" }
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                />

                <section className="py-24 bg-white dark:bg-slate-950">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
                                Investment Intelligence
                            </p>
                            <h2 className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white leading-tight font-display mb-6">
                                Build Your Technology <span className="font-semibold">Business Case</span>
                            </h2>
                            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-3xl">
                                Our business case documentation provides the ROI data, risk analysis, and implementation frameworks you need to secure stakeholder approval and procurement sign-off for technology investments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {BUSINESS_CASES.map((bc, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-950 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col"
                                >
                                    <div className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">
                                        {bc.tag}
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                        {bc.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        {bc.summary}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key Challenges</h4>
                                        <ul className="space-y-1.5">
                                            {bc.challenges.map((challenge, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                                    <span>{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">ROI & Business Impact</h4>
                                        <div className="w-full rounded-xl overflow-hidden border border-gray-100 dark:border-white/10">
                                            <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider flex">
                                                <div className="px-4 py-3 flex-1">Impact Area</div>
                                                <div className="px-4 py-3 flex-1">Typical Improvement</div>
                                            </div>
                                            <div className="text-sm text-slate-700 dark:text-slate-300 flex flex-col">
                                                {bc.roi.map((item, i) => (
                                                    <div key={i} className={`flex ${i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'}`}>
                                                        <div className="px-4 py-3 flex-1 border-r border-gray-100 dark:border-white/5">{item.area}</div>
                                                        <div className="px-4 py-3 flex-1">{item.improvement}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Risk & Compliance Benefits</h4>
                                        <ul className="space-y-2">
                                            {bc.compliance.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                                        <button
                                            onClick={() => openModal(bc.title)}
                                            className="w-full bg-primary text-white font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <FileDown className="w-5 h-5" />
                                            Download Business Case PDF
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Implementation Model</h3>
                                <div className="space-y-4">
                                    {IMPLEMENTATION_STEPS.map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm">
                                            <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                                                {idx + 1}
                                            </div>
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Why Partner With Delonti</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {WHY_DELONTI.map((reason, idx) => (
                                        <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm flex flex-col">
                                            <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                                            <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <CTASection
                    heading="Need a Custom Business Case?"
                    description="Our team can build a tailored ROI analysis for your specific organization, sector, and project scope."
                    buttonText="Request a Custom Analysis"
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
                            Download Business Case
                        </h3>

                        <p className="text-slate-500 text-sm text-center mb-6">
                            Enter your email address to receive the PDF.
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
                                        "Send Me the PDF"
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
                                    We've sent the document to <strong>{email}</strong>
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
