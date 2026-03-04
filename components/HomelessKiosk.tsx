import { Info, MapPin, Globe, ShieldCheck, HeartPulse, BarChart3 } from "lucide-react";

const features = [
    {
        title: "Easy Access to Critical Services",
        items: [
            { icon: <MapPin className="w-5 h-5" />, text: "Service Locator: Nearby shelters, food services, and medical care." },
            { icon: <Info className="w-5 h-5" />, text: "Real-Time Information: Up-to-date info on available beds and emergency assistance." },
            { icon: <Globe className="w-5 h-5" />, text: "Multilingual Support: Multiple language options for diverse backgrounds." },
            { icon: <BarChart3 className="w-5 h-5" />, text: "Self-Registration: Streamlined sign-up for accurate data and resource tracking." },
            { icon: <HeartPulse className="w-5 h-5" />, text: "Referral System: Instant referrals to local programs and healthcare." },
            { icon: <ShieldCheck className="w-5 h-5" />, text: "Privacy and Security: Designed to protect user data while ensuring safe access." }
        ]
    }
];

const howItWorks = [
    { step: "1", title: "Simple User Interface", description: "Easy-to-navigate touchscreen interface, accessible to all individuals regardless of tech experience." },
    { step: "2", title: "Connection to Services", description: "Instantly connect with shelters, food banks, medical facilities, legal aid, and job placement programs." },
    { step: "3", title: "Emergency Assistance", description: "Directly connect to emergency hotlines, healthcare providers, or crisis intervention services." },
    { step: "4", title: "Data and Reporting", description: "Centralized data system allows cities to track usage, service requests, and trends to improve planning." }
];

const benefits = [
    "Improved Resource Allocation: Identify service gaps and optimize distribution.",
    "Increased Access to Services: Access variety of services without visiting multiple locations.",
    "Cost-Effective Solution: Scalable, technology-driven solution without significant infrastructure investment.",
    "Enhanced Data Reporting: Monitor effectiveness and identify emerging trends."
];

export default function HomelessKiosk() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">
                        Specialized Solutions
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Homeless Kiosk Solution
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light">
                        Empowering cities and states to address homelessness through infrastructure, dignity, and access—not just charity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <h4 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-tight">What We Do</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Our Homeless Kiosk Solution offers a self-service, interactive platform designed to provide immediate access to resources for people experiencing homelessness. These kiosks provide essential information, support services, and digital tools to help individuals connect with shelters, healthcare, employment, and government services in real time.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="font-bold text-primary block mb-1">Our Mission</span>
                                <p className="text-sm text-slate-500">Improving lives by making vital resources more accessible and empowering individuals toward stability.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <span className="font-bold text-primary block mb-1">Our Vision</span>
                                <p className="text-sm text-slate-500">Supporting cities in creating an inclusive, responsive system that helps individuals regain independence.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features[0].items.map((item, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="text-primary mb-3">{item.icon}</div>
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h4 className="text-center text-2xl font-black mb-12 text-slate-900 dark:text-white uppercase tracking-wider">How It Works</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {howItWorks.map((item, index) => (
                            <div key={index} className="relative text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6 shadow-lg">
                                    {item.step}
                                </div>
                                <h5 className="font-bold text-lg mb-3 dark:text-white">{item.title}</h5>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                                {index < howItWorks.length - 1 && (
                                    <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-slate-200 dark:bg-slate-700" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary rounded-3xl p-12 text-white mb-20">
                    <h4 className="text-2xl font-black mb-8 uppercase tracking-widest text-center">Benefits for Cities & States</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4 items-start bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <ShieldCheck className="w-6 h-6 shrink-0" />
                                <p className="font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <h4 className="text-2xl font-black mb-8 text-slate-900 dark:text-white uppercase tracking-wider">Industries We Serve</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "City & State Governments", desc: "Developing cost-effective, scalable, and impactful solutions." },
                                { title: "Nonprofits & Organizations", desc: "Collaborating to deliver resources directly to people in need." },
                                { title: "Healthcare Providers", desc: "Facilitating access to mental health and recovery programs." },
                                { title: "Emergency Response Teams", desc: "Connecting people in crisis with rapid intervention." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl">
                                    <h5 className="font-bold text-primary mb-2">{item.title}</h5>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black mb-8 text-slate-900 dark:text-white uppercase tracking-wider">Testimonials</h4>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-l-4 border-primary italic text-slate-600 dark:text-slate-400">
                            "The Homeless Kiosk Solution has been transformative. With real-time access to services, people are receiving help faster, and our data reporting has significantly improved."
                            <footer className="mt-4 not-italic font-bold text-slate-900 dark:text-white text-sm">— [Customer Name], [City or State]</footer>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <h4 className="text-center text-2xl font-black mb-12 text-slate-900 dark:text-white uppercase tracking-wider">Kiosk FAQ</h4>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            { q: "How do the kiosks work?", a: "The kiosks are touch-screen systems where users can access critical information, locate nearby resources, and register for services." },
                            { q: "Can the kiosks be installed in multiple locations?", a: "Yes, they can be deployed in high-traffic areas such as shelters, public libraries, and bus stations to maximize accessibility." },
                            { q: "What type of data is collected by the kiosks?", a: "The kiosks collect anonymous usage data to help cities and states improve service delivery and resource planning." }
                        ].map((faq, i) => (
                            <div key={i} className="pb-6 border-b border-slate-100 dark:border-slate-800">
                                <h5 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h5>
                                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center bg-slate-900 dark:bg-white rounded-3xl p-16">
                    <h4 className="text-3xl md:text-4xl font-black text-white dark:text-slate-900 mb-6 uppercase">Ready to Empower Your City or State?</h4>
                    <p className="text-slate-400 dark:text-slate-500 mb-10 max-w-2xl mx-auto">
                        Join the growing network of cities and states transforming homelessness response with technology.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all">
                            Schedule a Demo
                        </button>
                        <button className="bg-white/10 dark:bg-slate-900/10 text-white dark:text-slate-900 border border-white/20 dark:border-slate-900/20 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
