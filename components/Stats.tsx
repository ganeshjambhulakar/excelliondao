'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Shield, Globe, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$2.5M+',
    label: 'Total Volume Processed',
    description: 'Secure transactions across all networks',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Active Merchants',
    description: 'Businesses using our platform',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable infrastructure',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    value: '50K+',
    label: 'Transactions',
    description: 'Successful payments processed',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Secure',
    description: 'Zero security breaches',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries',
    description: 'Global reach and support',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
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
            By The Numbers
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Real metrics from our production platform showing scale, reliability, and security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 text-center group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-dark-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

