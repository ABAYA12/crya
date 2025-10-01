'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, ArrowRight, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const newsItems = [
  {
    id: 1,
    title: 'CRYA Launches Mental Health Initiative in 50 Senior High Schools',
    excerpt: 'Our comprehensive mental health program reaches thousands of students across Ghana, providing crucial support and resources for youth wellness.',
    image: '/images/news-mental-health.jpg',
    category: 'Program Launch',
    date: '2025-01-15',
    author: 'CRYA Communications Team',
    readTime: '3 min read',
    slug: 'mental-health-initiative-launch',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Youth Leadership Summit 2025: Registration Now Open',
    excerpt: 'Join 500+ young African leaders for three days of intensive training, networking, and collaborative problem-solving.',
    image: '/images/news-summit.jpg',
    category: 'Events',
    date: '2025-01-10',
    author: 'Events Team',
    readTime: '2 min read',
    slug: 'youth-leadership-summit-registration',
    isFeatured: false
  },
  {
    id: 3,
    title: 'Partnership with H&H: Expanding Anti-Drug Campaign',
    excerpt: 'Strategic partnership enables CRYA to reach more schools and communities with evidence-based drug prevention programs.',
    image: '/images/news-partnership.jpg',
    category: 'Partnerships',
    date: '2025-01-05',
    author: 'Partnership Team',
    readTime: '4 min read',
    slug: 'hh-partnership-anti-drug-expansion',
    isFeatured: false
  },
  {
    id: 4,
    title: 'Impact Report 2024: 15,000 Lives Transformed',
    excerpt: 'Our annual report showcases the incredible impact of CRYA programs across Ghana and the broader African continent.',
    image: '/images/news-impact-report.jpg',
    category: 'Reports',
    date: '2024-12-20',
    author: 'Research Team',
    readTime: '5 min read',
    slug: 'impact-report-2024',
    isFeatured: false
  }
]

export default function NewsUpdates() {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'program launch':
        return 'bg-green-100 text-green-700'
      case 'events':
        return 'bg-blue-100 text-blue-700'
      case 'partnerships':
        return 'bg-purple-100 text-purple-700'
      case 'reports':
        return 'bg-orange-100 text-orange-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const featuredNews = newsItems.find(item => item.isFeatured)
  const otherNews = newsItems.filter(item => !item.isFeatured)

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
              <span>Latest News</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Stay Updated with
              <span className="text-gradient block">Our Impact Stories</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our journey as we continue to empower African youth and create 
              meaningful change across communities. Every story matters in building our collective future.
            </p>
          </motion.div>

          {/* Featured News */}
          {featuredNews && (
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Story
                    </div>
                    
                    {/* Category */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredNews.category)}`}>
                        {featuredNews.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {featuredNews.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredNews.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/news/${featuredNews.slug}`}
                      className="group inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 w-fit"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other News */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">More Updates</h3>
              <Link
                href="/news"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center group"
              >
                <span>View All News</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherNews.map((news) => (
                <div key={news.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {news.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(news.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/news/${news.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Never Miss an Update
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest news, program updates, 
                and impact stories delivered directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}