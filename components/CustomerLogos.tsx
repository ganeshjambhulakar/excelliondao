'use client';

import { motion } from 'framer-motion';

const customers = [
  { name: 'TechStart Inc.', logo: 'TS' },
  { name: 'CryptoShop', logo: 'CS' },
  { name: 'Digital Ventures', logo: 'DV' },
  { name: 'Blockchain Solutions', logo: 'BS' },
  { name: 'Web3 Commerce', logo: 'W3' },
  { name: 'CryptoPay', logo: 'CP' },
  { name: 'NFT Marketplace', logo: 'NM' },
  { name: 'DeFi Platform', logo: 'DF' },
];

export default function CustomerLogos() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Powering <span className="gradient-text">Leading Businesses</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Join hundreds of companies already using ExcellionDao for their payment needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="glass-card glass-card-hover p-6 w-full h-24 flex items-center justify-center group">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {customer.logo}
                  </div>
                  <div className="text-xs text-dark-500 group-hover:text-dark-400 transition-colors">
                    {customer.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

