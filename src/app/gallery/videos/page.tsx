'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Play, 
  Search,
  Video,
  Clock,
  Eye,
  Calendar,
  MapPin,
  Heart,
  Share2,
  Download,
  X,
  Volume2,
  Maximize,
  SkipBack,
  SkipForward,
  Pause
} from 'lucide-react'

const videoCategories = [
  { name: 'All Videos', count: 24, active: true },
  { name: 'Events', count: 8, active: false },
  { name: 'Programs', count: 7, active: false },
  { name: 'Testimonials', count: 5, active: false },
  { name: 'Training', count: 4, active: false }
]

const galleryVideos = [
  {
    id: 1,
    title: 'CRYA Youth Summit 2024 Highlights',
    description: 'A comprehensive overview of the most impactful moments from our annual youth summit',
    category: 'Events',
    duration: '8:45',
    views: 12450,
    likes: 387,
    date: '2024-10-20',
    location: 'Accra, Ghana',
    thumbnail: '/images/videos/summit-highlights-thumb.jpg',
    videoUrl: '/videos/summit-highlights.mp4',
    tags: ['summit', 'highlights', 'youth', 'leadership'],
    featured: true
  },
  {
    id: 2,
    title: 'Mental Health Champions Training',
    description: 'Behind the scenes look at our peer counselor training program',
    category: 'Training',
    duration: '12:30',
    views: 8920,
    likes: 245,
    date: '2024-09-15',
    location: 'Ho, Ghana',
    thumbnail: '/images/videos/mental-health-training-thumb.jpg',
    videoUrl: '/videos/mental-health-training.mp4',
    tags: ['mental-health', 'training', 'counseling', 'skills']
  },
  {
    id: 3,
    title: 'Student Testimony: Breaking Free from Addiction',
    description: 'Powerful testimony from a student who overcame drug addiction with CRYA support',
    category: 'Testimonials',
    duration: '6:15',
    views: 15670,
    likes: 892,
    date: '2024-08-28',
    location: 'Kumasi, Ghana',
    thumbnail: '/images/videos/addiction-testimony-thumb.jpg',
    videoUrl: '/videos/addiction-testimony.mp4',
    tags: ['testimony', 'recovery', 'inspiration', 'youth']
  },
  {
    id: 4,
    title: 'Leadership Bootcamp Documentary',
    description: 'Follow young leaders through an intensive 3-day leadership development program',
    category: 'Training',
    duration: '25:18',
    views: 6340,
    likes: 198,
    date: '2024-07-22',
    location: 'Elmina, Ghana',
    thumbnail: '/images/videos/leadership-bootcamp-thumb.jpg',
    videoUrl: '/videos/leadership-bootcamp.mp4',
    tags: ['leadership', 'bootcamp', 'development', 'skills']
  },
  {
    id: 5,
    title: 'Anti-Drug Campaign: School Visits',
    description: 'Our team visiting schools across Ghana to educate students about drug prevention',
    category: 'Programs',
    duration: '9:32',
    views: 11250,
    likes: 334,
    date: '2024-08-10',
    location: 'Multiple Schools, Ghana',
    thumbnail: '/images/videos/school-visits-thumb.jpg',
    videoUrl: '/videos/school-visits.mp4',
    tags: ['anti-drug', 'schools', 'education', 'prevention']
  },
  {
    id: 6,
    title: 'Community Health Fair Impact',
    description: 'See the positive impact of our community health initiatives in Northern Ghana',
    category: 'Programs',
    duration: '7:28',
    views: 9180,
    likes: 267,
    date: '2024-06-30',
    location: 'Tamale, Ghana',
    thumbnail: '/images/videos/health-fair-thumb.jpg',
    videoUrl: '/videos/health-fair.mp4',
    tags: ['health', 'community', 'impact', 'wellness']
  },
  {
    id: 7,
    title: 'Young Leader Spotlight: Sarah\'s Journey',
    description: 'Follow Sarah as she transforms from participant to program coordinator',
    category: 'Testimonials',
    duration: '11:45',
    views: 7890,
    likes: 421,
    date: '2024-05-15',
    location: 'Cape Coast, Ghana',
    thumbnail: '/images/videos/sarah-journey-thumb.jpg',
    videoUrl: '/videos/sarah-journey.mp4',
    tags: ['spotlight', 'leadership', 'growth', 'inspiration']
  },
  {
    id: 8,
    title: 'CRYA Annual Conference 2024',
    description: 'Complete coverage of keynote speeches and panel discussions',
    category: 'Events',
    duration: '45:20',
    views: 5670,
    likes: 156,
    date: '2024-11-05',
    location: 'Accra, Ghana',
    thumbnail: '/images/videos/annual-conference-thumb.jpg',
    videoUrl: '/videos/annual-conference.mp4',
    tags: ['conference', 'speeches', 'panels', 'networking']
  },
  {
    id: 9,
    title: 'Digital Skills Workshop Success Stories',
    description: 'Participants share how digital skills training changed their lives',
    category: 'Testimonials',
    duration: '8:15',
    views: 10230,
    likes: 378,
    date: '2024-04-20',
    location: 'Accra, Ghana',
    thumbnail: '/images/videos/digital-success-thumb.jpg',
    videoUrl: '/videos/digital-success.mp4',
    tags: ['digital-skills', 'success', 'technology', 'empowerment']
  },
  {
    id: 10,
    title: 'Governance Training: Democracy in Action',
    description: 'Young people learning about democratic processes and civic engagement',
    category: 'Training',
    duration: '14:30',
    views: 4560,
    likes: 123,
    date: '2024-03-18',
    location: 'Ho, Ghana',
    thumbnail: '/images/videos/governance-training-thumb.jpg',
    videoUrl: '/videos/governance-training.mp4',
    tags: ['governance', 'democracy', 'civic', 'engagement']
  },
  {
    id: 11,
    title: 'Mental Health Awareness Campaign',
    description: 'Raising awareness about mental health issues in African communities',
    category: 'Programs',
    duration: '10:45',
    views: 13420,
    likes: 445,
    date: '2024-02-14',
    location: 'Multiple Locations',
    thumbnail: '/images/videos/mental-awareness-thumb.jpg',
    videoUrl: '/videos/mental-awareness.mp4',
    tags: ['mental-health', 'awareness', 'stigma', 'support']
  },
  {
    id: 12,
    title: 'Education Scholarship Recipients',
    description: 'Meet the bright young minds receiving CRYA educational scholarships',
    category: 'Testimonials',
    duration: '13:20',
    views: 8750,
    likes: 298,
    date: '2024-01-25',
    location: 'Accra, Ghana',
    thumbnail: '/images/videos/scholarship-recipients-thumb.jpg',
    videoUrl: '/videos/scholarship-recipients.mp4',
    tags: ['education', 'scholarships', 'students', 'achievement']
  }
]

