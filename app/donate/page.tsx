'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { DonationType } from '@/types';

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

export default function Donate() {
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
      name: 'Grace Church',
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

          router.push(`/donate/success?amount=${amount}&purpose=${formData.purpose}`);
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
        color: '#1e40af',
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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
          <p className="text-center text-gray-600 mb-8">
            Your generous contribution helps us continue our ministry and serve our community.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            {/* Donation Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">Donation Purpose</label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'tithes', label: 'Tithes' },
                  { value: 'offering', label: 'Offering' },
                  { value: 'charity', label: 'Charity / Outreach' },
                  { value: 'building', label: 'Building Fund' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, purpose: option.value as DonationType })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.purpose === option.value
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preset Amounts */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">Select Amount</label>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.amount === amount.toString()
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>

            {/* Anonymous Toggle */}
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-gray-700">Make this donation anonymous</span>
              </label>
            </div>

            {/* Donor Details */}
            {!formData.anonymous && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Secure payment powered by Razorpay
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
