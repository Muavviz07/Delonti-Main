import LegalPageLayout from "@/components/LegalPageLayout";

export default function SecurityCompliancePage() {
    const textClass = "text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4";
    const headingClass = "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4";
    const listClass = "list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4";

    return (
        <LegalPageLayout
            title="Security & Compliance"
            subtitle="At Delonti, security is foundational to our RFID, IoT, and AI-powered solutions."
            lastUpdated="June 15, 2026"
        >
            <div className="space-y-8">
                <section>
                    <p className={textClass}>
                        Security is not an add-on; it is the core foundation of every RFID system, IoT integration, and software module we build at Delonti. We are committed to maintaining the highest security protocols to safeguard public, enterprise, and governmental networks.
                    </p>
                </section>

                <section>
                    <h2 className={headingClass}>Security Principles</h2>
                    <p className={textClass}>We guide our product design and corporate operations using five core principles:</p>
                    <ul className={listClass}>
                        <li><strong>Secure by Design:</strong> Security checks and threat models are integrated at the initial phase of our development lifecycle.</li>
                        <li><strong>Least Privilege Access:</strong> Access to systems and user data is limited to only authorized applications and roles required to complete tasks.</li>
                        <li><strong>Defense in Depth:</strong> Multiple layers of safety, detection, and isolation controls protect against failures or compromises.</li>
                        <li><strong>Continuous Monitoring:</strong> Real-time logging, metrics tracking, and scanning identify anomalies in hardware and cloud infrastructures.</li>
                        <li><strong>Risk-Based Security:</strong> We prioritize controls based on comprehensive risk assessments, federal threat models, and vulnerability reports.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Security Controls</h2>
                    <p className={textClass}>We implement rigorous security controls across all layers of our platforms, including:</p>
                    <ul className={listClass}>
                        <li><strong>Data Encryption:</strong> Encryption in transit using TLS 1.3 or higher, and AES-256 encryption at rest for all database structures and storage volumes.</li>
                        <li><strong>Access Control:</strong> Role-Based Access Control (RBAC), multi-factor authentication (MFA) supported across all portals, and secure identity systems.</li>
                        <li><strong>Monitoring:</strong> Immutable system audit logs, real-time event monitoring, and warning flags for rapid security incident detection.</li>
                        <li><strong>Infrastructure Security:</strong> Secure cloud environments on hardened, SOC 2 compliant host nodes, strict network segmentation, and geographically isolated backup disaster recovery.</li>
                    </ul>
                </section>

                <section>
                    <h2 className={headingClass}>Compliance Alignment</h2>
                    <p className={textClass}>Our systems and deployment processes are designed to align with and support compliance requirements across regulated industries:</p>
                    <ul className={listClass}>
                        <li><strong>NIST Cybersecurity Framework:</strong> Adherence to CSF guidelines for identifying, protecting, detecting, responding, and recovering.</li>
                        <li><strong>CISA Best Practices:</strong> Alignment with Cybersecurity and Infrastructure Security Agency mandates for critical systems.</li>
                        <li><strong>HIPAA Considerations:</strong> Protecting patients' medical identities and clinical asset logs in medical networks.</li>
                        <li><strong>FERPA Considerations:</strong> Safeguarding educational details in student and municipal asset networks.</li>
                        <li><strong>CJIS-Aware Environments:</strong> Controls ensuring secure processing and storage of Criminal Justice Information.</li>
                        <li><strong>State and Local Governmental Mandates:</strong> Supporting unique municipal compliance policies and secure system hosting.</li>
                    </ul>
                </section>

                <section className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <h2 className={headingClass}>Responsible Security</h2>
                    <p className={textClass}>
                        Security is an ongoing, dynamic process. Delonti regularly reviews its system designs, performs code analyses, and schedules network penetration tests to verify our defenses against emerging cyber threats. For vulnerability disclosures or compliance requests, please email our Security response desk.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
