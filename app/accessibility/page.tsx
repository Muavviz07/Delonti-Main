import LegalPageLayout from "@/components/LegalPageLayout";

export default function AccessibilityStatementPage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const listClass = "list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4";

    return (
        <LegalPageLayout
            title="Accessibility Statement"
            subtitle="Delonti is committed to providing an accessible, inclusive digital experience for all users."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        At Delonti, we believe the internet, corporate web spaces, and hardware portals should be usable and accessible to everyone, regardless of physical or cognitive ability. We design our web interfaces, documentation, and user-facing dashboards with accessibility at the forefront.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Our Commitment</h2>
                    <p className={textClass}>
                        We strive to ensure our public website and software interfaces are fully usable by individuals of all abilities, including those who navigate using screen readers, keyboard-only input, voice activation software, or visual adjustments. We follow inclusive design principles to create a seamless user journey.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Accessibility Goals</h2>
                    <p className={textClass}>To maintain accessible interfaces, we work to align our digital products with recognized standards, specifically targeting:</p>
                    <ul className={listClass}>
                        <li><strong>WCAG 2.1 Guidelines:</strong> We target Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA as our baseline implementation standard.</li>
                        <li><strong>Semantic HTML structure:</strong> Ensuring screen reader tools can cleanly parse document headers, links, and layout elements.</li>
                        <li><strong>Contrast & Sizing:</strong> Selecting text contrast ratios and font sizing configurations that support legibility.</li>
                        <li><strong>Interactive Focus States:</strong> Providing visible focus rings and keyboard-friendly navigation flows.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Ongoing Improvements</h2>
                    <p className={textClass}>
                        Accessibility is an active, continuous improvement process at Delonti. We periodically evaluate our website layouts, PDF documentation, and dashboard pages using automated accessibility testing tools and manual screen reader audits. We adjust our components to remove newly identified barriers.
                    </p>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Need Assistance?</h2>
                    <p className={textClass}>
                        If you encounter any accessibility barriers while using our website or platforms, or if you require documentation in an alternative format, please contact us:
                    </p>
                    <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 font-bold mb-1">Email: <a href="mailto:info@delonti.com" className="text-logo hover:underline">info@delonti.com</a></p>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        We welcome your feedback and will make reasonable efforts to address your accessibility concerns and deliver content in a format that suits your needs.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
