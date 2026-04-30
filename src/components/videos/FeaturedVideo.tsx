'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Clock, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Video } from '@/lib/types'

const CATEGORY_LABELS: Record<string, string> = {
  'panch-tatwa': 'Panch Tatwa',
  meditation: 'Meditation',
  astrology: 'Astrology',
  'vedic-astrology': 'Vedic Astrology',
  healing: 'Healing',
}

export function FeaturedVideo({ video }: { video: Video }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden group mb-10"
    >
      {/* Background image */}
      <div className="relative" style={{ minHeight: '340px', height: 'clamp(340px, 45vw, 520px)' }}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          priority
          sizes="100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-12 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="gold">{CATEGORY_LABELS[video.category] || video.category}</Badge>
              {!video.isPremium && <Badge variant="free">Free</Badge>}
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
              {video.title}
            </h2>

            <p className="font-body text-base text-white/80 mb-6 line-clamp-2 max-w-lg">
              {video.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-white/70 text-sm">
                <Clock size={14} />
                <span className="font-body">{video.duration}</span>
              </div>
              {video.viewCount && (
                <div className="flex items-center gap-1.5 text-white/70 text-sm">
                  <Eye size={14} />
                  <span className="font-body">{video.viewCount.toLocaleString()} views</span>
                </div>
              )}
            </div>

            <Link href={`/videos/${video.id}`}>
              <Button variant="primary" size="md" className="group/btn">
                <Play size={16} fill="currentColor" />
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
