'use client';

import { motion } from 'framer-motion';

export default function PaymentIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Credit Card */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <rect
          x="50"
          y="80"
          width="160"
          height="100"
          rx="12"
          fill="url(#cardGrad)"
        />
        <rect x="65" y="100" width="50" height="8" rx="4" fill="white" opacity="0.3" />
        <rect x="65" y="115" width="80" height="6" rx="3" fill="white" opacity="0.2" />
        <rect x="65" y="150" width="40" height="15" rx="4" fill="#1E293B" />
        
        {/* Card chip */}
        <rect x="70" y="152" width="12" height="10" rx="2" fill="#D4AF37" />
        <line x1="76" y1="152" x2="76" y2="162" stroke="#B8960F" strokeWidth="0.5" />
        <line x1="70" y1="157" x2="82" y2="157" stroke="#B8960F" strokeWidth="0.5" />
      </motion.g>

      {/* Arrow */}
      <motion.g
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path
          d="M220 130 L250 130 L250 120 L280 135 L250 150 L250 140 L220 140 Z"
          fill="#8B5CF6"
          opacity="0.8"
        />
      </motion.g>

      {/* Crypto coins stack */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* ETH coin */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ellipse cx="320" cy="100" rx="35" ry="20" fill="#627EEA" />
          <ellipse cx="320" cy="95" rx="35" ry="20" fill="#849DFF" />
          <text x="320" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            ETH
          </text>
        </motion.g>

        {/* USDT coin */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          <ellipse cx="320" cy="140" rx="35" ry="20" fill="#26A17B" />
          <ellipse cx="320" cy="135" rx="35" ry="20" fill="#50D9A0" />
          <text x="320" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            USDT
          </text>
        </motion.g>

        {/* MATIC coin */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        >
          <ellipse cx="320" cy="180" rx="35" ry="20" fill="#8247E5" />
          <ellipse cx="320" cy="175" rx="35" ry="20" fill="#A67EF5" />
          <text x="320" y="180" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            MATIC
          </text>
        </motion.g>
      </motion.g>

      {/* Success checkmark */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <circle cx="200" cy="220" r="25" fill="#10B981" />
        <motion.path
          d="M188 220 L196 228 L212 212"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.g>

      {/* Sparkles */}
      {[
        { x: 150, y: 60 },
        { x: 280, y: 70 },
        { x: 100, y: 200 },
        { x: 350, y: 210 },
      ].map((pos, i) => (
        <motion.g
          key={i}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        >
          <path
            d={`M${pos.x} ${pos.y - 6} L${pos.x} ${pos.y + 6} M${pos.x - 6} ${pos.y} L${pos.x + 6} ${pos.y}`}
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </svg>
  );
}




