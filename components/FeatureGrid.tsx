import { LucideIcon } from "lucide-react";

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface FeatureGridProps {
    title?: string;
    heading?: string;
    features: Feature[];
    columns?: 3 | 4;
    background?: 'white' | 'slate';
}

export default function FeatureGrid({
    title = "Core Capabilities",
    heading = "Transforming Infrastructure",
    features,
    columns = 4,
    background = 'slate'
}: FeatureGridProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    const gridClass = columns === 3
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "md:grid-cols-2 lg:grid-cols-4";

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

                <div className={`grid grid-cols-1 ${gridClass} gap-6 lg:gap-8`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-950 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30"
                        >
                            <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/10 flex items-center justify-center text-primary dark:text-slate-300 mb-6 transition-transform duration-500 group-hover:scale-110">
                                {feature.icon}
                            </div>

                            <h4 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white tracking-wide">
                                {feature.title}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
