'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EVENTS = [
  {
    id: 1,
    title: 'Astro-Vastu Session — Army Cantt., Jalandhar',
    category: 'Workshop',
    images: ['https://picsum.photos/seed/event-army1/600/400', 'https://picsum.photos/seed/event-army2/600/400'],
  },
  {
    id: 2,
    title: 'My Earth My Responsibility — Singapore',
    category: 'International Event',
    images: ['https://picsum.photos/seed/event-sg1/600/400', 'https://picsum.photos/seed/event-sg2/600/400'],
  },
  {
    id: 3,
    title: 'National Conference on Environment and Sustainable Living',
    category: 'Conference',
    images: ['https://picsum.photos/seed/event-conf1/600/400', 'https://picsum.photos/seed/event-conf2/600/400'],
  },
  {
    id: 4,
    title: 'India City Walks',
    category: 'Community',
    images: ['https://picsum.photos/seed/event-walk1/600/400', 'https://picsum.photos/seed/event-walk2/600/400'],
  },
  {
    id: 5,
    title: 'Astro-Vastu Way of Life Workshop — Singapore',
    category: 'International Workshop',
    images: ['https://picsum.photos/seed/event-sg-ws1/600/400', 'https://picsum.photos/seed/event-sg-ws2/600/400'],
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Workshop': 'bg-gold/10 text-gold border-gold/20',
  'International Event': 'bg-blue-50 text-blue-700 border-blue-200',
  'Conference': 'bg-violet-50 text-violet-700 border-violet-200',
  'Community': 'bg-green-50 text-green-700 border-green-200',
  'International Workshop': 'bg-blue-50 text-blue-700 border-blue-200',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-14 px-6 border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Past & Upcoming</span>
          <h1 className="font-display text-5xl text-parchment mt-3">Events & Classes</h1>
          <p className="font-body text-parchment-muted text-base mt-3 max-w-lg leading-relaxed">
            Sri Guru Ji conducts workshops, sessions and conferences across India and internationally —
            bringing Vedic wisdom to seekers everywhere.
          </p>
        </div>
      </section>

      {/* Notify banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-3 px-6 text-center">
        <p className="font-body text-sm text-parchment-muted">
          Want to be notified about upcoming events?{' '}
          <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
            Follow on Instagram
          </a>{' '}
          or call{' '}
          <a href="tel:+919810046385" className="text-gold hover:text-gold-light transition-colors">+91 98100 46385</a>
        </p>
      </div>

      {/* Events list */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-16">
        {EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-body text-xs px-3 py-1 rounded-full border ${CATEGORY_COLORS[event.category] || 'bg-gold/10 text-gold border-gold/20'}`}>
                {event.category}
              </span>
              <h2 className="font-display text-xl text-parchment">{event.title}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {event.images.map((src, j) => (
                <div key={j} className="relative aspect-video rounded-xl overflow-hidden bg-obsidian-50">
                  <Image
                    src={src}
                    alt={`${event.title} — photo ${j + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
