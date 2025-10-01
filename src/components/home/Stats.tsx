'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, School, Heart, Globe, TrendingUp, MapPin } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'

const stats = [
  {
    id: 1,
    icon: Users,
    value: 15000,
    suffix: '+',
    label: 'Youth Empowered',
    description: 'Lives transformed through our programs',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    icon: School,
    value: 150,
    suffix: '+',
    label: 'Schools Reached',
    description: 'Educational institutions impacted',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    icon: Heart,
    value: 25,
    suffix: '+',
    label: 'Programs Launched',
    description: 'Comprehensive initiatives implemented',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 4,
    icon: MapPin,
    value: 8,
    suffix: '',
    label: 'Regions Covered',
    description: 'Across Ghana and beyond',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    icon: Globe,
    value: 100,
    suffix: '+',
    label: 'Communities Served',
    description: 'Urban and rural communities',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 6,
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Program completion and engagement',
    color: 'from-teal-500 to-teal-600'
  }
]

interface AnimatedCounterProps {
  value: number
  suffix: string
  inView: boolean
}

function AnimatedCounter({ value, suffix, inView }: AnimatedCounterProps) {
  return (
    <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
      {inView ? <CountUp end={value} duration={2.5} /> : 0}
      {suffix}
    </span>
  )
}

export default function Stats() {
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
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Our Impact</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Measuring Our
              <span className="text-gradient block">Collective Impact</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every number represents a life touched, a community empowered, and a step closer 
              to actualizing the African dream through youth engagement and education.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-tr-3xl">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.color} transform rotate-45 translate-x-8 -translate-y-8`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Number */}
                  <div className="mb-3">
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
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Be part of a movement that's creating real change across Africa. 
                Together, we're building a future where every young African can thrive.
              </p>
              
              {/* Mini Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary-400">5 Years</div>
                  <div className="text-gray-400 text-sm">Since Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">100%</div>
                  <div className="text-gray-400 text-sm">Youth-Led</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">∞</div>
                  <div className="text-gray-400 text-sm">Possibilities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}