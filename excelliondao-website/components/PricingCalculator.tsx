'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Percent, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CREDIT_CARD_FEE = 2.9; // 2.9%
const WIRE_TRANSFER_FEE = 30; // Fixed $30
const EXCELLION_FEE_STARTER = 2.0; // 2%
const EXCELLION_FEE_PRO = 1.0; // 1%
const EXCELLION_FEE_ENTERPRISE = 0.5; // 0.5%

export default function PricingCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(50000);
  const [avgTransaction, setAvgTransaction] = useState(100);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'enterprise'>('pro');

  const calculations = useMemo(() => {
    const numTransactions = monthlyVolume / avgTransaction;
    
    // Credit card costs
    const creditCardCost = (monthlyVolume * CREDIT_CARD_FEE) / 100;
    
    // Wire transfer costs (assuming one transaction per day)
    const wireTransferCost = (monthlyVolume / avgTransaction) * WIRE_TRANSFER_FEE * 0.1;
    
    // ExcellionDao costs based on plan
    let excellionFee = EXCELLION_FEE_PRO;
    if (selectedPlan === 'starter') excellionFee = EXCELLION_FEE_STARTER;
    if (selectedPlan === 'enterprise') excellionFee = EXCELLION_FEE_ENTERPRISE;
    
    const excellionCost = (monthlyVolume * excellionFee) / 100;
    
    // Savings
    const savingsVsCreditCard = creditCardCost - excellionCost;
    const savingsPercentage = ((savingsVsCreditCard / creditCardCost) * 100).toFixed(1);
    const annualSavings = savingsVsCreditCard * 12;

    return {
      numTransactions: Math.round(numTransactions),
      creditCardCost,
      wireTransferCost,
      excellionCost,
      savingsVsCreditCard,
      savingsPercentage,
      annualSavings,
      excellionFee,
    };
  }, [monthlyVolume, avgTransaction, selectedPlan]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />

      <div className="relative container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Savings Calculator
          </span>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            See Your <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Calculate how much you can save by switching to ExcellionDao payments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Enter Your Details</h3>
            </div>

            {/* Monthly Volume Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-dark-300 text-sm">Monthly Transaction Volume</label>
                <span className="text-white font-semibold">{formatCurrency(monthlyVolume)}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="1000"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-dark-500 text-xs mt-1">
                <span>$1K</span>
                <span>$500K</span>
              </div>
            </div>

            {/* Average Transaction */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-dark-300 text-sm">Average Transaction Size</label>
                <span className="text-white font-semibold">{formatCurrency(avgTransaction)}</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={avgTransaction}
                onChange={(e) => setAvgTransaction(Number(e.target.value))}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-dark-500 text-xs mt-1">
                <span>$10</span>
                <span>$1,000</span>
              </div>
            </div>

            {/* Plan Selection */}
            <div>
              <label className="text-dark-300 text-sm mb-3 block">Select Your Plan</label>
              <div className="grid grid-cols-3 gap-2">
                {(['starter', 'pro', 'enterprise'] as const).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setSelectedPlan(plan)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedPlan === plan
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                    }`}
                  >
                    {plan.charAt(0).toUpperCase() + plan.slice(1)}
                    <span className="block text-xs mt-1 opacity-70">
                      {plan === 'starter' && '2%'}
                      {plan === 'pro' && '1%'}
                      {plan === 'enterprise' && '0.5%'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Your Savings</h3>
            </div>

            {/* Comparison */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 rounded-xl bg-dark-800">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-dark-500" />
                  <span className="text-dark-300">Credit Card ({CREDIT_CARD_FEE}%)</span>
                </div>
                <span className="text-red-400 font-semibold">
                  -{formatCurrency(calculations.creditCardCost)}/mo
                </span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
                <div className="flex items-center gap-3">
                  <Percent className="w-5 h-5 text-primary-400" />
                  <span className="text-white">ExcellionDao ({calculations.excellionFee}%)</span>
                </div>
                <span className="text-primary-400 font-semibold">
                  -{formatCurrency(calculations.excellionCost)}/mo
                </span>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
              <p className="text-emerald-300 text-sm mb-2">Monthly Savings</p>
              <p className="text-4xl font-bold text-white mb-1">
                {formatCurrency(calculations.savingsVsCreditCard)}
              </p>
              <p className="text-emerald-400 text-sm">
                {calculations.savingsPercentage}% less than credit cards
              </p>
            </div>

            {/* Annual Projection */}
            <div className="p-4 rounded-xl bg-dark-800 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-dark-400">Annual Savings</span>
                <span className="text-2xl font-bold text-white">
                  {formatCurrency(calculations.annualSavings)}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-primary w-full flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

