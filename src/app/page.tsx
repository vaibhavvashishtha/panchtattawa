import { Hero } from '@/components/home/Hero'
import { PanchTatwaStrip } from '@/components/home/PanchTatwaStrip'
import { FeaturedVideosSection } from '@/components/home/FeaturedVideosSection'
import { Testimonials } from '@/components/home/Testimonials'
import { getVideos } from '@/lib/video-sources'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default async function HomePage() {
  const featured = await getVideos({ featuredOnly: true, limit: 3 })

  return (
    <>
      <Hero />
      <PanchTatwaStrip />
      <FeaturedVideosSection videos={featured} />
      <Testimonials />

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
