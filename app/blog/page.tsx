'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FaBook, FaCalendar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: string;
  createdAt: Date;
  status?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const blogData = snapshot.docs.map(doc => {
        const data = doc.data();
        // Create excerpt from content if not available
        const excerpt = data.excerpt || (data.content ? data.content.substring(0, 150) + '...' : 'No description available');
        
        return {
          id: doc.id,
          title: data.title || 'Untitled',
          slug: data.slug || doc.id,
          excerpt: excerpt,
          image: data.image || '/placeholder-blog.jpg',
          content: data.content || '',
          createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
          status: data.status || 'published',
        };
      }) as BlogPost[];
      
      // Filter only published posts
      const publishedPosts = blogData.filter(post => post.status === 'published');
      setPosts(publishedPosts);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FaBook className="text-5xl mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Church Blog
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Reflections, teachings, and updates from our church community.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          {loading ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </motion.div>
          ) : posts.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for inspiring content!</p>
            </motion.div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15, 
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          initial={{ scale: 1.1, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.9, 
                            delay: index * 0.15 + 0.2,
                            ease: [0.25, 0.1, 0.25, 1] 
                          }}
                          whileHover={{ 
                            scale: 1.08,
                            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <motion.div 
                          className="flex items-center gap-2 text-gray-500 text-sm mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15 + 0.3,
                            ease: [0.25, 0.1, 0.25, 1] 
                          }}
                        >
                          <FaCalendar />
                          <time>{formatDate(post.createdAt)}</time>
                        </motion.div>
                        <motion.h2 
                          className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-900 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15 + 0.4,
                            ease: [0.25, 0.1, 0.25, 1] 
                          }}
                        >
                          {post.title}
                        </motion.h2>
                        <motion.p 
                          className="text-gray-600 mb-4 line-clamp-3"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15 + 0.5,
                            ease: [0.25, 0.1, 0.25, 1] 
                          }}
                        >
                          {post.excerpt}
                        </motion.p>
                        <motion.div
                          className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-[#d4af37] transition-colors duration-300 group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15 + 0.6,
                            ease: [0.25, 0.1, 0.25, 1] 
                          }}
                        >
                          Read More 
                          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
