import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Metadata } from "next";

type Params = Promise<{ slug: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const resolvedParams = await params;
    const slugArray = resolvedParams.slug || [];
    const currentPage = slugArray[slugArray.length - 1] || "";
    const title = currentPage.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return {
        title: `${title} | Delonti`,
    };
}

export default async function DynamicPage({ params }: { params: Params }) {
    const resolvedParams = await params;
    const slugArray = resolvedParams.slug || [];

    const breadcrumbs = slugArray.map((slugPart, index) => {
        const href = "/" + slugArray.slice(0, index + 1).join("/");
        const isLast = index === slugArray.length - 1;
        return {
            label: slugPart.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            href: isLast ? undefined : href
        };
    });

    const currentPageFormat = slugArray[slugArray.length - 1] || "";
    const title = currentPageFormat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title={title}
                    breadcrumbs={breadcrumbs}
                    backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                />

                {/* Placeholder for Dynamic Content */}
                <section className="py-24 bg-white dark:bg-[#16161c]">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                            <h2 className="font-display text-3xl mb-6 text-slate-900 dark:text-white text-center">{title} Overview</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                This is a dynamically generated page for {title}. Delonti provides cutting-edge enterprise solutions
                                tailored to the unique challenges of this sector. Our sophisticated integrations of RFID, IoT, and cybersecurity
                                ensure resilient, scalable, and secure operations.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Please contact our engineering and consulting team to discuss specific implementation requirements, pricing models,
                                and comprehensive service-level agreements tailored to your organizational needs.
                            </p>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    );
}
