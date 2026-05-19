import type { Metadata } from "next"
import StoryCard from "@/components/StoryCard"
import { stories } from "@/data/stories"
import type { CategoryColor } from "@/data/stories"

export const metadata: Metadata = {
  title: "Stories",
  description: "All stories from ConnectED - real people, real change.",
}

const allCategories: { label: string; value: string }[] = [
  { label: "All Stories", value: "all" },
  { label: "Social Innovation", value: "Social Innovation" },
  { label: "Community Impact", value: "Community Impact" },
  { label: "Education", value: "Education" },
  { label: "Environment", value: "Environmental Innovation" },
  { label: "Charity", value: "Charity" },
  { label: "Migrant Empowerment", value: "Migrant Empowerment" },
]

const colorMap: Record<CategoryColor, string> = {
  cyan:    "from-cyan-900/40 to-[#09090b]",
  emerald: "from-emerald-900/40 to-[#09090b]",
  sky:     "from-sky-900/40 to-[#09090b]",
  orange:  "from-orange-900/40 to-[#09090b]",
  violet:  "from-violet-900/40 to-[#09090b]",
  amber:   "from-amber-900/40 to-[#09090b]",
  rose:    "from-rose-900/40 to-[#09090b]",
  teal:    "from-teal-900/40 to-[#09090b]",
}

export default function BlogPage() {
  const featured = stories[0]

  return (
    <>
      {/* Header */}
      <section
        className={`pt-28 pb-16 bg-gradient-to-b ${colorMap[featured.categoryColor]} relative overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            📖 ConnectED Stories
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Stories, Insights &amp; Community Updates
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Dive into the stories behind the storytelling. Discover insights,
            community updates, and authentic narratives from across Indonesia
            and beyond.
          </p>
        </div>
      </section>

      {/* Filter bar (visual only - server component) */}
      <div className="sticky top-16 z-30 bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {allCategories.map((cat) => (
            <span
              key={cat.value}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                cat.value === "all"
                  ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured story */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            ⭐ Featured Story
          </p>
          <StoryCard story={featured} featured />
        </div>

        {/* All stories grid */}
        <div>
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
            All Stories - {stories.length} published
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {stories.slice(1).map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
