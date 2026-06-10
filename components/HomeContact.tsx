"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function HomeContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tabId: "homepage",
                    tabName: "Homepage Contact",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong. Please try again.");
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || "Failed to submit. Please try again or contact us directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">

                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between py-1 min-h-[520px]">
                        <div>
                            <h2 className="section-subheading">
                                Contact Us
                            </h2>
                            <h3 className="section-heading mb-6">
                                Ready to Innovate?
                            </h3>
                            <p className="section-body mb-10 max-w-lg">
                                Whether you&apos;re a city official, federal agency, or private enterprise, we&apos;re here to help you deploy next-generation RFID, IoT, and Cybersecurity solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-150 dark:border-white/5 transition-transform duration-500 group-hover:scale-110">
                                    <MapPin className="w-6 h-6 text-primary dark:text-slate-355" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Headquarters</p>
                                    <p className="font-medium text-slate-900 dark:text-white tracking-wide">
                                        Delonti Inc.<br />10 Dorrance Street, Providence, RI 02903
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-150 dark:border-white/5 transition-transform duration-500 group-hover:scale-110">
                                    <Phone className="w-6 h-6 text-primary dark:text-slate-355" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Phone</p>
                                    <a href="tel:860-460-8428" className="font-medium text-slate-900 dark:text-white tracking-wide hover:text-logo dark:hover:text-blue-400 transition-colors">
                                        860-460-8428
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-150 dark:border-white/5 transition-transform duration-500 group-hover:scale-110">
                                    <Mail className="w-6 h-6 text-primary dark:text-slate-355" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Email Address</p>
                                    <a href="mailto:info@delonti.com" className="font-medium text-slate-900 dark:text-white tracking-wide hover:text-logo dark:hover:text-blue-400 transition-colors">
                                        info@delonti.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full lg:w-1/2 bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-xl shadow-xl border border-gray-150 dark:border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[520px]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        {submitted ? (
                            <div className="relative z-10 text-center py-12 flex flex-col items-center justify-center h-full my-auto">
                                <div className="w-16 h-16 bg-green-550/10 dark:bg-green-500/5 rounded-full flex items-center justify-center text-green-500 dark:text-green-400 mb-6 border border-green-500/20">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">Submission Received</h4>
                                <p className="text-slate-550 dark:text-slate-400 text-sm max-w-sm leading-relaxed mb-8 font-medium">
                                    Thank you for contacting Delonti. We have captured your request and our representatives will be in touch shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            name: "",
                                            email: "",
                                            phone: "",
                                            company: "",
                                            message: "",
                                        });
                                    }}
                                    className="bg-logo hover:bg-logo/90 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_-5px_var(--color-logo)] text-xs cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 flex flex-col justify-between h-full">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Email Address *</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400"
                                                placeholder="860-460-8428"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Company / Org</label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => handleInputChange("company", e.target.value)}
                                                className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400"
                                                placeholder="Delonti Inc."
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Message *</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-32 resize-none transition-all placeholder:text-slate-400"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {error && (
                                        <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-red-500 text-xs font-semibold">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group relative w-full bg-logo hover:bg-logo/90 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] overflow-hidden flex items-center justify-center gap-2 cursor-pointer text-sm"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <span className="relative z-10">Send Message</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}