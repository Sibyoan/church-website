'use client';

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'prayerRequests'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setFormData({ name: '', email: '', request: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting prayer request:', error);
      alert('Failed to submit prayer request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 py-24 bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-white" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We&apos;d love to hear from you. Reach out with questions, prayer requests, or just to say hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Whitefield, Bangalore<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Phone</h3>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Email</h3>
                  <a href="mailto:info@memorialchurch.in" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    info@memorialchurch.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">WhatsApp</h3>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A8A] hover:text-[#D4AF37] font-medium transition-colors"
                  >
                    Chat with us →
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.089760751267!2d77.71894763194072!3d12.971133700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0dfe927d5367%3A0x8fd48908b03dc387!2sCSI%20Memorial%20Church!5e0!3m2!1sen!2sin!4v1770630579175!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Prayer Request Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">Submit Prayer Request</h2>
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Thank you! We will be praying for you. God bless you.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all duration-300"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
                <p className="text-sm text-gray-500 mt-1">
                  We&apos;ll only use this to follow up if needed
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Prayer Request *</label>
                <textarea
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all duration-300"
                  required
                  placeholder="Share your prayer needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E3A8A] text-white py-4 rounded-lg font-semibold hover:bg-[#2563EB] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {loading ? 'Submitting...' : 'Submit Prayer Request'}
              </button>
            </form>

            <div className="mt-8 p-4 bg-[#F8FAFC] rounded-lg">
              <p className="text-sm text-gray-700 italic text-center">
                &quot;The prayer of a righteous person is powerful and effective.&quot; - James 5:16
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
