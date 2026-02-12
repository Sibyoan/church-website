'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ministries', label: 'Grow' },
    { href: '/events', label: 'Events' },
    { href: '/watch', label: 'Watch' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Connect' },
  ];

  return (
    <header 
      className={`bg-white sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-blue-900 transition-all duration-300 hover:text-blue-800 hover:scale-105 relative group"
          >
            Memorial Church Whitefield
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Mobile Menu Button with rotation animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-blue-900 transition-all duration-300 hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 rounded-lg p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>

          {/* Desktop Navigation with staggered fade-in */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link 
                  href={link.href}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 overflow-hidden group ${
                    isActive(link.href)
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Animated background on hover */}
                  <span className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  {/* Animated underline */}
                  <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-blue-900 transform transition-all duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              </li>
            ))}
            <li 
              className="animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              <Link 
                href="/give" 
                className={`ml-2 px-5 lg:px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                  isActive('/give')
                    ? 'bg-[#b8941f] text-white scale-105'
                    : 'bg-[#d4af37] text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <FaHeart className="text-sm transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="relative z-10">Give</span>
                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1 py-2 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`transform transition-all duration-300 ${
                  isOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive(link.href)
                      ? 'text-blue-900 bg-blue-50 translate-x-2'
                      : 'text-gray-700 hover:text-blue-900 hover:translate-x-2'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Slide-in background */}
                  <span className="absolute inset-0 bg-gray-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-900 rounded-r-full animate-fade-in"></span>
                  )}
                </Link>
              </li>
            ))}
            <li 
              className={`pt-2 transform transition-all duration-300 ${
                isOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' 
              }}
            >
              <Link 
                href="/give" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center justify-center gap-2 bg-[#d4af37] text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-[#b8941f] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 relative overflow-hidden group"
              >
                <FaHeart className="text-sm transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="relative z-10">Give Online</span>
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
