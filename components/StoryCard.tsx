import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { Icon } from "@/components/Icon"
import type { IconName } from "@/components/Icon"
import type { Story } from "@/data/stories"

const categoryColors: Record<string, string> = {
  cyan:    "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  sky:     "bg-sky-400/10 text-sky-400 border-sky-400/20",
  orange:  "bg-orange-400/10 text-orange-400 border-orange-400/20",
  violet:  "bg-violet-400/10 text-violet-400 border-violet-400/20",
  amber:   "bg-amber-400/10 text-amber-400 border-amber-400/20",
  rose:    "bg-rose-400/10 text-rose-400 border-rose-400/20",
  teal:    "bg-teal-400/10 text-teal-400 border-teal-400/20",
}

const heroBgs: Record<string, string> = {
  cyan:    "from-cyan-900/60 to-cyan-950",
  emerald: "from-emerald-900/60 to-emerald-950",
  sky:     "from-sky-900/60 to-sky-950",
  orange:  "from-orange-900/60 to-orange-950",
  violet:  "from-violet-900/60 to-violet-950",
  amber:   "from-amber-900/60 to-amber-950",
  rose:    "from-rose-900/60 to-rose-950",
  teal:    "from-teal-900/60 to-teal-950",
}

const heroIconColors: Record<string, string> = {
  cyan:    "text-cyan-400/70",
  emerald: "text-emerald-400/70",
  sky:     "text-sky-400/70",
  orange:  "text-orange-400/70",
  violet:  "text-violet-400/70",
  amber:   "text-amber-400/70",
  rose:    "text-rose-400/70",
  teal:    "text-teal-400/70",
}

interface Props {
  story: Story
  featured?: boolean
}

export default function StoryCard({ story, featured = false }: Props) {
  const badgeClass  = categoryColors[story.categoryColor] ?? categoryColors.cyan
  const bgClass     = heroBgs[story.categoryColor] ?? heroBgs.cyan
  const iconColor   = heroIconColors[story.categoryColor] ?? heroIconColors.cyan

  return (
    <Link
      href={`/stories/${story.slug}`}
      className={`group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Hero area */}
      <div
        className={`bg-gradient-to-br ${bgClass} flex items-center justify-center flex-shrink-0 ${
          featured ? "md:w-64 h-48 md:h-auto" : "h-44"
        }`}
      >
        <Icon
          name={story.heroIcon as IconName}
          size={featured ? 64 : 52}
          className={`${iconColor} group-hover:scale-110 transition-transform duration-300`}
          strokeWidth={1.25}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
            {story.category}
          </span>
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <MapPin size={10} strokeWidth={1.75} />
            {story.location}
          </span>
        </div>

        <h3
          className={`font-bold text-zinc-100 leading-snug mb-2 group-hover:text-cyan-300 transition-colors ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {story.title}
        </h3>

        <p className="text-sm text-zinc-500 leading-relaxed flex-1 line-clamp-3">
          {story.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-zinc-600">
            <span className="flex items-center gap-1">
              <Clock size={10} strokeWidth={1.75} />
              {story.readTime}
            </span>
            <span>{story.date}</span>
          </div>
          <span className="text-xs text-cyan-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
