'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const BASE = 'https://www.panchtatwa.com/static/media'

const TABS = ['Journey', 'Path', 'Destination'] as const
type Tab = typeof TABS[number]

const OFFICES = [
  'Sainik Farms', 'Nizamuddin East', 'Munirka', 'Krishna Nagar',
  'Noida', 'Gurgaon', 'Faridabad', 'Jhansi', 'Saharanpur', 'Muzaffarnagar',
]
const INTERNATIONAL = ['London', 'Sydney', 'California', 'Dubai', 'Singapore']

const VASTU_IMAGES = [
  `${BASE}/ashramPage1.b2a2d44abf5e6c46dad0.jpg`,
  `${BASE}/ashramPage2.3e3e78cf7fc9dc9b8985.jpg`,
  `${BASE}/ashramMain.c29f3b9ef8c8d9d3c24c.jpg`,
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Journey')
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Full-bleed hero */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={`${BASE}/Guruji.13331c9164554b3ec3a5.jpeg`}
            alt="Sri Guru Ji Dr. Manoj K Juyal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
        </motion.div>
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-xs text-gold tracking-[0.2em] uppercase block mb-4"
          >
            The Saintist
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl text-parchment leading-none"
          >
            Sri Guru Ji<br />
            <span className="text-gold">Dr. Manoj K</span><br />
            Juyal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="font-body text-parchment-muted text-lg mt-6 max-w-xl leading-relaxed"
          >
            Founder of Panchtatwa — The Law of Creation. Astrologer, Vastu expert,
            and spiritual guide dedicated to spreading Vedic wisdom across the world.
          </motion.p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex gap-0 mb-12 border-b border-white/8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative font-display text-xl pb-5 px-4 transition-all duration-200 ${
                activeTab === tab ? 'text-gold' : 'text-parchment-muted hover:text-parchment'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ── JOURNEY ── */}
            {activeTab === 'Journey' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                >
                  <Image
                    src={`${BASE}/mobile-journey.262e139799c601903949.jpg`}
                    alt="Sri Guru Ji — Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="font-display text-white/80 text-sm italic">The Journey Begins</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="space-y-5 font-body text-parchment-muted leading-relaxed text-base pt-4"
                >
                  {[
                    `My journey as a Saintist — a unique blend of coincidence and destiny was something I never envisioned. The idea of being both a saint and a scientist, or "Saintist," was foreign to me. It all began in high school when I chose the science stream, studying mathematics and biology, with Sanskrit as my fifth optional subject.`,
                    `During my graduation, a close friend encouraged me to enrol in a French certificate course at the Alliance Française. What was supposed to be a three-month course unexpectedly evolved into a three-year advanced study. I excelled in my exams, even earning a gold medal, which led to a teaching position at the same institute.`,
                    `The convergence of my knowledge in both Sanskrit and French set the stage for the next pivotal moment. Our institute received a major project to translate the Garud Purana from Sanskrit to French, and I was the only individual fluent in both languages. Through this project, I was introduced to a wealth of spiritual concepts — Janma-Marana, 84 lakh yonis, Vaitarani, Shradh, Pind, Yam Devta, Yam Doot, and many more.`,
                    `My quest for greater understanding eventually led me to Kailash Mansarovar, a journey that culminated in a visit to Siddha Ashram. This experience became the turning point of my life. I divide my life into two phases: before and after Siddha Ashram. What I learned and gained there was so valuable that I felt compelled to share the wisdom with the world.`,
                  ].map((para, i) => (
                    <motion.p key={i} variants={fadeUp}>{para}</motion.p>
                  ))}
                  <motion.p variants={fadeUp} className="text-parchment font-medium italic text-lg">
                    This is my journey.
                  </motion.p>
                </motion.div>
              </div>
            )}

            {/* ── PATH ── */}
            {activeTab === 'Path' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                >
                  <Image
                    src={`${BASE}/myPath.d382c6c878c4dd5e9b30.jpg`}
                    alt="Sri Guru Ji — Path"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                </motion.div>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="space-y-5 font-body text-parchment-muted leading-relaxed text-base pt-4"
                >
                  <motion.h2 variants={fadeUp} className="font-display text-3xl text-gold">
                    Panchtatwa — The Law of Creation
                  </motion.h2>
                  <motion.h3 variants={fadeUp} className="font-body text-sm text-gold uppercase tracking-wider">Origin</motion.h3>
                  <motion.p variants={fadeUp}>
                    Panchtatwa connotes the "Panchmahabhutas" — the five great elements of nature. The entire universe
                    is made up of these five elements: Earth, Fire, Water, Air and Space. The human body is also made up
                    of these five elements, concomitant to our five senses of taste, smell, hearing, touch and sight.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Vastu is a Vidya which teaches the individual to live in synergy with these five elements of nature.
                    It is the science of arrangement of the five elements in any given place.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    SriGuruji Dr. Manoj K Juyal founded Panchtatwa — The Law of Creation in{' '}
                    <strong className="text-parchment">2004</strong>, an institute where he generously imparts his
                    boundless knowledge. Panchtatwa is registered under the Society Registration Act (XXI) – 1860.
                  </motion.p>
                  <motion.div variants={fadeUp} className="pt-2 space-y-4">
                    <div>
                      <p className="font-body text-sm text-parchment font-semibold mb-2">India offices:</p>
                      <p className="text-sm leading-relaxed">Kalkaji (Head Office), {OFFICES.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-body text-sm text-parchment font-semibold mb-2">International branches:</p>
                      <div className="flex flex-wrap gap-2">
                        {INTERNATIONAL.map((city) => (
                          <span key={city} className="bg-gold/10 border border-gold/20 text-gold text-xs font-body px-3 py-1 rounded-full">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            )}

            {/* ── DESTINATION ── */}
            {activeTab === 'Destination' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                >
                  <Image
                    src={`${BASE}/myDestination.86e886aedac025f15a98.JPG`}
                    alt="Sri Guru Ji — Destination"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                </motion.div>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <motion.div variants={fadeUp} className="w-12 h-0.5 bg-gold" />
                  <motion.blockquote
                    variants={stagger}
                    className="font-body text-parchment-muted text-base leading-relaxed space-y-4"
                  >
                    {[
                      `My aim and purpose is to help people realising moksha or salvation. My mission is to transform the Mumukshu — one who wants moksha — into Mokshik — one who has attained Moksha.`,
                      `My work is to change the direction of your search light — indriya — from outside to inside so that you can experience the inner world, the real world. After every death, your soul gets into a new body. Now I want your soul to be one with almighty so that you can get out of this cycle of life and death and attain Nirvana.`,
                      `I do not want you to be a sadhak but a siddha. Sadhak is one who does sadhana — the one who practices. The siddha is one who has reached, who attained. My final destination is to transform this world of sadhaks into world of siddhas so that this whole world will become a siddha ashram.`,
                    ].map((para, i) => (
                      <motion.p key={i} variants={fadeUp}>{para}</motion.p>
                    ))}
                    <motion.p variants={fadeUp} className="font-display text-3xl text-gold italic">Khush raho.</motion.p>
                  </motion.blockquote>
                  <motion.div variants={fadeUp} className="w-12 h-0.5 bg-gold" />
                  <motion.p variants={fadeUp} className="font-body text-parchment text-sm font-semibold">
                    — Sri Guru Ji Dr. Manoj K Juyal
                  </motion.p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Vastu Temple Gallery */}
      <section className="py-20 px-6 bg-obsidian-50 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Sacred Space</span>
            <h2 className="font-display text-4xl text-parchment mt-2">The Ashram</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VASTU_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-100 shadow-lg shadow-black/30"
              >
                <Image
                  src={src}
                  alt={`Ashram ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display text-3xl text-parchment mb-4">Visit Us</h3>
          <p className="font-body text-parchment-muted text-sm leading-relaxed">
            Panchtatwa — The Law of Creation<br />
            Vatika Farms, Farm no. 88–90, Sector 131<br />
            Behind Jaypee Wishtrown, Noida (UP) – 201301<br />
            <a href="tel:+919810046385" className="text-gold hover:text-gold-light transition-colors mt-1 inline-block">
              +91 98100 46385
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  )
}
