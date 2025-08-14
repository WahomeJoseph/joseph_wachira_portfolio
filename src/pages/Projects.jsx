'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, Filter, Search, Calendar, Star, ArrowRight } from 'lucide-react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'Dental Clinic Management System',
      description:
        'Comprehensive system to manage dental clinic operations including appointments, patient records, reminders, and billing with real-time notifications.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'APIs', 'MongoDB', 'JWT', 'Twilio'],
      image:
        'https://plus.unsplash.com/premium_photo-1672922646500-f9b9ae231431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git',
      github: 'https://github.com/WahomeJoseph/MY-DENTAL_CLINIC.git',
      category: 'Full Stack',
      status: 'Completed',
      year: '2024',
      featured: true,
    },
    {
      title: 'JW Next Recipes',
      description:
        'Modern recipe sharing platform where users can discover, search, and share culinary creations with an intuitive community-driven interface.',
      technologies: ['Next.js', 'Tailwind CSS', 'SQLite', 'Node.js'],
      image: 'nextfood.png',
      link: 'https://food-ashen-six.vercel.app/',
      github: 'https://github.com/WahomeJoseph',
      category: 'Full Stack',
      status: 'Live',
      year: '2024',
      featured: true,
    },
    {
      title: 'Movies Search App',
      description:
        'Interactive movie discovery application with advanced search, filtering, and personal favorites management using real-time movie data.',
      technologies: ['React.js', 'MovieDB API', 'Tailwind CSS'],
      image: '/moviescreen.png',
      link: 'https://movies-pi-pearl.vercel.app/',
      github: 'https://github.com/WahomeJoseph',
      category: 'Frontend',
      status: 'Live',
      year: '2023',
      featured: false,
    },
    {
      title: 'Sofa App',
      description:
        'E-commerce platform for premium furniture with integrated payment processing and custom sofa revamping service requests.',
      technologies: ['Next.js', 'Daraja API', 'SQLite', 'Tailwind CSS', 'Cypress', 'NextAuth'],
      image: '/sofalux.png',
      link: 'https://sofa-six.vercel.app/',
      github: 'https://github.com/WahomeJoseph',
      category: 'E-commerce',
      status: 'Live',
      year: '2024',
      featured: true,
    },
    {
      title: 'E-Shop',
      description:
        'Full-featured online electronics store with secure payment integration, inventory management, and comprehensive admin dashboard.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Stripe', 'Daraja API'],
      image: 'e-shop.png',
      link: 'https://github.com/WahomeJoseph/trade.git/',
      github: 'https://github.com/WahomeJoseph/trade.git/',
      category: 'E-commerce',
      status: 'Completed',
      year: '2023',
      featured: false,
    },
    {
      title: 'Geo Finder',
      description:
        'Comprehensive country information application with detailed demographics, statistics, and advanced filtering capabilities for global data exploration.',
      technologies: ['React.js', 'Tailwind CSS', 'Countries API'],
      image: '/geofinder.png',
      link: 'https://github.com/WahomeJoseph/trade.git/',
      github: 'https://github.com/WahomeJoseph/trade.git/',
      category: 'Frontend',
      status: 'Completed',
      year: '2023',
      featured: false,
    },
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'E-commerce']

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      case 'Completed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-transparent'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        {/* <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5'></div>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-3/4 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div> */}

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-400/20 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 w-full min-h-screen py-20 px-4 sm:px-8 max-w-7xl mx-auto'>
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className='text-center mb-16'>
          <motion.h1
            className='text-3xl font-bold uppercase text-[#ddd6cb] text-center'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            My Projects
          </motion.h1>

          <motion.p
            className='text-base text-gray-300 font-light mx-auto leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            A showcase of my technical expertise and creative solutions across various domains
          </motion.p>
        </motion.div>

        {/* Enhanced Filters and Search */}
        <motion.div variants={itemVariants} className='mb-12'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search projects, technologies...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl text-gray-100 placeholder:text-gray-400 focus:outline-none transition-all duration-300'
              />
            </div>

            {/* Category Filters */}
            <div className='flex items-center space-x-2'>
              <Filter className='w-5 h-5 text-gray-400 mr-2' />
              <div className='flex space-x-2'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                      }`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className='mt-4 text-center'>
            <span className='text-gray-400'>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900/40 backdrop-blur-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl ${project.featured ? 'ring-2 ring-blue-500/20' : ''
                  }`}>
                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-4 left-4 z-20'>
                    <div className='flex items-center space-x-1 bg-gradient-to-r from-green-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                      <Star className='w-3 h-3' />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                <div className='absolute top-4 right-4 z-20'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <div className='relative h-48 overflow-hidden'>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className='absolute inset-0 flex items-center justify-center space-x-4'>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/80 transition-all duration-300'
                      aria-label='View Project'>
                      <Eye className='w-5 h-5' />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-gray-900/80 transition-all duration-300'
                      aria-label='View Code'>
                      <Github className='w-5 h-5' />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-xl font-bold text-gray-100 group-hover:text-white transition-colors'>
                      {project.title}
                    </h3>
                    <div className='flex items-center text-gray-400 text-sm'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {project.year}
                    </div>
                  </div>

                  <p className='text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className='text-xs px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-all duration-300'>
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex items-center justify-center space-x-3'>
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='flex-1 inline-flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium text-white bg-gradient-to-br from-gray-950 to-gray-900/40 shadow-sm shadow-[#000fff] hover:from-blue-600 hover:to-blue-600 rounded-lg transition-all duration-300 group/btn'>
                      <span>Project Demo</span>
                      <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300' />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='flex justify-center itesm-center p-2 text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 hover:text-white rounded-lg transition-all duration-300'
                      aria-label='View Code'>
                      <Github className='w-4 h-4' />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center py-16'>
            <div className='w-24 h-24 bg-gray-800/40 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-gray-400' />
            </div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>No projects found</h3>
            <p className='text-gray-400 mb-6'>Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className='px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all duration-300'
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className='mt-20 text-center bg-gradient-to-br from-gray-950 to-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-gray-100 mb-4'>Interested in working together?</h3>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            I&apos;m open to discussing new opportunities and exciting projects. Let&apos;s create something amazing
            together!
          </p>
          <motion.a
            href='/contact'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center space-x-2 px-8 py-4 bg-transparent border border-gray-900 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-600 transition-all duration-300 shadow-sm shadow-[#000fff] hover:shadow-md hover:shadow-[#000fff]'
          >
            <span>Get In Touch</span>
            <ArrowRight className='w-5 h-5' />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}
