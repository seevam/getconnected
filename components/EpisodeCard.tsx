import type { Episode } from "@/data/episodes"

const topicColors: Record<string, string> = {
  "social-innovation": "bg-cyan-400/10 text-cyan-400",
  education:           "bg-violet-400/10 text-violet-400",
  environment:         "bg-emerald-400/10 text-emerald-400",
  community:           "bg-amber-400/10 text-amber-400",
}

const topicLabels: Record<string, string> = {
  "social-innovation": "Social Innovation",
  education:           "Education",
  environment:         "Environment",
  community:           "Community",
}

const iconBgs: Record<string, string> = {
  "social-innovation": "from-cyan-900 to-cyan-950",
  education:           "from-violet-900 to-violet-950",
  environment:         "from-emerald-900 to-emerald-950",
  community:           "from-amber-900 to-amber-950",
}

interface Props {
  episode: Episode
}

export default function EpisodeCard({ episode }: Props) {
  const badge = topicColors[episode.topic] ?? topicColors["social-innovation"]
  const label = topicLabels[episode.topic] ?? "General"
  const bg = iconBgs[episode.topic] ?? iconBgs["social-innovation"]

  return (
    <div className="group flex gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
      {/* Cover art */}
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center text-2xl shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform`}
      >
        {episode.icon}
        <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white/50">
          E{episode.id}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge}`}>
            {label}
          </span>
          <span className="text-[10px] text-zinc-600">{episode.date}</span>
        </div>
        <h3 className="text-sm font-semibold text-zinc-100 leading-snug mb-0.5 line-clamp-2 group-hover:text-cyan-300 transition-colors">
          {episode.title}
        </h3>
        <p className="text-xs text-cyan-400/80 font-medium mb-1">{episode.guest}</p>
        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">{episode.excerpt}</p>
      </div>

      {/* Play */}
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <button className="w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center text-[#09090b] transition-colors group-hover:scale-105 duration-200">
          ▶
        </button>
        <span className="text-[10px] text-zinc-600 whitespace-nowrap">{episode.duration}</span>
      </div>
    </div>
  )
}
