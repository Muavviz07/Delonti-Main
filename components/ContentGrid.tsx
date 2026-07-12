import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface ContentItem {
    title: string;
    description: string;
    date?: string;
    category?: string;
    image?: string;
    href?: string;
}

interface ContentGridProps {
    title?: string;
    heading?: string;
    items: ContentItem[];
    background?: 'white' | 'slate';
    columns?: 2 | 3 | 4;
}

export default function ContentGrid({
    title = "Resources",
    heading = "Latest Insights",
    items,
    background = 'white',
    columns = 3
}: ContentGridProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    const gridClass = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-2 lg:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4"
    }[columns];

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

                <div className={`grid grid-cols-1 ${gridClass} gap-8`}>
                    {items.map((item, idx) => {
                        const content = (
                            <>
                                {item.image && (
                                    <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className={`p-8 flex flex-col flex-1 ${!item.image ? 'rounded-2xl' : ''}`}>
                                    <div className="flex items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                        {item.category && <span className="text-primary">{item.category}</span>}
                                        {item.category && item.date && <span>•</span>}
                                        {item.date && <span>{item.date}</span>}
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors flex-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6 line-clamp-3">
                                        {item.description}
                                    </p>

                                    {item.href && (
                                        <div className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mt-auto group-hover:text-primary transition-colors">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    )}
                                </div>
                            </>
                        );

                        const cardClasses = "group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

                        if (item.href) {
                            return <Link href={item.href} key={idx} className={cardClasses}>{content}</Link>;
                        }

                        return <div key={idx} className={cardClasses}>{content}</div>;
                    })}
                </div>

            </div>
        </section>
    );
}
