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
      src="/logo-dark.png"
      alt="Delonti Logo"
      width={160}
      height={40}
      className="h-7 lg:h-8 w-auto object-contain dark:hidden"
      priority
    />

    {/* Dark theme → show light logo */}
    <Image
      src="/logo-light.png"
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
                            <Link href="/about" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                About <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-3">
                                            <MenuHeader>Corporate</MenuHeader>
                                            <MenuLink href="/about/overview">Company Overview</MenuLink>
                                            <MenuLink href="/about/partners">Partners & Alliances</MenuLink>
                                            <MenuLink href="/about/careers">Careers</MenuLink>
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                <MenuLink href="/contact">Talk to an Expert →</MenuLink>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <MenuHeader>Our Mission</MenuHeader>
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
                            <Link href="/public-sector" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Public Sector <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-8">
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Landmark}>State & Local</MenuHeader>
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <MenuLink href="/state">State Overview</MenuLink>
                                                    <MenuLink href="/state/programs">Programs & Initiatives</MenuLink>
                                                    <MenuLink href="/state/public-safety">Public Safety Solutions</MenuLink>
                                                    <MenuLink href="/state/transportation">Transportation & Mobility</MenuLink>
                                                    <MenuLink href="/state/hhs">Health & Human Services</MenuLink>
                                                    <MenuLink href="/state/education">Education & Campus Solutions</MenuLink>
                                                </div>
                                                <div>
                                                    <MenuLink href="/state/smart-city">Smart City & Infrastructure</MenuLink>
                                                    <MenuLink href="/state/social-impact">Homeless & Social Impact</MenuLink>
                                                    <MenuLink href="/state/data">Data, Analytics & Reporting</MenuLink>
                                                    <MenuLink href="/state/cybersecurity">Cybersecurity & Compliance</MenuLink>
                                                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10">
                                                        <MenuLink href="/state/use-cases">State Use Cases →</MenuLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Shield}>Federal & Defense</MenuHeader>
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <MenuLink href="/federal">Federal Overview</MenuLink>
                                                    <MenuLink href="/federal/rfid">Secure RFID & Logistics</MenuLink>
                                                    <MenuLink href="/federal/cybersecurity">Cybersecurity & Zero Trust</MenuLink>
                                                    <MenuLink href="/federal/cloud">Cloud & IT Modernization</MenuLink>
                                                    <MenuLink href="/federal/data">Data, AI & Automation</MenuLink>
                                                </div>
                                                <div>
                                                    <MenuLink href="/federal/ato">ATO, Risk & Compliance</MenuLink>
                                                    <MenuLink href="/federal/acquisition">Acquisition & Contracting</MenuLink>
                                                    <MenuLink href="/federal/workforce">Workforce & Staffing</MenuLink>
                                                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10">
                                                        <MenuLink href="/federal/use-cases">Federal Use Cases →</MenuLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4 h-full">
                                            <FeaturedCard
                                                title="Securing National Infrastructure"
                                                description="Discover how our advanced IoT ecosystems protect critical defense logistics and civic operations."
                                                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                                                href="/federal/use-cases"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative h-full flex items-center px-2 ${forceClose ? '' : 'group'}`}>
                            <Link href="/private" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Private Sector <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Building2}>SMB</MenuHeader>
                                            <MenuLink href="/private/smb">SMB Overview</MenuLink>
                                            <MenuLink href="/private/smb/asset-tracking">Asset Tracking & Inventory</MenuLink>
                                            <MenuLink href="/private/smb/fleet-tracking">Fleet & Vehicle Tracking</MenuLink>
                                            <MenuLink href="/private/smb/cybersecurity">Cybersecurity Essentials</MenuLink>
                                            <MenuLink href="/private/smb/cloud-it">Cloud & IT Services</MenuLink>
                                            <MenuLink href="/private/smb/data-analytics">Data & Analytics</MenuLink>
                                            <MenuLink href="/private/smb/technical-staffing">Technical Staffing</MenuLink>
                                        </div>
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Briefcase}>Enterprise</MenuHeader>
                                            <MenuLink href="/private/enterprise">Enterprise Overview</MenuLink>
                                            <MenuLink href="/private/enterprise/asset-visibility">Asset Visibility Platforms</MenuLink>
                                            <MenuLink href="/private/enterprise/industrial-iot">Industrial IoT & Smart Infrastructure</MenuLink>
                                            <MenuLink href="/private/enterprise/cybersecurity">Enterprise Cybersecurity</MenuLink>
                                            <MenuLink href="/private/enterprise/data-platforms">Data Platforms & AI</MenuLink>
                                            <MenuLink href="/private/enterprise/cloud-devops">Cloud & DevOps Transformation</MenuLink>
                                            <MenuLink href="/private/enterprise/systems-integration">Systems Integration</MenuLink>
                                            <MenuLink href="/private/enterprise/workforce">Workforce Solutions</MenuLink>
                                        </div>
                                        <div className="col-span-4 flex flex-col gap-4">
                                            <FeaturedCard
                                                className="min-h-[190px]"
                                                title="Smart Tech for Growing Businesses"
                                                description="Affordable, fast-deploying solutions built for SMBs."
                                                image="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070"
                                                href="/private/smb"
                                            />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative h-full flex items-center px-2 ${forceClose ? '' : 'group'}`}>
                            <Link href="/technology" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Technology Solutions <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-4 gap-8">
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <MenuHeader>RFID Integration</MenuHeader>
                                                <MenuLink href="/tech/rfid/asset">Asset Tracking</MenuLink>
                                                <MenuLink href="/tech/rfid/personnel">Personnel Tracking</MenuLink>
                                                <MenuLink href="/tech/rfid/fleet">Fleet & Vehicle Tracking</MenuLink>
                                                <MenuLink href="/tech/rfid/secure">Secure RFID Systems</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Internet of Things (IoT)</MenuHeader>
                                                <MenuLink href="/tech/iot/smart-infra">Smart Infrastructure</MenuLink>
                                                <MenuLink href="/tech/iot/sensors">Sensors & Devices</MenuLink>
                                                <MenuLink href="/tech/iot/edge">Edge & Cloud Integration</MenuLink>
                                                <MenuLink href="/tech/iot/real-time">Real-Time Monitoring</MenuLink>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <MenuHeader>Cybersecurity</MenuHeader>
                                                <MenuLink href="/tech/cyber/assessments">Security Assessments</MenuLink>
                                                <MenuLink href="/tech/cyber/zero-trust">Zero Trust Architecture</MenuLink>
                                                <MenuLink href="/tech/cyber/compliance">Compliance & Governance</MenuLink>
                                                <MenuLink href="/tech/cyber/risk">Risk Management</MenuLink>
                                                <MenuLink href="/tech/cyber/response">Incident Response</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Data, AI & Analytics</MenuHeader>
                                                <MenuLink href="/tech/data/integration">Data Integration</MenuLink>
                                                <MenuLink href="/tech/data/dashboards">Dashboards & Reporting</MenuLink>
                                                <MenuLink href="/tech/data/ai">AI Automation</MenuLink>
                                                <MenuLink href="/tech/data/predictive">Predictive Insights</MenuLink>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Software & IT Services</MenuHeader>
                                                <MenuLink href="/tech/software/custom">Custom Software Development</MenuLink>
                                                <MenuLink href="/tech/software/cloud">Cloud & DevOps</MenuLink>
                                                <MenuLink href="/tech/software/integration">System Integration</MenuLink>
                                                <MenuLink href="/tech/software/modernization">IT Modernization</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Workforce & Staffing</MenuHeader>
                                                <MenuLink href="/tech/workforce/technical">Technical Staffing</MenuLink>
                                                <MenuLink href="/tech/workforce/projects">Project-Based Teams</MenuLink>
                                                <MenuLink href="/tech/workforce/managed">Managed Support</MenuLink>
                                            </div>
                                        </div>
                                        <div className="h-full">
                                            <FeaturedCard
                                                title="Zero-Trust Architecture"
                                                description="Explore how edge computing and IoT frameworks unify legacy systems securely."
                                                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070"
                                                href="/tech/cyber/zero-trust"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/resources" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Insights & Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[60px] lg:top-[72px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    <div className="grid grid-cols-12 gap-12">
                                        <div className="col-span-7 grid grid-cols-2 gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Research & Reports</MenuHeader>
                                                <MenuLink href="/resources/case-studies">Case Studies</MenuLink>
                                                <MenuLink href="/resources/whitepapers">Whitepapers</MenuLink>
                                                <MenuLink href="/resources/insights">Technology Insights</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>News & Updates</MenuHeader>
                                                <MenuLink href="/resources/blogs">Blogs & Articles</MenuLink>
                                                <MenuLink href="/resources/news">News & Announcements</MenuLink>
                                                <MenuLink href="/resources/grants">Government Programs & Grants</MenuLink>
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
                        <Link href="/contact" className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5">
                            Contact
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
                            title: "About", url: "/about",
                            links: [{ name: "Company Overview", url: "/about/overview" }, { name: "Partners & Alliances", url: "/about/partners" }, { name: "Careers", url: "/about/careers" }, { name: "Talk to an Expert", url: "/contact" }]
                        },
                        {
                            title: "Public Sector", url: "/public-sector",
                            links: [
                                { name: "State Overview", url: "/state" }, { name: "Programs & Initiatives", url: "/state/programs" }, { name: "Public Safety Solutions", url: "/state/public-safety" }, { name: "Transportation & Mobility", url: "/state/transportation" }, { name: "Health & Human Services (HHS)", url: "/state/hhs" }, { name: "Education & Campus Solutions", url: "/state/education" }, { name: "Smart City & Infrastructure", url: "/state/smart-city" }, { name: "Homeless & Social Impact Solutions", url: "/state/social-impact" }, { name: "Data, Analytics & Reporting", url: "/state/data" }, { name: "Cybersecurity & Compliance", url: "/state/cybersecurity" }, { name: "State Use Cases", url: "/state/use-cases" },
                                { name: "Federal Overview", url: "/federal" }, { name: "Secure RFID & Logistics", url: "/federal/rfid" }, { name: "Cybersecurity & Zero Trust", url: "/federal/cybersecurity" }, { name: "Cloud & IT Modernization", url: "/federal/cloud" }, { name: "Data, AI & Automation", url: "/federal/data" }, { name: "ATO, Risk & Compliance", url: "/federal/ato" }, { name: "Acquisition & Contracting", url: "/federal/acquisition" }, { name: "Workforce & Staffing Solutions", url: "/federal/workforce" }, { name: "Federal Use Cases", url: "/federal/use-cases" }
                            ]
                        },
                        {
                            title: "Private Sector", url: "/private",
                            links: [
                                // SMB GROUP
                                { name: "— SMB —", url: "/private/smb", isGroupLabel: true },
                                { name: "SMB Overview", url: "/private/smb" },
                                { name: "Asset Tracking & Inventory", url: "/private/smb/asset-tracking" },
                                { name: "Fleet & Vehicle Tracking", url: "/private/smb/fleet-tracking" },
                                { name: "Cybersecurity Essentials", url: "/private/smb/cybersecurity" },
                                { name: "Cloud & IT Services", url: "/private/smb/cloud-it" },
                                { name: "Data & Analytics", url: "/private/smb/data-analytics" },
                                { name: "Technical Staffing", url: "/private/smb/technical-staffing" },
                                // ENTERPRISE GROUP
                                { name: "— Enterprise —", url: "/private/enterprise", isGroupLabel: true },
                                { name: "Enterprise Overview", url: "/private/enterprise" },
                                { name: "Asset Visibility Platforms", url: "/private/enterprise/asset-visibility" },
                                { name: "Industrial IoT & Smart Infrastructure", url: "/private/enterprise/industrial-iot" },
                                { name: "Enterprise Cybersecurity", url: "/private/enterprise/cybersecurity" },
                                { name: "Data Platforms & AI", url: "/private/enterprise/data-platforms" },
                                { name: "Cloud & DevOps Transformation", url: "/private/enterprise/cloud-devops" },
                                { name: "Systems Integration", url: "/private/enterprise/systems-integration" },
                                { name: "Workforce Solutions", url: "/private/enterprise/workforce" },
                            ]
                        },
                        {
                            title: "Technology Solutions", url: "/technology",
                            links: [
                                { name: "RFID Integration", url: "/tech/rfid/asset" }, { name: "Asset Tracking", url: "/tech/rfid/asset" }, { name: "Personnel Tracking", url: "/tech/rfid/personnel" }, { name: "Fleet & Vehicle Tracking", url: "/tech/rfid/fleet" }, { name: "Secure RFID Systems", url: "/tech/rfid/secure" },
                                { name: "Internet of Things (IoT)", url: "/tech/iot/smart-infra" }, { name: "Smart Infrastructure", url: "/tech/iot/smart-infra" }, { name: "Sensors & Devices", url: "/tech/iot/sensors" }, { name: "Edge & Cloud Integration", url: "/tech/iot/edge" }, { name: "Real-Time Monitoring", url: "/tech/iot/real-time" },
                                { name: "Cybersecurity", url: "/tech/cyber/zero-trust" }, { name: "Security Assessments", url: "/tech/cyber/assessments" }, { name: "Zero Trust Architecture", url: "/tech/cyber/zero-trust" }, { name: "Compliance & Governance", url: "/tech/cyber/compliance" }, { name: "Risk Management", url: "/tech/cyber/risk" }, { name: "Incident Response", url: "/tech/cyber/response" },
                                { name: "Data, AI & Analytics", url: "/tech/data/integration" }, { name: "Data Integration", url: "/tech/data/integration" }, { name: "Dashboards & Reporting", url: "/tech/data/dashboards" }, { name: "AI Automation", url: "/tech/data/ai" }, { name: "Predictive Insights", url: "/tech/data/predictive" },
                                { name: "Software & IT Services", url: "/tech/software/custom" }, { name: "Custom Software Development", url: "/tech/software/custom" }, { name: "Cloud & DevOps", url: "/tech/software/cloud" }, { name: "System Integration", url: "/tech/software/integration" }, { name: "IT Modernization", url: "/tech/software/modernization" },
                                { name: "Workforce & Staffing Solutions", url: "/tech/workforce/technical" }, { name: "Technical Staffing", url: "/tech/workforce/technical" }, { name: "Project-Based Teams", url: "/tech/workforce/projects" }, { name: "Managed Support", url: "/tech/workforce/managed" }
                            ]
                        },
                        {
                            title: "Insights & Resources", url: "/resources",
                            links: [{ name: "Case Studies", url: "/resources/case-studies" }, { name: "Whitepapers", url: "/resources/whitepapers" }, { name: "Government Programs & Grants", url: "/resources/grants" }, { name: "Technology Insights", url: "/resources/insights" }, { name: "Blogs & Articles", url: "/resources/blogs" }, { name: "News & Announcements", url: "/resources/news" }]
                        },
                    ].map((section) => (
                        <div key={section.title} className="border-b border-gray-100 dark:border-white/10 pb-4">
                            <div className="flex items-center justify-between w-full">
                                <Link href={section.url} onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-slate-900 dark:text-white flex-1">
                                    {section.title}
                                </Link>
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