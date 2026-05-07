'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const BOOKS = [
  {
    id: 1,
    title: 'Panchamrita',
    titleHindi: 'पंचामृत',
    description: 'His most widely circulated book — an amalgamation of Astrology, Vastu, The Might of Mantras, reflections on daily living and some eternal mandates.',
    coverColor: 'from-blue-950 to-indigo-900',
    coverSeed: 'book-panchamrita',
  },
  {
    id: 2,
    title: 'Panchaamrita',
    titleHindi: 'Panchtatwa — The Law of Creation',
    description: 'English edition. An amalgamation of Astrology, Vastu, The Might of Mantras, some reflections on daily living and some eternal mandates.',
    coverColor: 'from-amber-800 to-orange-700',
    coverSeed: 'book-panchaamrita-en',
  },
  {
    id: 3,
    title: 'Hinduism — Ten Sanatan Dharmas',
    titleHindi: 'हिंदूज्म',
    description: 'A book on God, Goddesses, rituals and prayers of Hindu Dharma.',
    coverColor: 'from-red-900 to-red-800',
    coverSeed: 'book-hinduism',
  },
  {
    id: 4,
    title: 'Vastu Vimarsh',
    titleHindi: 'वास्तु विमर्श',
    description: 'A book on principles and application of Vastu in architecture and interior.',
    coverColor: 'from-orange-900 to-amber-800',
    coverSeed: 'book-vastu',
  },
  {
    id: 5,
    title: 'Kundli Vivechan',
    titleHindi: 'विंशोत्तरी, योगिनी, जेमिनी दशा',
    description: 'Reveals the secret technique of horoscope reading using applied dasha with vimshotri, yogini and gemini.',
    coverColor: 'from-blue-950 to-blue-900',
    coverSeed: 'book-kundli',
  },
  {
    id: 6,
    title: 'Prashna Samadhan',
    titleHindi: 'प्रश्न समाधान',
    description: 'A book on Horary Astrology. A unique concept on Vedic Astrology which covers all types of questions such as marriage, profession and more.',
    coverColor: 'from-orange-800 to-yellow-700',
    coverSeed: 'book-prashna',
  },
  {
    id: 7,
    title: 'Kalinga Yudh',
    titleHindi: 'कलिंग युद्ध',
    description: 'A unique style of poetry — the complete story of Emperor Ashok with special reference to his victory over Kaling and later his conversion into Buddhism.',
    coverColor: 'from-stone-900 to-red-950',
    coverSeed: 'book-kalinga',
  },
  {
    id: 8,
    title: 'Jyotish mein Rog aur Nidaan',
    titleHindi: 'ज्योतिषमें रोग और निदान',
    description: 'A complete book on Medical Astrology with detailed studies of combination of diseases and their remedies.',
    coverColor: 'from-blue-950 to-cyan-900',
    coverSeed: 'book-medical',
  },
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-14 px-6 border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Written Wisdom</span>
          <h1 className="font-display text-5xl text-parchment mt-3">Books by Guruji</h1>
          <p className="font-body text-parchment-muted text-base mt-3 max-w-lg leading-relaxed">
            Sri Guru Ji Dr. Manoj K Juyal has authored works spanning Vedic Astrology, Vastu, Mantras,
            spirituality and poetry.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {BOOKS.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col"
            >
              {/* Cover */}
              <div className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b ${book.coverColor} mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <p className="font-display text-white/90 text-lg leading-tight">{book.title}</p>
                  <p className="font-body text-white/60 text-xs mt-2">{book.titleHindi}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-body text-white/70 text-[10px] text-center">Sri Guru Ji Manoj K Juyal</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <h3 className="font-display text-lg text-parchment leading-snug mb-1">{book.title}</h3>
                <p className="font-body text-xs text-parchment-muted leading-relaxed flex-1">{book.description}</p>
                <a
                  href="https://www.panchtatwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-body text-sm text-gold hover:text-gold-light transition-colors"
                >
                  Get this book →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
