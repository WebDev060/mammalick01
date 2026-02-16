'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 pt-28 overflow-hidden" style={{ background: 'linear-gradient(90deg, #FFD6E1 0%, #F093A6 50%, #FFD6E1 100%)' }}>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.35\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          opacity: 0.5
        }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white tracking-wide drop-shadow-lg">ABOUT MammaLick BRAND HIMALAYAN PINK ANIMAL LICK SALT</h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-white drop-shadow"
          >
            Premimum Product from the Ancient Mines to our valued Customers door step.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 text-justify">
                We at MammaLick strive to bring the heighest quality Animal Lick Salt products to the Live Stock Farming Industry of North America recognizing their need for premimum mineral supplements for animal health and productivity.
              </p>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                We are in direct partnerships with sustainable salt mines in Pakistan&apos;s Punjab province, we&apos;ve built relationships based on quality, ethical practices, and environmental responsibility. We&apos;re proud to serve farms, ranches, and agricultural operations all across the United States.
              </p>
              <p className="text-lg text-gray-700 text-justify">
                Our commitment extends beyond just providing animal lick salt – we&apos;re dedicated to supporting American live stock industry with products that improve livestock health, increase productivity, and contribute to sustainable farming practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl h-96 overflow-hidden"
            >
              <Image 
                src="/Farmland in Maryland stock photo.jpg" 
                alt="PureLick Company History" 
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving the future of livestock nutrition through premium natural minerals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden min-h-[400px]"
            >
              <div className="absolute inset-0 opacity-90">
                <Image 
                  src="/Horse Pic copy.png" 
                  alt="Background" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase text-center">Our Mission</h3>
                <p className="text-gray-800 text-lg text-justify" style={{ fontFamily: 'Georgia, serif' }}>
                  To provide American farmers and ranchers with the highest quality Himalayan pink animal lick salt to enhance animal health, improve productivity, and support sustainable agricultural practices through ethical sourcing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden min-h-[400px]"
            >
              <div className="absolute inset-0 opacity-90">
                <Image 
                  src="/Cow Pic copy.png" 
                  alt="Background" 
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase text-center">Our Vision</h3>
                <p className="text-gray-800 text-lg text-justify" style={{ fontFamily: 'Georgia, serif' }}>
                  To become the leading supplier of premium mineral supplements for livestock in North America, while promoting sustainable mining practices and contributing to the health and prosperity of agricultural communities worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="bg-gradient-to-br from-pink-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#FF9798]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Quality */}
      <section className="py-20" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[7fr_3fr] gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl h-[500px] overflow-hidden"
            >
              <Image 
                src="/SaltMinne.png" 
                alt="Ethical Sourcing" 
                fill
                className="object-contain rounded-2xl"
                style={{ objectPosition: 'center center' }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
                Ethical Sourcing & Quality Assurance
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Our Animal lick salt is sourced exclusively from the Khewra Salt Mines in Pakistan, one of the world&apos;s oldest and largest salt mines. These deposits, formed over 250 million years ago, remain completely free from modern environmental pollutants.
              </p>
              
              <div className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#FF9798] mt-1" size={20} />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1920px] mx-auto">
          <Image 
            src="/1920x400 MYRILAND new.jpg" 
            alt="Maryland the Beautiful" 
            width={1920}
            height={400}
            className="w-full h-auto"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#FF9798] text-3xl">M</span><span className="text-[#FF9798] text-2xl">AMMA</span><span className="text-[#FF9798] text-3xl">L</span><span className="text-[#FF9798] text-2xl">ICK</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Premium Himalayan Pink Animal Lick Salt for healthier livestock across America.
              </p>
            </div>
            
            {/* Products section hidden temporarily */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">2kg Salt Licks</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">5kg Salt Licks</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">10kg Salt Licks</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Hanging Licks</Link></li>
              </ul>
            </div> */}
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Knowledge Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/wholesale" className="hover:text-white transition-colors">Bulk Orders</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 sales@mammalick.com</p>
                <p>📞 443-762-0441</p>
                <p>📍 USA Distribution Center</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MammaLick. All rights reserved. | Premium Himalayan Pink Animal Lick Salt Products for Healty Livestock</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Data
const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on the purity and quality of our lick salt"
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Ethical sourcing and environmentally responsible mining practices"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated support and service to help your livestock thrive"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement and innovation to our products and processes"
  }
]

const qualityPoints = [
  "Hand-selected salt deposits for optimal mineral content and purity",
  "Sustainable mining practices that preserve the environment",
  "Direct partnerships with certified mining operations",
  "Complete traceability from mine to your farm"
]