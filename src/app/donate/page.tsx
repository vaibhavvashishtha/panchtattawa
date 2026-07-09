'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, BookOpen, Utensils, Landmark, Milk, Gift, Building2 } from 'lucide-react'
import { RazorpayCheckoutButton } from '@/components/payments/RazorpayCheckoutButton'
import { PAYMENT_ITEMS } from '@/lib/payment-items'

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
    image: `${BASE}/childSponserInsde1.a27b2db062c6ee81bcc2.jpg`,
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    accent: 'text-amber-700',
    btnClass: 'bg-amber-600 hover:bg-amber-700',
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
    image: `${BASE}/aanDaanInside3.eaa7c358a089d0c8ddd8.jpeg`,
    bg: 'bg-green-50',
    border: 'border-green-200',
    accent: 'text-green-700',
    btnClass: 'bg-green-600 hover:bg-green-700',
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
    image: `${BASE}/nitiyaKarmPoojaCover.dd5b9d74abb85b64dafc.jpeg`,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    accent: 'text-orange-700',
    btnClass: 'bg-orange-600 hover:bg-orange-700',
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
    image: `${BASE}/gauDaanCover.e8ce8ffd61041112c972.jpg`,
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    accent: 'text-lime-700',
    btnClass: 'bg-lime-600 hover:bg-lime-700',
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
    image: `${BASE}/kanyaDaanCover.49961a060acd0a185ca0.JPG`,
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    accent: 'text-pink-700',
    btnClass: 'bg-pink-600 hover:bg-pink-700',
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
    image: `${BASE}/ashramMain.c354147863e7d17bc99a.jpeg`,
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'text-violet-700',
    btnClass: 'bg-violet-600 hover:bg-violet-700',
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <section className="py-16 px-6 border-b border-parchment/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Seva & Daan</span>
            <h1 className="font-display text-5xl lg:text-6xl text-parchment mt-3">Donate & Serve</h1>
            <p className="font-body text-parchment-muted text-base mt-4 max-w-lg leading-relaxed">
              Your contribution supports the Ashram, education, temple upkeep, and community service.
              Every rupee is used with gratitude and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-8">
        {CAUSES.map((cause, i) => {
          const Icon = cause.icon
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55 }}
              className={`grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border ${cause.border} ${cause.bg}`}
            >
              {/* Image */}
              <div className={`relative min-h-[280px] lg:min-h-[360px] ${isEven ? '' : 'lg:order-2'}`}>
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/60`}>
                    <Icon size={18} className={cause.accent} />
                  </div>
                  <div>
                    <h2 className={`font-display text-2xl ${cause.accent}`}>{cause.title}</h2>
                    <p className="font-body text-xs text-parchment-muted">{cause.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-parchment-muted leading-relaxed mb-5">
                  {cause.description}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`font-display text-3xl ${cause.accent}`}>{cause.amount}</span>
                  <span className="font-body text-xs text-parchment-muted">{cause.amountNote}</span>
                </div>
                <p className="font-body text-xs text-parchment-muted/60 mb-6">Includes: {cause.includes}</p>
                <RazorpayCheckoutButton
                  itemId={cause.id}
                  itemLabel={cause.title}
                  amount={PAYMENT_ITEMS[cause.id]?.amount === 'variable' ? 'variable' : (PAYMENT_ITEMS[cause.id]?.amount as number) / 100}
                  minAmount={(PAYMENT_ITEMS[cause.id]?.minAmount ?? 5100) / 100}
                  buttonClassName={cause.btnClass}
                  icon={<Heart size={14} />}
                  buttonLabel="Donate Now"
                />
              </div>
            </motion.div>
          )
        })}
      </section>

      {/* Bank details */}
      <section className="bg-obsidian-100 border-t border-parchment/8 py-14 px-6 text-center">
        <h3 className="font-display text-2xl text-parchment mb-3">Other Ways to Contribute</h3>
        <p className="font-body text-parchment-muted text-sm leading-relaxed max-w-sm mx-auto">
          To donate via bank transfer or for large contributions, please contact us directly.
        </p>
        <a href="tel:+919810046385"
          className="inline-block mt-4 font-body text-gold hover:text-gold-light text-lg transition-colors">
          +91 98100 46385
        </a>
      </section>
    </div>
  )
}
