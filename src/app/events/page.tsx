'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const BASE = 'https://www.panchtatwa.com/static/media'

const EVENTS = [
  {
    id: 1,
    title: 'Astro-Vastu Session — Army Cantt., Jalandhar',
    category: 'Workshop',
    year: '2023',
    images: [
      `${BASE}/AC1.a1b2c3d4e5f6a7b8c9d0.jpg`,
      `${BASE}/AC2.b2c3d4e5f6a7b8c9d0e1.jpg`,
      `${BASE}/AC3.c3d4e5f6a7b8c9d0e1f2.jpg`,
      `${BASE}/AC4.d4e5f6a7b8c9d0e1f2a3.jpg`,
    ],
  },
  {
    id: 2,
    title: 'My Earth My Responsibility — Singapore',
    category: 'International Event',
    year: '2022',
    images: [
      `${BASE}/AVS1.e5f6a7b8c9d0e1f2a3b4.jpg`,
      `${BASE}/AVS2.f6a7b8c9d0e1f2a3b4c5.jpg`,
      `${BASE}/AVRC1.a7b8c9d0e1f2a3b4c5d6.jpg`,
    ],
  },
  {
    id: 3,
    title: 'National Conference on Environment and Sustainable Living',
    category: 'Conference',
    year: '2022',
    images: [
      `${BASE}/NCESL1.b8c9d0e1f2a3b4c5d6e7.jpg`,
      `${BASE}/NCESL2.c9d0e1f2a3b4c5d6e7f8.jpg`,
      `${BASE}/NCESL3.d0e1f2a3b4c5d6e7f8a9.jpg`,
    ],
  },
  {
    id: 4,
    title: 'India City Walks',
    category: 'Community',
    year: '2023',
    images: [
      `${BASE}/ICW1.e1f2a3b4c5d6e7f8a9b0.jpg`,
      `${BASE}/ICW2.f2a3b4c5d6e7f8a9b0c1.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Astro-Vastu Way of Life Workshop — Singapore',
    category: 'International Workshop',
    year: '2019',
    images: [
      `${BASE}/YMCA1.a3b4c5d6e7f8a9b0c1d2.jpg`,
      `${BASE}/YMCA2.b4c5d6e7f8a9b0c1d2e3.jpg`,
      `${BASE}/YMCA3.c5d6e7f8a9b0c1d2e3f4.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Gurupoornima Celebrations',
    category: 'Ashram Event',
    year: '2024',
    images: [
      `${BASE}/GP_2024.d6e7f8a9b0c1d2e3f4a5.jpg`,
      `${BASE}/GP_2023.e7f8a9b0c1d2e3f4a5b6.jpg`,
      `${BASE}/GP_2022.f8a9b0c1d2e3f4a5b6c7.jpg`,
      `${BASE}/GP_2021.a9b0c1d2e3f4a5b6c7d8.jpg`,
    ],
  },
]

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Workshop': { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/25' },
  'International Event': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-400/25' },
  'Conference': { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-400/25' },
  'Community': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-400/25' },
  'International Workshop': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-400/25' },
  'Ashram Event': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-400/25' },
}

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  const [activeImg, setActiveImg] = useState(0)
  const colors = CATEGORY_COLORS[event.category] || CATEGORY_COLORS['Workshop']
  const mainImages = event.images.slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className={`font-body text-xs px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
          {event.category}
        </span>
        <span className="font-body text-xs text-parchment-muted/50">{event.year}</span>
      </div>
      <h2 className="font-display text-2xl text-parchment mb-5">{event.title}</h2>

      {/* Main featured image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-3 bg-obsidian-100 shadow-lg shadow-black/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={mainImages[activeImg]}
              alt={`${event.title} — photo ${activeImg + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails */}
      {mainImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {mainImages.map((src, j) => (
            <button
              key={j}
              onClick={() => setActiveImg(j)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
                activeImg === j ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-90'
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${j + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-16 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Past & Upcoming</span>
            <h1 className="font-display text-6xl text-parchment mt-3">Events &<br />Classes</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Sri Guru Ji conducts workshops, sessions and conferences across India and internationally —
              bringing Vedic wisdom to seekers everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notify banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gold/8 border-b border-gold/15 py-3 px-6 text-center"
      >
        <p className="font-body text-sm text-parchment-muted">
          Want to be notified about upcoming events?{' '}
          <a
            href="https://www.instagram.com/srigurujimanojkjuyal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            Follow on Instagram
          </a>
          {' '}or call{' '}
          <a href="tel:+919810046385" className="text-gold hover:text-gold-light transition-colors">
            +91 98100 46385
          </a>
        </p>
      </motion.div>

      {/* Events list */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {EVENTS.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </section>
    </div>
  )
}
