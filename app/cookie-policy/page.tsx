import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function CookiePolicyPage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const listClass = "list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4";

    return (
        <LegalPageLayout
            title="Cookie Policy"
            subtitle="Understand how Delonti uses cookies and similar tracking technologies to improve our platform."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        Delonti uses cookies, web beacons, and similar tracking technologies to improve our website's functionality, gather analytics, and support our promotional and communication campaigns. This policy explains what cookies are and how you can manage them.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>What Are Cookies?</h2>
                    <p className={textClass}>
                        Cookies are small text files that websites transfer to your browser or device memory. They enable the website to recognize your browser, remember user settings or configurations, understand how you interact with site features, and retrieve information on subsequent visits.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Types of Cookies We Use</h2>
                    <p className={textClass}>We categorize the cookies on our website into four main classes:</p>
                    <ul className={listClass}>
                        <li><strong>Essential Cookies (Always Enabled):</strong> These cookies are strictly required for the core technical operation of our website. They support essential features such as page navigation, theme preference retention (light vs. dark), secure portals access, and security controls. The website cannot function correctly without these cookies.</li>
                        <li><strong>Analytics Cookies:</strong> These cookies collect anonymous, aggregated statistics that help us understand how visitors interact with our website, what pages are most popular, where users face navigation bottlenecks, and overall site traffic metrics. This helps us optimize and improve our layout and content structure.</li>
                        <li><strong>Functional Cookies:</strong> These cookies enable enhanced personalization and advanced interactive features. They remember choices you make (such as language preferences or previous contact form selections) to provide a more tailored, efficient, and seamless browsing experience.</li>
                        <li><strong>Marketing Cookies:</strong> These cookies track user engagement across different platforms to measure the effectiveness of our marketing and outreach campaigns. They help us deliver relevant company announcements, content, and updates to you based on your browsing interests.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Managing Cookies</h2>
                    <p className={textClass}>
                        You have complete control over how cookies are utilized on your device. You can adjust your preferences at any time:
                    </p>
                    <ul className={listClass}>
                        <li>
                            Visit our interactive <Link href="/cookie-preferences" className="text-logo hover:underline font-semibold">Cookie Preferences Center</Link> to toggle Optional cookies (Analytics, Functional, Marketing) on or off.
                        </li>
                        <li>
                            Configure your web browser to block or delete cookies entirely. Please note that blocking essential cookies may disrupt basic website features.
                        </li>
                    </ul>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Contact</h2>
                    <p className={textClass}>
                        For questions regarding our Cookie Policy, please contact our compliance desk:
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Email: <a href="mailto:info@delonti.com" className="text-logo hover:underline font-semibold">info@delonti.com</a>
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
