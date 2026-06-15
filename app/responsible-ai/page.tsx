import LegalPageLayout from "@/components/LegalPageLayout";

export default function ResponsibleAIStatementPage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";

    return (
        <LegalPageLayout
            title="Responsible AI Statement"
            subtitle="Our principles and commitments to developing and using AI technologies ethically, transparently, and securely."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        At Delonti, we build intelligent infrastructure systems by integrating RFID data flows, IoT signals, and advanced Artificial Intelligence models. We believe AI holds immense power to improve human efficiency, and we are committed to ensuring its deployment is responsible, transparent, secure, and fair.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Human-Centered Approach</h2>
                    <p className={textClass}>
                        We design AI systems to empower and assist human decision-making, not to bypass or replace human intelligence. Our models are tools optimized to organize messy sensor datasets, detect anomalies, and suggest operational pathways, keeping human operators in control of critical actions.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Transparency & Explainability</h2>
                    <p className={textClass}>
                        We avoid "black box" models for mission-critical operations. We strive to provide explainable algorithms, clear confidence metrics, and interpretable logic for all AI-driven recommendations, enabling our clients to understand the rationale behind automated warnings or suggestions.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Privacy & Security by Design</h2>
                    <p className={textClass}>
                        AI training and processing pipelines are integrated into our strict data privacy and encryption frameworks. We use data anonymization, secure cloud sandboxes, and data isolation controls to ensure that customer data is never exposed or cross-contaminated during model evaluation.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Fairness & Bias Mitigation</h2>
                    <p className={textClass}>
                        We proactively evaluate our training data, operational assumptions, and logic layers to minimize unfair bias. Our goal is to create AI tools that operate equitably and serve diverse communities and workforce environments without introducing disparate impacts.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Accountability & Oversight</h2>
                    <p className={textClass}>
                        We maintain clear accountability paths for all algorithmic suggestions. Human oversight remains a requirement for decisions that involve workforce safety, facility compliance, security posture updates, or critical business outcomes.
                    </p>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Continuous Evaluation</h2>
                    <p className={textClass}>
                        The AI landscape is rapidly evolving. Delonti continuously tests and updates its model parameters, security guardrails, and ethical frameworks to align with state-of-the-art standards, scientific progress, and regulatory guidelines.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
