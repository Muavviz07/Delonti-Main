"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16 dark:bg-black dark:border-t dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        {/* WRAPPED LOGO IN LINK TO HOME & REDUCED SIZE */}
                        <div className="flex items-center gap-2 mb-6">
                            <Link href="/">
                                <Image
                                    src="/logo.png" 
                                    alt="Delonti Logo"
                                    width={140} 
                                    height={35}
                                    className="h-6 lg:h-8 w-auto object-contain hover:opacity-80 transition-opacity" 
                                />
                            </Link>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs dark:text-slate-200">
                            Delivering innovative RFID, IoT, and Cybersecurity solutions for
                            critical infrastructure and enterprise growth.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Sectors</h5>
                        <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-200">
                            <li>
                                <Link href="/state" className="hover:text-white transition-colors">
                                    State Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/federal" className="hover:text-white transition-colors">
                                    Federal Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/enterprise" className="hover:text-white transition-colors">
                                    Private Sector
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Company</h5>
                        <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-200">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/careers" className="hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-white transition-colors">
                                    Insights & Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/federal/contracting" className="hover:text-white transition-colors">
                                    Contract Vehicles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Newsletter</h5>
                        <p className="text-sm text-slate-300 mb-4 dark:text-slate-200">
                            Stay updated with our latest federal and commercial tech insights.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-white outline-none text-white placeholder-slate-300 dark:placeholder-slate-400"
                            />
                            <button
                                type="button"
                                className="bg-white text-primary px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-slate-100 transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-300">
                    <p>© {new Date().getFullYear()} Delonti Technology Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/compliance" className="hover:text-white transition-colors">
                            Security Compliance
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}