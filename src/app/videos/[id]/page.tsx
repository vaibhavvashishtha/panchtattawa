import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Eye, Tag, ArrowLeft } from 'lucide-react'
import { VideoPlayer } from '@/components/videos/VideoPlayer'
import { VideoCard } from '@/components/videos/VideoCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getVideoById, getVideos } from '@/lib/video-sources'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const video = await getVideoById(id)
  if (!video) return { title: 'Video Not Found' }
  return {
    title: video.title,
    description: video.description.slice(0, 160),
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  'panch-tatwa': 'Panch Tatwa',
  meditation: 'Meditation',
  astrology: 'Astrology',
  'vedic-astrology': 'Vedic Astrology',
  healing: 'Healing',
}

export default async function VideoDetailPage({ params }: Props) {
  const { id } = await params
  const [video, related] = await Promise.all([
    getVideoById(id),
    getVideos({ limit: 4 }),
  ])

  if (!video) notFound()

  const relatedVideos = related.filter((v) => v.id !== video.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Back */}
        <Link href="/videos" className="inline-flex items-center gap-2 text-parchment-muted hover:text-parchment text-sm font-body mb-8 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Library
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            {video.isPremium ? (
              <div className="aspect-video rounded-2xl overflow-hidden bg-obsidian-50 border border-gold/20 flex flex-col items-center justify-center gap-4 mb-6">
                <div className="relative w-full h-full">
                  <Image src={video.thumbnail} alt={video.title} fill sizes="100vw" className="object-cover opacity-30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <span className="text-gold text-2xl">✦</span>
                    </div>
                    <p className="font-display text-2xl text-parchment">Premium Content</p>
                    <p className="font-body text-sm text-parchment-muted">Sign in or subscribe to watch this session</p>
                    <div className="flex gap-3 mt-2">
                      <Link href="/auth/login">
                        <Button variant="outline" size="sm">Sign In</Button>
                      </Link>
                      <Link href="/auth/signup">
                        <Button variant="primary" size="sm">Subscribe</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <VideoPlayer video={video} />
              </div>
            )}

            {/* Video info */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={video.isPremium ? 'premium' : 'free'}>
                  {video.isPremium ? '✦ Premium' : 'Free'}
                </Badge>
                <Badge variant="gold">{CATEGORY_LABELS[video.category] || video.category}</Badge>
              </div>

              <h1 className="font-display text-3xl md:text-4xl text-parchment leading-tight">
                {video.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-parchment-muted text-sm font-body">
                {video.instructor && <span>{video.instructor}</span>}
                <span className="flex items-center gap-1"><Clock size={14} />{video.duration}</span>
                {video.viewCount && (
                  <span className="flex items-center gap-1"><Eye size={14} />{video.viewCount.toLocaleString()} views</span>
                )}
                <span>{new Date(video.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>

              <p className="font-body text-parchment-muted text-base leading-relaxed border-t border-black/5 pt-4">
                {video.description}
              </p>

              {video.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <Tag size={14} className="text-parchment-muted/50" />
                  {video.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs text-parchment-muted/60 bg-black/4 border border-black/8 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar — related videos */}
          <div>
            <h2 className="font-display text-xl text-parchment mb-6 pb-3 border-b border-gold/10">
              More Sessions
            </h2>
            <div className="space-y-6">
              {relatedVideos.map((v, i) => (
                <VideoCard key={v.id} video={v} index={i} />
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-black/5">
              <Link href="/videos">
                <Button variant="outline" size="sm" className="w-full">View All Sessions</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
