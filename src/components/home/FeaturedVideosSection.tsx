'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Clock, ArrowRight } from 'lucide-react'
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

function FeaturedCard({ video, index }: { video: Video; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/videos/${video.id}`} className="group block">
        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
              <Play size={18} fill="currentColor" className="text-obsidian ml-0.5" />
            </div>
          </div>
          {/* Duration */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-obsidian/80 rounded-full px-2 py-0.5 text-xs text-parchment font-body">
            <Clock size={10} />
            {video.duration}
          </div>
          {/* Premium badge */}
          {video.isPremium ? (
            <div className="absolute top-3 left-3">
              <Badge variant="premium">✦ Premium</Badge>
            </div>
          ) : (
            <div className="absolute top-3 left-3">
              <Badge variant="free">Free</Badge>
            </div>
          )}
        </div>

        <Badge variant="gold" className="mb-2">
          {CATEGORY_LABELS[video.category] || video.category}
        </Badge>
        <h3 className="font-display text-lg text-parchment group-hover:text-gold transition-colors leading-snug mb-1">
          {video.title}
        </h3>
        <p className="font-body text-sm text-parchment-muted line-clamp-2">{video.description}</p>
      </Link>
    </motion.div>
  )
}

export function FeaturedVideosSection({ videos }: { videos: Video[] }) {
  return (
    <section className="bg-obsidian py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Start Here</span>
            <h2 className="font-display text-4xl text-parchment mt-2">Featured Sessions</h2>
          </div>
          <Link href="/videos">
            <Button variant="ghost" size="sm" className="group hidden sm:flex">
              View all
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <FeaturedCard key={v.id} video={v} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/videos">
            <Button variant="outline">View All Sessions</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
