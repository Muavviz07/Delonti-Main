import { Nfc, Cpu, ShieldAlert, Users } from "lucide-react";

export default function CoreOfferings() {
    const offerings = [
        {
            title: "RFID Integration",
            description: "Asset tracking and inventory lifecycle management.",
            icon: <Nfc className="w-8 h-8" />,
        },
        {
            title: "Internet of Things (IoT)",
            description: "Connected ecosystem and sensory data architecture.",
            icon: <Cpu className="w-8 h-8" />,
        },
        {
            title: "Cybersecurity",
            description: "Advanced threat protection and NIST compliance.",
            icon: <ShieldAlert className="w-8 h-8" />,
        },
        {
            title: "Resource Augmentation",
            description: "Specialized technical staffing for mission-critical roles.",
            icon: <Users className="w-8 h-8" />,
        }
    ];

    return (
        <section className="py-20 border-y border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-xs font-black uppercase tracking-[0.2em] text-primary mb-16">
                    Core Offerings
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {offerings.map((offering, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                {offering.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{offering.title}</h4>
                            <p className="text-sm text-slate-500 max-w-[200px]">
                                {offering.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
