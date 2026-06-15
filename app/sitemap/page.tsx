import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";
import { 
    Building2, 
    Cpu, 
    Briefcase, 
    Globe, 
    FileText, 
    ShieldCheck 
} from "lucide-react";

export default function SitemapPage() {
    const sitemapData = [
        {
            category: "Company",
            icon: Building2,
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Leadership", href: "/about#leadership" },
                { label: "Partners", href: "/about/partners" },
                { label: "Contact Us", href: "/contact" }
            ]
        },
        {
            category: "Platform",
            icon: Cpu,
            links: [
                { label: "Platform Overview", href: "/technology" },
                { label: "Platform Architecture", href: "/technology#architecture" }
            ]
        },
        {
            category: "Solutions",
            icon: Briefcase,
            links: [
                { label: "Asset Tracking", href: "/solutions/asset-tracking" },
                { label: "Inventory Intelligence", href: "/solutions/inventory-intelligence" },
                { label: "Workforce Safety", href: "/solutions/workforce-safety" },
                { label: "Facility Intelligence", href: "/solutions/facility-intelligence" },
                { label: "Smart Public Service Access Platform", href: "/kiosk" }
            ]
        },
        {
            category: "Industries",
            icon: Globe,
            links: [
                { label: "Government", href: "/industries/government" },
                { label: "Education", href: "/industries/education" },
                { label: "Healthcare", href: "/industries/healthcare" },
                { label: "Public Safety", href: "/industries/public-safety" },
                { label: "Manufacturing", href: "/industries/manufacturing" },
                { label: "Supply Chain & Logistics", href: "/industries/supply-chain" }
            ]
        },
        {
            category: "Resources",
            icon: FileText,
            links: [
                { label: "Technology Insights", href: "/resources" },
                { label: "Whitepapers", href: "/resources/whitepapers" },
                { label: "Case Studies", href: "/resources/case-studies" },
                { label: "Blogs", href: "/resources/blogs" },
                { label: "Videos", href: "/resources/solution-videos" }
            ]
        },
        {
            category: "Legal & Compliance",
            icon: ShieldCheck,
            links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Security & Compliance", href: "/compliance" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Cookie Preferences", href: "/cookie-preferences" },
                { label: "Accessibility Statement", href: "/accessibility" },
                { label: "Responsible AI Statement", href: "/responsible-ai" }
            ]
        }
    ];

    const itemTextClass = "group flex items-center text-sm md:text-base text-slate-650 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors py-0.5";
    const categoryTitleClass = "text-base md:text-lg font-bold text-slate-900 dark:text-white";

    return (
        <LegalPageLayout
            title="Site Map"
            subtitle="Explore the directory of pages, solutions, platforms, and legal materials on Delonti."
            lastUpdated="June 15, 2026"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapData.map((section, idx) => {
                    const Icon = section.icon;
                    return (
                        <div 
                            key={idx} 
                            className="p-6 border border-slate-100 dark:border-white/5 rounded-2xl bg-slate-50/30 dark:bg-slate-900/10 hover:border-logo/20 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-white/5 pb-3">
                                <div className="p-2.5 rounded-xl bg-primary/5 dark:bg-logo/10 text-primary dark:text-logo shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h2 className={categoryTitleClass}>
                                    {section.category}
                                </h2>
                            </div>

                            <ul className="space-y-2.5">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link 
                                            href={link.href} 
                                            className={itemTextClass}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-logo transition-colors mr-2.5 shrink-0" />
                                            <span className="leading-tight">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </LegalPageLayout>
    );
}
