import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface UseCase {
    title: string;
    description: string;
    image: string;
    href?: string;
}

interface IndustryUseCasesProps {
    title?: string;
    heading?: string;
    useCases: UseCase[];
    background?: 'white' | 'slate';
}

export default function IndustryUseCases({
    title = "Sectors",
    heading = "Industry Applications",
    useCases,
    background = 'white'
}: IndustryUseCasesProps) {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, idx) => {
                        const content = (
                            <>
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={useCase.image}
                                        alt={useCase.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {useCase.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6 flex-1">
                                        {useCase.description}
                                    </p>

                                    {useCase.href && (
                                        <div className="flex items-center text-sm font-bold uppercase tracking-wider text-primary mt-auto">
                                            Explore Sector
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    )}
                                </div>
                            </>
                        );

                        const cardClasses = "group flex flex-col bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

                        if (useCase.href) {
                            return (
                                <Link href={useCase.href} key={idx} className={cardClasses}>
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <div key={idx} className={cardClasses}>
                                {content}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
