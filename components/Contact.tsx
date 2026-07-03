"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

interface Tab {
    id: string;
    num: string;
    title: string;
    badge: string;
    heading: string;
    subtext: string;
    email: string;
}

export default function Contact() {
    const tabs: Tab[] = [
        {
            id: "hq",
            num: "01",
            title: "Headquarters",
            badge: "Contact Us",
            heading: "Ready to Innovate?",
            subtext: "Whether you represent a federal agency, city office, or private enterprise, select the channel below to connect with our dedicated teams.",
            email: "info@delonti.com",
        },
        {
            id: "sales",
            num: "02",
            title: "Sales",
            badge: "Enterprise Sales",
            heading: "Drive Operational Growth",
            subtext: "Discuss pricing plans, enterprise licensing, custom IoT integrations, and system architecture deployments with our sales engineers.",
            email: "Sales@delonti.com",
        },
        {
            id: "partnerships",
            num: "03",
            title: "Partnerships",
            badge: "Global Ecosystem",
            heading: "Partner With Delonti",
            subtext: "Integrate your hardware solutions, cloud infrastructure, or specialized developer services to expand the capabilities of the Delonti platform.",
            email: "Partnerships@delonti.com",
        },
        {
            id: "government",
            num: "04",
            title: "Government Inquiries",
            badge: "Gov & Compliance",
            heading: "Secure Public Systems",
            subtext: "Discuss state-specific procurement contracts, federal Zero-Trust directives, RFP submission materials, and municipal infrastructure compliance.",
            email: "GovInquiries@delonti.com",
        },
        {
            id: "support",
            num: "05",
            title: "Support",
            badge: "Technical Support",
            heading: "Here to Assist You",
            subtext: "Submit technical support tickets, request hardware diagnostic reports, or check SLA status updates for active RFID and IoT networks.",
            email: "support@delonti.com",
        },
        {
            id: "demo",
            num: "06",
            title: "Request Demo Form",
            badge: "Product Demo",
            heading: "See Delonti in Action",
            subtext: "Schedule a live, personalized platform walkthrough with an engineer to evaluate real-time tracking dashboards, sensors, and API integrations.",
            email: "ReqDemo@delonti.com",
        },
    ];

    const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setFormData({});
        setSubmitted(false);
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Basic verification
        if (!formData.name || !formData.email) {
            setError("Name and Email are required fields.");
            setLoading(false);
            return;
        }

        // Build request body
        const customFields: Record<string, string> = {};
        
        if (activeTab.id === "sales") {
            customFields.industry = formData.industry || "Not selected";
            customFields.budget = formData.budget || "Not selected";
        } else if (activeTab.id === "partnerships") {
            customFields.partnershipType = formData.partnershipType || "Not selected";
        } else if (activeTab.id === "government") {
            customFields.agency = formData.agency || "";
            customFields.sector = formData.sector || "Not selected";
        } else if (activeTab.id === "support") {
            customFields.projectId = formData.projectId || "None";
            customFields.priority = formData.priority || "Low";
        } else if (activeTab.id === "demo") {
            customFields.targetSolution = formData.targetSolution || "Not selected";
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tabId: activeTab.id,
                    tabName: activeTab.title,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || "",
                    company: formData.company || "",
                    message: formData.message || "",
                    customFields,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong. Please try again.");
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || "Failed to submit. Please try again or contact us directly.");
        } finally {
            setLoading(false);
        }
    };

    const renderDepartmentInfo = (email: string) => {
        return (
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Corporate Phone</p>
                            <a href="tel:860-460-8428" className="text-sm font-bold text-slate-900 dark:text-white hover:text-logo dark:hover:text-blue-400 transition-colors">
                                860-460-8428
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Department Email</p>
                            <a href={`mailto:${email}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-logo dark:hover:text-blue-400 transition-colors">
                                {email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Render corresponding form fields based on active tab
    const renderFormFields = () => {
        switch (activeTab.id) {
            case "hq":
                return (
                    <div className="space-y-5">
                        {/* HQ info box with clickable phone number */}
                        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Address</p>
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                                        Delonti Inc. · 10 Dorrance Street, Providence, RI 02903
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/55 dark:border-white/5">
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Corporate Phone</p>
                                        <a href="tel:860-460-8428" className="text-sm font-bold text-slate-900 dark:text-white hover:text-logo dark:hover:text-blue-400 transition-colors">
                                            860-460-8428
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Email Address</p>
                                        <a href="mailto:info@delonti.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-logo dark:hover:text-blue-400 transition-colors">
                                            info@delonti.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Email Address *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                                <input type="tel" value={formData.phone || ""} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="860-460-8428" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Company / Org</label>
                                <input type="text" value={formData.company || ""} onChange={(e) => handleInputChange("company", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Delonti Inc." />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Message *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-28 resize-none transition-all placeholder:text-slate-400" placeholder="How can we help?"></textarea>
                        </div>
                    </div>
                );

            case "sales":
                return (
                    <div className="space-y-5">
                        {renderDepartmentInfo(activeTab.email)}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Business Email *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Company Name *</label>
                                <input required type="text" value={formData.company || ""} onChange={(e) => handleInputChange("company", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Acme Corporation" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                                <input type="tel" value={formData.phone || ""} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="(555) 000-0000" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Industry</label>
                                <select value={formData.industry || ""} onChange={(e) => handleInputChange("industry", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option value="">Select Industry</option>
                                    <option value="Supply Chain">Supply Chain & Logistics</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Government">Government & Defense</option>
                                    <option value="Healthcare">Healthcare & Biotech</option>
                                    <option value="Education">Education & Campus Safety</option>
                                    <option value="Other">Other Sector</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Estimated Budget / Scale</label>
                                <select value={formData.budget || ""} onChange={(e) => handleInputChange("budget", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option value="">Select Project Budget</option>
                                    <option value="Under $50k">Under $50,000</option>
                                    <option value="$50k - $250k">$50,000 - $250,000</option>
                                    <option value="$250k - $1M">$250,000 - $1,000,000</option>
                                    <option value="$1M+">$1,000,000 +</option>
                                    <option value="Undecided">Undecided / RFP Phase</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Inquiry / Requirements *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-36 resize-none transition-all placeholder:text-slate-400" placeholder="Please describe your asset tracking, IoT, or cybersecurity needs..."></textarea>
                        </div>
                    </div>
                );

            case "partnerships":
                return (
                    <div className="space-y-5">
                        {renderDepartmentInfo(activeTab.email)}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Contact Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Business Email *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Organization Name *</label>
                                <input required type="text" value={formData.company || ""} onChange={(e) => handleInputChange("company", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Partner Co." />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Partnership Type</label>
                                <select value={formData.partnershipType || ""} onChange={(e) => handleInputChange("partnershipType", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option value="">Select Type</option>
                                    <option value="RFID Hardware">RFID Hardware / IoT Device Vendor</option>
                                    <option value="Cloud Provider">Cloud / Infrastructure Provider</option>
                                    <option value="AI / Software Vendor">AI / Software Services Partner</option>
                                    <option value="Systems Integrator">Systems Integration Partner</option>
                                    <option value="Other">Other Collaboration</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Proposal / Collaboration Idea *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-48 resize-none transition-all placeholder:text-slate-400" placeholder="How do you envision collaborating with Delonti? Describe your product or integration..."></textarea>
                        </div>
                    </div>
                );

            case "government":
                return (
                    <div className="space-y-5">
                        {renderDepartmentInfo(activeTab.email)}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Contact Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Captain John Smith" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Official Email (.gov / .mil) *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john.smith@agency.gov" />
                                <span className="text-xs text-slate-400 dark:text-slate-550 mt-1 block">Government or official defense email preferred.</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Agency / Department *</label>
                                <input required type="text" value={formData.agency || ""} onChange={(e) => handleInputChange("agency", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Department of Defense" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Sector</label>
                                <select value={formData.sector || ""} onChange={(e) => handleInputChange("sector", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option value="">Select Level</option>
                                    <option value="Federal / Military">Federal Agency / DoD</option>
                                    <option value="State Agency">State-level Government</option>
                                    <option value="Municipal / County">Municipal / Local Government</option>
                                    <option value="International">International Government Body</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Message / RFP Details *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-44 resize-none transition-all placeholder:text-slate-400" placeholder="Describe your compliance standards, secure facility requirements, or RFP details..."></textarea>
                        </div>
                    </div>
                );

            case "support":
                return (
                    <div className="space-y-5">
                        {renderDepartmentInfo(activeTab.email)}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Registered Email *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john@client.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Project ID / SLA Reference</label>
                                <input type="text" value={formData.projectId || ""} onChange={(e) => handleInputChange("projectId", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="DEL-809-A" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Severity Level</label>
                                <select value={formData.priority || ""} onChange={(e) => handleInputChange("priority", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                    <option value="Low">Low - Informational / Guidance</option>
                                    <option value="Medium">Medium - Operational Incident</option>
                                    <option value="High">High - Production Degraded</option>
                                    <option value="Critical">Critical - Production Outage / Security Breach</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Issue Description *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-44 resize-none transition-all placeholder:text-slate-400" placeholder="Describe the error, warning code, or system behavior you are experiencing..."></textarea>
                        </div>
                    </div>
                );

            case "demo":
                return (
                    <div className="space-y-5">
                        {renderDepartmentInfo(activeTab.email)}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name *</label>
                                <input required type="text" value={formData.name || ""} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Work Email *</label>
                                <input required type="email" value={formData.email || ""} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="john@enterprise.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Organization *</label>
                                <input required type="text" value={formData.company || ""} onChange={(e) => handleInputChange("company", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Enterprise Inc." />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Phone Number *</label>
                                <input required type="tel" value={formData.phone || ""} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="860-460-8428" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Target Solution / Area of Interest</label>
                            <select value={formData.targetSolution || ""} onChange={(e) => handleInputChange("targetSolution", e.target.value)} className="w-full bg-gray-50 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white appearance-none transition-all cursor-pointer">
                                <option value="">Select Platform Demo</option>
                                <option value="Asset Tracking">Asset Tracking & Logistics</option>
                                <option value="Fleet Operations">Fleet & Field Operations</option>
                                <option value="Workforce Visibility">Workforce Visibility & Safety</option>
                                <option value="Infrastructure Monitoring">Smart Infrastructure Sensors</option>
                                <option value="Smart Service Kiosks">Smart Public Service Kiosks</option>
                                <option value="Multiple">Full Platform Overview</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-widest mb-2">Schedule Preferences / Custom Needs *</label>
                            <textarea required value={formData.message || ""} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full bg-gray-550 dark:bg-slate-955 border border-gray-150 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white h-32 resize-none transition-all placeholder:text-slate-400" placeholder="Indicate preferred days/times, estimated seat counts, or details you want covered..."></textarea>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Title & Dynamic Tab Stack */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-between h-auto lg:min-h-[660px] py-1">
                        {/* Dynamic Top Content (Fixed Height to prevent shifts) */}
                        <div className="h-auto lg:h-[260px] flex flex-col justify-end pb-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary dark:text-blue-400 bg-primary/5 dark:bg-blue-500/5 border border-primary/10 dark:border-blue-500/10 rounded-md py-1 px-3 w-fit mb-4">
                                        {activeTab.badge}
                                    </span>
                                    
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-[1.1] text-slate-900 dark:text-white uppercase">
                                        {activeTab.heading}
                                    </h2>
                                    
                                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-4 max-w-md">
                                        {activeTab.subtext}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Interactive Tab List (Click-only switching) */}
                        <div className="flex flex-col gap-0 border-l border-slate-200 dark:border-slate-800/80">
                            {tabs.map((tab) => {
                                const isActive = activeTab.id === tab.id;
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab)}
                                        className={`cursor-pointer group flex flex-col pl-6 py-[18px] border-b border-slate-150 dark:border-white/5 last:border-b-0 transition-all duration-300 ${isActive ? 'bg-slate-50/80 dark:bg-slate-900/10 border-l-2 border-l-primary dark:border-l-blue-500 -ml-[2px]' : 'hover:bg-slate-50/50 dark:hover:bg-slate-900/20'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`text-sm font-display font-black tracking-tighter transition-all duration-300 ${isActive ? 'text-primary dark:text-blue-400' : 'text-slate-300 dark:text-slate-700 group-hover:text-primary dark:group-hover:text-blue-400'}`}>
                                                {tab.num}.
                                            </span>
                                            <h3 className={`text-base md:text-lg font-bold tracking-tight transition-all duration-300 uppercase ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-650 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                                                {tab.title}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Form Card (Fixed height on desktop to end at the same line) */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-stretch h-auto lg:min-h-[660px]">
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-150 dark:border-white/5 relative overflow-hidden text-center py-16 flex flex-col items-center justify-center h-full w-full"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="w-16 h-16 bg-green-500/10 dark:bg-green-500/5 rounded-full flex items-center justify-center text-green-500 dark:text-green-400 mb-6 border border-green-500/20">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">Submission Received</h4>
                                    <p className="text-slate-550 dark:text-slate-400 text-sm max-w-sm leading-relaxed mb-10 font-medium">
                                        {activeTab.id === "support"
                                            ? "Your technical support ticket has been registered. An engineer will reach out to your registered email shortly."
                                            : activeTab.id === "demo"
                                            ? "Thank you for requesting a live walkthrough. Our scheduling desk will send an invitation shortly."
                                            : "Thank you for contacting Delonti. We have captured your request and our representatives will be in touch shortly."}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({});
                                        }}
                                        className="bg-logo hover:bg-logo/90 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_-5px_var(--color-logo)] text-xs cursor-pointer"
                                    >
                                        Send Another Request
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.25 }}
                                    className="bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-150 dark:border-white/5 relative overflow-hidden h-full flex flex-col justify-between w-full"
                                >
                                    {/* Accent Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col flex-1 justify-between h-full">
                                        
                                        {/* Top section: Title and Fields */}
                                        <div className="space-y-6">
                                            <div className="relative z-10">
                                                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                                                    {activeTab.title} Form
                                                </h3>
                                                <div className="w-12 h-0.5 bg-primary dark:bg-blue-500" />
                                            </div>

                                            {renderFormFields()}
                                        </div>

                                        {/* Bottom section: Errors and Submit Button */}
                                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                            {error && (
                                                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-red-500 text-xs font-semibold">
                                                    {error}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="group relative w-full bg-logo hover:bg-logo/90 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] overflow-hidden flex items-center justify-center gap-2 cursor-pointer text-sm"
                                            >
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        <span>Submitting...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                                        <span className="relative z-10">Submit Inquiry</span>
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}