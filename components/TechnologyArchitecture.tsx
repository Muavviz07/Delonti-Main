interface ArchitectureLayer {
    name: string;
    description: string;
    icon?: React.ReactNode;
}

interface TechnologyArchitectureProps {
    title?: string;
    heading?: string;
    layers: ArchitectureLayer[];
    background?: 'white' | 'slate';
}

export default function TechnologyArchitecture({
    title = "Architecture",
    heading = "System Architecture Layers",
    layers,
    background = 'slate'
}: TechnologyArchitectureProps) {
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

                <div className="max-w-4xl mx-auto relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                    <div className="space-y-6 relative">
                        {layers.map((layer, idx) => (
                            <div
                                key={idx}
                                className="relative flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md group"
                            >
                                {/* Node Dot (Desktop) */}
                                <div className="hidden md:flex absolute -left-[2.1rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-100 dark:border-slate-900 shadow-sm" />

                                <div className="w-16 h-16 shrink-0 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/10 flex items-center justify-center text-primary dark:text-slate-300 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                                    {layer.icon || <span className="text-xl font-bold">{idx + 1}</span>}
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {layer.name}
                                    </h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-sm md:text-base">
                                        {layer.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
