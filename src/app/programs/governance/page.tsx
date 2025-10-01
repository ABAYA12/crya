'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Vote, 
  BookOpen, 
  Megaphone,
  ArrowRight,
  Target,
  Award,
  Calendar,
  MapPin,
  CheckCircle
} from 'lucide-react'

const governanceStats = [
  { label: 'Youth Leaders Trained', value: '2,800+', icon: Users },
  { label: 'Policy Dialogues', value: '85+', icon: Vote },
  { label: 'Civic Education Sessions', value: '320+', icon: BookOpen },
  { label: 'Advocacy Campaigns', value: '45+', icon: Megaphone },
]

const programs = [
  {
    title: 'Civic Education & Awareness',
    description: 'Comprehensive programs to educate young people about their rights, responsibilities, and the democratic process.',
    icon: BookOpen,
    features: ['Constitutional literacy', 'Voting rights education', 'Government structures', 'Citizen responsibilities']
  },
  {
    title: 'Youth Leadership Development',
    description: 'Building the next generation of African leaders through intensive training and mentorship programs.',
    icon: Users,
    features: ['Leadership workshops', 'Mentorship programs', 'Public speaking training', 'Project management skills']
  },
  {
    title: 'Policy Advocacy & Research',
    description: 'Empowering youth to participate in policy-making processes that affect their lives and communities.',
    icon: Megaphone,
    features: ['Policy research training', 'Advocacy strategies', 'Stakeholder engagement', 'Policy brief writing']
  },
  {
    title: 'Electoral Participation',
    description: 'Encouraging and facilitating meaningful participation of youth in electoral processes.',
    icon: Vote,
    features: ['Voter education', 'Election monitoring', 'Candidate forums', 'Electoral observation training']
  },
]

const upcomingInitiatives = [
  {
    title: 'Youth Parliament Simulation',
    date: 'December 10-12, 2025',
    location: 'Parliament House, Accra',
    description: 'Three-day intensive program where young people simulate parliamentary proceedings and debate national issues.',
    participants: '200 youth leaders'
  },
  {
    title: 'Community Governance Dialogues',
    date: 'January 15-20, 2026',
    location: 'Regional Capitals',
    description: 'Series of dialogues between youth, traditional leaders, and government officials on local governance.',
    participants: '500+ participants'
  },
  {
    title: 'Africa Youth Governance Summit',
    date: 'March 25-27, 2026',
    location: 'Accra International Conference Centre',
    description: 'Continental summit bringing together young leaders to discuss governance challenges and solutions.',
    participants: '1000+ delegates'
  },
]

const successStories = [
  {
    name: 'Sarah Osei',
    age: 24,
    achievement: 'Elected as District Assembly Member',
    quote: "CRYA's leadership training gave me the confidence and skills to run for office and serve my community.",
    location: 'Eastern Region'
  },
  {
    name: 'Mohammed Ali',
    age: 22,
    achievement: 'Youth Policy Advocate',
    quote: "Through the policy research program, I've been able to influence youth employment policies at the regional level.",
    location: 'Northern Region'
  },
  {
    name: 'Grace Mensah',
    age: 26,
    achievement: 'Community Development Leader',
    quote: "The civic education program helped me organize my community to address local development challenges.",
    location: 'Greater Accra'
  },
]

export default function GovernanceProgram() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Youth & Governance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Empowering young Africans to actively participate in democratic processes 
              and shape the future of their nations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/join"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Join the Movement
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Learn More
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
            {governanceStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
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
              Our Governance Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to build democratic leadership capacity 
              and civic engagement among African youth.
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
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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

      {/* Upcoming Initiatives */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us in our upcoming governance and leadership activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{initiative.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {initiative.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{initiative.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {initiative.description}
                </p>
                <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                  Expected: {initiative.participants}
                </div>
              </motion.div>
            ))}
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
              Young leaders making a difference in their communities
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
                  <Award className="w-8 h-8 text-yellow-500 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {story.name}, {story.age}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium text-sm mb-3">
                    {story.achievement}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed mb-3">
                    "{story.quote}"
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {story.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Shape Africa's Democratic Future
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of young Africans who are actively participating in governance 
              and building stronger, more inclusive democracies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/join"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Become a Youth Leader
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Attend Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}