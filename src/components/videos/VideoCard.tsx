'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Clock, Eye, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Video } from '@/lib/types'

const CATEGORY_LABELS: Record<string, string> = {
  'panch-tatwa': 'Panch Tatwa',
  meditation: 'Meditation',
  astrology: 'Astrology',
  'vedic-astrology': 'Vedic Astrology',
  healing: 'Healing',
}

const CATEGORY_VARIANTS: Record<string, 'gold' | 'terracotta' | 'sage' | 'muted'> = {
  'panch-tatwa': 'gold',
  meditation: 'sage',
  astrology: 'terracotta',
  'vedic-astrology': 'terracotta',
  healing: 'sage',
}

interface VideoCardProps {
  video: Video
  index?: number
}

export function VideoCard({ video, index = 0 }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/videos/${video.id}`} className="group block">
        {/* Thumbnail */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-obsidian-50">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

          {/* Hover play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-gold/30">
              <Play size={16} fill="currentColor" className="text-obsidian ml-0.5" />
            </div>
          </div>

          {/* Top badges */}
          <div className="absolute top-2.5 left-2.5 flex gap-1.5">
            {video.isPremium ? (
              <Badge variant="premium" className="text-[10px]">
                <Lock size={9} />
                Premium
              </Badge>
            ) : (
              <Badge variant="free" className="text-[10px]">Free</Badge>
            )}
          </div>

          {/* Duration */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-obsidian/80 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] text-parchment font-body">
            <Clock size={9} />
            {video.duration}
          </div>
        </div>

        {/* Meta */}
        <div className="space-y-2">
          <Badge variant={CATEGORY_VARIANTS[video.category] || 'muted'} className="text-[10px]">
            {CATEGORY_LABELS[video.category] || video.category}
          </Badge>

          <h3 className="font-display text-lg text-parchment group-hover:text-gold transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>

          <p className="font-body text-sm text-parchment-muted line-clamp-2 leading-relaxed">
            {video.description}
          </p>

          {video.viewCount && (
            <div className="flex items-center gap-1 text-parchment-muted/60">
              <Eye size={12} />
              <span className="font-body text-sm">{video.viewCount.toLocaleString()} views</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
