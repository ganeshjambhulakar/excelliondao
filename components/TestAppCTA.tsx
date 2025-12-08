'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, ArrowRight } from 'lucide-react';

export default function TestAppCTA() {
  return (
    <section className="py-20 bg-dark-900 border-y border-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                For Developers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build & Test in <span className="gradient-text">Sandbox Mode</span>
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                Don&apos;t test in production. Use our dedicated Test App environment to integrate 
                the elite-pass npm package, verify webhooks, and simulate transactions 
                without spending real crypto.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Launch Test App
                </Link>
                <Link href="#" className="btn-secondary flex items-center gap-2">
                  Read Docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-1 rounded-xl border border-dark-700 bg-dark-950/50 shadow-2xl"
            >
              <div className="bg-dark-950 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-800 bg-dark-900">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  <div className="ml-2 text-xs text-dark-500 font-mono">test-env — bash</div>
                </div>
                <div className="p-6 font-mono text-sm text-dark-300">
                  <div className="flex gap-2 mb-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/project</span>
                    <span>npm install elite-pass</span>
                  </div>
                  <div className="text-dark-500 mb-4">
                    added 1 package in 2s
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/project</span>
                    <span>elite-pass init --mode=sandbox</span>
                  </div>
                  <div className="text-dark-500 mb-4">
                    Initialized sandbox environment.<br/>
                    Test API Key: <span className="text-yellow-400">pk_test_8f92...</span><br/>
                    Webhook Secret: <span className="text-yellow-400">wh_test_9a21...</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/project</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

