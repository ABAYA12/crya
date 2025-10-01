import Hero from '@/components/home/Hero'
import AboutSnapshot from '@/components/home/AboutSnapshot'
import UpcomingEvent from '@/components/home/UpcomingEvent'
import Programs from '@/components/home/Programs'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import NewsUpdates from '@/components/home/NewsUpdates'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSnapshot />
      <Programs />
      <Stats />
      <UpcomingEvent />
      <Testimonials />
      <NewsUpdates />
      <CallToAction />
    </div>
  )
}