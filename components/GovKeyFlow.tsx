"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GovKeyFlow() {
    return (
        <section className="w-full bg-transparent">
            <div className="max-w-[1400px] mx-auto">

                {/* 1. Main Infographic Display */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[16/8] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-white dark:bg-background-dark-alt border border-slate-200 dark:border-slate-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]"
                >
                    <Image
                        src="/images/government/Government - Key Flow.png"
                        alt="Delonti Key Flow for Government Operations"
                        fill
                        className="object-contain p-4 md:p-8"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
}
