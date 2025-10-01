'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Heart,
  ArrowUp,
  Send
} from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

const programs = [
  { name: 'Anti-Drug Campaign', href: '/programs/anti-drug' },
  { name: 'Mental Health Support', href: '/programs/mental-health' },
  { name: 'Youth & Governance', href: '/programs/governance' },
  { name: 'Education for Change', href: '/programs/education' },
]

const getInvolved = [
  { name: 'Volunteer', href: '/get-involved/volunteer' },
  { name: 'Partnerships', href: '/get-involved/partnerships' },
  { name: 'Join Our Network', href: '/get-involved/join' },
  { name: 'Donate Now', href: '/donate' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-primary-100">
                Get the latest updates on our programs and impact stories
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <span className="text-xl font-bold">CRYA</span>
                  <p className="text-gray-400 text-sm">Rising Youths Africa</p>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering African youth through education, advocacy, and purposeful 
                engagement for governance, democracy, and continental development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-400">054 397 3578</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-400">info@crya.org</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                  <span className="text-gray-400">Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      href={program.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
              <ul className="space-y-3">
                {getInvolved.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      {item.name === 'Donate Now' && <Heart className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Concerned Rising Youths Africa (CRYA). All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}