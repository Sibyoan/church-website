'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FaPlay, FaYoutube } from 'react-icons/fa';
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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FaPlay className="text-5xl mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Watch Online
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Experience our services and sermons anytime, anywhere. Join us live or catch up on past messages.
          </motion.p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Live Stream
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Join us live every Sunday at 9:00 AM IST
            </motion.p>
            <motion.div 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-video relative">
                {/* Replace with your actual YouTube live stream embed */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                  title="Memorial Church Whitefield Live Stream"
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
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <FaYoutube className="text-2xl" />
                Subscribe to our YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Recent Sermons
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Catch up on messages you may have missed
            </motion.p>
            
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
                <p className="mt-4 text-gray-600">Loading sermons...</p>
              </div>
            ) : sermons.length === 0 ? (
              <div className="text-center py-20">
                <FaPlay className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No sermons available yet.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for inspiring messages!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {sermons.map((sermon, index) => (
                  <motion.div 
                    key={sermon.id} 
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Video Thumbnail */}
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
                              // Fallback to medium quality thumbnail
                              e.currentTarget.src = `https://img.youtube.com/vi/${sermon.videoId}/mqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                              className="bg-red-600 rounded-full p-6 shadow-2xl"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaPlay className="text-4xl text-white ml-1" />
                            </motion.div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                          <div className="text-center">
                            <FaPlay className="text-6xl text-gray-600 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm">Video Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </a>

                    {/* Sermon Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                        <span className="bg-blue-100 px-3 py-1 rounded-full font-semibold">
                          {sermon.series}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
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
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Current Sermon Series</h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-2xl font-bold mb-3">Faith Foundations</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Join us as we explore the fundamental principles of Christian faith and how to build a strong spiritual foundation that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.youtube.com/@whitefieldmemorialchurch/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaYoutube /> Watch Full Series
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="py-16 bg-blue-900 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us In Person</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While we love having you watch online, nothing compares to worshipping together in person. We&apos;d love to see you this Sunday!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Plan Your Visit
          </a>
        </div>
      </motion.section>
    </div>
  );
}
