'use client';

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function DonateButton() {
  return (
    <Link
      href="/give"
      className="fixed bottom-6 right-6 bg-[#d4af37] text-white p-4 rounded-full shadow-lg hover:bg-[#b8941f] btn-hover-lift z-40 flex items-center gap-2 md:hidden glow-gold"
      aria-label="Give"
    >
      <FaHeart className="text-xl" />
      <span className="font-semibold">Give</span>
    </Link>
  );
}
