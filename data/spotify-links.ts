export interface SpotifyEpisode {
  id: string;      // Spotify episode ID extracted from URL
  url: string;     // Full Spotify episode URL
  addedAt: string; // ISO date string
}

export const spotifyEpisodes: SpotifyEpisode[] = [
  // Episodes will be added here as they are published
];

export function extractSpotifyId(url: string): string | null {
  // Extract episode ID from URLs like:
  // https://open.spotify.com/episode/4uLU2Dps7CzNOHSlIHNFAB
  // https://open.spotify.com/episode/4uLU2Dps7CzNOHSlIHNFAB?si=xyz
  const match = url.match(/spotify\.com\/episode\/([A-Za-z0-9]+)/);
  return match ? match[1] : null;
}
