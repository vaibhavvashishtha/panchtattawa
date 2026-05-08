'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE = 'https://www.panchtatwa.com/static/media'

const BOOKS = [
  {
    id: 1,
    title: 'Panchamrita',
    titleHindi: 'पंचामृत',
    description: 'His most widely circulated book — an amalgamation of Astrology, Vastu, The Might of Mantras, reflections on daily living and some eternal mandates.',
    cover: `${BASE}/panchamrit.6f7d7d2472ae866637f1.jpeg`,
  },
  {
    id: 2,
    title: 'Panchaamrita',
    titleHindi: 'Panchtatwa — The Law of Creation',
    description: 'English edition. An amalgamation of Astrology, Vastu, The Might of Mantras, some reflections on daily living and some eternal mandates.',
    cover: `${BASE}/1cover.e8f8bd7a9917f2797d06.jpg`,
  },
  {
    id: 3,
    title: 'Hinduism — Ten Sanatan Dharmas',
    titleHindi: 'हिंदूज्म',
    description: 'A book on God, Goddesses, rituals and prayers of Hindu Dharma.',
    cover: `${BASE}/Hinduism.cf1eedc2d51c029f9e29.jpeg`,
  },
  {
    id: 4,
    title: 'Vastu Vimarsh',
    titleHindi: 'वास्तु विमर्श',
    description: 'A book on principles and application of Vastu in architecture and interior.',
    cover: `${BASE}/4cover.7b5f2c6b2a4a4e2e4b1c.jpg`,
  },
  {
    id: 5,
    title: 'Kundli Vivechan',
    titleHindi: 'विंशोत्तरी, योगिनी, जेमिनी दशा',
    description: 'Reveals the secret technique of horoscope reading using applied dasha with vimshotri, yogini and gemini.',
    cover: `${BASE}/5cover.3a9f1c2b4d6e8f0a2c4e.jpg`,
  },
  {
    id: 6,
    title: 'Prashna Samadhan',
    titleHindi: 'प्रश्न समाधान',
    description: 'A book on Horary Astrology. A unique concept on Vedic Astrology which covers all types of questions such as marriage, profession and more.',
    cover: `${BASE}/prashan.77f4d3647214933eb5f0.jpeg`,
  },
  {
    id: 7,
    title: 'Kalinga Yudh',
    titleHindi: 'कलिंग युद्ध',
    description: 'A unique style of poetry — the complete story of Emperor Ashok with special reference to his victory over Kaling and later his conversion into Buddhism.',
    cover: `${BASE}/7cover.1b2c3d4e5f6a7b8c9d0e.jpg`,
  },
  {
    id: 8,
    title: 'Jyotish mein Rog aur Nidaan',
    titleHindi: 'ज्योतिषमें रोग और निदान',
    description: 'A complete book on Medical Astrology with detailed studies of combination of diseases and their remedies.',
    cover: `${BASE}/9cover.9e8d7c6b5a4f3e2d1c0b.jpg`,
  },
]

const FALLBACK_GRADIENTS = [
  'from-blue-950 to-indigo-900',
  'from-amber-800 to-orange-700',
  'from-red-900 to-red-800',
  'from-orange-900 to-amber-800',
  'from-blue-950 to-blue-900',
  'from-orange-800 to-yellow-700',
  'from-stone-900 to-red-950',
  'from-blue-950 to-cyan-900',
]

function BookCover({ book, gradient }: { book: typeof BOOKS[0]; gradient: string }) {
  return (
    <div className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b ${gradient} shadow-xl`}>
      <Image
        src={book.cover}
        alt={book.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  )
}

export default function BooksPage() {
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
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Written Wisdom</span>
            <h1 className="font-display text-6xl text-parchment mt-3">Books by<br />Guruji</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Sri Guru Ji Dr. Manoj K Juyal has authored works spanning Vedic Astrology, Vastu, Mantras,
              spirituality and poetry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {BOOKS.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <motion.div
                whileHover={{ y: -6, rotateY: 3 }}
                transition={{ duration: 0.3 }}
                className="mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/50 transition-shadow duration-400"
                style={{ transformPerspective: 800 }}
              >
                <BookCover book={book} gradient={FALLBACK_GRADIENTS[i]} />
              </motion.div>
              <div className="flex flex-col flex-1">
                <h3 className="font-display text-base text-parchment leading-snug mb-1">{book.title}</h3>
                <p className="font-body text-[11px] text-parchment-muted/70 italic mb-1">{book.titleHindi}</p>
                <p className="font-body text-xs text-parchment-muted leading-relaxed flex-1">{book.description}</p>
                <a
                  href="https://www.panchtatwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-body text-xs text-gold hover:text-gold-light transition-colors group/link"
                >
                  Get this book
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-obsidian-50 border-t border-white/5 py-16 px-6 text-center"
      >
        <h3 className="font-display text-3xl text-parchment mb-3">Order Your Copy</h3>
        <p className="font-body text-parchment-muted text-sm max-w-sm mx-auto mb-6">
          Books are available at the Ashram and through our office. Contact us to order.
        </p>
        <a
          href="tel:+919810046385"
          className="inline-block font-body text-gold hover:text-gold-light text-lg transition-colors"
        >
          +91 98100 46385
        </a>
      </motion.section>
    </div>
  )
}
