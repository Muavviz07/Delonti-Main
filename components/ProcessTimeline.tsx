export interface TimelineNode {
    title: string;
    description: string;
    number?: string | number;
}

interface ProcessTimelineProps {
    title?: string;
    heading?: string;
    description?: string;
    nodes: TimelineNode[];
    background?: 'white' | 'slate';
}

export default function ProcessTimeline({
    title = "Methodology",
    heading = "Our Process",
    description,
    nodes,
    background = 'slate'
}: ProcessTimelineProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3 font-display">
                        {title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display mb-6">
                        {heading}
                    </h3>
                    {description && (
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="max-w-4xl mx-auto relative">

                    {/* Vertical Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {nodes.map((node, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-white dark:bg-slate-950 border-4 border-primary flex items-center justify-center shadow-lg z-10">
                                        <span className="text-sm font-bold text-primary dark:text-slate-300">
                                            {node.number || idx + 1}
                                        </span>
                                    </div>

                                    {/* Content Container */}
                                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                                {node.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                                {node.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
