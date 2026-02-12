'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { Suspense } from 'react';

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
    <div className="py-16 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-700 mb-8">
            Your donation has been received successfully.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">Donation Summary</h2>
            <div className="space-y-2 text-left max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold">₹{amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Purpose:</span>
                <span className="font-semibold">{purposeLabels[purpose || 'offering']}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 italic">
            &quot;God bless you for your generosity. May the Lord multiply your blessings.&quot;
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Return to Home
            </Link>
            <Link
              href="/donate"
              className="block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Make Another Donation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DonateSuccess() {
  return (
    <Suspense fallback={
      <div className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
