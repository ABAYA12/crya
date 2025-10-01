'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Users, Target, Lightbulb, Heart } from 'lucide-react'

const milestones = [
  {
    year: '2020',
    title: 'CRYA Founded',
    description: 'Started as a grassroots initiative by passionate Ghanaian youth committed to creating positive change.',
    icon: Lightbulb
  },
  {
    year: '2021',
    title: 'First Programs Launch',
    description: 'Launched our first educational outreach programs in local schools and communities.',
    icon: Target
  },
  {
    year: '2022',
    title: 'Regional Expansion',
    description: 'Expanded operations to reach youth across multiple regions in Ghana.',
    icon: MapPin
  },
  {
    year: '2023',
    title: 'Mental Health Initiative',
    description: 'Launched comprehensive mental health and anti-drug programs in Senior High Schools.',
    icon: Heart
  },
  {
    year: '2024',
    title: 'Continental Vision',
    description: 'Established partnerships across Africa, connecting youth throughout the continent.',
    icon: Users
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Continuing to empower and unite African youth for transformative change.',
    icon: Target
  }
]

export default function OurStory() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="our-story" className="section-padding bg-white">
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
              <Calendar className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Vision to
              <span className="text-gradient block">Transformative Impact</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What started as a dream among passionate Ghanaian youth has grown into a 
              continental movement. Our story is one of determination, community, and 
              unwavering belief in the power of African youth to create meaningful change.
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Beginning: A Spark of Hope
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  In 2020, a group of young Ghanaians came together with a shared vision: 
                  to create a platform where African youth could raise their voices on issues 
                  that matter most to their communities and continent. What began as informal 
                  discussions about governance, democracy, and youth empowerment soon evolved 
                  into something much more significant.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Growing the Movement
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Recognizing the urgent need for youth-driven solutions to Africa's challenges, 
                  we formalized CRYA as an organization committed to education, advocacy, and 
                  purposeful engagement. Our founders understood that lasting change comes from 
                  within communities, led by those who understand the challenges firsthand.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Impact Through Action
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Today, CRYA stands as a testament to what young Africans can achieve when 
                  they come together with purpose and determination. Through our programs in 
                  education, mental health, anti-drug campaigns, and governance, we've touched 
                  thousands of lives and continue to grow our impact across the continent.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    variants={itemVariants}
                    className="relative flex items-start space-x-4"
                  >
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-h-12 pb-8">
                      <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-primary-600">
                            {milestone.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Principles */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                What Drives Us Forward
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-semibold mb-2">Purpose-Driven</h4>
                  <p className="text-primary-100">
                    Every program and initiative is designed with clear goals 
                    and measurable impact in mind.
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold mb-2">Community-Centered</h4>
                  <p className="text-primary-100">
                    We work with and within communities, ensuring our programs 
                    address real, local needs.
                  </p>
                </div>
                
                <div>
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-semibold mb-2">Continental Vision</h4>
                  <p className="text-primary-100">
                    While rooted in Ghana, our vision encompasses the entire 
                    African continent and diaspora.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}