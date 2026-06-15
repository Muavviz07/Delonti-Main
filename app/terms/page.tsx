import LegalPageLayout from "@/components/LegalPageLayout";

export default function TermsOfServicePage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const listClass = "list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4";

    return (
        <LegalPageLayout
            title="Terms of Service"
            subtitle="Please read these terms carefully before accessing or using the Delonti website."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        By accessing or using the Delonti website, services, platforms, and portals, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use this site.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Website Use</h2>
                    <p className={textClass}>
                        You agree to use this website only for lawful purposes, business inquiries, and in accordance with these Terms and all applicable local, state, and federal laws.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Intellectual Property</h2>
                    <p className={textClass}>
                        All content, graphics, logos, images, software, trademarks, icons, and text materials on this website are the exclusive property of Delonti, Inc. or its licensors and are protected by applicable copyright, trademark, and intellectual property laws. Unauthorized reproduction, modification, or distribution of any materials is strictly prohibited.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>User Conduct</h2>
                    <p className={textClass}>When using this website, users are strictly prohibited from:</p>
                    <ul className={listClass}>
                        <li>Attempting to gain unauthorized access to our web servers, database systems, or networks</li>
                        <li>Interfering with website security, server performance, page delivery, or operational integrity</li>
                        <li>Uploading, emailing, or introducing computer viruses, Trojan horses, worms, or other malicious software</li>
                        <li>Misrepresenting their identity, corporate affiliation, credentials, or intentions in contact forms or portals</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Disclaimer</h2>
                    <p className={textClass}>
                        The information provided on this website is for informational and educational purposes only. While we endeavor to keep the website accurate and up-to-date, materials, technical specifications, and resources may be modified, removed, or updated without notice. We make no warranties of any kind regarding accuracy or uptime.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Limitation of Liability</h2>
                    <p className={textClass}>
                        To the maximum extent permitted by law, Delonti shall not be liable for any direct, indirect, special, incidental, consequential, or punitive damages (including loss of profits, data, or business opportunities) arising from your access to, use of, or inability to use this website or its content.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Governing Law</h2>
                    <p className={textClass}>
                        These Terms of Service and any dispute arising from your use of this website shall be governed by, interpreted under, and enforced in accordance with the laws of the State of Rhode Island, United States of America, without regard to its conflict of law principles.
                    </p>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Contact</h2>
                    <p className={textClass}>
                        If you have questions regarding these Terms, please contact us at:
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Email: <a href="mailto:info@delonti.com" className="text-logo hover:underline font-semibold">info@delonti.com</a>
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
