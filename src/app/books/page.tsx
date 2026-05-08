'use client'

import { useState } from 'react'
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
    accent: '#C04E18',
  },
  {
    id: 2,
    title: 'Panchaamrita (English)',
    titleHindi: 'Panchtatwa — The Law of Creation',
    description: 'English edition. An amalgamation of Astrology, Vastu, The Might of Mantras, some reflections on daily living and some eternal mandates.',
    cover: `${BASE}/1cover.e8f8bd7a9917f2797d06.jpg`,
    accent: '#8B4513',
  },
  {
    id: 3,
    title: 'Hinduism — Ten Sanatan Dharmas',
    titleHindi: 'हिंदूज्म',
    description: 'A book on God, Goddesses, rituals and prayers of Hindu Dharma.',
    cover: `${BASE}/Hinduism.cf1eedc2d51c029f9e29.jpeg`,
    accent: '#8B0000',
  },
  {
    id: 4,
    title: 'Vastu Vimarsh',
    titleHindi: 'वास्तु विमर्श',
    description: 'A book on principles and application of Vastu in architecture and interior design.',
    cover: `${BASE}/vastuVim.820361e0a859a3a4a95d.jpeg`,
    accent: '#6B4226',
  },
  {
    id: 5,
    title: 'Basic Vastu',
    titleHindi: 'बेसिक वास्तु',
    description: 'Foundations of Vastu Shastra — making your living and work spaces harmonious with nature.',
    cover: `${BASE}/basicVastu.caaa4881ac6ffa2cef68.jpg`,
    accent: '#4A7C59',
  },
  {
    id: 6,
    title: 'Advanced Vastu',
    titleHindi: 'एडवांस वास्तु',
    description: 'Deep-dive into advanced Vastu principles for architecture, energy flow and spatial harmony.',
    cover: `${BASE}/advanceVastu.6ab46e5771f32cd2b18c.jpg`,
    accent: '#2E5D4B',
  },
  {
    id: 7,
    title: 'Prashna Samadhan',
    titleHindi: 'प्रश्न समाधान',
    description: 'A book on Horary Astrology — a unique concept on Vedic Astrology covering all types of questions.',
    cover: `${BASE}/prashan.77f4d3647214933eb5f0.jpeg`,
    accent: '#B8860B',
  },
  {
    id: 8,
    title: 'Jemini Dasha',
    titleHindi: 'जेमिनी दशा',
    description: 'Reveals the secret technique of horoscope reading using the Jemini Dasha system.',
    cover: `${BASE}/jemini.e0826b1a7d40768ebff5.jpg`,
    accent: '#1C3A6B',
  },
  {
    id: 9,
    title: 'Jyotish Alankar',
    titleHindi: 'ज्योतिष अलंकार',
    description: 'An ornamental guide to Vedic Jyotish — the science and art of Hindu astrology.',
    cover: `${BASE}/jyotishAlankar.c1d2f3d838165eaaad2b.jpeg`,
    accent: '#4A2060',
  },
  {
    id: 10,
    title: 'Kalinga Yudh',
    titleHindi: 'कलिंग युद्ध',
    description: 'A unique style of poetry — the complete story of Emperor Ashok with special reference to his victory over Kaling.',
    cover: `${BASE}/kaling.fd7f7742dc06ce3f0533.jpeg`,
    accent: '#5C3A1E',
  },
  {
    id: 11,
    title: 'Medical Astrology',
    titleHindi: 'ज्योतिषमें रोग और निदान',
    description: 'A complete book on Medical Astrology with detailed studies of combination of diseases and their remedies.',
    cover: `${BASE}/medicalAstrology.59a9e6a96d8d1b345cb6.jpg`,
    accent: '#1B5E4A',
  },
]

export default function BooksPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-16 px-6 border-b border-parchment/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Written Wisdom</span>
            <h1 className="font-display text-5xl lg:text-6xl text-parchment mt-3">Books by Guruji</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Sri Guru Ji Dr. Manoj K Juyal has authored works spanning Vedic Astrology, Vastu, Mantras,
              spirituality and poetry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {BOOKS.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.07 }}
              className="group flex flex-col"
              onMouseEnter={() => setHoveredId(book.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Cover */}
              <motion.div
                animate={{ y: hoveredId === book.id ? -6 : 0 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 mb-4"
                style={{ backgroundColor: book.accent }}
              >
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Info */}
              <h3 className="font-display text-sm text-parchment leading-snug mb-0.5">{book.title}</h3>
              <p className="font-body text-[10px] text-parchment-muted/60 italic mb-1.5">{book.titleHindi}</p>
              <p className="font-body text-xs text-parchment-muted leading-relaxed flex-1 line-clamp-3">{book.description}</p>
              <a
                href="https://www.panchtatwa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 font-body text-xs text-gold hover:text-gold-light transition-colors"
              >
                Get this book →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-obsidian-100 border-t border-parchment/8 py-16 px-6 text-center"
      >
        <h3 className="font-display text-3xl text-parchment mb-3">Order Your Copy</h3>
        <p className="font-body text-parchment-muted text-sm max-w-sm mx-auto mb-5">
          Books are available at the Ashram and through our office. Contact us to order.
        </p>
        <a href="tel:+919810046385" className="font-body text-gold hover:text-gold-light text-lg transition-colors">
          +91 98100 46385
        </a>
      </motion.section>
    </div>
  )
}
