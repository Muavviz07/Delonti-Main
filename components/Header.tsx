"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Landmark, Shield, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

// Reusable Mega Menu Link Component
const MenuLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link 
        href={href} 
        onClick={onClick}
        className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors py-2"
    >
        {children}
    </Link>
);

// Reusable Mega Menu Header Component
const MenuHeader = ({ children, icon: Icon }: { children: React.ReactNode; icon?: React.ElementType }) => (
    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5 border-b border-gray-100 dark:border-white/10 pb-3">
        {Icon && <Icon className="w-5 h-5 text-primary dark:text-slate-300" />}
        {children}
    </h4>
);

// Reusable Featured Image Card - Height locked for uniformity across all menus
const FeaturedCard = ({ title, description, image, href }: { title: string, description: string, image: string, href: string }) => (
    <Link href={href} className="group relative block w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-gray-200 dark:border-white/10">
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

    const toggleMobileMenu = (menu: string) => {
        setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
    };

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-[#16161c] border-b border-gray-100 dark:border-white/10 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50 shrink-0 mr-4">
                        <div className="text-primary dark:text-slate-100 transition-transform group-hover:scale-105">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-primary dark:text-white hidden sm:block">
                            DELONTI
                        </span>
                    </Link>

                    {/* Main Nav (Desktop) */}
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 h-full">
                        
                        {/* HOME */}
                        <div className="h-full flex items-center px-2">
                            <Link href="/" className="text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors">
                                Home
                            </Link>
                        </div>

                        {/* ABOUT - FULL WIDTH */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/about" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                About <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
                                                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" // Premium Corporate Office Image
                                                href="/about/careers"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PUBLIC SECTOR - FULL WIDTH WITH CARD SEPARATION */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/government" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Public Sector <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                                    <div className="grid grid-cols-12 gap-8">
                                        
                                        {/* State & Local Card */}
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Landmark}>State & Local</MenuHeader>
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <MenuLink href="/state">State Overview</MenuLink>
                                                    <MenuLink href="/state/programs">Programs & Initiatives</MenuLink>
                                                    <MenuLink href="/state/public-safety">Public Safety</MenuLink>
                                                    <MenuLink href="/state/transportation">Transportation</MenuLink>
                                                    <MenuLink href="/state/hhs">HHS Solutions</MenuLink>
                                                </div>
                                                <div>
                                                    <MenuLink href="/state/education">Campus Tech</MenuLink>
                                                    <MenuLink href="/state/smart-city">Smart City Infra</MenuLink>
                                                    <MenuLink href="/state/social-impact">Social Impact</MenuLink>
                                                    <MenuLink href="/state/cybersecurity">Cyber Compliance</MenuLink>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Federal & Defense Card */}
                                        <div className="col-span-4 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-white/5">
                                            <MenuHeader icon={Shield}>Federal & Defense</MenuHeader>
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div>
                                                    <MenuLink href="/federal">Federal Overview</MenuLink>
                                                    <MenuLink href="/federal/rfid">Defense Logistics</MenuLink>
                                                    <MenuLink href="/federal/acquisition">Acquisition</MenuLink>
                                                    <MenuLink href="/federal/workforce">Staffing Solutions</MenuLink>
                                                </div>
                                                <div>
                                                    <MenuLink href="/federal/ato">ATO & Risk</MenuLink>
                                                    <MenuLink href="/federal/cybersecurity">Zero Trust Cyber</MenuLink>
                                                    <MenuLink href="/federal/cloud">Cloud Migration</MenuLink>
                                                    <MenuLink href="/federal/data">AI & Automation</MenuLink>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Featured Image */}
                                        <div className="col-span-4 h-full">
                                            <FeaturedCard 
                                                title="Securing National Infrastructure" 
                                                description="Discover how our advanced IoT ecosystems protect critical defense logistics and civic operations."
                                                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" // Premium Global/Tech Data Image
                                                href="/federal/use-cases"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PRIVATE SECTOR - FULL WIDTH */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/private" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Private Sector <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                                    <div className="grid grid-cols-12 gap-12">
                                        
                                        <div className="col-span-7 grid grid-cols-2 gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Core Capabilities</MenuHeader>
                                                <MenuLink href="/enterprise">Enterprise Overview</MenuLink>
                                                <MenuLink href="/enterprise/digital-transformation">Digital Transformation</MenuLink>
                                                <MenuLink href="/enterprise/supply-chain">Supply Chain Visibility</MenuLink>
                                                <MenuLink href="/enterprise/cybersecurity">Cyber & Risk Management</MenuLink>
                                                <MenuLink href="/enterprise/cloud">Cloud & DevOps</MenuLink>
                                                <MenuLink href="/enterprise/managed-services">Managed IT Services</MenuLink>
                                                <MenuLink href="/enterprise/workforce">Enterprise Staffing</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Key Industries</MenuHeader>
                                                <MenuLink href="/industries/logistics">Logistics & Transportation</MenuLink>
                                                <MenuLink href="/industries/manufacturing">Smart Manufacturing</MenuLink>
                                                <MenuLink href="/industries/retail">Retail & Warehousing</MenuLink>
                                                <MenuLink href="/industries/energy">Energy & Utilities</MenuLink>
                                                <MenuLink href="/industries/tech">Technology & SaaS</MenuLink>
                                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                    <MenuLink href="/enterprise/case-studies">View Case Studies →</MenuLink>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-5 h-full">
                                            <FeaturedCard 
                                                title="Transforming Global Supply Chains" 
                                                description="Leverage sub-second RFID tracking and real-time analytics to scale operations efficiently."
                                                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" // Premium Modern Warehouse/Logistics Image
                                                href="/enterprise/digital-transformation"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TECHNOLOGY SOLUTIONS - FULL WIDTH */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/technology" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Technology <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                                    <div className="grid grid-cols-4 gap-8">
                                        
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <MenuHeader>RFID Integration</MenuHeader>
                                                <MenuLink href="/tech/rfid/asset">Asset Tracking</MenuLink>
                                                <MenuLink href="/tech/rfid/personnel">Personnel Tracking</MenuLink>
                                                <MenuLink href="/tech/rfid/fleet">Fleet Management</MenuLink>
                                                <MenuLink href="/tech/rfid/secure">Secure RFID Systems</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Internet of Things (IoT)</MenuHeader>
                                                <MenuLink href="/tech/iot/smart-infra">Smart Infrastructure</MenuLink>
                                                <MenuLink href="/tech/iot/sensors">Industrial Sensors</MenuLink>
                                                <MenuLink href="/tech/iot/edge">Edge Computing</MenuLink>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <MenuHeader>Cybersecurity</MenuHeader>
                                                <MenuLink href="/tech/cyber/assessments">Security Assessments</MenuLink>
                                                <MenuLink href="/tech/cyber/zero-trust">Zero Trust Architecture</MenuLink>
                                                <MenuLink href="/tech/cyber/compliance">Compliance & Governance</MenuLink>
                                                <MenuLink href="/tech/cyber/response">Incident Response</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Data & AI</MenuHeader>
                                                <MenuLink href="/tech/data/integration">Data Integration</MenuLink>
                                                <MenuLink href="/tech/data/dashboards">Analytics Dashboards</MenuLink>
                                                <MenuLink href="/tech/data/ai">AI Automation</MenuLink>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Software Services</MenuHeader>
                                                <MenuLink href="/tech/software/custom">Custom Software Dev</MenuLink>
                                                <MenuLink href="/tech/software/cloud">Cloud Architecture</MenuLink>
                                                <MenuLink href="/tech/software/integration">System Integration</MenuLink>
                                            </div>
                                            <div>
                                                <MenuHeader>Workforce Solutions</MenuHeader>
                                                <MenuLink href="/tech/workforce/technical">Technical Staffing</MenuLink>
                                                <MenuLink href="/tech/workforce/managed">Managed Support</MenuLink>
                                            </div>
                                        </div>

                                        <div className="h-full">
                                            <FeaturedCard 
                                                title="Zero-Trust Architecture" 
                                                description="Explore how edge computing and IoT frameworks unify legacy systems securely."
                                                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070" // Premium Server/Cyber Image
                                                href="/technology"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INSIGHTS & RESOURCES - CLEANED UP LAYOUT WITH 1 IMAGE */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/resources" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-y-95 group-hover:scale-y-100 z-40">
                                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                                    <div className="grid grid-cols-12 gap-12">
                                        
                                        {/* Two clean columns for links */}
                                        <div className="col-span-7 grid grid-cols-2 gap-8 pr-8 border-r border-gray-100 dark:border-white/10">
                                            <div>
                                                <MenuHeader>Research & Reports</MenuHeader>
                                                <MenuLink href="/resources/case-studies">Client Case Studies</MenuLink>
                                                <MenuLink href="/resources/whitepapers">Industry Whitepapers</MenuLink>
                                                <MenuLink href="/resources/insights">Technology Insights</MenuLink>
                                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                    <MenuLink href="/resources/whitepapers">Download 2026 Report →</MenuLink>
                                                </div>
                                            </div>
                                            <div>
                                                <MenuHeader>News & Updates</MenuHeader>
                                                <MenuLink href="/resources/blogs">Engineering Blog</MenuLink>
                                                <MenuLink href="/resources/news">Corporate Announcements</MenuLink>
                                                <MenuLink href="/resources/grants">Government Grant Info</MenuLink>
                                            </div>
                                        </div>

                                        {/* Single, large featured image */}
                                        <div className="col-span-5 h-full">
                                            <FeaturedCard 
                                                title="2026 Industry Technology Report" 
                                                description="Download our latest whitepaper on optimizing asset tracking systems across multi-state regions and global supply chains."
                                                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" // Premium Analytics/Data Image
                                                href="/resources/whitepapers"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CAREERS - ADDED NEXT TO RESOURCES */}
                        <div className="h-full flex items-center px-2">
                            <Link href="/about/careers" className="text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors">
                                Careers
                            </Link>
                        </div>

                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0 z-50">
                        <ThemeToggle />
                        <Link href="/contact" className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden flex items-center gap-4 z-50">
                        <ThemeToggle />
                        <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`lg:hidden fixed inset-0 top-20 bg-white dark:bg-[#16161c] z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-6 py-8 flex flex-col gap-6">
                    
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-slate-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
                        Home
                    </Link>

                    {/* Mobile Nav Accordion Items */}
                    {[
                        { 
                            title: "About", url: "/about",
                            links: [{name: "Company Overview", url: "/about/overview"}, {name: "Partners & Alliances", url: "/about/partners"}, {name: "Careers", url: "/about/careers"}, {name: "Talk to an Expert", url: "/contact"}] 
                        },
                        { 
                            title: "Public Sector", url: "/government",
                            links: [
                                {name: "State Overview", url: "/state"}, {name: "Programs & Initiatives", url: "/state/programs"}, {name: "Public Safety Solutions", url: "/state/public-safety"}, {name: "Transportation & Mobility", url: "/state/transportation"}, {name: "Health & Human Services", url: "/state/hhs"}, {name: "Education & Campus", url: "/state/education"}, {name: "Smart City & Infrastructure", url: "/state/smart-city"}, {name: "Homeless & Social Impact", url: "/state/social-impact"}, {name: "Data, Analytics & Reporting", url: "/state/data"}, {name: "Cybersecurity & Compliance", url: "/state/cybersecurity"}, {name: "State Use Cases", url: "/solutions"},
                                {name: "Federal Overview", url: "/federal"}, {name: "Secure RFID & Logistics", url: "/federal/rfid"}, {name: "Cybersecurity & Zero Trust", url: "/federal/cybersecurity"}, {name: "Cloud & IT Modernization", url: "/federal/cloud"}, {name: "Data, AI & Automation", url: "/federal/data"}, {name: "ATO, Risk & Compliance", url: "/federal/ato"}, {name: "Acquisition & Contracting", url: "/federal/acquisition"}, {name: "Workforce & Staffing", url: "/federal/workforce"}, {name: "Federal Use Cases", url: "/federal/use-cases"}
                            ] 
                        },
                        { 
                            title: "Private Sector", url: "/private",
                            links: [{name: "Enterprise Overview", url: "/enterprise"}, {name: "Logistics & Transportation", url: "/industries/logistics"}, {name: "Manufacturing", url: "/industries/manufacturing"}, {name: "Retail & Warehousing", url: "/industries/retail"}, {name: "Energy & Utilities", url: "/industries/energy"}, {name: "Technology & SaaS", url: "/industries/tech"}, {name: "Digital Transformation", url: "/enterprise/digital-transformation"}, {name: "Supply Chain Visibility", url: "/enterprise/supply-chain"}, {name: "Cybersecurity & Risk", url: "/enterprise/cybersecurity"}, {name: "Cloud & DevOps", url: "/enterprise/cloud"}, {name: "Managed Services", url: "/enterprise/managed-services"}, {name: "Workforce & Staffing", url: "/enterprise/workforce"}, {name: "Case Studies", url: "/enterprise/case-studies"}] 
                        },
                        { 
                            title: "Technology Solutions", url: "/technology",
                            links: [{name: "RFID Integration", url: "/tech/rfid/asset"}, {name: "Internet of Things (IoT)", url: "/tech/iot/smart-infra"}, {name: "Cybersecurity", url: "/tech/cyber/zero-trust"}, {name: "Data, AI & Analytics", url: "/tech/data/integration"}, {name: "Software & IT Services", url: "/tech/software/custom"}, {name: "Workforce & Staffing", url: "/tech/workforce/technical"}] 
                        },
                        { 
                            title: "Insights & Resources", url: "/resources",
                            links: [{name: "Case Studies", url: "/resources/case-studies"}, {name: "Whitepapers", url: "/resources/whitepapers"}, {name: "Government Programs", url: "/resources/grants"}, {name: "Technology Insights", url: "/resources/insights"}, {name: "Blogs & Articles", url: "/resources/blogs"}, {name: "News & Announcements", url: "/resources/news"}] 
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
                                    <MenuLink key={link.name} href={link.url} onClick={() => setIsMobileMenuOpen(false)}>
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