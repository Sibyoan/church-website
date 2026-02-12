'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FaClock, FaUsers, FaBible, FaHeart, FaPlay, FaMapMarkerAlt, FaPrayingHands, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const q = query(collection(db, 'events'), orderBy('date', 'asc'), limit(2));
      const snapshot = await getDocs(q);
      const eventsData = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || 'Upcoming Event',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          time: data.time || 'TBA',
          location: data.location || 'Church',
        };
      }) as Event[];
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return {
        day: date.getDate().toString(),
        month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      };
    } catch {
      return { day: '01', month: 'JAN' };
    }
  };
  return (
    <div>
      {/* Hero Section with Spiritual Slow Animations */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          {/* Church Name - Slow Fade In with Soft Zoom */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2
            }}
          >
            Welcome Home to Memorial Church Whitefield
          </motion.h1>
          
          {/* Description - Fade In Up */}
          <motion.p 
            className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.8
            }}
          >
            A community where faith comes alive, families grow together, and lives are transformed by God&apos;s love and grace.
          </motion.p>
          
          {/* Bible Verse - Slow Fade In with Gentle Rise */}
          <motion.p 
            className="text-lg md:text-xl mb-10 italic text-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 1.4
            }}
          >
            &quot;For where two or three gather in my name, there am I with them.&quot; - Matthew 18:20
          </motion.p>
          
          {/* CTA Buttons - Staggered Fade In */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 2
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 2.2
              }}
            >
              <Link
                href="/give"
                className="bg-[#d4af37] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] btn-hover-lift inline-flex items-center gap-2 shadow-lg"
              >
                <FaHeart /> Give Online
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 2.4
              }}
            >
              <Link
                href="/watch"
                className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 btn-hover-lift inline-flex items-center gap-2 border-2 border-white"
              >
                <FaPlay /> Watch Online
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 2.6
              }}
            >
              <Link
                href="/contact"
                className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 btn-hover-lift inline-flex items-center gap-2 border-2 border-white"
              >
                <FaMapMarkerAlt /> Get Directions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message - Slide In Up */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              You Belong Here
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Whether you&apos;re exploring faith for the first time, returning after time away, or looking for a church home, 
              Memorial Church Whitefield welcomes you with open arms. We are a diverse family united by our love for Jesus Christ and 
              our commitment to serving one another and our community.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Join us this Sunday and experience the warmth of genuine Christian fellowship, inspiring worship, 
              and biblical teaching that will encourage and equip you for your spiritual journey.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Service Timings - Staggered Fade */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Join Us for Worship
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Experience authentic worship, biblical teaching, and genuine community every week.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="text-center p-8 bg-white rounded-xl shadow-md service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaClock className="text-5xl text-blue-900 mx-auto mb-4 service-icon" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Sunday Service</h3>
              <p className="text-gray-600 text-lg mb-2">9:00 AM - 11:00 AM</p>
              <p className="text-gray-500 text-sm mb-4">Main Sanctuary</p>
              <p className="text-gray-600 text-sm">
                Worship, communion, biblical preaching, and children&apos;s ministry available
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-white rounded-xl shadow-md service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaClock className="text-5xl text-blue-900 mx-auto mb-4 service-icon" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Wednesday Prayer</h3>
              <p className="text-gray-600 text-lg mb-2">7:00 PM - 8:30 PM</p>
              <p className="text-gray-500 text-sm mb-4">Prayer Hall</p>
              <p className="text-gray-600 text-sm">
                Corporate prayer, intercession, and Bible study for spiritual growth
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 bg-white rounded-xl shadow-md service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaClock className="text-5xl text-blue-900 mx-auto mb-4 service-icon" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Friday Youth</h3>
              <p className="text-gray-600 text-lg mb-2">6:00 PM - 8:00 PM</p>
              <p className="text-gray-500 text-sm mb-4">Youth Center</p>
              <p className="text-gray-600 text-sm">
                Dynamic worship, relevant teaching, games, and fellowship for teens
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect - Slide In Left/Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              What to Expect When You Visit
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-3xl text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Warm Welcome</h3>
                <p className="text-gray-600">
                  Our greeters and ushers will welcome you with a smile and help you find your way. 
                  Feel free to ask questions - we&apos;re here to help!
                </p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBible className="text-3xl text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Biblical Teaching</h3>
                <p className="text-gray-600">
                  Experience relevant, practical messages from God&apos;s Word that will inspire and 
                  challenge you to grow in your faith journey.
                </p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPrayingHands className="text-3xl text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Authentic Worship</h3>
                <p className="text-gray-600">
                  Join us in heartfelt worship with contemporary and traditional songs that honor God 
                  and create space for His presence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Highlights - Staggered Grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our Ministries
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Find your place to serve, grow, and connect with others in faith.
          </motion.p>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/ministries#kids" className="bg-white p-6 rounded-xl shadow-md card-hover group block">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">👶</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                  Kids Ministry
                </h3>
                <p className="text-gray-600 text-sm">Nurturing young hearts in faith and love through age-appropriate teaching and activities.</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/ministries#youth" className="bg-white p-6 rounded-xl shadow-md card-hover group block">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">🎸</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                  Youth Ministry
                </h3>
                <p className="text-gray-600 text-sm">Empowering the next generation for Christ through dynamic worship and relevant teaching.</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/ministries#groups" className="bg-white p-6 rounded-xl shadow-md card-hover group block">
                <FaUsers className="text-4xl text-blue-900 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                  Small Groups
                </h3>
                <p className="text-gray-600 text-sm">Building authentic community together through Bible study, prayer, and fellowship.</p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/ministries#worship" className="bg-white p-6 rounded-xl shadow-md card-hover group block">
                <FaBible className="text-4xl text-blue-900 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                  Worship Team
                </h3>
                <p className="text-gray-600 text-sm">Leading hearts in praise and worship, creating space for God&apos;s presence.</p>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/ministries" className="text-blue-900 hover:text-[#d4af37] font-semibold text-lg transition-colors duration-200">
              View All Ministries →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events - Slide In */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Join us for special gatherings, celebrations, and community outreach.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.length > 0 ? (
              events.map((event, index) => {
                const dateInfo = formatDate(event.date);
                return (
                  <motion.div 
                    key={event.id}
                    className="bg-[#f8fafc] p-8 rounded-xl shadow-md event-card border border-blue-100"
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-900 text-white p-4 rounded-lg text-center min-w-[80px]">
                        <div className="text-2xl font-bold">{dateInfo.day}</div>
                        <div className="text-sm">{dateInfo.month}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 mb-3">
                          {event.description}
                        </p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                className="col-span-2 text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-gray-600">No upcoming events at this time. Check back soon!</p>
              </motion.div>
            )}
          </div>
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/events" className="text-blue-900 hover:text-[#d4af37] font-semibold text-lg transition-colors duration-200">
              View All Events →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Staggered Fade */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Lives Being Transformed
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-[#d4af37] text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-4 italic">
                Memorial Church Whitefield has become our spiritual home. The genuine love and support we&apos;ve received 
                has helped our family grow closer to God and each other.
              </p>
              <p className="text-gray-900 font-semibold">- The Kumar Family</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-[#d4af37] text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-4 italic">
                I came to Memorial Church Whitefield searching for answers. Through the teaching and fellowship, 
                I found not just answers, but a personal relationship with Jesus Christ.
              </p>
              <p className="text-gray-900 font-semibold">- Priya S.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-[#d4af37] text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-4 italic">
                The youth ministry here is amazing! I&apos;ve made lifelong friends and learned what it 
                truly means to follow Jesus in today&apos;s world.
              </p>
              <p className="text-gray-900 font-semibold">- Rahul M., Youth Member</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Fade In Up */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Partner With Us in Ministry
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Your generous giving enables us to spread the Gospel, serve our community, support missions, 
            and maintain our facilities. Every gift makes an eternal difference in someone&apos;s life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/give"
              className="bg-[#d4af37] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] btn-hover-lift inline-flex items-center gap-2 shadow-lg"
            >
              <FaHeart /> Give Online Today
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 btn-hover-lift inline-flex items-center gap-2 border-2 border-white"
            >
              <FaBook /> Learn More About Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
