"use client";

import { ChevronRight, Target, EyeOff } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[650px] md:min-h-[850px] overflow-hidden bg-[#0a0a0f]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
        </video>
        {/* Advanced Overlay for premium look */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0f]/80 via-[#0a0a0f]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#0a0a0f]/10" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            Government Solutions
          </motion.div>

          {/* Problem Points */}
          <div className="space-y-2 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-widest"
            >
              • Government Assets Are Hard to Track
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-widest"
            >
              • Limited Visibility Across Equipment and Operations
            </motion.div>
          </div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 tracking-tight leading-[1.1] md:leading-[1] wrap-break-word uppercase"
          >
            RFID + <br />
            AI PLATFORM FOR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Real-Time Tracking</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm md:text-xl text-white/90 mb-4 leading-relaxed max-w-2xl font-bold uppercase tracking-wide"
          >
            Powering Asset Tracking and Smart Homeless Service Kiosks
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm md:text-lg text-blue-400 mb-10 md:mb-12 font-bold tracking-wide uppercase"
          >
            Delonti - RFID + AI Intelligence Platform
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5"
          >
            <Link
              href="/government"
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center sm:justify-start gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Explore Solutions</span>
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
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-transparent via-blue-500/50 to-transparent z-10" />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0a0a0f] to-transparent z-10" />
    </section>
  );
}