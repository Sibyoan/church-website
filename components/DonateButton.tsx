'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function DonateButton() {
  return (
    <Link
      href="/give"
      className="fixed bottom-6 right-6 bg-[#D4AF37] text-white p-4 rounded-full shadow-xl hover:bg-[#B8941F] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-40 flex items-center gap-2 md:hidden"
      aria-label="Give"
    >
      <Heart size={20} />
      <span className="font-semibold">Give</span>
    </Link>
  );
}
