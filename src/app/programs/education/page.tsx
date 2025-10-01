'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BookOpen, 
  GraduationCap, 
  Laptop, 
  Users,
  ArrowRight,
  Award,
  Target,
  Heart,
  CheckCircle,
  DollarSign,
  Globe,
  Lightbulb
} from 'lucide-react'

const educationStats = [
  { label: 'Scholarships Awarded', value: '1,200+', icon: GraduationCap },
  { label: 'Students Tutored', value: '4,500+', icon: BookOpen },
  { label: 'Digital Literacy Training', value: '2,800+', icon: Laptop },
  { label: 'Educational Resources Distributed', value: '15,000+', icon: Target },
]

const programs = [
  {
    title: 'Scholarship Programs',
    description: 'Providing financial support for academically gifted but economically disadvantaged students.',
    icon: GraduationCap,
    features: [
      'Full and partial scholarships',
      'Mentorship support',
      'Career guidance',
      'Leadership development'
    ],
    stats: '1,200+ recipients'
  },
  {
    title: 'Tutoring & Academic Support',
    description: 'Free tutoring services and academic support for students in underserved communities.',
    icon: BookOpen,
    features: [
      'Subject-specific tutoring',
      'Exam preparation',
      'Study groups',
      'Learning materials'
    ],
    stats: '4,500+ students supported'
  },
  {
    title: 'Digital Literacy Training',
    description: 'Bridging the digital divide through comprehensive computer and internet literacy programs.',
    icon: Laptop,
    features: [
      'Computer basics training',
      'Internet navigation',
      'Online learning platforms',
      'Digital citizenship'
    ],
    stats: '2,800+ trained'
  },
  {
    title: 'Educational Resources',
    description: 'Providing essential learning materials, books, and educational tools to schools and students.',
    icon: Target,
    features: [
      'Textbook distribution',
      'Learning supplies',
      'Library development',
      'Technology equipment'
    ],
    stats: '15,000+ resources distributed'
  },
]

const scholarshipTypes = [
  {
    title: 'Excellence Scholarships',
    description: 'Full scholarships for academically outstanding students',
    amount: 'Up to $5,000/year',
    icon: Award,
    color: 'text-yellow-500'
  },
  {
    title: 'Need-Based Scholarships',
    description: 'Support for students from low-income families',
    amount: 'Up to $3,000/year',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    title: 'STEM Scholarships',
    description: 'Special support for Science, Technology, Engineering & Math students',
    amount: 'Up to $4,000/year',
    icon: Lightbulb,
    color: 'text-blue-500'
  },
  {
    title: 'Vocational Training',
    description: 'Support for technical and vocational education',
    amount: 'Up to $2,500/year',
    icon: Users,
    color: 'text-green-500'
  },
]

const successStories = [
  {
    name: 'Kwame Asante',
    age: 22,
    achievement: 'Medical Student at University of Ghana',
    scholarship: 'Excellence Scholarship Recipient',
    quote: "The CRYA scholarship didn't just pay for my education; it believed in my potential when I couldn't afford to dream.",
    field: 'Medicine'
  },
  {
    name: 'Fatima Ibrahim',
    age: 19,
    achievement: 'Engineering Student at KNUST',
    scholarship: 'STEM Scholarship Recipient',
    quote: "Through CRYA's support, I'm now studying computer engineering and building apps to solve African problems.",
    field: 'Engineering'
  },
  {
    name: 'Mary Osei',
    age: 24,
    achievement: 'Certified Nurse & Community Health Advocate',
    scholarship: 'Vocational Training Graduate',
    quote: "The vocational training program gave me skills and now I'm serving my community while supporting my family.",
    field: 'Healthcare'
  },
]

const partnerships = [
  'Ghana Education Service',
  'Ministry of Education',
  'University of Ghana',
  'KNUST',
  'UCC',
  'Private Secondary Schools',
  'Community Libraries',
  'Tech Companies'
]

export default function EducationProgram() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Education for Change
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Unlocking potential through quality education and empowering African youth 
              to become changemakers in their communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/apply-scholarship"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Apply for Scholarship
              </Link>
              <Link
                href="/get-involved/volunteer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Volunteer as Tutor
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
            {educationStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Education Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive educational support designed to remove barriers and create 
              pathways to success for African youth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {program.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
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

      {/* Scholarship Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Scholarship Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Multiple scholarship categories to support different educational paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarshipTypes.map((scholarship, index) => {
              const Icon = scholarship.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 ${scholarship.color}`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {scholarship.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {scholarship.description}
                  </p>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {scholarship.amount}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/get-involved/apply-scholarship"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Apply for Scholarship
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Inspiring journeys of students who transformed their lives through education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {story.name}, {story.age}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-2">
                    {story.achievement}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                    {story.scholarship} • {story.field}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Educational Partners
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Working together to strengthen Africa's education ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow text-center"
              >
                <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Education Changes Everything
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join us in creating educational opportunities that transform lives and communities. 
              Every scholarship, every tutorial session, every book makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/apply-scholarship"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Apply for Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/get-involved/donate"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Support Education
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}