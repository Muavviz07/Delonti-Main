"use client";

import { useState, useEffect } from "react";
import { Shield, Eye, EyeOff, Loader2, Check, X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const inputClass =
    "bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent outline-none dark:text-white transition-all w-full";
const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5";

export default function ConsoleSettingsPage() {
    const router = useRouter();
    const [currentUsername, setCurrentUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [role, setRole] = useState(""); // super-admin or restricted-admin
    const [credentials, setCredentials] = useState<{ [key: string]: { password?: string; role?: string } }>({});
    const [tempUsernames, setTempUsernames] = useState<{ [key: string]: string }>({});
    const [revealPasswords, setRevealPasswords] = useState<{ [key: string]: boolean }>({});
    const [credLoading, setCredLoading] = useState(false);
    const [credError, setCredError] = useState("");
    const [credSuccess, setCredSuccess] = useState("");

    const getCookie = (name: string): string => {
        if (typeof document === 'undefined') return '';
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
        return '';
    };

    const fetchCredentials = async () => {
        try {
            const res = await fetch("/api/console/credentials");
            if (res.ok) {
                const data = await res.json();
                setCredentials(data.users || {});
            }
        } catch (err) {
            console.error("Failed to load credentials:", err);
        }
    };

    useEffect(() => {
        const activeUser = getCookie("admin_user");
        const activeRole = getCookie("admin_role") || (activeUser === "delq-admin" ? "super-admin" : "restricted-admin");
        setCurrentUsername(activeUser);
        setNewUsername(activeUser);
        setRole(activeRole);

        if (activeRole === "super-admin") {
            fetchCredentials();
        }
    }, []);

    const handleUpdateSelfCredentials = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!currentPassword) {
            setError("Current password is required to verify your identity.");
            return;
        }

        if (newPassword && newPassword !== confirmPassword) {
            setError("New passwords do not match.");
            return;
        }

        if (newPassword && newPassword.length < 4) {
            setError("New password must be at least 4 characters long.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/console/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    newUsername: newUsername.trim(), 
                    currentPassword, 
                    newPassword: newPassword ? newPassword : undefined 
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to update profile settings");
            }
            setSuccess("Credentials updated successfully!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            if (data.newUsername) {
                setCurrentUsername(data.newUsername);
                setNewUsername(data.newUsername);
            }
        } catch (err: any) {
            setError(err.message || "Failed to update credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUserCredentials = async (oldUser: string) => {
        const editedUser = tempUsernames[oldUser]?.trim() || oldUser;
        const editedPass = credentials[oldUser]?.password?.trim() || "";

        if (!editedUser) {
            setCredError("Username cannot be empty.");
            return;
        }

        if (!editedPass || editedPass.length < 4) {
            setCredError(`Password for ${editedUser} must be at least 4 characters long.`);
            return;
        }

        setCredLoading(true);
        setCredError("");
        setCredSuccess("");
        try {
            const res = await fetch("/api/console/credentials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    oldUsername: oldUser, 
                    newUsername: editedUser, 
                    password: editedPass 
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to update user account");
            }
            setCredentials(data.users || {});
            
            // Clear editing state for the old username
            if (tempUsernames[oldUser]) {
                const nextTemps = { ...tempUsernames };
                delete nextTemps[oldUser];
                setTempUsernames(nextTemps);
            }

            setCredSuccess(`Successfully saved settings for ${editedUser}!`);

            // If the super-admin renamed their own username, update display
            const currentActive = getCookie("admin_user");
            if (currentActive) {
                setCurrentUsername(currentActive);
                setNewUsername(currentActive);
            }
        } catch (err: any) {
            setCredError(err.message || "Failed to save settings.");
        } finally {
            setCredLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
            {/* Admin Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 sticky top-0 z-40">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/console">
                            <Image
                                src="/Final delonti-logo-transparent.png"
                                alt="Delonti Logo"
                                width={150}
                                height={38}
                                className="h-8 w-auto object-contain dark:hidden"
                                priority
                            />
                            <Image
                                src="/Delonti Logo Final V1.0 transparent Dark.png"
                                alt="Delonti Logo"
                                width={170}
                                height={43}
                                className="hidden dark:block h-[36px] w-auto object-contain"
                                priority
                            />
                        </Link>
                        <div>
                            <h1 className="text-base font-bold text-slate-900 dark:text-white">Delonti Console</h1>
                            <p className="text-xs text-slate-400">Settings</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/console" className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#2b2b4f] dark:hover:text-white flex items-center gap-1.5 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Dashboard
                        </Link>
                        <button
                            onClick={async () => {
                                await fetch('/api/console/logout', { method: 'POST' });
                                router.push('/console/login');
                            }}
                            className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-normal text-slate-900 dark:text-white font-display mb-1">Security Settings</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Configure administrative credentials and console security.</p>
                </div>

                {role === "restricted-admin" && (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-white/10">
                            <Shield className="w-5 h-5 text-indigo-500" />
                            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">Update Credentials</h3>
                        </div>

                        <form onSubmit={handleUpdateSelfCredentials} className="space-y-6">
                            {error && (
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/20 rounded-xl p-4 text-sm text-red-700 dark:text-red-400 flex items-center gap-2">
                                    <X className="w-4 h-4 shrink-0 text-red-500" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {success && (
                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/20 rounded-xl p-4 text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                                    <Check className="w-4 h-4 shrink-0 text-green-500" />
                                    <span>{success}</span>
                                </div>
                            )}

                            <div className="relative">
                                <label className={labelClass}>Username</label>
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className={labelClass}>Current Password (Required)</label>
                                <div className="relative">
                                    <input
                                        type={showCurrent ? "text" : "password"}
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        placeholder="Enter current password"
                                        className={inputClass}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrent(!showCurrent)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                    >
                                        {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <label className={labelClass}>New Password (Optional)</label>
                                <div className="relative">
                                    <input
                                        type={showNew ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Leave blank to keep current password"
                                        className={inputClass}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNew(!showNew)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                    >
                                        {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <label className={labelClass}>Confirm New Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                        className={inputClass}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                    >
                                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 disabled:opacity-60 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" /> Updating...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-4 h-4" /> Save Credentials
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {role === "super-admin" && (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-white/10">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">Console Credentials Manager</h3>
                        </div>

                        {credError && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/20 rounded-xl p-4 text-sm text-red-700 dark:text-red-400 flex items-center gap-2 mb-6">
                                <X className="w-4 h-4 shrink-0 text-red-500" />
                                <span>{credError}</span>
                            </div>
                        )}

                        {credSuccess && (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/20 rounded-xl p-4 text-sm text-green-700 dark:text-green-400 flex items-center gap-2 mb-6">
                                <Check className="w-4 h-4 shrink-0 text-green-500" />
                                <span>{credSuccess}</span>
                            </div>
                        )}

                        <div className="space-y-8">
                            {Object.entries(credentials).map(([username, info]) => {
                                const currentEditedUser = tempUsernames[username] !== undefined ? tempUsernames[username] : username;
                                return (
                                    <div key={username} className="p-6 rounded-xl border border-gray-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                                {info?.role === "super-admin" ? "Super Admin Account" : "Restricted Admin Account"}
                                            </span>
                                            {username === currentUsername && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                                                    Current Profile
                                                </span>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className={labelClass}>Username</label>
                                                <input
                                                    type="text"
                                                    value={currentEditedUser}
                                                    onChange={(e) => {
                                                        setTempUsernames({
                                                            ...tempUsernames,
                                                            [username]: e.target.value
                                                        });
                                                    }}
                                                    className={inputClass}
                                                    placeholder="Enter username"
                                                />
                                            </div>

                                            <div>
                                                <label className={labelClass}>Password</label>
                                                <div className="relative">
                                                    <input
                                                        type={revealPasswords[username] ? "text" : "password"}
                                                        value={info?.password || ""}
                                                        onChange={(e) => {
                                                            setCredentials({
                                                                ...credentials,
                                                                [username]: {
                                                                    ...credentials[username],
                                                                    password: e.target.value
                                                                }
                                                            });
                                                        }}
                                                        className={inputClass}
                                                        placeholder="Enter password"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setRevealPasswords({
                                                                ...revealPasswords,
                                                                [username]: !revealPasswords[username]
                                                            });
                                                        }}
                                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                                    >
                                                        {revealPasswords[username] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-2 border-t border-gray-200/50 dark:border-white/5">
                                            <button
                                                type="button"
                                                disabled={credLoading}
                                                onClick={() => handleUpdateUserCredentials(username)}
                                                className="px-6 py-2.5 bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                                            >
                                                Save Account Settings
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
