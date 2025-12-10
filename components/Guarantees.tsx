'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, HeadphonesIcon, CheckCircle2 } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Your funds are protected by smart contracts. We never hold your money.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: '99.9% Uptime SLA',
    description: 'Guaranteed uptime with 24/7 monitoring and instant failover.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock support with average response time under 4 hours.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CheckCircle2,
    title: 'Money-Back Guarantee',
    description: 'If we fail to deliver, we\'ll refund your fees. No questions asked.',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Guarantees() {
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
            Our Guarantees
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Your Success is Our <span className="gradient-text">Commitment</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            We stand behind our platform with concrete guarantees and commitments to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 text-center group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${guarantee.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{guarantee.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

