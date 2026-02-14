'use client';

import { Users, BookOpen, Heart, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Ministries() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our Ministries
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Discover opportunities to serve, grow, and connect in community as we live out our faith together.
          </motion.p>
        </div>
      </section>

      {/* Kids Ministry */}
      <section id="kids" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white" size={40} />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Kids Ministry</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  We believe that children are a gift from God and that investing in their spiritual growth is one of our highest priorities. Our Kids Ministry provides a safe, fun, and engaging environment where children can learn about Jesus.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F8FAFC] p-3 rounded-lg">
                      <BookOpen className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Age-Appropriate Teaching</h3>
                      <p className="text-gray-600">Biblical lessons designed for different age groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F8FAFC] p-3 rounded-lg">
                      <Users className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Trained Volunteers</h3>
                      <p className="text-gray-600">Background-checked and trained ministry leaders</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Program Details</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <div>
                      <strong>Nursery (0-2 years):</strong> Sunday 9:00 AM
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <div>
                      <strong>Preschool (3-5 years):</strong> Sunday 9:00 AM
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <div>
                      <strong>Elementary (6-11 years):</strong> Sunday 9:00 AM
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <div>
                      <strong>Special Events:</strong> VBS, Christmas Program, Easter Celebration
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Ministry */}
      <section id="youth" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">What We Do</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    Weekly youth gatherings with worship and teaching
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    Small group Bible studies
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    Service projects and mission trips
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    Fun activities and retreats
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    Mentorship and discipleship
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#F8FAFC] rounded-lg">
                  <p className="font-semibold mb-2 text-gray-900">Friday Nights</p>
                  <p className="text-gray-600">6:00 PM - 8:00 PM | Youth Center</p>
                </div>
              </motion.div>
              <motion.div 
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Music className="text-white" size={40} />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Youth Ministry</h2>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Our Youth Ministry is dedicated to helping teenagers (grades 6-12) develop a genuine, lasting relationship with Jesus Christ. We create a space where teens can ask questions, build friendships, and discover their purpose.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through engaging worship, relevant teaching, and authentic community, we equip young people to live out their faith in today&apos;s world.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Groups */}
      <section id="groups" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Users className="text-white" size={40} />
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Small Groups
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Life change happens in the context of relationships. Our Small Groups provide a place to connect with others, study God&apos;s Word, pray together, and support one another.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Men's Groups", desc: "Building strong, godly men through fellowship and accountability.", time: "Various times", delay: 0.1 },
                { title: "Women's Groups", desc: "Encouraging women to grow in faith, friendship, and service.", time: "Various times", delay: 0.2 },
                { title: "Seniors Ministry", desc: "Fellowship and spiritual growth for our seasoned saints.", time: "2nd Thursday, 10:00 AM", delay: 0.3 }
              ].map((group, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: group.delay, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{group.title}</h3>
                  <p className="text-gray-600 mb-4">{group.desc}</p>
                  <p className="text-sm text-gray-500">{group.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worship Team */}
      <section id="worship" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-[#1E3A8A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Music className="text-white" size={40} />
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Worship Ministry
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-12 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Worship Ministry exists to lead the congregation in authentic, Spirit-filled worship that glorifies God and draws people into His presence.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Join the Team</h3>
                <p className="text-gray-600 mb-4">We&apos;re always looking for passionate worshippers:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">•</span> Vocalists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">•</span> Instrumentalists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">•</span> Sound & Media Tech
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">•</span> Prayer Team
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Rehearsals</h3>
                <p className="text-gray-600 mb-4">Practice makes excellence in worship:</p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Thursday:</strong> 7:00 PM - 9:00 PM</li>
                  <li><strong>Sunday:</strong> 8:00 AM (Pre-service)</li>
                  <li><strong>Location:</strong> Main Sanctuary</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white text-center">
        <div className="container mx-auto px-4">
          <Heart className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            God has given you unique gifts and talents. Let&apos;s help you find the perfect place to serve and grow.
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-block"
          >
            Contact Us to Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
