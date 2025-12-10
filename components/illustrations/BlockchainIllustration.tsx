'use client';

import { motion } from 'framer-motion';

export default function BlockchainIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Glow circles */}
      <circle cx="200" cy="150" r="120" fill="url(#glow1)" />
      <circle cx="150" cy="100" r="80" fill="url(#glow2)" />

      {/* Connection lines */}
      <motion.path
        d="M100 150 L200 100 L300 150 L200 200 Z"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Central block */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <rect
          x="170"
          y="120"
          width="60"
          height="60"
          rx="8"
          fill="url(#blockGrad)"
          opacity="0.9"
        />
        <rect
          x="180"
          y="130"
          width="40"
          height="8"
          rx="2"
          fill="white"
          opacity="0.3"
        />
        <rect
          x="180"
          y="145"
          width="30"
          height="6"
          rx="2"
          fill="white"
          opacity="0.2"
        />
        <rect
          x="180"
          y="158"
          width="35"
          height="6"
          rx="2"
          fill="white"
          opacity="0.2"
        />
      </motion.g>

      {/* Node 1 - Top left */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      >
        <circle cx="100" cy="100" r="25" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
        <circle cx="100" cy="100" r="8" fill="#8B5CF6" />
      </motion.g>

      {/* Node 2 - Top right */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <circle cx="300" cy="100" r="25" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="300" cy="100" r="8" fill="#3B82F6" />
      </motion.g>

      {/* Node 3 - Bottom left */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <circle cx="100" cy="200" r="25" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
        <circle cx="100" cy="200" r="8" fill="#06B6D4" />
      </motion.g>

      {/* Node 4 - Bottom right */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <circle cx="300" cy="200" r="25" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
        <circle cx="300" cy="200" r="8" fill="#8B5CF6" />
      </motion.g>

      {/* Connection lines between nodes */}
      <motion.line
        x1="125" y1="100" x2="170" y2="130"
        stroke="url(#lineGrad)" strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line
        x1="275" y1="100" x2="230" y2="130"
        stroke="url(#lineGrad)" strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.line
        x1="125" y1="200" x2="170" y2="170"
        stroke="url(#lineGrad)" strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.line
        x1="275" y1="200" x2="230" y2="170"
        stroke="url(#lineGrad)" strokeWidth="2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={100 + Math.random() * 200}
          cy={80 + Math.random() * 140}
          r={2}
          fill="#8B5CF6"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </svg>
  );
}




