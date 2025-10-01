'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Brain, 
  Users, 
  BookOpen,
  ArrowRight,
  Target,
  Heart,
  Award
} from 'lucide-react'

const programs = [
  {
    title: 'Anti-Drug Campaign',
    description: 'Comprehensive drug prevention education and support programs targeting African youth in schools and communities.',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    stats: { beneficiaries: '5,000+', locations: '150+' },
    features: ['Educational workshops', 'Peer counseling', 'Community outreach', 'Support networks'],
    href: '/programs/anti-drug'
  },
  {
    title: 'Mental Health Support',
    description: 'Breaking mental health stigma and providing culturally sensitive mental wellness support for young Africans.',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    stats: { beneficiaries: '3,200+', locations: '75+' },
    features: ['Individual counseling', 'Support groups', 'Crisis intervention', 'Mental health education'],
    href: '/programs/mental-health'
  },
  {
    title: 'Youth & Governance',
    description: 'Empowering young Africans to participate actively in democratic processes and governance structures.',
    icon: Users,
    color: 'from-orange-500 to-red-600',
    stats: { beneficiaries: '2,800+', locations: '45+' },
    features: ['Civic education', 'Leadership training', 'Policy advocacy', 'Electoral participation'],
    href: '/programs/governance'
  },
  {
    title: 'Education for Change',
    description: 'Promoting quality education and educational opportunities for underserved African youth communities.',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-600',
    stats: { beneficiaries: '4,500+', locations: '120+' },
    features: ['Scholarship programs', 'Tutoring support', 'Educational resources', 'Digital literacy'],
    href: '/programs/education'
  },
]

const impact = [
  {
    metric: '15,500+',
    label: 'Young Lives Impacted',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    metric: '390+',
    label: 'Communities Reached',
    icon: Target,
    color: 'text-blue-500'
  },
  {
    metric: '850+',
    label: 'Youth Leaders Trained',
    icon: Users,
    color: 'text-green-500'
  },
  {
    metric: '50+',
    label: 'Partner Organizations',
    icon: Award,
    color: 'text-purple-500'
  },
]

export default function ProgramsPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Comprehensive initiatives designed to empower, educate, and support African youth 
              in building brighter futures for themselves and their communities.
            </p>
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Join Our Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Collective Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Together, we're creating meaningful change across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 ${item.color}`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each program is carefully designed to address specific challenges facing 
              African youth while building on their strengths and aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Program Header */}
                  <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <div className="flex gap-4 text-sm opacity-90">
                          <span>{program.stats.beneficiaries} reached</span>
                          <span>{program.stats.locations} locations</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Content */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:gap-3 duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of young Africans who are actively participating in our programs 
              and creating positive change in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}