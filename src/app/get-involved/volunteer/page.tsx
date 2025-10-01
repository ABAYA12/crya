'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Users,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Lightbulb,
  HandHeart,
  BookOpen,
  Megaphone,
  Camera,
  Code,
  Stethoscope,
  GraduationCap,
  Building
} from 'lucide-react'

const volunteerStats = [
  { number: '2,500+', label: 'Active Volunteers', icon: Users },
  { number: '50+', label: 'Countries Represented', icon: Globe },
  { number: '100,000+', label: 'Lives Impacted', icon: Heart },
  { number: '15', label: 'Program Areas', icon: Award }
]

const volunteerOpportunities = [
  {
    id: 1,
    title: 'Mental Health Peer Counselor',
    category: 'Mental Health',
    type: 'Ongoing',
    commitment: '4-6 hours/week',
    location: 'Multiple locations across Ghana',
    description: 'Provide peer support and counseling to young people facing mental health challenges. Training provided.',
    requirements: [
      'Age 18-30',
      'Good communication skills',
      'Empathy and patience',
      'Commitment to training program'
    ],
    benefits: [
      'Professional training certification',
      'Mental health first aid skills',
      'Personal development',
      'Community impact'
    ],
    icon: Stethoscope,
    featured: true,
    urgentNeed: true
  },
  {
    id: 2,
    title: 'Anti-Drug Campaign Educator',
    category: 'Education',
    type: 'Project-based',
    commitment: '2-3 days/month',
    location: 'Schools across Ghana',
    description: 'Visit schools to educate students about drug prevention and healthy lifestyle choices.',
    requirements: [
      'Public speaking skills',
      'Passion for youth development',
      'Available during school hours',
      'Clean background check'
    ],
    benefits: [
      'Public speaking development',
      'Educational materials provided',
      'Transportation covered',
      'Impact tracking reports'
    ],
    icon: GraduationCap
  },
  {
    id: 3,
    title: 'Digital Skills Trainer',
    category: 'Technology',
    type: 'Workshop-based',
    commitment: '1-2 weekends/month',
    location: 'Tech hubs and community centers',
    description: 'Teach coding, digital marketing, and computer skills to underserved youth.',
    requirements: [
      'Proficiency in programming or digital marketing',
      'Teaching experience preferred',
      'Own laptop/equipment',
      'Patience with beginners'
    ],
    benefits: [
      'Teaching skill development',
      'Professional networking',
      'Equipment provided if needed',
      'Certificate of appreciation'
    ],
    icon: Code
  },
  {
    id: 4,
    title: 'Event Documentation Specialist',
    category: 'Media',
    type: 'Event-based',
    commitment: 'Variable',
    location: 'Event locations nationwide',
    description: 'Document CRYA events through photography, videography, and social media coverage.',
    requirements: [
      'Photography/videography skills',
      'Own camera equipment',
      'Social media proficiency',
      'Flexible schedule'
    ],
    benefits: [
      'Portfolio building opportunities',
      'Professional networking',
      'Behind-scenes access',
      'Media skills development'
    ],
    icon: Camera
  },
  {
    id: 5,
    title: 'Community Health Advocate',
    category: 'Health',
    type: 'Campaign-based',
    commitment: '1-2 days/month',
    location: 'Rural and urban communities',
    description: 'Promote health awareness and support community health screening events.',
    requirements: [
      'Interest in public health',
      'Community engagement skills',
      'Physical fitness for outreach',
      'Basic health knowledge'
    ],
    benefits: [
      'Health education training',
      'Community leadership skills',
      'Health screening access',
      'Networking opportunities'
    ],
    icon: HandHeart
  },
  {
    id: 6,
    title: 'Leadership Program Mentor',
    category: 'Leadership',
    type: 'Ongoing',
    commitment: '3-4 hours/week',
    location: 'Various leadership centers',
    description: 'Mentor young leaders in personal development, goal setting, and leadership skills.',
    requirements: [
      'Leadership experience',
      'Mentoring skills',
      '2+ years professional experience',
      'Commitment to mentee growth'
    ],
    benefits: [
      'Leadership development training',
      'Personal satisfaction',
      'Professional development',
      'Alumni network access'
    ],
    icon: Award
  }
]

const volunteerBenefits = [
  {
    title: 'Professional Development',
    description: 'Gain valuable skills through comprehensive training programs and hands-on experience',
    icon: Lightbulb
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with like-minded individuals and professional leaders across Africa',
    icon: Users
  },
  {
    title: 'Meaningful Impact',
    description: 'Make a real difference in the lives of young Africans and communities',
    icon: Heart
  },
  {
    title: 'Recognition & Certification',
    description: 'Receive certificates and recognition for your volunteer contributions',
    icon: Award
  },
  {
    title: 'Cultural Exchange',
    description: 'Experience diverse cultures and perspectives across the continent',
    icon: Globe
  },
  {
    title: 'Flexible Commitment',
    description: 'Choose volunteer opportunities that fit your schedule and interests',
    icon: Calendar
  }
]

export default function VolunteerPage() {
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
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Join thousands of passionate volunteers making a difference in young African lives. 
              Your skills, time, and heart can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#volunteer-opportunities"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Find Opportunities
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#application-form"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Volunteer Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {volunteerStats.map((stat, index) => (
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

      {/* Why Volunteer Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Volunteer with CRYA?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a community of change-makers and gain valuable experience while creating positive impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer-opportunities" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Current Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the perfect volunteer role that matches your skills, interests, and availability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  opportunity.featured ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <opportunity.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {opportunity.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs font-medium">
                            {opportunity.category}
                          </span>
                          {opportunity.urgentNeed && (
                            <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded text-xs font-medium">
                              Urgent Need
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {opportunity.featured && (
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Type</p>
                        <p className="font-medium">{opportunity.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 text-primary-600" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Commitment</p>
                        <p className="font-medium">{opportunity.commitment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                        <p className="font-medium">{opportunity.location.length > 20 ? 
                          opportunity.location.substring(0, 20) + '...' : 
                          opportunity.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {opportunity.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Award className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                    Apply for This Role
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see a role that fits? We're always looking for passionate volunteers!
            </p>
            <Link
              href="#application-form"
              className="inline-flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Submit General Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start Volunteering?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll match you with the perfect opportunity
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location/City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your city/location"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Mental Health', 'Education', 'Technology', 'Media', 'Health', 'Leadership', 'Community Development', 'Event Management', 'Research'].map((area) => (
                        <label key={area} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Availability
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>1-2 hours per week</option>
                      <option>3-5 hours per week</option>
                      <option>6-10 hours per week</option>
                      <option>More than 10 hours per week</option>
                      <option>Project-based only</option>
                      <option>Event-based only</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Why do you want to volunteer with CRYA? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your motivation and what you hope to contribute..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Relevant Skills & Experience
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe any relevant skills, experience, or qualifications..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                    I agree to CRYA's volunteer terms and conditions and privacy policy *
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll review your application and get back to you within 5-7 business days
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
              Join Our Volunteer Community Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of a movement that's transforming lives and building stronger communities across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/partnerships"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Corporate Volunteering
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Have Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}