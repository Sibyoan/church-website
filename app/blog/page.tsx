'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
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
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <BookOpen className="mx-auto mb-6" size={64} />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Church Blog
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Reflections, teachings, and updates from our church community.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          {loading ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </motion.div>
          ) : posts.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <BookOpen className="mx-auto mb-4 text-gray-400" size={64} />
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for inspiring content!</p>
            </motion.div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1, 
                      ease: [0.25, 0.1, 0.25, 1] 
                    }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar size={16} />
                          <time>{formatDate(post.createdAt)}</time>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-[#1E3A8A] transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#D4AF37] transition-colors duration-300 group">
                          Read More 
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
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
