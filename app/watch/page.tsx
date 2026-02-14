'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Play, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

interface Sermon {
  id: string;
  title: string;
  date: string;
  speaker: string;
  series: string;
  videoId: string;
  description: string;
  thumbnail?: string;
}

export default function Watch() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const q = query(collection(db, 'sermons'), orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      const sermonsData = snapshot.docs.map(doc => {
        const data = doc.data();
        
        // Extract YouTube video ID from URL if needed
        let videoId = data.videoId || data.videoUrl || '';
        if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
          // Extract ID from various YouTube URL formats
          const match = videoId.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
          videoId = match ? match[1] : '';
        }
        
        return {
          id: doc.id,
          title: data.title || 'Untitled Sermon',
          date: data.date || new Date().toISOString(),
          speaker: data.speaker || 'Guest Speaker',
          series: data.series || 'Sermon Series',
          videoId: videoId,
          description: data.description || '',
          thumbnail: data.thumbnail || '',
        };
      }) as Sermon[];
      setSermons(sermonsData);
    } catch (error) {
      console.error('Error fetching sermons:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    } catch {
      return dateString;
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
            <Play className="mx-auto mb-6" size={64} />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Watch Online
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Experience our services and sermons anytime, anywhere. Join us live or catch up on past messages.
          </motion.p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-center text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Live Stream
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Join us live every Sunday at 9:00 AM IST
            </motion.p>
            <motion.div 
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                  title="Memorial Church Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            <div className="mt-6 text-center">
              <a
                href="https://www.youtube.com/@whitefieldmemorialchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#D4AF37] font-semibold transition-colors duration-300"
              >
                <Youtube size={28} />
                Subscribe to our YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-center text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Recent Sermons
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-12 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Catch up on messages you may have missed
            </motion.p>
            
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
                <p className="mt-4 text-gray-600">Loading sermons...</p>
              </div>
            ) : sermons.length === 0 ? (
              <div className="text-center py-20">
                <Play className="mx-auto mb-4 text-gray-400" size={64} />
                <p className="text-gray-600 text-lg">No sermons available yet.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for inspiring messages!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {sermons.map((sermon, index) => (
                  <motion.div 
                    key={sermon.id} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <a 
                      href={sermon.videoId ? `https://www.youtube.com/watch?v=${sermon.videoId}` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video bg-gray-900 group cursor-pointer block"
                    >
                      {sermon.videoId ? (
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={sermon.thumbnail || `https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                            alt={sermon.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = `https://img.youtube.com/vi/${sermon.videoId}/mqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                              <Play className="text-white ml-1" size={32} />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                          <div className="text-center">
                            <Play className="mx-auto mb-2 text-gray-600" size={48} />
                            <p className="text-gray-400 text-sm">Video Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </a>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-[#D4AF37] mb-2">
                        <span className="bg-[#F8FAFC] px-3 py-1 rounded-full font-semibold">
                          {sermon.series}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{sermon.title}</h3>
                      {sermon.description && (
                        <p className="text-gray-600 mb-3">{sermon.description}</p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{sermon.speaker}</span>
                        <span>{formatDate(sermon.date)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Current Sermon Series</h2>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Faith Foundations</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Join us as we explore the fundamental principles of Christian faith and how to build a strong spiritual foundation that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.youtube.com/@whitefieldmemorialchurch/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E3A8A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <Youtube size={24} /> Watch Full Series
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Join Us In Person</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            While we love having you watch online, nothing compares to worshipping together in person. We&apos;d love to see you this Sunday!
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-block"
          >
            Plan Your Visit
          </a>
        </div>
      </section>
    </div>
  );
}
