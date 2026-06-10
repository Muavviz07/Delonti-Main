"use client";

import { useState } from "react";
import { ChevronRight, Loader2, Check } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonHref?: string;
  isNewsletter?: boolean;
}

export default function CTASection({
  heading = "Ready to revolutionize your infrastructure?",
  description = "Join leading organizations building the future with Delonti. Let's discuss your next project.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  buttonHref,
  isNewsletter = false
}: CTASectionProps) {
  const finalHref = buttonHref || buttonLink;
  
  // Newsletter state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      // Send subscription to contact api with newsletter identifier
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tabId: "newsletter",
          tabName: "Newsletter Signup",
          name: "Subscriber",
          email: email,
          message: "Newsletter Subscription Request",
        }),
      });
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Subscription failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="section-heading mb-0">
              {heading}
            </h2>
            <p className="section-body mt-6">
              {description}
            </p>
          </div>

          {isNewsletter ? (
            <div className="w-full lg:max-w-md shrink-0">
              {success ? (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-650 dark:text-green-400 font-medium">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Thanks for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition-all placeholder:text-slate-400 font-medium"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative px-6 py-3.5 bg-logo hover:bg-logo/90 text-white rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_-5px_var(--color-logo)] hover:shadow-[0_0_30px_-5px_var(--color-logo)] flex items-center justify-center gap-2 overflow-hidden cursor-pointer whitespace-nowrap"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-8">
              <Link 
                href={finalHref}
                className="group relative px-8 py-3.5 bg-logo hover:bg-logo/90 text-white rounded-xl font-bold text-base transition-all shadow-[0_0_30px_-5px_var(--color-logo)] hover:shadow-[0_0_40px_-5px_var(--color-logo)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 uppercase tracking-wider">{buttonText}</span>
                <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <Link 
                href="/solutions"
                className="group relative px-8 py-3.5 bg-white/5 hover:bg-white/10 text-slate-500 hover:text-primary transition-all backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center justify-center gap-3 rounded-xl overflow-hidden text-base"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/0 via-black/5 to-black/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 uppercase tracking-wider font-bold">Explore Solutions</span>
                <ChevronRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
