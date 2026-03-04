"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

// Reusable Mega Menu Link Component
const MenuLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link 
        href={href} 
        onClick={onClick}
        className="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors py-1.5"
    >
        {children}
    </Link>
);

// Reusable Mega Menu Header Component
const MenuHeader = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-white/10 pb-2">
        {children}
    </h4>
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
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 h-full">
                        
                        {/* HOME */}
                        <div className="h-full flex items-center px-2">
                            <Link href="/" className="text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors">
                                Home
                            </Link>
                        </div>

                        {/* ABOUT */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/about" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                About <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-4 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:border-t before:border-l before:border-gray-100 dark:before:border-white/10 before:rotate-45">
                                    <MenuLink href="/about/overview">Company Overview</MenuLink>
                                    <MenuLink href="/about/partners">Partners & Alliances</MenuLink>
                                    <MenuLink href="/about/careers">Careers</MenuLink>
                                    <div className="h-px bg-gray-100 dark:bg-white/10 my-1"></div>
                                    <MenuLink href="/contact">Talk to an Expert</MenuLink>
                                </div>
                            </div>
                        </div>

                        {/* STATE & LOCAL */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/state" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                State & Local <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] left-1/2 -translate-x-1/4 w-[600px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <MenuHeader>Core Services</MenuHeader>
                                            <MenuLink href="/state">State Overview</MenuLink>
                                            <MenuLink href="/state/programs">Programs & Initiatives</MenuLink>
                                            <MenuLink href="/state/public-safety">Public Safety Solutions</MenuLink>
                                            <MenuLink href="/state/transportation">Transportation & Mobility</MenuLink>
                                            <MenuLink href="/state/hhs">Health & Human Services (HHS)</MenuLink>
                                            <MenuLink href="/state/education">Education & Campus Solutions</MenuLink>
                                        </div>
                                        <div>
                                            <MenuHeader>Infrastructure & Tech</MenuHeader>
                                            <MenuLink href="/state/smart-city">Smart City & Infrastructure</MenuLink>
                                            <MenuLink href="/state/social-impact">Homeless & Social Impact Solutions</MenuLink>
                                            <MenuLink href="/state/data">Data, Analytics & Reporting</MenuLink>
                                            <MenuLink href="/state/cybersecurity">Cybersecurity & Compliance</MenuLink>
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                <MenuLink href="/solutions">Learn More: State Use Cases →</MenuLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FEDERAL & DEFENSE */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/federal" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Federal <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[550px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <MenuHeader>Defense & Logistics</MenuHeader>
                                            <MenuLink href="/federal">Federal Overview</MenuLink>
                                            <MenuLink href="/federal/rfid">Secure RFID & Logistics</MenuLink>
                                            <MenuLink href="/federal/acquisition">Acquisition & Contracting</MenuLink>
                                            <MenuLink href="/federal/workforce">Workforce & Staffing Solutions</MenuLink>
                                            <MenuLink href="/federal/ato">ATO, Risk & Compliance</MenuLink>
                                        </div>
                                        <div>
                                            <MenuHeader>Tech & Modernization</MenuHeader>
                                            <MenuLink href="/federal/cybersecurity">Cybersecurity & Zero Trust</MenuLink>
                                            <MenuLink href="/federal/cloud">Cloud & IT Modernization</MenuLink>
                                            <MenuLink href="/federal/data">Data, AI & Automation</MenuLink>
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                <MenuLink href="/federal/use-cases">Federal Use Cases →</MenuLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ENTERPRISE & COMMERCIAL */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/enterprise" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Enterprise <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[650px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <MenuHeader>Capabilities</MenuHeader>
                                            <MenuLink href="/enterprise">Enterprise Overview</MenuLink>
                                            <MenuLink href="/enterprise/digital-transformation">Digital Transformation & Automation</MenuLink>
                                            <MenuLink href="/enterprise/supply-chain">Supply Chain Visibility</MenuLink>
                                            <MenuLink href="/enterprise/cybersecurity">Cybersecurity & Risk Management</MenuLink>
                                            <MenuLink href="/enterprise/cloud">Cloud & DevOps</MenuLink>
                                            <MenuLink href="/enterprise/managed-services">Managed Services</MenuLink>
                                            <MenuLink href="/enterprise/workforce">Workforce & Staffing Solutions</MenuLink>
                                        </div>
                                        <div>
                                            <MenuHeader>Industries</MenuHeader>
                                            <MenuLink href="/industries/logistics">Logistics & Transportation</MenuLink>
                                            <MenuLink href="/industries/manufacturing">Manufacturing</MenuLink>
                                            <MenuLink href="/industries/retail">Retail & Warehousing</MenuLink>
                                            <MenuLink href="/industries/energy">Energy & Utilities</MenuLink>
                                            <MenuLink href="/industries/tech">Technology & SaaS</MenuLink>
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                                                <MenuLink href="/enterprise/case-studies">View Case Studies →</MenuLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TECHNOLOGY SOLUTIONS */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/technology" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Technology <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] left-1/2 -translate-x-3/4 w-[850px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-8">
                                    <div className="grid grid-cols-3 gap-x-8 gap-y-10">
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
                                            <MenuLink href="/tech/iot/monitoring">Real-Time Monitoring</MenuLink>
                                        </div>
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
                                        <div>
                                            <MenuHeader>Software & IT Services</MenuHeader>
                                            <MenuLink href="/tech/software/custom">Custom Software Development</MenuLink>
                                            <MenuLink href="/tech/software/cloud">Cloud & DevOps</MenuLink>
                                            <MenuLink href="/tech/software/integration">System Integration</MenuLink>
                                            <MenuLink href="/tech/software/modernization">IT Modernization</MenuLink>
                                        </div>
                                        <div>
                                            <MenuHeader>Workforce Solutions</MenuHeader>
                                            <MenuLink href="/tech/workforce/technical">Technical Staffing</MenuLink>
                                            <MenuLink href="/tech/workforce/project">Project-Based Teams</MenuLink>
                                            <MenuLink href="/tech/workforce/managed">Managed Support</MenuLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INSIGHTS & RESOURCES */}
                        <div className="relative group h-full flex items-center px-2">
                            <Link href="/resources" className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-white transition-colors h-full py-6">
                                Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:-rotate-180" />
                            </Link>
                            <div className="absolute top-[70px] right-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-xl p-4 flex flex-col gap-1 relative before:absolute before:-top-2 before:right-8 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:border-t before:border-l before:border-gray-100 dark:before:border-white/10 before:rotate-45">
                                    <MenuLink href="/resources/case-studies">Case Studies</MenuLink>
                                    <MenuLink href="/resources/whitepapers">Whitepapers</MenuLink>
                                    <MenuLink href="/resources/grants">Government Programs & Grants</MenuLink>
                                    <MenuLink href="/resources/insights">Technology Insights</MenuLink>
                                    <MenuLink href="/resources/blogs">Blogs & Articles</MenuLink>
                                    <MenuLink href="/resources/news">News & Announcements</MenuLink>
                                </div>
                            </div>
                        </div>

                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <ThemeToggle />
                        <Link href="/contact" className="bg-primary text-white px-5 xl:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5">
                            Get Started
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
                            title: "State & Local", url: "/state",
                            links: [{name: "State Overview", url: "/state"}, {name: "Programs & Initiatives", url: "/state/programs"}, {name: "Public Safety Solutions", url: "/state/public-safety"}, {name: "Transportation & Mobility", url: "/state/transportation"}, {name: "Health & Human Services", url: "/state/hhs"}, {name: "Education & Campus", url: "/state/education"}, {name: "Smart City & Infrastructure", url: "/state/smart-city"}, {name: "Homeless & Social Impact", url: "/state/social-impact"}, {name: "Data, Analytics & Reporting", url: "/state/data"}, {name: "Cybersecurity & Compliance", url: "/state/cybersecurity"}, {name: "State Use Cases", url: "/solutions"}] 
                        },
                        { 
                            title: "Federal & Defense", url: "/federal",
                            links: [{name: "Federal Overview", url: "/federal"}, {name: "Secure RFID & Logistics", url: "/federal/rfid"}, {name: "Cybersecurity & Zero Trust", url: "/federal/cybersecurity"}, {name: "Cloud & IT Modernization", url: "/federal/cloud"}, {name: "Data, AI & Automation", url: "/federal/data"}, {name: "ATO, Risk & Compliance", url: "/federal/ato"}, {name: "Acquisition & Contracting", url: "/federal/acquisition"}, {name: "Workforce & Staffing", url: "/federal/workforce"}, {name: "Federal Use Cases", url: "/federal/use-cases"}] 
                        },
                        { 
                            title: "Enterprise & Commercial", url: "/enterprise",
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
                                {/* Clicking the text redirects to the main category page */}
                                <Link href={section.url} onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-slate-900 dark:text-white flex-1">
                                    {section.title}
                                </Link>
                                {/* Clicking the arrow expands the accordion */}
                                <button onClick={() => toggleMobileMenu(section.title)} className="p-2 -mr-2 text-slate-500">
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === section.title ? '-rotate-180 text-primary dark:text-white' : ''}`} />
                                </button>
                            </div>
                            <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${activeMobileMenu === section.title ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                {section.links.map(link => (
                                    <MenuLink key={link.name} href={link.url} onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </MenuLink>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center px-6 py-4 rounded-xl text-base font-bold tracking-wide mt-4 shadow-lg">
                        Get Started Today
                    </Link>
                </div>
            </div>
        </header>
    );
}