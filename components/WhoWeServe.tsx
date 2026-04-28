"use client";

import { Sparkles, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SOLUTIONS = [
  {
    title: "Find footage in seconds with any search criteria",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070",
  },
  {
    title: "Deter unwanted activity with AI-generated talk-down messages",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070",
  },
  {
    title: "Instantly search calls using natural language",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070",
  },
  {
    title: "Automate access control with facial recognition",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
  },
  {
    title: "Real-time threat detection and instant alerts",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070",
  }
];

export default function WhoWeServe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive Constants
  const cardWidth = 1150; 
  const gap = 40; 
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= SOLUTIONS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < SOLUTIONS.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="py-24 bg-[#F0F4F8] dark:bg-slate-950 overflow-hidden">
      {/* Container for Headings and Carousel Alignment */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Headings */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#38bdf8] mb-4">
            Delonti Core Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl">
            Revolutionizing Infrastructure through Intelligent Innovation
          </h3>
        </div>

        {/* Carousel Wrapper - Overflow visible to see peeks */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-visible">
            <motion.div 
              className="flex"
              animate={{ 
                x: -(currentIndex * (cardWidth + gap)) 
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              style={{ gap: `${gap}px` }}
            >
              {SOLUTIONS.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="shrink-0"
                  style={{ width: `${cardWidth}px` }}
                  animate={{
                    opacity: currentIndex === idx ? 1 : 0.3,
                    scale: currentIndex === idx ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-[550px] lg:h-[620px] bg-[#0A1A2A] rounded-[2.5rem] p-12 lg:p-16 flex flex-col relative overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer transition-colors duration-500 hover:bg-[#0E2338]">
                    <div className="flex gap-8 relative z-10 mb-12 items-start">
                      <div className="flex flex-col items-center gap-3 shrink-0">
                        <span className="text-[#38bdf8] font-black text-2xl tracking-tighter leading-none">0{idx + 1}</span>
                        <div className="w-px h-16 bg-gradient-to-b from-[#38bdf8] to-transparent" />
                      </div>
                      <h4 className="text-2xl lg:text-4xl font-bold text-white leading-[1.15] max-w-3xl">
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative flex-1 w-full rounded-[2rem] overflow-hidden border border-slate-700/50 bg-slate-900 group-hover:border-[#38bdf8]/30 transition-all duration-700 shadow-inner">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                        style={{ backgroundImage: `url(${item.image})` }} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Interactive Corner Accent */}
                      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                          <ArrowUpRight className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Navigation Arrows - Precisely at the edge of the active card */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none z-30">
              <div className="relative" style={{ width: `${cardWidth}px` }}>
                <button 
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-gray-100 text-slate-800 transition-all pointer-events-auto ${currentIndex === 0 ? 'opacity-0 scale-90' : 'opacity-100 hover:bg-slate-50 hover:scale-110 active:scale-95'}`}
                >
                  <ArrowLeft className="w-7 h-7" />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentIndex === SOLUTIONS.length - 1}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-gray-100 text-slate-800 transition-all pointer-events-auto ${currentIndex === SOLUTIONS.length - 1 ? 'opacity-0 scale-90' : 'opacity-100 hover:bg-slate-50 hover:scale-110 active:scale-95'}`}
                >
                  <ArrowRight className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Navigation Indicators */}
      <div className="flex justify-center gap-3 mt-20">
        {SOLUTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-14 bg-[#38bdf8]' : 'w-2.5 bg-slate-300 dark:bg-slate-800'}`}
          />
        ))}
      </div>
    </section>
  );
}

/*
// ==========================================
// PREVIOUS CODE COMMENTED OUT AS REQUESTED
// ==========================================
const SECTORS = {
  government: {
    title: "Public Sector",
    description: "Secure, compliant infrastructure for public safety and national defense.",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop",
    subSectors: [
      {
        title: "State & Local",
        description: "Regional infrastructure and public safety networks.",
        href: "/state",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
      },
      {
        title: "Federal Agencies",
        description: "Defense-grade solutions for national intelligence.",
        href: "/federal",
        image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070"
      }
    ]
  },
  private: {
    title: "Private Sector",
    description: "Scalable technology ecosystems for enterprise growth and supply chain security.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    subSectors: [
      {
        title: "Large Scale Enterprises",
        description: "Global RFID and IoT for massive supply chains.",
        href: "/large-enterprise",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
      },
      {
        title: "Small & Medium Business",
        description: "Agile, cost-effective tech solutions for better market agility.",
        href: "/sme",
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070"
      }
    ]
  }
};

export default function WhoWeServeOld() {
  const [hoveredMain, setHoveredMain] = useState<"government" | "private" | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header *\/}
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3 font-display">
            Who We Serve
          </h2>
          <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display">
            Driving Innovation Across Sectors
          </h3>
        </div>

        {/* The Grid *\/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* GOVERNMENT SECTOR CARD *\/}
          <div
            onMouseEnter={() => setHoveredMain("government")}
            onMouseLeave={() => setHoveredMain(null)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 transition-all duration-500 min-h-[400px]"
          >
            {/* Main View *\/}
            <div className={\`absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-10 flex flex-col justify-end z-10 \${hoveredMain === 'government' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}\`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: \`url('\${SECTORS.government.image}')\` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />

              {/* Main Card Arrow: Fades out when sub-cards appear *\/}
              <div className={\`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-sm transition-opacity duration-300 \${hoveredMain === 'government' ? 'opacity-0' : 'opacity-100'}\`}>
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>

              <h4 className="relative text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">{SECTORS.government.title}</h4>
              <p className="relative text-sm md:text-base text-slate-300 max-w-sm leading-relaxed">{SECTORS.government.description}</p>
            </div>

            {/* Hovered Sub-Sectors View *\/}
            <div className={\`grid grid-cols-2 h-full transition-all duration-700 ease-in-out \${hoveredMain === 'government' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}\`}>
              {SECTORS.government.subSectors.map((sub) => (
                <Link key={sub.title} href={sub.href} className="group/sub relative flex flex-col justify-end p-6 md:p-8 border-r border-white/10 last:border-0 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover/sub:grayscale-0 transition-all duration-700 group-hover/sub:scale-110" style={{ backgroundImage: \`url('\${sub.image}')\` }} />
                  <div className="absolute inset-0 bg-[#0f172a]/85 group-hover/sub:bg-[#0f172a]/60 transition-colors duration-500" />

                  {/* Sub-Card Top Right Arrow *\/}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 z-30 shadow-sm">
                    <ArrowUpRight className="text-white w-4 h-4" />
                  </div>

                  {/* Fixed Layout: Removed conflicting flex classes so everything rests firmly at the bottom *\/}
                  <div className="relative z-20">
                    <h5 className="text-lg md:text-xl font-bold text-white mb-2">{sub.title}</h5>
                    <p className="text-xs md:text-sm text-slate-400 group-hover/sub:text-slate-100 transition-colors duration-300 mb-3 line-clamp-3 md:line-clamp-none">{sub.description}</p>

                    <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-white opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/sub:translate-y-0">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* PRIVATE SECTOR CARD *\/}
          <div
            onMouseEnter={() => setHoveredMain("private")}
            onMouseLeave={() => setHoveredMain(null)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 transition-all duration-500 min-h-[400px]"
          >
            {/* Main View *\/}
            <div className={\`absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-10 flex flex-col justify-end z-10 \${hoveredMain === 'private' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}\`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: \`url('\${SECTORS.private.image}')\` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />

              {/* Main Card Arrow: Fades out when sub-cards appear *\/}
              <div className={\`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-sm transition-opacity duration-300 \${hoveredMain === 'private' ? 'opacity-0' : 'opacity-100'}\`}>
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>

              <h4 className="relative text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">{SECTORS.private.title}</h4>
              <p className="relative text-sm md:text-base text-slate-300 max-w-sm leading-relaxed">{SECTORS.private.description}</p>
            </div>

            {/* Hovered Sub-Sectors View *\/}
            <div className={\`grid grid-cols-2 h-full transition-all duration-700 ease-in-out \${hoveredMain === 'private' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}\`}>
              {SECTORS.private.subSectors.map((sub) => (
                <Link key={sub.title} href={sub.href} className="group/sub relative flex flex-col justify-end p-6 md:p-8 border-r border-white/10 last:border-0 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover/sub:grayscale-0 transition-all duration-700 group-hover/sub:scale-110" style={{ backgroundImage: \`url('\${sub.image}')\` }} />
                  <div className="absolute inset-0 bg-[#0f172a]/85 group-hover/sub:bg-[#0f172a]/60 transition-colors duration-500" />

                  {/* Sub-Card Top Right Arrow *\/}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 z-30 shadow-sm">
                    <ArrowUpRight className="text-white w-4 h-4" />
                  </div>

                  {/* Fixed Layout: Removed conflicting flex classes so everything rests firmly at the bottom *\/}
                  <div className="relative z-20">
                    <h5 className="text-lg md:text-xl font-bold text-white mb-2">{sub.title}</h5>
                    <p className="text-xs md:text-sm text-slate-400 group-hover/sub:text-slate-100 transition-colors duration-300 mb-3 line-clamp-3 md:line-clamp-none">{sub.description}</p>

                    <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-white opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/sub:translate-y-0">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
*/