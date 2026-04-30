'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Video, CheckCircle2, XCircle, Hourglass, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

// Mock session data — replace with Supabase query
const MOCK_SESSIONS = [
  {
    id: 's1',
    sessionName: 'Vedic Astrology Reading',
    date: '2026-05-05',
    time: '10:00',
    duration: 60,
    status: 'confirmed' as const,
    meetLink: 'https://meet.google.com/abc-defg-hij',
    icon: '✦',
  },
  {
    id: 's2',
    sessionName: 'Panch Tatwa Consultation',
    date: '2026-05-12',
    time: '14:00',
    duration: 45,
    status: 'confirmed' as const,
    meetLink: null,
    icon: '⊕',
  },
  {
    id: 's3',
    sessionName: 'Vedic Astrology Reading',
    date: '2026-04-10',
    time: '11:30',
    duration: 60,
    status: 'completed' as const,
    meetLink: null,
    icon: '✦',
  },
  {
    id: 's4',
    sessionName: 'Guided Meditation',
    date: '2026-03-22',
    time: '09:00',
    duration: 30,
    status: 'completed' as const,
    meetLink: null,
    icon: '◎',
  },
]

const STATUS_CONFIG = {
  confirmed: { label: 'Confirmed', icon: CheckCircle2, color: 'text-sage', bg: 'bg-sage/10 border-sage/20' },
  pending: { label: 'Pending', icon: Hourglass, color: 'text-gold', bg: 'bg-gold/10 border-gold/20' },
  completed: { label: 'Completed', icon: CheckCircle2, color: 'text-parchment-muted', bg: 'bg-black/5 border-black/10' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'text-terracotta', bg: 'bg-terracotta/10 border-terracotta/20' },
}

export default function SessionsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')

  const today = new Date().toISOString().split('T')[0]
  const upcoming = MOCK_SESSIONS.filter((s) => s.date >= today)
  const past = MOCK_SESSIONS.filter((s) => s.date < today)
  const next = upcoming[0]

  const list = tab === 'upcoming' ? upcoming : past

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      {/* Header */}
      <div className="bg-obsidian-100 border-b border-gold/10 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Your Journey</span>
          <h1 className="font-display text-4xl md:text-5xl text-parchment mt-2">My Sessions</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Next session card */}
        {next ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gold/10 to-obsidian-50 border border-gold/25 rounded-2xl p-6 mb-10 animate-pulse-gold"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-body text-xs text-gold tracking-wider uppercase mb-2">Next Session</p>
                <p className="font-display text-2xl text-parchment mb-1">{next.sessionName}</p>
                <div className="flex items-center gap-4 text-sm text-parchment-muted font-body">
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{new Date(next.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} />{next.time} IST · {next.duration} min</span>
                </div>
              </div>
              <span className="text-3xl text-gold/50">{next.icon}</span>
            </div>
            {next.meetLink && (
              <div className="mt-5">
                <a href={next.meetLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" className="group">
                    <Video size={14} />
                    Join Session
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-obsidian-50 border border-black/10 rounded-2xl p-8 mb-10 text-center"
          >
            <p className="font-display text-3xl text-parchment-muted/30 mb-3">ॐ</p>
            <p className="font-body text-parchment-muted mb-4">No upcoming sessions booked</p>
            <Link href="/book">
              <Button variant="primary">Book a Session</Button>
            </Link>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-black/10 mb-6">
          {(['upcoming', 'past'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'font-body text-sm px-4 py-3 capitalize border-b-2 transition-colors',
                tab === t ? 'border-gold text-parchment' : 'border-transparent text-parchment-muted hover:text-parchment'
              )}
            >
              {t} ({t === 'upcoming' ? upcoming.length : past.length})
            </button>
          ))}
        </div>

        {/* Sessions list */}
        {list.length === 0 ? (
          <p className="font-body text-parchment-muted text-sm py-8 text-center">
            {tab === 'upcoming' ? 'No upcoming sessions.' : 'No past sessions yet.'}
          </p>
        ) : (
          <div className="space-y-4">
            {list.map((session, i) => {
              const statusConfig = STATUS_CONFIG[session.status]
              const StatusIcon = statusConfig.icon
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-obsidian-50 border border-black/8 rounded-xl p-5 flex items-center gap-4"
                >
                  <span className="text-2xl text-gold/40 w-8 text-center">{session.icon}</span>

                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm text-parchment font-medium truncate">{session.sessionName}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-parchment-muted font-body">
                      <span className="flex items-center gap-1"><Calendar size={11} />{new Date(session.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{session.time} · {session.duration} min</span>
                    </div>
                  </div>

                  <div className={cn('flex items-center gap-1.5 text-xs font-body rounded-full px-2.5 py-1 border', statusConfig.bg, statusConfig.color)}>
                    <StatusIcon size={11} />
                    {statusConfig.label}
                  </div>

                  {session.meetLink && session.status === 'confirmed' && (
                    <a href={session.meetLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="whitespace-nowrap">
                        <Video size={12} />
                        Join
                      </Button>
                    </a>
                  )}
                </motion.div>
              )
            })}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-black/5 flex justify-center">
          <Link href="/book">
            <Button variant="primary">
              <Calendar size={16} />
              Book Another Session
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
