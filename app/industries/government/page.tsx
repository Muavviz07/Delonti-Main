"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Eye, EyeOff, FileText, Network, ShieldCheck,
  Box, Truck, HardHat, Activity, LayoutDashboard,
  Radio, Database, TrendingUp, Monitor, ShieldAlert, FileCheck,
  Globe, ArrowRight, Zap, ChevronRight, Play
} from "lucide-react";
import GovKeyFlow from "@/components/GovKeyFlow";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GovernmentIndustryPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
    service_access: "/images/government/gov_smart_service_access.png",
  };

  return (
    <main className="w-full bg-[#FAFAFA] font-sans selection:bg-[#2b2b4f] selection:text-white relative">
      <Header />

      {/* 1. HERO SECTION - Clean Professional Split Layout */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-white border-b border-slate-100 pt-5 lg:pt-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
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
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/10 rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Government
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-[#111111] uppercase"
              >
                RFID + AI Platform for <br />
                <span className="text-primary">Government Infrastructure</span>
              </motion.h1>

              {/* Subtext - Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 mb-6 leading-relaxed max-w-xl font-medium"
              >
                Track assets, infrastructure, and operations in real time across agencies, facilities, and field operations.
              </motion.p>

              {/* Points / Meta */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs md:text-sm text-primary mb-10 font-bold tracking-[0.15em] uppercase border-l-2 border-primary pl-4"
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
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="#solutions"
                  className="group relative bg-white hover:bg-slate-50 text-[#111111] px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-200 flex items-center justify-center gap-3 shadow-sm overflow-hidden w-full sm:w-60 whitespace-nowrap"
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
              className="relative aspect-square lg:aspect-[1.05/1] lg:max-h-[700px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 bg-slate-50"
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

      {/* 2. CHALLENGES SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] uppercase">
              Challenges Facing Government Agencies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Monitor,
                num: "01",
                title: "Limited Asset Visibility",
                desc:
                  "Assets across departments, facilities, and field operations are difficult to track and manage.",
              },
              {
                icon: Activity,
                num: "02",
                title: "Manual and Inefficient Processes",
                desc:
                  "Audits, inventory checks, and reporting rely on manual processes that are time-consuming and error-prone.",
              },
              {
                icon: Network,
                num: "03",
                title: "Cross-Agency Coordination Gaps",
                desc:
                  "Data silos limit visibility and coordination across departments and agencies.",
              },
              {
                icon: ShieldCheck,
                num: "04",
                title: "Compliance and Accountability",
                desc:
                  "Government agencies require accurate tracking, reporting, and audit trails.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* subtle top glow */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-8 w-8 lg:h-9 lg:w-9" />
                  </div>

                  {/* Number */}
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    {item.num}
                  </div>

                  {/* Title */}
                  <h3 className="min-h-[3.5rem] text-base font-bold leading-relaxed text-slate-900 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm lg:text-base font-medium leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE DELONTI APPROACH */}
      <section className="py-16 lg:py-20 bg-[#FAFAFA] border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-[#111111] uppercase">A Platform Approach to Government Infrastructure</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Delonti delivers a unified RFID and AI-powered platform that connects physical infrastructure to digital intelligence.</p>
          </div>

          <GovKeyFlow />

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">
              From tracking equipment and vehicles to enabling public service access, Delonti provides a scalable platform that supports modern government operations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN DO */}
      <InteractiveTabsSection images={IMAGES} />

      {/* 5. THE SMART KIOSK */}
      <section className="relative py-16 lg:py-20 bg-[#F1F5F9] border-y border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            {/* Left Content */}
            <div className="lg:w-1/2 relative z-20 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Featured Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 text-[#111111] uppercase">
                Smart Public Service Access Platform
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-10">
                Delonti’s Smart Kiosk solution enables governments to connect communities to critical services in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 border-t border-slate-300 pt-8 mb-10">
                {[
                  { icon: Globe, title: "Real-time service availability" },
                  { icon: Network, title: "Multi-agency integration" },
                  { icon: ShieldCheck, title: "Secure and accessible interface" },
                  { icon: Database, title: "Data-driven insights for planning" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-[#111111] text-sm md:text-base font-bold tracking-tight uppercase">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-start gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 py-3.5 font-bold rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden w-full sm:w-52 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-base">Explore</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
                <button
                  onClick={() => setActiveVideo("1153761741")}
                  className="group relative bg-white hover:bg-slate-50 text-[#111111] px-8 py-3.5 font-bold rounded-xl transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-3 overflow-hidden cursor-pointer w-full sm:w-52 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Play className="relative z-10 w-5 h-5 text-primary transition-transform group-hover:scale-110 fill-current" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-base">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right: Kiosk Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white blur-[80px] rounded-full pointer-events-none" />
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20 bg-white">
                <img src={IMAGES.kiosk} alt="Smart Kiosk" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PLATFORM CAPABILITIES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] uppercase mb-4">
              Platform Capabilities for Government
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="flex flex-row md:grid md:grid-cols-6 gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {[
              { icon: Radio, title: "Real-Time Asset Tracking", desc: "Instantly locate and track high-value agency hardware and equipment." },
              { icon: Database, title: "Automated Inventory Management", desc: "Maintain real-time registers without manual audits or paperwork." },
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast operational bottlenecks and asset lifecycles." },
              { icon: Monitor, title: "Operational Dashboards", desc: "Unified dashboards providing command-level visibility." },
              { icon: ShieldAlert, title: "Security Monitoring", desc: "Automated alerts and access tracking across public facilities." },
              { icon: FileCheck, title: "Compliance Reporting", desc: "Secure audit trails customized for state & federal standards." }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i} 
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer w-[75vw] sm:w-[45vw] md:w-auto shrink-0 snap-start"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center shrink-0 mb-5 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold tracking-tight text-[#111111] group-hover:text-primary transition-colors duration-300 uppercase mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. USE CASES IN ACTION - Video Showcase */}
      {/* <VideoUseCasesSection /> */}

      {/* 8. BENEFITS - Sticky Stacking Cards */}
      <StickyStackingSection images={IMAGES} />

      {/* 9. CASE STUDIES */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-[#111111] uppercase">
              Proven Government Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "RFID Asset Tracking for State Agencies", img: IMAGES.case_rfid, href: "/resources/case-studies/rfid-asset-tracking-government" },
              { title: "Smart Infrastructure Monitoring", img: IMAGES.case_infra, href: "/resources/case-studies/smart-infrastructure-monitoring" },
              { title: "Public Service Access Platforms", img: IMAGES.case_access, href: "/resources/case-studies/public-service-access-platform" }
            ].map((study, i) => (
              <Link href={study.href} key={i} className="group cursor-pointer flex flex-col h-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${study.img}')` }} />
                </div>
                <h4 className="text-lg md:text-xl font-bold tracking-tight mb-6 flex-grow group-hover:text-primary transition-colors text-[#111111] uppercase">{study.title}</h4>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
                  Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="relative py-16 lg:py-20 bg-[#111111] text-white overflow-hidden border-t border-[#2b2b4f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-3xl leading-tight uppercase">
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

      {/* Hero/Kiosk Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute inset-0 w-full h-full"
                title="Video Player"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10 cursor-pointer"
              >
                <div className="w-6 h-6 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white -rotate-45" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

// --- Sub-component: Fixed UX Interactive Morphing Tabs (Instant Image Load) ---
function InteractiveTabsSection({ images }: { images: any }) {
  const tabs = [
    {
      id: 1, num: "01",
      title: "Asset Tracking",
      desc: "Track equipment, tools, and high-value assets across facilities and departments in real time.",
      img: images.asset, icon: Box
    },
    {
      id: 2, num: "02",
      title: "Fleet & Field Operations",
      desc: "Monitor vehicles, field equipment, and mobile assets across locations.",
      img: images.fleet, icon: Truck
    },
    {
      id: 3, num: "03",
      title: "Workforce Visibility",
      desc: "Track personnel movement for safety, coordination, and operational efficiency.",
      img: images.hero, icon: HardHat
    },
    {
      id: 4, num: "04",
      title: "Infrastructure Monitoring",
      desc: "Monitor infrastructure usage, movement, and operational conditions.",
      img: images.infra_monitor, icon: Activity
    },
    {
      id: 5, num: "05",
      title: "Smart Public Service Access",
      desc: "Enable real-time access to public services through connected infrastructure such as smart kiosks.",
      bullets: [
        "Homeless services access",
        "Healthcare referrals",
        "Shelter and support services",
        "Multi-agency service integration"
      ],
      img: images.service_access, icon: Globe
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="solutions" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left: Dynamic Accordion-style List */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-10 lg:mb-12 text-[#111111] uppercase">
              What Government Agencies Can Do with Delonti
            </h2>

            {/* The Tab Items */}
            <div className="flex flex-col gap-0 border-l border-slate-200">
              {tabs.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <div
                    key={tab.id}
                    onMouseEnter={() => setActiveTab(tab)}
                    className="cursor-pointer group flex flex-col pl-6 py-5 border-b border-slate-100 last:border-b-0 transition-colors duration-300 hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xl font-display font-black tracking-tighter transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-300'}`}>
                        {tab.num}.
                      </span>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 uppercase ${isActive ? 'text-[#111111]' : 'text-slate-300 group-hover:text-slate-400'}`}>
                        {tab.title}
                      </h3>
                    </div>

                    {/* Body text directly below the subtitle with smooth height transition */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 12 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium mb-3">
                        {tab.desc}
                      </p>
                      {tab.bullets && (
                        <ul className="space-y-2">
                          {tab.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-3 text-sm md:text-base text-slate-500 font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Instant Morphing Image */}
          <div className="lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[600px] xl:h-[700px] relative mt-8 lg:mt-0">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100">
              <img
                key={activeTab.id}
                src={activeTab.img}
                alt={activeTab.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Video Use Cases Section ---
function VideoUseCasesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "1153764659",
      title: "Transportation",
      desc: "Optimize transportation networks, fleet routing, and traffic flow with real-time tracking.",
      thumbnail: "/images/government/gov_fleet_tech_1778636024858.png"
    },
    {
      id: "1153765212",
      title: "Utilities",
      desc: "Monitor critical infrastructure and ensure continuous operations with smart condition sensors.",
      thumbnail: "/images/government/gov_utilities_infrastructure.png"
    },
    {
      id: "1153761078",
      title: "Cities and Counties",
      desc: "Empower local governments to manage municipal assets and coordinate public field services efficiently.",
      thumbnail: "/images/government/gov_smart_service_access.png"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] uppercase mb-4 lg:mb-6">
            Operational Intelligence in Field Applications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 mb-6 border border-slate-100">
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,89,171,0.5)]">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Glass Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 bg-linear-to-t from-black/80 to-transparent">
                  <h3 className="text-lg lg:text-xl font-bold text-white uppercase tracking-tight">{video.title}</h3>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed px-2">
                {video.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute inset-0 w-full h-full"
                title="Video Player"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              >
                <div className="w-6 h-6 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white -rotate-45" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- Sub-component: Elegant Outcomes Grid ---
function StickyStackingSection({ images }: { images: any }) {
  const cards = [
    { id: 1, icon: Eye, title: "Improved Visibility", text: "Gain real-time insight into assets, infrastructure, and operations." },
    { id: 2, icon: TrendingUp, title: "Operational Efficiency", text: "Reduce manual processes and improve response times." },
    { id: 3, icon: LayoutDashboard, title: "Better Decision-Making", text: "Use data and analytics to optimize operations." },
    { id: 4, icon: Globe, title: "Enhanced Public Service Delivery", text: "Connect communities to services more effectively." },
  ];

  return (
    <section className="bg-slate-50/50 py-16 lg:py-20 border-y border-slate-200 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-logo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-logo bg-logo/5 border border-logo/10 rounded-full"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-logo animate-pulse" />
            Strategic Outcomes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#111111] mb-5 uppercase"
          >
            Outcomes for Government Agencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl"
          >
            Delivering measurable public value, operational resilience, and streamlined citizen experiences through a unified RFID & AI platform.
          </motion.p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: card.id * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 md:p-10 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_-15px_rgba(0,89,171,0.08)] hover:border-logo/30 transition-all duration-500 ease-out flex flex-col justify-between"
              >
                {/* Subtle top-right outcome number */}
                <div className="absolute top-6 right-8 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300 group-hover:text-logo/30 transition-colors duration-500">
                  Outcome 0{card.id}
                </div>

                <div className="relative flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                  {/* Icon Wrapper */}
                  <div className="flex h-14 w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-2xl border border-logo/10 bg-logo/5 text-logo shadow-xs transition-all duration-500 group-hover:scale-110 group-hover:bg-logo group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(0,89,171,0.4)]">
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7 transition-transform duration-500 group-hover:rotate-3" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-logo transition-colors duration-300 leading-snug pr-12 sm:pr-0">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                      {card.text}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom line expand transition */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-logo/40 to-logo w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}