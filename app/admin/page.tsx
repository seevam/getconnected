"use client";

import { useState } from "react";
import { Link2, Play } from "lucide-react";
import { extractSpotifyId } from "@/data/spotify-links";

export default function AdminPage() {
  const [url, setUrl] = useState("");
  const [episodeId, setEpisodeId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handlePreview() {
    setError("");
    setEpisodeId(null);
    setSubmitted(false);

    const id = extractSpotifyId(url.trim());
    if (!id) {
      setError(
        "Could not extract episode ID. Make sure you're pasting a full Spotify episode URL."
      );
      return;
    }
    setEpisodeId(id);
  }

  async function handleSubmit() {
    if (!episodeId) return;
    setSubmitting(true);
    try {
      await fetch("/api/admin/add-spotify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), id: episodeId }),
      });
      setSubmitted(true);
    } catch {
      // silently handle — email failure shouldn't block the UI
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Play className="text-cyan-400 w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">Podcast Admin</h1>
          </div>
          <p className="text-zinc-400 text-base">
            Paste a Spotify episode URL to preview it before adding to the site.
          </p>
        </div>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePreview()}
              placeholder="https://open.spotify.com/episode/..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <button
            onClick={handlePreview}
            className="px-5 py-3 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold text-sm rounded-lg transition-colors whitespace-nowrap"
          >
            Preview
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-6">{error}</p>
        )}

        {/* Embed preview */}
        {episodeId && (
          <div className="mb-6">
            <iframe
              src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
              width="100%"
              height="152"
              style={{ borderRadius: "12px" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

            {/* Submit */}
            <div className="mt-4">
              {submitted ? (
                <p className="text-cyan-400 text-sm font-medium">
                  Submitted! The team will add this episode to the site shortly.
                </p>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-5 py-3 bg-violet-400 hover:bg-violet-300 disabled:opacity-50 text-zinc-950 font-semibold text-sm rounded-lg transition-colors"
                >
                  {submitting ? "Submitting…" : "Submit to Team"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
