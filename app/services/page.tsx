'use client';

import { motion } from 'framer-motion';
import { Blocks, CreditCard, Wallet, Car, UtensilsCrossed, Store, Check, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'nft-subscriptions',
    icon: Blocks,
    title: 'NFT Subscription Management',
    subtitle: 'Revolutionary subscription ownership',
    description: 'Transform your subscription model with NFT-based ownership. Users truly own their subscriptions and can transfer, sell, or gift them.',
    color: 'from-purple-500 to-violet-600',
    features: [
      'True ownership via ERC-721 tokens',
      'Transferable subscriptions',
      'Automatic renewal options',
      'Multi-tier subscription plans',
      'Royalty on secondary sales',
      'On-chain verification',
    ],
    benefits: [
      { title: 'Increase Revenue', description: 'Earn royalties on subscription resales' },
      { title: 'Reduce Churn', description: 'Transferable subs = retained value' },
      { title: 'Build Loyalty', description: 'Exclusive NFT perks for subscribers' },
    ],
  },
  {
    id: 'checkout',
    icon: CreditCard,
    title: 'Blockchain Checkout System',
    subtitle: 'One-click crypto payments',
    description: 'Seamlessly accept cryptocurrency payments on any e-commerce platform. Simple integration, instant settlement, and zero chargebacks.',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Multi-currency support (ETH, USDT, MATIC)',
      'One-click checkout widget',
      'Real-time price conversion',
      'Instant settlement to your wallet',
      'Zero chargeback risk',
      'Comprehensive order management',
    ],
    benefits: [
      { title: 'Lower Fees', description: 'Save 2-3% vs traditional processors' },
      { title: 'Global Reach', description: 'Accept payments from anywhere' },
      { title: 'Instant Access', description: 'No waiting for settlements' },
    ],
  },
  {
    id: 'payments',
    icon: Wallet,
    title: 'Crypto Payment Gateway',
    subtitle: 'Enterprise payment infrastructure',
    description: 'Full-featured payment gateway for businesses of all sizes. Simple REST APIs, webhooks, and the elite-pass npm package for seamless integration.',
    color: 'from-emerald-500 to-teal-500',
    features: [
      'RESTful API & webhooks',
      'elite-pass npm package integration',
      'React, Next.js, Angular, React Native & Flux examples',
      'Payment links & invoices',
      'Recurring payments',
      'Multi-sig wallet support',
      'Fiat on/off ramp (coming soon)',
    ],
    benefits: [
      { title: 'Developer First', description: 'Comprehensive docs & elite-pass guides' },
      { title: 'Scalable', description: 'Handle millions of transactions' },
      { title: 'Customizable', description: 'White-label solutions available' },
    ],
  },
];

const futureServices = [
  {
    icon: Car,
    title: 'Ride-Hailing Payments',
    description: 'Pay for your rides with crypto. Instant, secure, and global.',
    status: 'Coming Q3 2025',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Delivery Integration',
    description: 'Order food and pay in cryptocurrency. Partnerships in progress.',
    status: 'Coming Q4 2025',
  },
  {
    icon: Store,
    title: 'E-commerce Plugins',
    description: 'One-click plugins for Shopify, WooCommerce, and more.',
    status: 'Coming Q2 2025',
  },
];

const integrationSteps = [
  {
    step: 1,
    title: 'Create Account',
    description: 'Sign up and get your API keys in minutes',
  },
  {
    step: 2,
    title: 'Install elite-pass',
    description: 'Install the elite-pass npm package in your app with a single command',
  },
  {
    step: 3,
    title: 'Configure',
    description: 'Set up your payment preferences and wallet',
  },
  {
    step: 4,
    title: 'Go Live',
    description: 'Start accepting crypto payments instantly',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute inset-0 network-bg opacity-30" />
        
        <div className="relative container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-responsive-xl font-bold text-white mb-6"
          >
            Blockchain Payment
            <br />
            <span className="gradient-text">Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            From NFT subscriptions to enterprise payment gateways, we provide 
            everything you need to embrace blockchain payments with the elite-pass npm package.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-dark-900' : 'bg-dark-950'}`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <span className="text-primary-400 text-sm font-medium">{service.subtitle}</span>
                <h2 className="text-responsive-md font-bold text-white mt-2 mb-4">{service.title}</h2>
                <p className="text-dark-400 mb-8">{service.description}</p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-dark-300">
                      <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`glass-card p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 opacity-80`}>
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{benefit.title}</h4>
                        <p className="text-dark-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Future Services */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Coming Soon
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Future <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              Expanding crypto payments to every industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {futureServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-bl-lg">
                  {service.status}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center mb-4 group-hover:bg-primary-500/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-dark-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Stacks */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Technology
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Supported <span className="gradient-text">Tech Stacks</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              Our elite-pass npm package is framework-agnostic and works seamlessly with your favorite tools.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Angular', 'React Native', 'Flux', 'Vue', 'Svelte', 'Node.js'].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 text-white font-medium transition-all"
              >
                {stack}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test App Callout */}
      <section className="py-12 bg-dark-900 border-y border-dark-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Development Environment</h3>
              <p className="text-dark-400 max-w-2xl">
                Use our Test App option to integrate and QA your implementation without touching production funds. 
                Perfect for developers building with React, Next.js, Angular, React Native, or Flux.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-secondary whitespace-nowrap"
            >
              Request Test Access
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Integration
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              Get up and running in minutes with our simple integration process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < integrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
                
                <div className="glass-card p-6 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-dark-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-card overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-dark-500 text-sm ml-2">Integration Example</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-dark-300">
{`import { elitePass } from '@excelliondao/elite-pass';

const checkout = new elitePass({
  apiKey: 'your-api-key',
  network: 'polygon'
});

// Create a payment
const payment = await checkout.createPayment({
  amount: 99.99,
  currency: 'USD',
  cryptoCurrency: 'USDT',
  description: 'Premium Subscription'
});

// Handle payment success
payment.on('success', (txHash) => {
  console.log('Payment confirmed:', txHash);
});`}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Pricing - Removed */}

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
            
            <div className="relative">
              <h2 className="text-responsive-md font-bold text-white mb-4">
                Ready to Get <span className="gradient-text">Started?</span>
              </h2>
              <p className="text-dark-400 max-w-xl mx-auto mb-8">
                Join hundreds of businesses already using ExcellionDao for blockchain payments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Sales
                </Link>
                <a href="#" className="btn-secondary flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  View Documentation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

