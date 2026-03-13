import { Truck, Users, Package, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Fleet Management",
        subtitle: "Efficient Fleet Tracking for Maximum Productivity with GPS & RFID",
        description: "Gain full visibility of your fleet's performance, fuel usage, maintenance needs, and driver behavior. Our advanced GPS and RFID integration helps ensure timely deliveries, reduce costs, and boost productivity.",
        icon: <Truck className="w-12 h-12 text-primary" />,
        features: [
            "Real-Time GPS Tracking: Track precise location of every vehicle.",
            "RFID for Asset/Vehicle Tracking: Automate entry/exit monitoring.",
            "Route Optimization: Reduce fuel consumption and delivery times.",
            "Driver Behavior Monitoring: Monitor speed, idling, and braking patterns.",
            "Maintenance Management: Schedule maintenance automatically via RFID."
        ],
        benefits: [
            "Enhanced Fleet Visibility",
            "Improved Operational Efficiency",
            "Lower Operational Costs"
        ],
        cta: "Learn More About Fleet Management"
    },
    {
        title: "Personnel Tracking",
        subtitle: "Track Your Workforce in Real-Time with GPS & RFID",
        description: "Monitor employee movements, track work hours, and ensure safety—all in real time. From construction sites to delivery teams, improve coordination and accountability.",
        icon: <Users className="w-12 h-12 text-federal-green" />,
        features: [
            "GPS-Based Location Tracking: Real-time resource deployment.",
            "RFID for Check-ins/Check-outs: Automate attendance and payroll.",
            "Geofencing with GPS: Receive alerts for defined zone entries/exits.",
            "Task & Job Assignment: Monitor employees on assignment.",
            "Safety Alerts: Immediate notifications for emergencies."
        ],
        benefits: [
            "Enhanced Employee Accountability",
            "Streamlined Operations",
            "Improved Safety and Compliance"
        ],
        cta: "Discover Personnel Tracking"
    },
    {
        title: "Asset Tracking",
        subtitle: "Keep Your Assets Secure with GPS & RFID",
        description: "Track and manage valuable assets in real time. Whether machinery, vehicles, or high-value inventory, maintain control, optimize usage, and prevent loss.",
        icon: <Package className="w-12 h-12 text-enterprise-gray" />,
        features: [
            "GPS Tracking for Asset Location: Unparalleled visibility and theft prevention.",
            "RFID for Automated Asset Management: Seamless tracking without manual input.",
            "Condition Monitoring: Track asset conditions via RFID tags.",
            "Real-Time Alerts: Notifications for unexpected movements.",
            "Inventory Management: Accurate stock levels and movement tracking."
        ],
        benefits: [
            "Reduced Losses & Theft",
            "Prolonged Asset Lifespan",
            "Optimized Inventory Management"
        ],
        cta: "Protect Your Assets"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-slate-100 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 font-display">
                        Our Solutions
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white font-display">
                        Specialized Management Systems
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="inline-block p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                                    {service.title}
                                </h4>
                                <p className="text-lg font-bold text-primary italic">
                                    {service.subtitle}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <h5 className="font-bold text-slate-900 dark:text-white uppercase text-sm tracking-wider">
                                        Key Features:
                                    </h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all">
                                        {service.cta}
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 w-full h-[400px] bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center p-12">
                                <div className="space-y-6 w-full">
                                    <h5 className="text-center font-black text-xl mb-8 uppercase tracking-widest text-slate-400">Benefits</h5>
                                    {service.benefits.map((benefit, bIndex) => (
                                        <div key={bIndex} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 transition-transform hover:scale-105">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {bIndex + 1}
                                            </div>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
