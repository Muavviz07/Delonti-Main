import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumbs: Breadcrumb[];
    backgroundImage?: string;
}

export default function PageHeader({ title, breadcrumbs, backgroundImage }: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
            {/* Background Image / Pattern */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            ) : (
                <div className="absolute inset-0 opacity-20">
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary),_transparent_50%)]" />
                </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm font-medium text-slate-300 mb-6 font-sans">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <ChevronRight className="w-4 h-4 text-slate-500" />
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-white transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-white">{crumb.label}</span>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}
