'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-dark-800" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-700 flex items-center justify-center overflow-hidden transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === 'dark' ? 0 : -30,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary-400" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          y: theme === 'light' ? 0 : 30,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-amber-400" />
      </motion.div>
    </motion.button>
  );
}



