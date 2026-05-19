import Link from "next/link"
import {
  BookOpen, Headphones, Users2, Globe,
  Mic2, Camera, ArrowRight,
} from "lucide-react"
import StoryCard from "@/components/StoryCard"
import { stories } from "@/data/stories"

const stats = [
  { icon: <BookOpen size={20} strokeWidth={1.5} />, value: "24", label: "Stories Published" },
  { icon: <Headphones size={20} strokeWidth={1.5} />, value: "18", label: "Podcast Episodes" },
  { icon: <Users2 size={20} strokeWidth={1.5} />, value: "12", label: "Community Partners" },
  { icon: <Globe size={20} strokeWidth={1.5} />, value: "6", label: "Countries" },
]

const platforms = [
  {
    icon: <BookOpen size={36} strokeWidth={1.25} />,
    name: "Stories",
    description:
      "Quick-read narratives (5 minutes max) - your daily dose of inspiration. Real stories from real people making real change.",
    stats: [
      { v: "24", l: "Published" },
      { v: "5 min", l: "Avg Read" },
      { v: "2x", l: "Weekly" },
    ],
    href: "/blog",
    cta: "Explore Stories",
    color: "cyan",
  },
  {
    icon: <Mic2 size={36} strokeWidth={1.25} />,
    name: "Voices",
    description:
      "Intimate 8-minute conversations with changemakers and community leaders sharing journeys and insights.",
    stats: [
      { v: "18", l: "Episodes" },
      { v: "8 min", l: "Avg Listen" },
      { v: "Monthly", l: "New Eps" },
    ],
    href: "/podcast",
    cta: "Listen Now",
    color: "violet",
  },
  {
    icon: <Camera size={36} strokeWidth={1.25} />,
    name: "Perspectives",
    description:
      "Photography collections capturing daily life, culture, and the extraordinary beauty found in ordinary moments.",
    stats: [
      { v: "156", l: "Photos" },
      { v: "12", l: "Collections" },
      { v: "Monthly", l: "Contests" },
    ],
    href: "#",
    cta: "View Gallery",
    color: "amber",
  },
]

const platformBorder: Record<string, string> = {
  cyan:   "border-cyan-500/30 hover:border-cyan-400/60",
  violet: "border-violet-500/30 hover:border-violet-400/60",
  amber:  "border-amber-500/30 hover:border-amber-400/60",
}
const platformGlow: Record<string, string> = {
  cyan:   "text-cyan-400",
  violet: "text-violet-400",
  amber:  "text-amber-400",
}
const platformIconColor: Record<string, string> = {
  cyan:   "text-cyan-400/80",
  violet: "text-violet-400/80",
  amber:  "text-amber-400/80",
}
const platformBtn: Record<string, string> = {
  cyan:   "bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 border border-cyan-400/30",
  violet: "bg-violet-400/10 text-violet-400 hover:bg-violet-400/20 border border-violet-400/30",
  amber:  "bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 border border-amber-400/30",
}

export default function HomePage() {
  const featured  = stories.slice(0, 1)[0]
  const secondary = stories.slice(1, 4)
  const rest      = stories.slice(4)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 rounded-full px-4 py-1.5 text-xs text-zinc-400 font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Founded in Jakarta · 2025
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Stories That{" "}
            <span className="gradient-text">Connect Us</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-10">
            We believe every voice matters. Every story has the power to bridge
            divides, inspire change, and remind us of our shared humanity
            across Indonesia&apos;s diverse communities and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-[#09090b] font-semibold hover:bg-cyan-300 transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              <BookOpen size={15} strokeWidth={2} />
              Explore Stories
            </Link>
            <Link
              href="/podcast"
              className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold hover:bg-zinc-700 hover:border-zinc-600 transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              <Mic2 size={15} strokeWidth={2} />
              Listen to Voices
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#09090b] py-6 px-4 text-center">
                <div className="flex justify-center mb-2 text-zinc-500">{s.icon}</div>
                <div className="text-2xl font-bold text-zinc-100 tabular-nums">{s.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section id="stories" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              Latest Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Stories That Connect Us
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            <div className="lg:col-span-2">
              <StoryCard story={featured} featured />
            </div>
            <div className="flex flex-col gap-5">
              {secondary.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="text-sm text-cyan-400 font-medium">
            View all stories →
          </Link>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="voices" className="bg-zinc-900/50 border-y border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              Our Platform
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Three Ways to Connect
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every story deserves to be told. Every voice deserves to be heard.
              Every perspective matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`bg-zinc-900 border ${platformBorder[p.color]} rounded-2xl p-6 flex flex-col transition-all duration-300`}
              >
                <div className={`mb-4 ${platformIconColor[p.color]}`}>{p.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${platformGlow[p.color]}`}>{p.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                <div className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4 mb-5">
                  {p.stats.map((st) => (
                    <div key={st.l} className="text-center">
                      <div className="text-sm font-bold text-zinc-100">{st.v}</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wide">{st.l}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={p.href}
                  className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${platformBtn[p.color]}`}
                >
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              Community Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Creating Ripples of Change
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Every story we share creates a ripple effect. From raising
              awareness about remote communities to highlighting innovative
              solutions, our platform bridges the gap between individual
              experiences and collective understanding.
            </p>
            <ul className="space-y-3">
              {[
                "Amplifying unheard voices from remote communities",
                "Connecting social innovators with wider audiences",
                "Fostering empathy through authentic storytelling",
                "Building bridges between diverse communities",
                "Inspiring action through powerful narratives",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-900/30 to-zinc-900 border border-cyan-800/30 rounded-2xl p-10 text-center">
              <div className="text-7xl font-extrabold text-cyan-400 tabular-nums mb-3">
                17,000+
              </div>
              <div className="text-zinc-400 text-lg">Community Members Reached</div>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-cyan-400/5 rounded-full blur-xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="share"
        className="bg-zinc-900 border-y border-zinc-800 py-24 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(ellipse at center, #22d3ee, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5">
            Your Story Matters
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Whether you&apos;re leading change in your community, overcoming
            challenges, or simply living an inspiring life your story has the
            power to connect, inspire, and create positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-cyan-400 text-[#09090b] font-semibold hover:bg-cyan-300 transition-colors text-sm">
              Share Your Story
            </button>
            <button className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 transition-colors text-sm">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-2xl sm:text-3xl font-light text-zinc-300 leading-relaxed italic mb-4">
          &ldquo;Human connection is the heart of change.&rdquo;
        </p>
        <p className="text-sm text-cyan-400 font-semibold tracking-wide uppercase">
          ConnectED Foundation Principle
        </p>
      </section>
    </>
  )
}
