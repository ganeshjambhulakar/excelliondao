'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, Award, FileCheck, Bug } from 'lucide-react';
import Link from 'next/link';

const badges = [
  {
    icon: Shield,
    title: 'Smart Contract Audited',
    description: 'Verified by leading security firms',
    status: 'Verified',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Lock,
    title: 'Multi-Signature Wallets',
    description: 'Enhanced security for all funds',
    status: 'Active',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'OpenZeppelin Standards',
    description: 'Built on battle-tested libraries',
    status: 'Compliant',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileCheck,
    title: 'Code Verified',
    description: 'All contracts verified on Etherscan',
    status: 'Verified',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Bug,
    title: 'Bug Bounty Program',
    description: 'Active security testing program',
    status: 'Active',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: CheckCircle,
    title: 'GDPR Compliant',
    description: 'Privacy-first approach',
    status: 'Compliant',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function TrustBadges() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      
      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Security & Trust
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Enterprise-Grade <span className="gradient-text">Security</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Your security is our top priority. We follow industry best practices and undergo regular security audits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{badge.title}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                      {badge.status}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm">{badge.description}</p>
                </div>
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
            href="/about"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            Learn more about our security practices
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

