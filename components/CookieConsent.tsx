'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(cookieConsent);
        setPreferences(savedPrefs);
      } catch (e) {
        // If parsing fails, use defaults
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Apply cookie preferences (you can integrate with analytics tools here)
    applyCookiePreferences(prefs);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Essential cookies are always enabled
    // You can integrate with analytics tools here based on preferences
    
    if (prefs.analytics) {
      // Enable Google Analytics, etc.
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
    } else {
      // Disable analytics
      // Example: gtag('consent', 'update', { analytics_storage: 'denied' });
    }

    if (prefs.marketing) {
      // Enable marketing cookies
      // Example: gtag('consent', 'update', { ad_storage: 'granted' });
    } else {
      // Disable marketing cookies
      // Example: gtag('consent', 'update', { ad_storage: 'denied' });
    }

    if (prefs.functional) {
      // Enable functional cookies
    } else {
      // Disable functional cookies
    }
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies can't be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-dark-900 border-t border-dark-700 shadow-2xl safe-area-bottom"
          >
            <div className="container-custom max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">We use cookies</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
                      <Link href="/privacy" className="text-primary-400 hover:text-primary-300 underline">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition-colors text-sm font-medium"
                  >
                    <Settings className="w-4 h-4 inline-block mr-2" />
                    Customize
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition-colors text-sm font-medium"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all text-sm font-medium"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowSettings(false);
                if (!localStorage.getItem('cookieConsent')) {
                  setShowBanner(true);
                }
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
            />

            {/* Settings Panel */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 z-[100] max-h-[80vh] overflow-y-auto bg-dark-900 border-t border-dark-700 shadow-2xl safe-area-bottom"
            >
              <div className="container-custom max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Cookie Preferences</h2>
                  </div>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      if (!localStorage.getItem('cookieConsent')) {
                        setShowBanner(true);
                      }
                    }}
                    className="w-8 h-8 rounded-lg bg-dark-800 hover:bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-dark-400 mb-6">
                  Manage your cookie preferences. You can enable or disable different types of cookies below. 
                  Essential cookies cannot be disabled as they are necessary for the website to function.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-4 mb-6">
                  {/* Essential Cookies */}
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-white font-semibold mb-1">Essential Cookies</h3>
                        <p className="text-dark-400 text-sm">
                          Required for the website to function properly. These cannot be disabled.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">Always Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">Analytics Cookies</h3>
                        <p className="text-dark-400 text-sm">
                          Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                        </p>
                      </div>
                      <button
                        onClick={() => handleTogglePreference('analytics')}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-primary-500' : 'bg-dark-700'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                            preferences.analytics ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">Marketing Cookies</h3>
                        <p className="text-dark-400 text-sm">
                          Used to deliver personalized advertisements and track campaign effectiveness.
                        </p>
                      </div>
                      <button
                        onClick={() => handleTogglePreference('marketing')}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-primary-500' : 'bg-dark-700'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                            preferences.marketing ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">Functional Cookies</h3>
                        <p className="text-dark-400 text-sm">
                          Enable enhanced functionality and personalization, such as remembering your preferences.
                        </p>
                      </div>
                      <button
                        onClick={() => handleTogglePreference('functional')}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          preferences.functional ? 'bg-primary-500' : 'bg-dark-700'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                            preferences.functional ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dark-700">
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      if (!localStorage.getItem('cookieConsent')) {
                        setShowBanner(true);
                      }
                    }}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 text-white rounded-lg hover:bg-dark-700 transition-colors text-sm font-medium"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all text-sm font-medium flex-1 sm:flex-initial"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

