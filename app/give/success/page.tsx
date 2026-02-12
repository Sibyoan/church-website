'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaHeart } from 'react-icons/fa';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function SuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const purpose = searchParams.get('purpose');

  const purposeLabels: Record<string, string> = {
    tithes: 'Tithes',
    offering: 'Offering',
    charity: 'Charity / Outreach',
    building: 'Building Fund',
  };

  return (
    <div className="py-16 bg-[#f8fafc] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3, 
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 200
            }}
          >
            {/* Animated checkmark with SVG path animation */}
            <motion.svg
              className="w-12 h-12 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <motion.path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  delay: 0.6, 
                  duration: 0.8, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
              />
            </motion.svg>
            
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-400"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ 
                duration: 1.5, 
                repeat: 2,
                ease: "easeOut"
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Thank You for Your Generosity!
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Your donation has been received successfully.
          </motion.p>

          <motion.div 
            className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Donation Summary</h2>
            <div className="space-y-3 text-left max-w-sm mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-2xl text-blue-900">₹{amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Purpose:</span>
                <span className="font-semibold text-gray-900">{purposeLabels[purpose || 'offering']}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-3xl text-[#d4af37] mx-auto mb-3" />
            </motion.div>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              &quot;Thank you for your generosity. May God bless you abundantly for your faithful giving.&quot;
            </p>
            <p className="text-sm text-gray-600 mt-2">- Memorial Church Whitefield Team</p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/"
              className="block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 btn-hover-lift"
            >
              Return to Home
            </Link>
            <Link
              href="/give"
              className="block border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 btn-hover-lift"
            >
              Make Another Donation
            </Link>
          </motion.div>

          <p className="text-sm text-gray-500 mt-8">
            A confirmation has been sent to your email (if provided). For any questions, please contact us at info@gracechurch.in
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function GiveSuccess() {
  return (
    <Suspense fallback={
      <div className="py-16 bg-[#f8fafc] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
