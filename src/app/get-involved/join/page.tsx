'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Network, 
  Users,
  Globe,
  MessageCircle,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  Target,
  TrendingUp,
  Heart,
  Star,
  UserPlus,
  Briefcase,
  GraduationCap,
  Building
} from 'lucide-react'

const networkStats = [
  { number: '25,000+', label: 'Network Members', icon: Users },
  { number: '35', label: 'Countries Represented', icon: Globe },
  { number: '500+', label: 'Local Chapters', icon: MapPin },
  { number: '1,200+', label: 'Events Organized', icon: Calendar }
]

const membershipTiers = [
  {
    name: 'Student Member',
    price: 'Free',
    target: 'Students & Young Professionals (18-25)',
    duration: '1 Year (Renewable)',
    benefits: [
      'Access to all network events',
      'Monthly newsletters and updates',
      'Peer mentorship matching',
      'Skills development workshops',
      'Regional chapter participation',
      'Digital resource library access'
    ],
    features: [
      'Basic profile in member directory',
      'Participation in online forums',
      'Access to job board',
      'Networking event invitations'
    ],
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Professional Member',
    price: '$50/year',
    target: 'Working Professionals (25-35)',
    duration: '1 Year (Auto-renewable)',
    benefits: [
      'All Student Member benefits',
      'Priority event registration',
      'Advanced networking features',
      'Leadership development programs',
      'Mentorship opportunities (as mentor)',
      'Exclusive professional workshops',
      'Certificate programs access'
    ],
    features: [
      'Enhanced profile with achievements',
      'Direct messaging capabilities',
      'Priority job posting responses',
      'Speaking opportunity referrals'
    ],
    icon: Briefcase,
    color: 'from-primary-500 to-secondary-500',
    popular: true
  },
  {
    name: 'Leader Member',
    price: '$150/year',
    target: 'Established Leaders (30+)',
    duration: '1 Year (Premium Support)',
    benefits: [
      'All Professional Member benefits',
      'Executive mentorship program',
      'Board appointment considerations',
      'Strategic planning participation',
      'Continental conference speaking slots',
      'Policy advocacy involvement',
      'Custom program development input'
    ],
    features: [
      'Premium profile with thought leadership',
      'Access to exclusive leader forums',
      'Priority partnership opportunities',
      'Continental network access'
    ],
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    popular: false
  }
]

const networkBenefits = [
  {
    title: 'Professional Development',
    description: 'Access exclusive workshops, training programs, and certification courses designed for African professionals',
    icon: TrendingUp,
    stats: '200+ courses available'
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with like-minded professionals across Africa through events, forums, and regional chapters',
    icon: Network,
    stats: '50+ events monthly'
  },
  {
    title: 'Mentorship Programs',
    description: 'Get paired with experienced mentors or mentor emerging leaders in your field of expertise',
    icon: Users,
    stats: '2,500+ active matches'
  },
  {
    title: 'Job & Opportunity Board',
    description: 'Exclusive access to job openings, consulting opportunities, and partnership proposals',
    icon: Briefcase,
    stats: '300+ new opportunities monthly'
  },
  {
    title: 'Resource Library',
    description: 'Comprehensive digital library of resources, research, and best practices for African development',
    icon: Lightbulb,
    stats: '5,000+ resources available'
  },
  {
    title: 'Policy Advocacy',
    description: 'Participate in shaping policies that affect African youth and contribute to policy discussions',
    icon: Target,
    stats: '15+ policy areas covered'
  }
]

const regionalChapters = [
  {
    region: 'West Africa',
    countries: 16,
    members: 8500,
    chapters: 85,
    lead: 'Kwame Asante',
    contact: 'westafrica@cryaNetwork.org'
  },
  {
    region: 'East Africa',
    countries: 12,
    members: 6200,
    chapters: 62,
    lead: 'Sarah Mwangi',
    contact: 'eastafrica@cryaNetwork.org'
  },
  {
    region: 'Southern Africa',
    countries: 10,
    members: 5800,
    chapters: 58,
    lead: 'Thandiwe Moyo',
    contact: 'southernafrica@cryaNetwork.org'
  },
  {
    region: 'North Africa',
    countries: 8,
    members: 3200,
    chapters: 32,
    lead: 'Ahmed Hassan',
    contact: 'northafrica@cryaNetwork.org'
  },
  {
    region: 'Central Africa',
    countries: 9,
    members: 1300,
    chapters: 28,
    lead: 'Marie Ngozi',
    contact: 'centralafrica@cryaNetwork.org'
  }
]

