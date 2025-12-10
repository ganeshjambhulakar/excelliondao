'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const supportedChains = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '🔷',
    color: 'from-blue-500 to-blue-600',
    description: 'The world\'s most secure blockchain',
    status: 'active',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '🟣',
    color: 'from-purple-500 to-violet-600',
    description: 'Low-cost Layer 2 scaling solution',
    status: 'active',
  },
  {
    name: 'BNB Chain',
    symbol: 'BNB',
    icon: '🟡',
    color: 'from-yellow-500 to-orange-500',
    description: 'Fast and low-cost transactions',
    status: 'active',
  },
  {
    name: 'Arbitrum',
    symbol: 'ARB',
    icon: '🔵',
    color: 'from-cyan-500 to-blue-500',
    description: 'Ethereum Layer 2 with low fees',
    status: 'active',
  },
  {
    name: 'Optimism',
    symbol: 'OP',
    icon: '🔴',
    color: 'from-red-500 to-pink-500',
    description: 'Optimistic rollup for Ethereum',
    status: 'active',
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: '🔺',
    color: 'from-red-600 to-orange-500',
    description: 'High throughput blockchain',
    status: 'active',
  },
  {
    name: 'Base',
    symbol: 'BASE',
    icon: '🔷',
    color: 'from-blue-400 to-cyan-500',
    description: 'Coinbase\'s Layer 2 network',
    status: 'active',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    icon: '🟢',
    color: 'from-green-500 to-emerald-500',
    description: 'Ultra-fast blockchain network',
    status: 'active',
  },
];

export default function SupportedChains() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Multi-Chain Support
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Supported <span className="gradient-text">Blockchains</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Deploy and accept payments on all major public blockchains. Choose the network that best fits your needs, 
            whether you prioritize low fees, high speed, or maximum security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportedChains.map((chain, index) => (
            <motion.div
              key={chain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Status Badge */}
              {chain.status === 'active' && (
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              )}

              {/* Chain Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${chain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{chain.icon}</span>
              </div>

              {/* Chain Info */}
              <h3 className="text-lg font-semibold text-white mb-1">{chain.name}</h3>
              <p className="text-sm text-primary-400 mb-3 font-mono">{chain.symbol}</p>
              <p className="text-dark-400 text-sm leading-relaxed">{chain.description}</p>

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-dark-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-dark-400">Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">
            We support all EVM-compatible chains and are continuously adding support for new networks.
          </p>
          <p className="text-sm text-dark-500">
            Need a specific chain? <a href="/contact" className="text-primary-400 hover:text-primary-300 transition-colors">Contact us</a> to request support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

