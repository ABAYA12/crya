'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  Globe,
  Calendar,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'

const contactInfo = [
  {
    title: 'General Inquiries',
    icon: Mail,
    details: [
      { label: 'Email', value: 'info@crya.org' },
      { label: 'Phone', value: '+233 (0) 302 123 456' },
      { label: 'Response Time', value: 'Within 24 hours' }
    ]
  },
  {
    title: 'Program Inquiries',
    icon: Users,
    details: [
      { label: 'Email', value: 'programs@crya.org' },
      { label: 'Phone', value: '+233 (0) 302 123 457' },
      { label: 'Response Time', value: 'Within 48 hours' }
    ]
  },
  {
    title: 'Partnership & Donations',
    icon: Building,
    details: [
      { label: 'Email', value: 'partnerships@crya.org' },
      { label: 'Phone', value: '+233 (0) 302 123 458' },
      { label: 'Response Time', value: 'Within 24 hours' }
    ]
  },
  {
    title: 'Media & Press',
    icon: Globe,
    details: [
      { label: 'Email', value: 'media@crya.org' },
      { label: 'Phone', value: '+233 (0) 302 123 459' },
      { label: 'Response Time', value: 'Same day during business hours' }
    ]
  }
]

const offices = [
  {
    city: 'Accra',
    country: 'Ghana',
    type: 'Headquarters',
    address: '123 Liberation Road, East Legon, Accra, Ghana',
    phone: '+233 (0) 302 123 456',
    email: 'accra@crya.org',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM GMT',
    coordinates: { lat: 5.6037, lng: -0.1870 },
    featured: true
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    type: 'Regional Office',
    address: '45 Victoria Island, Lagos, Nigeria',
    phone: '+234 (0) 1 234 5678',
    email: 'lagos@crya.org',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM WAT',
    coordinates: { lat: 6.4281, lng: 3.4219 }
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    type: 'Regional Office',
    address: '78 Westlands Avenue, Nairobi, Kenya',
    phone: '+254 (0) 20 123 456',
    email: 'nairobi@crya.org',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM EAT',
    coordinates: { lat: -1.2921, lng: 36.8219 }
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    type: 'Regional Office',
    address: '12 Long Street, Cape Town, South Africa',
    phone: '+27 (0) 21 123 4567',
    email: 'capetown@crya.org',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM SAST',
    coordinates: { lat: -33.9249, lng: 18.4241 }
  }
]

const socialMedia = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/cryafrica', followers: '125K' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/cryafrica', followers: '89K' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/cryafrica', followers: '156K' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/crya', followers: '45K' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/cryafrica', followers: '67K' }
]

const faqItems = [
  {
    question: 'How can I get involved with CRYA programs?',
    answer: 'There are several ways to get involved: volunteer with our programs, join our network, partner with us, or make a donation. Visit our "Get Involved" section to explore all options and find what suits your interests and availability.'
  },
  {
    question: 'What countries does CRYA operate in?',
    answer: 'CRYA operates across 35+ African countries with regional offices in Ghana, Nigeria, Kenya, and South Africa. We have local chapters and programs in West, East, Southern, North, and Central Africa.'
  },
  {
    question: 'How do I apply for CRYA programs or scholarships?',
    answer: 'Applications for our programs are typically announced on our website and social media channels. You can also contact our program team at programs@crya.org for specific program information and application processes.'
  },
  {
    question: 'Can organizations partner with CRYA?',
    answer: 'Yes! We welcome partnerships with corporations, NGOs, government agencies, and academic institutions. Contact our partnerships team at partnerships@crya.org to discuss collaboration opportunities.'
  },
  {
    question: 'How can I receive updates about CRYA activities?',
    answer: 'You can subscribe to our newsletter, follow us on social media, or join our network. We regularly share updates about our programs, events, and impact stories.'
  }
]

export default function ContactPage() {
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
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Get in touch with our team. We're here to answer your questions, 
              discuss partnerships, and explore how we can work together for African youth empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </a>
              <a
                href="tel:+233302123456"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="text-gray-500 dark:text-gray-400">{detail.label}:</span>
                      <p className={`font-medium ${
                        detail.label === 'Email' 
                          ? 'text-primary-600 dark:text-primary-400 hover:underline cursor-pointer' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {detail.label === 'Email' ? (
                          <a href={`mailto:${detail.value}`}>{detail.value}</a>
                        ) : detail.label === 'Phone' ? (
                          <a href={`tel:${detail.value.replace(/\s/g, '')}`} className="hover:underline">
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+233 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Program Information</option>
                    <option>Volunteer Opportunity</option>
                    <option>Partnership Proposal</option>
                    <option>Donation Information</option>
                    <option>Media Inquiry</option>
                    <option>Join Network</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-300">
                    I would like to receive updates and newsletters from CRYA
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We typically respond within 24-48 hours during business days
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you and exploring how we can work together.
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM (GMT)</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM (GMT)</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    *Emergency contacts available 24/7 for urgent program matters
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a 
                    href="/get-involved/volunteer" 
                    className="flex items-center gap-3 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <Users className="w-5 h-5" />
                    Apply to Volunteer
                  </a>
                  <a 
                    href="/get-involved/join" 
                    className="flex items-center gap-3 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <Users className="w-5 h-5" />
                    Join Our Network
                  </a>
                  <a 
                    href="/get-involved/partnerships" 
                    className="flex items-center gap-3 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <Building className="w-5 h-5" />
                    Partner With Us
                  </a>
                  <a 
                    href="/get-involved/donations" 
                    className="flex items-center gap-3 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Make a Donation
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
                <div className="mt-3 flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {socialMedia.map((social, index) => (
                    <span key={index}>{social.followers}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at any of our regional offices across Africa or connect with local chapter coordinators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 relative ${
                  office.featured ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {office.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Headquarters
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {office.city}, {office.country}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {office.type}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">Address:</span>
                    <p className="text-gray-900 dark:text-white">{office.address}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">Phone:</span>
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">Email:</span>
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">Hours:</span>
                    <p className="text-gray-900 dark:text-white">{office.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                  Get Directions
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about CRYA programs and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Ask a Question
              <ArrowRight className="w-5 h-5" />
            </a>
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
              Ready to Connect?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether you're interested in our programs, want to volunteer, or explore partnerships, 
              we're excited to hear from you and discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@crya.org"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="tel:+233302123456"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}