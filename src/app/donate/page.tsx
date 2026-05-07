'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const CAUSES = [
  {
    id: 'shiksha',
    title: 'Shiksha Daan',
    subtitle: 'Sponsor a child\'s education',
    description: 'We at Panchtatwa Ashram provide schooling to children of neighbouring villages whose parents unfortunately cannot afford their education. We also run a Sanskrit School — Acharya Ashtavakra Shastri Vidyalaya — since 2016.',
    amount: '₹500',
    amountNote: 'per month, per student',
    includes: 'Tuition fee, books, stationery and uniform',
    emoji: '📚',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    accent: 'text-amber-700',
    imageSeed: 'donate-children',
  },
  {
    id: 'ann',
    title: 'Ann Daan',
    subtitle: 'Help us feed the occupants',
    description: 'Managing the Ashram requires great strength which in return takes up a whole lot of resources. Your contribution of money or groceries goes directly towards feeding everyone.',
    amount: 'Any amount',
    amountNote: 'money or groceries',
    includes: 'Rice, pulses, cereals, flour, grains, sugar, oil, spices etc.',
    emoji: '🌾',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    accent: 'text-green-700',
    imageSeed: 'donate-food',
  },
  {
    id: 'temple',
    title: 'Shiva Kami Pooja',
    subtitle: 'Panchmukhi Hanumaanji Temple',
    description: 'Seek Hanuman Ji\'s blessing in our one-of-a-kind auspicious temple by offering prayers to him daily, for your goodness of wellbeing.',
    amount: '₹1,000',
    amountNote: 'per month',
    includes: 'Panchmukhī pūjā, incense, daily aarti',
    emoji: '🪔',
    bg: 'from-orange-50 to-red-50',
    border: 'border-orange-200',
    accent: 'text-orange-700',
    imageSeed: 'donate-temple',
  },
  {
    id: 'gau',
    title: 'Gau Seva',
    subtitle: 'Nursing and nourishment of cattle',
    description: 'The cow is the holiest of all animals. We nurture them with a lot of love and care at our Ashram, ensuring they are well-fed and healthy.',
    amount: '₹500',
    amountNote: 'per month',
    includes: 'Feed, fodder and veterinary care',
    emoji: '🐄',
    bg: 'from-lime-50 to-green-50',
    border: 'border-lime-200',
    accent: 'text-lime-700',
    imageSeed: 'donate-cow',
  },
  {
    id: 'kanya',
    title: 'Kanya Daan',
    subtitle: 'For our daughters',
    description: 'In Hinduism, kanyadaan is considered the most sacred of all five rituals. Performing this for an under-privileged girl is a very big charity — it is our honour.',
    amount: '₹9,000',
    amountNote: 'per wedding',
    includes: 'Wedding ceremony support for underprivileged girls',
    emoji: '👰',
    bg: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    accent: 'text-pink-700',
    imageSeed: 'donate-kanya',
  },
  {
    id: 'ashram',
    title: 'Ashram Daan',
    subtitle: 'Managing the Ashram',
    description: 'Running a community requires everyday expenditure — police maintenance, community services, medical services, social services, general administration, housekeeping, electrical, water bills, staff salary and more.',
    amount: 'Any amount',
    amountNote: 'all contributions welcome',
    includes: 'General Ashram upkeep and operations',
    emoji: '🏛️',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    accent: 'text-violet-700',
    imageSeed: 'donate-ashram',
  },
]

export default function DonatePage() {
  const handleDonate = (causeId: string, amount: string) => {
    // Razorpay integration — keys to be added in .env.local
    alert('Razorpay payment coming soon. Please contact +91 98100 46385 to donate.')
  }

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-14 px-6 border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Seva & Daan</span>
          <h1 className="font-display text-5xl text-parchment mt-3">Donations</h1>
          <p className="font-body text-parchment-muted text-base mt-3 max-w-lg leading-relaxed">
            Your contribution supports the Ashram, education, temple upkeep, and community service.
            Every rupee is used with gratitude and care.
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-10">
        {CAUSES.map((cause, i) => (
          <motion.div
            key={cause.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border ${cause.border} bg-gradient-to-br ${cause.bg} p-6 md:p-8`}
          >
            {/* Text — alternate sides */}
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{cause.emoji}</span>
                <div>
                  <h2 className={`font-display text-2xl ${cause.accent}`}>{cause.title}</h2>
                  <p className="font-body text-sm text-parchment-muted">{cause.subtitle}</p>
                </div>
              </div>
              <p className="font-body text-sm text-parchment-muted leading-relaxed mb-4">
                {cause.description}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`font-display text-3xl ${cause.accent}`}>{cause.amount}</span>
                <span className="font-body text-xs text-parchment-muted">{cause.amountNote}</span>
              </div>
              <p className="font-body text-xs text-parchment-muted/70 mb-5">Includes: {cause.includes}</p>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleDonate(cause.id, cause.amount)}
                className="flex items-center gap-2"
              >
                <Heart size={15} />
                Donate Now
              </Button>
            </div>

            {/* Image */}
            <div className={`relative aspect-video rounded-xl overflow-hidden bg-obsidian-100 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <Image
                src={`https://picsum.photos/seed/${cause.imageSeed}/600/400`}
                alt={cause.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bank details / contact */}
      <section className="bg-obsidian-50 border-t border-black/5 py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display text-2xl text-parchment mb-3">Other Ways to Contribute</h3>
          <p className="font-body text-parchment-muted text-sm leading-relaxed">
            To donate via bank transfer or for large contributions, please contact us directly.
          </p>
          <a
            href="tel:+919810046385"
            className="inline-block mt-4 font-body text-gold hover:text-gold-light text-base transition-colors"
          >
            +91 98100 46385
          </a>
        </div>
      </section>
    </div>
  )
}
