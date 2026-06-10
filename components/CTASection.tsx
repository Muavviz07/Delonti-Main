"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading = "Ready to revolutionize your infrastructure?",
  description = "Join leading organizations building the future with Delonti. Let's discuss your next project.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  buttonHref
}: CTASectionProps) {
  // Use buttonHref if provided, otherwise fallback to buttonLink
  const finalHref = buttonHref || buttonLink;

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="section-heading mb-0">
              {heading}
            </h2>
            <p className="section-body mt-6">
              {description}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-8">
            <Link 
              href={finalHref}
              className="group relative px-8 py-3.5 bg-logo hover:bg-logo/90 text-white rounded-xl font-bold text-base transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider">{buttonText}</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            
            <Link 
              href="/solutions"
              className="group relative px-8 py-3.5 bg-white/5 hover:bg-white/10 text-slate-500 hover:text-primary transition-all backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center justify-center gap-3 rounded-xl overflow-hidden text-base"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider font-bold">Explore Solutions</span>
              <ChevronRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
