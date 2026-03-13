import { CheckCircle2 } from "lucide-react";

interface BenefitsSectionProps {
    title?: string;
    heading?: string;
    benefits: string[];
    background?: 'white' | 'slate';
}

export default function BenefitsSection({
    title = "Impact",
    heading = "Strategic Benefits",
    benefits,
    background = 'white'
}: BenefitsSectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3 font-display">
                        {title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display">
                        {heading}
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-white/10">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary dark:text-slate-300 shrink-0 mt-0.5" />
                                <span className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
