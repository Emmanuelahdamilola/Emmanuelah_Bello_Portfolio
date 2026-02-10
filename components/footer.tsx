'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Emmanuelah Bello</span>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-400 hover:text-lilac-600 dark:hover:text-lilac-400 transition-colors text-sm"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}