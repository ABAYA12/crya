'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Shield, Brain, MessageSquare, Vote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    id: 1,
    title: 'Anti-Drug & Mental Health Campaign',
    description: 'Comprehensive programs in Senior High Schools addressing substance abuse and promoting mental wellness among students.',
    icon: Shield,
    image: '/images/program-antidrug.jpg',
    stats: { label: 'Students Reached', value: '10,000+' },
    color: 'from-red-500 to-red-600',
    href: '/programs/anti-drug',
    highlights: ['School Workshops', 'Peer Counseling', 'Community Outreach']
  },
  {
    id: 2,
    title: 'Youth & Governance',
    description: 'Empowering young people to actively participate in democratic processes and governance structures.',
    icon: Vote,
    image: '/images/program-governance.jpg',
    stats: { label: 'Youth Trained', value: '2,500+' },
    color: 'from-blue-500 to-blue-600',
    href: '/programs/governance',
    highlights: ['Civic Education', 'Leadership Training', 'Policy Advocacy']
  },
  {
    id: 3,
    title: 'Education for Change',
    description: 'Transformative educational programs that equip African youth with knowledge and skills for continental development.',
    icon: BookOpen,
    image: '/images/program-education.jpg',
    stats: { label: 'Programs Delivered', value: '150+' },
    color: 'from-green-500 to-green-600',
    href: '/programs/education',
    highlights: ['Skill Development', 'Mentorship', 'Scholarships']
  },
  {
    id: 4,
    title: 'African Dream Dialogues',
    description: 'Platform for meaningful conversations about Africa\'s future, connecting youth across the continent and diaspora.',
    icon: MessageSquare,
    image: '/images/program-dialogues.jpg',
    stats: { label: 'Dialogues Hosted', value: '75+' },
    color: 'from-purple-500 to-purple-600',
    href: '/programs/dialogues',
    highlights: ['Panel Discussions', 'Cultural Exchange', 'Networking']
  }
]

export default function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Our Programs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Empowering Through
              <span className="text-gradient block">Purposeful Action</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs address the most pressing challenges facing African youth, 
              providing pathways to empowerment, education, and meaningful engagement.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-lg font-bold text-gray-900">{program.stats.value}</div>
                    <div className="text-xs text-gray-600">{program.stats.label}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={program.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our programs and be part of the generation that transforms Africa. 
                Together, we can create lasting change in our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore All Programs
                </Link>
                <Link
                  href="/get-involved/volunteer"
                  className="bg-primary-800 hover:bg-primary-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}