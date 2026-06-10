import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Enterprise RFID, IoT & Cybersecurity Solutions | Delonti",
  description: "Delonti delivers advanced RFID tracking, IoT sensor networks, and enterprise-grade cybersecurity solutions to power intelligent operations and visibility.",
};

import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import CoreOfferings from "@/components/CoreOfferings";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ClientsSection from "@/components/ClientsSection";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CTASection from "@/components/CTASection";
import Industries from "@/components/Industries";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <WhoWeServe />
        <CTASection />
        {/* <CoreOfferings /> */}
        {/* <Solutions /> */}
        {/* <Services /> */}
        <About />
        <Industries />
        {/* <FAQ /> */}
        <ClientsSection />
        <HomeContact />
      </main>
      <Footer />
      {/* <Chatbot /> */}
    </>
  );
}