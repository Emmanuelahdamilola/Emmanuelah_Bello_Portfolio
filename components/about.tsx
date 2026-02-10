'use client';

import { Code2, Database, Server, Palette } from 'lucide-react';
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
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side applications with Node.js, Express, and RESTful architecture.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing databases with MongoDB, ensuring data integrity and efficient queries.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting beautiful, user-friendly interfaces with attention to detail and accessibility.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-lilac-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 10,
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A passionate developer focused on creating impactful digital experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm a Full Stack Developer with a strong foundation in the MERN stack, currently pursuing
              Computer Science at the University of the People. My journey in web development is driven
              by a passion for creating solutions that make a difference.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              With expertise in both frontend and backend technologies, I bring ideas to life through
              clean code, thoughtful design, and a user-first approach. I'm always eager to learn new
              technologies and take on challenging projects.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {['Problem Solver', 'Team Player', 'Quick Learner'].map((trait, index) => (
                <motion.span
                  key={trait}
                  variants={itemVariants}
                  className="px-4 py-2 bg-lilac-100 dark:bg-lilac-900/30 text-lilac-700 dark:text-lilac-300 rounded-full text-sm font-medium border border-lilac-200 dark:border-lilac-800"
                  whileHover={{ scale: 1.1, rotate: Math.random() * 5 - 2.5 }}
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-lg hover:shadow-lilac-500/20 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-lilac-500/0 to-purple-500/0 group-hover:from-lilac-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-lilac-600 dark:text-lilac-400 mb-3 relative z-10" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}