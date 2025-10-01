'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Users, 
  Heart, 
  Target,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react'

const programStats = [
  { label: 'Students Reached', value: '5,000+', icon: Users },
  { label: 'Schools Visited', value: '150+', icon: MapPin },
  { label: 'Lives Impacted', value: '8,500+', icon: Heart },
  { label: 'Awareness Sessions', value: '200+', icon: Calendar },
]

const keyComponents = [
  {
    title: 'Educational Workshops',
    description: 'Interactive sessions in schools and communities about drug awareness and prevention.',
    icon: Target,
  },
  {
    title: 'Peer Counseling',
    description: 'Training young leaders to support their peers and provide guidance.',
    icon: Users,
  },
  {
    title: 'Community Outreach',
    description: 'Engaging families and communities in creating drug-free environments.',
    icon: Shield,
  },
  {
    title: 'Support Networks',
    description: 'Building strong support systems for young people at risk.',
    icon: Heart,
  },
]

const upcomingEvents = [
  {
    title: 'Drug-Free Schools Campaign',
    date: 'November 15, 2025',
    location: 'Accra Secondary Schools',
    description: 'A week-long campaign reaching 20 secondary schools across Accra.',
  },
  {
    title: 'Community Leaders Workshop',
    date: 'December 3, 2025',
    location: 'Kumasi Community Center',
    description: 'Training community leaders on youth drug prevention strategies.',
  },
  {
    title: 'Youth Summit',
    date: 'January 20, 2026',
    location: 'National Theatre, Accra',
    description: 'Annual summit bringing together 1000+ young people for drug awareness.',
  },
]

export default function AntiDrugProgram() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Anti-Drug Campaign
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Empowering African youth to make informed decisions and live drug-free lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Join Our Campaign
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use a comprehensive, community-based approach to drug prevention that addresses
              the root causes while empowering young people with knowledge and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyComponents.map((component, index) => {
              const Icon = component.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {component.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us in our upcoming anti-drug campaign activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Solution
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of young Africans who are committed to creating drug-free communities.
              Together, we can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Volunteer With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Need Help?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}