'use client';

import Link from 'next/link';
import { Church, Heart, Users, BookOpen, Cross, HandHeart, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Church className="mx-auto mb-6" size={64} />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            About Memorial Church
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A community of believers united in faith, hope, and love, committed to knowing Christ and making Him known.
          </motion.p>
        </div>
      </section>

      {/* Church History */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Story
            </motion.h2>
            <motion.div 
              className="bg-[#F8FAFC] p-10 md:p-12 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Memorial Church Whitefield was founded in 1985 with a vision to create a welcoming community where people could encounter God&apos;s love and grace. 
                What started as a small gathering of 20 believers has grown into a vibrant congregation of over 500 members 
                from diverse backgrounds, united by our love for Jesus Christ.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Throughout our journey, we have remained committed to our core values of faith, fellowship, and service. We believe in the transformative 
                power of the Gospel and strive to be a beacon of hope in our community.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Over the decades, we&apos;ve expanded our ministries to include children&apos;s programs, youth outreach, small groups, community service 
                initiatives, and global missions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Memorial Church continues to grow and impact lives through worship, biblical teaching, community outreach, and global missions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Vision & Mission
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-10 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To be a Christ-centered church that transforms lives, strengthens families, and impacts our community and the world 
                  through the love and power of God.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a church where every person experiences God&apos;s presence, discovers their purpose, and is equipped to 
                  make a difference.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-10 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To make disciples of Jesus Christ by teaching the Word of God, fostering authentic worship, building meaningful relationships, 
                  and serving our community with compassion.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to creating an environment where people can encounter God, connect with others, and grow in their faith.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              These values guide everything we do as a church community.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Biblical Authority</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe the Bible is God&apos;s inspired Word and our final authority for faith and practice.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <Heart className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Authentic Worship</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We pursue genuine, Spirit-filled worship that honors God and transforms hearts.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Genuine Community</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe life change happens in relationships. We build authentic community together.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <HandHeart className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Compassionate Service</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We serve others with the love of Christ, meeting needs locally and globally.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <Globe className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Global Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are passionate about fulfilling the Great Commission and reaching all nations.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-lg">
                    <Cross className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Grace & Truth</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We embrace both grace and truth, following Jesus&apos; example in all we do.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              What We Believe
            </motion.h2>
            <motion.p 
              className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our beliefs are rooted in the Bible and centered on Jesus Christ.
            </motion.p>
            <div className="space-y-8">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-xl">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Bible</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe the Bible is the inspired, infallible Word of God and our final authority for faith and life.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-xl">
                    <Cross className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Trinity</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-xl">
                    <Heart className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Salvation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that salvation is a gift of God&apos;s grace, received through faith in Jesus Christ alone.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-xl">
                    <Church className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Church</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe the Church is the body of Christ, called to worship together and spread the Gospel.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Leadership
            </motion.h2>
            <motion.p 
              className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              God has blessed us with dedicated leaders who shepherd our congregation with wisdom and compassion.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pastor John David</h3>
                <p className="text-[#D4AF37] font-semibold mb-4">Senior Pastor</p>
                <p className="text-gray-600 leading-relaxed">
                  Leading our congregation with wisdom and compassion for over 15 years, passionate about teaching God&apos;s Word.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Rev. Sarah Thomas</h3>
                <p className="text-[#D4AF37] font-semibold mb-4">Associate Pastor</p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about youth ministry and community outreach, inspiring others to live out their faith boldly.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Elder Michael Kumar</h3>
                <p className="text-[#D4AF37] font-semibold mb-4">Church Elder</p>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated to prayer ministry and spiritual guidance, providing godly counsel with humility and power.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Church Family</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            We&apos;d love to meet you! Join us this Sunday and experience the warmth of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 justify-center"
            >
              <MapPin size={20} />
              Plan Your Visit
            </Link>
            <Link
              href="/ministries"
              className="bg-transparent text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 inline-flex items-center gap-2 justify-center border-2 border-white"
            >
              Explore Ministries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
