'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
}

function AnimatedProgressBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = skill.level;
      const duration = 2000; 
      const increment = end / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <motion.span 
          className="text-sm font-bold text-lilac-600 dark:text-lilac-400 tabular-nums"
          key={count}
        >
          {count}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-linear-to-r from-lilac-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            delay: delay + 0.2, 
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: delay + 1.5,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    'Frontend': [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'Bootstrap', level: 85 },
    ],
    'Backend': [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 88 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'JWT Auth', level: 82 },
    ],
    'Tools & Others': [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Responsive Design', level: 92 },
      { name: 'TypeScript', level: 80 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-lilac-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-xl hover:shadow-lilac-500/20 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-lilac-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-lilac-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-lilac-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.3
                    }}
                  />
                  {category}
                </motion.h3>
                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <AnimatedProgressBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div 
          className="mt-16 p-8 bg-linear-to-r from-lilac-500 via-purple-500 to-pink-500 dark:from-gray-800/50 dark:via-gray-850/50 dark:to-pink-500/50 backdrop-blur-sm rounded-2xl border border-lilac-200/50 dark:border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <motion.h3 
            className="text-center text-lg font-semibold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Tech Stack
          </motion.h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Bootstrap', 'Next.js'].map((tech, index) => (
              <motion.div
                key={tech}
                className="group px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 relative overflow-hidden cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors relative z-10">
                  {tech}
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-lilac-500/20 to-purple-500/20 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}