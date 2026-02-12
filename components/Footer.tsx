'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-xl font-bold mb-4">Memorial Church Whitefield</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A community of faith, hope, and love. Join us in worship and fellowship.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook className="text-2xl" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
                aria-label="YouTube"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/ministries', label: 'Ministries' },
                { href: '/events', label: 'Events' },
                { href: '/watch', label: 'Watch Online' },
                { href: '/give', label: 'Give' },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {[
                { href: '/prayer-request', label: 'Prayer Request' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/ministries', label: 'Join a Ministry' },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#d4af37] transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <motion.li 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#d4af37]" />
                <span>CSI Memorial Church, Bangalore, Karnataka, India</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaPhone className="flex-shrink-0 text-[#d4af37]" />
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-[#d4af37] transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaEnvelope className="flex-shrink-0 text-[#d4af37]" />
                <a 
                  href="mailto:info@gracechurch.in" 
                  className="hover:text-[#d4af37] transition-colors duration-200"
                >
                  info@gracechurch.in
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <FaWhatsapp className="flex-shrink-0 text-[#d4af37]" />
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#d4af37] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p>&copy; {new Date().getFullYear()} Memorial Church Whitefield. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
