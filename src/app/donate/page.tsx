'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Heart, 
  DollarSign,
  CreditCard,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function DonatePage() {
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
              <Image
                src="/cryalogo.jpg"
                alt="CRYA Logo"
                width={80}
                height={80}
                className="rounded-full border-4 border-white/20"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your donation directly funds programs that transform young lives 
              across Africa. Every contribution makes a difference.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Heart className="w-5 h-5 text-red-300" />
              <span className="font-semibold">100% of donations go directly to programs</span>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Quick Donation Section */}
      <section className="py-20" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Make a Donation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred donation method and amount. All transactions are secure and tax-deductible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-8">
                <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Donation</h3>
              </div>

              <div className="space-y-6">
                {/* Donation Amounts */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[25, 50, 100, 250].map((amount) => (
                      <button
                        key={amount}
                        className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                  />
                </div>

                {/* Donation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Donation Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-lg font-semibold text-primary-600 dark:text-primary-400">
                      One-time
                    </button>
                    <button className="p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-4 border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-lg font-semibold text-primary-600 dark:text-primary-400">
                      <CreditCard className="w-5 h-5" />
                      Credit/Debit Card
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      <Heart className="w-5 h-5" />
                      Mobile Money
                    </button>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your payment is processed securely through our encrypted payment gateway.
                  </p>
                </div>

                {/* Donate Button */}
                <Link
                  href="/get-involved/donations"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  Complete Donation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how your donations directly translate into real impact for African youth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: '$25',
                impact: 'Provides educational materials for 5 students',
                icon: '📚'
              },
              {
                amount: '$100',
                impact: 'Sponsors a student for mental health counseling sessions',
                icon: '💚'
              },
              {
                amount: '$500',
                impact: 'Funds a complete leadership workshop for 50 youth',
                icon: '👥'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                  {item.amount}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of supporters helping us create a brighter future for African youth.
            </p>
            <Link
              href="/get-involved/donations"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore All Donation Options
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}