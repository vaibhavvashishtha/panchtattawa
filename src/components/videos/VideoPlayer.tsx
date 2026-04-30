'use client'

import { useState, useEffect } from 'react'
import type { Video } from '@/lib/types'

interface VideoPlayerProps {
  video: Video
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const [info, setInfo] = useState<{ url: string; type: 'embed' | 'native' } | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function resolve() {
      try {
        const res = await fetch(`/api/video-url/${video.id}`)
        if (!res.ok) throw new Error('Failed to resolve video URL')
        const data = await res.json() as { url: string; type: 'embed' | 'native' }
        setInfo(data)
      } catch {
        setError(true)
      }
    }
    resolve()
  }, [video.id])

  if (error) {
    return (
      <div className="aspect-video bg-obsidian-50 rounded-2xl flex items-center justify-center border border-red-500/20">
        <p className="font-body text-sm text-parchment-muted">Could not load video. Please try again.</p>
      </div>
    )
  }

  if (!info) {
    return (
      <div className="aspect-video bg-obsidian-50 rounded-2xl animate-pulse flex items-center justify-center">
        <span className="font-display text-4xl text-gold/20 animate-spin-slow">ॐ</span>
      </div>
    )
  }

  if (info.type === 'embed') {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
        <iframe
          src={info.url}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={video.title}
        />
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-black">
      <video
        src={info.url}
        controls
        className="w-full h-full"
        playsInline
        poster={video.thumbnail}
      >
        Your browser does not support the video element.
      </video>
    </div>
  )
}
