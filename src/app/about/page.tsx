'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const BASE = 'https://www.panchtatwa.com/static/media'

const TABS = ['Journey', 'Path', 'Destination'] as const
type Tab = typeof TABS[number]

const OFFICES = [
  'Sainik Farms', 'Nizamuddin East', 'Munirka', 'Krishna Nagar',
  'Noida', 'Gurgaon', 'Faridabad', 'Jhansi', 'Saharanpur', 'Muzaffarnagar',
]
const INTERNATIONAL = ['London', 'Sydney', 'California', 'Dubai', 'Singapore']

const ASHRAM_IMAGES = [
  { src: `${BASE}/ashramPage1.bd355739c0eb3d566700.jpeg`, alt: 'Ashram 1' },
  { src: `${BASE}/ashramPage2.cdc9404d7b54504a29ec.jpeg`, alt: 'Ashram 2' },
  { src: `${BASE}/ashramPoster.464a1126ff91136a154b.jpg`, alt: 'Ashram Poster' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Journey')

  return (
    <div className="min-h-screen bg-obsidian">

      {/* ── HERO: dark section with Guruji portrait ── */}
      <section style={{ backgroundColor: '#1A0F08' }} className="pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pb-16 lg:pb-24"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xs text-gold tracking-[0.25em] uppercase block mb-5"
            >
              The Saintist
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Sri Guru Ji<br />
              <span className="text-gold">Dr. Manoj K</span><br />
              Juyal
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-md mb-8">
              Founder of Panchtatwa — The Law of Creation. Astrologer, Vastu expert,
              and spiritual guide dedicated to spreading Vedic wisdom across the world.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-gold transition-colors">
                <Instagram size={18} /> @srigurujimanojkjuyal
              </a>
              <a href="https://www.facebook.com/panchtatwa/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-gold transition-colors">
                <Facebook size={18} /> panchtatwa
              </a>
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] lg:h-[560px] rounded-t-2xl overflow-hidden"
          >
            <Image
              src={`${BASE}/Guruji.13331c9164554b3ec3a5.jpeg`}
              alt="Sri Guru Ji Dr. Manoj K Juyal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08]/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Tab bar */}
        <div className="flex gap-0 mb-12 border-b border-parchment/10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative font-display text-xl pb-4 px-4 transition-all duration-200 ${
                activeTab === tab ? 'text-gold' : 'text-parchment-muted hover:text-parchment'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="about-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
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
            transition={{ duration: 0.35 }}
          >
            {/* JOURNEY */}
            {activeTab === 'Journey' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-none">
                  <Image
                    src={`${BASE}/mobile-journey.262e139799c601903949.jpg`}
                    alt="Guruji Journey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-5">
                  {[
                    `My journey as a Saintist — a unique blend of coincidence and destiny was something I never envisioned. The idea of being both a saint and a scientist, or "Saintist," was foreign to me. It all began in high school when I chose the science stream, studying mathematics and biology, with Sanskrit as my fifth optional subject.`,
                    `During my graduation, a close friend encouraged me to enrol in a French certificate course at the Alliance Française. What was supposed to be a three-month course unexpectedly evolved into a three-year advanced study. I excelled in my exams, even earning a gold medal, which led to a teaching position at the same institute.`,
                    `The convergence of my knowledge in both Sanskrit and French set the stage for the next pivotal moment. Our institute received a major project to translate the Garud Purana from Sanskrit to French, and I was the only individual fluent in both languages. Through this project, I was introduced to a wealth of spiritual concepts — Janma-Marana, 84 lakh yonis, Vaitarani, Shradh, Pind, Yam Devta, Yam Doot, and many more.`,
                    `My quest for greater understanding eventually led me to Kailash Mansarovar, a journey that culminated in a visit to Siddha Ashram. This experience became the turning point of my life. I divide my life into two phases: before and after Siddha Ashram.`,
                  ].map((para, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      className="font-body text-parchment-muted text-base leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
                  <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
                    className="font-display text-xl text-gold italic">
                    This is my journey.
                  </motion.p>
                </div>
              </div>
            )}

            {/* PATH */}
            {activeTab === 'Path' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={`${BASE}/myPath.d382c6c878c4dd5e9b30.jpg`}
                    alt="My Path"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-5">
                  <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="show"
                    className="font-display text-3xl text-gold">
                    Panchtatwa — The Law of Creation
                  </motion.h2>
                  {[
                    `Panchtatwa connotes the "Panchmahabhutas" — the five great elements of nature. The entire universe is made up of these five elements: Earth, Fire, Water, Air and Space. The human body is also made up of these five elements, concomitant to our five senses of taste, smell, hearing, touch and sight.`,
                    `Vastu is a Vidya which teaches the individual to live in synergy with these five elements of nature. It is the science of arrangement of the five elements in any given place.`,
                    `SriGuruji Dr. Manoj K Juyal founded Panchtatwa — The Law of Creation in 2004, an institute where he generously imparts his boundless knowledge. Panchtatwa is registered under the Society Registration Act (XXI) – 1860.`,
                  ].map((para, i) => (
                    <motion.p key={i} custom={i + 1} variants={fadeUp} initial="hidden" animate="show"
                      className="font-body text-parchment-muted text-base leading-relaxed">
                      {para}
                    </motion.p>
                  ))}
                  <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="space-y-4 pt-2">
                    <div>
                      <p className="font-body text-sm text-parchment font-semibold mb-2">India offices:</p>
                      <p className="font-body text-sm text-parchment-muted leading-relaxed">
                        Kalkaji (Head Office), {OFFICES.join(', ')}
                      </p>
                    </div>
                    <div>
                      <p className="font-body text-sm text-parchment font-semibold mb-3">International branches:</p>
                      <div className="flex flex-wrap gap-2">
                        {INTERNATIONAL.map((city) => (
                          <span key={city} className="bg-gold/10 border border-gold/20 text-gold text-xs font-body px-3 py-1 rounded-full">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* DESTINATION */}
            {activeTab === 'Destination' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={`${BASE}/myDestination.86e886aedac025f15a98.JPG`}
                    alt="My Destination"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="w-10 h-0.5 bg-gold" />
                  {[
                    `My aim and purpose is to help people realising moksha or salvation. My mission is to transform the Mumukshu — one who wants moksha — into Mokshik — one who has attained Moksha.`,
                    `My work is to change the direction of your search light — indriya — from outside to inside so that you can experience the inner world, the real world. After every death, your soul gets into a new body. Now I want your soul to be one with almighty so that you can get out of this cycle of life and death and attain Nirvana.`,
                    `I do not want you to be a sadhak but a siddha. Sadhak is one who does sadhana — the one who practices. The siddha is one who has reached, who attained. My final destination is to transform this world of sadhaks into world of siddhas so that this whole world will become a siddha ashram.`,
                  ].map((para, i) => (
                    <motion.p key={i} custom={i} variants={fadeUp} initial="hidden" animate="show"
                      className="font-body text-parchment-muted text-base leading-relaxed">
                      {para}
                    </motion.p>
                  ))}
                  <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
                    className="font-display text-3xl text-gold italic">
                    Khush raho.
                  </motion.p>
                  <div className="w-10 h-0.5 bg-gold" />
                  <p className="font-body text-parchment text-sm font-semibold">— Sri Guru Ji Dr. Manoj K Juyal</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── ASHRAM GALLERY ── */}
      <section className="bg-obsidian-100 border-t border-parchment/8 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Sacred Space</span>
            <h2 className="font-display text-4xl text-parchment mt-2">The Ashram</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ASHRAM_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL FOLLOW ── */}
      <section style={{ backgroundColor: '#1A0F08' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Stay Connected</span>
          <h2 className="font-display text-3xl text-white mt-2 mb-8">Follow Sri Guru Ji</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all group">
              <Instagram size={24} className="text-pink-400" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Instagram</p>
                <p className="font-body text-white/50 text-xs">@srigurujimanojkjuyal</p>
              </div>
            </a>
            <a href="https://www.facebook.com/panchtatwa/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all group">
              <Facebook size={24} className="text-blue-400" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Facebook</p>
                <p className="font-body text-white/50 text-xs">Panchtatwa</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@panchtatwa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all group">
              <Youtube size={24} className="text-red-400" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">YouTube</p>
                <p className="font-body text-white/50 text-xs">@panchtatwa</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl text-parchment mb-4">Visit Us</h3>
          <p className="font-body text-parchment-muted text-sm leading-relaxed">
            Panchtatwa — The Law of Creation<br />
            Vatika Farms, Farm no. 88–90, Sector 131<br />
            Behind Jaypee Wishtrown, Noida (UP) – 201301<br />
            <a href="tel:+919810046385" className="text-gold hover:text-gold-light transition-colors mt-1 inline-block">
              +91 98100 46385
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
