'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ExcellionDao transformed how we handle subscriptions. The NFT-based system gives our users real ownership.",
    author: "Sarah Chen",
    role: "CTO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=47",
    company: "TechStart Inc.",
    companyLogo: "TS",
    rating: 5,
  },
  {
    quote: "Integration was seamless. We went from zero to accepting crypto payments in less than a day.",
    author: "Michael Rodriguez",
    role: "Founder, CryptoShop",
    avatar: "https://i.pravatar.cc/150?img=12",
    company: "CryptoShop",
    companyLogo: "CS",
    rating: 5,
  },
  {
    quote: "The transparency and security of smart contracts give our customers confidence in every transaction.",
    author: "Emily Watson",
    role: "CEO, Digital Ventures",
    avatar: "https://i.pravatar.cc/150?img=9",
    company: "Digital Ventures",
    companyLogo: "DV",
    rating: 5,
  },
];

const partners = [
  { name: "Ethereum", logo: "ETH" },
  { name: "Polygon", logo: "MATIC" },
  { name: "Chainlink", logo: "LINK" },
  { name: "OpenZeppelin", logo: "OZ" },
  { name: "Hardhat", logo: "HH" },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            See what builders and businesses are saying about ExcellionDao
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark-300 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-dark-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                {testimonial.companyLogo && (
                  <div className="w-12 h-12 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-400">{testimonial.companyLogo}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-dark-500 text-sm mb-8">
            Built with industry-leading technologies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-lg bg-dark-800/50 border border-dark-700 text-dark-400 hover:text-white hover:border-primary-500/30 transition-all"
              >
                <span className="font-mono font-bold">{partner.logo}</span>
                <span className="ml-2 text-sm">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

