'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Twitter, MessageCircle, Github, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'connect@excelliondao.com',
    description: 'We usually respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Decentralized & Global',
    description: 'Remote-first organization',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    description: 'For business inquiries',
  },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/excelliondao', color: 'hover:bg-blue-500/20 hover:text-blue-400' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/excelliondao', color: 'hover:bg-indigo-500/20 hover:text-indigo-400' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/excelliondao', color: 'hover:bg-gray-500/20 hover:text-gray-300' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/excelliondao', color: 'hover:bg-blue-600/20 hover:text-blue-500' },
];

const faqs = [
  {
    question: 'What blockchains do you support?',
    answer: 'We currently support Ethereum and Polygon networks. We are actively working on adding support for more chains including Arbitrum, Optimism, and BSC.',
  },
  {
    question: 'How long does integration take?',
    answer: 'Most developers can integrate our elite-pass npm package in less than a day. Our comprehensive documentation and support team are here to help if you encounter any issues.',
  },
  {
    question: 'What are your transaction fees?',
    answer: 'Our fees vary by plan: 2% for Starter (free tier), 1% for Pro, and 0.5% for Enterprise. All plans include no monthly minimums.',
  },
  {
    question: 'Do you support fiat on-ramps?',
    answer: 'Fiat on-ramp support is coming soon. We are partnering with leading providers to allow users to purchase crypto directly within the checkout flow.',
  },
  {
    question: 'Is there a sandbox environment?',
    answer: 'Yes! We provide full testnet support so you can develop and test your integration without using real funds. Simply use our test API keys.',
  },
  {
    question: 'How do refunds work?',
    answer: 'Refunds can be initiated through our dashboard or API. Funds are sent back to the original wallet address. Smart contract-based refunds ensure trustless processing.',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Contact Us
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-responsive-xl font-bold text-white mb-6"
          >
            Let&apos;s Build
            <br />
            <span className="gradient-text">Together</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            Have questions about our services? Want to explore partnership opportunities?
            We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-16 z-10 px-6">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-primary-400 font-medium mb-1">{info.value}</p>
                <p className="text-dark-500 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex items-center gap-2 w-full md:w-auto justify-center"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="spinner w-5 h-5 border-2" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 text-sm"
                  >
                    Thank you for your message! We&apos;ll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                <p className="text-dark-400 text-sm mb-6">
                  Follow us on social media for updates, news, and community discussions.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-800 text-dark-400 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2">
                      📚 Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2">
                      🔧 API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2">
                      💬 Discord Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2">
                      📝 Blog
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding relative">
        <div className="absolute inset-0 bg-dark-950" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact us directly.
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
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark-500 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-dark-400">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="glass-card overflow-hidden">
            <div className="h-64 md:h-96 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center relative">
              <div className="absolute inset-0 network-bg opacity-30" />
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Decentralized & Global</h3>
                <p className="text-dark-400">
                  We&apos;re a remote-first team working across the globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

