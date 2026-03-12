"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; 

const SLIDES = [
  {
    id: 1,
    title: "Secure Intelligent Infrastructure",
    tags: "RFID • IoT • Cybersecurity • Data Platforms",
    description: "Achieve complete visibility over physical assets and personnel with sub-second accuracy. Optimize workflows and drastically reduce operational losses.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Connected IoT Ecosystems",
    tags: "Smart Sensors • Edge Computing • Real-Time Monitoring",
    description: "Connect and manage your entire operational environment. Transform raw sensor data into predictive insights that automate tasks and lower costs.",
    bgImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Zero-Trust Cybersecurity",
    tags: "Threat Detection • Risk Management • Incident Response",
    description: "Protect your digital boundaries with next-generation threat detection. Ensure data security and operational integrity against evolving cyber threats.",
    bgImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Enterprise Digital Transformation",
    tags: "Process Automation • Cloud Integration • Scalable Architecture",
    description: "Scale your enterprise with cutting-edge management solutions. Streamline complex processes, empower your workforce, and secure your competitive edge.",
    bgImage: "https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedSlides = [...SLIDES, SLIDES[0]];

  // 1. AUTO-PLAY TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      if (isTransitioning) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isTransitioning, currentIndex]);

  // 2. SEAMLESS LOOP & BACKGROUND TAB FIX
  useEffect(() => {
    if (currentIndex === SLIDES.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);

      return () => clearTimeout(resetTimer);
    }
    
    if (currentIndex > SLIDES.length) {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [currentIndex]);

  const handleDotClick = (idx: number) => {
    setIsTransitioning(true);
    setCurrentIndex(idx);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#16161c]">
      
      {/* SLIDER TRACK */}
      <div 
        className={`flex w-full h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className="w-full h-full flex-shrink-0 relative">
            
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.85)), url('${slide.bgImage}')`,
              }}
            />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center text-white pb-32 md:pb-24">
              
              {/* SHORTER TITLE */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide uppercase w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl drop-shadow-md leading-tight md:leading-tight">
                {slide.title}
              </h1>
              
              {/* TAGS SECTION */}
              <div className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-slate-300 mb-6 drop-shadow-sm">
                {slide.tags}
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-base lg:text-lg font-light mb-8 md:mb-10 w-full max-w-[95%] sm:max-w-[85%] md:max-w-3xl text-slate-200 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* STATIC BUTTONS */}
      <div className="absolute bottom-20 md:bottom-24 left-0 w-full flex flex-wrap justify-center gap-4 md:gap-6 px-4 z-10">
        
        {/* CHANGED TO font-medium to match the second button */}
        <Link 
          href="/government" 
          className="group bg-white hover:bg-slate-100 text-slate-900 px-6 md:px-8 py-3.5 rounded-md font-medium transition-all w-full sm:w-auto min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 flex items-center justify-center tracking-wide"
        >
          Explore Public Sector <ChevronRight className="text-slate-900 w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
        
        <Link 
          href="/private" 
          className="group bg-federal-green hover:bg-federal-green/90 text-white px-6 md:px-8 py-3.5 rounded-md font-medium transition-all w-full sm:w-auto min-w-[200px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center tracking-wide border border-white/10"
        >
          Explore Private Sector <ChevronRight className="text-white w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>

      {/* CLICKABLE INDICATOR DOTS */}
      <div className="absolute bottom-6 md:bottom-8 left-0 w-full flex justify-center gap-3 z-10">
        {SLIDES.map((_, idx) => {
          const isActive = currentIndex === idx || (currentIndex === SLIDES.length && idx === 0);
          
          return (
            <button
              suppressHydrationWarning
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive 
                  ? "w-8 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
      
    </section>
  );
}