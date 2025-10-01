'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Newspaper, 
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Search,
  Filter,
  Share2,
  BookmarkPlus,
  Eye,
  MessageCircle
} from 'lucide-react'

const newsCategories = [
  { name: 'All News', count: 18, active: true },
  { name: 'Programs', count: 7, active: false },
  { name: 'Events', count: 5, active: false },
  { name: 'Impact Stories', count: 4, active: false },
  { name: 'Announcements', count: 2, active: false }
]

const featuredNews = {
  id: 1,
  title: 'CRYA Launches Comprehensive Mental Health Initiative Across 10 African Countries',
  excerpt: 'In response to growing mental health challenges among African youth, CRYA announces its largest initiative yet, targeting over 100,000 young people with comprehensive mental health support and advocacy programs.',
  content: 'Full article content would go here...',
  author: 'Dr. Sarah Mensah',
  authorRole: 'Program Director',
  authorImage: '/images/team/sarah-mensah.jpg',
  publishDate: '2024-11-15',
  readTime: '8 min read',
  category: 'Programs',
  tags: ['mental-health', 'expansion', 'africa', 'youth'],
  image: '/images/news/mental-health-initiative.jpg',
  featured: true,
  views: 15420,
  shares: 342,
  comments: 78
}

const newsArticles = [
  {
    id: 2,
    title: 'Youth Summit 2024 Attracts Record Breaking 1,200 Participants from 25 Countries',
    excerpt: 'The largest gathering of young African leaders in CRYA history concluded with groundbreaking resolutions on climate action, governance, and economic empowerment.',
    author: 'James Kwaku Asante',
    authorRole: 'Communications Lead',
    publishDate: '2024-10-25',
    readTime: '6 min read',
    category: 'Events',
    tags: ['youth-summit', 'leadership', 'africa'],
    image: '/images/news/youth-summit-2024.jpg',
    views: 8920,
    shares: 178,
    comments: 45
  },
  {
    id: 3,
    title: 'Anti-Drug Campaign Reaches 50,000 Students Across Ghana',
    excerpt: 'CRYA\'s flagship anti-drug education program achieves milestone coverage, with proven 85% effectiveness rate in drug abuse prevention among participating students.',
    author: 'Grace Osei',
    authorRole: 'Program Coordinator',
    publishDate: '2024-10-18',
    readTime: '5 min read',
    category: 'Programs',
    tags: ['anti-drug', 'education', 'ghana', 'students'],
    image: '/images/news/anti-drug-milestone.jpg',
    views: 12340,
    shares: 234,
    comments: 67
  },
  {
    id: 4,
    title: 'Local Hero: From Drug Addiction to Youth Advocate',
    excerpt: 'Meet Kwame Nkrumah, a former drug addict who transformed his life through CRYA programs and now leads peer counseling sessions in his community.',
    author: 'Mary Abdulai',
    authorRole: 'Story Editor',
    publishDate: '2024-10-10',
    readTime: '7 min read',
    category: 'Impact Stories',
    tags: ['recovery', 'inspiration', 'advocacy', 'transformation'],
    image: '/images/news/kwame-story.jpg',
    views: 18750,
    shares: 567,
    comments: 123
  },
  {
    id: 5,
    title: 'CRYA Partners with African Union Youth Division for Continent-Wide Programs',
    excerpt: 'Strategic partnership will expand CRYA programs to reach 500,000 additional young Africans over the next three years with focus on leadership and governance.',
    author: 'Dr. Emmanuel Ofosu',
    authorRole: 'Executive Director',
    publishDate: '2024-09-28',
    readTime: '4 min read',
    category: 'Announcements',
    tags: ['partnership', 'african-union', 'expansion'],
    image: '/images/news/au-partnership.jpg',
    views: 6780,
    shares: 145,
    comments: 32
  },
  {
    id: 6,
    title: 'Digital Skills Training Graduates 200 Young Entrepreneurs',
    excerpt: 'Latest cohort of CRYA\'s digital skills program sees remarkable success with 78% of graduates starting their own tech-based businesses within six months.',
    author: 'David Asante',
    authorRole: 'Skills Coordinator',
    publishDate: '2024-09-20',
    readTime: '5 min read',
    category: 'Programs',
    tags: ['digital-skills', 'entrepreneurship', 'technology'],
    image: '/images/news/digital-graduates.jpg',
    views: 9650,
    shares: 198,
    comments: 56
  },
  {
    id: 7,
    title: 'Community Health Fair Screens 5,000 People in Northern Ghana',
    excerpt: 'Free health screening and mental health awareness event in Tamale provides crucial healthcare access to underserved communities.',
    author: 'Fatima Ibrahim',
    authorRole: 'Health Program Lead',
    publishDate: '2024-09-12',
    readTime: '4 min read',
    category: 'Events',
    tags: ['health', 'community', 'screening', 'northern-ghana'],
    image: '/images/news/health-fair.jpg',
    views: 7230,
    shares: 167,
    comments: 41
  },
  {
    id: 8,
    title: 'Scholarship Program Awards $500,000 to 150 Deserving Students',
    excerpt: 'Annual education scholarship program supports promising students from disadvantaged backgrounds to pursue higher education across Africa.',
    author: 'Prof. Akosua Danso',
    authorRole: 'Education Lead',
    publishDate: '2024-08-30',
    readTime: '6 min read',
    category: 'Programs',
    tags: ['scholarships', 'education', 'students', 'africa'],
    image: '/images/news/scholarships-2024.jpg',
    views: 11420,
    shares: 289,
    comments: 78
  },
  {
    id: 9,
    title: 'Young Leader Spotlight: Ama Serwaa\'s Journey from Participant to Program Director',
    excerpt: 'Inspirational story of how one participant grew through CRYA programs to become a key leader driving change in her community.',
    author: 'Samuel Mensah',
    authorRole: 'Content Writer',
    publishDate: '2024-08-22',
    readTime: '8 min read',
    category: 'Impact Stories',
    tags: ['leadership', 'growth', 'inspiration', 'women'],
    image: '/images/news/ama-spotlight.jpg',
    views: 13890,
    shares: 421,
    comments: 95
  }
]

export default function NewsPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatViews = (views: number): string => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

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
                <Newspaper className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Stay informed about our latest programs, impact stories, and developments 
              in youth empowerment across Africa
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#featured-news"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Read Latest News
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Press Inquiries
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* News Categories */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {newsCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
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

      {/* Featured News */}
      <section id="featured-news" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Featured Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Latest News
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="h-64 lg:h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">Featured Image</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {formatViews(featuredNews.views)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {featuredNews.comments}
                    </span>
                  </div>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {featuredNews.title}
                </h1>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {featuredNews.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {featuredNews.author}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {featuredNews.authorRole}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredNews.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <BookmarkPlus className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Link
                  href={`/news/${featuredNews.id}`}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              All News Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our complete collection of news, updates, and impact stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Newspaper className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-xs opacity-75">Article Image</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </div>

                  {/* Bookmark Button */}
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                    <BookmarkPlus className="w-4 h-4 text-gray-900" />
                  </button>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt.length > 120 
                      ? `${article.excerpt.substring(0, 120)}...` 
                      : article.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {article.author}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {article.authorRole}
                      </p>
                    </div>
                  </div>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {formatViews(article.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {article.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-3 h-3" />
                        {article.shares}
                      </span>
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with CRYA News
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest news, program updates, and impact stories delivered directly to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}