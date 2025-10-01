'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  Heart,
  Handshake,
  Network,
  DollarSign,
  ArrowRight,
  Target,
  Globe,
  Award,
  Calendar,
  MapPin,
  TrendingUp
} from 'lucide-react'

const ways = [
  {
    title: 'Volunteer with Us',
    description: 'Join our passionate team of volunteers and make a direct impact in communities across Africa. From program coordination to field work, every contribution matters.',
    icon: Users,
    href: '/get-involved/volunteer',
    color: 'from-primary-500 to-primary-600',
    highlights: [
      'Flexible time commitments',
      'Training and support provided',
      'Join a global community',
      'Make lasting impact'
    ],
    stats: '500+ Active Volunteers'
  },
  {
    title: 'Partner with CRYA',
    description: 'Build strategic partnerships with us to amplify your impact. Whether corporate, NGO, or governmental, we create collaborative solutions.',
    icon: Handshake,
    href: '/get-involved/partnerships',
    color: 'from-secondary-500 to-secondary-600',
    highlights: [
      'Corporate partnerships',
      'NGO collaborations',
      'Government alliances',
      'Academic partnerships'
    ],
    stats: '150+ Active Partners'
  },
  {
    title: 'Join Our Network',
    description: 'Become part of our expanding network of young leaders, changemakers, and advocates working together for a better Africa.',
    icon: Network,
    href: '/get-involved/join',
    color: 'from-accent-500 to-accent-600',
    highlights: [
      'Leadership development',
      'Networking opportunities',
      'Skill building workshops',
      'Mentorship programs'
    ],
    stats: '10,000+ Network Members'
  },
  {
    title: 'Support Through Donations',
    description: 'Your financial support directly funds our programs, scholarships, and initiatives that transform young lives across Africa.',
    icon: DollarSign,
    href: '/get-involved/donations',
    color: 'from-gold-500 to-gold-600',
    highlights: [
      'Direct program funding',
      'Scholarship support',
      'Emergency assistance',
      'Infrastructure development'
    ],
    stats: '$2M+ Raised Annually'
  }
]

const impactStats = [
  { number: '25K+', label: 'Lives Impacted', icon: Heart },
  { number: '500+', label: 'Active Volunteers', icon: Users },
  { number: '150+', label: 'Partner Organizations', icon: Handshake },
  { number: '35', label: 'Countries Reached', icon: Globe }
]

const testimonials = [
  {
    name: 'Sarah Okafor',
    role: 'Corporate Volunteer',
    company: 'Microsoft',
    image: '/images/testimonials/sarah-okafor.jpg',
    quote: 'Volunteering with CRYA has been transformative. The organization\'s professionalism and impact are remarkable.',
    location: 'Lagos, Nigeria'
  },
  {
    name: 'Dr. James Mwangi',
    role: 'Partner Organization',
    company: 'Kenya Medical Research Institute',
    image: '/images/testimonials/james-mwangi.jpg',
    quote: 'Our partnership with CRYA has amplified our mental health initiatives across East Africa significantly.',
    location: 'Nairobi, Kenya'
  },
  {
    name: 'Aisha Hassan',
    role: 'Network Member',
    company: 'Young Leaders Forum',
    image: '/images/testimonials/aisha-hassan.jpg',
    quote: 'CRYA\'s network provided me with mentorship, skills, and opportunities that shaped my career.',
    location: 'Khartoum, Sudan'
  },
  {
    name: 'Michael Adebayo',
    role: 'Monthly Donor',
    company: 'Tech Entrepreneur',
    image: '/images/testimonials/michael-adebayo.jpg',
    quote: 'Knowing my donations directly fund scholarships and programs gives me immense satisfaction.',
    location: 'Accra, Ghana'
  }
]

const upcomingEvents = [
  {
    title: 'Volunteer Orientation Program',
    date: 'October 15, 2025',
    time: '10:00 AM WAT',
    location: 'Accra, Ghana',
    type: 'In-Person',
    description: 'Comprehensive orientation for new volunteers joining our programs.'
  },
  {
    title: 'Partners Summit 2025',
    date: 'November 8-10, 2025',
    time: 'All Day',
    location: 'Lagos, Nigeria',
    type: 'Conference',
    description: 'Annual gathering of all CRYA partners to plan collaborative initiatives.'
  },
  {
    title: 'Youth Leadership Bootcamp',
    date: 'November 22-24, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Nairobi, Kenya',
    type: 'Workshop',
    description: 'Intensive leadership development program for network members.'
  }
]

export default function GetInvolvedPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/cryalogo.jpg"
                  alt="CRYA Logo"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white/20"
                />
                <div className="absolute inset-0 bg-primary-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Involved with CRYA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Join thousands of passionate individuals working together to empower 
              African youth and create lasting change across the continent.
            </p>
            <div className="text-center">
              <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">
                4 Ways to Make an Impact • Join 25,000+ Changemakers
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you have time, expertise, resources, or passion to share, 
              there's a perfect way for you to contribute to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${way.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <way.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {way.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {way.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {way.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Current Impact:</span>
                          <p className="font-semibold text-primary-600 dark:text-primary-400">
                            {way.stats}
                          </p>
                        </div>
                        
                        <Link
                          href={way.href}
                          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from volunteers, partners, network members, and supporters who 
              are making a difference with CRYA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {testimonial.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us at these upcoming events and opportunities to get more involved 
              with CRYA's mission and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/cryalogo.jpg"
                alt="CRYA Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-white/50"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and help us create a brighter 
              future for African youth. Every contribution, big or small, makes an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Users className="w-5 h-5" />
                Start Volunteering
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}