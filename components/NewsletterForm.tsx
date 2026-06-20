"use client"

import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail]     = useState("")
  const [name, setName]       = useState("")
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errMsg, setErrMsg]   = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        const data = await res.json().catch(() => ({}))
        setErrMsg(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
          <Mail size={20} className="text-cyan-400" />
        </div>
        <p className="text-zinc-200 font-semibold mb-1">You&apos;re in!</p>
        <p className="text-sm text-zinc-500">
          We&apos;ll send stories and updates to <span className="text-zinc-300">{email}</span>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 rounded-xl bg-cyan-400 text-[#09090b] text-sm font-semibold hover:bg-cyan-300 transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2 shrink-0"
        >
          {status === "loading" ? "Subscribing..." : (
            <>Subscribe <ArrowRight size={14} /></>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-rose-400 mt-2 text-center">{errMsg}</p>
      )}
    </form>
  )
}
