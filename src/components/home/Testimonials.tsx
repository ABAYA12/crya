'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Kwame Asante',
    role: 'Student Leader',
    institution: 'Kwabenya SHS',
    image: '/images/testimonial-1.jpg',
    quote: 'CRYA\'s anti-drug campaign opened my eyes to the realities of substance abuse. Their approach was respectful and informative. I now lead peer counseling in my school.',
    rating: 5,
    program: 'Anti-Drug Campaign'
  },
  {
    id: 2,
    name: 'Ama Osei',
    role: 'Youth Advocate',
    institution: 'University of Ghana',
    image: '/images/testimonial-2.jpg',
    quote: 'The Youth & Governance program gave me the tools and confidence to speak up on issues affecting my community. I\'ve since been elected as a local assembly member.',
    rating: 5,
    program: 'Youth & Governance'
  },
  {
    id: 3,
    name: 'Emmanuel Adjei',
    role: 'Program Volunteer',
    institution: 'CRYA Volunteer',
    image: '/images/testimonial-3.jpg',
    quote: 'Working with CRYA has been transformative. The organization truly lives up to its mission of empowering African youth. The impact we create together is remarkable.',
    rating: 5,
    program: 'Volunteer Program'
  },
  {
    id: 4,
    name: 'Akosua Mensah',
    role: 'Beneficiary',
    institution: 'Achimota SHS',
    image: '/images/testimonial-4.jpg',
    quote: 'The mental health workshop helped me understand that it\'s okay to seek help. CRYA created a safe space where we could share our struggles and find support.',
    rating: 5,
    program: 'Mental Health Support'
  },
  {
    id: 5,
    name: 'Kofi Badu',
    role: 'Community Leader',
    institution: 'Tema Community',
    image: '/images/testimonial-5.jpg',
    quote: 'CRYA\'s community outreach programs have brought positive change to our neighborhood. The youth are more engaged and hopeful about their future.',
    rating: 5,
    program: 'Community Outreach'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Quote className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Voices of
              <span className="text-gradient block">Transformation</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the young Africans whose lives have been transformed through our programs. 
              Their stories inspire us to continue our mission of empowerment and change.
            </p>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="hero-pattern w-full h-full" />
              </div>

              <div className="relative z-10">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                >
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white/30">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-primary-100">
                          {testimonials[currentIndex].role} • {testimonials[currentIndex].institution}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Program Badge */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      <span>{testimonials[currentIndex].program}</span>
                    </div>
                  </div>

                  {/* Large Profile Image */}
                  <div className="hidden lg:block">
                    <div className="relative w-64 h-80 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl" />
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover rounded-3xl"
                        sizes="256px"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary-400 mb-3" />
                    <p className="text-gray-700 leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}