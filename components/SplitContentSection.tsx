import Image from 'next/image';

interface SplitContentSectionProps {
    title?: string;
    heading: string;
    description: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    background?: 'white' | 'slate';
    listItems?: string[];
}

export default function SplitContentSection({
    title,
    heading,
    description,
    imageSrc,
    imageAlt,
    imagePosition = 'right',
    background = 'white',
    listItems
}: SplitContentSectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col gap-12 lg:gap-20 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        {title && (
                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-2 font-display">
                                {title}
                            </h2>
                        )}
                        <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display leading-tight">
                            {heading}
                        </h3>
                        <div className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            {description}
                        </div>

                        {listItems && listItems.length > 0 && (
                            <ul className="space-y-4 pt-4">
                                {listItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Visual Content */}
                    <div className="flex-1 w-full">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 group">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-overlay" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
