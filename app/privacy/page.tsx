import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const listClass = "list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4";

    return (
        <LegalPageLayout
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your personal information at Delonti."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        At Delonti, we respect your privacy and are committed to protecting the personal information you provide through our website, products, and services. This policy explains our practices regarding the information we gather and how we safeguard it.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Information We Collect</h2>
                    <p className={textClass}>We may collect the following types of information when you interact with our website or services:</p>
                    <ul className={listClass}>
                        <li>Name and contact details</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Organization or business information</li>
                        <li>Website usage statistics and navigation data</li>
                        <li>Technical device details (IP address, browser type, operating system)</li>
                        <li>Information explicitly submitted through contact forms, newsletter sign-ups, or demo requests</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>How We Use Information</h2>
                    <p className={textClass}>We use the collected information to support our operations, including to:</p>
                    <ul className={listClass}>
                        <li>Respond to your direct inquiries and service requests</li>
                        <li>Provide requested informational materials, product literature, and project briefs</li>
                        <li>Deliver, manage, and maintain our systems, hardware, and services</li>
                        <li>Improve, optimize, and customize our website user experience and digital presence</li>
                        <li>Communicate important product updates, security advisories, and technical alerts</li>
                        <li>Analyze website performance, analytics, traffic flows, and operational trends</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Data Sharing</h2>
                    <p className={textClass}>
                        Delonti does not sell personal information to third parties. Information may be shared with trusted service providers, sub-processors, or contractors supporting our business operations under strict confidentiality agreements.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Data Security</h2>
                    <p className={textClass}>
                        We implement administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, alteration, disclosure, loss, or misuse. Our operational environments align with industry security standards.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Cookies</h2>
                    <p className={textClass}>
                        Our website uses cookies and similar tracking technologies to improve user experience, store preferences, analyze marketing campaigns, and ensure website functionality. You can manage cookies at any time through your browser settings or our Cookie Preferences page.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Third-Party Services</h2>
                    <p className={textClass}>
                        Our website may contain links to third-party websites, applications, or resources. Delonti is not responsible for the privacy practices, content, security protocols, or policies of external websites.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Your Rights</h2>
                    <p className={textClass}>
                        Depending on applicable local, state, or federal laws, users may request access, correction, transfer, or deletion of their personal information held by Delonti. To execute these rights, please contact our privacy officer.
                    </p>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Contact</h2>
                    <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-bold mb-1">Delonti Technology Solutions</p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Corporate Compliance Department</p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-2">Providence, Rhode Island, USA</p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        Email: <a href="mailto:info@delonti.com" className="text-logo hover:underline font-semibold">info@delonti.com</a>
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
