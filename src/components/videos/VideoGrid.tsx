import { VideoCard } from './VideoCard'
import type { Video } from '@/lib/types'

interface VideoGridProps {
  videos: Video[]
  emptyMessage?: string
}

export function VideoGrid({ videos, emptyMessage = 'No videos found.' }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl text-parchment-muted/40 mb-2">ॐ</p>
        <p className="font-body text-parchment-muted">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video, i) => (
        <VideoCard key={video.id} video={video} index={i} />
      ))}
    </div>
  )
}
