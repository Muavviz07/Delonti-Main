"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Truck, Construction, HeartPulse, Warehouse, Landmark, ChevronRight } from "lucide-react";

const industries = [
    {
        title: "Logistics & Transportation",
        desc: "Optimize fleet routes and track shipments with GPS and RFID, ensuring on-time deliveries and asset security.",
        icon: <Truck className="w-10 h-10" />,
    },
    {
        title: "Construction & Heavy Equipment",
        desc: "Track machinery and personnel with RFID and GPS to prevent loss and ensure safety compliance.",
        icon: <Construction className="w-10 h-10" />,
    },
    {
        title: "Healthcare & Field Services",
        desc: "Track equipment, vehicles, and personnel to ensure service delivery and compliance in real-time.",
        icon: <HeartPulse className="w-10 h-10" />,
    },
    {
        title: "Retail & Warehousing",
        desc: "Manage inventory and asset movement with RFID for better stock control and reduced shrinkage.",
        icon: <Warehouse className="w-10 h-10" />,
    },
    {
        title: "Government & Public Services",
        desc: "Use GPS and RFID to track assets, personnel, and vehicles for improved accountability and service delivery.",
        icon: <Landmark className="w-10 h-10" />,
    }
];

interface IndustryCardProps {
  industry: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  };
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const IndustryCard = ({ industry, index, progress, range, targetScale }: IndustryCardProps) => {
    // Scroll-Linked Animation: Shrink as the user scrolls further
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="sticky top-24 md:top-32 w-full flex justify-center mb-6 md:mb-8 px-4">
            <motion.div
                style={{ scale }}
                initial="initial"
                whileHover="hover"
                variants={{
                    initial: {
                        y: 0,
                    },
                    hover: {
                        borderColor: "rgba(var(--color-primary-rgb), 0.4)",
                        boxShadow: "0 40px 80px -20px rgba(var(--color-primary-rgb), 0.15)",
                        transition: { duration: 0.3, ease: "easeOut" }
                    }
                }}
                className="group relative w-full max-w-5xl h-[400px] md:h-[320px] p-8 md:p-14 rounded-[2.5rem] border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center gap-8 md:gap-14 overflow-hidden bg-white dark:bg-slate-900 shadow-xl transition-all duration-300"
            >
                {/* Visual Accent - Color Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

                {/* Background Glow on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary/[0.03] to-transparent dark:from-primary/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-primary text-white flex items-center justify-center shadow-lg border border-primary/20 relative z-10 transition-all duration-300 dark:shadow-primary/30">
                    <div className="transform transition-transform duration-500">
                        {industry.icon}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left z-10">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50 tracking-tight font-display">
                        {industry.title}
                    </h4>

                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
                        {industry.desc}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 font-bold uppercase tracking-[0.2em] text-xs text-primary transition-all cursor-pointer w-fit mx-auto md:mx-0 group/link relative">
                        Explore Sector <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                    </div>
                </div>

                {/* Decorative Number */}
                <div className="absolute -bottom-6 -right-2 text-8xl md:text-[12rem] font-black text-slate-200/60 dark:text-white/20 pointer-events-none transition-all duration-500 group-hover:text-primary/10 dark:group-hover:text-primary/20">
                    0{index + 1}
                </div>
            </motion.div>
        </div>
    );
};

export default function Solutions() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={containerRef} className="relative py-24 bg-slate-50 dark:bg-[#050507]">
            <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold uppercase tracking-[0.3em] text-[#38bdf8] mb-4"
                    >
                        Tailored Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]"
                    >
                        Solutions for Every Industry
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl"
                    >
                        Our GPS and RFID integration is designed to meet the unique needs of diverse sectors, enhancing operations with real-time visibility and automation.
                    </motion.p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative flex flex-col gap-0 pb-8">
                    {industries.map((industry, index) => {
                        // The scale factor: earlier cards shrink more
                        const targetScale = 1 - ((industries.length - index - 1) * 0.04);

                        // Range: each card shrinks during its section of the scroll
                        const start = index * (1 / industries.length);
                        const end = 1;

                        return (
                            <IndustryCard
                                key={index}
                                index={index}
                                industry={industry}
                                progress={scrollYProgress}
                                range={[start, end]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
