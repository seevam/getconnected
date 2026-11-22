"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Stories" },
  { href: "/podcast", label: "Voices" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold tracking-tight">
            Connect<span className="text-cyan-400">ED</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="hidden md:inline-flex px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="hidden md:inline-flex px-3 py-2 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-100 hover:bg-zinc-800 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Link
            href="/submit-story"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-400 text-[#09090b] text-sm font-semibold hover:bg-cyan-300 transition-colors"
          >
            Share Your Story
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#09090b]/98 backdrop-blur-xl border-b border-zinc-800 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Show when="signed-out">
            <div className="mt-2 flex gap-2">
              <SignInButton>
                <button className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 border border-zinc-800">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-100 border border-zinc-700">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </Show>
          <Link
            href="/submit-story"
            className="mt-2 px-3 py-2.5 rounded-lg bg-cyan-400 text-[#09090b] text-sm font-semibold text-center"
          >
            Share Your Story
          </Link>
        </div>
      </div>
    </header>
  )
}
