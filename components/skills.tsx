'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Database, Wrench, Sparkles, Award, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon?: string;
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
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors">
          {skill.name}
        </span>
        <motion.span 
          className="text-sm font-bold text-lilac-600 dark:text-lilac-400 tabular-nums"
          key={count}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.3 }}
        >
          {count}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-lilac-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
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
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 blur-sm"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 78 },
        { name: 'Next.js', level:55 },
        { name: 'TailwindCSS', level: 72 },
        { name: 'Bootstrap', level: 85 },
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 67 },
        { name: 'Express.js', level: 68 },
        { name: 'RESTful APIs', level: 60 },
        { name: 'MongoDB', level: 65 },
        { name: 'JWT Auth', level: 64 },
      ]
    },
    {
      category: 'Tools & Others',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 70 },
        { name: 'VS Code', level: 75 },
        { name: 'Postman', level: 65 },
        { name: 'Responsive Design', level: 92 },
        { name: 'TypeScript', level: 40 },
      ]
    }
  ];

  const techStack = [
    { name: 'HTML', color: 'hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:border-orange-400' },
    { name: 'CSS', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-400' },
    { name: 'JavaScript', color: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:border-yellow-400' },
    { name: 'React', color: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:border-cyan-400' },
    { name: 'Node.js', color: 'hover:bg-green-100 dark:hover:bg-green-900/30 hover:border-green-400' },
    { name: 'Express', color: 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-400' },
    { name: 'MongoDB', color: 'hover:bg-green-100 dark:hover:bg-green-900/30 hover:border-green-500' },
    { name: 'TailwindCSS', color: 'hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:border-teal-400' },
    { name: 'Bootstrap', color: 'hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-400' },
    { name: 'Next.js', color: 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-500' },
    { name: 'TypeScript', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-400' },
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
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
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
            <Award className="w-4 h-4 text-lilac-600 dark:text-lilac-400" />
            <span className="text-sm font-medium text-lilac-700 dark:text-lilac-300">
              My expertise
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map(({ category, icon: Icon, color, skills }, categoryIndex) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="group p-8 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-2xl hover:shadow-lilac-500/20 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Card glow effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="relative z-10">
                {/* Category Header */}
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <motion.div
                    className="ml-auto"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.3
                    }}
                  >
                    <TrendingUp className="w-5 h-5 text-lilac-500" />
                  </motion.div>
                </motion.div>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <AnimatedProgressBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lilac-500/10 to-transparent rounded-tl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div 
          className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-lilac-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-lilac-600 dark:text-lilac-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tech Stack
              </h3>
              <Sparkles className="w-6 h-6 text-lilac-600 dark:text-lilac-400" />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`group px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 ${tech.color} relative overflow-hidden cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                  transition={{ delay: 1 + index * 0.05, duration: 0.3, type: "spring" }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: Math.random() * 10 - 5,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors relative z-10">
                    {tech.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lilac-500/10 to-purple-500/10 rounded-xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            Always learning and exploring new technologies
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lilac-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-lilac-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See My Work</span>
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