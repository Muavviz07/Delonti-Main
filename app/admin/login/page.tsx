"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            if (res.ok) {
                router.push('/admin/careers')
            } else if (res.status === 401) {
                setError("Invalid username or password")
            } else {
                setError("Something went wrong. Try again.")
            }
        } catch {
            setError("Something went wrong. Try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0f0f14]">
            <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-white/10 shadow-xl p-8">
                <Image
                    src="/logo-dark(blue-text).png"
                    alt="Delonti"
                    width={150}
                    height={38}
                    className="h-8 w-auto object-contain"
                />
                <Image
                    src="/logo-light.png"
                    alt="Delonti"
                    width={140}
                    height={35}
                    className="hidden dark:block h-7 w-auto object-contain mx-auto mb-8"
                />

                <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white text-center mb-1">
                    Admin Portal
                </h1>
                <p className="text-sm text-slate-400 text-center mb-8">
                    Sign in to continue
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent dark:text-white transition-all"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2b2b4f] focus:border-transparent dark:text-white transition-all pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#2b2b4f] hover:bg-[#2b2b4f]/90 text-white font-bold py-3 rounded-xl transition-all mt-6 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}
