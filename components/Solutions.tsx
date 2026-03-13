"use client";

import { Truck, Construction, HeartPulse, Warehouse, Landmark } from "lucide-react";

const industries = [
    {
        title: "Logistics & Transportation",
        desc: "Optimize fleet routes and track shipments with GPS and RFID, ensuring on-time deliveries and asset security.",
        icon: <Truck className="w-6 h-6" />
    },
    {
        title: "Construction & Heavy Equipment",
        desc: "Track machinery and personnel with RFID and GPS to prevent loss and ensure safety compliance.",
        icon: <Construction className="w-6 h-6" />
    },
    {
        title: "Healthcare & Field Services",
        desc: "Track equipment, vehicles, and personnel to ensure service delivery and compliance in real-time.",
        icon: <HeartPulse className="w-6 h-6" />
    },
    {
        title: "Retail & Warehousing",
        desc: "Manage inventory and asset movement with RFID for better stock control and reduced shrinkage.",
        icon: <Warehouse className="w-6 h-6" />
    },
    {
        title: "Government & Public Services",
        desc: "Use GPS and RFID to track assets, personnel, and vehicles for improved accountability and service delivery.",
        icon: <Landmark className="w-6 h-6" />
    }
];

export default function Solutions() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Premium Centered Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3 font-display">
                        Tailored Solutions
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide mb-6 font-display">
                        Solutions for Every Industry
                    </h3>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                        Our GPS and RFID integration is designed to meet the unique needs of diverse sectors, enhancing operations with real-time visibility and automation.
                    </p>
                </div>

                {/* Clean, Responsive Flex Layout (Centers the bottom row automatically) */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            // MATH FIX: w-[calc...] ensures they behave exactly like a 2-col or 3-col grid, allowing the justify-center to push the last row to the middle!
                            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] group relative p-8 bg-gray-50 dark:bg-slate-900/40 rounded-2xl border border-gray-100 dark:border-white/5 transition-all duration-500 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden text-left"
                        >
                            {/* Subtle Glassmorphic Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon Container with Soft Background */}
                                <div className="bg-white dark:bg-slate-800 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/10 transition-transform duration-500 group-hover:scale-110">
                                    {industry.icon}
                                </div>

                                <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white tracking-wide">
                                    {industry.title}
                                </h4>

                                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                    {industry.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}