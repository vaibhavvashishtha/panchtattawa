'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const BASE = 'https://www.panchtatwa.com/static/media'

const EVENTS = [
  {
    id: 1,
    title: 'Gurupoornima Celebrations',
    category: 'Ashram Event',
    description: 'The annual Gurupoornima celebration at Panchtatwa Ashram — a sacred gathering of disciples and seekers to honour Sri Guru Ji.',
    images: [
      `${BASE}/GP_2024_1.8c9daafa431a729db579.jpeg`,
      `${BASE}/GP_2024_2.57ddcbe468bd19ef23e1.jpeg`,
      `${BASE}/GP_2024_3.aa8a1bdd6bb26b98e1b9.jpeg`,
      `${BASE}/GP_2023_1.4b5446a85524266824ca.JPG`,
      `${BASE}/GP_2023_2.625601c58312582ee060.JPG`,
      `${BASE}/GP_2022_1.890fac62b0113d796c34.JPG`,
      `${BASE}/GP_2022_2.4428891470c02225589b.JPG`,
      `${BASE}/GP_2022_3.affedfc4cbcb534422f6.JPG`,
      `${BASE}/GP_2020_1.bbabbf04a8e3cfb123fc.JPG`,
      `${BASE}/GP_2020_2.332b5572e942f2aa2e8f.JPG`,
      `${BASE}/GP_2016_1.44a12fe366fa82730b49.JPG`,
      `${BASE}/GP_2015_1.137ee8efe535916a648e.JPG`,
      `${BASE}/GP_2014_1.da7bf3fb068fd0d8cfd9.JPG`,
      `${BASE}/GP_2014_2.df1094008681b04c2fea.JPG`,
    ],
  },
  {
    id: 2,
    title: 'Astro-Vastu Session — Army Cantt., Jalandhar',
    category: 'Workshop',
    description: 'Sri Guru Ji conducting Astro-Vastu sessions for the armed forces at Jalandhar Cantt — bringing Vedic wisdom to the defenders of the nation.',
    images: [
      `${BASE}/ICW1.b186957aa3985c533920.jpeg`,
      `${BASE}/ICW2.7086b7475ac11120fca2.jpeg`,
    ],
  },
  {
    id: 3,
    title: 'My Earth My Responsibility — Singapore',
    category: 'International Event',
    description: 'An international event in Singapore focusing on sustainable living aligned with Vedic principles of Panchtatwa.',
    images: [
      `${BASE}/avs1.fb453fcb7c3b888efb23.jpeg`,
      `${BASE}/avrc1.c5be08880c5080fe739d.jpeg`,
      `${BASE}/avrc2.530faf6c3ae856f160ce.jpeg`,
    ],
  },
  {
    id: 4,
    title: 'National Conference on Environment & Sustainable Living',
    category: 'Conference',
    description: 'Sri Guru Ji addressing a national conference on environment and sustainable living using the Panchtatwa framework.',
    images: [
      `${BASE}/ncesl1.219971a921996a51ecf8.jpeg`,
      `${BASE}/ncesl2.3c08c14f8f3c09c1dd78.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'Astro-Vastu Way of Life Workshop — Singapore',
    category: 'International Workshop',
    description: 'A transformative workshop in Singapore exploring the Astro-Vastu way of life for modern seekers.',
    images: [
      `${BASE}/YMCA.3b234280220136b0956d.jpeg`,
    ],
  },
]

const CAT_COLORS: Record<string, string> = {
  'Ashram Event': 'bg-gold/10 text-gold border-gold/25',
  'Workshop': 'bg-amber-100 text-amber-700 border-amber-200',
  'International Event': 'bg-blue-100 text-blue-700 border-blue-200',
  'Conference': 'bg-violet-100 text-violet-700 border-violet-200',
  'International Workshop': 'bg-blue-100 text-blue-700 border-blue-200',
}

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  const [active, setActive] = useState(0)
  const mainImgs = event.images.slice(0, 6)
  const colors = CAT_COLORS[event.category] || CAT_COLORS['Workshop']

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      className="border border-parchment/10 rounded-2xl overflow-hidden bg-obsidian-100"
    >
      {/* Main image */}
      <div className="relative aspect-[16/8] bg-obsidian-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={mainImgs[active]}
              alt={`${event.title} — ${active + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4">
          <span className={`font-body text-xs px-3 py-1 rounded-full border ${colors}`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Thumbnails (only if > 1 image) */}
      {mainImgs.length > 1 && (
        <div className="grid grid-flow-col auto-cols-fr gap-1 p-1">
          {mainImgs.map((src, j) => (
            <button
              key={j}
              onClick={() => setActive(j)}
              className={`relative aspect-video overflow-hidden rounded transition-opacity ${active === j ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-90'}`}
            >
              <Image src={src} alt="" fill sizes="15vw" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="p-6">
        <h2 className="font-display text-xl text-parchment mb-2">{event.title}</h2>
        <p className="font-body text-sm text-parchment-muted leading-relaxed">{event.description}</p>
      </div>
    </motion.div>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-16 px-6 border-b border-parchment/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Past & Upcoming</span>
            <h1 className="font-display text-5xl lg:text-6xl text-parchment mt-3">Events & Classes</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Sri Guru Ji conducts workshops, sessions and conferences across India and internationally —
              bringing Vedic wisdom to seekers everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notify banner */}
      <div className="bg-gold/8 border-b border-gold/15 py-3 px-6 text-center">
        <p className="font-body text-sm text-parchment-muted">
          Want to be notified about upcoming events?{' '}
          <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors font-medium">
            Follow on Instagram
          </a>
          {' '}or call{' '}
          <a href="tel:+919810046385" className="text-gold hover:text-gold-light transition-colors font-medium">
            +91 98100 46385
          </a>
        </p>
      </div>

      {/* Events grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* Social follow */}
      <section style={{ backgroundColor: '#1A0F08' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Stay Connected</span>
          <h2 className="font-display text-3xl text-white mt-2 mb-8">Follow on Social Media</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Instagram size={24} className="text-pink-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Instagram</p>
                <p className="font-body text-white/50 text-xs">@srigurujimanojkjuyal</p>
              </div>
            </a>
            <a href="https://www.facebook.com/panchtatwa/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Facebook size={24} className="text-blue-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Facebook</p>
                <p className="font-body text-white/50 text-xs">facebook.com/panchtatwa</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@panchtatwa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Youtube size={24} className="text-red-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">YouTube</p>
                <p className="font-body text-white/50 text-xs">@panchtatwa</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
