"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeServe() {
    const sectors = [
        {
            title: "Private Sector",
            description: "Scalable technology ecosystems designed to accelerate commercial growth, optimize supply chains, and secure corporate assets.",
            image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop",
            href: "/private"
        },
        {
            title: "Federal Agencies",
            description: "Secure, compliant solutions designed for the rigorous requirements of defense and national intelligence.",
            image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop",
            href: "/federal"
        },
        {
            title: "Large Scale Enterprises",
            description: "Global RFID and IoT integration strategies tailored for massive supply chains and operational scaling.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            href: "/large-enterprise"
        },
        {
            title: "Small & Medium Enterprises",
            description: "Agile, cost-effective tech ecosystems designed to accelerate growth, secure assets, and boost market agility.",
            image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
            href: "/sme"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#16161c]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Premium Section Header */}
                <div className="mb-12">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6366f1] mb-3">
                        Who We Serve
                    </h2>
                    {/* CHANGED TO A MORE GENERIC HEADING */}
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide">
                        Driving Innovation Across Sectors
                    </h3>
                </div>

                {/* 2x2 Cinematic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {sectors.map((sector, index) => (
                        <Link 
                            href={sector.href} 
                            key={index}
                            className="group relative h-[280px] md:h-[320px] w-full overflow-hidden rounded-xl block bg-slate-900"
                        >
                            {/* Background Image with Hover Zoom */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-60"
                                style={{ backgroundImage: `url('${sector.image}')` }}
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent opacity-90 transition-opacity duration-500" />

                            {/* Hover Icon (Top Right) */}
                            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out border border-white/20">
                                <ArrowUpRight className="text-white w-4 h-4" />
                            </div>

                            {/* Text Content */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                                    {sector.title}
                                </h4>
                                <p className="text-xs md:text-sm text-slate-300 font-light max-w-md leading-relaxed opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
                                    {sector.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}