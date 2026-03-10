"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomelessKiosk from "@/components/HomelessKiosk";
import { Nfc, Cpu, ShieldAlert, Code, ArrowRight, Play } from "lucide-react"; // Updated Imports
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StateSolutions() {
    const offerings = [
        {
            title: "RFID Solutions",
            description: "Asset tracking (vehicles, inventory, personnel) and warehouse/logistics integration.",
            icon: <Nfc className="w-8 h-8" />,
            href: "/tech/rfid/asset"
        },
        {
            title: "IoT Solutions",
            description: "Smart cities, environmental monitoring, and sensors for utilities/infrastructure.",
            icon: <Cpu className="w-8 h-8" />,
            href: "/tech/iot/smart-infra"
        },
        {
            title: "Cybersecurity",
            description: "Network assessments, compliance (CJIS, NIST, etc.), and penetration testing.",
            icon: <ShieldAlert className="w-8 h-8" />,
            href: "/tech/cyber/zero-trust"
        },
        {
            title: "IT Project Development",
            description: "Custom portals, cloud migration, GIS-integrated platforms, and Agile pipelines.",
            icon: <Code className="w-8 h-8" />,
            href: "/tech/software/custom"
        }
    ];

    const videoShowcase = [
        {
            title: "Smart Traffic & Mobility",
            description: "AI-driven IoT sensors optimizing city-wide traffic flow, managing public transit routing, and reducing congestion in real-time.",
            // High-quality open-source placeholder videos
            videoUrl: "https://cdn.coverr.co/videos/coverr-driving-through-a-city-at-night-2631/1080p.mp4",
        },
        {
            title: "Automated Fleet Tracking",
            description: "Sub-second RFID integration for municipal vehicles, waste management fleets, and emergency responder dispatch.",
            videoUrl: "https://cdn.coverr.co/videos/coverr-traffic-on-a-highway-4482/1080p.mp4",
        },
        {
            title: "Secure Cloud Infrastructure",
            description: "CJIS and NIST compliant cloud environments designed specifically to protect sensitive state and citizen data architectures.",
            videoUrl: "https://cdn.coverr.co/videos/coverr-server-room-2560/1080p.mp4",
        }
    ];

    const stateFaqs = [
        {
            question: "How do your RFID solutions integrate with existing state legacy infrastructure?",
            answer: "We utilize an API-first, middleware architecture that acts as a bridge between our modern RFID sensors and your existing state databases (like SAP or Oracle). This allows for a seamless, phased rollout without requiring a massive overnight system replacement."
        },
        {
            question: "Are your cybersecurity services compliant with CJIS and NIST standards?",
            answer: "Absolutely. All of our public sector architectures are built from the ground up to map directly to NIST frameworks and maintain strict CJIS compliance for law enforcement and public safety applications."
        },
        {
            question: "Can your IoT sensors be deployed in remote municipalities with poor connectivity?",
            answer: "Yes. Our IoT infrastructure supports Edge Computing and utilizes Low-Power Wide-Area Networks (LPWAN) and cellular fallbacks, ensuring continuous data collection even in rural or connectivity-challenged zones."
        },
        {
            question: "What is the typical deployment timeline for a state-wide technology portal?",
            answer: "While timelines vary based on scope, our Agile development pipeline typically allows for an MVP (Minimum Viable Product) launch within 3 to 4 months, followed by iterative feature scaling."
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* HERO SECTION - Dark */}
                <section className="bg-primary text-white py-24">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wide">State Solutions</h1>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl font-light leading-relaxed">
                            Empowering state agencies, municipalities, and education systems with innovative, scalable, and highly secure technology infrastructures.
                        </p>
                    </div>
                </section>

                {/* OFFERINGS SECTION - Light Gray Background */}
                <section className="py-24 bg-gray-50 dark:bg-[#16161c]">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        
                        <div className="mb-16 text-center">
                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-300 mb-3">
                                Core Competencies
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide">
                                State & Local Technology Services
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {offerings.map((offering, index) => (
                                <div 
                                    key={index} 
                                    className="group flex flex-col items-center text-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full"
                                >
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-800/50 text-primary dark:text-slate-300 mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        {offering.icon}
                                    </div>
                                    <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        {offering.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[240px] mb-8 flex-grow leading-relaxed">
                                        {offering.description}
                                    </p>
                                    <Link 
                                        href={offering.href}
                                        className="mt-auto flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-gray-50 dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-transparent group-hover:border-primary"
                                    >
                                        Explore {offering.title.split(' ')[0]} 
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* VIDEO SHOWCASE SECTION - White Background - UPDATED WITH PLAY BUTTONS */}
                <section className="py-24 bg-white dark:bg-slate-900">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-300 mb-3">
                                Infrastructure in Action
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide">
                                Real-World Deployments
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {videoShowcase.map((vid, index) => (
                                <div key={index} className="group bg-gray-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
                                    {/* Video Container - Added relative and overflow-hidden */}
                                    <div className="relative w-full h-56 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                        <video 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        >
                                            <source src={vid.videoUrl} type="video/mp4" />
                                        </video>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                                            <div className="w-16 h-16 rounded-full bg-white/30 border border-white/50 backdrop-blur-sm flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/50">
                                                <Play className="w-8 h-8 fill-white ml-1" /> {/* ml-1 to visually center play arrow */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="p-8 relative">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-primary">
                                            {vid.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {vid.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOMELESS KIOSK SECTION - Handled by its own component, visually sits here */}
                <div className="bg-gray-50 dark:bg-[#16161c]">
                    <HomelessKiosk />
                </div>

                {/* STATE FAQS SECTION - White Background */}
                <section className="py-24 bg-white dark:bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-300 mb-3">
                                Knowledge Base
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide">
                                State FAQs
                            </h3>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {stateFaqs.map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-white/10 rounded-xl px-6"
                                >
                                    <AccordionTrigger suppressHydrationWarning className="text-left font-bold text-base md:text-lg text-slate-900 dark:text-white hover:no-underline hover:text-primary transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}