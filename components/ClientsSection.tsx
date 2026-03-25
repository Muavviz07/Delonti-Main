"use client";

import React from 'react';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

const HARDCODED_CLIENTS: Client[] = [
  { id: 1, name: "Nationwide", logo: "/clients/1.jpg" },
  { id: 2, name: "Ohio Dept", logo: "/clients/2.jpg" },
  { id: 3, name: "Queralt", logo: "/clients/3.jpg" },
  { id: 4, name: "UConn", logo: "/clients/4.jpg" },
  { id: 5, name: "USM", logo: "/clients/5.jpg" },
  { id: 6, name: "AEP", logo: "/clients/aep.jpg" },
  { id: 7, name: "Albuquerque", logo: "/clients/albuquerque.jpg" },
  { id: 8, name: "Blue Floras", logo: "/clients/blueforas.jpg" },
  { id: 9, name: "Candor", logo: "/clients/candor.jpg" },
  { id: 10, name: "FD", logo: "/clients/fd.jpg" },
  { id: 11, name: "Honda", logo: "/clients/honda.jpg" },
  { id: 12, name: "IBM", logo: "/clients/ibm.jpg" },
  { id: 13, name: "KLE", logo: "/clients/kle.jpg" },
  { id: 14, name: "Microsoft", logo: "/clients/microsoft.jpg" },
  { id: 15, name: "Zerochaos", logo: "/clients/zerochaos.jpg" },
];

const LogoCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex-none w-64 h-32 bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-lg flex items-center justify-center px-4 py-3 relative overflow-hidden transition-all duration-500 hover:border-primary/40 dark:hover:border-primary/50 group shadow-sm hover:shadow-xl hover:-translate-y-1">
    {/* Replaced hardcoded #6366f1 with bg-primary */}
    <div className="absolute top-0 left-0 w-full h-0 bg-primary transition-all duration-500 group-hover:h-1"></div>
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="256px"
        className="object-contain transition-all duration-500 group-hover:scale-105"
        priority
      />
    </div>
  </div>
);

export default function ClientsSection({ title }: { title?: string }) {
  const midpoint = Math.ceil(HARDCODED_CLIENTS.length / 2);
  const topRow = HARDCODED_CLIENTS.slice(0, midpoint);
  const bottomRow = HARDCODED_CLIENTS.slice(midpoint);

  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-16 px-6 border-t border-gray-100 dark:border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Replaced hardcoded #1F2A44 with theme-aware text colors */}
        <h2 className="text-2xl md:text-3xl font-normal text-center text-slate-900 dark:text-white mb-12 tracking-[0.25em] font-display">
          {title || "SOME OF OUR VALUABLE CLIENTS & PARTNERS"}
        </h2>

        {/* mask-horizontal adds the fade-out effect */}
        <div className="relative flex flex-col gap-6 mask-horizontal">

          <div className="flex w-full py-2">
            <div className="animate-scroll-right flex items-center gap-8 whitespace-nowrap">
              {[...topRow, ...topRow, ...topRow].map((item, idx) => (
                <LogoCard key={`top-${item.id}-${idx}`} name={item.name} logo={item.logo} />
              ))}
            </div>
          </div>

          <div className="flex w-full py-2">
            <div className="animate-scroll-left flex items-center gap-8 whitespace-nowrap">
              {[...bottomRow, ...bottomRow, ...bottomRow].map((item, idx) => (
                <LogoCard key={`bottom-${item.id}-${idx}`} name={item.name} logo={item.logo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}