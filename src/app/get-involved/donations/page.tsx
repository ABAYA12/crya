'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  DollarSign,
  CreditCard,
  Users,
  Target,
  Shield,
  CheckCircle,
  ArrowRight,
  Gift,
  Building,
  Globe,
  Calendar,
  Receipt,
  Award,
  Smartphone,
  Lock,
  TrendingUp
} from 'lucide-react'

const donationStats = [
  { number: '$2.5M+', label: 'Total Donations Raised', icon: DollarSign },
  { number: '15,000+', label: 'Individual Donors', icon: Users },
  { number: '100+', label: 'Corporate Partners', icon: Building },
  { number: '500K+', label: 'Lives Impacted', icon: Heart }
]

const donationImpact = [
  {
    amount: '$25',
    impact: 'Provides anti-drug education materials for 5 students',
    icon: '📚',
    category: 'Education'
  },
  {
    amount: '$50',
    impact: 'Sponsors one student for digital skills workshop',
    icon: '💻',
    category: 'Skills Development'
  },
  {
    amount: '$100',
    impact: 'Funds mental health counseling sessions for 10 youth',
    icon: '🧠',
    category: 'Mental Health'
  },
  {
    amount: '$250',
    impact: 'Supports leadership training for emerging young leaders',
    icon: '🏆',
    category: 'Leadership'
  },
  {
    amount: '$500',
    impact: 'Provides scholarship support for one deserving student',
    icon: '🎓',
    category: 'Education'
  },
  {
    amount: '$1,000',
    impact: 'Establishes a community health screening program',
    icon: '🏥',
    category: 'Health'
  }
]

const donationOptions = [
  {
    type: 'One-Time Donation',
    description: 'Make a single contribution to support our programs',
    amounts: ['$25', '$50', '$100', '$250', '$500', '$1000'],
    benefits: [
      'Immediate impact on programs',
      'Tax-deductible receipt',
      'Thank you acknowledgment',
      'Impact report'
    ],
    icon: Gift,
    featured: false
  },
  {
    type: 'Monthly Giving',
    description: 'Join our community of sustained supporters',
    amounts: ['$10/mo', '$25/mo', '$50/mo', '$100/mo'],
    benefits: [
      'Sustained program support',
      'Quarterly impact updates',
      'Exclusive donor events',
      'Recognition in annual report',
      'Direct program coordinator contact'
    ],
    icon: Calendar,
    featured: true
  },
  {
    type: 'Corporate Partnership',
    description: 'Partner with us for large-scale impact',
    amounts: ['$5K+', '$10K+', '$25K+', 'Custom'],
    benefits: [
      'Co-branded program opportunities',
      'Employee volunteer programs',
      'CSR impact reporting',
      'Brand visibility',
      'Board representation options'
    ],
    icon: Building,
    featured: false
  }
]

const paymentMethods = [
  { name: 'Credit/Debit Card', icon: CreditCard, supported: true },
  { name: 'Mobile Money (MTN, Vodafone)', icon: Smartphone, supported: true },
  { name: 'Bank Transfer', icon: Building, supported: true },
  { name: 'PayPal', icon: Globe, supported: true },
  { name: 'Cryptocurrency', icon: DollarSign, supported: false }
]

const donorTestimonials = [
  {
    name: 'Sarah Johnson',
    type: 'Monthly Donor',
    amount: '$50/month since 2022',
    quote: 'Seeing the quarterly reports and knowing exactly how my monthly donation helps young Africans achieve their dreams makes every contribution meaningful.',
    location: 'London, UK'
  },
  {
    name: 'MTN Foundation',
    type: 'Corporate Partner',
    amount: '$100K partnership',
    quote: 'Our partnership with CRYA aligns perfectly with our mission to empower African youth through technology and education. The measurable impact is remarkable.',
    location: 'Johannesburg, SA'
  },
  {
    name: 'Dr. Emmanuel Osei',
    type: 'Major Donor',
    amount: '$10K one-time donation',
    quote: 'As a Ghanaian doctor working abroad, supporting CRYA\'s mental health programs helps me give back to my community in a meaningful way.',
    location: 'Toronto, Canada'
  }
]

const taxInformation = [
  {
    country: 'United States',
    status: '501(c)(3) Equivalent',
    deductible: 'Fully tax-deductible',
    ein: 'XX-XXXXXXX'
  },
  {
    country: 'United Kingdom',
    status: 'Registered Charity',
    deductible: 'Gift Aid eligible',
    ein: 'XXXX-XXXX'
  },
  {
    country: 'Canada',
    status: 'Registered Charity',
    deductible: 'Tax receipt provided',
    ein: 'XXXXXXXXX'
  },
  {
    country: 'Ghana',
    status: 'Registered NGO',
    deductible: 'Corporate tax benefits',
    ein: 'G-XXXXXXX'
  }
]

