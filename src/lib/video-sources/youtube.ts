/**
 * YouTube Data API v3 integration.
 *
 * How to enable:
 * 1. Go to https://console.cloud.google.com
 * 2. Enable "YouTube Data API v3"
 * 3. Create an API key and set YOUTUBE_API_KEY in .env.local
 * 4. Set NEXT_PUBLIC_VIDEO_SOURCE=youtube or NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID
 *
 * Videos added to the configured playlist automatically appear in the library.
 */

const API_BASE = 'https://www.googleapis.com/youtube/v3'

export function getYouTubeEmbedUrl(youtubeId: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay ? { autoplay: '1' } : {}),
  })
  return `https://www.youtube.com/embed/${youtubeId}?${params}`
}

export function getYouTubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

function parseISO8601Duration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return '0:00'
  const h = parseInt(match[1] || '0')
  const m = parseInt(match[2] || '0')
  const s = parseInt(match[3] || '0')
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${m}:${String(s).padStart(2, '0')}`
}

export async function fetchYouTubeVideoMetadata(youtubeId: string) {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) return null

  const res = await fetch(
    `${API_BASE}/videos?part=snippet,contentDetails,statistics&id=${youtubeId}&key=${apiKey}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return null

  const data = await res.json()
  const item = data.items?.[0]
  if (!item) return null

  return {
    title: item.snippet.title as string,
    description: item.snippet.description as string,
    thumbnail:
      (item.snippet.thumbnails?.maxres?.url as string) ||
      (item.snippet.thumbnails?.high?.url as string) ||
      getYouTubeThumbnail(youtubeId),
    duration: parseISO8601Duration(item.contentDetails.duration as string),
    viewCount: parseInt((item.statistics.viewCount as string) || '0'),
    publishedAt: item.snippet.publishedAt as string,
  }
}

export async function fetchYouTubePlaylistVideos(playlistId: string) {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) return []

  const res = await fetch(
    `${API_BASE}/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=50&key=${apiKey}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return []

  const data = await res.json()
  return (data.items || []) as Array<{
    contentDetails: { videoId: string }
    snippet: { title: string; description: string; publishedAt: string; thumbnails: Record<string, { url: string }> }
  }>
}
