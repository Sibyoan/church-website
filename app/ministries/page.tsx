'use client';

import { FaUsers, FaBible, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Ministries() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our Ministries
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Discover opportunities to serve, grow, and connect in community as we live out our faith together.
          </motion.p>
        </div>
      </section>

      {/* Kids Ministry */}
      <section id="kids" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-6xl mb-6">👶</div>
                <h2 className="text-3xl font-bold mb-4">Kids Ministry</h2>
                <p className="text-gray-700 mb-4 text-lg">
                  We believe that children are a gift from God and that investing in their spiritual growth is one of our highest priorities. Our Kids Ministry provides a safe, fun, and engaging environment where children can learn about Jesus.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <FaBible className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Age-Appropriate Teaching</h3>
                      <p className="text-gray-600">Biblical lessons designed for different age groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <FaUsers className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Trained Volunteers</h3>
                      <p className="text-gray-600">Background-checked and trained ministry leaders</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-blue-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Nursery (0-2 years):</strong> Sunday 9:00 AM</li>
                  <li><strong>Preschool (3-5 years):</strong> Sunday 9:00 AM</li>
                  <li><strong>Elementary (6-11 years):</strong> Sunday 9:00 AM</li>
                  <li><strong>Special Events:</strong> VBS, Christmas Program, Easter Celebration</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Ministry */}
      <section id="youth" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1 bg-blue-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Weekly youth gatherings with worship and teaching</li>
                  <li>✓ Small group Bible studies</li>
                  <li>✓ Service projects and mission trips</li>
                  <li>✓ Fun activities and retreats</li>
                  <li>✓ Mentorship and discipleship</li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="font-semibold mb-2">Friday Nights</p>
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
                <div className="text-6xl mb-6">🎸</div>
                <h2 className="text-3xl font-bold mb-4">Youth Ministry</h2>
                <p className="text-gray-700 mb-4 text-lg">
                  Our Youth Ministry is dedicated to helping teenagers (grades 6-12) develop a genuine, lasting relationship with Jesus Christ. We create a space where teens can ask questions, build friendships, and discover their purpose.
                </p>
                <p className="text-gray-700 text-lg">
                  Through engaging worship, relevant teaching, and authentic community, we equip young people to live out their faith in today&apos;s world.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Groups */}
      <section id="groups" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaUsers className="text-6xl text-blue-600 mx-auto mb-6" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Small Groups / Grow Groups
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Life change happens in the context of relationships. Our Small Groups provide a place to connect with others, study God&apos;s Word, pray together, and support one another through life&apos;s journey.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                className="bg-blue-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3">Men&apos;s Groups</h3>
                <p className="text-gray-600 mb-4">Building strong, godly men through fellowship, accountability, and biblical teaching.</p>
                <p className="text-sm text-gray-500">Various times and locations</p>
              </motion.div>
              <motion.div 
                className="bg-blue-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3">Women&apos;s Groups</h3>
                <p className="text-gray-600 mb-4">Encouraging women to grow in faith, friendship, and service to Christ.</p>
                <p className="text-sm text-gray-500">Various times and locations</p>
              </motion.div>
              <motion.div 
                className="bg-blue-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3">Seniors Ministry</h3>
                <p className="text-gray-600 mb-4">Fellowship and spiritual growth for our seasoned saints.</p>
                <p className="text-sm text-gray-500">2nd Thursday, 10:00 AM</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Team */}
      <section id="worship" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaBible className="text-6xl text-blue-600 mx-auto mb-6" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Worship Ministry
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Worship Ministry exists to lead the congregation in authentic, Spirit-filled worship that glorifies God and draws people into His presence. We believe worship is both a lifestyle and a corporate expression of our love for God.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3">Join the Team</h3>
                <p className="text-gray-600 mb-4">We&apos;re always looking for passionate worshippers to join our team:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vocalists</li>
                  <li>• Instrumentalists</li>
                  <li>• Sound & Media Tech</li>
                  <li>• Prayer Team</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3">Rehearsals</h3>
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
      <motion.section 
        className="py-16 bg-blue-900 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-4">
          <FaHeart className="text-5xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            God has given you unique gifts and talents. Let&apos;s help you find the perfect place to serve and grow.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Contact Us to Learn More
          </a>
        </div>
      </motion.section>
    </div>
  );
}
