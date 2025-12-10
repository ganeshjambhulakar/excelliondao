'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const internalLinks = [
  {
    text: 'NFT Subscription Platform',
    href: '/services#nft-subscriptions',
    description: 'Learn about our NFT subscription service',
  },
  {
    text: 'Crypto Payment Gateway',
    href: '/services#checkout',
    description: 'Accept cryptocurrency payments',
  },
  {
    text: 'Crypto Subscription Service',
    href: '/services#nft-subscriptions',
    description: 'Offer crypto subscriptions to customers',
  },
  {
    text: 'Cryptocurrency Payment Platform',
    href: '/services#payments',
    description: 'Complete crypto payment solution',
  },
];

export default function InternalLinks() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="relative container-custom">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Explore Our <span className="gradient-text">NFT Subscription & Crypto Payment</span> Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {internalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="glass-card glass-card-hover p-6 group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {link.text}
              </h3>
              <p className="text-dark-400 text-sm mb-4">{link.description}</p>
              <span className="inline-flex items-center gap-2 text-primary-400 text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

