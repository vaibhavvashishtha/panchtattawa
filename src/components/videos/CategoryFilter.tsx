'use client'

import { cn } from '@/lib/cn'
import type { VideoCategory } from '@/lib/types'

const CATEGORIES: { value: VideoCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'panch-tatwa', label: 'Panch Tatwa' },
  { value: 'meditation', label: 'Meditation' },
  { value: 'vedic-astrology', label: 'Vedic Astrology' },
  { value: 'astrology', label: 'Astrology' },
  { value: 'healing', label: 'Healing' },
]

interface CategoryFilterProps {
  value: VideoCategory
  onChange: (v: VideoCategory) => void
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            'font-body text-sm rounded-full px-4 py-2 border transition-all duration-200',
            value === cat.value
              ? 'bg-gold text-obsidian border-gold font-medium'
              : 'bg-transparent text-parchment-muted border-black/10 hover:border-gold/40 hover:text-parchment'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
