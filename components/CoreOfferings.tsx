"use client";

import { Nfc, Cpu, ShieldAlert, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CoreOfferings() {
    const offerings = [
        {
            title: "RFID Integration",
            description: "Asset tracking and inventory lifecycle management with sub-second accuracy.",
            icon: <Nfc className="w-8 h-8" />,
            href: "/tech/rfid/asset",
            buttonText: "Explore RFID"
        },
        {
            title: "Internet of Things",
            description: "Connected ecosystems, sensor networks, and real-time data architecture.",
            icon: <Cpu className="w-8 h-8" />,
            href: "/tech/iot/smart-infra",
            buttonText: "Explore IoT"
        },
        {
            title: "Cybersecurity",
            description: "Advanced zero-trust threat protection, risk management, and NIST compliance.",
            icon: <ShieldAlert className="w-8 h-8" />,
            href: "/tech/cyber/zero-trust",
            buttonText: "Explore Cybersecurity"
        },
        {
            title: "Resource Augmentation",
            description: "Specialized technical staffing and managed support for mission-critical roles.",
            icon: <Users className="w-8 h-8" />,
            href: "/tech/workforce/technical",
            buttonText: "Explore Staffing"
        }
    ];

    return (
        <section className="py-24 border-y border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-logo mb-4">
                        Core Offerings
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                        Enterprise Technology Solutions
                    </h3>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {offerings.map((offering, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full"
                        >
                            {/* Icon Container */}
                            <div className="flex items-center justify-center w-20 h-20 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-800/50 text-primary dark:text-slate-300 mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                {offering.icon}
                            </div>

                            {/* Text Content */}
                            <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                {offering.title}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[240px] mb-8 flex-grow leading-relaxed">
                                {offering.description}
                            </p>

                            {/* CTA Button */}
                            <Link
                                href={offering.href}
                                className="group relative px-8 py-3.5 bg-logo hover:bg-logo/90 text-white rounded-xl font-bold text-base transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10 text-sm font-bold uppercase tracking-wider">{offering.buttonText}</span>
                                <ChevronRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}