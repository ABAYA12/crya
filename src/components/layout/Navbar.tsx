'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, ChevronDown, Sun, Moon, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about' },
      { name: 'Vision & Mission', href: '/about#mission' },
      { name: 'Team', href: '/about/team' },
      { name: 'Core Values', href: '/about#values' },
    ],
  },
  {
    name: 'Programs',
    href: '/programs',
    submenu: [
      { name: 'All Programs', href: '/programs' },
      { name: 'Anti-Drug Campaign', href: '/programs/anti-drug' },
      { name: 'Mental Health', href: '/programs/mental-health' },
      { name: 'Youth & Governance', href: '/programs/governance' },
      { name: 'Education for Change', href: '/programs/education' },
    ],
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Gallery',
    href: '/gallery',
    submenu: [
      { name: 'Photos', href: '/gallery/photos' },
      { name: 'Videos', href: '/gallery/videos' },
    ],
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Get Involved',
    href: '/get-involved',
    submenu: [
      { name: 'Volunteer', href: '/get-involved/volunteer' },
      { name: 'Partnerships', href: '/get-involved/partnerships' },
      { name: 'Join Network', href: '/get-involved/join' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/cryalogo.jpg"
                alt="CRYA Logo"
                width={48}
                height={48}
                className="rounded-full border-2 border-primary-200 dark:border-primary-800"
              />
              <div className="absolute inset-0 bg-primary-400/20 rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CRYA
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300 -mt-1">
                Rising Youths Africa
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 mt-2"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            )}

            {/* Donate Button */}
            <Link
              href="/donate"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-gray-50 dark:bg-gray-800"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block px-8 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Donate Button */}
                <div className="px-4 pt-4">
                  <Link
                    href="/donate"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-full font-semibold w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    <span>Donate Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}