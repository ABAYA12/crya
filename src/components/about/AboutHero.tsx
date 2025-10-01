'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Globe, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white"
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">About CRYA</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Empowering Africa's
            <span className="block text-yellow-300">Rising Generation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto"
          >
            Youth-led, Africa-focused, and future-driven. Learn about our journey, 
            our vision, and the passionate team working to transform communities across the continent.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">5+</div>
              <div className="text-primary-100 text-sm">Years Strong</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">15K+</div>
              <div className="text-primary-100 text-sm">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">150+</div>
              <div className="text-primary-100 text-sm">Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">8</div>
              <div className="text-primary-100 text-sm">Regions</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#our-story"
              className="group bg-white text-primary-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <span>Our Story</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/get-involved"
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              <span>Join Our Mission</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}