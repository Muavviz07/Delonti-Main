import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-[#16161c] py-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-9xl font-extrabold text-[#0A1A2A] dark:text-[#0059ab] mb-4 tracking-tighter">404</h1>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Page Not Found</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed font-light">
                        The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0A1A2A] hover:bg-[#162a42] dark:bg-[#0059ab] dark:hover:bg-[#0059ab]/90 transition-all shadow-md hover:-translate-y-0.5 uppercase tracking-wider"
                    >
                        Go Back Home
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
