'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Check, AlertCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/Button'

const PERKS = [
  'Access free content library',
  'Book 1:1 sessions with Guru Ji',
  'Track your booked sessions',
  'Receive personalised guidance',
]

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Register
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Something went wrong.')
      setLoading(false)
      return
    }

    // Auto sign-in after registration
    const result = await signIn('credentials', {
      email: form.email.toLowerCase().trim(),
      password: form.password,
      redirect: false,
    })

    if (result?.error) {
      router.push('/auth/login')
    } else {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left — perks */}
        <div className="hidden md:block">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
            <span className="text-gold font-display">॥</span>
          </div>
          <h2 className="font-display text-4xl text-parchment mb-4">Begin Your Journey</h2>
          <p className="font-body text-parchment-muted text-base mb-8 leading-relaxed">
            Join thousands of seekers exploring ancient Vedic wisdom through Guru Ji's teachings.
          </p>
          <ul className="space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Check size={10} className="text-gold" strokeWidth={3} />
                </div>
                <span className="font-body text-sm text-parchment-muted">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div>
          <div className="text-center mb-8 md:hidden">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-gold text-lg font-display">॥</span>
            </div>
            <h1 className="font-display text-3xl text-parchment">Create Account</h1>
          </div>
          <div className="hidden md:block mb-6">
            <h1 className="font-display text-2xl text-parchment">Create your account</h1>
            <p className="font-body text-sm text-parchment-muted mt-1">Free to join · No credit card needed</p>
          </div>

          <div className="bg-obsidian-50 border border-black/10 rounded-2xl p-8">
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm font-body">
                <AlertCircle size={15} className="shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-sm text-parchment-muted mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-obsidian-100 border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-parchment placeholder:text-parchment-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-sm text-parchment-muted mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full bg-obsidian-100 border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-parchment placeholder:text-parchment-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-sm text-parchment-muted mb-1.5 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Min. 8 characters"
                    className="w-full bg-obsidian-100 border border-black/10 rounded-xl px-4 py-3 pr-11 font-body text-sm text-parchment placeholder:text-parchment-muted/40 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-parchment-muted hover:text-parchment transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                disabled={loading}
              >
                {loading ? 'Creating account…' : 'Get Started — Free'}
              </Button>

              <p className="font-body text-xs text-parchment-muted/50 text-center">
                By signing up you agree to our Terms & Privacy Policy
              </p>
            </form>

            <div className="mt-5 text-center">
              <p className="font-body text-sm text-parchment-muted">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-gold hover:text-gold-light transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
