'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    title: 'Vedic Astrology Consultation',
    subtitle: 'Kundli Reading & Analysis',
    price: '₹2,100',
    duration: '60 minutes',
    description: 'A comprehensive reading of your birth chart covering career, relationships, health, and life path through the lens of Vedic astrology.',
    includes: [
      'Full Kundli (birth chart) analysis',
      'Dasha & transit predictions',
      'Remedies & recommendations',
      'Recorded session (on request)',
      'WhatsApp follow-up support',
    ],
    highlight: false,
    badge: '',
  },
  {
    title: 'Vastu Consultation',
    subtitle: 'Home or Office',
    price: '₹5,100',
    duration: 'Site visit / Online',
    description: 'Align your living or work space with the five elements of nature. Vastu corrections for health, prosperity, and harmony.',
    includes: [
      'Full Vastu analysis of the space',
      'Element mapping & corrections',
      'Recommendations for each direction',
      'Follow-up consultation included',
      'Written report provided',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    title: 'Astro-Vastu Combined',
    subtitle: 'Holistic Guidance',
    price: '₹7,500',
    duration: '90 minutes + site visit',
    description: 'The most comprehensive offering — combining your personal astrological chart with Vastu analysis of your space for holistic alignment.',
    includes: [
      'Full Kundli + Vastu analysis',
      'Personalised element balancing',
      'Remedies for chart & space',
      'Priority WhatsApp support (30 days)',
      'Detailed written report',
    ],
    highlight: false,
    badge: 'Best Value',
  },
]

const WORKSHOPS = [
  {
    title: 'Astro-Vastu Workshop',
    format: 'Group · In-person or Online',
    price: 'Contact for pricing',
    description: 'Comprehensive workshop covering the principles of Vedic Astrology and Vastu Shastra. Conducted regularly across India and internationally.',
  },
  {
    title: 'Panchtatwa Healing Sessions',
    format: 'Group · Ashram or Online',
    price: 'Contact for pricing',
    description: 'Learn to balance the five elements within yourself through meditation, mantra, and elemental healing practices.',
  },
  {
    title: 'Corporate Vastu Program',
    format: 'Custom · For organisations',
    price: 'Contact for pricing',
    description: 'Tailored Vastu and wellness programs for offices, hotels, hospitals and corporate campuses.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-16 px-6 border-b border-parchment/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Services & Fees</span>
            <h1 className="font-display text-5xl lg:text-6xl text-parchment mt-3">Pricing</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-xl leading-relaxed">
              Consultations are available in-person at the Ashram, via phone, or online.
              All fees are inclusive of taxes. Contact us for group or international rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1:1 Consultations */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl text-parchment mb-10"
        >
          Personal Consultations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                s.highlight
                  ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                  : 'border-parchment/10 bg-obsidian-100'
              }`}
            >
              {s.badge && (
                <span className="absolute -top-3 left-6 bg-gold text-white font-body text-xs px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-display text-2xl text-parchment">{s.title}</h3>
                <p className="font-body text-sm text-parchment-muted mt-1">{s.subtitle}</p>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="font-display text-4xl text-gold">{s.price}</span>
                </div>
                <p className="font-body text-xs text-parchment-muted mt-1">{s.duration}</p>
              </div>

              <p className="font-body text-sm text-parchment-muted leading-relaxed mb-6">
                {s.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={14} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-parchment-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919810046385?text=I%20would%20like%20to%20book%20a%20consultation%20for%20"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-body text-sm font-medium transition-all ${
                  s.highlight
                    ? 'bg-gold text-white hover:bg-gold-dark'
                    : 'border border-gold text-gold hover:bg-gold/8'
                }`}
              >
                <MessageCircle size={15} />
                Book via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-obsidian-100 border-t border-parchment/8 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl text-parchment mb-10"
          >
            Workshops & Group Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKSHOPS.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-obsidian border border-parchment/8 rounded-2xl p-7"
              >
                <h3 className="font-display text-xl text-parchment mb-1">{w.title}</h3>
                <p className="font-body text-xs text-gold mb-3">{w.format}</p>
                <p className="font-body text-sm text-parchment-muted leading-relaxed mb-5">{w.description}</p>
                <p className="font-body text-sm font-semibold text-parchment">{w.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A0F08' }} className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl text-white mb-3">Book Your Consultation</h2>
          <p className="font-body text-white/60 text-sm max-w-sm mx-auto mb-8">
            Reach out via WhatsApp or phone to schedule your appointment with Sri Guru Ji.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919810046385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-body text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#1ebe5a] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp: +91 98100 46385
            </a>
            <a
              href="tel:+919810046385"
              className="font-body text-gold hover:text-gold-light text-sm transition-colors"
            >
              Call: +91 98100 46385
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
