'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Users, Heart, Globe, BookOpen, Handshake } from 'lucide-react'

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Education as Empowerment',
    description: 'We believe that quality education is the foundation for personal and societal transformation. Through knowledge comes the power to change circumstances and create opportunities.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Users,
    title: 'Youth-Driven Leadership',
    description: 'Young people are not just the leaders of tomorrow—they are the leaders of today. We empower youth to take charge of their communities and drive meaningful change.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Heart,
    title: 'Patriotism and Hope',
    description: 'We foster deep love for Africa and unwavering optimism about its potential. Our patriotism drives us to work tirelessly for the continent\'s advancement.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Globe,
    title: 'Unity Across Borders',
    description: 'We build bridges that connect African youth across nations, cultures, and circumstances. Our strength lies in our collective voice and shared vision.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: BookOpen,
    title: 'Accountability and Progress',
    description: 'We hold ourselves and our leaders accountable for creating tangible progress. Every action must contribute to measurable positive change.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Handshake,
    title: 'Collaborative Impact',
    description: 'We believe in the power of partnerships and collaborative efforts. Together, we can achieve far more than any individual or organization alone.',
    color: 'from-teal-500 to-teal-600'
  }
]

export default function CoreValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core
              <span className="text-gradient block">Values</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make, every program we design, 
              and every partnership we forge. They are the foundation upon which CRYA stands.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border-2 border-gray-200 hover:border-transparent rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values in Action */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gray-50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Values in Action
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our values aren't just words on a page—they come alive through our programs, 
                  partnerships, and daily interactions with the communities we serve.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Purpose-Driven Programs</h4>
                  <p className="text-gray-600 text-sm">
                    Every initiative aligns with our values and addresses real community needs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ethical Partnerships</h4>
                  <p className="text-gray-600 text-sm">
                    We collaborate only with organizations that share our commitment to integrity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Measurable Impact</h4>
                  <p className="text-gray-600 text-sm">
                    We track and report on our progress, ensuring accountability and transparency.
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