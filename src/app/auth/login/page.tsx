'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: replace with Supabase auth
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
            <span className="text-gold text-lg font-display">॥</span>
          </div>
          <h1 className="font-display text-3xl text-parchment">Welcome Back</h1>
          <p className="font-body text-sm text-parchment-muted mt-2">Continue your journey with Guru Ji</p>
        </div>

        <div className="bg-obsidian-50 border border-black/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
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
              <div className="mt-1.5 text-right">
                <a href="#" className="font-body text-xs text-parchment-muted/60 hover:text-gold transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-2"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-body text-sm text-parchment-muted">
              New here?{' '}
              <Link href="/auth/signup" className="text-gold hover:text-gold-light transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
