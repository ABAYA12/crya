'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Award,
  Globe,
  Heart,
  LinkedinIcon,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Star
} from 'lucide-react'

const teamStats = [
  { number: '50+', label: 'Team Members', icon: Users },
  { number: '25+', label: 'Years Combined Experience', icon: Award },
  { number: '35', label: 'Countries Represented', icon: Globe },
  { number: '500K+', label: 'Lives Impacted Together', icon: Heart }
]

const leadership = [
  {
    name: 'Dr. Emmanuel Ofosu',
    role: 'Executive Director & Founder',
    bio: 'Dr. Ofosu is a visionary leader with over 15 years of experience in youth development and policy advocacy. He founded CRYA with the mission to empower young Africans to become agents of positive change.',
    education: 'PhD in Development Studies, University of Ghana',
    achievements: [
      'Named Young African Leader of the Year 2020',
      'Advisor to African Union Youth Division',
      'Author of 3 books on African youth development'
    ],
    image: '/images/team/emmanuel-ofosu.jpg',
    linkedin: 'https://linkedin.com/in/emmanuelofosu',
    email: 'emmanuel@crya.org',
    location: 'Accra, Ghana',
    yearsWithCRYA: '8 years'
  },
  {
    name: 'Sarah Mwangi',
    role: 'Director of Programs',
    bio: 'Sarah leads program development and implementation across Africa. Her expertise in mental health advocacy has shaped CRYA\'s approach to holistic youth development.',
    education: 'MSc Psychology, University of Nairobi',
    achievements: [
      'Led implementation in 20+ countries',
      'Developed mental health framework adopted by 5 countries',
      'TEDx speaker on African youth mental health'
    ],
    image: '/images/team/sarah-mwangi.jpg',
    linkedin: 'https://linkedin.com/in/sarahmwangi',
    email: 'sarah@crya.org',
    location: 'Nairobi, Kenya',
    yearsWithCRYA: '6 years'
  },
  {
    name: 'Dr. Kwame Asante',
    role: 'Director of Research & Policy',
    bio: 'Dr. Asante leads CRYA\'s research initiatives and policy advocacy efforts. His work has influenced youth policy frameworks across West Africa.',
    education: 'PhD in Public Policy, London School of Economics',
    achievements: [
      'Published 25+ research papers',
      'Policy advisor to 8 African governments',
      'Winner of African Research Excellence Award 2021'
    ],
    image: '/images/team/kwame-asante.jpg',
    linkedin: 'https://linkedin.com/in/kwameasante',
    email: 'kwame@crya.org',
    location: 'Lagos, Nigeria',
    yearsWithCRYA: '5 years'
  },
  {
    name: 'Grace Okafor',
    role: 'Director of Partnerships',
    bio: 'Grace builds strategic partnerships with organizations across the globe. She has secured over $5M in partnerships and funding for CRYA programs.',
    education: 'MBA International Business, INSEAD',
    achievements: [
      'Secured $5M+ in partnerships',
      'Built relationships with 200+ organizations',
      'Led expansion to 15 new countries'
    ],
    image: '/images/team/grace-okafor.jpg',
    linkedin: 'https://linkedin.com/in/graceokafor',
    email: 'grace@crya.org',
    location: 'Cape Town, South Africa',
    yearsWithCRYA: '4 years'
  }
]

const regionalLeads = [
  {
    name: 'Fatima El-Mansouri',
    role: 'Regional Lead - North Africa',
    region: 'North Africa',
    countries: 8,
    image: '/images/team/fatima-elmansouri.jpg',
    location: 'Casablanca, Morocco'
  },
  {
    name: 'David Musoke',
    role: 'Regional Lead - East Africa',
    region: 'East Africa',
    countries: 12,
    image: '/images/team/david-musoke.jpg',
    location: 'Kampala, Uganda'
  },
  {
    name: 'Thandiwe Moyo',
    role: 'Regional Lead - Southern Africa',
    region: 'Southern Africa',
    countries: 10,
    image: '/images/team/thandiwe-moyo.jpg',
    location: 'Harare, Zimbabwe'
  },
  {
    name: 'Marie Ngozi',
    role: 'Regional Lead - Central Africa',
    region: 'Central Africa',
    countries: 9,
    image: '/images/team/marie-ngozi.jpg',
    location: 'Kinshasa, DR Congo'
  }
]

