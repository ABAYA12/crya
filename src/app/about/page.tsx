import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import VisionMission from '@/components/about/VisionMission'
import CoreValues from '@/components/about/CoreValues'
import Team from '@/components/about/Team'
import Impact from '@/components/about/Impact'

export const metadata: Metadata = {
  title: 'About Us - Our Story, Vision & Mission',
  description: 'Learn about CRYA\'s journey, our vision for African youth empowerment, and the dedicated team working to create positive change across the continent.',
  keywords: ['About CRYA', 'African Youth', 'Our Story', 'Vision Mission', 'Youth Empowerment'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <Team />
      <Impact />
    </div>
  )
}