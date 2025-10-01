'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from '@/components/ui/CountUp'
import { Users, School, Heart, Globe, MapPin, Award } from 'lucide-react'

const impactStats = [
  {
    icon: Users,
    value: 15000,
    suffix: '+',
    label: 'Youth Empowered',
    description: 'Lives directly impacted through our programs'
  },
  {
    icon: School,
    value: 150,
    suffix: '+',
    label: 'Schools Reached',
    description: 'Educational institutions where we\'ve implemented programs'
  },
  {
    icon: MapPin,
    value: 8,
    suffix: '',
    label: 'Regions Covered',
    description: 'Geographic areas across Ghana where we operate'
  },
  {
    icon: Globe,
    value: 100,
    suffix: '+',
    label: 'Communities Served',
    description: 'Urban and rural communities we\'ve engaged'
  },
  {
    icon: Heart,
    value: 25,
    suffix: '+',
    label: 'Programs Launched',
    description: 'Comprehensive initiatives successfully implemented'
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Program completion and positive feedback rate'
  }
]

interface AnimatedCounterProps {
  value: number
  suffix: string
  inView: boolean
}

function AnimatedCounter({ value, suffix, inView }: AnimatedCounterProps) {
  return (
    <span className="text-3xl md:text-4xl font-bold">
      {inView ? <CountUp end={value} duration={2500} /> : 0}
      {suffix}
    </span>
  )
}

export default function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
              Our Collective
              <span className="text-gradient block">Impact</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers tell a story, but behind every statistic is a life touched, a community 
              empowered, and a step closer to realizing the African dream through youth engagement.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-1 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Number */}
                <div className="mb-3 text-primary-600">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Impact Stories */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Beyond the Numbers
                </h3>
                <p className="text-primary-100 max-w-2xl mx-auto">
                  While statistics show our reach, the real impact lies in the transformed 
                  lives, strengthened communities, and inspired leaders we've empowered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="text-xl font-semibold mb-3">Educational Excellence</h4>
                  <p className="text-primary-100 text-sm">
                    Students report improved academic performance and increased 
                    motivation to pursue higher education.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h4 className="text-xl font-semibold mb-3">Personal Growth</h4>
                  <p className="text-primary-100 text-sm">
                    Participants develop leadership skills, confidence, and 
                    a stronger sense of purpose and identity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h4 className="text-xl font-semibold mb-3">Community Change</h4>
                  <p className="text-primary-100 text-sm">
                    Communities report decreased drug use, improved youth 
                    engagement, and stronger social cohesion.
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