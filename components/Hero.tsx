"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SLIDES = [
  {
    video: "/videos/government-animation.webm",
    badge: "Government Solutions",
    points: [
      "Government Assets Are Hard to Track",
      "Limited Visibility Across Equipment and Operations"
    ],
    title: (
      <>
        RFID + <br />
        AI PLATFORM FOR <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Real-Time Tracking</span>
      </>
    ),
    subtext: "Powering Asset Tracking and Smart Homeless Service Kiosks",
    description: "Delonti - RFID + AI Intelligence Platform",
    cta: "Explore Solutions",
    link: "/government"
  },
  {
    video: "/videos/education-animation.webm",
    badge: "Education Solutions",
    points: [
      "Student Safety and Resource Efficiency",
      "Real-Time Visibility in Educational Facilities"
    ],
    title: (
      <>
        SMART CAMPUS <br />
        & ASSET <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Management</span>
      </>
    ),
    subtext: "Enhancing Campus Safety and Efficiency with RFID Technology",
    description: "Delonti - Intelligent Campus Solutions",
    cta: "View Solutions",
    link: "/solutions"
  },
  {
    video: "/videos/healthcare-animation.webm",
    badge: "Healthcare Solutions",
    points: [
      "Patient Safety and Asset Optimization",
      "Real-Time Tracking for Critical Equipment"
    ],
    title: (
      <>
        HEALTHCARE <br />
        & ASSET <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Intelligence</span>
      </>
    ),
    subtext: "Transforming Healthcare Operations with Advanced RFID Tracking",
    description: "Delonti - Smart Healthcare Infrastructure",
    cta: "Learn More",
    link: "/solutions"
  },
  {
    video: "/videos/manufacturing-animation.webm",
    badge: "Manufacturing Solutions",
    points: [
      "Inventory Accuracy and Supply Chain Visibility",
      "Optimizing Production Line Operations"
    ],
    title: (
      <>
        SMART <br />
        MANUFACTURING <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Systems</span>
      </>
    ),
    subtext: "Empowering Industry 4.0 with Real-Time RFID Intelligence",
    description: "Delonti - Industry-Leading Asset Management",
    cta: "View Systems",
    link: "/solutions"
  },
  {
    video: "/videos/law-enforcement-animation.webm",
    badge: "Law Enforcement Solutions",
    points: [
      "Critical Asset Accountability and Tracking",
      "Real-Time Visibility for Public Safety Operations"
    ],
    title: (
      <>
        LAW <br />
        ENFORCEMENT <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">& PUBLIC SAFETY</span>
      </>
    ),
    subtext: "Enhancing Accountability and Operational Efficiency with RFID",
    description: "Delonti - Intelligent Public Safety Solutions",
    cta: "Explore Solutions",
    link: "/solutions"
  },
  {
    video: "/videos/retail-animation.webm",
    badge: "Retail Solutions",
    points: [
      "Omnichannel Inventory Accuracy",
      "Streamlined Operations and Customer Insights"
    ],
    title: (
      <>
        SMART RETAIL <br />
        & INVENTORY <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">MANAGEMENT</span>
      </>
    ),
    subtext: "Revolutionizing Retail Efficiency with Real-Time Data Intelligence",
    description: "Delonti - Next-Gen Retail Infrastructure",
    cta: "View Solutions",
    link: "/solutions"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handleVideoEnded = () => {
    nextSlide();
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] md:min-h-[850px] overflow-hidden bg-[#0a0a0f]">
      {/* Background Video with Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
            >
              <source src={SLIDES[currentSlide].video} type="video/webm" />
            </video>
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced Overlay for premium look */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0f]/80 via-[#0a0a0f]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#0a0a0f]/10" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-left text-white"
          >
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {SLIDES[currentSlide].badge}
            </motion.div>

            {/* Problem Points */}
            <div className="space-y-2 mb-8">
              {SLIDES[currentSlide].points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]"
                >
                  • {point}
                </motion.div>
              ))}
            </div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 tracking-tight leading-[1.1] md:leading-[1] wrap-break-word uppercase"
            >
              {SLIDES[currentSlide].title}
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[10px] md:text-sm text-white mb-4 leading-relaxed max-w-2xl font-bold uppercase tracking-[0.2em]"
            >
              {SLIDES[currentSlide].subtext}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[10px] md:text-sm text-white mb-10 md:mb-12 font-bold tracking-[0.2em] uppercase"
            >
              {SLIDES[currentSlide].description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5"
            >
              <Link
                href={SLIDES[currentSlide].link}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center sm:justify-start gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">{SLIDES[currentSlide].cta}</span>
                <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/contact"
                className="group bg-white/5 hover:bg-white/10 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all backdrop-blur-xl border border-white/10 flex items-center justify-center sm:justify-start gap-3 hover:border-white/20"
              >
                <span className="uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators (Circles) */}
      <div className="absolute right-6 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5 md:gap-8">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all"
          >
            {/* Background Circle */}
            <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index ? 'border-blue-500/50' : 'border-white/10 group-hover:border-white/30'
            }`} />
            
            {/* Progress Circle (SVG) */}
            {currentSlide === index && (
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 - (282.7 * progress) / 100}
                  className="text-blue-500 transition-all duration-100 ease-linear"
                />
              </svg>
            )}
            
            {/* Slide Number or Dot */}
            <span className={`relative z-10 text-[10px] md:text-xs font-bold transition-all duration-300 ${
              currentSlide === index ? 'text-white scale-110' : 'text-white/30'
            }`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-transparent via-blue-500/50 to-transparent z-10" />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0a0a0f] to-transparent z-10" />
    </section>
  );
}