"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { CheckCircle, ChevronRight, Upload, Loader2, X, AlertCircle } from "lucide-react";

interface Job {
    id: string;
    slug?: string;
    title: string;
    category: string;
    jobType: string;
    location: string;
    postedAt: string;
    jobCode: string;
    qualification: string;
    experience: string;
    requiredSkills: string[];
    rolesAndResponsibilities: string[];
    isActive: boolean;
}

const inputClass =
    "bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent outline-none dark:text-white transition-all w-full";

const labelClass = "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2";

interface ApplicationFormProps {
    job: Job;
}

function ApplicationForm({ job }: ApplicationFormProps) {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");
    const [dragOver, setDragOver] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        educationalQualification: "",
        otherQualification: "",
        relevantExperience: "",
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (file: File | null) => {
        if (file) {
            setResumeFile(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Client-side validation
        if (!form.fullName || !form.email || !form.phone || !form.educationalQualification || !form.relevantExperience) {
            setError("Please fill in all required fields.");
            return;
        }

        setSubmitting(true);
        try {
            const formData = new FormData();
            Object.entries(form).forEach(([k, v]) => formData.append(k, v));
            formData.append("jobTitle", job.title);
            formData.append("jobCode", job.jobCode);
            if (resumeFile) formData.append("resume", resumeFile);

            const res = await fetch("/api/apply", { method: "POST", body: formData });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to submit");
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="rounded-2xl border border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-900/10 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-2">Application Submitted!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Thank you for applying to <strong>{job.title}</strong>. Our team will review your application and get back to you shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
                <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/20 rounded-xl p-4">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
            )}

            {/* Two column sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-gray-100 dark:border-white/10 pb-3">
                        Personal Information
                    </h3>
                    <div>
                        <label className={labelClass} htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
                        <input id="fullName" name="fullName" type="text" placeholder="John Doe" value={form.fullName} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                        <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                        <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} className={inputClass} required />
                    </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-gray-100 dark:border-white/10 pb-3">
                        Professional Information
                    </h3>
                    <div>
                        <label className={labelClass} htmlFor="educationalQualification">Educational Qualification <span className="text-red-500">*</span></label>
                        <select id="educationalQualification" name="educationalQualification" value={form.educationalQualification} onChange={handleChange} className={inputClass} required>
                            <option value="">Select qualification...</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Undergraduate BE/B.Tech">Undergraduate BE/B.Tech</option>
                            <option value="Postgraduate ME/M.Tech/MS">Postgraduate ME/M.Tech/MS</option>
                            <option value="Doctorate">Doctorate</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="otherQualification">Other Qualification</label>
                        <input id="otherQualification" name="otherQualification" type="text" placeholder="MBA, Certifications, etc." value={form.otherQualification} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="relevantExperience">Relevant Experience <span className="text-red-500">*</span></label>
                        <textarea id="relevantExperience" name="relevantExperience" rows={4} placeholder="Describe your relevant work experience..." value={form.relevantExperience} onChange={handleChange} className={inputClass} required />
                    </div>
                </div>
            </div>

            {/* Resume Upload */}
            <div>
                <label className={labelClass}>Resume / CV</label>
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        const file = e.dataTransfer.files[0];
                        if (file) handleFileChange(file);
                    }}
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
            ${dragOver
                            ? "border-[#2b2b4f] bg-[#2b2b4f]/5"
                            : "border-gray-200 dark:border-white/10 hover:border-[#2b2b4f] dark:hover:border-[#2b2b4f]"
                        }`}
                >
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="resume"
                    />
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    {fileName ? (
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-semibold text-[#2b2b4f] dark:text-indigo-400">{fileName}</span>
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setResumeFile(null); setFileName(""); }}
                                className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                Drop your resume here, or <span className="text-[#2b2b4f] dark:text-indigo-400">browse</span>
                            </p>
                            <p className="text-xs text-slate-400">PDF, DOC, DOCX · Max 10MB</p>
                        </>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 disabled:opacity-60 text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3"
            >
                {submitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Submit Application"
                )}
            </button>
        </form>
    );
}

interface JobDetailClientProps {
    job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    title={job.title}
                    breadcrumbs={[
                        { label: "About", href: "/about" },
                        { label: "Careers", href: "/about/careers" },
                        { label: job.title },
                    ]}
                />

                <section className="py-16 lg:py-24 bg-white dark:bg-[#16161c]">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Required Skills */}
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#2b2b4f] dark:text-indigo-400 mb-3">
                                        What We&apos;re Looking For
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-normal text-slate-900 dark:text-white font-display mb-6">
                                        Required Skills
                                    </h2>
                                    <ul className="space-y-3">
                                        {job.requiredSkills.map((skill, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#2b2b4f] dark:bg-indigo-400 flex-shrink-0 mt-2" />
                                                <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Roles and Responsibilities */}
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#2b2b4f] dark:text-indigo-400 mb-3">
                                        Day to Day
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-normal text-slate-900 dark:text-white font-display mb-6">
                                        Roles &amp; Responsibilities
                                    </h2>
                                    <ul className="space-y-4">
                                        {job.rolesAndResponsibilities.map((role, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-[#2b2b4f] dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 dark:text-slate-300">{role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-white/10 lg:sticky lg:top-28">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-6 border-b border-gray-100 dark:border-white/10 pb-4">
                                        Job Features
                                    </h3>
                                    <div className="space-y-5">
                                        {[
                                            { label: "Category", value: job.category },
                                            { label: "Job Type", value: job.jobType },
                                            { label: "Location", value: job.location },
                                            { label: "Job Code", value: job.jobCode },
                                            { label: "Experience", value: job.experience },
                                            { label: "Qualification", value: job.qualification },
                                        ].map(({ label, value }) => (
                                            <div key={label}>
                                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                                                    {label}
                                                </p>
                                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#apply"
                                        className="mt-8 w-full block text-center bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold uppercase tracking-widest py-3 rounded-xl transition-all duration-200"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div id="apply" className="mt-20 pt-10 border-t border-gray-100 dark:border-white/10">
                            <div className="mb-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-[#2b2b4f] dark:text-indigo-400 mb-3">
                                    Your Next Step
                                </p>
                                <h2 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white font-display">
                                    Apply For This Job
                                </h2>
                            </div>
                            <ApplicationForm job={job} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
