'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { iconHover, iconTap, navLinkHover } from '@/lib/motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home', icon: HomeIcon },
    { name: 'Sobre Mí', href: '#about', icon: UserIcon },
    { name: 'Proyectos', href: '#projects', icon: BriefcaseIcon },
    { name: 'Experiencia', href: '#experience', icon: BriefcaseIcon },
    { name: 'Educación', href: '#education', icon: AcademicCapIcon },
    { name: 'Contacto', href: '#contact', icon: EnvelopeIcon },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50 bg-gradient-to-r from-accent-500 to-accent-300 origin-left"
        style={{ width: progressWidth }}
        aria-hidden="true"
      />

      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-accent-300"
              whileHover={{ ...navLinkHover, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              JSM
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    scrolled
                      ? 'text-slate-300 hover:text-accent-300'
                      : 'text-white hover:text-accent-200'
                  }`}
                  whileHover={navLinkHover}
                  whileTap={iconTap}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-slate-300 hover:bg-white/5'
                  : 'text-white hover:bg-white/5'
              }`}
              whileHover={iconHover}
              whileTap={iconTap}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-ink-900/95 backdrop-blur-xl border-l border-white/5 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    whileHover={iconHover}
                    whileTap={iconTap}
                  >
                    <XMarkIcon className="w-6 h-6 text-slate-300" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-accent-300 hover:bg-white/5 transition-all duration-300"
                      whileHover={{ x: 4 }}
                      whileTap={iconTap}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-mono text-sm font-medium uppercase tracking-wider">{item.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;