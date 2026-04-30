'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MandalaBackground } from './MandalaBackground'

const STATS = [
  { icon: Users, value: '2,100+', label: 'Students' },
  { icon: Calendar, value: '8+ yrs', label: 'Practice' },
  { icon: Star, value: '4.9', label: 'Rating' },
]

const TAGS = ['Vedic Astrology', 'Panch Tatwa', 'Meditation', 'Sound Healing', 'Yoga Nidra']

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left column ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 font-body text-xs text-gold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-gold/40" />
              Panch Tatwa · Ancient Wisdom
              <span className="w-8 h-px bg-gold/40" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-parchment leading-[1.1] mb-6"
          >
            Find Your Path to{' '}
            <em className="not-italic text-gold">Inner Peace</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="font-body text-parchment-muted text-lg leading-relaxed mb-10 max-w-lg"
          >
            Guided by Sri Guru Ji Manoj K Juyal, explore the five elements that govern all
            existence — Earth, Water, Fire, Air, and Space. Transform your health,
            relationships, and consciousness through ancient Vedic wisdom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/book">
              <Button variant="primary" size="lg" className="group">
                Book a Session
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/videos">
              <Button variant="outline" size="lg">
                Explore Library
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center gap-8"
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-gold/70" />
                <div>
                  <p className="font-display text-xl text-parchment leading-none">{value}</p>
                  <p className="font-body text-xs text-parchment-muted">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — Guru Ji composition ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center"
        >
          {/* Mandala + avatar stack */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center animate-float">
            {/* Rotating outer mandala */}
            <MandalaBackground className="absolute inset-0 w-full h-full animate-spin-slow" />
            {/* Counter-rotating inner mandala */}
            <MandalaBackground className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] animate-spin-reverse opacity-60" />

            {/* Avatar circle — replace inner div with <Image> when real photo is available */}
            <div className="relative z-10 w-44 h-44 md:w-48 md:h-48 rounded-full border-2 border-gold/50 animate-pulse-gold flex items-center justify-center overflow-hidden shadow-xl shadow-gold/20">
              <div className="w-full h-full bg-gradient-to-br from-gold/30 via-terracotta/15 to-obsidian-100 flex items-center justify-center">
                <span className="font-display text-6xl text-gold/70">ॐ</span>
              </div>
            </div>
          </div>

          {/* Guru Ji name card */}
          <div className="mt-8 text-center">
            <p className="font-display text-2xl text-parchment">Sri Guru Ji Manoj K Juyal</p>
            <p className="font-body text-sm text-parchment-muted mt-1">
              Vedic Astrologer · Panch Tatwa Guide
            </p>
          </div>

          {/* Topic tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs text-gold/70 bg-gold/8 border border-gold/15 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-body text-xs text-parchment-muted/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
      </motion.div>
    </section>
  )
}
