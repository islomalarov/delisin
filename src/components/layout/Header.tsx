'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#xizmatlar', text: 'Xizmatlar' },
    { href: '#qanday-ishlaydi', text: 'Qanday ishlaydi' },
    { href: '#biz-haqimizda', text: 'Biz haqimizda' },
    { href: '#vakansiyalar', text: 'Vakansiyalar' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 py-5 flex justify-between items-center border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">DE LI SIN</h1>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors">
              {link.text}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-5 rounded-lg">
            Bog'lanish
          </motion.a>
          <AnimatedThemeToggler />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <AnimatedThemeToggler />
          <button onClick={() => setIsMenuOpen(true)} className="text-foreground">
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-xs bg-background z-50 p-6 shadow-lg">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold">Menyu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  {link.text}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg text-center">
                Bog'lanish
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
