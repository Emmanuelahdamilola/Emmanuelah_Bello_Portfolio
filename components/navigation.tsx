'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';


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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-3xl font-bold text-gradient animate-pulse-slow hover:animate-glow transition-all"
          >
            EB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-lilac-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                  {item.name}
                </span>
                {/* Animated underline */}
                < span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-lilac-500 via-pink-500 to-orange-500 group-hover:w-full transition-all duration-300 ease-out" ></span>
                {/* Pulsing background on hover */}
                <span className="absolute inset-0 -z-10 bg-linear-to-r from-lilac-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-lilac-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 rounded-lg blur-sm group-hover:animate-pulse-slow transition-all duration-300"></span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-lilac-500/20 hover:to-pink-500/20 hover:animate-pulse-slow transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div >

      {/* Mobile Navigation */}
      {
        isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-lilac-500/10 hover:via-pink-500/10 hover:to-orange-500/10 hover:animate-pulse-slow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-lilac-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div >
        )
      }
    </nav >
  );
}