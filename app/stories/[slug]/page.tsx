import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getStory, stories } from "@/data/stories"
import StoryCard from "@/components/StoryCard"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) return {}
  return {
    title: story.title,
    description: story.excerpt,
  }
}

const categoryBadge: Record<string, string> = {
  cyan:    "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  sky:     "bg-sky-400/10 text-sky-400 border-sky-400/20",
  orange:  "bg-orange-400/10 text-orange-400 border-orange-400/20",
  violet:  "bg-violet-400/10 text-violet-400 border-violet-400/20",
  amber:   "bg-amber-400/10 text-amber-400 border-amber-400/20",
  rose:    "bg-rose-400/10 text-rose-400 border-rose-400/20",
  teal:    "bg-teal-400/10 text-teal-400 border-teal-400/20",
}

const heroBg: Record<string, string> = {
  cyan:    "from-cyan-900/50 via-zinc-900 to-[#09090b]",
  emerald: "from-emerald-900/50 via-zinc-900 to-[#09090b]",
  sky:     "from-sky-900/50 via-zinc-900 to-[#09090b]",
  orange:  "from-orange-900/50 via-zinc-900 to-[#09090b]",
  violet:  "from-violet-900/50 via-zinc-900 to-[#09090b]",
  amber:   "from-amber-900/50 via-zinc-900 to-[#09090b]",
  rose:    "from-rose-900/50 via-zinc-900 to-[#09090b]",
  teal:    "from-teal-900/50 via-zinc-900 to-[#09090b]",
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()

  const badgeClass = categoryBadge[story.categoryColor] ?? categoryBadge.cyan
  const bgClass = heroBg[story.categoryColor] ?? heroBg.cyan
  const related = story.relatedSlugs
    .map((s) => stories.find((st) => st.slug === s))
    .filter(Boolean) as typeof stories

  return (
    <>
      {/* Reading progress bar */}
      <div id="reading-progress" style={{ width: "0%" }} />

      {/* Hero */}
      <section className={`pt-28 pb-16 bg-gradient-to-b ${bgClass} relative overflow-hidden`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 mb-8 transition-colors"
          >
            ← Back to Stories
          </Link>

          {/* Meta row */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
              {story.category}
            </span>
            <span className="text-xs text-zinc-500">📍 {story.location}</span>
            <span className="text-xs text-zinc-500">🕒 {story.readTime}</span>
            <span className="text-xs text-zinc-500">{story.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {story.title}
          </h1>
          {story.subtitle && (
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">{story.subtitle}</p>
          )}

          {/* Hero visual */}
          <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-8">
            <span className="text-8xl sm:text-9xl">{story.heroEmoji}</span>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      {story.highlights.length > 0 && (
        <div className="border-y border-zinc-800 bg-zinc-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {story.highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-xl font-bold text-cyan-400 tabular-nums">{h.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 article-prose">
        {story.body.map((block, i) => {
          switch (block.type) {
            case "paragraph":
              return <p key={i}>{block.text}</p>

            case "h2":
              return <h2 key={i}>{block.text}</h2>

            case "h3":
              return <h3 key={i}>{block.text}</h3>

            case "quote":
              return (
                <blockquote key={i}>
                  <p>{block.text}</p>
                  {block.attribution && (
                    <cite className="text-sm text-zinc-500 not-italic mt-2 block">
                      — {block.attribution}
                    </cite>
                  )}
                </blockquote>
              )

            case "stat-grid":
              return (
                <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 not-prose">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-400">{item.value}</div>
                      <div className="text-xs text-zinc-500 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              )

            case "list":
              return (
                <ul key={i} className="space-y-2 my-4 not-prose">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[#a1a1aa] text-[1.05rem] leading-[1.8]">
                      <span className="text-cyan-400 mt-1 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )

            case "callout":
              return (
                <div
                  key={i}
                  className="my-6 p-5 bg-zinc-800/50 border border-zinc-700 rounded-xl not-prose"
                >
                  <div className="flex gap-3">
                    {block.icon && <span className="text-2xl shrink-0">{block.icon}</span>}
                    <p className="text-sm text-zinc-300 leading-relaxed">{block.text}</p>
                  </div>
                </div>
              )

            default:
              return null
          }
        })}
      </article>

      {/* Share / navigate */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 border-t border-zinc-800 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-300 mb-1">Did this story move you?</p>
            <p className="text-xs text-zinc-500">Share it and help amplify these voices.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm text-zinc-300 font-medium transition-colors">
              📤 Share
            </button>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 text-sm text-cyan-400 font-medium transition-colors"
            >
              More Stories →
            </Link>
          </div>
        </div>
      </div>

      {/* Related stories */}
      {related.length > 0 && (
        <section className="bg-zinc-900/50 border-t border-zinc-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Related Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
