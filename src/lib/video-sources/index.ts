/**
 * Unified video source adapter.
 *
 * Each video has a `source` field that declares where it lives:
 *   - 'local'    → public/videos/<localPath>  (default for local dev, no API keys needed)
 *   - 'youtube'  → YouTube embed iframe via YouTube Data API v3
 *   - 's3'       → AWS S3 / Cloudflare R2 presigned URL → <video> element
 *   - 'supabase' → Supabase Storage URL (signed for premium, public for free)
 *
 * The player component calls getPlaybackUrl() and receives either:
 *   - An embed URL (YouTube) → render <iframe>
 *   - A direct video URL    → render <video>
 *
 * Video metadata always lives in the mock data (src/data/videos.ts) or Supabase DB.
 * The source adapter only resolves the *playback* URL at request time.
 */

import type { Video, VideoCategory } from '@/lib/types'
import { MOCK_VIDEOS } from '@/data/videos'

export type { Video }

// ─── Playback URL resolution ──────────────────────────────────────────────────

export type PlaybackType = 'embed' | 'native'

export interface PlaybackInfo {
  url: string
  type: PlaybackType
}

export async function getPlaybackInfo(video: Video): Promise<PlaybackInfo> {
  switch (video.source.type) {
    case 'youtube': {
      const { getYouTubeEmbedUrl } = await import('./youtube')
      return {
        url: getYouTubeEmbedUrl(video.source.youtubeId!),
        type: 'embed',
      }
    }

    case 's3': {
      const { getS3PresignedUrl } = await import('./s3')
      return {
        url: await getS3PresignedUrl(video),
        type: 'native',
      }
    }

    case 'supabase': {
      const { getSupabaseVideoUrl } = await import('./supabase-storage')
      return {
        url: await getSupabaseVideoUrl(video),
        type: 'native',
      }
    }

    case 'local':
    default:
      return {
        url: `/videos/${video.source.localPath}`,
        type: 'native',
      }
  }
}

// ─── Video metadata queries ───────────────────────────────────────────────────

export interface GetVideosParams {
  category?: VideoCategory
  search?: string
  limit?: number
  offset?: number
  featuredOnly?: boolean
}

export async function getVideos(params: GetVideosParams = {}): Promise<Video[]> {
  // In production: replace with a Supabase query against the `content` table
  let videos = [...MOCK_VIDEOS]

  if (params.category && params.category !== 'all') {
    videos = videos.filter((v) => v.category === params.category)
  }

  if (params.featuredOnly) {
    videos = videos.filter((v) => v.isFeatured)
  }

  if (params.search) {
    const q = params.search.toLowerCase()
    videos = videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  const offset = params.offset ?? 0
  if (params.limit) {
    videos = videos.slice(offset, offset + params.limit)
  }

  return videos
}

export async function getVideoById(id: string): Promise<Video | null> {
  return MOCK_VIDEOS.find((v) => v.id === id) ?? null
}
