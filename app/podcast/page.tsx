import type { Metadata } from "next"
import Link from "next/link"
import {
  Mic2, Headphones, Mail, Star, Clock,
  Music2, Radio, PlayCircle, Tag, Play,
} from "lucide-react"
import { Icon } from "@/components/Icon"
import type { IconName } from "@/components/Icon"
import EpisodeCard from "@/components/EpisodeCard"
import { episodes } from "@/data/episodes"
import { spotifyEpisodes } from "@/data/spotify-links"

export const metadata: Metadata = {
  title: "Voices Podcast",
  description: "Intimate conversations with changemakers, innovators, and community leaders.",
}

const platforms = [
  { name: "Spotify",         icon: <Music2 size={16} strokeWidth={1.75} /> },
  { name: "Apple Podcasts",  icon: <Headphones size={16} strokeWidth={1.75} /> },
  { name: "YouTube",         icon: <PlayCircle size={16} strokeWidth={1.75} /> },
  { name: "Google Podcasts", icon: <Radio size={16} strokeWidth={1.75} /> },
]

const topics = [
  { label: "All Episodes",     value: "all" },
  { label: "Social Innovation",value: "social-innovation" },
  { label: "Education",        value: "education" },
  { label: "Environment",      value: "environment" },
  { label: "Community",        value: "community" },
]

const podcastStats = [
  { value: "18",    label: "Episodes" },
  { value: "8 min", label: "Avg Length" },
  { value: "12",    label: "Guests" },
  { value: "6",     label: "Countries" },
]

