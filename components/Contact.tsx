export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Contact Info */}
                    <div>
                        {/* Changed text-[#6366f1] to text-primary */}
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary dark:text-slate-300 mb-4 font-display">
                            Contact Us
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white mb-6 tracking-wide font-display">
                            Ready to Innovate?
                        </h3>
                        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light mb-10 leading-relaxed max-w-lg">
                            Whether you're a city official, federal agency, or private enterprise, we're here to help you deploy next-generation RFID, IoT, and Cybersecurity solutions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/5 transition-transform duration-500 group-hover:scale-110">
                                    {/* Changed text-[#6366f1] to text-primary */}
                                    <svg className="w-6 h-6 text-primary dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                                    <p className="font-medium text-slate-900 dark:text-white tracking-wide">Contact Data 1</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/5 transition-transform duration-500 group-hover:scale-110">
                                    {/* Changed text-[#6366f1] to text-primary */}
                                    <svg className="w-6 h-6 text-primary dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                                    <p className="font-medium text-slate-900 dark:text-white tracking-wide">Contact Data 2</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white dark:bg-slate-800/50 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden">
                        {/* Changed the hardcoded hex to use your primary color variable for the glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                                    {/* Changed focus ring color to focus:ring-primary */}
                                    <input suppressHydrationWarning type="text" className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                                    {/* Changed focus ring color to focus:ring-primary */}
                                    <input suppressHydrationWarning type="email" className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Inquiry Type / Sector</label>
                                {/* Changed focus ring color to focus:ring-primary */}
                                <select suppressHydrationWarning className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option>State Solutions</option>
                                    <option>Federal Solutions</option>
                                    <option>Private Sector</option>
                                    <option>RFP Submission</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                                {/* Changed focus ring color to focus:ring-primary */}
                                <textarea suppressHydrationWarning className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-32 resize-none transition-all" placeholder="How can we help?"></textarea>
                            </div>
                            {/* Changed button colors to use your primary brand variable */}
                            <button suppressHydrationWarning className="w-full bg-primary hover:bg-primary/90 text-white font-semibold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}