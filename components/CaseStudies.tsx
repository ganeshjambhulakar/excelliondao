'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, DollarSign, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    company: 'TechStart Inc.',
    industry: 'SaaS Platform',
    challenge: 'High credit card fees eating into margins',
    solution: 'Integrated ExcellionDao checkout for crypto payments',
    results: [
      { metric: '85%', label: 'Fee Reduction' },
      { metric: '$50K+', label: 'Annual Savings' },
      { metric: '2 Days', label: 'Integration Time' },
    ],
    quote: 'ExcellionDao transformed our payment economics. We now save thousands monthly while offering customers more payment options.',
    author: 'Sarah Chen, CTO',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'CryptoShop',
    industry: 'E-commerce',
    challenge: 'Need for instant settlement and global reach',
    solution: 'Deployed multi-chain payment system with instant settlement',
    results: [
      { metric: '100%', label: 'Instant Settlement' },
      { metric: '150+', label: 'Countries Served' },
      { metric: '3x', label: 'Conversion Rate' },
    ],
    quote: 'The instant settlement feature was a game-changer. Our cash flow improved dramatically, and we can now serve customers globally.',
    author: 'Michael Rodriguez, Founder',
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Digital Ventures',
    industry: 'NFT Marketplace',
    challenge: 'Subscription management complexity',
    solution: 'Implemented NFT-based subscription system',
    results: [
      { metric: '40%', label: 'Churn Reduction' },
      { metric: '2.5x', label: 'User Retention' },
      { metric: '0', label: 'Chargebacks' },
    ],
    quote: 'NFT subscriptions gave our users true ownership. They can transfer subscriptions, and we eliminated chargeback fraud completely.',
    author: 'Emily Watson, CEO',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Success Stories
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Real Results from <span className="gradient-text">Real Customers</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            See how businesses are transforming their payment infrastructure with ExcellionDao
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-primary-400 font-medium mb-1">{study.industry}</div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
              </div>

              <div className="mb-4">
                <div className="text-xs text-dark-500 mb-1">Challenge</div>
                <p className="text-dark-300 text-sm mb-3">{study.challenge}</p>
                <div className="text-xs text-dark-500 mb-1">Solution</div>
                <p className="text-dark-300 text-sm">{study.solution}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4 p-4 bg-dark-800 rounded-lg">
                {study.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-white mb-1">{result.metric}</div>
                    <div className="text-xs text-dark-500">{result.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-dark-700 pt-4">
                <p className="text-dark-300 text-sm italic mb-3">&quot;{study.quote}&quot;</p>
                <div className="text-xs text-dark-500">— {study.author}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Start Your Success Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