export default function DonationsPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedAmount, setSelectedAmount] = useState('$100')
  const [donationType, setDonationType] = useState('one-time')
  const [customAmount, setCustomAmount] = useState('')

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
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Donate & Make Impact
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your contribution transforms lives. Support African youth through education, 
              mental health programs, and leadership development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#donation-form"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#impact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Donation Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {donationStats.map((stat, index) => (
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

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Donation Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See exactly how your contribution creates real change in the lives of African youth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {item.amount}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.impact}
                </p>
                <button className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                  Donate {item.amount}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Giving Style
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the donation method that works best for you and your impact goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden ${
                  option.featured ? 'ring-2 ring-primary-500 transform scale-105' : ''
                } relative`}
              >
                {option.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    Most Impact
                  </div>
                )}

                <div className={`p-6 ${option.featured ? 'pt-12' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {option.type}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {option.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {option.amounts.map((amount, idx) => (
                      <button
                        key={idx}
                        className="border border-gray-300 dark:border-gray-600 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    option.featured
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}>
                    Choose {option.type}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Make Your Donation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Secure, fast, and transparent. Your contribution goes directly to program impact.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Donation Amount Selection */}
                <div className="md:w-1/2 p-8 bg-gray-50 dark:bg-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Select Donation Amount
                  </h3>

                  {/* Donation Type */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                          donationType === 'one-time'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500'
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        onClick={() => setDonationType('monthly')}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                          donationType === 'monthly'
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Preset Amounts */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {['$25', '$50', '$100', '$250', '$500', '$1000'].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount('')
                        }}
                        className={`py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                          selectedAmount === amount
                            ? 'bg-primary-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500 hover:border-primary-500'
                        }`}
                      >
                        {amount}
                        {donationType === 'monthly' && <span className="text-xs block">/mo</span>}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Or enter custom amount:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount('')
                        }}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                      Your Impact:
                    </h4>
                    <p className="text-sm text-primary-700 dark:text-primary-300">
                      {(customAmount || selectedAmount) === '$25' && 'Provides anti-drug education materials for 5 students'}
                      {(customAmount || selectedAmount) === '$50' && 'Sponsors one student for digital skills workshop'}
                      {(customAmount || selectedAmount) === '$100' && 'Funds mental health counseling sessions for 10 youth'}
                      {(customAmount || selectedAmount) === '$250' && 'Supports leadership training for emerging young leaders'}
                      {(customAmount || selectedAmount) === '$500' && 'Provides scholarship support for one deserving student'}
                      {(customAmount || selectedAmount) === '$1000' && 'Establishes a community health screening program'}
                      {!['$25', '$50', '$100', '$250', '$500', '$1000'].includes(customAmount || selectedAmount) && 
                       'Your contribution will directly support our youth empowerment programs'}
                    </p>
                  </div>
                </div>

                {/* Donation Form */}
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Donor Information
                  </h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Country *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <option>Select Country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Ghana</option>
                        <option>Nigeria</option>
                        <option>Kenya</option>
                        <option>South Africa</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="updates"
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor="updates" className="text-sm text-gray-600 dark:text-gray-300">
                          Send me updates about program impact
                        </label>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="anonymous"
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor="anonymous" className="text-sm text-gray-600 dark:text-gray-300">
                          Make this donation anonymous
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Shield className="w-5 h-5" />
                      Donate {customAmount || selectedAmount || '$0'} Securely
                    </button>

                    <div className="text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        🔒 Secure payment processing by Stripe. Your information is protected.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Secure Payment Options
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {paymentMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    method.supported 
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <method.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{method.name}</span>
                  {!method.supported && <span className="text-xs">(Coming Soon)</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Donors Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of supporters who are making a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donorTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.type}</p>
                  </div>
                </div>

                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{testimonial.location}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{testimonial.amount}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Tax Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your donations may be tax-deductible based on your country of residence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxInformation.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.country}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Status:</span>
                    <p className="font-medium text-gray-900 dark:text-white">{info.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Tax Benefit:</span>
                    <p className="font-medium text-green-600 dark:text-green-400">{info.deductible}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">ID:</span>
                    <p className="font-mono text-xs text-gray-600 dark:text-gray-400">{info.ein}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Every Donation Creates Lasting Impact
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our community of donors and be part of transforming lives across Africa. 
              Your contribution today shapes tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#donation-form"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Make Your First Donation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Discuss Major Giving
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}