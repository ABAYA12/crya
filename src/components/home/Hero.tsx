'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Heart, Users, ArrowRight, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    title: "Raising Voices, Shaping Africa's Future",
    subtitle: "Empowering African Youth for Governance and Democracy",
    description: "Join us in building a united, empowered, and visionary generation of young Africans driven by education, hope, patriotism, and purposeful engagement.",
    image: "/cryalogo.jpg",
    cta: "Join Our Movement",
    ctaLink: "/get-involved/join",
    stats: { label: "Youth Empowered", value: "5,000+" }
  },
  {
    id: 2,
    title: "Education as Empowerment",
    subtitle: "Actualizing the African Dream Through Learning",
    description: "We believe education is the cornerstone of empowerment. Through our programs, we're building a generation ready to lead Africa into prosperity.",
    image: "/cryalogo.jpg",
    cta: "Explore Programs",
    ctaLink: "/programs",
    stats: { label: "Schools Reached", value: "150+" }
  },
  {
    id: 3,
    title: "Mental Health & Anti-Drug Campaign",
    subtitle: "Supporting Healthy Communities",
    description: "Our ongoing campaigns in Senior High Schools across Ghana are making real impact in fighting drug abuse and promoting mental wellness.",
    image: "/cryalogo.jpg",
    cta: "Learn More",
    ctaLink: "/programs/anti-drug",
    stats: { label: "Students Impacted", value: "10,000+" }
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 3000)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              {/* Pattern Overlay */}
              <div className="absolute inset-0 hero-pattern opacity-30" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* CRYA Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 mb-4"
              >
                <Image
                  src="/cryalogo.jpg"
                  alt="CRYA Logo"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white/20 shadow-2xl"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">CRYA</h2>
                  <p className="text-primary-100 text-sm">Rising Youths Africa</p>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 text-primary-100"
              >
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Youth-Led Initiative</span>
              </motion.div>

              {/* Main Content */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl md:text-2xl text-primary-100 font-medium"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={heroSlides[currentSlide].ctaLink}
                  className="group inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>{heroSlides[currentSlide].cta}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/donate"
                  className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                  <span>Support Us</span>
                </Link>

                <button className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Video</span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex items-center space-x-8"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {heroSlides[currentSlide].stats.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {heroSlides[currentSlide].stats.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary-400 scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 text-white/60"
      >
        <ChevronRight className="w-6 h-6 rotate-90" />
      </motion.div>
    </section>
  )
}