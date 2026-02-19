'use client';

import { Mail, MapPin, Send, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    { 
      icon: Mail, 
      title: 'Email', 
      value: 'emmanuelahdamilola@gmail.com', 
      href: 'mailto:emmanuelahdamilola@gmail.com',
      color: 'from-red-500 to-pink-500',
      hoverColor: 'hover:from-red-600 hover:to-pink-600'
    },
    { 
      icon: FaWhatsapp, 
      title: 'WhatsApp', 
      value: '+234 816 219 1552', 
      href: 'https://wa.me/2348162191552',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600'
    },
    { 
      icon: MapPin, 
      title: 'Location', 
      value: 'Open to remote opportunities', 
      href: 'https://wa.me/2348162191552',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Emmanuelahdamilola', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/emmanuelahbello', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'hhttps://x.com/codedvirtue', color: 'hover:text-blue-800' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-lilac-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
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
            <MessageCircle className="w-4 h-4 text-lilac-600 dark:text-lilac-400" />
            <span className="text-sm font-medium text-lilac-700 dark:text-lilac-300">
              Let's connect
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Let's discuss your next project or just say hello
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Intro Card */}
            <motion.div
              className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lilac-500 via-purple-500 to-pink-500"></div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lilac-400/20 to-purple-400/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                Let's work together
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </motion.p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {contact.href ? (
                    <motion.a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-lilac-400 dark:hover:border-lilac-600 transition-all duration-300 hover:shadow-xl hover:shadow-lilac-500/20"
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <motion.div
                        className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{contact.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-lilac-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.div>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
                      <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl text-white shadow-lg`}>
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{contact.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-lilac-500" />
                Connect on Social
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 font-medium border-2 border-transparent hover:border-lilac-400 dark:hover:border-lilac-600 hover:shadow-lg`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ boxShadow: "0 25px 70px rgba(168, 85, 247, 0.2)" }}
          >
            {/* Decorative gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lilac-500 via-purple-500 to-pink-500"></div>

            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-lilac-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-lilac-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                Send me a message
              </motion.h3>

              {['name', 'email'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <label htmlFor={field} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 capitalize">
                    {field} *
                  </label>
                  <motion.input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-lilac-500 focus:border-lilac-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                    placeholder={field === 'email' ? 'your.email@example.com' : 'Your name'}
                    whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-lilac-500 focus:border-lilac-500 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder:text-gray-400"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01, borderColor: '#a855f7' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-lilac-600 to-purple-600 text-white rounded-xl font-semibold relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-lilac-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
                {!isSubmitting && !isSubmitted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}