'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { CategoryFilter } from '@/components/videos/CategoryFilter'
import { VideoGrid } from '@/components/videos/VideoGrid'
import { FeaturedVideo } from '@/components/videos/FeaturedVideo'
import { MOCK_VIDEOS } from '@/data/videos'
import type { VideoCategory } from '@/lib/types'

export default function VideosPage() {
  const [category, setCategory] = useState<VideoCategory>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let vids = MOCK_VIDEOS
    if (category !== 'all') {
      vids = vids.filter((v) => v.category === category)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      vids = vids.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return vids
  }, [category, search])

  const featured = MOCK_VIDEOS.find((v) => v.isFeatured && (category === 'all' || v.category === category))
  const grid = featured ? filtered.filter((v) => v.id !== featured.id) : filtered

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Page header */}
      <div className="relative overflow-hidden bg-obsidian-100 border-b border-gold/10 py-16 px-6">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Ancient Wisdom</span>
          <h1 className="font-display text-5xl md:text-6xl text-parchment mt-2 mb-3">Content Library</h1>
          <p className="font-body text-parchment-muted text-lg max-w-xl">
            Sessions, meditations, and teachings by Sri Guru Ji — free and premium. Learn at your own pace.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Filter toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <CategoryFilter value={category} onChange={setCategory} />
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment-muted" />
            <input
              type="text"
              placeholder="Search sessions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-obsidian-50 border border-black/10 rounded-full pl-9 pr-4 py-2.5 font-body text-sm text-parchment placeholder:text-parchment-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="font-body text-xs text-parchment-muted mb-6">
          {filtered.length} {filtered.length === 1 ? 'session' : 'sessions'} found
        </p>

        {/* Featured video hero */}
        {featured && <FeaturedVideo video={featured} />}

        {/* Grid */}
        <VideoGrid
          videos={grid}
          emptyMessage="No sessions match your search. Try a different category or keyword."
        />
      </div>
    </div>
  )
}
