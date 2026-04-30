import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Panchtatwa — Ancient Wisdom by Sri Guru Ji Manoj K Juyal',
    template: '%s · Panchtatwa',
  },
  description:
    'Explore Vedic Astrology, Panch Tatwa, Meditation, and Healing with Sri Guru Ji Manoj K Juyal. Book 1:1 sessions or access the content library.',
  keywords: ['Panch Tatwa', 'Vedic Astrology', 'Meditation', 'Guru Ji', 'Manoj Juyal', 'Sound Healing'],
  openGraph: {
    title: 'Panchtatwa — Ancient Wisdom',
    description: 'Guided by Sri Guru Ji Manoj K Juyal. Explore the five elements that govern all existence.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-obsidian text-parchment font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
