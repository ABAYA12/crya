'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const missionItems = [
  'Actualize the African Dream through education',
  'Promote youth participation in governance and socio-economic development', 
  'Revive a sense of patriotism and hope in the African youth',
  'Serve as a network that connects rising African youth, united in creating a better Africa',
  'Empower an Africa of hope and a great future',
  'Build a black community identity, uniting Africans on the continent and in the diaspora'
]

export default function VisionMission() {
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Vision &
              <span className="text-gradient block">Mission</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by a clear vision and driven by a comprehensive mission, 
              we work tirelessly to empower African youth and transform communities.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  To serve as a platform that raises and amplifies the voices of Ghanaian 
                  and African youth to national and international levels on issues concerning 
                  governance, democracy, and global development.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Focus Areas:</h4>
                <ul className="space-y-2">
                  {['Youth Voice Amplification', 'Governance & Democracy', 'Global Development', 'International Advocacy'].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 group-hover:bg-green-200 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  We are committed to building a united, empowered, and visionary 
                  generation of young Africans through:
                </p>
                
                <ul className="space-y-4">
                  {missionItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Strategic Pillars */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Strategic Pillars
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📚</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Education</h4>
                <p className="text-gray-600">
                  Empowering youth through knowledge, skills development, and 
                  comprehensive educational programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🗳️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Advocacy</h4>
                <p className="text-gray-600">
                  Raising awareness and advocating for policies that benefit 
                  African youth and communities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Engagement</h4>
                <p className="text-gray-600">
                  Creating platforms for meaningful dialogue, networking, 
                  and collaborative action.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Be Part of the Vision?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Our vision becomes reality through the collective action of passionate 
                individuals like you. Join us in creating the Africa we all envision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved/join"
                  className="group bg-white text-primary-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>Join Our Network</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/programs"
                  className="group bg-primary-800 hover:bg-primary-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore Programs</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}