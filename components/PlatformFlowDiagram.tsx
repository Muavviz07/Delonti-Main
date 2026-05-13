"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Tag, Radio, Cloud, Brain, LayoutDashboard } from "lucide-react";

const nodes = [
  { id: 1, title: "RFID Tags", icon: Tag },
  { id: 2, title: "Sensors", icon: Radio },
  { id: 3, title: "Cloud Platform", icon: Cloud },
  { id: 4, title: "AI Insights", icon: Brain },
  { id: 5, title: "Operational Dashboards", icon: LayoutDashboard },
];

export default function PlatformFlowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 1.5,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full py-20 px-4 md:px-12 bg-[#1a1a24] rounded-3xl border border-white/10 overflow-hidden"
    >
      {/* Background Gradient/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b2b4f]/20 to-transparent" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-[1200px] mx-auto">
        
        {/* Animated Background Line for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0 rounded-full" />
        <motion.div 
          className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4A7C59] -translate-y-1/2 z-0 origin-left rounded-full shadow-[0_0_15px_#4A7C59]"
          style={{ scaleX: pathProgress }}
        />

        {/* Animated Background Line for Mobile */}
        <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-white/10 -translate-x-1/2 z-0 rounded-full" />
        <motion.div 
          className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-[#4A7C59] -translate-x-1/2 z-0 origin-top rounded-full shadow-[0_0_15px_#4A7C59]"
          style={{ scaleY: pathProgress }}
        />

        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative z-10 flex flex-col items-center group w-full md:w-auto"
          >
            {/* Glassmorphism Node */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4 shadow-xl transition-colors group-hover:border-[#4A7C59]/50 group-hover:bg-[#4A7C59]/10"
            >
              <node.icon className="w-10 h-10 md:w-12 md:h-12 text-white/80 group-hover:text-white transition-colors" />
            </motion.div>
            
            <div className="text-center bg-[#121216]/80 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm">
              <span className="text-sm md:text-base font-semibold text-white/90 whitespace-nowrap">
                {node.title}
              </span>
            </div>
            
            {/* Pulsing Dot */}
            <div className="absolute top-[3rem] md:top-[3.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#4A7C59]/20 absolute top-0 left-0"
              />
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
