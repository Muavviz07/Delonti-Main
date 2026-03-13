import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CaseStudy {
    title: string;
    client: string;
    description: string;
    image: string;
    href?: string;
    metric?: string;
}

interface CaseStudySectionProps {
    title?: string;
    heading?: string;
    studies: CaseStudy[];
    background?: 'white' | 'slate';
}

export default function CaseStudySection({
    title = "Impact",
    heading = "Featured Case Studies",
    studies,
    background = 'slate'
}: CaseStudySectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 md:flex md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3 font-display">
                            {title}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display">
                            {heading}
                        </h3>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Link href="/resources/case-studies" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-slate-900 dark:hover:text-white transition-colors flex items-center">
                            View All <ArrowUpRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {studies.map((study, idx) => {
                        const content = (
                            <>
                                <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                                        {study.client}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h4>
                                    <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-8 flex-1">
                                        {study.description}
                                    </p>

                                    {study.metric && (
                                        <div className="pt-6 border-t border-gray-100 dark:border-white/10 mt-auto">
                                            <p className="text-sm font-semibold text-primary dark:text-slate-300 uppercase tracking-widest">Key Metric</p>
                                            <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white font-display mt-1 tracking-tight">{study.metric}</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        );

                        const cardClasses = "group flex flex-col bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden";

                        if (study.href) {
                            return <Link href={study.href} key={idx} className={cardClasses}>{content}</Link>;
                        }

                        return <div key={idx} className={cardClasses}>{content}</div>;
                    })}
                </div>
            </div>
        </section>
    );
}
