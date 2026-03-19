"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, X, Check, Loader2, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: string;
    date: string;
    description: string;
    image: string;
    content: string[];
    isPublished: boolean;
    createdAt: string;
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    category: string;
    date: string;
    description: string;
    image: string;
    content: string[];
    isPublished: boolean;
    createdAt: string;
}

export function generateContentSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

const inputClass =
    "bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent outline-none dark:text-white transition-all w-full";
const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5";

const emptyBlogForm = {
    title: "", category: "", date: "", description: "", image: "",
    content: "", isPublished: false
};

const emptyArticleForm = {
    title: "", category: "", date: "", description: "", image: "",
    content: "", isPublished: false
};

const BLOG_CATEGORIES = [
    "RFID & Asset Tracking",
    "IoT & Smart Infrastructure",
    "Cybersecurity & Risk Management",
    "Data & Analytics"
];

const ARTICLE_CATEGORIES = [
    "Government Infrastructure",
    "Smart Cities",
    "Asset Management",
    "Cybersecurity for Government",
    "Infrastructure Data & Analytics"
];

function ContentModal({
    post, type, categories, onClose, onSave
}: {
    post?: BlogPost | Article | null;
    type: "blog" | "article";
    categories: string[];
    onClose: () => void;
    onSave: () => void;
}) {
    const [form, setForm] = useState<any>(
        post
            ? { ...post, status: post.isPublished ? 'published' : 'draft', content: Array.isArray(post.content) ? post.content.join('\n\n') : post.content }
            : type === "blog" ? { ...emptyBlogForm, status: 'draft' } : { ...emptyArticleForm, status: 'draft' }
    );
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.category || !form.date || !form.description || !form.content) {
            setError("Please fill in all required fields."); return;
        }
        setSaving(true); setError("");

        const payload: any = {
            ...form,
            isPublished: form.status === 'published',
            content: typeof form.content === 'string'
                ? form.content.split(/\n\n+/).map((p: string) => p.trim()).filter(Boolean)
                : form.content
        };
        delete payload.status;

        try {
            const endpoint = type === "blog" ? "/api/blogs" : "/api/articles";
            const url = post ? `${endpoint}/${post.id}` : endpoint;
            const method = post ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Failed to save");
            onSave(); onClose();
        } catch {
            setError(`Failed to save ${type}. Please try again.`);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-y-auto">
                <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {post ? "Edit Post" : "Add New Post"}
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
                        <label className={labelClass} htmlFor="title">Title *</label>
                        <input id="title" name="title" value={form.title} onChange={handleChange} placeholder="Post Title" className={inputClass} required />
                        <p className="text-xs text-slate-400 mt-1">
                            URL: /resources/{type === "blog" ? "blogs" : "insights"}/{generateContentSlug(form.title || '')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass} htmlFor="category">Category *</label>
                            <select id="category" name="category" value={form.category} onChange={handleChange} className={inputClass} required>
                                <option value="">Select category...</option>
                                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass} htmlFor="date">Date *</label>
                            <input id="date" name="date" value={form.date} onChange={handleChange} placeholder="e.g. March 2026" className={inputClass} required />
                        </div>
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="image">Image URL</label>
                        <input id="image" name="image" value={form.image} onChange={handleChange} placeholder="https://images.unsplash.com/..." className={inputClass} />
                        {form.image && form.image.startsWith('http') && (
                            <div className="mt-2 relative w-full h-32 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                                <img src={form.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                            </div>
                        )}
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="description">Short Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="A brief summary shown on listing pages (1-2 sentences)"
                            className={inputClass}
                            rows={3}
                            required
                        />
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="content">Content *</label>
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="Write each paragraph separated by a blank line. Each paragraph will be displayed separately."
                            className={inputClass}
                            rows={10}
                            required
                        />
                        <p className="text-xs text-slate-400 mt-1">
                            Separate paragraphs with a blank line (press Enter twice)
                        </p>
                    </div>

                    <div>
                        <label className={labelClass}>Status</label>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setForm((prev: any) => ({ ...prev, status: 'published' }))}
                                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${form.status === 'published' ? 'bg-[#2b2b4f] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                            >
                                Published
                            </button>
                            <button
                                type="button"
                                onClick={() => setForm((prev: any) => ({ ...prev, status: 'draft' }))}
                                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${form.status === 'draft' ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                            >
                                Draft
                            </button>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 disabled:opacity-60 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Check className="w-4 h-4" /> {post ? "Save Post" : "Create Post"}</>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function ManageBlogsTab() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/blogs"); // fetches all including drafts
            const data = await res.json();
            setPosts(data);
        } catch { } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleDelete = async (id: string) => {
        try {
            const endpoint = `/api/blogs/${id}`;
            const res = await fetch(endpoint, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            await fetchPosts();
        } catch (err) {
            console.error('Delete failed:', err);
        }
        setConfirmDelete(null);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{posts.length} post{posts.length !== 1 ? "s" : ""} total</p>
                <button
                    onClick={() => { setEditingPost(null); setShowModal(true); }}
                    className="inline-flex items-center gap-2 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                    <Plus className="w-4 h-4" /> Add New Post
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
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider hidden lg:table-cell">Date</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Status</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {posts.map((post, idx) => (
                                <tr
                                    key={post.id}
                                    className={`${idx % 2 === 1 ? "bg-slate-50/50 dark:bg-slate-800/20" : ""} hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors`}
                                >
                                    <td className="px-5 py-4 max-w-md">
                                        <div className="font-semibold text-slate-900 dark:text-white truncate">{post.title}</div>
                                        <p className="text-xs text-slate-400 truncate mt-1">{post.description.substring(0, 60)}...</p>
                                    </td>
                                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden md:table-cell">{post.category}</td>
                                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden lg:table-cell">{post.date}</td>
                                    <td className="px-5 py-4">
                                        <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${post.isPublished ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`}>
                                            {post.isPublished ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-2 justify-end">
                                            <button
                                                onClick={() => { setEditingPost(post); setShowModal(true); }}
                                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-[#2b2b4f] dark:hover:text-indigo-400 transition-all"
                                                title="Edit"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setConfirmDelete(post.id)}
                                                className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-500 transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 dark:border-white/10">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">Delete Post?</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">This action cannot be undone. The post will be permanently removed.</p>
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
                <ContentModal
                    post={editingPost}
                    type="blog"
                    categories={BLOG_CATEGORIES}
                    onClose={() => { setShowModal(false); setEditingPost(null); }}
                    onSave={fetchPosts}
                />
            )}
        </div>
    );
}

function ManageArticlesTab() {
    const [posts, setPosts] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState<Article | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/articles"); // fetches all including drafts
            const data = await res.json();
            setPosts(data);
        } catch { } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleDelete = async (id: string) => {
        try {
            const endpoint = `/api/articles/${id}`;
            const res = await fetch(endpoint, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            await fetchPosts();
        } catch (err) {
            console.error('Delete failed:', err);
        }
        setConfirmDelete(null);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{posts.length} article{posts.length !== 1 ? "s" : ""} total</p>
                <button
                    onClick={() => { setEditingPost(null); setShowModal(true); }}
                    className="inline-flex items-center gap-2 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                    <Plus className="w-4 h-4" /> Add New Article
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
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider hidden lg:table-cell">Date</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider">Status</th>
                                <th className="px-5 py-4 font-bold text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {posts.map((post, idx) => (
                                <tr
                                    key={post.id}
                                    className={`${idx % 2 === 1 ? "bg-slate-50/50 dark:bg-slate-800/20" : ""} hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors`}
                                >
                                    <td className="px-5 py-4 max-w-md">
                                        <div className="font-semibold text-slate-900 dark:text-white truncate">{post.title}</div>
                                        <p className="text-xs text-slate-400 truncate mt-1">{post.description.substring(0, 60)}...</p>
                                    </td>
                                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden md:table-cell">{post.category}</td>
                                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400 hidden lg:table-cell">{post.date}</td>
                                    <td className="px-5 py-4">
                                        <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full ${post.isPublished ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"}`}>
                                            {post.isPublished ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-2 justify-end">
                                            <button
                                                onClick={() => { setEditingPost(post); setShowModal(true); }}
                                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-[#2b2b4f] dark:hover:text-indigo-400 transition-all"
                                                title="Edit"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setConfirmDelete(post.id)}
                                                className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-500 hover:text-red-500 transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 dark:border-white/10">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">Delete Article?</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">This action cannot be undone. The article will be permanently removed.</p>
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
                <ContentModal
                    post={editingPost}
                    type="article"
                    categories={ARTICLE_CATEGORIES}
                    onClose={() => { setShowModal(false); setEditingPost(null); }}
                    onSave={fetchPosts}
                />
            )}
        </div>
    );
}

export default function AdminContentPage() {
    const [tab, setTab] = useState<"blogs" | "articles">("blogs");
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
                            <p className="text-xs text-slate-400">Content Management</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href={tab === "blogs" ? "/resources/blogs" : "/resources/insights"}
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
                    <h2 className="text-3xl font-normal text-slate-900 dark:text-white font-display mb-1">Content Management</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Manage blog posts and public sector articles.</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit mb-8">
                    {[
                        { key: "blogs" as const, label: "Manage Blogs" },
                        { key: "articles" as const, label: "Manage Articles" },
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

                {tab === "blogs" ? <ManageBlogsTab /> : <ManageArticlesTab />}
            </div>
        </div>
    );
}
