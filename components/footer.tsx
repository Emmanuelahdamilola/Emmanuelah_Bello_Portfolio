'use client';

import { div, footer } from 'framer-motion/client';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/yourphonenumber', color: 'hover:text-green-500' },
    { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com', color: 'hover:text-lilac-600' },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">EB</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in building exceptional digital experiences.
              Passionate about creating innovative solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-lilac-600 dark:hover:text-lilac-400 transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-lilac-500 to-pink-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Let's Connect</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (

                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-white">Emmanuelah Bello</span>. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lilac-500 to-pink-500 text-white hover:from-lilac-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Animated gradient line at bottom */}
      <div className="h-1 bg-gradient-to-r from-lilac-500 via-pink-500 to-orange-500 animate-gradient"></div>
    </footer>
  );
}