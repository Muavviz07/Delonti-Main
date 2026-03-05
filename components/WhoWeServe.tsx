"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const SECTORS = {
  government: {
    title: "Government Sector",
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

export default function WhoWeServe() {
  const [hoveredMain, setHoveredMain] = useState<"government" | "private" | null>(null);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#16161c] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            Who We Serve
          </h2>
          <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide">
            Driving Innovation Across Sectors
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* GOVERNMENT SECTOR CARD */}
          <div 
            onMouseEnter={() => setHoveredMain("government")}
            onMouseLeave={() => setHoveredMain(null)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 transition-all duration-500 min-h-[400px]"
          >
            {/* Main View */}
            <div className={`absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-10 flex flex-col justify-end z-10 ${hoveredMain === 'government' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${SECTORS.government.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              
              {/* Main Card Arrow: Fades out when sub-cards appear */}
              <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-sm transition-opacity duration-300 ${hoveredMain === 'government' ? 'opacity-0' : 'opacity-100'}`}>
                  <ArrowUpRight className="text-white w-5 h-5" />
              </div>

              <h4 className="relative text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">{SECTORS.government.title}</h4>
              <p className="relative text-sm md:text-base text-slate-300 max-w-sm leading-relaxed">{SECTORS.government.description}</p>
            </div>

            {/* Hovered Sub-Sectors View */}
            <div className={`grid grid-cols-2 h-full transition-all duration-700 ease-in-out ${hoveredMain === 'government' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              {SECTORS.government.subSectors.map((sub) => (
                <Link key={sub.title} href={sub.href} className="group/sub relative flex flex-col justify-end p-6 md:p-8 border-r border-white/10 last:border-0 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover/sub:grayscale-0 transition-all duration-700 group-hover/sub:scale-110" style={{ backgroundImage: `url('${sub.image}')` }} />
                  <div className="absolute inset-0 bg-[#0f172a]/85 group-hover/sub:bg-[#0f172a]/60 transition-colors duration-500" />
                  
                  {/* Sub-Card Top Right Arrow */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 z-30 shadow-sm">
                      <ArrowUpRight className="text-white w-4 h-4" />
                  </div>

                  {/* Fixed Layout: Removed conflicting flex classes so everything rests firmly at the bottom */}
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

          {/* PRIVATE SECTOR CARD */}
          <div 
            onMouseEnter={() => setHoveredMain("private")}
            onMouseLeave={() => setHoveredMain(null)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 transition-all duration-500 min-h-[400px]"
          >
            {/* Main View */}
            <div className={`absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-10 flex flex-col justify-end z-10 ${hoveredMain === 'private' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${SECTORS.private.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              
              {/* Main Card Arrow: Fades out when sub-cards appear */}
              <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-sm transition-opacity duration-300 ${hoveredMain === 'private' ? 'opacity-0' : 'opacity-100'}`}>
                  <ArrowUpRight className="text-white w-5 h-5" />
              </div>

              <h4 className="relative text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight">{SECTORS.private.title}</h4>
              <p className="relative text-sm md:text-base text-slate-300 max-w-sm leading-relaxed">{SECTORS.private.description}</p>
            </div>

            {/* Hovered Sub-Sectors View */}
            <div className={`grid grid-cols-2 h-full transition-all duration-700 ease-in-out ${hoveredMain === 'private' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              {SECTORS.private.subSectors.map((sub) => (
                <Link key={sub.title} href={sub.href} className="group/sub relative flex flex-col justify-end p-6 md:p-8 border-r border-white/10 last:border-0 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover/sub:grayscale-0 transition-all duration-700 group-hover/sub:scale-110" style={{ backgroundImage: `url('${sub.image}')` }} />
                  <div className="absolute inset-0 bg-[#0f172a]/85 group-hover/sub:bg-[#0f172a]/60 transition-colors duration-500" />
                  
                  {/* Sub-Card Top Right Arrow */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover/sub:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 z-30 shadow-sm">
                      <ArrowUpRight className="text-white w-4 h-4" />
                  </div>

                  {/* Fixed Layout: Removed conflicting flex classes so everything rests firmly at the bottom */}
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