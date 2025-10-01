'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, MapPin, Users, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const upcomingEvents = [
  {
    id: 1,
    title: 'Youth Leadership Summit 2025',
    description: 'Annual gathering of young African leaders to discuss governance, democracy, and continental development.',
    date: '2025-03-15',
    time: '09:00 AM',
    location: 'Accra International Conference Centre',
    category: 'Leadership',
    image: '/images/event-summit.jpg',
    attendees: 500,
    isFeature: true,
    registrationLink: '/events/youth-summit-2025'
  },
  {
    id: 2,
    title: 'Mental Health Awareness Workshop',
    description: 'Interactive workshop addressing mental health challenges among youth in educational institutions.',
    date: '2025-02-20',
    time: '02:00 PM',
    location: 'University of Ghana, Legon',
    category: 'Health',
    image: '/images/event-mental-health.jpg',
    attendees: 200,
    isFeature: false,
    registrationLink: '/events/mental-health-workshop'
  },
  {
    id: 3,
    title: 'African Dream Dialogue Series',
    description: 'Monthly dialogue connecting African youth across the continent and diaspora.',
    date: '2025-02-10',
    time: '06:00 PM',
    location: 'Virtual Event (Zoom)',
    category: 'Dialogue',
    image: '/images/event-dialogue.jpg',
    attendees: 300,
    isFeature: false,
    registrationLink: '/events/african-dream-dialogue'
  }
]

export default function UpcomingEvent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const featuredEvent = upcomingEvents.find(event => event.isFeature)
  const otherEvents = upcomingEvents.filter(event => !event.isFeature)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return 'bg-blue-100 text-blue-700'
      case 'health':
        return 'bg-green-100 text-green-700'
      case 'dialogue':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              <span>Upcoming Events</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Join Us for
              <span className="text-gradient block">Transformative Events</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of meaningful conversations, workshops, and initiatives that are 
              shaping the future of African youth and continental development.
            </p>
          </motion.div>

          {/* Featured Event */}
          {featuredEvent && (
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Event
                    </div>
                    
                    {/* Category */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredEvent.category)}`}>
                        {featuredEvent.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredEvent.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredEvent.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Calendar className="w-5 h-5 text-primary-500" />
                        <span className="font-medium">{formatDate(featuredEvent.date)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="w-5 h-5 text-primary-500" />
                        <span>{featuredEvent.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-gray-700">
                        <MapPin className="w-5 h-5 text-primary-500" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Users className="w-5 h-5 text-primary-500" />
                        <span>{featuredEvent.attendees} Expected Attendees</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={featuredEvent.registrationLink}
                        className="group bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <span>Register Now</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      
                      <Link
                        href="/events"
                        className="group bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
                      >
                        <span>View All Events</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Events */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More Upcoming Events</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherEvents.map((event) => (
                <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {event.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Quick Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <Link
                      href={event.registrationLink}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}