const memberTestimonials = [
  {
    name: 'Grace Okafor',
    position: 'Software Engineer',
    location: 'Lagos, Nigeria',
    membership: 'Professional Member since 2022',
    quote: 'CRYA Network opened doors I never knew existed. Through the mentorship program, I connected with senior engineers who helped me advance my career and start my own tech consultancy.',
    achievement: 'Founded tech startup with 15 employees'
  },
  {
    name: 'David Musoke',
    position: 'Policy Analyst',
    location: 'Kampala, Uganda', 
    membership: 'Leader Member since 2021',
    quote: 'Being part of the policy advocacy group has allowed me to contribute to real change in East African youth policies. The network provides the platform and amplification needed for impact.',
    achievement: 'Contributed to 3 national youth policy reforms'
  },
  {
    name: 'Fatima El-Mansouri',
    position: 'Social Entrepreneur',
    location: 'Casablanca, Morocco',
    membership: 'Professional Member since 2023',
    quote: 'The resource library and networking events provided the knowledge and connections I needed to scale my social enterprise across North Africa. The support has been phenomenal.',
    achievement: 'Scaled social enterprise to 5 countries'
  }
]

export default function JoinNetworkPage() {
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
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Network
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Connect with 25,000+ young African leaders, professionals, and change-makers. 
              Build your career, expand your network, and drive positive change across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#membership-options"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Memberships
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

      {/* Network Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {networkStats.map((stat, index) => (
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

      {/* Network Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Join CRYA Network?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access exclusive opportunities, resources, and connections that will accelerate your personal and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkBenefits.map((benefit, index) => (
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
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-2 rounded-full text-sm font-medium inline-block">
                  {benefit.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section id="membership-options" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Membership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible membership options designed for different career stages and engagement levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden ${
                  tier.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${tier.color} ${tier.popular ? 'pt-12' : ''}`}>
                  <div className="flex items-center gap-4 text-white mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <tier.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-xl font-semibold">{tier.price}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-2">{tier.target}</p>
                  <p className="text-white/75 text-xs">{tier.duration}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Membership Benefits
                    </h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Platform Features
                    </h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}>
                    Select {tier.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Chapters */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Regional Chapters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with members in your region through local chapters and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {regionalChapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {chapter.region}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center justify-between">
                    <span>Countries:</span>
                    <span className="font-medium">{chapter.countries}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Members:</span>
                    <span className="font-medium">{chapter.members.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Chapters:</span>
                    <span className="font-medium">{chapter.chapters}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Regional Lead</p>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">{chapter.lead}</p>
                  <a 
                    href={`mailto:${chapter.contact}`}
                    className="text-primary-600 dark:text-primary-400 text-sm hover:underline"
                  >
                    {chapter.contact}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Member Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from members who have transformed their careers and communities through the CRYA Network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {memberTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>

                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{testimonial.location}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{testimonial.membership}</span>
                  </div>
                  <div className="mt-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs">
                    ✓ {testimonial.achievement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Complete your membership application and join thousands of young African leaders
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
                      placeholder="your.email@example.com"
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
                      placeholder="+233 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Country *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Select your country</option>
                      <option>Ghana</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>Egypt</option>
                      <option>Morocco</option>
                      <option>Other African Country</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Profession/Field *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g. Software Engineer, Doctor, Teacher"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Membership Tier *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Student Member (Free)</option>
                      <option>Professional Member ($50/year)</option>
                      <option>Leader Member ($150/year)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Leadership Development', 'Entrepreneurship', 'Technology', 'Healthcare', 'Education', 'Policy & Governance', 'Climate Change', 'Mental Health', 'Innovation'].map((area) => (
                        <label key={area} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Why do you want to join CRYA Network? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your goals and what you hope to achieve..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How did you hear about CRYA Network?
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Social Media</option>
                      <option>CRYA Event</option>
                      <option>Friend/Colleague Referral</option>
                      <option>University/Institution</option>
                      <option>Google Search</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                      I agree to CRYA Network's terms of membership and code of conduct *
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-300">
                      I would like to receive newsletters and updates about network activities
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll review your application and send you membership details within 24-48 hours
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
              Be Part of Something Bigger
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join a network that's shaping the future of Africa through young leadership and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:network@crya.org"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                network@crya.org
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Contact Network Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}