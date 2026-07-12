import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import { CheckCircle2 } from "lucide-react";

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-slate-900 text-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-black mb-6 uppercase">Our Solutions</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            Comprehensive GPS and RFID integration tailored for maximum operational efficiency and security across all industries.
                        </p>
                    </div>
                </section>

                <Services />
                
                <section className="py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 uppercase">Why Choose Our Technology?</h2>
                                <div className="space-y-4">
                                    {[
                                        "Unified Platform: Manage fleet, personnel, and assets in one place.",
                                        "Real-Time Accuracy: Industry-leading GPS and RFID precision.",
                                        "Scalable Infrastructure: Solutions that grow with your organization.",
                                        "Secure Data: Enterprise-grade encryption and compliance."
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
                                <h3 className="text-xl font-black text-primary mb-4 uppercase">Implementation Process</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                                    Our team works closely with your stakeholders to ensure a seamless integration of our GPS and RFID solutions into your existing workflows.
                                </p>
                                <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-all">
                                    Request a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Solutions />
            </main>
            <Footer />
        </>
    );
}
