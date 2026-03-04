import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Nfc, Cpu, ShieldAlert, Code, Briefcase, Zap, Droplets, Thermometer, Factory } from "lucide-react";

export default function PrivateSectorSolutions() {
    const offerings = [
        {
            title: "RFID Solutions",
            description: "Inventory/supply chain management, retail, warehouse, and industrial integration.",
            icon: <Nfc className="w-8 h-8" />
        },
        {
            title: "IoT Solutions",
            description: "Smart manufacturing, environmental monitoring, and operational sensors.",
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: "Cybersecurity",
            description: "Risk audits, SOC-as-a-Service, endpoint detection, and incident response.",
            icon: <ShieldAlert className="w-8 h-8" />
        },
        {
            title: "IT Development",
            description: "End-to-end software development, QA automation, and cloud modernization.",
            icon: <Code className="w-8 h-8" />
        },
        {
            title: "Resource Augmentation",
            description: "Onshore/offshore staffing for devs, testers, PMs, and architects.",
            icon: <Briefcase className="w-8 h-8" />
        }
    ];

    const sustainability = [
        {
            title: "Energy Efficiency",
            icon: <Zap className="w-10 h-10 text-yellow-500" />,
            items: ["Comprehensive energy audits", "Solar/Wind renewable integration", "Advanced energy storage"]
        },
        {
            title: "Water Management",
            icon: <Droplets className="w-10 h-10 text-blue-500" />,
            items: ["Smart water monitoring systems", "Sustainable wastewater treatment", "Rainwater harvesting"]
        },
        {
            title: "HVAC & Refrigeration",
            icon: <Thermometer className="w-10 h-10 text-red-500" />,
            items: ["High-efficiency refrigeration", "Eco-friendly refrigerants", "Smart climate controls"]
        },
        {
            title: "Supply Chain",
            icon: <Factory className="w-10 h-10 text-green-500" />,
            items: ["Green logistics practices", "Carbon footprint reduction", "Sustainable sourcing"]
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section className="bg-enterprise-gray text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-black mb-6 uppercase">Private Sector Solutions</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            Driving digital transformation and operational excellence for global enterprises, logistics, and manufacturing.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offerings.map((offering, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="text-enterprise-gray mb-6">{offering.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 dark:text-white">{offering.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{offering.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 mb-4">
                                Sustainability
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                                Innovative Sustainability Solutions
                            </h3>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                                Driving sustainable change through energy, water management, and supply chain optimization.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {sustainability.map((item, index) => (
                                <div key={index} className="flex gap-6 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                                    <div className="shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h4>
                                        <ul className="space-y-2">
                                            {item.items.map((li, iIndex) => (
                                                <li key={iIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-green-600 rounded-3xl p-12 text-white text-center">
                            <h4 className="text-2xl font-black mb-4 uppercase">Why Choose Delonti for Sustainability?</h4>
                            <p className="max-w-3xl mx-auto opacity-90 leading-relaxed">
                                We integrate sustainability across energy, water, refrigeration, HVAC, and supply chains for comprehensive impact. Our clients have achieved up to 30% reductions in energy use and costs while meeting global benchmarks.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
