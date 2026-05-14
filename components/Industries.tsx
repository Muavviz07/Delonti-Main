"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const INDUSTRIES = [
  {
    title: "Government",
    description: "Secure, Compliant Infrastructure & Accountability",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070",
    href: "/industries/government",
  },
  {
    title: "Education",
    description: "Unified Campus Security & Asset Management",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
  },
  {
    title: "Healthcare",
    description: "Patient Safety & Critical Asset Tracking",
    image: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?q=80&w=752&auto=format&fit=crop",
  },
  {
    title: "Manufacturing",
    description: "Process Optimization & Operational Safety",
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Supply Chain (Retail/Logistics)",
    description: "End-to-End Visibility & Inventory Control",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
  },
  {
    title: "Public Safety",
    description: "Real-time Visibility for Emergency Response",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070",
  }
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 380;
  const gap = 24;

  useEffect(() => {
    const calculateMaxScroll = () => {
      if (containerRef.current) {
        const visibleWidth = containerRef.current.offsetWidth;
        const possibleScrolls = Math.max(0, INDUSTRIES.length - Math.floor(visibleWidth / (cardWidth + gap)));
        setMaxScroll(possibleScrolls);
      }
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);
    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxScroll ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24" ref={containerRef}>
        
        {/* Header with Navigation */}
        <div className="flex items-end justify-between mb-16">
          <div className="max-w-3xl">
            <h2 className="section-subheading">
              Who We Serve
            </h2>
            <h3 className="section-heading mb-0">
              Modern protection for any space
            </h3>
          </div>
          
          <div className="flex gap-4 mb-2">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-14 h-14 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95'}`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxScroll}
              className={`w-14 h-14 rounded-xl border border-slate-900 dark:border-white flex items-center justify-center transition-all ${currentIndex >= maxScroll ? 'opacity-20 cursor-not-allowed' : 'hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95'}`}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Grid / Slider */}
        <div className="relative overflow-visible">
          <motion.div 
            className="flex gap-6 items-start"
            animate={{ x: -(currentIndex * (cardWidth + gap)) }}
            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
          >
            {INDUSTRIES.map((industry, idx) => (
              <IndustryCard key={idx} industry={industry} cardWidth={cardWidth} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

interface Industry {
  title: string;
  description: string;
  image: string;
  href?: string;
}

function IndustryCard({ industry, cardWidth }: { industry: Industry, cardWidth: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="shrink-0" 
      style={{ width: `${cardWidth}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {industry.href ? (
        <Link href={industry.href} className="relative block">
          <CardContent industry={industry} isHovered={isHovered} />
        </Link>
      ) : (
        <div className="relative cursor-pointer">
          <CardContent industry={industry} isHovered={isHovered} />
        </div>
      )}
    </div>
  );
}

function CardContent({ industry, isHovered }: { industry: Industry, isHovered: boolean }) {
  return (
    <>
        {/* The Image Card - Expands on Hover */}
        <motion.div 
          className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-900 z-10"
          animate={{ height: isHovered ? 564 : 480 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
            style={{ backgroundImage: `url(${industry.image})` }} 
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`} />
          
          {/* Label inside at bottom */}
          <motion.div 
            className="absolute bottom-12 left-10"
            animate={{ y: isHovered ? -90 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-3xl font-bold text-white tracking-tight">
              {industry.title}
            </h4>
            <motion.p 
              className="text-slate-300 text-sm font-medium mt-3 max-w-[280px]"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {industry.description}
            </motion.p>
          </motion.div>

          {/* Learn More Button - Now Inside & Hover-triggered */}
          <motion.div 
            className="absolute bottom-8 left-8 right-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 40 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
             <button className="w-full py-4 px-8 rounded-xl bg-black text-white flex items-center justify-between border border-white/10 hover:bg-slate-900 transition-colors">
                <span className="text-sm font-bold">Learn more</span>
                <ArrowRight className="w-5 h-5" />
             </button>
          </motion.div>
        </motion.div>

        {/* The "Outside" Button - Slides up and fades out on hover */}
        <motion.div 
          className="mt-6"
          animate={{ 
            y: isHovered ? -60 : 0, 
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.95 : 1
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-full py-4 px-8 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Learn more</span>
            <ArrowRight className="w-5 h-5 text-slate-900 dark:text-white" />
          </div>
        </motion.div>
    </>
  );
}
