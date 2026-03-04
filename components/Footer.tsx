import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <svg
                                className="w-6 h-6"
                                fill="white"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" />
                            </svg>
                            <span className="text-xl font-black">DELONTI</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            Delivering innovative RFID, IoT, and Cybersecurity solutions for
                            critical infrastructure and enterprise growth.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Sectors</h5>
                        <ul className="space-y-4 text-sm text-slate-300">
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
                                <Link href="/private" className="hover:text-white transition-colors">
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
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Insights & Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Contract Vehicles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Newsletter</h5>
                        <p className="text-sm text-slate-300 mb-4">
                            Stay updated with our latest federal and commercial tech insights.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-white outline-none text-white placeholder-slate-300"
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

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} Delonti Technology Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Security Compliance
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
