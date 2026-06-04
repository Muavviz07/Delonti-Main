"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  ShieldCheck,
  Lock,
  ClipboardCheck,
  Lightbulb,
  Radio,
  Database,
  HardHat,
  Building,
  Monitor,
  Cpu,
  ChevronRight,
  CheckCircle2,
  Landmark,
  GraduationCap,
  Heart,
  Factory,
  Truck,
  ShieldAlert,
  Brain,
  Network
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const capabilities = [
    {
      title: "Asset Tracking",
      description: "Track critical assets and equipment in real time.",
      href: "/tech/rfid/asset",
      icon: Radio,
      themeColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/5 dark:bg-blue-500/10",
      borderColor: "border-blue-100 dark:border-blue-900/30",
      glowColor: "group-hover:shadow-blue-500/10 group-hover:border-blue-500/30"
    },
    {
      title: "Inventory Intelligence",
      description: "Automate inventory visibility and management.",
      href: "/private/smb/asset-tracking",
      icon: Database,
      themeColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/5 dark:bg-purple-500/10",
      borderColor: "border-purple-100 dark:border-purple-900/30",
      glowColor: "group-hover:shadow-purple-500/10 group-hover:border-purple-500/30"
    },
    {
      title: "Workforce Safety",
      description: "Improve workforce visibility and operational safety.",
      href: "/federal/workforce",
      icon: HardHat,
      themeColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-500/5 dark:bg-orange-500/10",
      borderColor: "border-orange-100 dark:border-orange-900/30",
      glowColor: "group-hover:shadow-orange-500/10 group-hover:border-orange-500/30"
    },
    {
      title: "Facility Intelligence",
      description: "Monitor buildings, infrastructure, and operations.",
      href: "/private/enterprise/industrial-iot",
      icon: Building,
      themeColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/5 dark:bg-emerald-500/10",
      borderColor: "border-emerald-100 dark:border-emerald-900/30",
      glowColor: "group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30"
    },
    {
      title: "Smart Public Services",
      description: "Connected kiosks and digital access solutions.",
      href: "/resources/case-studies/public-service-access-platform",
      icon: Monitor,
      themeColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-500/5 dark:bg-indigo-500/10",
      borderColor: "border-indigo-100 dark:border-indigo-900/30",
      glowColor: "group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30"
    },
    {
      title: "Data & AI Insights",
      description: "Transform operational data into actionable intelligence.",
      href: "/private/enterprise/data-platforms",
      icon: Cpu,
      themeColor: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-500/5 dark:bg-cyan-500/10",
      borderColor: "border-cyan-100 dark:border-cyan-900/30",
      glowColor: "group-hover:shadow-cyan-500/10 group-hover:border-cyan-500/30"
    }
  ];

  const industries = [
    {
      name: "Government",
      href: "/industries/government",
      icon: Landmark,
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-500/5 dark:bg-blue-500/10"
    },
    {
      name: "Education",
      href: "/industries/education",
      icon: GraduationCap,
      color: "text-violet-500 dark:text-violet-400",
      bgColor: "bg-violet-500/5 dark:bg-violet-500/10"
    },
    {
      name: "Healthcare",
      href: "/industries/healthcare",
      icon: Heart,
      color: "text-rose-500 dark:text-rose-450",
      bgColor: "bg-rose-500/5 dark:bg-rose-500/10"
    },
    {
      name: "Manufacturing",
      href: "/private/enterprise/industrial-iot",
      icon: Factory,
      color: "text-amber-600 dark:text-amber-450",
      bgColor: "bg-amber-500/5 dark:bg-amber-500/10"
    },
    {
      name: "Supply Chain",
      href: "/industries/supply-chain",
      icon: Truck,
      color: "text-teal-650 dark:text-teal-400",
      bgColor: "bg-teal-500/5 dark:bg-teal-500/10"
    },
    {
      name: "Public Safety",
      href: "/industries/public-safety",
      icon: ShieldAlert,
      color: "text-red-500 dark:text-red-400",
      bgColor: "bg-red-500/5 dark:bg-red-500/10"
    }
  ];

  return (
    <main className="w-full bg-[#FAFAFA] dark:bg-background-dark font-sans selection:bg-[#0059ab] selection:text-white relative">
      <Header />

      {/* SECTION 1 – HERO (Split Layout like Industry Pages) */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80 pt-5 lg:pt-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-logo dark:text-blue-400 bg-logo/5 dark:bg-blue-500/5 border border-logo/10 dark:border-blue-500/10 rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-logo dark:bg-blue-400" />
                About Delonti
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-slate-900 dark:text-white uppercase"
              >
                Transforming Physical Infrastructure <br />
                into <span className="text-logo dark:text-blue-400">Operational Intelligence</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl font-medium"
              >
                Delonti helps public and private sector organizations gain real-time visibility across assets, infrastructure, inventory, workforce, and operations through an RFID + AI-powered platform.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                {/* Request Demo */}
                <Link
                  href="/contact"
                  className="group relative bg-logo hover:bg-logo/90 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden w-full sm:w-60 whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                  <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>

                {/* Explore Solutions */}
                <Link
                  href="#deliver"
                  className="group relative bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 shadow-xs overflow-hidden w-full sm:w-60 whitespace-nowrap"
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
              className="relative aspect-square lg:aspect-[1.05/1] lg:max-h-[700px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <img
                src="/images/about_hero.png"
                alt="About Delonti Operational Intelligence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-logo/10 to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 – WHO WE ARE */}
      <section className="py-20 bg-slate-50/50 dark:bg-background-dark-alt border-b border-slate-100 dark:border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Title */}
            <div className="lg:col-span-5">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-4 block">
                ABOUT DELONTI
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-logo dark:bg-blue-500 rounded" />
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-650 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Founded in 1998, Delonti is a technology company focused on helping organizations modernize operations through real-time visibility and operational intelligence.
              </p>
              <p>
                Our RFID + AI platform connects physical assets, facilities, infrastructure, and operations to digital intelligence, enabling organizations to make faster decisions, improve efficiency, and enhance service delivery.
              </p>
              <p>
                We serve government agencies, educational institutions, healthcare organizations, manufacturers, logistics providers, and enterprises across the United States.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 – MISSION & VISION */}
      <section className="py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* SECTION 3 – OUR MISSION */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-background-dark-alt border border-slate-100 dark:border-slate-800/50 shadow-xs flex flex-col items-start text-left"
            >
              <div className="p-4 bg-logo/10 dark:bg-blue-500/10 text-logo dark:text-blue-400 rounded-2xl mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">
                Our Mission
              </h3>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium">
                To empower organizations with real-time visibility, operational intelligence, and innovative technologies that improve efficiency, accountability, and service delivery.
              </p>
            </motion.div>

            {/* SECTION 4 – OUR VISION */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-background-dark-alt border border-slate-100 dark:border-slate-800/50 shadow-xs flex flex-col items-start text-left"
            >
              <div className="p-4 bg-[#0059ab]/10 text-logo dark:text-blue-400 rounded-2xl mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">
                Our Vision
              </h3>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium">
                To become a trusted leader in intelligent infrastructure solutions by connecting physical operations to digital intelligence through secure, scalable, and innovative technologies.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 – OUR VALUES */}
      <section className="py-20 bg-slate-50/50 dark:bg-background-dark-alt border-b border-slate-100 dark:border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-4 block">
              OUR CORE PRINCIPLES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              Our Values
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">
              We guide every partnership, deployment, and product upgrade with a strict commitment to values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Trust */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 bg-white dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-start transition-all duration-300"
            >
              <div className="p-3 bg-logo/10 text-logo dark:bg-blue-500/10 dark:text-blue-400 rounded-xl mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Trust
              </h4>
              <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs md:text-sm font-medium">
                Building lasting relationships through transparency and reliability.
              </p>
            </motion.div>

            {/* Security */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 bg-white dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-start transition-all duration-300"
            >
              <div className="p-3 bg-red-500/10 text-red-655 dark:text-red-400 rounded-xl mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Security
              </h4>
              <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs md:text-sm font-medium">
                Protecting systems, infrastructure, and information.
              </p>
            </motion.div>

            {/* Accountability */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 bg-white dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-start transition-all duration-300"
            >
              <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl mb-6">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Accountability
              </h4>
              <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs md:text-sm font-medium">
                Delivering measurable outcomes and operational excellence.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 bg-white dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col items-start transition-all duration-300"
            >
              <div className="p-3 bg-blue-500/10 text-logo dark:bg-blue-500/10 dark:text-blue-400 rounded-xl mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Innovation
              </h4>
              <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs md:text-sm font-medium">
                Creating practical solutions that solve real-world challenges.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6 – WHAT WE DELIVER (Platform Capabilities) */}
      <section id="deliver" className="py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-4 block">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              Platform Capabilities
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">
              Hover over each capability to explore detailed technical frameworks and real-time operational integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <Link key={idx} href={cap.href} className="group block">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`relative p-8 rounded-2xl bg-white dark:bg-[#1a1a24] border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-logo/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between h-full group`}
                  >
                    <div>
                      {/* Icon */}
                      <div className={`w-12 h-12 flex items-center justify-center ${cap.bgColor} ${cap.themeColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-logo dark:group-hover:text-blue-455 transition-colors">
                        {cap.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-logo dark:text-blue-400 mt-6 group-hover:translate-x-1 transition-all duration-300">
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 – INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-50/50 dark:bg-background-dark-alt border-b border-slate-100 dark:border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-4 block">
              SECTORS WE TRANSFORM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
              Industries We Serve
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">
              Click on an industry card to explore specialized tracking platforms, automated systems, and operational results.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch border border-slate-200/80 dark:border-slate-800/85 rounded-2xl bg-white dark:bg-background-dark overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-slate-800/85 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            {industries.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <Link key={idx} href={ind.href} className="group block flex-1">
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
                    className="p-6 md:p-8 flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-6 transition-all duration-300 h-full justify-start md:justify-center"
                  >
                    {/* Icon wrapper */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ${ind.bgColor} ${ind.color} rounded-xl md:rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    {/* Text layout */}
                    <div className="flex-1 md:flex-none flex flex-col items-start md:items-center justify-center">
                      <span className="font-bold text-slate-900 dark:text-white group-hover:text-logo dark:group-hover:text-blue-455 transition-colors text-sm md:text-base uppercase tracking-wide">
                        {ind.name}
                      </span>
                      
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-logo dark:group-hover:text-blue-400 transition-colors mt-2 flex items-center gap-1">
                        Solutions <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 – WHY DELONTI */}
      <section className="py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Browser Console Mockup */}
            <div className="lg:col-span-6 w-full">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark"
              >
                {/* Browser Console Mock Header */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-150 dark:border-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <div className="ml-4 text-[9px] text-slate-400 font-bold tracking-widest uppercase font-mono selection:bg-none">
                    Delonti Operational Console
                  </div>
                </div>
                {/* Screenshot */}
                <img
                  src="/images/government/gov_hero_control_1778635972305.png"
                  alt="Delonti Enterprise AI Dashboard"
                  className="w-full object-cover aspect-[4/3] object-top"
                />
              </motion.div>
            </div>

            {/* Right Side - 2x2 Grid of Advantage Cards */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-logo dark:text-blue-400 mb-4 block">
                THE DELONTI ADVANTAGE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
                Why Organizations Choose Delonti
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Feature 1 */}
                <div className="p-6 bg-slate-50/50 dark:bg-background-dark-alt/50 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl flex flex-col items-start hover:border-logo/30 dark:hover:border-blue-500/30 hover:shadow-xs transition-all duration-300">
                  <div className="p-3 bg-logo/10 text-logo dark:bg-blue-500/10 dark:text-blue-450 rounded-xl mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    RFID + AI Platform
                  </h4>
                  <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                    One platform. Multiple use cases.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 bg-slate-50/50 dark:bg-background-dark-alt/50 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl flex flex-col items-start hover:border-logo/30 dark:hover:border-blue-500/30 hover:shadow-xs transition-all duration-300">
                  <div className="p-3 bg-indigo-500/10 text-indigo-650 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-xl mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Real-Time Visibility
                  </h4>
                  <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                    Know where assets and operations stand at any moment.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 bg-slate-50/50 dark:bg-background-dark-alt/50 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl flex flex-col items-start hover:border-logo/30 dark:hover:border-blue-500/30 hover:shadow-xs transition-all duration-300">
                  <div className="p-3 bg-purple-500/10 text-purple-650 dark:bg-purple-500/10 dark:text-purple-400 rounded-xl mb-4">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Operational Intelligence
                  </h4>
                  <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                    Transform data into actionable insights.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="p-6 bg-slate-50/50 dark:bg-background-dark-alt/50 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl flex flex-col items-start hover:border-logo/30 dark:hover:border-blue-500/30 hover:shadow-xs transition-all duration-300">
                  <div className="p-3 bg-amber-500/10 text-amber-650 dark:bg-amber-500/10 dark:text-amber-400 rounded-xl mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Scalable Architecture
                  </h4>
                  <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                    Deploy across a single site or enterprise-wide.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 – FEATURED INNOVATION */}
      <section className="py-20 bg-background-dark dark:bg-[#0c0c0f] text-white border-b border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-16 rounded-3xl bg-slate-900/40 dark:bg-background-dark-alt/40 border border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-xs relative overflow-hidden">
            
            {/* Ambient gradients */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-logo/20 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              
              {/* Info block */}
              <div className="flex flex-col items-start">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-blue-400 mb-4 block">
                  FEATURED INNOVATION
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                  Smart Public Service <br className="hidden sm:inline" />
                  Access Platform
                </h2>
                <p className="text-slate-400 font-medium text-sm md:text-base mb-8 leading-relaxed">
                  Delonti's Smart Kiosk solution helps governments connect communities to critical services through connected infrastructure and real-time information.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {[
                    "Shelter access",
                    "Healthcare referrals",
                    "Government services",
                    "Community resources"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-200 font-semibold text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src="/images/government/gov_smart_service_access.png"
                  alt="Delonti Smart Kiosk Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/30 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – CTA */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0A1A2A] dark:bg-slate-900/60 p-8 md:p-16 text-center border border-slate-800 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(10,26,42,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            {/* Ambient gradients */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-logo/15 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Ready to Modernize Operations?
              </h2>
              <p className="text-slate-300 dark:text-slate-300 text-sm md:text-base font-medium mb-10 max-w-2xl leading-relaxed">
                Discover how Delonti can help your organization gain real-time visibility and operational intelligence.
              </p>

              <Link
                href="/contact"
                className="group relative bg-white hover:bg-slate-100 text-logo px-8 md:px-12 py-4 rounded-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-wider text-xs md:text-sm">Request Demo</span>
                <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
