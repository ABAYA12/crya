'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Users, ArrowRight, Zap, Globe, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const actionCards = [
  {
    id: 1,
    icon: Heart,
    title: 'Support Our Mission',
    description: 'Your donation directly funds programs that transform lives across African communities.',
    cta: 'Donate Now',
    href: '/donate',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600'
  },
  {
    id: 2,
    icon: Users,
    title: 'Join Our Community',
    description: 'Become part of a growing network of young African leaders creating change.',
    cta: 'Join Network',
    href: '/get-involved/join',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 3,
    icon: Zap,
    title: 'Volunteer Your Time',
    description: 'Contribute your skills and passion to programs that matter to African youth.',
    cta: 'Get Involved',
    href: '/get-involved/volunteer',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  }
]

export default function CallToAction() {
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main CTA Hero */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="hero-pattern w-full h-full opacity-20" />
              </div>
              
              {/* CRYA Logo Background */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <Image
                  src="/cryalogo.jpg"
                  alt="CRYA Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-white text-center">
                <motion.div
                  variants={itemVariants}
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white mb-6">
                    <Target className="w-5 h-5" />
                    <span className="font-medium">Be the Change</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Ready to Transform
                    <span className="block text-yellow-300">Africa's Future?</span>
                  </h2>

                  <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
                    Join thousands of young Africans who are actively shaping our continent's destiny. 
                    Every action, every voice, every contribution matters in building the Africa we envision.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      href="/get-involved/join"
                      className="group bg-white text-primary-700 hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
                    >
                      <span>Join the Movement</span>
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link
                      href="/donate"
                      className="group bg-primary-800/50 hover:bg-primary-800 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 flex items-center"
                    >
                      <Heart className="w-6 h-6 mr-3 group-hover:text-red-300 transition-colors duration-300" />
                      <span>Support Us</span>
                    </Link>
                  </div>

                  {/* Stats Mini */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">15K+</div>
                      <div className="text-primary-100 text-sm">Lives Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">150+</div>
                      <div className="text-primary-100 text-sm">Schools Reached</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">8</div>
                      <div className="text-primary-100 text-sm">Regions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">5</div>
                      <div className="text-primary-100 text-sm">Years Strong</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Action Cards */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Path to Impact
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                There are many ways to contribute to our mission. Find the approach that 
                resonates with you and start making a difference today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {actionCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  className="group relative bg-white border-2 border-gray-200 hover:border-transparent rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${card.bgColor} group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                      <card.icon className={`w-10 h-10 ${card.textColor} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                      {card.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-8 transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={card.href}
                      className={`inline-flex items-center ${card.textColor} group-hover:text-white font-semibold group-hover:translate-x-1 transition-all duration-300`}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Inspiration */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-gray-50 rounded-3xl p-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Globe className="w-12 h-12 text-primary-600" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  "The future of Africa is in the hands of its youth. 
                  <span className="text-primary-600"> Together, we rise.</span>"
                </h3>
                
                <p className="text-gray-600 text-lg mb-8">
                  Every great movement starts with individuals who believe in change. 
                  Your journey with CRYA begins with a single step. Take it today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/about"
                    className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Learn Our Story
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}