'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lilac-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="block mb-2 text-gray-900 dark:text-white">Hi, I'm</span>
            <span className="text-gradient">Emmanuelah Bello</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light max-w-3xl mx-auto">
            Full Stack Developer
          </p>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building modern web applications with the MERN stack. Passionate about creating elegant solutions
            to complex problems and delivering exceptional user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-lilac text-white rounded-full font-medium hover:shadow-lg hover:shadow-lilac-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-lilac-500 text-lilac-600 dark:text-lilac-400 rounded-full font-medium hover:bg-lilac-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/Emmanuelahdamilola"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-lilac-100 dark:hover:bg-lilac-900/30 text-gray-700 dark:text-gray-300 hover:text-lilac-600 dark:hover:text-lilac-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuelahbello"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-lilac-100 dark:hover:bg-lilac-900/30 text-gray-700 dark:text-gray-300 hover:text-lilac-600 dark:hover:text-lilac-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-lilac-100 dark:hover:bg-lilac-900/30 text-gray-700 dark:text-gray-300 hover:text-lilac-600 dark:hover:text-lilac-400 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-lilac-500 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-lilac-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}