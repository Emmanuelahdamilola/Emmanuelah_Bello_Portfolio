'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-lilac-500/5 border-b border-lilac-100/20 dark:border-lilac-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with shine effect */}
          <motion.a
            href="#home"
            className="relative text-3xl font-bold text-gradient overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">EB</span>
            {/* Sparkle effect */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-3 h-3 text-lilac-500" />
            </motion.div>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-lilac-500/10 via-pink-500/10 to-purple-500/10 rounded-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Text with gradient on hover */}
                  <span className={`relative z-10 transition-all duration-300 ${
                    isActive 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-lilac-600 via-pink-600 to-purple-600'
                      : 'text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-lilac-500 group-hover:via-pink-500 group-hover:to-purple-500'
                  }`}>
                    {item.name}
                  </span>

                  {/* Animated underline */}
                  <motion.span 
                    className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-lilac-500 via-pink-500 to-purple-500 rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{ width: '80%' }}
                    animate={{ width: isActive ? '80%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-lilac-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-lilac-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 rounded-lg blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </motion.a>
              );
            })}
            
            {/* Theme toggle with separator */}
            <div className="flex items-center gap-3 ml-2">
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-lilac-500/50 to-transparent" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-lilac-100/50 dark:hover:bg-lilac-900/30 transition-all duration-300 overflow-hidden group"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
              
              {/* Ripple effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-lilac-500/20 to-pink-500/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-lilac-100/20 dark:border-lilac-900/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-r from-lilac-500/20 via-pink-500/20 to-purple-500/20'
                        : 'hover:bg-lilac-50 dark:hover:bg-lilac-900/20'
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-lilac-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-lilac-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileSection"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-lilac-500 via-pink-500 to-purple-500 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Text */}
                    <span className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-lilac-600 via-pink-600 to-purple-600 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-lilac-500 group-hover:via-pink-500 group-hover:to-purple-500'
                    }`}>
                      {item.name}
                    </span>

                    {/* Shine effect on tap */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileTap={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}