const programTeam = [
  {
    name: 'Dr. Ama Serwaa',
    role: 'Mental Health Program Lead',
    specialization: 'Clinical Psychology & Community Mental Health',
    image: '/images/team/ama-serwaa.jpg',
    location: 'Ho, Ghana'
  },
  {
    name: 'James Nkomo',
    role: 'Anti-Drug Campaign Coordinator',
    specialization: 'Substance Abuse Prevention & Education',
    image: '/images/team/james-nkomo.jpg',
    location: 'Lusaka, Zambia'
  },
  {
    name: 'Aisha Hassan',
    role: 'Leadership Development Coordinator',
    specialization: 'Youth Leadership & Civic Engagement',
    image: '/images/team/aisha-hassan.jpg',
    location: 'Khartoum, Sudan'
  },
  {
    name: 'Samuel Osei',
    role: 'Digital Skills Program Manager',
    specialization: 'Technology Education & Digital Literacy',
    image: '/images/team/samuel-osei.jpg',
    location: 'Kumasi, Ghana'
  },
  {
    name: 'Nomsa Dlamini',
    role: 'Education Program Coordinator',
    specialization: 'Educational Policy & Scholarship Management',
    image: '/images/team/nomsa-dlamini.jpg',
    location: 'Pretoria, South Africa'
  },
  {
    name: 'Ahmed Touré',
    role: 'Community Outreach Manager',
    specialization: 'Community Development & Grassroots Mobilization',
    image: '/images/team/ahmed-toure.jpg',
    location: 'Bamako, Mali'
  }
]

const advisoryBoard = [
  {
    name: 'Prof. Wole Oguntokun',
    title: 'Professor Emeritus, University of Ibadan',
    role: 'Advisory Board Chair',
    expertise: 'African Development Studies'
  },
  {
    name: 'Dr. Aminata Traoré',
    title: 'Former Minister of Culture, Mali',
    role: 'Policy Advisor',
    expertise: 'Governance & Policy'
  },
  {
    name: 'John Mahama',
    title: 'Former President of Ghana',
    role: 'Strategic Advisor',
    expertise: 'Leadership & Governance'
  },
  {
    name: 'Dr. Ngozi Okonjo-Iweala',
    title: 'Director-General, WTO',
    role: 'Economic Development Advisor',
    expertise: 'Economic Development'
  }
]

export default function TeamPage() {
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
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Meet the passionate leaders, program coordinators, and regional champions 
              driving positive change for African youth across the continent.
            </p>
            <div className="text-center">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                50+ Team Members • 35 Countries • 25+ Years Combined Experience
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamStats.map((stat, index) => (
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

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced leaders guide CRYA's vision and strategy, bringing decades 
              of expertise in youth development, policy, and African affairs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                      {leader.role}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{leader.education}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {leader.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                              <Star className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-1" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {leader.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {leader.yearsWithCRYA}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <a 
                            href={leader.linkedin}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                          >
                            <LinkedinIcon className="w-5 h-5" />
                          </a>
                          <a 
                            href={`mailto:${leader.email}`}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Leaders */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Regional Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our regional leads coordinate programs and partnerships across Africa, 
              ensuring local relevance and cultural sensitivity in all our initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regionalLeads.map((lead, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden text-center"
              >
                <div className="h-48 bg-gradient-to-br from-secondary-400 to-primary-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {lead.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {lead.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {lead.countries} Countries • {lead.location}
                  </p>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
                    <p className="text-primary-700 dark:text-primary-300 font-medium text-sm">
                      {lead.region} Coverage
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Team */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Program Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our specialized program coordinators design and implement targeted interventions 
              across mental health, education, leadership, and community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {member.specialization}
                </p>
                <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {member.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Distinguished leaders and experts who provide strategic guidance and 
              oversight to ensure CRYA's continued impact and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-800 dark:to-gold-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {advisor.title}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
                        {advisor.role}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Expertise: {advisor.expertise}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision 
              of empowering African youth. Explore career opportunities with CRYA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Contact HR Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}