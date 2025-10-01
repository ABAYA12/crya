'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  Users, 
  Heart, 
  Shield,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  CheckCircle
} from 'lucide-react'

const mentalHealthStats = [
  { label: 'Youth Supported', value: '3,200+', icon: Users },
  { label: 'Counseling Sessions', value: '1,500+', icon: Brain },
  { label: 'Support Groups', value: '75+', icon: Heart },
  { label: 'Mental Health Champions', value: '120+', icon: Shield },
]

const services = [
  {
    title: 'Individual Counseling',
    description: 'One-on-one support sessions with trained mental health advocates.',
    icon: Brain,
    features: ['Confidential sessions', 'Peer counselors', 'Professional referrals']
  },
  {
    title: 'Support Groups',
    description: 'Safe spaces for young people to share experiences and support each other.',
    icon: Users,
    features: ['Weekly meetings', 'Peer support', 'Guided discussions']
  },
  {
    title: 'Crisis Intervention',
    description: '24/7 support for young people experiencing mental health crises.',
    icon: Phone,
    features: ['Emergency hotline', 'Immediate support', 'Crisis counseling']
  },
  {
    title: 'Mental Health Education',
    description: 'Workshops and campaigns to reduce stigma and increase awareness.',
    icon: Shield,
    features: ['School programs', 'Community outreach', 'Awareness campaigns']
  },
]

const testimonials = [
  {
    name: 'Ama K.',
    age: 19,
    quote: "CRYA's mental health program saved my life. I learned I wasn't alone and that it's okay to ask for help.",
    program: 'Support Groups'
  },
  {
    name: 'Kwame A.',
    age: 22,
    quote: "Through the peer counseling program, I not only got help but also learned to help others facing similar challenges.",
    program: 'Peer Counseling'
  },
  {
    name: 'Fatima S.',
    age: 17,
    quote: "The workshops in my school helped me understand that mental health is just as important as physical health.",
    program: 'Educational Workshops'
  },
]

export default function MentalHealthProgram() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mental Health Support
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Breaking the silence, building resilience, and fostering mental wellness among African youth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Support Now
              </Link>
              <Link
                href="tel:+233123456789"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Crisis Hotline
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentalHealthStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mental Health Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive mental health support services tailored specifically 
              for African youth, addressing cultural contexts and community needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Stories of Hope
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from young people who found support and healing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">
                  <Heart className="w-8 h-8 text-pink-500 mb-3" />
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}, Age {testimonial.age}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.program}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="py-12 bg-red-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="mb-6">Our crisis support team is available 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233123456789"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +233 123 456 789
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Online Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mental Health Matters
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join us in creating a society where mental health is prioritized and 
              no young person suffers in silence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Become a Mental Health Champion
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}