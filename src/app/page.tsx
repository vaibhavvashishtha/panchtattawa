import { Hero } from '@/components/home/Hero'
import { PanchTatwaStrip } from '@/components/home/PanchTatwaStrip'
import { FeaturedVideosSection } from '@/components/home/FeaturedVideosSection'
import { Testimonials } from '@/components/home/Testimonials'
import { getVideos } from '@/lib/video-sources'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Instagram, Youtube, Facebook } from 'lucide-react'

export default async function HomePage() {
  const featured = await getVideos({ featuredOnly: true, limit: 3 })

  return (
    <>
      <Hero />
      <PanchTatwaStrip />
      <FeaturedVideosSection videos={featured} />
      <Testimonials />

      {/* Social Media */}
      <section style={{ backgroundColor: '#1A0F08' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-body text-xs text-gold tracking-[0.2em] uppercase">Stay Connected</span>
          <h2 className="font-display text-3xl text-white mt-2 mb-3">Follow Sri Guru Ji</h2>
          <p className="font-body text-white/50 text-sm mb-10">
            Daily wisdom, event updates, and free teachings on Instagram, Facebook & YouTube.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="https://www.instagram.com/srigurujimanojkjuyal" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Instagram size={22} className="text-pink-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Instagram</p>
                <p className="font-body text-white/50 text-xs">@srigurujimanojkjuyal</p>
              </div>
            </a>
            <a href="https://www.facebook.com/panchtatwa/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Facebook size={22} className="text-blue-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">Facebook</p>
                <p className="font-body text-white/50 text-xs">facebook.com/panchtatwa</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@panchtatwa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-all w-full sm:w-auto">
              <Youtube size={22} className="text-red-400 shrink-0" />
              <div className="text-left">
                <p className="font-body text-white text-sm font-semibold">YouTube</p>
                <p className="font-body text-white/50 text-xs">@panchtatwa</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-obsidian py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">Begin Your Journey</p>
          <h2 className="font-display text-5xl text-parchment mb-6 leading-tight">
            Ready to Transform Your Life?
          </h2>
          <p className="font-body text-parchment-muted text-lg mb-10 max-w-lg mx-auto">
            Book a personal session with Guru Ji and receive guidance tailored to your unique Panch Tatwa constitution and astrological chart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button variant="primary" size="lg">Book a Session</Button>
            </Link>
            <Link href="/videos">
              <Button variant="outline" size="lg">Browse Free Content</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
