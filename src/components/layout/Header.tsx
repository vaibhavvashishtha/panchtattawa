'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/videos', label: 'Content Library' },
  // { href: '/book', label: 'Book a Session' },
  // { href: '/sessions', label: 'My Sessions' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-xl border-b border-black/8 shadow-sm shadow-black/10'
          : 'bg-obsidian/80 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo — panch tatwa brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Sunflower/mandala icon placeholder — swap src for real logo file */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-sm group-hover:shadow-gold/30 transition-all">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
              {/* Simple petal flower matching the brand icon style */}
              {[0,45,90,135,180,225,270,315].map((a) => {
                const r = (a * Math.PI) / 180
                return (
                  <ellipse
                    key={a}
                    cx={16 + 6 * Math.sin(r)}
                    cy={16 - 6 * Math.cos(r)}
                    rx="4.5" ry="2.5"
                    fill="rgba(255,255,255,0.85)"
                    transform={`rotate(${a}, ${16 + 6 * Math.sin(r)}, ${16 - 6 * Math.cos(r)})`}
                  />
                )
              })}
              <circle cx="16" cy="16" r="4" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg text-gold font-semibold tracking-wide leading-none">
              panch tatwa
            </span>
            <span className="font-body text-[10px] text-cobalt italic tracking-wide leading-none mt-0.5">
              The Law of Creation
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-body text-sm transition-colors duration-200',
                pathname === link.href
                  ? 'text-gold font-medium'
                  : 'text-parchment-muted hover:text-parchment'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — re-enable when auth is ready */}
        {/* <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div> */}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-parchment-muted hover:text-parchment transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-obsidian/95 backdrop-blur-xl border-b border-black/8',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'font-body text-base py-1 transition-colors',
                pathname === link.href ? 'text-gold font-medium' : 'text-parchment-muted hover:text-parchment'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
