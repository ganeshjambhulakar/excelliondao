'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, AlertCircle, Bug, HelpCircle, CreditCard, Shield, Code, ChevronDown } from 'lucide-react';
import { useChat } from './contexts/ChatContext';

const issueCategories = [
  { 
    id: 'technical', 
    label: "Something's Not Working", 
    description: "Having trouble with features or functionality",
    icon: Code, 
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    id: 'payment', 
    label: 'Payment Issue', 
    description: "Problems with crypto payments or transactions",
    icon: CreditCard, 
    color: 'from-green-500 to-emerald-500' 
  },
  { 
    id: 'security', 
    label: 'Security Question', 
    description: "Questions about safety or security",
    icon: Shield, 
    color: 'from-red-500 to-rose-500' 
  },
  { 
    id: 'bug', 
    label: "Found a Problem", 
    description: "Something isn't working as expected",
    icon: Bug, 
    color: 'from-orange-500 to-amber-500' 
  },
  { 
    id: 'general', 
    label: 'General Question', 
    description: "Any other questions or inquiries",
    icon: HelpCircle, 
    color: 'from-purple-500 to-pink-500' 
  },
];

interface FormData {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export default function ChatBot() {
  const { isChatOpen, setIsChatOpen } = useChat();
  const [showCategorySelection, setShowCategorySelection] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    priority: 'medium',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    setFormData(prev => ({ ...prev, category: categoryId }));
    setShowCategorySelection(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validate form
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      setStatus('error');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[${formData.category.toUpperCase()}] ${formData.subject || 'Issue Report'}`,
          message: `Priority: ${formData.priority}\n\nCategory: ${formData.category}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          category: '',
          subject: '',
          message: '',
          priority: 'medium',
        });
        setShowCategorySelection(true);
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          setIsChatOpen(false);
          setStatus('idle');
        }, 3000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to submit. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleBack = () => {
    setShowCategorySelection(true);
    setFormData(prev => ({ ...prev, category: '' }));
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <motion.button
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 text-white transition-all duration-300 hover:scale-105 active:scale-95 group touch-manipulation"
              aria-label="Need help? Click to contact support"
              title="Need help? Click to contact our support team"
            >
              <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-xs sm:text-sm hidden xs:inline">Need Help?</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-dark-950 animate-pulse" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 left-0 sm:bottom-6 sm:right-6 sm:left-auto sm:w-[400px] z-50 w-full sm:w-[400px] max-w-full sm:max-w-[calc(100vw-3rem)] max-h-[85vh] sm:max-h-[600px] bg-dark-900 border-0 sm:border border-dark-700 sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Get Help</h3>
                  <p className="text-white/80 text-xs">Tell us what you need and we&apos;ll assist you</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsChatOpen(false);
                  setStatus('idle');
                  setShowCategorySelection(true);
                  setErrorMessage('');
                }}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {showCategorySelection ? (
                <div>
                  {/* Welcome Message */}
                  <div className="mb-6 p-4 rounded-lg bg-primary-500/10 border border-primary-500/20">
                    <p className="text-white font-medium mb-1">Hi! How can we help you today?</p>
                    <p className="text-dark-400 text-xs">Choose a category below to get started. This will help us assist you faster.</p>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-semibold flex items-center justify-center">1</div>
                      <span className="text-dark-400 text-xs">Choose a category</span>
                    </div>
                    <div className="flex-1 h-px bg-dark-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-dark-700 text-dark-500 text-xs font-semibold flex items-center justify-center">2</div>
                      <span className="text-dark-500 text-xs">Fill details</span>
                    </div>
                  </div>

                  <p className="text-dark-300 text-sm mb-4 font-medium">What do you need help with?</p>
                  <div className="space-y-2">
                    {issueCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.id)}
                          className="w-full p-4 rounded-lg bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-800/80 transition-all text-left group"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium text-sm mb-1">{category.label}</div>
                              <div className="text-dark-400 text-xs">{category.description}</div>
                            </div>
                            <ChevronDown className="w-4 h-4 text-dark-500 group-hover:text-primary-400 transition-colors rotate-[-90deg] flex-shrink-0 mt-1" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Step Indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-semibold flex items-center justify-center">1</div>
                      <span className="text-dark-500 text-xs line-through">Choose category</span>
                    </div>
                    <div className="flex-1 h-px bg-dark-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-semibold flex items-center justify-center">2</div>
                      <span className="text-dark-400 text-xs">Fill details</span>
                    </div>
                  </div>

                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 mb-2"
                  >
                    ← Back to categories
                  </button>

                  {/* Name */}
                  <div>
                    <label htmlFor="chat-name" className="block text-sm font-medium text-white mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <p className="text-dark-500 text-xs mb-2">We&apos;ll use this to address you in our response</p>
                    <input
                      type="text"
                      id="chat-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="e.g., John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="chat-email" className="block text-sm font-medium text-white mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <p className="text-dark-500 text-xs mb-2">We&apos;ll send our response to this email</p>
                    <input
                      type="email"
                      id="chat-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="e.g., john.smith@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="chat-subject" className="block text-sm font-medium text-white mb-1">
                      Subject (Optional)
                    </label>
                    <p className="text-dark-500 text-xs mb-2">A short summary helps us understand your issue quickly</p>
                    <input
                      type="text"
                      id="chat-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="e.g., Payment not processing"
                    />
                  </div>

                  {/* Priority */}
                  <div>
                    <label htmlFor="chat-priority" className="block text-sm font-medium text-white mb-1">
                      How urgent is this?
                    </label>
                    <p className="text-dark-500 text-xs mb-2">Help us prioritize your request</p>
                    <select
                      id="chat-priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="low">Low - Not urgent, can wait</option>
                      <option value="medium">Medium - Normal priority</option>
                      <option value="high">High - Important, needs attention soon</option>
                      <option value="urgent">Urgent - Critical, needs immediate help</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="chat-message" className="block text-sm font-medium text-white">
                        Tell us more <span className="text-red-400">*</span>
                      </label>
                      <span className="text-dark-500 text-xs">
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <p className="text-dark-500 text-xs mb-2">
                      Describe your issue in detail. Include steps to reproduce if applicable.
                    </p>
                    <textarea
                      id="chat-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={5}
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Example: I tried to make a payment using ETH, but the transaction failed. I was on the checkout page and clicked &apos;Pay Now&apos;, but nothing happened. I&apos;m using Chrome browser on Windows..."
                    />
                    <p className="text-dark-500 text-xs mt-1">
                      💡 Tip: The more details you provide, the faster we can help you!
                    </p>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && errorMessage && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="flex items-start gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-400 text-sm font-medium">Oops! Something went wrong</p>
                      </div>
                      <p className="text-red-300 text-sm ml-7 mb-2">{errorMessage}</p>
                      <p className="text-red-300/80 text-xs ml-7">
                        Please check your information and try again. If the problem persists,{' '}
                        <a href="/contact" className="underline hover:text-red-200">contact us directly</a>.
                      </p>
                    </div>
                  )}

                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <div className="flex items-start gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="text-emerald-400 text-sm font-medium">Thank you! We&apos;ve received your message</p>
                      </div>
                      <p className="text-emerald-300 text-sm ml-7 mb-3">
                        We&apos;ll review your request and get back to you within 24 hours via email.
                      </p>
                      <div className="ml-7 p-3 rounded bg-dark-800/50 border border-dark-700">
                        <p className="text-dark-400 text-xs font-medium mb-1">What happens next?</p>
                        <ul className="text-dark-500 text-xs space-y-1 list-disc list-inside">
                          <li>Our team will review your request</li>
                          <li>You&apos;ll receive an email confirmation shortly</li>
                          <li>We&apos;ll respond within 24 hours</li>
                        </ul>
                      </div>
                      <p className="text-emerald-300/80 text-xs ml-7 mt-3">
                        Need immediate help?{' '}
                        <a href="/contact" className="underline hover:text-emerald-200">Visit our contact page</a>.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

