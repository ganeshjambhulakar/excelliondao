'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is an NFT subscription and how does it work?',
    answer: 'An NFT subscription is a blockchain-based subscription model where users receive an NFT (Non-Fungible Token) that represents their subscription. This NFT subscription provides access to services and can be transferred, sold, or gifted. Our NFT subscription platform uses smart contracts to manage subscription NFTs, ensuring secure and verifiable subscription ownership. Unlike traditional subscriptions, NFT subscriptions give users true digital ownership.',
  },
  {
    question: 'How do I accept crypto payments on my website?',
    answer: 'Accepting crypto payments is easy with our crypto payment gateway. Simply integrate our elite-pass npm package, configure your crypto payment settings, and start accepting cryptocurrency payments. Our crypto payment platform supports Ethereum (ETH), Polygon (MATIC), and USDT. You can accept crypto payments for products, services, or crypto subscriptions. Integration takes less than a day.',
  },
  {
    question: 'What is the best NFT subscription platform?',
    answer: 'ExcellionDao is the leading NFT subscription platform, offering the most advanced NFT subscription service. Our platform enables businesses to create NFT subscriptions, manage subscription NFTs, and offer crypto subscriptions. We provide transferable NFT subscriptions, verifiable ownership, and support for multiple blockchain networks. Our NFT subscription platform is trusted by hundreds of businesses worldwide.',
  },
  {
    question: 'How do crypto subscriptions work?',
    answer: 'Crypto subscriptions allow customers to pay for recurring services using cryptocurrency. With our crypto subscription service, customers can subscribe using crypto payments, and you receive cryptocurrency payments automatically. Our crypto subscription platform supports various subscription models, including NFT-based subscriptions. Crypto subscriptions offer lower fees, instant settlement, and global reach compared to traditional payment methods.',
  },
  {
    question: 'What cryptocurrencies can I accept for payments?',
    answer: 'Our crypto payment gateway supports Ethereum (ETH), Polygon (MATIC), and USDT. You can accept crypto payments in ETH, MATIC, or USDT. Our crypto payment platform automatically handles conversions and settlements. We are actively working on adding support for additional cryptocurrencies based on market demand.',
  },
  {
    question: 'How secure are NFT subscriptions and crypto payments?',
    answer: 'NFT subscriptions and crypto payments on our platform are secured by smart contracts deployed on Ethereum and Polygon networks. We use multi-signature wallets, regular security audits, and follow OpenZeppelin security standards. All crypto payments and NFT subscription transactions are transparent and verifiable on the blockchain. Your funds are never held by us - they go directly to smart contracts.',
  },
  {
    question: 'Can I create NFT subscriptions for my business?',
    answer: 'Yes! Our NFT subscription platform makes it easy to create NFT subscriptions for your business. You can set up NFT subscriptions, define subscription tiers, and manage subscription NFTs through our dashboard. Our NFT subscription service includes tools for creating, updating, and tracking NFT subscriptions. Integration takes less than a day with our comprehensive documentation.',
  },
  {
    question: 'What are the fees for crypto payments and NFT subscriptions?',
    answer: 'Our crypto payment gateway fees are significantly lower than traditional payment processors. Starter plan: 2%, Pro plan: 1%, Enterprise plan: 0.5%. NFT subscription management fees are included in these plans. Plus, you save on blockchain transaction fees by using Layer 2 networks like Polygon. Crypto payments typically cost less than credit card processing fees.',
  },
  {
    question: 'How do I integrate NFT subscriptions and crypto payments?',
    answer: 'Integrating NFT subscriptions and crypto payments is straightforward. Sign up for an account, get your API keys, install our elite-pass npm package, and follow our integration guide. You can test NFT subscriptions and crypto payments in our sandbox environment before going live. Our documentation includes step-by-step tutorials for both NFT subscription setup and crypto payment integration.',
  },
  {
    question: 'What makes your NFT subscription platform different?',
    answer: 'Our NFT subscription platform offers true digital ownership, transferability, and verifiable subscription status. Unlike traditional subscriptions stored in databases, NFT subscriptions exist on the blockchain forever. Users can transfer, sell, or gift their NFT subscriptions. Our platform also supports crypto subscriptions, allowing customers to pay for subscriptions using cryptocurrency. This creates new revenue streams and reduces churn.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Find answers to common questions about our platform, security, and integration process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card glass-card-hover overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-dark-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            Contact our support team
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

