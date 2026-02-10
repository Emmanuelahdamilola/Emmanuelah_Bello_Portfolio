import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emmanuelah Bello - Full Stack Developer',
  description: 'Portfolio of Emmanuelah Bello, a Full Stack Developer specializing in MERN stack development. Building modern web applications with React, Node.js, Express, and MongoDB.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Emmanuelah Bello' }],
  openGraph: {
    title: 'Emmanuelah Bello - Full Stack Developer',
    description: 'Portfolio of Emmanuelah Bello, a Full Stack Developer specializing in MERN stack development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}