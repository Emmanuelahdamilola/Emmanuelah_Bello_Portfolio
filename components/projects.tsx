'use client';

import { ExternalLink, Github, Sparkles, Code2, Star, TrendingUp, Link2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Ekiti Listing',
      description: 'A complete Business Listing Directory Backend API with Node.js, Express.js, MongoDB, and JWT Authentication. Features user registration, login, and business listing management.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Emmanuelahdamilola/Ekiti_Listing',
      live: 'https://ekiti-listing.vercel.app/', 
      gradient: 'from-green-500 to-teal-500',
      image: '/projects/ekiti_listing.png',
      featured: true,
    },
    {
      title: 'Payroll Transparency System',
      description: 'Blockchain-based payroll verification platform using AI anomaly detection, staff hashing, and blockchain proof of authenticity. Includes Admin and Auditor dashboards.',
      technologies: ['Blockchain', 'AI', 'JavaScript'],
      github: 'https://github.com/Emmanuelahdamilola/payroll-transparency-system',
      live: 'https://payroll-transparency.vercel.app', 
      gradient: 'from-red-500 to-pink-600',
      image: '/projects/payroll.svg',
      featured: true,
    },
    {
      title: 'AI Healthmate',
      description: 'An AI-driven voice technology healthcare platform. Provides instant health recommendations based on symptoms using advanced voice recognition and AI analysis.',
      technologies: ['AI/ML', 'Voice Tech', 'React', 'Next.js'],
      github: 'https://github.com/Emmanuelahdamilola/task_management_api',
      live: 'https://aihealthmate-sooty.vercel.app/', 
      gradient: 'from-blue-500 to-purple-500',
      image: '/projects/aihealthmate.png',
      featured: false,
    },
    {
      title: 'Movie Recommendation App',
      description: 'Interactive movie recommendation application with modern UI and dynamic content rendering.',
      technologies: ['JavaScript', 'React', 'API Integration'],
      github: 'https://github.com/Emmanuelahdamilola/Movie-recommendation-app',
      live: 'https://movie-recommendation-app.vercel.app', 
      gradient: 'from-red-500 to-orange-500',
      image: '/projects/movie-app.svg',
      featured: false,
    },
    {
      title: 'ChiperHub',
      description: 'An integrated IT solutions platform offering comprehensive services for businesses. Features modern UI with service showcases and customer support integration.',
      technologies: ['JavaScript', 'HTML/CSS', 'Vercel'],
      github: 'https://github.com/Emmanuelahdamilola/User-CRUD-API',
      live: 'https://chiper-hub.vercel.app/',
      gradient: 'from-blue-500 to-blue-700',
      image: '/projects/chiperhub.png',
      featured: false,
    },
    {
      title: 'User API',
      description: 'Robust user authentication and management API with secure endpoints and comprehensive documentation.',
      technologies: ['JavaScript', 'Node.js', 'Express'],
      github: 'https://github.com/Emmanuelahdamilola/User-API',
      live: 'https://user-api-demo.vercel.app', // Add your live link
      gradient: 'from-pink-500 to-rose-500',
      image: '/projects/user-api.svg',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-0 w-96 h-96 bg-lilac-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lilac-100/80 dark:bg-lilac-900/30 backdrop-blur-sm border border-lilac-200 dark:border-lilac-800 mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Code2 className="w-4 h-4 text-lilac-600 dark:text-lilac-400" />
            <span className="text-sm font-medium text-lilac-700 dark:text-lilac-300">
              Portfolio showcase
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-500 hover:shadow-2xl hover:shadow-lilac-500/30 relative"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </motion.div>
              )}

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </div>

              {/* Animated gradient bar */}
              <div className="relative h-1.5 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${project.gradient}`}
                  initial={{ x: '-100%' }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                />
              </div>
              
              <div className="p-6 relative">
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-lilac-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-lilac-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-b-3xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Title with icon */}
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors flex-1"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <TrendingUp className="w-5 h-5 text-lilac-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed relative z-10 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-lilac-50 to-purple-50 dark:from-lilac-900/20 dark:to-purple-900/20 text-lilac-700 dark:text-lilac-300 rounded-lg text-xs font-semibold border border-lilac-200 dark:border-lilac-800 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.15, rotate: Math.random() * 10 - 5, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 relative z-10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-lilac-100 dark:hover:bg-lilac-900/30 hover:text-lilac-600 dark:hover:text-lilac-400 rounded-xl transition-all font-medium text-sm border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-lilac-600 to-purple-600 text-white rounded-xl transition-all font-medium text-sm hover:shadow-lg hover:shadow-lilac-500/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-lilac-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9 }}
          >
            Want to see more? Check out my GitHub for additional projects
          </motion.p>
          <motion.a
            href="https://github.com/Emmanuelahdamilola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lilac-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-lilac-500/50 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Github size={20} />
              View All Projects on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}