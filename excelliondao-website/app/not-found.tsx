'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg" />
      <div className="absolute inset-0 network-bg opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none gradient-text-animated">
            404
          </h1>
          
          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-dark-400 max-w-md mx-auto mb-8">
              Looks like this page got lost in the blockchain. 
              Let&apos;s get you back on track.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-primary flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-dark-800"
          >
            <p className="text-dark-500 text-sm mb-4">Or try these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'Services', 'Blog', 'Contact'].map((page) => (
                <Link
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

