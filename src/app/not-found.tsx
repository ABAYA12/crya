'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* CRYA Logo */}
          <div className="mb-8">
            <Image
              src="/cryalogo.jpg"
              alt="CRYA Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-lg"
            />
          </div>

          {/* 404 Text */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-primary-600 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track with CRYA's mission to empower African youth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Our Programs
              </Link>
              <Link
                href="/events"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}