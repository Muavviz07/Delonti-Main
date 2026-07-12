import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: Breadcrumb[];
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-white/10">
            {/* Background Image / Pattern */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            ) : (
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary),_transparent_50%)]" />
                </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm font-medium text-slate-400 mb-6 font-sans">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <ChevronRight className="w-4 h-4 text-slate-600" />
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
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-display tracking-tight mb-4">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
