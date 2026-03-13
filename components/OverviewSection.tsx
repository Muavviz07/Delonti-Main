interface OverviewSectionProps {
    title?: string;
    heading: string;
    description: React.ReactNode;
    align?: 'center' | 'left';
    background?: 'white' | 'slate';
}

export default function OverviewSection({
    title = "Overview",
    heading,
    description,
    align = 'center',
    background = 'white'
}: OverviewSectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ${align === 'center' ? 'text-center' : ''}`}>
                <div className={`max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3 font-display">
                        {title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display mb-8">
                        {heading}
                    </h3>
                    <div className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed space-y-6">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    );
}
