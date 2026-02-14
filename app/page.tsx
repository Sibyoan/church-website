'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Clock, Users, BookOpen, Heart, Play, MapPin, Calendar, ArrowRight } from 'lucide-react';
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Welcome Home
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A community where faith comes alive, families grow together, and lives are transformed by God&apos;s love.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-[#D4AF37] mb-12 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            &quot;For where two or three gather in my name, there am I with them.&quot; - Matthew 18:20
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <MapPin size={20} />
              Plan a Visit
            </Link>
            
            <Link
              href="/watch"
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 inline-flex items-center gap-2 border-2 border-white"
            >
              <Play size={20} />
              Watch Online
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Us for Worship</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience authentic worship, biblical teaching, and genuine community every week.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Sunday Service',
                time: '9:00 AM - 11:00 AM',
                location: 'Main Sanctuary',
                description: 'Worship, communion, and biblical preaching',
                delay: 0.1
              },
              {
                title: 'Wednesday Prayer',
                time: '7:00 PM - 8:30 PM',
                location: 'Prayer Hall',
                description: 'Corporate prayer and Bible study',
                delay: 0.2
              },
              {
                title: 'Friday Youth',
                time: '6:00 PM - 8:00 PM',
                location: 'Youth Center',
                description: 'Dynamic worship and fellowship for teens',
                delay: 0.3
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
              >
                <Clock className="text-[#1E3A8A] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-2">{service.time}</p>
                <p className="text-sm text-gray-500 mb-4">{service.location}</p>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your first visit made easy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Warm Welcome',
                description: 'Our greeters will welcome you with a smile and help you find your way.',
                delay: 0.1
              },
              {
                icon: BookOpen,
                title: 'Biblical Teaching',
                description: 'Experience relevant, practical messages from God\'s Word.',
                delay: 0.2
              },
              {
                icon: Heart,
                title: 'Authentic Worship',
                description: 'Join us in heartfelt worship that honors God.',
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your place to serve, grow, and connect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Kids Ministry', description: 'Nurturing young hearts in faith', link: '/ministries#kids', delay: 0.1 },
              { title: 'Youth Ministry', description: 'Empowering the next generation', link: '/ministries#youth', delay: 0.2 },
              { title: 'Small Groups', description: 'Building authentic community', link: '/ministries#groups', delay: 0.3 },
              { title: 'Worship Team', description: 'Leading hearts in praise', link: '/ministries#worship', delay: 0.4 }
            ].map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ministry.delay }}
              >
                <Link 
                  href={ministry.link}
                  className="block bg-[#F8FAFC] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors duration-300">
                    {ministry.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <span className="text-[#D4AF37] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href="/ministries" 
              className="text-[#1E3A8A] hover:text-[#D4AF37] font-semibold text-lg inline-flex items-center gap-2 transition-colors duration-300"
            >
              View All Ministries <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for special gatherings and celebrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.length > 0 ? (
              events.map((event, index) => {
                const dateInfo = formatDate(event.date);
                return (
                  <motion.div
                    key={event.id}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-[#1E3A8A] text-white p-4 rounded-xl text-center min-w-[80px] shadow-lg">
                        <div className="text-3xl font-bold">{dateInfo.day}</div>
                        <div className="text-sm">{dateInfo.month}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                className="col-span-2 text-center py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600">No upcoming events at this time. Check back soon!</p>
              </motion.div>
            )}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/events" 
              className="text-[#1E3A8A] hover:text-[#D4AF37] font-semibold text-lg inline-flex items-center gap-2 transition-colors duration-300"
            >
              View All Events <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lives Being Transformed</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: 'Memorial Church has become our spiritual home. The genuine love and support has helped our family grow closer to God.',
                author: 'The Kumar Family',
                delay: 0.1
              },
              {
                quote: 'I came searching for answers. Through the teaching and fellowship, I found a personal relationship with Jesus Christ.',
                author: 'Priya S.',
                delay: 0.2
              },
              {
                quote: 'The youth ministry is amazing! I\'ve made lifelong friends and learned what it truly means to follow Jesus.',
                author: 'Rahul M.',
                delay: 0.3
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
              >
                <div className="text-[#D4AF37] text-5xl mb-4 font-serif">&quot;</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Partner With Us in Ministry
          </motion.h2>
          
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your generous giving enables us to spread the Gospel, serve our community, and make an eternal difference.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/give"
              className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <Heart size={20} />
              Give Online Today
            </Link>
            
            <Link
              href="/about"
              className="bg-transparent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 inline-flex items-center gap-2 border-2 border-white"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
