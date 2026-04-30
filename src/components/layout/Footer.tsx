import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'

const LINKS = {
  explore: [
    { href: '/videos', label: 'Content Library' },
    { href: '/book', label: 'Book a Session' },
    { href: '/sessions', label: 'My Sessions' },
  ],
  elements: [
    { href: '/videos?category=panch-tatwa', label: 'Panch Tatwa' },
    { href: '/videos?category=meditation', label: 'Meditation' },
    { href: '/videos?category=vedic-astrology', label: 'Vedic Astrology' },
    { href: '/videos?category=healing', label: 'Sound Healing' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-obsidian-100 border-t border-gold/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-white text-xs font-display font-bold">✿</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base text-gold font-semibold">panch tatwa</span>
                <span className="font-body text-[9px] text-cobalt italic">The Law of Creation</span>
              </div>
            </div>
            <p className="font-body text-parchment-muted text-sm leading-relaxed max-w-xs">
              Ancient wisdom for the modern seeker. Guided by Sri Guru Ji Manoj K Juyal, explore the
              five elements that govern all of existence.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/srigurujimanojkjuyal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-parchment-muted hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:contact@panchtatwa.com"
                className="text-parchment-muted hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-body text-parchment text-sm font-semibold mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {LINKS.explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-parchment-muted text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elements */}
          <div>
            <h3 className="font-body text-parchment text-sm font-semibold mb-4 uppercase tracking-wider">
              Elements
            </h3>
            <ul className="space-y-2.5">
              {LINKS.elements.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-parchment-muted text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-parchment-muted text-xs">
            © {new Date().getFullYear()} Panchtatwa · Sri Guru Ji Manoj K Juyal · All rights reserved
          </p>
          <p className="font-body text-parchment-muted/60 text-xs">
            Built with reverence · www.panchtatwa.com
          </p>
        </div>
      </div>
    </footer>
  )
}
