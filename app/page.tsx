import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import CoreOfferings from "@/components/CoreOfferings";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ClientsSection from "@/components/ClientsSection"; // Import the component
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <WhoWeServe />
        <CoreOfferings />
        <Solutions />
        {/* <Services /> */}
        <About />
        {/* <FAQ /> */}
        <ClientsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}