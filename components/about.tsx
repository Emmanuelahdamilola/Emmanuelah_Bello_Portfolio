'use client';

import { Code2, Database, Server, Palette, Sparkles, Zap, Heart, Target } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side applications with Node.js, Express, and RESTful architecture.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing databases with MongoDB, ensuring data integrity and efficient queries.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting beautiful, user-friendly interfaces with attention to detail and accessibility.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { icon: Target, label: 'Projects Delivered', value: '10+', color: 'text-lilac-600 dark:text-lilac-400' },
    { icon: Zap, label: 'Technologies', value: '15+', color: 'text-purple-600 dark:text-purple-400' },
    { icon: Heart, label: 'Happy Clients', value: '15+', color: 'text-pink-600 dark:text-pink-400' },
    { icon: Sparkles, label: 'Years Experience', value: '2+', color: 'text-orange-600 dark:text-orange-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-lilac-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [50, -50, 50],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
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
            <Sparkles className="w-4 h-4 text-lilac-600 dark:text-lilac-400" />
            <span className="text-sm font-medium text-lilac-700 dark:text-lilac-300">
              Get to know me
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A passionate developer focused on creating impactful digital experiences
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lilac-500 via-purple-500 to-pink-500"></div>
              
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lilac-400/20 to-purple-400/20 rounded-full blur-2xl"
              ></motion.div>

              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                I'm a <span className="font-semibold text-lilac-600 dark:text-lilac-400">Full Stack Developer</span> with 
                a strong foundation in the MERN stack, currently pursuing Computer Science at the University of the People. 
                My journey in web development is driven by a passion for creating solutions that make a difference.
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                With expertise in both frontend and backend technologies, I bring ideas to life through 
                clean code, thoughtful design, and a <span className="font-semibold text-purple-600 dark:text-purple-400">user-first approach</span>. 
                I'm always eager to learn new technologies and take on challenging projects.
              </motion.p>
            </motion.div>

            {/* Traits */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait, index) => (
                <motion.span
                  key={trait}
                  variants={itemVariants}
                  className="group px-5 py-2.5 bg-gradient-to-r from-lilac-50 to-purple-50 dark:from-lilac-900/20 dark:to-purple-900/20 text-lilac-700 dark:text-lilac-300 rounded-full text-sm font-medium border border-lilac-200 dark:border-lilac-800 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: Math.random() * 5 - 2.5,
                    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{trait}</span>
                </motion.span>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-2"
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-2xl hover:shadow-lilac-500/20 relative overflow-hidden cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lilac-500/0 to-purple-500/0 group-hover:from-lilac-500/20 group-hover:to-purple-500/20 blur-xl transition-all duration-500 rounded-2xl" />

                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <item.icon className="w-10 h-10 text-lilac-600 dark:text-lilac-400 mb-4" />
                </motion.div>
                
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 relative z-10 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-lilac-500/10 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lilac-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-lilac-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}