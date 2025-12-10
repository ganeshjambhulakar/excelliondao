'use client';

import { motion } from 'framer-motion';
import { Eye, FileText, Code, Shield, ExternalLink, CheckCircle, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const transparencyItems = [
  {
    icon: Code,
    title: 'Open Source Smart Contracts',
    description: 'All our smart contracts are open source and verified on Etherscan. Review our code and verify our security.',
    link: '#',
    linkText: 'View on Etherscan',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Regular security audits by leading blockchain security firms. All audit reports are publicly available.',
    link: '#',
    linkText: 'View Audit Reports',
  },
  {
    icon: Eye,
    title: 'Transparent Operations',
    description: 'All transactions are publicly verifiable on the blockchain. No hidden fees or opaque processes.',
    link: '#',
    linkText: 'Learn More',
  },
  {
    icon: FileText,
    title: 'Public Documentation',
    description: 'Complete technical documentation, API references, and integration guides available to everyone.',
    link: '#',
    linkText: 'Browse Docs',
  },
];

const contractAddresses = [
  { 
    network: 'Ethereum', 
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', 
    verified: true,
    explorer: 'https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    color: 'from-blue-500 to-indigo-600',
    shortName: 'ETH'
  },
  { 
    network: 'Polygon', 
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', 
    verified: true,
    explorer: 'https://polygonscan.com/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    color: 'from-purple-500 to-violet-600',
    shortName: 'MATIC'
  },
];

const formatAddress = (address: string) => {
  if (!address) return '';
  if (address.length <= 14) return address;
  // Show first 8 and last 6 characters for better readability
  return `${address.slice(0, 8)}...${address.slice(-6)}`;
};

export default function SecurityTransparency() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (address: string, index: number) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Transparency
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Built on <span className="gradient-text">Trust & Transparency</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            We believe in complete transparency. Everything is verifiable, auditable, and open for inspection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {transparencyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    {item.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Addresses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glass-card-hover p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Verified Smart Contract Addresses</h3>
              <p className="text-dark-400 text-sm mt-1">All contracts are verified and publicly auditable</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {contractAddresses.map((contract, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-primary-500/30 transition-all"
              >
                {/* Network Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contract.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <span className="text-white font-bold text-base">{contract.shortName}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-lg mb-1">{contract.network}</div>
                    {contract.verified && (
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-emerald-400 font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address Display */}
                <div className="mb-5 p-4 bg-dark-800/60 rounded-xl border border-dark-700">
                  <div className="text-dark-400 text-xs mb-3 font-medium uppercase tracking-wider">Contract Address</div>
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Full address - visible on desktop with better formatting */}
                      <code className="text-white text-sm md:text-base font-mono block break-words leading-relaxed select-all hidden sm:block word-break-break-all">
                        {contract.address}
                      </code>
                      {/* Truncated address - visible on mobile */}
                      <code className="text-white text-sm font-mono block break-all leading-relaxed select-all sm:hidden">
                        {formatAddress(contract.address)}
                      </code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(contract.address, index)}
                      className="p-2.5 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-400 hover:text-primary-400 transition-all flex-shrink-0 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center border border-dark-600 hover:border-primary-500/30"
                      aria-label="Copy address"
                      title="Copy full address"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Explorer Link */}
                <Link
                  href={contract.explorer || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-dark-700 to-dark-800 hover:from-primary-500/10 hover:to-accent-500/10 text-dark-300 hover:text-primary-400 border border-dark-600 hover:border-primary-500/30 transition-all text-sm font-medium touch-manipulation"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on Explorer</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

