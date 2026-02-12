'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FaCalendar className="text-5xl mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Join us for worship, fellowship, and community. There&apos;s always something happening at Memorial Church Whitefield!
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
                <p className="mt-4 text-gray-600">Loading events...</p>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-20">
                <FaCalendar className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No upcoming events at this time.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for new events!</p>
              </div>
            ) : (
              events.map((event, index) => {
                const dateInfo = formatDate(event.date);
                return (
                  <motion.div 
                    key={event.id} 
                    className="bg-white rounded-xl shadow-md event-card overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="md:flex">
                      {/* Date Box */}
                      <div className="bg-blue-600 text-white p-6 md:p-8 text-center md:min-w-[140px] flex flex-col justify-center">
                        <div className="text-4xl font-bold">{dateInfo.day}</div>
                        <div className="text-xl font-semibold">{dateInfo.month}</div>
                        <div className="text-sm opacity-90">{dateInfo.year}</div>
                      </div>

                      {/* Event Details */}
                      <div className="p-6 md:p-8 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4 text-lg">{event.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-600" />
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
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on what&apos;s happening at Memorial Church Whitefield. Follow us on social media or contact us to learn more about upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-block"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@gracechurch.in?subject=Event Information"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all inline-block"
            >
              Email for Details
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
