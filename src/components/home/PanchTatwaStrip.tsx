'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ELEMENTS = [
  {
    name: 'Prithvi',
    sanskrit: 'पृथ्वी',
    english: 'Earth',
    description: 'Stability, abundance, and grounding. The foundation of all physical existence.',
    color: '#C9962A',
    bg: 'from-amber-950/80 to-amber-900/40',
    border: 'border-amber-700/50',
    symbol: '⊕',
    href: '/videos?category=panch-tatwa',
  },
  {
    name: 'Jal',
    sanskrit: 'जल',
    english: 'Water',
    description: 'Flow, adaptability, and emotional intelligence. The source of life and creativity.',
    color: '#5BA3E8',
    bg: 'from-blue-950/80 to-blue-900/40',
    border: 'border-blue-700/50',
    symbol: '☽',
    href: '/videos?category=panch-tatwa',
  },
  {
    name: 'Agni',
    sanskrit: 'अग्नि',
    english: 'Fire',
    description: 'Transformation, willpower, and clarity. The force that illuminates and purifies.',
    color: '#F07830',
    bg: 'from-orange-950/80 to-orange-900/40',
    border: 'border-orange-700/50',
    symbol: '△',
    href: '/videos?category=panch-tatwa',
  },
  {
    name: 'Vayu',
    sanskrit: 'वायु',
    english: 'Air',
    description: 'Movement, breath, and communication. The invisible force that connects all life.',
    color: '#8BBFE0',
    bg: 'from-sky-950/80 to-sky-900/40',
    border: 'border-sky-700/50',
    symbol: '◎',
    href: '/videos?category=panch-tatwa',
  },
  {
    name: 'Akash',
    sanskrit: 'आकाश',
    english: 'Space',
    description: 'Infinite potential, consciousness, and the field in which all else exists.',
    color: '#A98FE0',
    bg: 'from-violet-950/80 to-violet-900/40',
    border: 'border-violet-700/50',
    symbol: '∞',
    href: '/videos?category=panch-tatwa',
  },
]

export function PanchTatwaStrip() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#1A0F08' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">The Five Sacred Elements</span>
          <h2 className="font-display text-4xl mt-3" style={{ color: '#FAF0E6' }}>Panch Tatwa</h2>
          <p className="font-body mt-3 max-w-lg mx-auto text-base" style={{ color: '#C4A882' }}>
            Ancient Vedic science teaches that all of existence — body, mind, and cosmos — is woven from five fundamental elements.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {ELEMENTS.map((el, i) => (
            <motion.div
              key={el.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)] min-w-[150px]"
            >
              <Link
                href={el.href}
                className={`group block bg-gradient-to-b ${el.bg} border ${el.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full`}
              >
                <div className="text-4xl mb-4" style={{ color: el.color }}>
                  {el.symbol}
                </div>
                <p className="font-display text-3xl mb-1" style={{ color: el.color }}>
                  {el.name}
                </p>
                <p className="font-body text-sm mb-2" style={{ color: 'rgba(196,168,130,0.75)' }}>{el.sanskrit} · {el.english}</p>
                <p className="font-body text-sm leading-relaxed mt-3" style={{ color: '#C4A882' }}>
                  {el.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
