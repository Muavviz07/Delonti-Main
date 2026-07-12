import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface LegalPageLayoutProps {
    title: string;
    subtitle?: string;
    lastUpdated?: string;
    breadcrumbs?: Breadcrumb[];
    children: React.ReactNode;
}

export default function LegalPageLayout({
    title,
    subtitle,
    lastUpdated,
    breadcrumbs = [],
    children
}: LegalPageLayoutProps) {
    const defaultBreadcrumbs = [
        { label: "Home", href: "/" },
        ...breadcrumbs,
        { label: title }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#121216] transition-colors duration-300">
            <Header />

            <main className="flex-grow">
                {/* Premium Banner Header */}
                <div className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-[#162a42] to-slate-900 overflow-hidden border-b border-slate-800">
                    {/* Visual details */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-logo/20 rounded-full blur-3xl" />

                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                            {defaultBreadcrumbs.map((crumb, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    {idx > 0 && <span className="opacity-40">/</span>}
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="hover:text-white transition-colors">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-slate-300 font-bold">{crumb.label}</span>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Title & Subtitle */}
                        <div className="max-w-4xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                                {title}
                            </h1>
                            {subtitle && (
                                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
                                    {subtitle}
                                </p>
                            )}
                            {lastUpdated && (
                                <p className="text-xs uppercase font-bold tracking-wider text-logo mt-6">
                                    Last Updated: {lastUpdated}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-[#1a1a24] border border-slate-100 dark:border-white/5 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300">
                            {children}

                            {/* Standard support card at bottom of documents */}
                            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                                        Need clarification or have questions?
                                    </h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Our legal and compliance teams are here to support your inquiries.
                                    </p>
                                </div>
                                <Link 
                                    href="mailto:info@delonti.com" 
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                                >
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
