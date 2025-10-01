'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  ArrowRight,
  Tag,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Africa Youth Summit 2026',
    date: 'March 25-27, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Accra International Conference Centre, Ghana',
    description: 'Continental summit bringing together 1000+ young leaders to discuss governance, innovation, and sustainable development.',
    category: 'Summit',
    attendees: '1000+ expected',
    price: 'Free',
    image: '/images/youth-summit.jpg',
    highlights: ['Keynote speakers', 'Panel discussions', 'Networking sessions', 'Cultural performances'],
    featured: true
  },
  {
    id: 2,
    title: 'Mental Health Awareness Week',
    date: 'November 15-22, 2025',
    time: 'Various Times',
    location: 'Multiple Locations across Ghana',
    description: 'Week-long series of events focused on mental health awareness, stigma reduction, and support services.',
    category: 'Campaign',
    attendees: '5000+ expected',
    price: 'Free',
    image: '/images/mental-health-week.jpg',
    highlights: ['Workshops', 'Support groups', 'Community outreach', 'Resource distribution']
  },
  {
    id: 3,
    title: 'Anti-Drug Campaign Launch',
    date: 'December 10, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'University of Ghana, Legon',
    description: 'Official launch of our expanded anti-drug campaign with interactive exhibitions and educational sessions.',
    category: 'Campaign',
    attendees: '800+ expected',
    price: 'Free',
    image: '/images/anti-drug-launch.jpg',
    highlights: ['Interactive exhibitions', 'Student testimonials', 'Expert talks', 'Resource booths']
  },
  {
    id: 4,
    title: 'Leadership Bootcamp',
    date: 'January 20-22, 2026',
    time: '8:00 AM - 7:00 PM',
    location: 'Elmina Beach Resort, Central Region',
    description: 'Intensive 3-day leadership development program for emerging youth leaders across Africa.',
    category: 'Training',
    attendees: '150 participants',
    price: '$50',
    image: '/images/leadership-bootcamp.jpg',
    highlights: ['Leadership workshops', 'Team building', 'Mentorship sessions', 'Action planning']
  },
  {
    id: 5,
    title: 'Digital Skills Workshop',
    date: 'February 5-7, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Kumasi Technical University',
    description: 'Three-day intensive workshop on digital literacy, coding basics, and online entrepreneurship.',
    category: 'Workshop',
    attendees: '200 participants',
    price: '$25',
    image: '/images/digital-workshop.jpg',
    highlights: ['Coding basics', 'Digital marketing', 'E-commerce', 'Networking']
  },
  {
    id: 6,
    title: 'Community Health Fair',
    date: 'February 28, 2026',
    time: '8:00 AM - 4:00 PM',
    location: 'Tamale Sports Stadium, Northern Region',
    description: 'Free community health screening, mental health awareness, and wellness education.',
    category: 'Health',
    attendees: '2000+ expected',
    price: 'Free',
    image: '/images/health-fair.jpg',
    highlights: ['Free health screening', 'Mental health booths', 'Wellness education', 'Youth activities']
  }
]

const pastEvents = [
  {
    title: 'CRYA Annual Conference 2024',
    date: 'October 15-17, 2024',
    location: 'National Theatre, Accra',
    attendees: '1200',
    description: 'Our biggest annual gathering featuring policy discussions, cultural celebrations, and networking.',
    image: '/images/conference-2024.jpg'
  },
  {
    title: 'Mental Health Champions Training',
    date: 'September 8-10, 2024',
    location: 'Ho Technical University',
    attendees: '180',
    description: 'Training program for peer counselors and mental health advocates.',
    image: '/images/champions-training.jpg'
  },
  {
    title: 'Drug-Free Schools Campaign',
    date: 'August 12-19, 2024',
    location: 'Secondary Schools, Greater Accra',
    attendees: '3500+',
    description: 'Week-long campaign reaching 25 secondary schools with anti-drug education.',
    image: '/images/schools-campaign.jpg'
  }
]

const eventCategories = [
  { name: 'All Events', count: upcomingEvents.length, active: true },
  { name: 'Summits', count: 1, active: false },
  { name: 'Campaigns', count: 2, active: false },
  { name: 'Training', count: 1, active: false },
  { name: 'Workshops', count: 1, active: false },
  { name: 'Health', count: 1, active: false }
]

export default function EventsPage() {
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
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Join us in creating positive change through engaging events, workshops, 
              and community activities across Africa
            </p>
            <Link
              href="#upcoming-events"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  category.active
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(event => event.featured).map(event => (
        <section key={event.id} className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Featured Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {event.title}
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm opacity-75">Event Image</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {event.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Users className="w-5 h-5 text-primary-600" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Event Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't miss out on these exciting opportunities to learn, grow, and connect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-xs opacity-75">Event Image</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs font-medium">
                      {event.category}
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {event.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description.length > 100 
                      ? `${event.description.substring(0, 100)}...` 
                      : event.description}
                  </p>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Past Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Highlights from our recent successful events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-xs opacity-75">Event Photo</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Next Event?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of the change. Connect with like-minded young Africans and 
              participate in activities that make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/volunteer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Become an Event Volunteer
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Host an Event
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}