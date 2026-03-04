import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Nfc, Code, Database, Globe2 } from "lucide-react";

export default function FederalSolutions() {
    const offerings = [
        {
            title: "RFID Solutions",
            description: "Military asset tracking, secure facility tagging, and access control.",
            icon: <Nfc className="w-8 h-8" />
        },
        {
            title: "Cybersecurity Services",
            description: "FISMA/NIST compliance, Zero Trust architecture, and vulnerability assessments.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: "IT Development Services",
            description: "FedRAMP-compliant cloud solutions and custom enterprise tools.",
            icon: <Code className="w-8 h-8" />
        },
        {
            title: "Data Intelligence",
            description: "Enterprise data visualization dashboards and AI/ML pilot programs.",
            icon: <Database className="w-8 h-8" />
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section className="bg-federal-green text-white py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-24 opacity-10">
                        <Globe2 className="w-96 h-96" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-5xl font-black mb-6 uppercase">Federal Solutions</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            High-stakes technology for defense, national security, and federal agencies. Secure, compliant, and mission-ready.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-federal-green mb-4">
                                    Trusted Partner
                                </h2>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8">
                                    Partnering with Government for Lasting Impact
                                </h3>
                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                                    <p>
                                        At Delonti, we are proud to serve as trusted partners for government, state, and federal projects. With a proven track record of delivering innovative, efficient, and scalable solutions, we are committed to supporting public sector goals that make a meaningful difference.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4 items-start">
                                            <div className="bg-federal-green/10 p-2 rounded-lg text-federal-green shrink-0">
                                                <ShieldCheck className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="font-bold block text-slate-900 dark:text-white">Compliance & Regulation</span>
                                                <span className="text-sm">Navigating complex regulatory frameworks (FISMA, NIST, NIST SP 800-171) with precision.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="bg-federal-green/10 p-2 rounded-lg text-federal-green shrink-0">
                                                <Code className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="font-bold block text-slate-900 dark:text-white">Technology Integration</span>
                                                <span className="text-sm">Implementing advanced systems including cloud solutions, cybersecurity, and data management.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="bg-federal-green/10 p-2 rounded-lg text-federal-green shrink-0">
                                                <Globe2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="font-bold block text-slate-900 dark:text-white">Infrastructure & Community</span>
                                                <span className="text-sm">Planning and designing critical facilities and facilitating community outreach programs.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-12 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <h4 className="text-xl font-black mb-6 dark:text-white uppercase tracking-wider">Certifications & Compliance</h4>
                                <ul className="space-y-4 text-sm text-slate-500">
                                    <li className="pb-4 border-b border-slate-200 dark:border-slate-800">Adherence to all federal and state procurement guidelines.</li>
                                    <li className="pb-4 border-b border-slate-200 dark:border-slate-800">NIST 800-53 / FISMA Compliant Architectures.</li>
                                    <li className="pb-4 border-b border-slate-200 dark:border-slate-800">SAM Registered & GSA Schedule Ready.</li>
                                    <li>Proven expertise in Department of Defense (DoD) security protocols.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {offerings.map((offering, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="text-federal-green mb-6">{offering.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 dark:text-white">{offering.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{offering.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
