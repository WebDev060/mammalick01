'use client'

import { motion } from 'framer-motion'
import { Package, Truck, DollarSign, Users, CheckCircle, Mail, Phone, Globe, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    estimatedMonthlyVolume: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Wholesale inquiry submitted:', formData)
    alert('Thank you for your wholesale inquiry! Our team will contact you within 24 hours with a custom quote.')
  }

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
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Wholesale & Bulk Orders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Partner with PureLick for volume discounts, customized solutions, and dedicated support for your business
          </motion.p>
        </div>
      </section>

      {/* Wholesale Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive benefits for wholesale partners and bulk buyers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="py-20" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Volume Discount Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The more you order, the more you save
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-2xl shadow-lg ${
                  tier.featured ? 'ring-4 ring-pink-600 transform scale-105' : ''
                }`}
              >
                {tier.featured && (
                  <div className="bg-gradient-to-r from-pink-600 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-lg inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.title}
                </h3>
                <p className="text-gray-600 mb-4">{tier.volume}</p>
                <div className="text-4xl font-bold text-pink-600 mb-6">
                  {tier.discount}
                  <span className="text-xl text-gray-600"> OFF</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => window.location.href = '#inquiry-form'}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.featured
                      ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white hover:opacity-90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across the agricultural sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-700">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-20" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Request Wholesale Quote
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="you@business.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="United States"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  <option value="">Select Type</option>
                  <option value="farm-supply">Farm Supply Store</option>
                  <option value="feed-store">Feed Store</option>
                  <option value="distributor">Distributor</option>
                  <option value="large-ranch">Large Ranch/Farm</option>
                  <option value="cooperative">Agricultural Cooperative</option>
                  <option value="retailer">Retail Chain</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Estimated Monthly Volume *
              </label>
              <select
                name="estimatedMonthlyVolume"
                value={formData.estimatedMonthlyVolume}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              >
                <option value="">Select Volume</option>
                <option value="500-1000kg">500-1,000 kg</option>
                <option value="1000-2500kg">1,000-2,500 kg</option>
                <option value="2500-5000kg">2,500-5,000 kg</option>
                <option value="5000+kg">5,000+ kg</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Tell us about your business needs, specific products you're interested in, delivery requirements, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit Wholesale Inquiry
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Mail className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700">wholesale@purelick.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Phone className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri: 8AM-6PM EST</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700">USA Distribution Center</p>
              <p className="text-gray-600 text-sm mt-2">By appointment only</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-pink-400">MAMMA</span><span className="text-white">LICK</span>
              </h3>
              <p className="text-gray-400 mb-4">Premium Himalayan Pink Lick Salt for healthier livestock.</p>
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
                <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 contact@mammalick.com</p>
                <p>📞 443-762-0441</p>
                <p>📍 USA Distribution Center</p>
                <p>🚚 Free Shipping on Bulk Orders</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PureLick. All rights reserved. | Premium Himalayan Salt Licks for Livestock</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Data
const wholesaleBenefits = [
  {
    icon: <DollarSign className="text-pink-600" size={32} />,
    title: 'Volume Discounts',
    description: 'Save 5-25% on bulk orders with tiered pricing that scales with your business'
  },
  {
    icon: <Truck className="text-pink-600" size={32} />,
    title: 'Free Shipping',
    description: 'Complimentary freight shipping on orders over $2,500 to all US states'
  },
  {
    icon: <Users className="text-pink-600" size={32} />,
    title: 'Dedicated Support',
    description: 'Personal account manager to handle your orders and business needs'
  },
  {
    icon: <Package className="text-pink-600" size={32} />,
    title: 'Custom Solutions',
    description: 'Private labeling, custom packaging, and tailored product offerings'
  }
]

const pricingTiers = [
  {
    title: 'Starter',
    volume: '500-1,000 kg/month',
    discount: '5-10%',
    featured: false,
    features: [
      'Volume discount on all products',
      'Standard shipping rates',
      'Email support',
      'Net 30 payment terms',
      'Quarterly reviews'
    ]
  },
  {
    title: 'Growth',
    volume: '1,000-2,500 kg/month',
    discount: '10-15%',
    featured: true,
    features: [
      'Enhanced volume discounts',
      'Free shipping over $2,500',
      'Dedicated account manager',
      'Net 45 payment terms',
      'Monthly business reviews',
      'Priority order processing'
    ]
  },
  {
    title: 'Enterprise',
    volume: '2,500+ kg/month',
    discount: '15-25%',
    featured: false,
    features: [
      'Maximum volume discounts',
      'Free shipping on all orders',
      'Premium account management',
      'Custom payment terms',
      'Weekly order coordination',
      'Custom packaging options',
      'White label opportunities'
    ]
  }
]

const industries = [
  {
    name: 'Farm Supply Stores',
    description: 'Retail outlets serving local farmers and ranchers with quality agricultural products'
  },
  {
    name: 'Feed & Grain Distributors',
    description: 'Wholesale distributors supplying livestock nutrition products to the agricultural sector'
  },
  {
    name: 'Large Ranches & Farms',
    description: 'Operations managing significant livestock populations requiring bulk mineral supplementation'
  },
  {
    name: 'Agricultural Cooperatives',
    description: 'Member-owned organizations purchasing in volume for collective benefit'
  },
  {
    name: 'Veterinary Practices',
    description: 'Animal health professionals recommending and supplying mineral supplements'
  },
  {
    name: 'Equestrian Centers',
    description: 'Horse boarding, training, and breeding facilities with multiple animals'
  }
]
