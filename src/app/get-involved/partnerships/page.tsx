'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Handshake, 
  Building2,
  Globe,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const partnershipStats = [
  { number: '200+', label: 'Corporate Partners', icon: Building2 },
  { number: '50+', label: 'Government Partners', icon: Globe },
  { number: '$2.5M+', label: 'Partnership Value', icon: DollarSign },
  { number: '15', label: 'Countries Represented', icon: MapPin }
]

const partnershipTypes = [
  {
    title: 'Corporate Social Responsibility',
    description: 'Partner with us to fulfill your CSR goals while creating meaningful impact in African communities',
    benefits: [
      'Measurable social impact reporting',
      'Employee volunteer opportunities',
      'Brand visibility in positive contexts',
      'Tax benefits and recognition'
    ],
    examples: [
      'Fund scholarship programs',
      'Sponsor leadership training',
      'Support mental health initiatives',
      'Provide technology resources'
    ],
    icon: Building2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Strategic Partnerships',
    description: 'Long-term collaborations that leverage mutual strengths for maximum impact and growth',
    benefits: [
      'Shared expertise and resources',
      'Joint program development',
      'Co-branded initiatives',
      'Expanded reach and influence'
    ],
    examples: [
      'Joint research projects',
      'Policy advocacy campaigns',
      'Skill development programs',
      'Continental conferences'
    ],
    icon: Handshake,
    color: 'from-primary-500 to-secondary-500'
  },
  {
    title: 'Government Collaboration',
    description: 'Work with government agencies to scale programs and influence policy for youth development',
    benefits: [
      'Policy influence and advocacy',
      'Large-scale program implementation',
      'Sustainable funding models',
      'Regulatory support'
    ],
    examples: [
      'National youth policies',
      'Education system reforms',
      'Mental health frameworks',
      'Anti-drug legislation'
    ],
    icon: Globe,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Academic Partnerships',
    description: 'Collaborate with universities and research institutions for evidence-based programs',
    benefits: [
      'Research and evaluation support',
      'Student internship programs',
      'Academic credibility',
      'Innovation and best practices'
    ],
    examples: [
      'Impact assessment studies',
      'Student exchange programs',
      'Research publications',
      'Curriculum development'
    ],
    icon: Award,
    color: 'from-purple-500 to-pink-500'
  }
]

const currentPartners = [
  {
    name: 'African Union Youth Division',
    type: 'Government',
    partnership: 'Strategic policy and continental programs',
    since: '2022',
    logo: '/images/partners/african-union.png'
  },
  {
    name: 'Ghana Ministry of Youth & Sports',
    type: 'Government',
    partnership: 'National youth development programs',
    since: '2021',
    logo: '/images/partners/ghana-ministry.png'
  },
  {
    name: 'University of Ghana',
    type: 'Academic',
    partnership: 'Research and student programs',
    since: '2023',
    logo: '/images/partners/university-ghana.png'
  },
  {
    name: 'MTN Foundation',
    type: 'Corporate',
    partnership: 'Digital skills and connectivity',
    since: '2022',
    logo: '/images/partners/mtn-foundation.png'
  },
  {
    name: 'World Health Organization',
    type: 'International',
    partnership: 'Mental health initiatives',
    since: '2023',
    logo: '/images/partners/who.png'
  },
  {
    name: 'USAID Ghana',
    type: 'Development',
    partnership: 'Youth empowerment programs',
    since: '2021',
    logo: '/images/partners/usaid.png'
  }
]

const partnershipTiers = [
  {
    name: 'Impact Partner',
    investment: '$50K - $100K',
    duration: '1-2 years',
    benefits: [
      'Program co-branding opportunities',
      'Quarterly impact reports',
      'Employee volunteer programs',
      'Annual recognition events'
    ],
    commitment: 'Single program focus',
    color: 'border-blue-200 dark:border-blue-800'
  },
  {
    name: 'Strategic Partner',
    investment: '$100K - $500K',
    duration: '2-3 years',
    benefits: [
      'Multi-program collaboration',
      'Board representation opportunity',
      'Joint thought leadership',
      'Custom program development',
      'All Impact Partner benefits'
    ],
    commitment: 'Multi-program engagement',
    color: 'border-primary-200 dark:border-primary-800',
    featured: true
  },
  {
    name: 'Transformational Partner',
    investment: '$500K+',
    duration: '3+ years',
    benefits: [
      'Co-create flagship programs',
      'Strategic advisory role',
      'Continental expansion support',
      'Policy advocacy partnership',
      'All previous tier benefits'
    ],
    commitment: 'Comprehensive collaboration',
    color: 'border-gold-200 dark:border-gold-800'
  }
]

export default function PartnershipsPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Join leading organizations in creating sustainable impact for African youth. 
              Together, we can build stronger communities and brighter futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#partnership-opportunities"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Partnerships
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {partnershipStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-opportunities" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best aligns with your organization's goals and values
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${type.color}`}>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{type.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Partnership Benefits
                      </h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Collaboration Examples
                      </h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                      Learn More About This Partnership
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Partnership Investment Levels
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible partnership tiers designed to match your organization's capacity and impact goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg border-2 ${tier.color} ${
                  tier.featured ? 'transform scale-105' : ''
                } relative overflow-hidden`}
              >
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className={`p-6 ${tier.featured ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                    {tier.investment}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    {tier.duration} • {tier.commitment}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.featured
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}>
                    Discuss This Level
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join distinguished organizations already making a difference with CRYA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs font-medium">
                    {partner.type}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    Since {partner.since}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {partner.partnership}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Let's discuss how we can create meaningful impact together
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Organization Type *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Corporate</option>
                      <option>Government Agency</option>
                      <option>NGO/Non-profit</option>
                      <option>Academic Institution</option>
                      <option>International Organization</option>
                      <option>Foundation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your position in the organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Partnership Interest *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['CSR Partnership', 'Strategic Alliance', 'Government Collaboration', 'Academic Partnership', 'Funding Support', 'Volunteer Programs', 'Event Sponsorship', 'Other'].map((interest) => (
                        <label key={interest} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Partnership Goals & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe what you hope to achieve through this partnership..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Estimated Partnership Budget Range
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Under $10,000</option>
                      <option>$10,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $500,000</option>
                      <option>$500,000+</option>
                      <option>Non-monetary partnership</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    Submit Partnership Inquiry
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll respond to your inquiry within 48 hours
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Impact Together
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Partner with CRYA and join a movement that's transforming the future of Africa through youth empowerment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@crya.org"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                partnerships@crya.org
              </a>
              <a
                href="tel:+233123456789"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                +233 (0) 123 456 789
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}