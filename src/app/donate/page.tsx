'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, BookOpen, Utensils, Landmark, Milk, Gift, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const BASE = 'https://www.panchtatwa.com/static/media'

const CAUSES = [
  {
    id: 'shiksha',
    title: 'Shiksha Daan',
    subtitle: 'Sponsor a child\'s education',
    description: 'We at Panchtatwa Ashram provide schooling to children of neighbouring villages whose parents unfortunately cannot afford their education. We also run a Sanskrit School — Acharya Ashtavakra Shastri Vidyalaya — since 2016.',
    amount: '₹500',
    amountNote: 'per month, per student',
    includes: 'Tuition fee, books, stationery and uniform',
    icon: BookOpen,
    accent: '#C9962A',
    image: `${BASE}/childSponserInsde1.7c8b9a0d1e2f3a4b5c6d.jpg`,
    fallbackGradient: 'from-amber-900 to-orange-900',
  },
  {
    id: 'ann',
    title: 'Ann Daan',
    subtitle: 'Help us feed the occupants',
    description: 'Managing the Ashram requires great strength which in return takes up a whole lot of resources. Your contribution of money or groceries goes directly towards feeding everyone.',
    amount: 'Any amount',
    amountNote: 'money or groceries',
    includes: 'Rice, pulses, cereals, flour, grains, sugar, oil, spices etc.',
    icon: Utensils,
    accent: '#5a7c3e',
    image: `${BASE}/aanDaanInside3.3a4b5c6d7e8f9a0b1c2d.jpg`,
    fallbackGradient: 'from-green-950 to-emerald-900',
  },
  {
    id: 'temple',
    title: 'Shiva Kami Pooja',
    subtitle: 'Panchmukhi Hanumaanji Temple',
    description: 'Seek Hanuman Ji\'s blessing in our one-of-a-kind auspicious temple by offering prayers to him daily, for your goodness of wellbeing.',
    amount: '₹1,000',
    amountNote: 'per month',
    includes: 'Panchmukhī pūjā, incense, daily aarti',
    icon: Landmark,
    accent: '#b5541c',
    image: `${BASE}/nitiyaKarmPoojaCover.5c6d7e8f9a0b1c2d3e4f.jpg`,
    fallbackGradient: 'from-orange-950 to-red-900',
  },
  {
    id: 'gau',
    title: 'Gau Seva',
    subtitle: 'Nursing and nourishment of cattle',
    description: 'The cow is the holiest of all animals. We nurture them with a lot of love and care at our Ashram, ensuring they are well-fed and healthy.',
    amount: '₹500',
    amountNote: 'per month',
    includes: 'Feed, fodder and veterinary care',
    icon: Milk,
    accent: '#5a7a2e',
    image: `${BASE}/gauDaanCover.6d7e8f9a0b1c2d3e4f5a.jpg`,
    fallbackGradient: 'from-lime-950 to-green-900',
  },
  {
    id: 'kanya',
    title: 'Kanya Daan',
    subtitle: 'For our daughters',
    description: 'In Hinduism, kanyadaan is considered the most sacred of all five rituals. Performing this for an under-privileged girl is a very big charity — it is our honour.',
    amount: '₹9,000',
    amountNote: 'per wedding',
    includes: 'Wedding ceremony support for underprivileged girls',
    icon: Gift,
    accent: '#9b3a6e',
    image: `${BASE}/kanyaDaanCover.7e8f9a0b1c2d3e4f5a6b.jpg`,
    fallbackGradient: 'from-pink-950 to-rose-900',
  },
  {
    id: 'ashram',
    title: 'Ashram Daan',
    subtitle: 'Managing the Ashram',
    description: 'Running a community requires everyday expenditure — police maintenance, community services, medical services, social services, general administration, housekeeping, electrical, water bills, staff salary and more.',
    amount: 'Any amount',
    amountNote: 'all contributions welcome',
    includes: 'General Ashram upkeep and operations',
    icon: Building2,
    accent: '#6b4fa0',
    image: `${BASE}/ashramPoster.a1b2c3d4e5f6a7b8c9d0.jpg`,
    fallbackGradient: 'from-violet-950 to-purple-900',
  },
]

export default function DonatePage() {
  const handleDonate = (_causeId: string) => {
    alert('Razorpay payment coming soon. Please contact +91 98100 46385 to donate.')
  }

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
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Seva & Daan</span>
            <h1 className="font-display text-6xl text-parchment mt-3">Donate &<br />Serve</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Your contribution supports the Ashram, education, temple upkeep, and community service.
              Every rupee is used with gratitude and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {CAUSES.map((cause, i) => {
          const Icon = cause.icon
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8 bg-obsidian-50 shadow-xl shadow-black/20"
            >
              {/* Image */}
              <div className={`relative aspect-video md:aspect-auto min-h-[280px] bg-gradient-to-br ${cause.fallbackGradient} ${isEven ? '' : 'md:order-2'}`}>
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
                <div className="absolute top-5 left-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: `${cause.accent}33`, border: `1px solid ${cause.accent}55` }}
                  >
                    <Icon size={20} style={{ color: cause.accent }} />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`p-8 flex flex-col justify-center ${isEven ? '' : 'md:order-1'}`}>
                <h2 className="font-display text-2xl text-parchment mb-1" style={{ color: cause.accent }}>
                  {cause.title}
                </h2>
                <p className="font-body text-sm text-parchment-muted mb-4">{cause.subtitle}</p>
                <p className="font-body text-sm text-parchment-muted leading-relaxed mb-5">
                  {cause.description}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl text-parchment">{cause.amount}</span>
                  <span className="font-body text-xs text-parchment-muted">{cause.amountNote}</span>
                </div>
                <p className="font-body text-xs text-parchment-muted/60 mb-6">Includes: {cause.includes}</p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleDonate(cause.id)}
                  className="flex items-center gap-2 self-start"
                >
                  <Heart size={14} />
                  Donate Now
                </Button>
              </div>
            </motion.div>
          )
        })}
      </section>

      {/* Bank details */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-obsidian-50 border-t border-white/5 py-16 px-6 text-center"
      >
        <h3 className="font-display text-3xl text-parchment mb-3">Other Ways to Contribute</h3>
        <p className="font-body text-parchment-muted text-sm leading-relaxed max-w-sm mx-auto">
          To donate via bank transfer or for large contributions, please contact us directly.
        </p>
        <a
          href="tel:+919810046385"
          className="inline-block mt-4 font-body text-gold hover:text-gold-light text-lg transition-colors"
        >
          +91 98100 46385
        </a>
      </motion.section>
    </div>
  )
}
