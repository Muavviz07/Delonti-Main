interface Step {
    title: string;
    description: string;
}

interface ImplementationStepsProps {
    title?: string;
    heading?: string;
    steps: Step[];
    background?: 'white' | 'slate';
}

export default function ImplementationSteps({
    title = "Process",
    heading = "Implementation Roadmap",
    steps,
    background = 'slate'
}: ImplementationStepsProps) {
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

                <div className="relative max-w-5xl mx-auto">
                    {/* Global timeline line */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group">

                                {/* Node for Desktop */}
                                <div className="hidden lg:flex absolute top-[4.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-100 dark:border-slate-900 shadow-sm z-10 transition-transform duration-500 group-hover:scale-150" />

                                {/* Mobile/Tablet Number Context */}
                                <div className="lg:hidden w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-display text-xl mb-4 border border-primary/20">
                                    {idx + 1}
                                </div>

                                <div className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm mt-0 lg:mt-24 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2">
                                    <div className="text-primary/40 font-black text-6xl absolute top-4 right-4 opacity-20 pointer-events-none select-none font-display">
                                        0{idx + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light relative z-10">
                                        {step.description}
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
