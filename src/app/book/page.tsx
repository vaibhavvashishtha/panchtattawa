'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Calendar, Clock, User, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const SESSION_TYPES = [
  {
    id: 'vedic-astrology',
    name: 'Vedic Astrology Reading',
    description: 'A comprehensive reading of your birth chart — planets, houses, and karmic patterns interpreted through the Jyotish tradition.',
    duration: 60,
    price: 2500,
    currency: 'INR',
    icon: '✦',
    popular: true,
  },
  {
    id: 'panch-tatwa',
    name: 'Panch Tatwa Consultation',
    description: 'Identify your elemental constitution and imbalances. Receive personalised practices to restore harmony across all five elements.',
    duration: 45,
    price: 2000,
    currency: 'INR',
    icon: '⊕',
    popular: false,
  },
  {
    id: 'meditation',
    name: 'Guided Meditation Session',
    description: 'A live 1:1 guided meditation tailored to your current needs — stress, clarity, sleep, or spiritual expansion.',
    duration: 30,
    price: 1500,
    currency: 'INR',
    icon: '◎',
    popular: false,
  },
]

// Generate slots for the next 7 days
function generateSlots(date: string) {
  const times = ['09:00', '10:00', '11:30', '14:00', '15:30', '17:00', '18:30']
  const bookedTimes = ['10:00', '15:30']
  return times.map((t) => ({ time: t, isAvailable: !bookedTimes.includes(t) }))
}

function getNextDays(count = 7) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i + 1)
    return {
      label: d.toLocaleDateString('en-IN', { weekday: 'short' }),
      date: d.toISOString().split('T')[0],
      day: d.getDate(),
    }
  })
}

const STEPS = ['Session Type', 'Date & Time', 'Your Details', 'Confirmed']

