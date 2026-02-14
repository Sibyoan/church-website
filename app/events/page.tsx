'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const q = query(collection(db, 'events'), orderBy('date', 'asc'));
      const snapshot = await getDocs(q);
      const eventsData = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || 'Untitled Event',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          time: data.time || 'TBA',
          location: data.location || 'Church',
          category: data.category || 'Event',
        };
      }) as Event[];
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return {
        day: date.getDate().toString().padStart(2, '0'),
        month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
        year: date.getFullYear().toString(),
      };
    } catch {
      return { day: '01', month: 'JAN', year: '2026' };
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Calendar className="mx-auto mb-6" size={64} />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Join us for worship, fellowship, and community. There&apos;s always something happening!
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
                <p className="mt-4 text-gray-600">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-20">
                <Calendar className="mx-auto mb-4 text-gray-400" size={64} />
                <p className="text-gray-600 text-lg">No upcoming events at this time.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for new events!</p>
              </div>
            ) : (
              events.map((event, index) => {
                const dateInfo = formatDate(event.date);
                return (
                  <motion.div 
                    key={event.id} 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="md:flex">
                      {/* Date Box */}
                      <div className="bg-[#1E3A8A] text-white p-8 text-center md:min-w-[140px] flex flex-col justify-center">
                        <div className="text-4xl font-bold">{dateInfo.day}</div>
                        <div className="text-xl font-semibold">{dateInfo.month}</div>
                        <div className="text-sm opacity-90">{dateInfo.year}</div>
                      </div>

                      {/* Event Details */}
                      <div className="p-8 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                          <span className="bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">{event.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock size={20} className="text-[#1E3A8A]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={20} className="text-[#1E3A8A]" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Stay Connected</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Don&apos;t miss out on what&apos;s happening. Follow us on social media or contact us to learn more about upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#1E3A8A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-block"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@memorialchurch.in?subject=Event Information"
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-4 rounded-full font-semibold hover:bg-[#F8FAFC] transition-all duration-300 inline-block"
            >
              Email for Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
