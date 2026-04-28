"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Ready to revolutionize your infrastructure?
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mt-6">
              Join leading organizations building the future with Delonti. Let&apos;s discuss your next project.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-8">
            <Link 
              href="/contact"
              className="px-10 py-4 bg-[#0A1A2A] dark:bg-primary hover:bg-black dark:hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all shadow-xl active:scale-95 flex items-center gap-3 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/portfolio"
              className="text-base font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
