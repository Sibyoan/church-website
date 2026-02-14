'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (!mounted) return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/events', label: 'Events' },
    { href: '/watch', label: 'Watch' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold text-[#1E3A8A] transition-all duration-300 hover:text-[#D4AF37] relative group"
          >
            Memorial Church
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1E3A8A] transition-all duration-300 hover:text-[#D4AF37] focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-[#1E3A8A]'
                      : 'text-gray-700 hover:text-[#1E3A8A]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#1E3A8A] transform transition-all duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/give" 
                className="ml-4 px-6 py-2.5 bg-[#D4AF37] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#B8941F] hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Heart size={16} />
                Give
              </Link>
            </li>
          </ul>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1 py-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-[#1E3A8A] bg-[#F8FAFC]'
                      : 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link 
                href="/give" 
                className="flex items-center justify-center gap-2 bg-[#D4AF37] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-all duration-300"
              >
                <Heart size={16} />
                Give Online
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
