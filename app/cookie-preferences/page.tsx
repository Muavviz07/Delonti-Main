"use client";

import { useState, useEffect } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import { Check } from "lucide-react";

export default function CookiePreferencesPage() {
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: false,
        functional: false,
        marketing: false,
    });
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const panelTextClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed";

    // Load preferences from localStorage on mount
    useEffect(() => {
        const savedPrefs = localStorage.getItem("delonti-cookie-preferences");
        if (savedPrefs) {
            try {
                const parsed = JSON.parse(savedPrefs);
                setPreferences({
                    essential: true, // Always true
                    analytics: !!parsed.analytics,
                    functional: !!parsed.functional,
                    marketing: !!parsed.marketing,
                });
            } catch (e) {
                console.error("Error parsing saved cookie preferences", e);
            }
        }
        setLoading(false);
    }, []);

    const togglePreference = (key: "analytics" | "functional" | "marketing") => {
        setPreferences((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
        if (isSaved) setIsSaved(false);
    };

    const handleSave = () => {
        localStorage.setItem("delonti-cookie-preferences", JSON.stringify(preferences));
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 4000); // Reset save notification after 4s
    };

    const handleAcceptAll = () => {
        const allOn = {
            essential: true,
            analytics: true,
            functional: true,
            marketing: true,
        };
        setPreferences(allOn);
        localStorage.setItem("delonti-cookie-preferences", JSON.stringify(allOn));
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 4000);
    };

    const handleRejectAll = () => {
        const allOff = {
            essential: true,
            analytics: false,
            functional: false,
            marketing: false,
        };
        setPreferences(allOff);
        localStorage.setItem("delonti-cookie-preferences", JSON.stringify(allOff));
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 4000);
    };

    return (
        <LegalPageLayout
            title="Cookie Preferences"
            subtitle="Customize how cookies and tracking technologies are used on the Delonti website."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        We respect your privacy. Adjust the toggle settings below to choose which cookies you permit us to set during your visits to our platform. These choices are stored locally and honored on subsequent page loads.
                    </p>
                </section>

                {/* Save Feedback Banner */}
                {isSaved && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 animate-fadeIn">
                        <Check className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-semibold">Your cookie preferences have been successfully updated and saved!</p>
                    </div>
                )}

                {/* Cookie Category Toggle List */}
                <div className="space-y-6">
                    {/* Essential Toggles */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base">Essential Cookies</h3>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Always Enabled</span>
                            </div>
                            <p className={panelTextClass}>
                                Required for core website security, responsive page navigation, secure portals access, and theme configurations. These cookies cannot be deactivated.
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center">
                            <label className="relative inline-flex items-center cursor-not-allowed">
                                <input type="checkbox" checked disabled className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary opacity-60"></div>
                            </label>
                        </div>
                    </div>

                    {/* Analytics Toggles */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base">Analytics Cookies</h3>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-logo/10 text-logo">Optional</span>
                            </div>
                            <p className={panelTextClass}>
                                Help us gather statistics and track user behaviors across our platform. These aggregate logs enable us to fix navigation errors, improve site design, and update our information resources.
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={preferences.analytics} 
                                    onChange={() => togglePreference("analytics")} 
                                    disabled={loading}
                                    className="sr-only peer" 
                                />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-logo"></div>
                            </label>
                        </div>
                    </div>

                    {/* Functional Toggles */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base">Functional Cookies</h3>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-logo/10 text-logo">Optional</span>
                            </div>
                            <p className={panelTextClass}>
                                Remember preference states, settings, and information input across pages to optimize workflows and provide personalized, highly responsive functional features.
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={preferences.functional} 
                                    onChange={() => togglePreference("functional")} 
                                    disabled={loading}
                                    className="sr-only peer" 
                                />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-logo"></div>
                            </label>
                        </div>
                    </div>

                    {/* Marketing Toggles */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                                <h3 className="font-bold text-slate-900 dark:text-white text-base">Marketing Cookies</h3>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-logo/10 text-logo">Optional</span>
                            </div>
                            <p className={panelTextClass}>
                                Help us understand visitor engagement with promotional links and communications. This enables us to coordinate campaign metrics and share updates that are relevant to your operational interests.
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={preferences.marketing} 
                                    onChange={() => togglePreference("marketing")} 
                                    disabled={loading}
                                    className="sr-only peer" 
                                />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-logo"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Control Panel Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md text-center cursor-pointer"
                    >
                        Save Preferences
                    </button>
                    
                    <button
                        onClick={handleAcceptAll}
                        disabled={loading}
                        className="px-6 py-3.5 bg-logo hover:bg-logo/95 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md text-center cursor-pointer"
                    >
                        Accept All Cookies
                    </button>

                    <button
                        onClick={handleRejectAll}
                        disabled={loading}
                        className="px-6 py-3.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-xs rounded-xl transition-all text-center cursor-pointer"
                    >
                        Reject All Optional
                    </button>
                </div>
            </div>
        </LegalPageLayout>
    );
}
