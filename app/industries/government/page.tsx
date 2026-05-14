"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  EyeOff, FileText, Network, ShieldCheck,
  Box, Truck, HardHat, Activity, LayoutDashboard,
  Radio, Database, TrendingUp, Monitor, ShieldAlert, FileCheck,
  Globe, ArrowRight, Zap, CornerDownRight, ChevronRight
} from "lucide-react";
import PlatformFlowDiagram from "@/components/PlatformFlowDiagram";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GovernmentIndustryPage() {

  const IMAGES = {
    hero: "/images/government/gov_hero_control_1778635972305.png",
    kiosk: "/images/government/gov_smart_kiosk_1778635998533.png",
    fleet: "/images/government/gov_fleet_tech_1778636024858.png",
    asset: "/images/government/gov_asset_abstract_1778636047482.png",
    infra_monitor: "/images/government/gov_infra_monitor_1778638250211.png",
    outcome_visibility: "/images/government/gov_outcome_visibility_1778638266936.png",
    outcome_efficiency: "/images/government/gov_outcome_efficiency_1778638282938.png",
    outcome_decision: "/images/government/gov_outcome_decision_1778638299184.png",
    outcome_service: "/images/government/gov_outcome_service_1778638316232.png",
    case_rfid: "/images/government/gov_case_rfid_1778638339756.png",
    case_infra: "/images/government/gov_case_infra_1778638358289.png",
    case_access: "/images/government/gov_case_access_1778638376467.png",
  };

  return (
    <main className="w-full bg-[#FAFAFA] font-sans selection:bg-[#2b2b4f] selection:text-white relative">
      <Header />

      {/* 1. HERO SECTION - Clean Professional Split Layout */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-white border-b border-slate-100 pt-20 lg:pt-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/10 rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Government & Public Sector
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-[1.1] text-[#111111] uppercase"
              >
                RFID + AI Platform for <br />
                <span className="text-primary">Government Infrastructure</span>
              </motion.h1>

              {/* Subtext - Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 mb-8 leading-relaxed max-w-xl font-medium"
              >
                Track assets, infrastructure, and operations in real time across agencies, facilities, and field operations.
              </motion.p>

              {/* Points / Meta */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs md:text-sm text-primary mb-12 font-bold tracking-[0.15em] uppercase border-l-2 border-primary pl-4"
              >
                Real-Time Visibility • Operational Intelligence • Secure Public Infrastructure
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="#solutions"
                  className="group relative bg-white hover:bg-slate-50 text-[#111111] px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-200 flex items-center justify-center gap-3 shadow-sm overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Explore Solutions</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-slate-50"
            >
              <img
                src={IMAGES.hero}
                alt="Government Infrastructure"
                className="w-full h-full object-cover"
              />
              {/* Subtle accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A7C59]/10 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CHALLENGES SECTION - Permanent Colored Numbers + Minimal Hover */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#111111] max-w-2xl uppercase">
              Challenges Facing Government Agencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200">
            {[
              { num: "01", title: "Limited Asset Visibility", desc: "Assets across departments, facilities, and field operations are difficult to track and manage." },
              { num: "02", title: "Manual and Inefficient Processes", desc: "Audits, inventory checks, and reporting rely on manual processes that are time-consuming and error-prone." },
              { num: "03", title: "Cross-Agency Coordination Gaps", desc: "Data silos limit visibility and coordination across departments and agencies." },
              { num: "04", title: "Compliance and Accountability", desc: "Government agencies require accurate tracking, reporting, and audit trails." }
            ].map((item, i) => (
              <div key={i} className="p-10 lg:p-12 border-b border-r border-slate-200 flex flex-col h-[300px] group transition-colors hover:bg-slate-50">
                {/* Number is permanently colored #4A7C59, subtle translation on hover */}
                <div className="text-5xl font-display font-black text-primary mb-6 tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
                  {item.num}.
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#111111] mb-3 mt-auto uppercase">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE DELONTI APPROACH */}
      <section className="py-32 bg-[#FAFAFA] border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-[#111111] uppercase">A Platform Approach to Government Infrastructure</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Delonti delivers a unified RFID and AI-powered platform that connects physical infrastructure to digital intelligence.</p>
          </div>

          <PlatformFlowDiagram />

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              From tracking equipment and vehicles to enabling public service access, Delonti provides a scalable platform that supports modern government operations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN DO - Instantly Loading Morphing Tabs with Numbered Headings */}
      <InteractiveTabsSection images={IMAGES} />

      {/* 5. THE SMART KIOSK - Light Pale Greyish BG + Improved Positioning */}
      <section className="relative py-32 lg:py-48 bg-[#F1F5F9] border-y border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Content - Improved Positioning (Vertically centered, constrained width) */}
            <div className="lg:w-1/2 relative z-20 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Featured Solution</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 text-[#111111] uppercase">
                Smart Public Service Access Platform
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-12">
                Delonti’s Smart Kiosk solution enables governments to connect communities to critical services in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 border-t border-slate-300 pt-8 mb-12">
                {[
                  { icon: Globe, title: "Real-time service availability" },
                  { icon: Network, title: "Multi-agency integration" },
                  { icon: ShieldCheck, title: "Secure and accessible interface" },
                  { icon: Database, title: "Data-driven insights for planning" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-[#111111] font-bold tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-start">
                <Link href="/contact" className="group relative bg-logo hover:bg-logo/90 text-white px-8 py-3.5 font-bold rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-base">Explore Smart Kiosk Solution</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Right: Kiosk Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white blur-[80px] rounded-full pointer-events-none" />
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20 bg-white">
                <img src={IMAGES.kiosk} alt="Smart Kiosk" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PLATFORM CAPABILITIES */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#111111] uppercase">
              Platform Capabilities for Government
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {[
              { icon: Radio, title: "Real-Time Asset Tracking" },
              { icon: Database, title: "Automated Inventory Management" },
              { icon: TrendingUp, title: "Predictive Analytics" },
              { icon: Monitor, title: "Operational Dashboards" },
              { icon: ShieldAlert, title: "Security Monitoring" },
              { icon: FileCheck, title: "Compliance Reporting" }
            ].map((cap, i) => (
              <div key={i} className="group flex items-center gap-6 py-10 border-b border-slate-200 cursor-pointer relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
                <div className="w-14 h-14 rounded-full border border-slate-200 bg-[#FAFAFA] flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors shadow-sm">
                  <cap.icon strokeWidth={1.5} className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg md:text-xl font-medium tracking-tight text-slate-600 group-hover:text-[#111111] transition-colors">{cap.title}</span>
                <CornerDownRight className="w-5 h-5 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS - Sticky Stacking Cards */}
      <StickyStackingSection images={IMAGES} />

      {/* 8. CASE STUDIES - Differentiated Background (Slate-50) */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-[#111111] uppercase">
                Proven Government Use Cases
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "RFID Asset Tracking for State Agencies", img: IMAGES.case_rfid },
              { title: "Smart Infrastructure Monitoring", img: IMAGES.case_infra },
              { title: "Public Service Access Platforms", img: IMAGES.case_access }
            ].map((study, i) => (
              <Link href="#" key={i} className="group cursor-pointer flex flex-col h-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-8 relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${study.img}')` }} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-6 flex-grow group-hover:text-primary transition-colors text-[#111111] uppercase">{study.title}</h4>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                  Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA - Shorter and Sweeter */}
      <section className="relative py-20 lg:py-24 bg-[#111111] text-white overflow-hidden border-t border-[#2b2b4f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-10 max-w-3xl leading-tight uppercase">
            Modernize Government Infrastructure with Delonti
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group relative bg-logo hover:bg-logo/90 text-white px-10 py-4 font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link href="/contact" className="group relative bg-white/10 hover:bg-white/20 text-white px-10 py-4 font-bold text-lg rounded-xl transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Contact Sales</span>
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Import the Footer */}
      <Footer />

    </main>
  );
}




// --- Sub-component: Fixed UX Interactive Morphing Tabs (Instant Image Load) ---
function InteractiveTabsSection({ images }: { images: any }) {
  const tabs = [
    { id: 1, num: "01", title: "Asset Tracking", desc: "Track equipment, tools, and high-value assets across facilities and departments in real time.", img: images.asset, icon: Box },
    { id: 2, num: "02", title: "Fleet & Field Operations", desc: "Monitor vehicles, field equipment, and mobile assets across locations.", img: images.fleet, icon: Truck },
    { id: 3, num: "03", title: "Workforce Visibility", desc: "Track personnel movement for safety, coordination, and operational efficiency.", img: images.hero, icon: HardHat },
    { id: 4, num: "04", title: "Infrastructure Monitoring", desc: "Monitor infrastructure usage, movement, and operational conditions.", img: images.infra_monitor, icon: Activity },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Fixed List & Decoupled Description */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 text-[#111111] uppercase">
              What Government Agencies Can Do with Delonti
            </h2>

            {/* The Tab Titles with Numbers (Fixed height list, no layout shift) */}
            <div className="flex flex-col gap-6 mb-12 border-l border-slate-200 pl-6">
              {tabs.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className="cursor-pointer group flex items-center gap-4"
                  >
                    <span className={`text-xl font-display font-black tracking-tighter transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-300'}`}>
                      {tab.num}.
                    </span>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 uppercase ${isActive ? 'text-[#111111]' : 'text-slate-300 group-hover:text-slate-400'}`}>
                      {tab.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* The Decoupled Description Container (Fixed minimum height, instant text switch) */}
            <div className="min-h-[120px] relative">
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium transition-opacity duration-200">
                {activeTab.desc}
              </p>
            </div>
          </div>

          {/* Right: Instant Morphing Image (No crossfade delay) */}
          <div className="lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[700px] relative">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100">
              {/* Use standard img tag with key to force instant render update without framer-motion delay */}
              <img
                key={activeTab.id}
                src={activeTab.img}
                alt={activeTab.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Sticky Stacking Scroll Cards ---
function StickyStackingSection({ images }: { images: any }) {
  const cards = [
    { id: 1, title: "Improved Visibility", text: "Gain real-time insight into assets, infrastructure, and operations.", img: images.outcome_visibility, color: "bg-[#FAFAFA]", textCol: "text-[#111111]" },
    { id: 2, title: "Operational Efficiency", text: "Reduce manual processes and improve response times.", img: images.outcome_efficiency, color: "bg-[#111111]", textCol: "text-white" },
    { id: 3, title: "Better Decision-Making", text: "Use data and analytics to optimize operations.", img: images.outcome_decision, color: "bg-[#2b2b4f]", textCol: "text-white" },
    { id: 4, title: "Enhanced Public Service Delivery", text: "Connect communities to services more effectively.", img: images.outcome_service, color: "bg-primary", textCol: "text-white" },
  ];

  return (
    <section className="bg-white py-32 border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#111111] mb-6 uppercase">
            Outcomes for Government Agencies
          </h2>
        </div>

        {/* The Stacking Container */}
        <div className="relative w-full flex flex-col items-center pb-24">
          {cards.map((card, i) => (
            <div
              key={card.id}
              // The sticky offset increases slightly per card so they stack perfectly
              className={`sticky w-full max-w-5xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200/20 shadow-2xl flex flex-col md:flex-row ${card.color} ${card.textCol}`}
              style={{ top: `calc(15vh + ${i * 40}px)`, marginBottom: '100px' }}
            >
              {/* Left Content */}
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 uppercase">{card.title}</h3>
                <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium">{card.text}</p>
              </div>
              {/* Right Image */}
              <div className="hidden md:block md:w-1/2 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${card.img}')` }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
