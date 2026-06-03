"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Eye, EyeOff, FileText, Network, ShieldCheck,
  Box, Truck, HardHat, Activity, LayoutDashboard,
  Radio, Database, TrendingUp, Monitor, ShieldAlert, FileCheck,
  Globe, ArrowRight, Zap, ChevronRight, Play, HeartPulse, Sparkles, ClipboardCheck, CheckCircle2
} from "lucide-react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HealthcareIndustryPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const IMAGES = {
    hero: "/images/healthcare/healthcare_hero.png",
    equipment: "/images/healthcare/healthcare_equipment.png",
    inventory: "/images/healthcare/healthcare_inventory.png",
    workflow: "/images/healthcare/healthcare_workflow.png",
    facility: "/images/healthcare/healthcare_facility.png",
    case_equip: "/images/healthcare/healthcare_case_equip.png",
    case_inventory: "/images/healthcare/healthcare_case_inventory.png",
    case_operations: "/images/healthcare/healthcare_case_operations.png",
    case_facility: "/images/healthcare/healthcare_case_facility.png",
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
                Healthcare
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-[#111111] uppercase"
              >
                RFID + AI Platform for <br />
                <span className="text-primary">Smart Healthcare Infrastructure</span>
              </motion.h1>

              {/* Subtext - Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 mb-6 leading-relaxed max-w-xl font-medium"
              >
                Track critical equipment, inventory, and operations in real time across hospitals and healthcare facilities.
              </motion.p>

              {/* Points / Meta */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs md:text-sm text-primary mb-10 font-bold tracking-[0.15em] uppercase border-l-2 border-primary pl-4"
              >
                Real-Time Visibility • Improved Patient Care • Operational Efficiency
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
                alt="Healthcare Infrastructure"
                className="w-full h-full object-cover"
              />
              {/* Subtle accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CHALLENGES SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] uppercase">
              Challenges in Healthcare Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Monitor,
                num: "01",
                title: "Critical Equipment Visibility Gaps",
                desc: "Medical devices and equipment are difficult to locate quickly when needed.",
              },
              {
                icon: Activity,
                num: "02",
                title: "Manual Tracking Processes",
                desc: "Time-consuming inventory checks reduce staff efficiency.",
              },
              {
                icon: Network,
                num: "03",
                title: "Operational Inefficiencies",
                desc: "Limited visibility impacts workflow and patient care.",
              },
              {
                icon: ShieldCheck,
                num: "04",
                title: "Compliance & Reporting Requirements",
                desc: "Accurate tracking and audit trails are required across facilities.",
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-[#111111] uppercase">A Platform Approach to Healthcare Infrastructure</h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Delonti enables real-time tracking and operational intelligence using RFID sensing, IoT connectivity, and AI analytics.</p>
          </div>

          <HealthcareKeyFlow />

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">
              From tracking critical equipment to optimizing operations, Delonti provides a unified platform for healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN DO */}
      <InteractiveTabsSection images={IMAGES} />

      {/* 5. PLATFORM CAPABILITIES */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#111111] uppercase mb-4">
              Platform Capabilities for Healthcare
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="flex flex-row md:grid md:grid-cols-5 gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {[
              { icon: Radio, title: "Real-Time Asset Tracking", desc: "Instantly locate and track high-value medical devices and machinery." },
              { icon: Database, title: "Inventory Automation", desc: "Maintain real-time registers of supplies and medicine without manual audits." },
              { icon: Monitor, title: "Operational Dashboards", desc: "Unified dashboards providing facility-wide flow and metric visibility." },
              { icon: Sparkles, title: "AI-Based Insights", desc: "Forecast demand patterns and optimize clinical resource allocations." },
              { icon: ClipboardCheck, title: "Compliance Reporting", desc: "Secure, audit-ready tracking logs customized for healthcare compliance standards." }
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

      {/* 6. BENEFITS - Sticky Stacking Cards */}
      <StickyStackingSection />

      {/* 7. USE CASES / PROVEN DEPLOYMENTS */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-[#111111] uppercase">
              Proven Healthcare Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Medical Equipment Tracking", img: IMAGES.case_equip, href: "/resources/case-studies/medical-equipment-tracking" },
              { title: "Inventory Optimization", img: IMAGES.case_inventory, href: "/resources/case-studies/healthcare-inventory-optimization" },
              { title: "Hospital Operations Monitoring", img: IMAGES.case_operations, href: "/resources/case-studies/hospital-operations-monitoring" },
              { title: "Facility Management", img: IMAGES.case_facility, href: "/resources/case-studies/healthcare-facility-management" },
              { title: "Smart Patient Service Access Kiosk", img: "/images/government/gov_smart_kiosk_1778635998533.png", href: "/resources/case-studies/smart-patient-service-access-kiosk" }
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

      {/* 8. FINAL CTA */}
      <section className="relative py-16 lg:py-20 bg-[#111111] text-white overflow-hidden border-t border-[#2b2b4f]">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 max-w-3xl leading-tight uppercase">
            Transform Healthcare Operations with Delonti
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

      <Footer />
    </main>
  );
}

// --- Sub-component: Animated Responsive Key Flow ---
function HealthcareKeyFlow() {
  const steps = [
    { title: "RFID Tags", desc: "Affixed to equipment & inventory", icon: Radio },
    { title: "Sensors", desc: "Scan and detect signals", icon: Activity },
    { title: "Cloud Platform", desc: "Secure data processing hub", icon: Database },
    { title: "AI Insights", desc: "Predictive analytics & tracking", icon: Sparkles },
    { title: "Healthcare Dashboards", desc: "Real-time workflow screens", icon: LayoutDashboard },
  ];

  return (
    <div className="relative w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
        {/* Connection line for desktop */}
        <div className="absolute top-[35px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 hidden md:block z-0" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center mb-4 group hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-1">{step.title}</h4>
              <p className="text-xs text-slate-500 max-w-[150px]">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// --- Sub-component: Fixed UX Interactive Tabs ---
function InteractiveTabsSection({ images }: { images: any }) {
  const tabs = [
    {
      id: 1, num: "01",
      title: "Equipment Tracking",
      desc: "Track medical devices and critical equipment in real time. Maintain direct, visual maps of where critical lifesavers are located.",
      img: images.equipment, icon: Box
    },
    {
      id: 2, num: "02",
      title: "Inventory Management",
      desc: "Maintain accurate inventory of supplies, medicines, and equipment. Avoid shortage bottlenecks or expensive manual audits.",
      img: images.inventory, icon: ClipboardCheck
    },
    {
      id: 3, num: "03",
      title: "Workflow Optimization",
      desc: "Improve operational efficiency and resource availability. Automate nurse alerts and dispatch to optimize workflow and patient care.",
      img: images.workflow, icon: Activity
    },
    {
      id: 4, num: "04",
      title: "Facility Monitoring",
      desc: "Track movement, assets, and occupancy across departments and facilities. Reduce response delays and improve security.",
      img: images.facility, icon: Monitor
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
              What Healthcare Organizations Can Do with Delonti
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
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                        {tab.desc}
                      </p>
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

// --- Sub-component: Elegant Outcomes Grid ---
function StickyStackingSection() {
  const cards = [
    { id: 1, icon: HeartPulse, title: "Improved Equipment Availability", text: "Ensure critical medical devices and equipment are always accessible and ready." },
    { id: 2, icon: TrendingUp, title: "Operational Efficiency", text: "Reduce manual inventory counts and searching delays for clinical personnel." },
    { id: 3, icon: ClipboardCheck, title: "Enhanced Patient Care", text: "Improve workflows, reducing time-to-treatment and optimizing outcomes." },
    { id: 4, icon: ShieldCheck, title: "Better Compliance", text: "Maintain accurate, audit-ready tracking logs and automated facility records." },
  ];

  return (
    <section className="bg-slate-50/50 py-16 lg:py-20 border-y border-slate-200 relative overflow-hidden">
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
            Outcomes for Healthcare Organizations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl"
          >
            Delivering measurable operational efficiency, patient care excellence, and audit readiness through our smart healthcare infrastructure.
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
                <div className="absolute top-6 right-8 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300 group-hover:text-logo/30 transition-colors duration-500">
                  Outcome 0{card.id}
                </div>

                <div className="relative flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                  <div className="flex h-14 w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-2xl border border-logo/10 bg-logo/5 text-logo shadow-xs transition-all duration-500 group-hover:scale-110 group-hover:bg-logo group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(0,89,171,0.4)]">
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7 transition-transform duration-500 group-hover:rotate-3" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-logo transition-colors duration-300 leading-snug pr-12 sm:pr-0">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-logo/40 to-logo w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
