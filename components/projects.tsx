'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'FindMyBiz',
      description: 'A complete Business Listing Directory Backend API with Node.js, Express.js, MongoDB, and JWT Authentication. Features user registration, login, and business listing management.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Emmanuelahdamilola/FindMyBiz',
      live: null,
      gradient: 'from-purple-500 to-pink-500',
      image: '/projects/findmybiz.svg',
    },
    {
      title: 'Payroll Transparency System',
      description: 'Blockchain-based payroll verification platform using AI anomaly detection, staff hashing, and blockchain proof of authenticity. Includes Admin and Auditor dashboards.',
      technologies: ['Blockchain', 'AI', 'JavaScript'],
      github: 'https://github.com/Emmanuelahdamilola/payroll-transparency-system',
      live: null,
      gradient: 'from-blue-500 to-purple-500',
      image: '/projects/payroll.svg',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with MongoDB integration. Full CRUD operations with efficient data handling and modern backend architecture.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      github: 'https://github.com/Emmanuelahdamilola/task_management_api',
      live: null,
      gradient: 'from-green-500 to-teal-500',
      image: '/projects/task-manager.svg',
    },
    {
      title: 'Movie Recommendation App',
      description: 'Interactive movie recommendation application with modern UI and dynamic content rendering.',
      technologies: ['JavaScript', 'React', 'API Integration'],
      github: 'https://github.com/Emmanuelahdamilola/Movie-recommendation-app',
      live: null,
      gradient: 'from-red-500 to-orange-500',
      image: '/projects/movie-app.svg',
    },
    {
      title: 'User CRUD API',
      description: 'Complete user management system with Create, Read, Update, and Delete operations. Built with best practices for API development.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Emmanuelahdamilola/User-CRUD-API',
      live: null,
      gradient: 'from-indigo-500 to-purple-500',
      image: '/projects/user-crud.svg',
    },
    {
      title: 'User API',
      description: 'Robust user authentication and management API with secure endpoints and comprehensive documentation.',
      technologies: ['JavaScript', 'Node.js', 'Express'],
      github: 'https://github.com/Emmanuelahdamilola/User-API',
      live: null,
      gradient: 'from-pink-500 to-rose-500',
      image: '/projects/user-api.svg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-0 w-96 h-96 bg-lilac-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
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
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-2xl hover:shadow-lilac-500/20 relative"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Animated border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Animated gradient bar */}
              <div className="relative h-1 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${project.gradient}`}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              
              <div className="p-6 relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lilac-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-lilac-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-b-2xl pointer-events-none" />
                
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed relative z-10 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-lilac-50 dark:bg-lilac-900/20 text-lilac-700 dark:text-lilac-300 rounded-full text-xs font-medium border border-lilac-200 dark:border-lilac-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 relative z-10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-lilac-600 dark:hover:text-lilac-400 transition-colors font-medium"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-lilac-600 dark:hover:text-lilac-400 transition-colors font-medium"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Emmanuelahdamilola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-lilac text-white rounded-full font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Github size={20} />
              View All Projects on GitHub
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}