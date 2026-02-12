'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { DonationType } from '@/types';
import { FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface RazorpayOptions {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: { razorpay_payment_id: string }) => Promise<void>;
  prefill: {
    name: string;
    email: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export default function Give() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    purpose: 'tithes' as DonationType,
    donorName: '',
    email: '',
    anonymous: false,
  });

  const presetAmounts = [500, 1000, 2000, 5000];

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(formData.amount);
    if (!amount || amount < 1) {
      alert('Please enter a valid amount');
      return;
    }

    setLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Failed to load payment gateway. Please try again.');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Memorial Church Whitefield',
      description: `Donation - ${formData.purpose}`,
      handler: async function (response: { razorpay_payment_id: string }) {
        try {
          await addDoc(collection(db, 'donations'), {
            amount,
            purpose: formData.purpose,
            donorName: formData.anonymous ? 'Anonymous' : formData.donorName || 'Anonymous',
            email: formData.anonymous ? '' : formData.email,
            anonymous: formData.anonymous,
            paymentId: response.razorpay_payment_id,
            createdAt: serverTimestamp(),
          });

          router.push(`/give/success?amount=${amount}&purpose=${formData.purpose}`);
        } catch (error) {
          console.error('Error saving donation:', error);
          alert('Payment successful but failed to save record. Please contact us.');
        }
      },
      prefill: {
        name: formData.anonymous ? '' : formData.donorName,
        email: formData.anonymous ? '' : formData.email,
      },
      theme: {
        color: '#1e3a8a',
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      {/* Hero */}
      <motion.section 
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FaHeart className="text-5xl mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Give Online
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Thank you for your generosity. Your giving enables us to fulfill our mission and serve our community.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Give Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              How Your Giving Makes a Difference
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <span className="text-3xl">🙏</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Ministry & Worship</h3>
                <p className="text-gray-600">Supporting weekly services, worship teams, and spiritual programs</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Outreach</h3>
                <p className="text-gray-600">Serving the needy, feeding programs, and local missions</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Facilities & Operations</h3>
                <p className="text-gray-600">Maintaining our building and supporting church operations</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Make Your Gift</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Purpose */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Select Purpose</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: 'tithes', label: 'Tithes', icon: '💰' },
                      { value: 'offering', label: 'Offering', icon: '🎁' },
                      { value: 'charity', label: 'Charity / Outreach', icon: '❤️' },
                      { value: 'building', label: 'Building Fund', icon: '🏛️' },
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, purpose: option.value as DonationType })}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left relative overflow-hidden ${
                          formData.purpose === option.value
                            ? 'border-blue-900 bg-blue-50 text-blue-900 shadow-md'
                            : 'border-gray-300 hover:border-blue-400 hover:shadow-sm'
                        }`}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        animate={formData.purpose === option.value ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-2xl mb-1"
                          animate={formData.purpose === option.value ? { 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {option.icon}
                        </motion.div>
                        <div className="font-semibold">{option.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Preset Amounts */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Select Amount</label>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 font-semibold ${
                          formData.amount === amount.toString()
                            ? 'border-blue-900 bg-blue-50 text-blue-900 shadow-md'
                            : 'border-gray-300 hover:border-blue-400 hover:shadow-sm'
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        animate={formData.amount === amount.toString() ? { 
                          scale: [1, 1.05, 1],
                          y: [0, -3, 0]
                        } : {}}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        ₹{amount}
                      </motion.button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg input-focus text-lg"
                    required
                    min="1"
                  />
                </div>

                {/* Anonymous Toggle */}
                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="w-5 h-5 text-blue-900 rounded transition-all duration-200"
                    />
                    <span className="text-gray-700 font-medium">Make this donation anonymous</span>
                  </label>
                </div>

                {/* Donor Details */}
                {!formData.anonymous && (
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Your Name (Optional)</label>
                      <input
                        type="text"
                        value={formData.donorName}
                        onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg input-focus"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg input-focus"
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#d4af37] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#b8941f] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Ripple effect on click */}
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {loading ? (
                    <motion.span 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg 
                        className="h-5 w-5" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </motion.svg>
                      Processing...
                    </motion.span>
                  ) : (
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaShieldAlt />
                      </motion.span>
                      Proceed to Secure Payment
                    </motion.span>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  🔒 Secure payment powered by Razorpay. Your information is safe and encrypted.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Safe & Secure Giving
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaShieldAlt className="text-4xl text-blue-900 mx-auto mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 text-gray-900">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Bank-level encryption protects your information</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaCheckCircle className="text-4xl text-blue-900 mx-auto mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 text-gray-900">Instant Receipt</h3>
                <p className="text-gray-600 text-sm">Receive confirmation immediately after giving</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaHeart className="text-4xl text-blue-900 mx-auto mb-3 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 text-gray-900">100% Goes to Ministry</h3>
                <p className="text-gray-600 text-sm">Every rupee supports our mission and community</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
