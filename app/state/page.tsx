import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomelessKiosk from "@/components/HomelessKiosk";
import { Nfc, Cpu, ShieldAlert, Code } from "lucide-react";

export default function StateSolutions() {
    const offerings = [
        {
            title: "RFID Solutions",
            description: "Asset tracking (vehicles, inventory, personnel) and warehouse/logistics integration.",
            icon: <Nfc className="w-8 h-8" />
        },
        {
            title: "IoT Solutions",
            description: "Smart cities, environmental monitoring, and sensors for utilities/infrastructure.",
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: "Cybersecurity",
            description: "Network assessments, compliance (CJIS, NIST, etc.), and penetration testing.",
            icon: <ShieldAlert className="w-8 h-8" />
        },
        {
            title: "IT Project Development",
            description: "Custom portals, cloud migration, GIS-integrated platforms, and Agile pipelines.",
            icon: <Code className="w-8 h-8" />
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section className="bg-primary text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-black mb-6 uppercase">State Solutions</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            Empowering state agencies, municipalities, and education systems with innovative, scalable technology.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {offerings.map((offering, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="text-primary mb-6">{offering.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 dark:text-white">{offering.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{offering.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <HomelessKiosk />
            </main>
            <Footer />
        </>
    );
}
