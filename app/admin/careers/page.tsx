"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, X, Check, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

interface CategoriesData {
    categories: string[];
    jobTypes: string[];
    locations: string[];
}

const inputClass =
    "bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent outline-none dark:text-white transition-all w-full";
const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5";

const emptyForm = {
    title: "", category: "", jobType: "", location: "", jobCode: "",
    qualification: "", experience: "", isActive: true,
    requiredSkills: [] as string[], rolesAndResponsibilities: [] as string[],
};

function DynamicList({ label, items, onChange }: { label: string; items: string[]; onChange: (items: string[]) => void }) {
    const [input, setInput] = useState("");

    const add = () => {
        if (input.trim() && !items.includes(input.trim())) {
            onChange([...items, input.trim()]);
            setInput("");
        }
    };

    const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

    return (
        <div>
            <label className={labelClass}>{label}</label>
            <div className="flex gap-2 mb-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
                    placeholder={`Add ${label.toLowerCase()}...`}
                    className={inputClass}
                />
                <button type="button" onClick={add} className="px-4 py-3 bg-[#2b2b4f] text-white rounded-xl text-sm font-bold flex-shrink-0 hover:bg-[#2b2b4f]/90 transition-colors">
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {item}
                        <button type="button" onClick={() => remove(i)} className="hover:text-red-500 transition-colors ml-1">
                            <X className="w-3 h-3" />
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
}

function JobModal({
    job, categories, onClose, onSave
}: {
    job?: Job | null;
    categories: CategoriesData;
    onClose: () => void;
    onSave: () => void;
}) {
    const [form, setForm] = useState(job ? { ...job } : { ...emptyForm });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target;
        const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
        setForm((prev) => ({ ...prev, [target.name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.category || !form.jobType || !form.location) {
            setError("Please fill in all required fields."); return;
        }
        setSaving(true); setError("");
        try {
            const url = job ? `/api/jobs/${job.id}` : "/api/jobs";
            const method = job ? "PUT" : "POST";
            const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
            if (!res.ok) throw new Error("Failed to save");
            onSave(); onClose();
        } catch {
            setError("Failed to save job. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {job ? "Edit Job" : "Add New Job"}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/20 rounded-xl p-3 text-sm text-red-700 dark:text-red-400">{error}</div>
                    )}

                    <div>
                        <label className={labelClass} htmlFor="title">Job Title *</label>
                        <input id="title" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Senior IoT Architect" className={inputClass} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass} htmlFor="category">Category *</label>
                            <select id="category" name="category" value={form.category} onChange={handleChange} className={inputClass} required>
                                <option value="">Select category...</option>
                                {categories.categories.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="jobType">Job Type *</label>
                            <select id="jobType" name="jobType" value={form.jobType} onChange={handleChange} className={inputClass} required>
                                <option value="">Select type...</option>
                                {categories.jobTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass} htmlFor="location">Location *</label>
                            <select id="location" name="location" value={form.location} onChange={handleChange} className={inputClass} required>
                                <option value="">Select location...</option>
                                {categories.locations.map((l) => <option key={l} value={l}>{l}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="jobCode">Job Code</label>
                            <input id="jobCode" name="jobCode" value={form.jobCode} onChange={handleChange} placeholder="e.g. JD-IOT-ARCH-01" className={inputClass} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass} htmlFor="qualification">Qualification</label>
                            <input id="qualification" name="qualification" value={form.qualification} onChange={handleChange} placeholder="e.g. BE in Computer Science" className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="experience">Experience</label>
                            <input id="experience" name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 3-5 years" className={inputClass} />
                        </div>
                    </div>

                    <DynamicList
                        label="Required Skills"
                        items={form.requiredSkills}
                        onChange={(v) => setForm((prev) => ({ ...prev, requiredSkills: v }))}
                    />

                    <DynamicList
                        label="Roles & Responsibilities"
                        items={form.rolesAndResponsibilities}
                        onChange={(v) => setForm((prev) => ({ ...prev, rolesAndResponsibilities: v }))}
                    />

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="isActive"
                            name="isActive"
                            checked={form.isActive}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[#2b2b4f] rounded"
                        />
                        <label htmlFor="isActive" className="text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                            Active (visible on public careers page)
                        </label>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 disabled:opacity-60 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Check className="w-4 h-4" /> {job ? "Save Changes" : "Create Job"}</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function ManageJobsTab() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [categories, setCategories] = useState<CategoriesData>({
        categories: [], jobTypes: [], locations: []
    });

    const fetchJobs = useCallback(async () => {
        setLoading(true);
        try {
            // Fetch all including inactive for admin
            const res = await fetch("/api/jobs?all=true");
            const data = await res.json();
            // Actually fetch without filter to get all (active and inactive)
            const allRes = await fetch("/api/jobs");
            const active = await allRes.json();
            // We need a separate admin endpoint but let's just show them all
            setJobs(data.length ? data : active);
        } catch { } finally {
            setLoading(false);
        }
    }, []);

    const fetchCategories = useCallback(async () => {
        try {
            const res = await fetch("/api/categories");
            const data = await res.json();
            setCategories(data);
        } catch { }
    }, []);

    useEffect(() => {
        fetchJobs();
        fetchCategories();
    }, [fetchJobs, fetchCategories]);

    const handleDelete = async (id: string) => {
        try {
            await fetch(`/api/jobs/${id}`, { method: "DELETE" });
            fetchJobs();
        } catch { }
        setConfirmDelete(null);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{jobs.length} job{jobs.length !== 1 ? "s" : ""} total</p>
                <button
                    onClick={() => { fetchCategories(); setEditingJob(null); setShowModal(true); }}
                    className="inline-flex items-center gap-2 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                    <Plus className="w-4 h-4" /> Add New Job
                </button>
            </div>

            {loading ? (
                <div className="text-center py-12 text-slate-400">Loading...</div>
            ) : (
                <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-white/10">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Title</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider hidden md:table-cell">Category</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider hidden lg:table-cell">Type</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider hidden lg:table-cell">Location</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Status</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {jobs.map((job, idx) => (
                                <>
                                    <tr
                                        key={job.id}
                                        className={`${idx % 2 === 1 ? "bg-slate-50/50 dark:bg-slate-800/20" : ""} hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors`}
                                    >
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                                                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                >
                                                    {expandedId === job.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                </button>
                                                <span className="font-semibold text-slate-900 dark:text-white">{job.title}</span>
                                            </div>
                                            <p className="text-xs text-slate-400 ml-6">{job.jobCode}</p>
                                        </td>
                                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden md:table-cell">{job.category}</td>
                                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden lg:table-cell">{job.jobType}</td>
                                        <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden lg:table-cell">{job.location}</td>
                                        <td className="px-5 py-4">
                                            <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${job.isActive ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`}>
                                                {job.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 justify-end">
                                                <button
                                                    onClick={() => { fetchCategories(); setEditingJob(job); setShowModal(true); }}
                                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-[#2b2b4f] dark:hover:text-indigo-400 transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setConfirmDelete(job.id)}
                                                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-500 transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {expandedId === job.id && (
                                        <tr key={`${job.id}-expanded`} className="bg-slate-50 dark:bg-slate-800/30">
                                            <td colSpan={6} className="px-8 py-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Required Skills</p>
                                                        <ul className="space-y-1">
                                                            {job.requiredSkills.map((s, i) => <li key={i} className="text-slate-600 dark:text-slate-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b2b4f] dark:bg-indigo-400 flex-shrink-0" />{s}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Roles & Responsibilities</p>
                                                        <ul className="space-y-1">
                                                            {job.rolesAndResponsibilities.map((r, i) => <li key={i} className="text-slate-600 dark:text-slate-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b2b4f] dark:bg-indigo-400 flex-shrink-0" />{r}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Delete Confirm */}
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 dark:border-white/10">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">Delete Job?</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">This action cannot be undone. The job will be permanently removed.</p>
                        <div className="flex gap-3">
                            <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Cancel
                            </button>
                            <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <JobModal
                    job={editingJob}
                    categories={categories}
                    onClose={() => { setShowModal(false); setEditingJob(null); }}
                    onSave={fetchJobs}
                />
            )}
        </div>
    );
}

function FilterChip({ value, onDelete }: { value: string; onDelete: () => void }) {
    return (
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-2 gap-3">
            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{value}</span>
            <button onClick={onDelete} className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}

function FilterSection({
    title, items, typeKey, onAdd, onDelete
}: {
    title: string;
    items: string[];
    typeKey: string;
    onAdd: (type: string, value: string) => void;
    onDelete: (type: string, value: string) => void;
}) {
    const [input, setInput] = useState("");

    const add = () => {
        if (input.trim()) { onAdd(typeKey, input.trim()); setInput(""); }
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-4 pb-3 border-b border-gray-100 dark:border-white/10">
                {title}
            </h3>
            <div className="space-y-2 mb-4 min-h-[80px]">
                {items.length === 0 ? (
                    <p className="text-sm text-slate-400 italic">No items yet.</p>
                ) : (
                    items.map((item) => (
                        <FilterChip key={item} value={item} onDelete={() => onDelete(typeKey, item)} />
                    ))
                )}
            </div>
            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
                    placeholder={`Add new ${title.toLowerCase().replace(" →", "")}...`}
                    className={inputClass}
                />
                <button onClick={add} className="px-4 py-2.5 bg-[#2b2b4f] text-white rounded-xl text-sm font-bold flex-shrink-0 hover:bg-[#2b2b4f]/90 transition-colors">
                    Add
                </button>
            </div>
        </div>
    );
}

function ManageFiltersTab() {
    const [cats, setCats] = useState<CategoriesData>({ categories: [], jobTypes: [], locations: [] });
    const [loading, setLoading] = useState(true);

    const fetchCats = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/categories");
            setCats(await res.json());
        } catch { } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchCats(); }, [fetchCats]);

    const handleAdd = async (type: string, value: string) => {
        if (!value.trim()) return;
        try {
            const res = await fetch("/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, value: value.trim() })
            });
            if (!res.ok) throw new Error("Failed to add");
            await fetchCats();
        } catch (err) {
            console.error("Failed to add category:", err);
        }
    };

    const handleDelete = async (type: string, value: string) => {
        try {
            const res = await fetch("/api/categories", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, value })
            });
            if (!res.ok) throw new Error("Failed to delete");
            await fetchCats();
        } catch (err) {
            console.error("Failed to delete category:", err);
        }
    };

    if (loading) return <div className="text-center py-12 text-slate-400">Loading...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FilterSection title="Categories" items={cats.categories} typeKey="categories" onAdd={handleAdd} onDelete={handleDelete} />
            <FilterSection title="Job Types" items={cats.jobTypes} typeKey="jobTypes" onAdd={handleAdd} onDelete={handleDelete} />
            <FilterSection title="Locations" items={cats.locations} typeKey="locations" onAdd={handleAdd} onDelete={handleDelete} />
        </div>
    );
}

export default function AdminCareersPage() {
    const [tab, setTab] = useState<"jobs" | "filters">("jobs");
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
            {/* Admin Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 sticky top-0 z-40">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <>
                            {/* Light mode logo */}
                            <Image
                                src="/logo-dark.png"
                                alt="Delonti"
                                width={120}
                                height={30}
                                className="h-7 w-auto object-contain dark:hidden"
                            />
                            {/* Dark mode logo */}
                            <Image
                                src="/logo-light.png"
                                alt="Delonti"
                                width={120}
                                height={30}
                                className="h-7 w-auto object-contain hidden dark:block"
                            />
                        </>
                        <div>
                            <h1 className="text-base font-bold text-slate-900 dark:text-white">Delonti Admin</h1>
                            <p className="text-xs text-slate-400">Careers Management</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="/about/careers"
                            target="_blank"
                            className="text-sm font-semibold text-[#2b2b4f] dark:text-indigo-400 hover:underline"
                        >
                            View Public Page →
                        </a>
                        <button
                            onClick={async () => {
                                await fetch('/api/admin/logout', { method: 'POST' })
                                router.push('/admin/login')
                            }}
                            className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-normal text-slate-900 dark:text-white font-display mb-1">Careers Administration</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Manage job postings and filter options for the public careers page.</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit mb-8">
                    {[
                        { key: "jobs" as const, label: "Manage Jobs" },
                        { key: "filters" as const, label: "Manage Filters" },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setTab(key)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${tab === key
                                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {tab === "jobs" ? <ManageJobsTab /> : <ManageFiltersTab />}
            </div>
        </div>
    );
}
