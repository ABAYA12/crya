'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Camera, 
  Search,
  Filter,
  Grid3X3,
  List,
  Download,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Eye,
  X
} from 'lucide-react'

const photoCategories = [
  { name: 'All Photos', count: 48, active: true },
  { name: 'Events', count: 18, active: false },
  { name: 'Programs', count: 15, active: false },
  { name: 'Training', count: 8, active: false },
  { name: 'Community', count: 7, active: false }
]

const galleryPhotos = [
  {
    id: 1,
    title: 'Youth Summit 2024 Opening Ceremony',
    description: 'Young leaders from across Africa gather for the opening ceremony',
    category: 'Events',
    date: '2024-10-15',
    location: 'Accra, Ghana',
    photographer: 'CRYA Media Team',
    likes: 45,
    views: 1250,
    tags: ['summit', 'ceremony', 'youth', 'africa'],
    image: '/images/gallery/summit-opening.jpg'
  },
  {
    id: 2,
    title: 'Mental Health Workshop Session',
    description: 'Participants engaged in an interactive mental health awareness session',
    category: 'Training',
    date: '2024-09-20',
    location: 'Ho, Ghana',
    photographer: 'Samuel Mensah',
    likes: 32,
    views: 890,
    tags: ['mental-health', 'workshop', 'training'],
    image: '/images/gallery/mental-health-workshop.jpg'
  },
  {
    id: 3,
    title: 'Anti-Drug Campaign in Schools',
    description: 'Students participating in anti-drug awareness activities',
    category: 'Programs',
    date: '2024-08-15',
    location: 'Kumasi, Ghana',
    photographer: 'Grace Osei',
    likes: 67,
    views: 2100,
    tags: ['anti-drug', 'schools', 'students', 'awareness'],
    image: '/images/gallery/anti-drug-schools.jpg'
  },
  {
    id: 4,
    title: 'Leadership Training Bootcamp',
    description: 'Young leaders during team building exercises',
    category: 'Training',
    date: '2024-07-10',
    location: 'Elmina, Ghana',
    photographer: 'David Asante',
    likes: 78,
    views: 1800,
    tags: ['leadership', 'bootcamp', 'team-building'],
    image: '/images/gallery/leadership-bootcamp.jpg'
  },
  {
    id: 5,
    title: 'Community Health Fair',
    description: 'Free health screening and wellness education for the community',
    category: 'Community',
    date: '2024-06-25',
    location: 'Tamale, Ghana',
    photographer: 'Mary Abdulai',
    likes: 54,
    views: 1450,
    tags: ['health', 'community', 'screening', 'wellness'],
    image: '/images/gallery/health-fair.jpg'
  },
  {
    id: 6,
    title: 'Digital Skills Workshop',
    description: 'Youth learning coding and digital marketing skills',
    category: 'Training',
    date: '2024-05-30',
    location: 'Accra, Ghana',
    photographer: 'Tech Team',
    likes: 89,
    views: 2300,
    tags: ['digital', 'coding', 'skills', 'technology'],
    image: '/images/gallery/digital-skills.jpg'
  },
  {
    id: 7,
    title: 'Governance Panel Discussion',
    description: 'Youth engaging in democratic governance discussions',
    category: 'Programs',
    date: '2024-04-18',
    location: 'Cape Coast, Ghana',
    photographer: 'Political Team',
    likes: 41,
    views: 980,
    tags: ['governance', 'democracy', 'panel', 'discussion'],
    image: '/images/gallery/governance-panel.jpg'
  },
  {
    id: 8,
    title: 'Education Scholarship Awards',
    description: 'Celebrating scholarship recipients and their achievements',
    category: 'Events',
    date: '2024-03-22',
    location: 'Accra, Ghana',
    photographer: 'Awards Team',
    likes: 95,
    views: 2800,
    tags: ['education', 'scholarship', 'awards', 'achievement'],
    image: '/images/gallery/scholarship-awards.jpg'
  },
  {
    id: 9,
    title: 'Mental Health Champions Training',
    description: 'Training peer counselors and mental health advocates',
    category: 'Training',
    date: '2024-02-14',
    location: 'Ho, Ghana',
    photographer: 'Health Team',
    likes: 38,
    views: 1120,
    tags: ['mental-health', 'champions', 'counseling'],
    image: '/images/gallery/champions-training.jpg'
  },
  {
    id: 10,
    title: 'Cultural Exchange Program',
    description: 'Youth from different regions sharing cultural experiences',
    category: 'Programs',
    date: '2024-01-20',
    location: 'Multiple Locations',
    photographer: 'Cultural Team',
    likes: 63,
    views: 1650,
    tags: ['culture', 'exchange', 'diversity', 'unity'],
    image: '/images/gallery/cultural-exchange.jpg'
  },
  {
    id: 11,
    title: 'Community Outreach Program',
    description: 'Volunteers engaging with local communities',
    category: 'Community',
    date: '2023-12-10',
    location: 'Northern Region, Ghana',
    photographer: 'Outreach Team',
    likes: 72,
    views: 1900,
    tags: ['outreach', 'community', 'volunteers', 'service'],
    image: '/images/gallery/community-outreach.jpg'
  },
  {
    id: 12,
    title: 'Annual Conference Networking',
    description: 'Young leaders networking during the annual conference',
    category: 'Events',
    date: '2023-11-05',
    location: 'Accra, Ghana',
    photographer: 'Conference Team',
    likes: 87,
    views: 2450,
    tags: ['conference', 'networking', 'leaders', 'connections'],
    image: '/images/gallery/conference-networking.jpg'
  }
]

export default function GalleryPhotosPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Photos')

  // Filter photos based on search term and category
  const filteredPhotos = galleryPhotos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All Photos' || photo.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openPhoto = (photo) => {
    setSelectedPhoto(photo)
  }

  const closePhoto = () => {
    setSelectedPhoto(null)
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
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Capturing moments of impact, growth, and community across our programs and events
            </p>
            <div className="text-center">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                {galleryPhotos.length} Photos • {photoCategories.reduce((sum, cat) => sum + cat.count, 0)} Total
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {photoCategories.map((category, index) => (
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

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container-custom">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No photos found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }
            >
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className={
                    viewMode === 'grid'
                      ? 'group cursor-pointer'
                      : 'bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
                  }
                  onClick={() => openPhoto(photo)}
                >
                  {viewMode === 'grid' ? (
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                      {/* Placeholder for photo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-50" />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="text-white text-center">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">View Photo</p>
                        </div>
                      </div>

                      {/* Photo info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-semibold text-sm mb-1 truncate">{photo.title}</h4>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {photo.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {photo.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-6">
                      <div className="w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white opacity-50" />
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {photo.title}
                          </h3>
                          <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-xs">
                            {photo.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {photo.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(photo.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {photo.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {photo.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closePhoto}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo */}
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white opacity-50" />
              </div>
            </div>

            {/* Photo Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedPhoto.description}
                  </p>
                </div>
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm">
                  {selectedPhoto.category}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Date:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {new Date(selectedPhoto.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedPhoto.location}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Photographer:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedPhoto.photographer}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Views:</span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedPhoto.views.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                    <Heart className="w-5 h-5" />
                    {selectedPhoto.likes}
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
                  {selectedPhoto.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
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