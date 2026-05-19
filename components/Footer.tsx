import Link from "next/link"

const columns = [
  {
    heading: "Platform",
    links: [
      { label: "Stories", href: "/blog" },
      { label: "Voices Podcast", href: "/podcast" },
      { label: "Perspectives", href: "/#perspectives" },
      { label: "Community Blog", href: "/blog" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Share Your Story", href: "/#share" },
      { label: "Submit Photos", href: "#" },
      { label: "Partner With Us", href: "#" },
      { label: "Volunteer", href: "#" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Mission", href: "/#about" },
      { label: "Team", href: "#" },
      { label: "Impact Report", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                Connect<span className="text-cyan-400">ED</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Founded in Jakarta in 2025, we capture the stories that bridge
              divides and inspire positive change across Indonesia and beyond.
            </p>
            <div className="flex gap-3">
              {["📘", "📸", "🐦", "📺"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-sm transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-600">
            © 2025 ConnectED Foundation. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Made with ❤️ for communities everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
