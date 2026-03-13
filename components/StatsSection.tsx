interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

interface StatsSectionProps {
    stats: Stat[];
    background?: 'white' | 'slate';
}

export default function StatsSection({
    stats,
    background = 'slate'
}: StatsSectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-20 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-white/10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center px-4 transition-transform duration-500 hover:-translate-y-1">
                            <div className="flex items-baseline gap-1 text-primary dark:text-white mb-2">
                                <span className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tighter">
                                    {stat.value}
                                </span>
                                {stat.suffix && (
                                    <span className="text-2xl md:text-3xl font-bold">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>
                            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
