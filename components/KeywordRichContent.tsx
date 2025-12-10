'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function KeywordRichContent() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      
      <div className="relative container-custom">
        {/* NFT Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-responsive-md font-bold text-white mb-6 text-center">
            Best <span className="gradient-text">NFT Subscription</span> Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                ExcellionDao offers the most advanced <strong className="text-white">NFT subscription</strong> platform 
                in the market. Our <strong className="text-white">NFT subscription service</strong> enables businesses to 
                create transferable, verifiable subscription tokens using blockchain technology.
              </p>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                With our <strong className="text-white">NFT subscription platform</strong>, users own their subscriptions 
                as NFTs, allowing them to transfer, sell, or gift their subscription access. This revolutionary approach 
                to <strong className="text-white">subscription management</strong> provides true digital ownership.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Transferable NFT subscriptions',
                  'Verifiable subscription ownership',
                  'Secondary market for subscriptions',
                  'Smart contract-powered security',
                  'Multi-chain NFT subscription support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-dark-300">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services#nft-subscriptions" className="btn-primary inline-flex items-center gap-2">
                Learn More About NFT Subscriptions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our NFT Subscription Platform?</h3>
              <p className="text-dark-300 mb-6">
                Our <strong className="text-white">NFT subscription</strong> solution is the leading choice for businesses 
                looking to revolutionize their subscription model. Unlike traditional subscriptions stored in databases, 
                our <strong className="text-white">NFT-based subscriptions</strong> provide:
              </p>
              <ul className="space-y-3">
                {[
                  'True ownership for customers',
                  'Reduced churn through transferability',
                  'New revenue streams via secondary markets',
                  'Transparent and verifiable subscription status',
                  'Integration with existing payment systems',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-dark-300">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Crypto Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-responsive-md font-bold text-white mb-6 text-center">
            Leading <span className="gradient-text">Crypto Payment</span> Gateway
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass-card p-8 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">Accept Cryptocurrency Payments</h3>
              <p className="text-dark-300 mb-6">
                ExcellionDao is the premier <strong className="text-white">crypto payment gateway</strong> for businesses 
                worldwide. Accept <strong className="text-white">cryptocurrency payments</strong> in Ethereum (ETH), 
                Polygon (MATIC), and USDT on Ethereum and Polygon networks.
              </p>
              <ul className="space-y-3">
                {[
                  'Accept crypto payments instantly',
                  'Support for ETH, MATIC, and USDT',
                  'Lower fees than credit cards',
                  'Global payment acceptance',
                  'Instant settlement',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-dark-300">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                Our <strong className="text-white">crypto payment</strong> platform enables businesses to accept 
                <strong className="text-white"> cryptocurrency payments</strong> seamlessly. Whether you&apos;re selling 
                products, services, or managing <strong className="text-white">subscriptions</strong>, our 
                <strong className="text-white"> crypto payment gateway</strong> makes it easy.
              </p>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                Process <strong className="text-white">crypto payments</strong> with lower fees than traditional 
                payment methods. Our <strong className="text-white">cryptocurrency payment</strong> system supports 
                instant settlement, global reach, and secure blockchain transactions.
              </p>
              <Link href="/services#checkout" className="btn-primary inline-flex items-center gap-2">
                Start Accepting Crypto Payments
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Subscription Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-responsive-md font-bold text-white mb-6 text-center">
            Advanced <span className="gradient-text">Subscription Management</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'NFT Subscription Management',
                description: 'Manage NFT subscriptions with our advanced platform. Create, update, and track subscription NFTs with ease.',
                keywords: ['NFT subscription', 'subscription management', 'NFT subscriptions'],
              },
              {
                title: 'Crypto Subscription Service',
                description: 'Offer crypto subscriptions to your customers. Accept cryptocurrency payments for recurring subscriptions.',
                keywords: ['crypto subscription', 'cryptocurrency subscription', 'crypto subscriptions'],
              },
              {
                title: 'Blockchain Subscription Platform',
                description: 'Leverage blockchain technology for subscription services. Secure, transparent, and verifiable subscriptions.',
                keywords: ['blockchain subscription', 'subscription platform', 'blockchain subscriptions'],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-dark-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary-500/20 text-primary-300 rounded border border-primary-500/30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