export default function BookPage() {
  const [step, setStep] = useState(0)
  const [selectedSession, setSelectedSession] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', concern: '' })

  const days = getNextDays(7)
  const slots = selectedDate ? generateSlots(selectedDate) : []
  const session = SESSION_TYPES.find((s) => s.id === selectedSession)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <div className="bg-obsidian-100 border-b border-gold/10 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">One-on-One</span>
          <h1 className="font-display text-4xl md:text-5xl text-parchment mt-2">Book a Session</h1>
          <p className="font-body text-parchment-muted mt-3">
            Personal guidance from Sri Guru Ji — tailored to your journey
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Step indicator */}
        {step < 3 && (
          <div className="flex items-center justify-center gap-2 mb-12">
            {STEPS.slice(0, 3).map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-body font-medium transition-all',
                  i < step ? 'bg-gold text-obsidian' :
                  i === step ? 'bg-gold/20 border border-gold text-gold' :
                  'bg-black/5 border border-black/10 text-parchment-muted'
                )}>
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span className={cn(
                  'font-body text-xs hidden sm:block',
                  i === step ? 'text-parchment' : 'text-parchment-muted/60'
                )}>
                  {label}
                </span>
                {i < 2 && <ChevronRight size={14} className="text-black/20" />}
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 0: Session Type */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl text-parchment mb-6">Choose your session</h2>
              <div className="space-y-4">
                {SESSION_TYPES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSession(s.id)}
                    className={cn(
                      'w-full text-left rounded-2xl border p-6 transition-all duration-200 group',
                      selectedSession === s.id
                        ? 'border-gold/60 bg-gold/5'
                        : 'border-black/10 bg-obsidian-50/50 hover:border-gold/30'
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl text-gold/70 mt-0.5">{s.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-display text-lg text-parchment">{s.name}</p>
                          {s.popular && (
                            <span className="font-body text-[10px] text-gold bg-gold/10 border border-gold/20 rounded-full px-2 py-0.5 flex items-center gap-1">
                              <Star size={8} fill="currentColor" /> Popular
                            </span>
                          )}
                        </div>
                        <p className="font-body text-sm text-parchment-muted mb-3">{s.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-parchment-muted">
                            <Clock size={13} />{s.duration} min
                          </span>
                          <span className="font-display text-lg text-gold">₹{s.price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <div className={cn(
                        'w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center transition-all',
                        selectedSession === s.id ? 'border-gold bg-gold' : 'border-white/20'
                      )}>
                        {selectedSession === s.id && <Check size={10} className="text-obsidian" strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  variant="primary"
                  size="lg"
                  disabled={!selectedSession}
                  onClick={() => setStep(1)}
                >
                  Continue
                  <ChevronRight size={18} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl text-parchment mb-2">Pick a date & time</h2>
              <p className="font-body text-sm text-parchment-muted mb-8">All times are in IST (India Standard Time)</p>

              {/* Date selector */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {days.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => { setSelectedDate(d.date); setSelectedTime(null) }}
                    className={cn(
                      'flex-shrink-0 flex flex-col items-center gap-1 rounded-xl px-4 py-3 border transition-all w-16',
                      selectedDate === d.date
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-black/10 text-parchment-muted hover:border-gold/30'
                    )}
                  >
                    <span className="font-body text-xs">{d.label}</span>
                    <span className="font-display text-xl leading-none">{d.day}</span>
                  </button>
                ))}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <p className="font-body text-sm text-parchment-muted mb-4">Available slots</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {slots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.isAvailable}
                        onClick={() => setSelectedTime(slot.time)}
                        className={cn(
                          'rounded-xl border py-3 font-body text-sm transition-all',
                          !slot.isAvailable
                            ? 'border-black/5 text-parchment-muted/30 cursor-not-allowed line-through'
                            : selectedTime === slot.time
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-black/10 text-parchment hover:border-gold/30'
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={() => setStep(0)}>Back</Button>
                <Button
                  variant="primary"
                  size="lg"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                >
                  Continue
                  <ChevronRight size={18} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Intake form */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl text-parchment mb-2">Tell us about yourself</h2>
              <p className="font-body text-sm text-parchment-muted mb-8">
                This helps Guru Ji prepare a personalised session for you
              </p>

              {/* Booking summary */}
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 mb-8 flex items-center gap-4">
                <span className="text-2xl text-gold/60">{session?.icon}</span>
                <div>
                  <p className="font-body text-sm text-parchment font-medium">{session?.name}</p>
                  <p className="font-body text-xs text-parchment-muted">
                    {selectedDate} · {selectedTime} IST · {session?.duration} min
                  </p>
                </div>
                <p className="font-display text-xl text-gold ml-auto">₹{session?.price.toLocaleString('en-IN')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', icon: User },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com', icon: null },
                  { id: 'phone', label: 'Phone (WhatsApp)', type: 'tel', placeholder: '+91 98765 43210', icon: null },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="font-body text-sm text-parchment-muted mb-1.5 block">{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full bg-obsidian-50 border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-parchment placeholder:text-parchment-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-body text-sm text-parchment-muted mb-1.5 block">
                    Your primary concern or intention
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What are you seeking guidance on? (career, health, relationships, spiritual growth…)"
                    value={form.concern}
                    onChange={(e) => setForm({ ...form, concern: e.target.value })}
                    className="w-full bg-obsidian-50 border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-parchment placeholder:text-parchment-muted/40 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-between pt-2">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                  <Button type="submit" variant="primary" size="lg">
                    Confirm Booking
                    <Check size={16} />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                <Check size={32} className="text-gold" strokeWidth={2} />
              </div>
              <h2 className="font-display text-4xl text-parchment mb-3">Booking Confirmed!</h2>
              <p className="font-body text-parchment-muted mb-2">
                {session?.name} with Sri Guru Ji
              </p>
              <p className="font-body text-gold mb-8">
                {selectedDate} at {selectedTime} IST
              </p>
              <p className="font-body text-sm text-parchment-muted max-w-sm mx-auto mb-10">
                A confirmation with the Google Meet link has been sent to <strong className="text-parchment">{form.email}</strong>.
                Guru Ji will join 5 minutes before the session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" onClick={() => { setStep(0); setSelectedSession(null); setSelectedDate(null); setSelectedTime(null) }}>
                  Book Another Session
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/sessions'}>
                  <Calendar size={16} />
                  View My Sessions
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
