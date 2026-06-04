"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16 dark:bg-black dark:border-t dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        {/* WRAPPED LOGO IN LINK TO HOME & REDUCED SIZE */}
                        <div className="flex items-center gap-2 mb-6">
                            <Link href="/" className="hover:opacity-80 transition-opacity">
                                <Image
                                    src="/logo-dark(blue-text).png"
                                    alt="Delonti Logo"
                                    width={150}
                                    height={38}
                                    className="h-7 lg:h-8 w-auto object-contain dark:hidden"
                                />
                                <Image
                                    src="/logo-light-blue.png"
                                    alt="Delonti Logo"
                                    width={140}
                                    height={35}
                                    className="hidden dark:block h-7 lg:h-9 w-auto object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs dark:text-slate-200">
                            Delivering innovative RFID, IoT, and Cybersecurity solutions for
                            critical infrastructure and enterprise growth.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-5 mt-8">
                            <Link href="https://facebook.com" target="_blank" className="text-slate-300 hover:text-white transition-all transform hover:scale-110">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" className="text-slate-300 hover:text-white transition-all transform hover:scale-110">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-white transition-all transform hover:scale-110">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://youtube.com" target="_blank" className="text-slate-300 hover:text-white transition-all transform hover:scale-110">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase tracking-wider text-xs opacity-70">Industries</h5>
                        <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-200">
                            <li><Link href="/industries/government" className="hover:text-white transition-colors">Government</Link></li>
                            <li><Link href="/industries/education" className="hover:text-white transition-colors">Education</Link></li>
                            <li><Link href="/industries/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
                            <li><Link href="/private/enterprise/industrial-iot" className="hover:text-white transition-colors">Manufacturing</Link></li>
                            <li><Link href="/industries/supply-chain" className="hover:text-white transition-colors">Supply Chain</Link></li>
                            <li><Link href="/industries/public-safety" className="hover:text-white transition-colors">Public Safety</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase tracking-wider text-xs opacity-70">Solutions</h5>
                        <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-200">
                            <li><Link href="/solutions/asset-tracking" className="hover:text-white transition-colors">Asset Tracking</Link></li>
                            <li><Link href="/solutions/inventory-intelligence" className="hover:text-white transition-colors">Inventory Intelligence</Link></li>
                            <li><Link href="/solutions/workforce-safety" className="hover:text-white transition-colors">Workforce Safety</Link></li>
                            <li><Link href="/solutions/facility-intelligence" className="hover:text-white transition-colors">Facility Intelligence</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase tracking-wider text-xs opacity-70">Company</h5>
                        <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-200">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/about/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Insights & Resources</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
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
