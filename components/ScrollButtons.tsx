'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useChat } from './contexts/ChatContext';

export default function ScrollButtons() {
  const { isChatOpen } = useChat();
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = documentHeight - (scrollTop + windowHeight);

      // Show scroll up button when scrolled down more than 300px
      setShowScrollUp(scrollTop > 300);

      // Show scroll down button when near top (within 200px) and not at bottom
      const isNearTop = scrollTop < 200;
      const isNotAtBottom = scrollBottom > 100;
      setShowScrollDown(isNearTop && isNotAtBottom);

      // Check if at bottom (within 50px)
      setIsAtBottom(scrollBottom < 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Hide scroll buttons when chat is open
  if (isChatOpen) return null;

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Bottom Button */}
      <AnimatePresence>
        {showScrollDown && !isAtBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToBottom}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 shadow-lg hover:shadow-xl hover:shadow-accent-500/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

