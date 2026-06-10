"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Landmark, Shield, ChevronRight, Building2, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const MenuLink = ({ href, children, onClick, isGroupLabel }: { href?: string; children: React.ReactNode; onClick?: () => void; isGroupLabel?: boolean }) => {
    if (isGroupLabel) {
        return (
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-slate-400 mt-4 mb-1 px-0 pointer-events-none">
                {children}
            </div>
        );
    }

    return (
        <Link
            href={href ?? "#"}
            onClick={onClick}
            className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors py-2"
        >
            {children}
        </Link>
    );
};

const MenuHeader = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) => (
    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5 border-b border-gray-100 dark:border-white/10 pb-3">
        {Icon && <Icon className="w-5 h-5 text-primary dark:text-slate-300" />}
        {children}
    </h4>
);

const FeaturedCard = ({ title, description, image, href, className }: { title: string; description: string; image: string; href: string; className?: string }) => (
    <Link href={href} className={`group relative block w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-gray-200 dark:border-white/10 ${className ?? ""}`}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40" style={{ backgroundImage: `url('${image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h5 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{title}</h5>
            <p className="text-sm text-slate-300 mb-6 line-clamp-2 leading-relaxed">{description}</p>
            <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                Explore <ChevronRight className="w-4 h-4" />
            </div>
        </div>
    </Link>
);

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const [forceClose, setForceClose] = useState(false);

    const toggleMobileMenu = (menu: string) => {
        setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.closest('a')) {
            setForceClose(true);
            setIsMobileMenuOpen(false);
        }
    };

    const handleNavMouseLeave = () => {
        if (forceClose) {
            setForceClose(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-[#16161c] border-b border-gray-100 dark:border-white/10 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-[60px] lg:h-[72px]">

                    <Link href="/" className="flex items-center z-50 shrink-0 mr-6">
                        <div className="relative flex items-center">

                            {/* Light theme → show dark logo */}
                            <Image
                                src="/logo-dark(blue-text).png"
                                alt="Delonti Logo"
                                width={150}
                                height={38}
                                className="h-8 lg:h-9 w-auto object-contain dark:hidden"
                                priority
                            />

                            {/* Dark theme → show light logo */}
                            <Image
                                src="/logo-light-blue.png"
                                alt="Delonti Logo"
                                width={160}
                                height={40}
                                className="hidden dark:block h-8 lg:h-9 w-auto object-contain"
                                priority
                            />

                        </div>
                    </Link>

                    <nav
                        className="hidden lg:flex items-center space-x-1 xl:space-x-4 h-full"
                        onClick={handleNavClick}
                        onMouseLeave={handleNavMouseLeave}
                    >

                        <div className="h-full flex items-center px-2">
                            <Link href="/" className="text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors">
                                Home
                            </Link>
                        </div>

                        <div className={`relative h-full flex items-center px-2 ${forceClose ? '' : 'group'}`}>
                            <span className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6 cursor-pointer">
                                About <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </span>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-3">
                                            <MenuHeader>Corporate</MenuHeader>
                                            <MenuLink href="/about">Company Overview</MenuLink>
                                            <MenuLink href="/about/partners">Partner Ecosystem</MenuLink>
                                            <MenuLink href="/about/careers">Careers</MenuLink>
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                <MenuLink href="/contact">Talk to an Expert →</MenuLink>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <MenuHeader>About Delonti</MenuHeader>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                                Delonti pioneers intelligent infrastructure, empowering public and private sectors globally with secure, scalable, and fully integrated technology solutions. We bridge the gap between complex hardware and intuitive software.
                                            </p>
                                        </div>
                                        <div className="col-span-5 h-full">
                                            <FeaturedCard
                                                title="Join the Delonti Team"
                                                description="Explore global career opportunities and help us build the future of secure infrastructure."
                                                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                                                href="/about/careers"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative h-full flex items-center px-2 ${forceClose ? '' : 'group'}`}>
                            <span className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6 cursor-pointer">
                                Industries <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </span>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-3">
                                            <MenuHeader>Sectors</MenuHeader>
                                            <MenuLink href="/industries/government">Government</MenuLink>
                                            <MenuLink href="/industries/education">Education</MenuLink>
                                            <MenuLink href="/industries/healthcare">Healthcare</MenuLink>
                                            <MenuLink href="/industries/manufacturing">Manufacturing</MenuLink>
                                            <MenuLink href="/industries/supply-chain">Supply Chain (Retail/Logistics)</MenuLink>
                                            <MenuLink href="/industries/public-safety">Public Safety</MenuLink>
                                        </div>
                                        <div className="col-span-4">
                                            <MenuHeader>Our Expertise</MenuHeader>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                                Delonti provides specialized technology solutions tailored to the unique challenges of mission-critical sectors. From public safety to healthcare, we empower organizations with secure, scalable, and fully integrated infrastructure.
                                            </p>
                                        </div>
                                        <div className="col-span-5 h-full">
                                            <FeaturedCard
                                                title="Mission-Critical Infrastructure"
                                                description="Discover how we transform complex industrial and public sector challenges into streamlined digital operations."
                                                image="/industries-menu.png"
                                                href="/industries"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative h-full flex items-center px-2 ${forceClose ? '' : 'group'}`}>
                            <span className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6 cursor-pointer">
                                Solutions <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </span>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-3">
                                            <MenuHeader>Core Capabilities</MenuHeader>
                                            <MenuLink href="/solutions/asset-tracking">Asset Tracking</MenuLink>
                                            <MenuLink href="/solutions/inventory-intelligence">Inventory Intelligence</MenuLink>
                                            <MenuLink href="/solutions/workforce-safety">Workforce Safety</MenuLink>
                                            <MenuLink href="/solutions/facility-intelligence">Facility Intelligence</MenuLink>
                                        </div>
                                        <div className="col-span-4">
                                            <MenuHeader>Technical Excellence</MenuHeader>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                                Our core technology solutions bridge the gap between complex hardware and intuitive software. We deliver real-time visibility, enhanced safety, and operational intelligence across your entire enterprise.
                                            </p>
                                        </div>
                                        <div className="col-span-5 h-full">
                                            <FeaturedCard
                                                title="Intelligent Operations"
                                                description="Leverage AI-driven insights and IoT connectivity to optimize your workforce and assets in real-time."
                                                image="/solutions-menu.png"
                                                href="/technology"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center px-2">
                            <span className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6 cursor-pointer">
                                Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </span>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-7 grid grid-cols-2 gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Research & Reports</MenuHeader>
                                                <MenuLink href="/resources/case-studies">Case Studies</MenuLink>
                                                <MenuLink href="/resources/whitepapers">Whitepapers</MenuLink>
                                                <MenuLink href="/resources/business-cases">Business Cases</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>News & Updates</MenuHeader>
                                                <MenuLink href="/resources/blogs">Blogs & Articles</MenuLink>
                                                <MenuLink href="/resources/news">News & Announcements</MenuLink>
                                                <MenuLink href="/resources/solution-videos">Solution Videos</MenuLink>
                                            </div>
                                        </div>
                                        <div className="col-span-5 h-full">
                                            <FeaturedCard
                                                title="2026 Industry Technology Report"
                                                description="Download our latest whitepaper on optimizing asset tracking systems across multi-state regions and global supply chains."
                                                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                                                href="/resources/whitepapers"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <div className="hidden lg:flex items-center gap-4 shrink-0 z-50">
                        <ThemeToggle />
                        <Link href="/contact" className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5 uppercase">
                            CONTACT
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center gap-4 z-50">
                        <ThemeToggle />
                        <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden fixed inset-0 top-[60px] bg-white dark:bg-[#16161c] z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-6 py-8 flex flex-col gap-6">

                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-slate-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
                        Home
                    </Link>

                    {[
                        {
                            title: "About", url: "#",
                            links: [{ name: "Company Overview", url: "/about" }, { name: "Partner Ecosystem", url: "/about/partners" }, { name: "Careers", url: "/about/careers" }, { name: "Talk to an Expert", url: "/contact" }]
                        },
                        {
                            title: "Industries", url: "#",
                            links: [
                                { name: "Government", url: "/industries/government" },
                                { name: "Education", url: "/industries/education" },
                                { name: "Healthcare", url: "/industries/healthcare" },
                                { name: "Manufacturing", url: "/industries/manufacturing" },
                                { name: "Supply Chain (Retail/Logistics)", url: "/industries/supply-chain" },
                                { name: "Public Safety", url: "/industries/public-safety" }
                            ]
                        },
                        {
                            title: "Solutions", url: "#",
                            links: [
                                { name: "Asset Tracking", url: "/solutions/asset-tracking" },
                                { name: "Inventory Intelligence", url: "/solutions/inventory-intelligence" },
                                { name: "Workforce Safety", url: "/solutions/workforce-safety" },
                                { name: "Facility Intelligence", url: "/solutions/facility-intelligence" }
                            ]
                        },
                        {
                            title: "Resources", url: "#",
                            links: [{ name: "Case Studies", url: "/resources/case-studies" }, { name: "Whitepapers", url: "/resources/whitepapers" }, { name: "Business Cases", url: "/resources/business-cases" }, { name: "Blogs & Articles", url: "/resources/blogs" }, { name: "News & Announcements", url: "/resources/news" }, { name: "Solution Videos", url: "/resources/solution-videos" }]
                        },
                    ].map((section) => (
                        <div key={section.title} className="border-b border-gray-100 dark:border-white/10 pb-4">
                            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => toggleMobileMenu(section.title)}>
                                <span className="font-semibold text-lg text-slate-900 dark:text-white flex-1">
                                    {section.title}
                                </span>
                                <button onClick={() => toggleMobileMenu(section.title)} className="p-2 -mr-2 text-slate-500">
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === section.title ? '-rotate-180 text-primary dark:text-white' : ''}`} />
                                </button>
                            </div>
                            <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${activeMobileMenu === section.title ? 'max-h-[1200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                {section.links.map(link => (
                                    <MenuLink
                                        key={link.name}
                                        href={link.url}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        isGroupLabel={Boolean((link as any).isGroupLabel)}
                                    >
                                        {link.name}
                                    </MenuLink>
                                ))}
                            </div>
                        </div>
                    ))}

                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center px-6 py-4 rounded-xl text-base font-bold tracking-wide mt-4 shadow-lg">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
