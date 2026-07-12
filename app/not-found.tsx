"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
    RadioTower, 
    ArrowRight, 
    Cpu, 
    Building2, 
    Database, 
    RefreshCw, 
    ShieldCheck, 
    Briefcase,
    Globe,
    FileText
} from "lucide-react";

export default function NotFound() {
    const [scanState, setScanState] = useState<"idle" | "scanning" | "completed">("idle");
    const [pingWaves, setPingWaves] = useState<number[]>([]);

    const triggerPing = () => {
        if (scanState === "scanning") return;
        setScanState("scanning");
        setPingWaves(prev => [...prev, Date.now()]);
        
        // Simulate a network search delay
        setTimeout(() => {
            setScanState("completed");
        }, 1500);
    };

    // Auto-ping on first load to make it feel alive immediately
    useEffect(() => {
        const timer = setTimeout(() => {
            triggerPing();
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    const solutions = [
        { label: "Asset Tracking", href: "/solutions/asset-tracking" },
        { label: "Inventory Intelligence", href: "/solutions/inventory-intelligence" },
        { label: "Workforce Safety", href: "/solutions/workforce-safety" },
        { label: "Facility Intelligence", href: "/solutions/facility-intelligence" }
    ];

    const industries = [
        { label: "Government", href: "/industries/government" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Education", href: "/industries/education" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Supply Chain & Logistics", href: "/industries/supply-chain" },
        { label: "Public Safety", href: "/industries/public-safety" }
    ];

    const company = [
        { label: "Company Overview", href: "/about" },
        { label: "Partner Ecosystem", href: "/about/partners" },
        { label: "Careers", href: "/about/careers" },
        { label: "Resources Hub", href: "/resources" },
        { label: "Contact Us", href: "/contact" }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white dark:bg-[#121216] py-16 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-12">
                    
                    {/* Visual RFID Scanner Section */}
                    <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:text-left shrink-0">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 flex items-center justify-center">
                            
                            {/* Scanning Ripple Waves */}
                            {scanState === "scanning" && (
                                <div className="absolute inset-0 rounded-full border-2 border-logo/20 dark:border-logo/30 animate-ping opacity-75" />
                            )}
                            
                            {/* Radar circular boundary */}
                            <div className={`absolute inset-0 rounded-full border-2 border-dashed ${scanState === "scanning" ? "border-logo animate-spin [animation-duration:10s]" : "border-slate-200 dark:border-white/10"} transition-colors duration-500`} />
                            
                            {/* Inner Scanning Wave */}
                            <div className={`absolute w-36 h-36 rounded-full border ${scanState === "scanning" ? "border-logo/40 bg-logo/5 animate-pulse" : "border-slate-100 dark:border-white/5"} transition-all duration-500`} />
                            
                            {/* Node Point */}
                            <div className="z-10 w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center relative group">
                                <RadioTower className={`w-10 h-10 ${scanState === "scanning" ? "text-logo animate-bounce" : "text-slate-400 dark:text-slate-500"} transition-colors duration-500`} />
                                
                                {scanState === "completed" && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                            <span className={`w-2 h-2 rounded-full ${scanState === "scanning" ? "bg-amber-500 animate-pulse" : scanState === "completed" ? "bg-emerald-500" : "bg-red-500"}`} />
                            {scanState === "scanning" ? "Scanning Network Grid..." : scanState === "completed" ? "Signal Re-Established" : "Signal Lost (404)"}
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-light text-slate-900 dark:text-white leading-tight mb-4">
                            Node <span className="font-semibold text-logo">Disconnected</span>
                        </h1>
                        
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4 font-normal max-w-md">
                            The page you are looking for <span className="font-bold text-red-500 dark:text-red-400 tracking-wide">does not exist</span> in our directory.
                        </p>
                        
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light max-w-md">
                            The requested infrastructure route could not be resolved. Trigger a network ping scan to search for alternate active gateways.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            {/* <button 
                                onClick={triggerPing}
                                disabled={scanState === "scanning"}
                                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 border rounded-xl text-sm font-bold tracking-wider uppercase transition-all shadow-md active:scale-98 ${
                                    scanState === "scanning"
                                        ? "bg-slate-100 dark:bg-white/5 text-slate-400 border-slate-200 dark:border-white/10 cursor-not-allowed"
                                        : "bg-logo text-white border-transparent hover:bg-logo/90 hover:-translate-y-0.5 cursor-pointer"
                                }`}
                            >
                                <RefreshCw className={`w-4 h-4 ${scanState === "scanning" ? "animate-spin" : ""}`} />
                                Send Network Ping
                            </button> */}
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-logo hover:bg-logo/90 transition-all shadow-md hover:-translate-y-0.5 uppercase tracking-wider cursor-pointer"
                            >
                                Go Back Home
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Structured Grid */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center">
                        <div className={`transition-all duration-1000 ${
                            scanState === "idle" 
                                ? "opacity-30 blur-sm pointer-events-none" 
                                : scanState === "scanning" 
                                ? "opacity-50 blur-[2px] pointer-events-none" 
                                : "opacity-100 blur-0"
                        }`}>
                            <div className="mb-8 border-b border-slate-100 dark:border-white/5 pb-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                                    Resolved Network Gateways
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                                    Choose an active node below to redirect.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                
                                {/* Solutions Column */}
                                <div className="p-6 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/30 dark:bg-slate-900/10 hover:border-logo/20 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5 border-b border-slate-150 dark:border-white/5 pb-3">
                                        <div className="p-2 rounded-lg bg-logo/10 text-logo">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                            Solutions
                                        </h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {solutions.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.href}
                                                    className="group flex items-center justify-between text-sm text-slate-650 dark:text-slate-400 hover:text-logo dark:hover:text-white transition-colors"
                                                >
                                                    <span>{item.label}</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Industries Column */}
                                <div className="p-6 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/30 dark:bg-slate-900/10 hover:border-logo/20 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-5 border-b border-slate-150 dark:border-white/5 pb-3">
                                        <div className="p-2 rounded-lg bg-logo/10 text-logo">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                            Industries
                                        </h4>
                                    </div>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {industries.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.href}
                                                    className="group flex items-center justify-between text-sm text-slate-650 dark:text-slate-400 hover:text-logo dark:hover:text-white transition-colors"
                                                >
                                                    <span>{item.label}</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Corporate Column */}
                                <div className="p-6 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/30 dark:bg-slate-900/10 hover:border-logo/20 hover:shadow-lg transition-all duration-300 md:col-span-2">
                                    <div className="flex items-center gap-3 mb-5 border-b border-slate-150 dark:border-white/5 pb-3">
                                        <div className="p-2 rounded-lg bg-logo/10 text-logo">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                            Corporate & Resources
                                        </h4>
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {company.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.href}
                                                    className="group flex items-center justify-between text-sm text-slate-650 dark:text-slate-400 hover:text-logo dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-white/5"
                                                >
                                                    <span>{item.label}</span>
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
