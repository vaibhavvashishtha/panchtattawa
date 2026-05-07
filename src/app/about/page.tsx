'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const TABS = ['Journey', 'Path', 'Destination'] as const
type Tab = typeof TABS[number]

const OFFICES = [
  'Sainik Farms', 'Nizamuddin East', 'Munirka', 'Krishna Nagar',
  'Noida', 'Gurgaon', 'Faridabad', 'Jhansi', 'Saharanpur', 'Muzaffarnagar',
]
const INTERNATIONAL = ['London', 'Sydney', 'California', 'Dubai', 'Singapore']

const VASTU_TEMPLE_IMAGES = [
  'https://picsum.photos/seed/vastu1/600/500',
  'https://picsum.photos/seed/vastu2/600/500',
  'https://picsum.photos/seed/vastu3/600/500',
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Journey')

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Hero */}
      <section className="py-16 px-6 border-b border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">The Saintist</span>
          <h1 className="font-display text-5xl md:text-6xl text-parchment mt-3">
            Sri Guru Ji<br />Dr. Manoj K Juyal
          </h1>
          <p className="font-body text-parchment-muted text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Founder of Panchtatwa — The Law of Creation. Astrologer, Vastu expert, and spiritual guide
            dedicated to spreading Vedic wisdom across the world.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex gap-2 mb-10 border-b border-black/8 pb-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-display text-xl pb-4 px-2 border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? 'border-gold text-gold'
                  : 'border-transparent text-parchment-muted hover:text-parchment'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* ── JOURNEY ── */}
            {activeTab === 'Journey' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-50">
                  <Image
                    src="https://picsum.photos/seed/guruji-journey/500/600"
                    alt="Sri Guru Ji — Journey"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-5 font-body text-parchment-muted leading-relaxed text-base">
                  <p>
                    My journey as a Saintist — a unique blend of coincidence and destiny was something I never envisioned.
                    The idea of being both a saint and a scientist, or "Saintist," was foreign to me. It all began in high
                    school when I chose the science stream, studying mathematics and biology, with Sanskrit as my fifth
                    optional subject.
                  </p>
                  <p>
                    During my graduation, a close friend encouraged me to enrol in a French certificate course at the
                    Alliance Française. What was supposed to be a three-month course unexpectedly evolved into a three-year
                    advanced study. I excelled in my exams, even earning a gold medal, which led to a teaching position
                    at the same institute.
                  </p>
                  <p>
                    The convergence of my knowledge in both Sanskrit and French set the stage for the next pivotal moment.
                    Our institute received a major project to translate the Garud Purana from Sanskrit to French, and I was
                    the only individual fluent in both languages. Through this project, I was introduced to a wealth of
                    spiritual concepts — Janma-Marana, 84 lakh yonis, Vaitarani, Shradh, Pind, Yam Devta, Yam Doot,
                    and many more.
                  </p>
                  <p>
                    My quest for greater understanding eventually led me to Kailash Mansarovar, a journey that culminated
                    in a visit to Siddha Ashram. This experience became the turning point of my life. I divide my life
                    into two phases: before and after Siddha Ashram. What I learned and gained there was so valuable that
                    I felt compelled to share the wisdom with the world.
                  </p>
                  <p className="text-parchment font-medium italic">This is my journey.</p>
                </div>
              </div>
            )}

            {/* ── PATH ── */}
            {activeTab === 'Path' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-50">
                  <Image
                    src="https://picsum.photos/seed/guruji-path/500/600"
                    alt="Sri Guru Ji — Path"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-5 font-body text-parchment-muted leading-relaxed text-base">
                  <h2 className="font-display text-3xl text-gold">Panchtatwa — The Law of Creation</h2>
                  <h3 className="font-body text-sm text-gold uppercase tracking-wider">Origin</h3>
                  <p>
                    Panchtatwa connotes the "Panchmahabhutas" — the five great elements of nature. The entire universe
                    is made up of these five elements: Earth, Fire, Water, Air and Space. The human body is also made up
                    of these five elements, concomitant to our five senses of taste, smell, hearing, touch and sight.
                  </p>
                  <p>
                    Vastu is a Vidya which teaches the individual to live in synergy with these five elements of nature.
                    It is the science of arrangement of the five elements in any given place.
                  </p>
                  <p>
                    SriGuruji Dr. Manoj K Juyal founded Panchtatwa — The Law of Creation in <strong className="text-parchment">2004</strong>, an
                    institute where he generously imparts his boundless knowledge. Panchtatwa is registered under the
                    Society Registration Act (XXI) – 1860.
                  </p>

                  <div className="pt-2">
                    <p className="font-body text-sm text-parchment font-semibold mb-2">India offices:</p>
                    <p className="text-sm leading-relaxed">
                      Kalkaji (Head Office), {OFFICES.join(', ')}
                    </p>
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
                </div>
              </div>
            )}

            {/* ── DESTINATION ── */}
            {activeTab === 'Destination' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-50">
                  <Image
                    src="https://picsum.photos/seed/guruji-destination/500/600"
                    alt="Sri Guru Ji — Destination"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="w-12 h-0.5 bg-gold" />
                  <blockquote className="font-body text-parchment-muted text-base leading-relaxed space-y-4">
                    <p>
                      My aim and purpose is to help people realising moksha or salvation. My mission is to transform
                      the Mumukshu — one who wants moksha — into Mokshik — one who has attained Moksha.
                    </p>
                    <p>
                      My work is to change the direction of your search light — indriya — from outside to inside so
                      that you can experience the inner world, the real world. After every death, your soul gets into
                      a new body. Now I want your soul to be one with almighty so that you can get out of this cycle
                      of life and death and attain Nirvana.
                    </p>
                    <p>
                      I do not want you to be a sadhak but a siddha. Sadhak is one who does sadhana — the one who
                      practices. The siddha is one who has reached, who attained. My final destination is to transform
                      this world of sadhaks into world of siddhas so that this whole world will become a siddha ashram.
                    </p>
                    <p className="font-display text-2xl text-gold italic">Khush raho.</p>
                  </blockquote>
                  <div className="w-12 h-0.5 bg-gold" />
                  <p className="font-body text-parchment text-sm font-semibold">— Sri Guru Ji Dr. Manoj K Juyal</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Vastu Temple Gallery */}
      <section className="py-16 px-6 bg-obsidian-50 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Sacred Space</span>
          <h2 className="font-display text-3xl text-parchment mt-2 mb-8">Vastu Temple</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VASTU_TEMPLE_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-100"
              >
                <Image
                  src={src}
                  alt={`Vastu Temple ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
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
