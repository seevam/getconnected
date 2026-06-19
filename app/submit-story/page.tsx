"use client";

import { useState } from "react";
import { User, Mail, Phone, FileText, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  story: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  story: "",
};

export default function SubmitStoryPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (form.story.trim().length < 100) {
      setError("Your story must be at least 100 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          story: form.story.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-cyan-900/20 to-[#09090b] text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Share Your Story
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Every voice matters. Tell us about the change you&apos;re creating
          &mdash; we&apos;d love to hear it.
        </p>
      </section>

      {/* Form area */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        {success ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Thank you, {form.name}!
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We&apos;ve received your story. Our team will review it and reach
              out if we&apos;d like to feature it.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6"
          >
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <User className="w-4 h-4 text-cyan-400" />
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Email <span className="text-cyan-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Phone / WhatsApp{" "}
                <span className="text-zinc-500 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 555 000 0000"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition"
              />
            </div>

            {/* Story */}
            <div className="space-y-1.5">
              <label
                htmlFor="story"
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Your Story <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="story"
                name="story"
                required
                rows={6}
                minLength={100}
                value={form.story}
                onChange={handleChange}
                placeholder="Tell us your story — who are the people involved, what happened, what changed?"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition resize-y"
              />
              <p className="text-xs text-zinc-500">
                {form.story.trim().length} / 100 characters minimum
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-semibold rounded-lg px-6 py-3 transition"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Your Story
                </>
              )}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
