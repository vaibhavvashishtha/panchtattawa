'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Anjali Kapoor',
    location: 'New Delhi',
    role: 'Business Owner',
    text: 'I consulted Guru Ji for Vastu of my new office. Within three months of implementing his recommendations, our revenue increased significantly and the work environment became far more harmonious. His expertise in combining Vastu with astrology is unparalleled.',
    rating: 5,
    initials: 'AK',
    bg: 'bg-amber-100',
    color: 'text-amber-700',
  },
  {
    name: 'Rajesh Nair',
    location: 'Mumbai',
    role: 'IT Professional',
    text: 'Guru Ji\'s Kundli reading was eye-opening. He explained my career struggles through the lens of Panchtatwa in a way no other astrologer had. His remedies were practical, not superstitious. I\'ve recommended him to my entire family.',
    rating: 5,
    initials: 'RN',
    bg: 'bg-blue-100',
    color: 'text-blue-700',
  },
  {
    name: 'Sunita Agarwal',
    location: 'Noida',
    role: 'Homemaker',
    text: 'We attended Guru Ji\'s Gurupoornima event at the Ashram. The energy and wisdom were transformative. He has a rare gift of making ancient Vedic knowledge accessible and deeply practical for modern life.',
    rating: 5,
    initials: 'SA',
    bg: 'bg-rose-100',
    color: 'text-rose-700',
  },
  {
    name: 'Vikram Singh',
    location: 'Gurgaon',
    role: 'Corporate Executive',
    text: 'Attended the Astro-Vastu workshop last year. Guru Ji\'s depth of knowledge is extraordinary. The principles he shared transformed how I approach both my home and professional environments. Highly recommended.',
    rating: 5,
    initials: 'VS',
    bg: 'bg-green-100',
    color: 'text-green-700',
  },
  {
    name: 'Meera Joshi',
    location: 'London, UK',
    role: 'Healthcare Professional',
    text: 'Guru Ji conducted an online session for our family in London. Despite the distance, his guidance on our home\'s Vastu and our health charts was incredibly precise. The WhatsApp follow-ups are always prompt and caring.',
    rating: 5,
    initials: 'MJ',
    bg: 'bg-violet-100',
    color: 'text-violet-700',
  },
  {
    name: 'Harish Chandra',
    location: 'Singapore',
    role: 'Entrepreneur',
    text: 'I\'ve attended Guru Ji\'s workshops in Singapore twice. Each time the content is deeper, the insights more profound. His understanding of planetary influences on business decisions has been invaluable for me.',
    rating: 5,
    initials: 'HC',
    bg: 'bg-orange-100',
    color: 'text-orange-700',
  },
]

export function Testimonials() {
  return (
    <section className="bg-obsidian-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">What Seekers Say</span>
          <h2 className="font-display text-4xl text-parchment mt-3 mb-3">Real Experiences</h2>
          <p className="font-body text-parchment-muted text-sm max-w-md mx-auto">
            Thousands of students and families across India and internationally have experienced transformation under Sri Guru Ji's guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-obsidian border border-parchment/8 rounded-2xl p-7 hover:border-gold/20 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Quote size={20} className="text-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#E86830" className="text-gold" />
                ))}
              </div>

              <p className="font-body text-parchment-muted text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-parchment/6">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center shrink-0`}>
                  <span className={`font-display text-sm font-bold ${t.color}`}>{t.initials}</span>
                </div>
                <div>
                  <p className="font-body text-sm text-parchment font-semibold">{t.name}</p>
                  <p className="font-body text-xs text-parchment-muted">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