export default function GalleryVideosPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Videos')
  const [isPlaying, setIsPlaying] = useState(false)

  // Filter videos based on search term and category
  const filteredVideos = galleryVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All Videos' || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openVideo = (video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
  }

  const formatDuration = (duration) => {
    return duration
  }

  const formatViews = (views) => {
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
                <Video className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Video Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Watch stories of transformation, impact, and hope from our programs and events
            </p>
            <div className="text-center">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                {galleryVideos.length} Videos • {galleryVideos.reduce((sum, video) => sum + video.views, 0).toLocaleString()} Total Views
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {videoCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category.name
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

      {/* Featured Video */}
      {galleryVideos.filter(video => video.featured).map(video => (
        <section key={video.id} className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Play className="w-4 h-4" />
                Featured Video
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {video.title}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative group cursor-pointer" onClick={() => openVideo(video)}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900">
                  {/* Video Thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm opacity-75">Video Thumbnail</p>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {formatViews(video.views)} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {video.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(video.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Video Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              All Videos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our complete collection of impact stories and educational content
            </p>
          </motion.div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <Video className="w-16 h-16 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No videos found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredVideos.filter(video => !video.featured).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openVideo(video)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video">
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-xs opacity-75">Video Thumbnail</p>
                      </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-gray-900 ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      {video.category}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {video.description.length > 100 
                        ? `${video.description.substring(0, 100)}...` 
                        : video.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(video.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {video.location.length > 20 ? video.location.substring(0, 20) + '...' : video.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatViews(video.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {video.likes}
                        </span>
                      </div>
                      <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            {/* Video Player */}
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Container */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    {!isPlaying ? (
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="w-24 h-24 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center mb-4 transition-colors"
                      >
                        <Play className="w-12 h-12 ml-1" />
                      </button>
                    ) : (
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <Pause className="w-12 h-12" />
                      </div>
                    )}
                    <p className="text-sm opacity-75">Video Player</p>
                  </div>
                </div>

                {/* Video Controls */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <button className="text-white hover:text-primary-400">
                        <SkipBack className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:text-primary-400"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button className="text-white hover:text-primary-400">
                        <SkipForward className="w-5 h-5" />
                      </button>
                      <div className="flex-1 mx-4">
                        <div className="bg-white/30 h-1 rounded-full">
                          <div className="bg-primary-500 h-1 rounded-full w-1/3"></div>
                        </div>
                      </div>
                      <button className="text-white hover:text-primary-400">
                        <Volume2 className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-primary-400">
                        <Maximize className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Details */}
            <div className="bg-white dark:bg-gray-900 rounded-lg mt-4 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedVideo.description}
                  </p>
                </div>
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm ml-4">
                  {selectedVideo.category}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedVideo.duration}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Date:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(selectedVideo.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedVideo.location}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Views:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedVideo.views.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                    <Heart className="w-5 h-5" />
                    {selectedVideo.likes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}