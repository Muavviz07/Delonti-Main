import { FileText, Download } from "lucide-react";
import Link from "next/link";

export interface ResourceItem {
    title: string;
    type: string; // e.g., 'Whitepaper', 'Datasheet', 'Guide'
    description: string;
    href: string;
}

interface ResourceCardGridProps {
    title?: string;
    heading?: string;
    resources: ResourceItem[];
    background?: 'white' | 'slate';
}

export default function ResourceCardGrid({
    title = "Resources",
    heading = "Technical Documentation",
    resources,
    background = 'slate'
}: ResourceCardGridProps) {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, idx) => (
                        <Link
                            key={idx}
                            href={resource.href}
                            className="group flex flex-col p-8 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-white/10 flex items-center justify-center text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full border border-gray-100 dark:border-white/10">
                                    {resource.type}
                                </div>
                            </div>

                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                {resource.title}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed flex-1 mb-6">
                                {resource.description}
                            </p>

                            <div className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors mt-auto">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