const latest = episodes.find((e) => e.isLatest) ?? episodes[0]
const rest   = episodes.filter((e) => !e.isLatest)

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-violet-900/20 to-[#09090b] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, #a78bfa, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 rounded-full px-4 py-1.5 text-xs text-zinc-400 font-medium mb-8">
            <Mic2 size={12} strokeWidth={2} />
            ConnectED Voices Podcast
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
            Conversations That{" "}
            <span className="gradient-text">Connect Us</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Intimate 8-minute conversations with changemakers, innovators, and
            community leaders sharing their journeys, insights, and the stories
            behind the stories.
          </p>

          {/* Subscribe buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href="#episodes"
              className="px-5 py-2.5 rounded-xl bg-violet-400 text-[#09090b] text-sm font-semibold hover:bg-violet-300 transition-colors inline-flex items-center gap-2"
            >
              <Headphones size={14} strokeWidth={2} />
              Start Listening
            </Link>
            <Link
              href="#subscribe"
              className="px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 text-sm font-semibold hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
            >
              <Mail size={14} strokeWidth={2} />
              Subscribe Free
            </Link>
          </div>

          {/* Waveform */}
          <div className="flex items-end justify-center gap-1 h-10">
            {[15, 28, 20, 35, 22, 30, 18, 38, 24, 32, 16, 26, 34, 20, 29].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-violet-400/60 rounded-full"
                style={{
                  height: `${h}px`,
                  animation: `wave 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes wave {
              from { transform: scaleY(0.6); opacity: 0.5; }
              to   { transform: scaleY(1.4); opacity: 1; }
            }
          `}</style>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {topics.map((t) => (
              <span
                key={t.value}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                  t.value === "all"
                    ? "bg-violet-400/10 text-violet-400 border-violet-400/30"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <span className="shrink-0 text-xs text-zinc-500 hidden sm:block">
            <span className="text-zinc-200 font-semibold">{episodes.length}</span> episodes
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="episodes">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latest episode */}
            <div>
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Star size={12} strokeWidth={2} />
                Latest Episode
              </p>
              <div className="bg-zinc-900 border border-violet-800/30 rounded-2xl overflow-hidden hover:border-violet-600/40 transition-all">
                <div className="h-48 bg-gradient-to-br from-violet-900/60 to-zinc-900 flex items-center justify-center relative">
                  <Icon
                    name={latest.icon as IconName}
                    size={72}
                    className="text-violet-400/60"
                    strokeWidth={1.25}
                  />
                  <span className="absolute top-4 left-4 bg-violet-400/20 text-violet-300 text-xs font-bold px-2.5 py-1 rounded-full border border-violet-400/30">
                    New
                  </span>
                  <span className="absolute top-4 right-4 bg-black/40 text-white/70 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur">
                    EP. {latest.id}
                  </span>
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-violet-400/20 border-2 border-violet-400/50 flex items-center justify-center hover:bg-violet-400/30 transition-colors backdrop-blur">
                      <Play size={22} className="text-white ml-0.5" fill="currentColor" strokeWidth={0} />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs bg-violet-400/10 text-violet-400 px-2.5 py-0.5 rounded-full font-semibold">
                      Social Innovation
                    </span>
                    <span className="text-xs text-zinc-500">{latest.date}</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={10} strokeWidth={1.75} />
                      {latest.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-1 leading-snug">
                    {latest.title}
                  </h2>
                  <p className="text-sm text-violet-400 font-medium mb-3">{latest.guest}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">{latest.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 rounded-lg bg-violet-400 text-[#09090b] text-sm font-semibold hover:bg-violet-300 transition-colors inline-flex items-center gap-1.5">
                      <Play size={12} fill="currentColor" strokeWidth={0} />
                      Play Episode
                    </button>
                    <button className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                      Share →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All episodes */}
            <div>
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-5">
                All Episodes
              </h2>
              <div className="space-y-3">
                {rest.map((ep) => (
                  <EpisodeCard key={ep.id} episode={ep} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" id="subscribe">
            {/* Stats */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {podcastStats.map((s) => (
                  <div key={s.label} className="bg-zinc-800/60 rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-zinc-100">{s.value}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wide mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-gradient-to-br from-violet-900/50 to-zinc-900 border border-violet-800/30 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-zinc-100 mb-2 flex items-center gap-2">
                <Headphones size={14} strokeWidth={2} />
                Listen Everywhere
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Subscribe on your favourite platform and never miss a conversation.
              </p>
              <div className="space-y-2">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-zinc-200 font-medium transition-colors"
                  >
                    <span className="text-zinc-400">{p.icon}</span>
                    {p.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Host */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-1.5">
                <Mic2 size={11} strokeWidth={2} />
                Your Host
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shrink-0">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-200">Ari Rachmat</div>
                  <div className="text-xs text-zinc-500">Founder, ConnectED</div>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mt-3">
                Ari started ConnectED from Jakarta in 2025 with a
                simple belief: every community deserves to have its stories heard.
              </p>
            </div>

            {/* Topics */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-1.5">
                <Tag size={11} strokeWidth={2} />
                Browse Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Social Innovation", "Education", "Environment",
                  "Community", "Youth", "Jakarta", "Refugees",
                  "Food", "Technology", "Health", "Charity", "Storytelling",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-xs text-zinc-400 hover:text-zinc-200 rounded-lg cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Spotify Episodes */}
      {spotifyEpisodes.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-5 flex items-center gap-2">
            <Mic2 size={13} strokeWidth={2} />
            Listen on Spotify
          </h2>
          <div className="space-y-4">
            {spotifyEpisodes.map((ep) => (
              <iframe
                key={ep.id}
                src={`https://open.spotify.com/embed/episode/${ep.id}?utm_source=generator`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px", border: "none" }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Guest CTA */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Got a Story Worth Sharing?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We&apos;re always looking for changemakers, community leaders, and
            quiet revolutionaries to join us on Voices. If your work is creating
            real impact, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit-story"
              className="px-6 py-3 rounded-xl bg-violet-400 text-[#09090b] font-semibold hover:bg-violet-300 transition-colors text-sm"
            >
              Apply to be a Guest
            </Link>
            <Link
              href="/#about"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 transition-colors text-sm"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
