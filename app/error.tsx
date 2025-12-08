'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          
          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-dark-400 max-w-md mx-auto mb-8">
            We encountered an unexpected error. Our team has been notified and is working on a fix.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="btn-primary flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link href="/" className="btn-secondary flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>

          {/* Error Details (dev only) */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-4 bg-dark-800/50 rounded-xl text-left max-w-lg mx-auto"
            >
              <p className="text-dark-500 text-xs mb-2">Error Details:</p>
              <code className="text-red-400 text-sm break-all">
                {error.message}
              </code>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}



