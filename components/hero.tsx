'use client';

import { button, label, section } from 'framer-motion/client';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lilac-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lilac-100/80 dark:bg-lilac-900/30 backdrop-blur-sm border border-lilac-200 dark:border-lilac-800 animate-scale-in">
            <Sparkles className="w-4 h-4 text-lilac-600 dark:text-lilac-400" />
            <span className="text-sm font-medium text-lilac-700 dark:text-lilac-300">
              Available for freelance projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="block mb-2 text-gray-900 dark:text-white animate-fade-in-down">
              Hi, I'm
            </span>
            <span className="text-gradient animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Emmanuelah Bello
            </span>
          </h1>

          {/* Subtitle with typing effect feel */}
          <div className="relative inline-block">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="relative">
                Full Stack Developer
                <span className="absolute -right-1 top-0 w-0.5 h-full bg-lilac-500 animate-pulse"></span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Specializing in the <span className="text-lilac-600 dark:text-lilac-400 font-semibold">MERN stack</span>,
            I craft elegant solutions to complex problems and deliver exceptional user experiences
            that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>

            <a
              href="#contact"
              className="group relative px-8 py-4 bg-linear-to-r from-lilac-600 to-purple-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lilac-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>


            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToProjects();
              }}
              className="group px-8 py-4 border-2 border-lilac-500 text-lilac-600 dark:text-lilac-400 rounded-full font-medium hover:bg-lilac-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
              </span>
            </a>


            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>

            <a
              href="https://github.com/Emmanuelahdamilola"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-lilac-100 hover:to-purple-100 dark:hover:from-lilac-900/30 dark:hover:to-purple-900/30"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </a>


            <a
              href="https://www.linkedin.com/in/emmanuelahbello"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </a>


            <a
              href="https://wa.me/+2348162191552"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-green-100 hover:to-green-200 dark:hover:from-green-900/30 dark:hover:to-green-800/30"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 group-hover:text-green-500 transition-colors" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp
              </span>
            </a>


            <a
              href="mailto:emmanuelahdamilola@gmail.com"
              className="group relative p-4 rounded-full bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-lilac-100 hover:to-pink-100 dark:hover:from-lilac-900/30 dark:hover:to-pink-900/30"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Email
              </span>
            </a>
          </div>

          {/* Stats or Quick Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 pb-20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll down">
        <div className="w-8 h-12 rounded-full border-2 border-lilac-500 flex items-start justify-center p-2 group-hover:border-lilac-600 transition-colors">
          <div className="w-1.5 h-3 bg-lilac-500 rounded-full animate-pulse group-hover:bg-lilac-600"></div>
        </div>
      </button>
    </section>
  );
}