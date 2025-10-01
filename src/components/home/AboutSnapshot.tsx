'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Target, Eye, Heart, Users, Globe, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Education as Empowerment',
    description: 'We believe that quality education is the foundation for personal and societal transformation.'
  },
  {
    icon: Users,
    title: 'Youth-Driven Leadership',
    description: 'Empowering young people to take the lead in shaping their communities and continent.'
  },
  {
    icon: Heart,
    title: 'Patriotism and Hope',
    description: 'Fostering love for Africa and optimism for its bright future among our youth.'
  },
  {
    icon: Globe,
    title: 'Unity Across Borders',
    description: 'Building bridges that connect African youth across the continent and diaspora.'
  }
]

export default function AboutSnapshot() {
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>About CRYA</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Empowering Africa's
                <span className="text-gradient block">Rising Generation</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Concerned Rising Youths Africa (CRYA) is a youth-led initiative created by 
                Ghanaian youth for the Ghanaian and African youth. We exist to serve as a 
                platform to raise and catapult the voices of African youth to the national 
                and international stage.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To serve as a platform that raises and amplifies the voices of Ghanaian 
                      and African youth to national and international levels on issues concerning 
                      governance, democracy, and global development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-200 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Actualize the African Dream through education, promote youth participation 
                      in governance, revive patriotism and hope, and build a united black 
                      community identity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="group inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Images */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative">
              {/* CRYA Logo */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                <Image
                  src="/cryalogo.jpg"
                  alt="CRYA Logo - Rising Youths Africa"
                  width={200}
                  height={200}
                  className="object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15,000+</div>
                    <div className="text-gray-600 text-sm">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our approach to youth empowerment across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}