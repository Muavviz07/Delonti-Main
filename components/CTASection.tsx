import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function CTASection({
    heading = "Ready to Transform Your Infrastructure?",
    description = "Connect with our engineering experts to design a scalable, secure, and resilient technology foundation tailored to your enterprise requirements.",
    buttonText = "Schedule a Consultation",
    buttonHref = "/contact"
}: CTASectionProps) {
    return (
        <section className="relative py-24 overflow-hidden bg-primary border-t border-slate-200 dark:border-white/5">
            {/* Dynamic Grid Background overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight leading-tight">
                    {heading}
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-3xl mx-auto">
                    {description}
                </p>

                <Link
                    href={buttonHref}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                >
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
