'use client';

import { motion } from 'framer-motion';
import { Blocks, CreditCard, Wallet, Car, UtensilsCrossed, Store, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'NFT Subscription Platform',
    description: 'Best NFT subscription service using blockchain technology. Create transferable NFT subscriptions, manage subscription NFTs, and offer crypto subscriptions to customers.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: CreditCard,
    title: 'Crypto Payment Gateway',
    description: 'Leading crypto payment gateway for accepting cryptocurrency payments. Process crypto payments, accept crypto subscriptions, and handle crypto transactions securely.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Secure & Trustless',
    description: 'Smart contract-powered transactions with full transparency. No intermediaries, just pure blockchain security.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with Layer 2 solutions. Process thousands of transactions per second with minimal fees.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Accept payments from anywhere in the world. No borders, no currency conversion hassles.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Wallet,
    title: 'Multi-Chain Support',
    description: 'Deploy on Ethereum, Polygon, BNB Chain, Arbitrum, Optimism, Avalanche, Base, Solana, and all major public blockchains.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const futureFeatures = [
  { icon: Car, title: 'Ride-Hailing Payments', description: 'Coming Soon' },
  { icon: UtensilsCrossed, title: 'Food Delivery', description: 'Coming Soon' },
  { icon: Store, title: 'E-commerce Integration', description: 'Coming Soon' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Solutions
          </span>
          <h2 className="text-responsive-lg font-bold text-white mb-4">
            NFT Subscription & <span className="gradient-text">Crypto Payment</span> Solutions
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Complete NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments, 
            manage NFT subscriptions, and process crypto transactions with our secure blockchain payment solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-dark-400">Expanding crypto payments to every industry</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {futureFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700"
              >
                <feature.icon className="w-5 h-5 text-primary-400" />
                <span className="text-white font-medium">{feature.title}</span>
                <span className="text-xs text-dark-500 bg-dark-700 px-2 py-0.5 rounded-full">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

