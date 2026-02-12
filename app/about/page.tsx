'use client';

import { FaChurch, FaHeart, FaUsers, FaBible, FaCross, FaHandsHelping, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
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
            <FaChurch className="text-5xl mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            About Memorial Church Whitefield
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A community of believers united in faith, hope, and love, committed to knowing Christ and making Him known.
          </motion.p>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Story
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-xl shadow-md border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Memorial Church Whitefield was founded in 1985 with a vision to create a welcoming community where people could encounter God&apos;s love and grace. 
                What started as a small gathering of 20 believers meeting in a humble home has grown into a vibrant congregation of over 500 members 
                from diverse backgrounds, united by our love for Jesus Christ.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Throughout our journey, we have remained committed to our core values of faith, fellowship, and service. We believe in the transformative 
                power of the Gospel and strive to be a beacon of hope in our community. Our church has witnessed countless lives changed, families restored, 
                and individuals discovering their God-given purpose.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Over the decades, we&apos;ve expanded our ministries to include children&apos;s programs, youth outreach, small groups, community service 
                initiatives, and global missions. We&apos;ve sent missionaries to serve in various parts of the world and supported numerous charitable causes 
                both locally and internationally.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, Memorial Church Whitefield continues to grow and impact lives through worship, biblical teaching, community outreach, and global missions. 
                We are grateful for God&apos;s faithfulness over these years and excited about what He has in store for our future as we continue 
                to fulfill the Great Commission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Vision & Mission
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FaHeart className="text-3xl text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To be a Christ-centered church that transforms lives, strengthens families, and impacts our community and the world 
                  through the love and power of God.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision a church where every person experiences God&apos;s presence, discovers their purpose, and is equipped to 
                  make a difference in their sphere of influence. We dream of a community where broken lives are restored, the lost are 
                  found, and believers are growing in spiritual maturity.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FaUsers className="text-3xl text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To make disciples of Jesus Christ by teaching the Word of God, fostering authentic worship, building meaningful relationships, 
                  and serving our community with compassion and excellence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to creating an environment where people can encounter God, connect with others, grow in their faith, 
                  discover their gifts, and serve the world. Through relevant teaching, dynamic worship, and genuine community, we help 
                  people take their next steps in following Jesus.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              These values guide everything we do as a church community.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaBible className="text-blue-900" /> Biblical Authority
                </h3>
                <p className="text-gray-700">
                  We believe the Bible is God&apos;s inspired Word and our final authority for faith and practice. We are committed to 
                  teaching and applying Scripture in all areas of life.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaHeart className="text-blue-900" /> Authentic Worship
                </h3>
                <p className="text-gray-700">
                  We pursue genuine, Spirit-filled worship that honors God and transforms hearts. Our worship is both a lifestyle and 
                  a corporate expression of our love for God.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaUsers className="text-blue-900" /> Genuine Community
                </h3>
                <p className="text-gray-700">
                  We believe life change happens in the context of relationships. We are committed to building authentic community where 
                  people can belong, grow, and serve together.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaHandsHelping className="text-blue-900" /> Compassionate Service
                </h3>
                <p className="text-gray-700">
                  We are called to serve others with the love of Christ. We actively engage in meeting needs both locally and globally, 
                  demonstrating God&apos;s love through practical action.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaGlobe className="text-blue-900" /> Global Impact
                </h3>
                <p className="text-gray-700">
                  We are passionate about fulfilling the Great Commission. We support missions, plant churches, and partner with 
                  organizations to spread the Gospel to all nations.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-blue-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  <FaCross className="text-blue-900" /> Grace & Truth
                </h3>
                <p className="text-gray-700">
                  We embrace both grace and truth, following Jesus&apos; example. We extend grace to all while standing firm on biblical 
                  truth, creating a safe place for people to grow.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              What We Believe
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our beliefs are rooted in the Bible and centered on Jesus Christ. Here are the core truths that guide our faith and practice.
            </motion.p>
            <div className="space-y-6">
              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaBible className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">The Bible</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe the Bible is the inspired, infallible Word of God and our final authority for faith and life. It is God&apos;s 
                      revelation to humanity and contains everything we need for salvation and godly living. We are committed to teaching the 
                      whole counsel of Scripture and applying it to contemporary life.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaCross className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">The Trinity</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit. Each person is fully God, 
                      yet there is one God. The Father creates and sustains, the Son redeems and reconciles, and the Holy Spirit empowers 
                      and transforms. All three work together in perfect unity for our salvation and sanctification.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaHeart className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Salvation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that salvation is a gift of God&apos;s grace, received through faith in Jesus Christ alone. Jesus died on 
                      the cross for our sins and rose from the dead, offering forgiveness and eternal life to all who believe. Salvation 
                      cannot be earned by good works but is freely given to those who repent and trust in Christ. This salvation brings 
                      justification, adoption into God&apos;s family, and the promise of eternal life.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaChurch className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">The Church</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe the Church is the body of Christ, made up of all believers. We are called to worship together, encourage 
                      one another, serve our community, and spread the Gospel to all nations. The local church is God&apos;s primary means 
                      of accomplishing His purposes on earth. We practice baptism and communion as ordained by Christ, and we are committed 
                      to making disciples who make disciples.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaUsers className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Christian Living</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that followers of Jesus are called to live holy lives, empowered by the Holy Spirit. This includes loving 
                      God and others, pursuing spiritual growth through prayer and Bible study, using our gifts to serve the Kingdom of God, 
                      and being witnesses for Christ in our daily lives. We are called to be salt and light in the world, demonstrating 
                      God&apos;s love through our words and actions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border-l-4 border-blue-900 shadow-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start gap-4">
                  <FaGlobe className="text-3xl text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">The Second Coming</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe in the personal, visible return of Jesus Christ to establish His eternal kingdom. He will judge the living 
                      and the dead, and believers will spend eternity with God in the new heaven and new earth. This hope motivates us to 
                      live faithfully, share the Gospel urgently, and look forward with anticipation to Christ&apos;s return.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Leadership
            </motion.h2>
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              God has blessed us with dedicated leaders who shepherd our congregation with wisdom, compassion, and biblical integrity.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-[#f8fafc] p-8 rounded-xl shadow-md text-center card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pastor John David</h3>
                <p className="text-blue-900 font-semibold mb-4">Senior Pastor</p>
                <p className="text-gray-600 leading-relaxed">
                  Pastor John has been leading our congregation with wisdom and compassion for over 15 years. His heart for teaching 
                  God&apos;s Word and shepherding people has impacted countless lives. He holds a Master of Divinity degree and is 
                  passionate about equipping believers for ministry and reaching the lost with the Gospel.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-8 rounded-xl shadow-md text-center card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Rev. Sarah Thomas</h3>
                <p className="text-blue-900 font-semibold mb-4">Associate Pastor</p>
                <p className="text-gray-600 leading-relaxed">
                  Rev. Sarah is passionate about youth ministry and community outreach. Her dedication to the next generation and serving 
                  the community has been transformational. She brings energy, creativity, and a deep love for Jesus to everything she does, 
                  inspiring others to live out their faith boldly.
                </p>
              </motion.div>
              <motion.div 
                className="bg-[#f8fafc] p-8 rounded-xl shadow-md text-center card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Elder Michael Kumar</h3>
                <p className="text-blue-900 font-semibold mb-4">Church Elder</p>
                <p className="text-gray-600 leading-relaxed">
                  Elder Michael is dedicated to prayer ministry and spiritual guidance. His wisdom and commitment to intercession have 
                  strengthened our church family. With decades of faithful service, he provides godly counsel and leads our prayer 
                  initiatives with humility and power.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are committed to being a church that honors God, loves people, and makes a difference in our world. We believe that 
              every person matters to God and has a place in His family. Whether you&apos;re exploring faith for the first time or have 
              been following Jesus for years, we invite you to join us on this journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Together, we are discovering what it means to be the hands and feet of Jesus in our community and beyond. We are not a 
              perfect church, but we are a church that believes in a perfect Savior who is transforming us day by day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Church Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;d love to meet you! Join us this Sunday and experience the warmth of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#d4af37] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b8941f] btn-hover-lift inline-block"
            >
              Plan Your Visit
            </a>
            <a
              href="/ministries"
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 btn-hover-lift inline-block border-2 border-white"
            >
              Explore Ministries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
