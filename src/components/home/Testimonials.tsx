'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Delhi, India',
    text: 'Guru Ji\'s Panch Tatwa reading was life-changing. He identified an Agni imbalance that explained years of digestive issues and gave me practices that worked within a week. His knowledge is profound and compassionate.',
    rating: 5,
    avatarBg: 'from-amber-800 to-amber-600',
  },
  {
    name: 'Rahul Mehta',
    location: 'Mumbai, India',
    text: 'I\'ve studied Vedic Astrology with many teachers, but Guru Ji\'s approach is unique — he connects the chart to the elements in a way that makes everything click. The online sessions feel as powerful as being in person.',
    rating: 5,
    avatarBg: 'from-blue-900 to-blue-700',
  },
  {
    name: 'Sarah Thompson',
    location: 'London, UK',
    text: 'The morning sadhana in the content library transformed my relationship with my own mind. Three months in and the clarity and stillness I feel are beyond what I thought possible. Deeply grateful.',
    rating: 5,
    avatarBg: 'from-violet-900 to-violet-700',
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
          className="text-center mb-12"
        >
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">What Seekers Say</span>
          <h2 className="font-display text-4xl text-parchment mt-3">Transformations</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-obsidian/60 border border-gold/10 rounded-2xl p-8 hover:border-gold/20 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A96E" className="text-gold" />
                ))}
              </div>

              <p className="font-body text-parchment-muted text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center`}>
                  <span className="text-white/80 text-sm font-display">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-body text-sm text-parchment font-medium">{t.name}</p>
                  <p className="font-body text-xs text-parchment-muted">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
