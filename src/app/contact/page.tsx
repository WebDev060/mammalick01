'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Globe, Truck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          country: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 pt-28 overflow-hidden" style={{ background: 'linear-gradient(90deg, #FFD6E1 0%, #F093A6 50%, #FFD6E1 100%)' }}>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.35\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          opacity: 0.5
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 uppercase text-white drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white drop-shadow"
          >
            Get in touch for bulk pricing, or any questions about MammaLick premimum animal lick salt.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-b from-pink-50 to-orange-50 rounded-xl"
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-[#FF9798]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="text-gray-600 space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="MX">Mexico</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale Pricing</option>
                      <option value="bulk">Bulk Orders</option>
                      <option value="shipping">Shipping Questions</option>
                      <option value="support">Product Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9798] focus:border-transparent"
                    placeholder="Please provide details about your inquiry, including quantity needs, timeline, and any specific requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your inquiry! We will get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Failed to send message. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF9798] hover:bg-[#FF8889] disabled:bg-pink-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{hour.day}</span>
                      <span className="text-gray-900 font-medium">{hour.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm" style={{ color: '#FF9798' }}>
                    <Clock className="inline mr-2" size={16} />
                    We respond to all inquiries within 24 hours during business days
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#FF9798]" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">443-762-0441</p>
                      <p className="text-sm text-gray-600">Sales & Support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#FF9798]" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">sales@mammalick.com</p>
                      <p className="text-sm text-gray-600">General Inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-[#FF9798]" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Available</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 9 AM - 5 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Reach */}
              <div className="p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0">
                  <Image 
                    src="/1920x500.jpg" 
                    alt="Global Reach" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 151, 152, 0.7)' }}></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 uppercase">Global Reach</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="text-white" size={20} />
                      <span>Serving customers across North America</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="text-white" size={20} />
                      <span>Free shipping on bulk orders ($500+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#FF9798] text-3xl">M</span><span className="text-[#FF9798] text-2xl">AMMA</span><span className="text-[#FF9798] text-3xl">L</span><span className="text-[#FF9798] text-2xl">ICK</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Premium Himalayan Pink Animal Lick Salt for healthier livestock across America.
              </p>
            </div>
            
            {/* Products section hidden temporarily */}
            {/* <divsss>
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
const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: [
      "443-762-0441",
      "Mon-Fri: 9 AM - 6 PM EST"
    ]
  },
  {
    icon: Mail,
    title: "Email Support",
    details: [
      "sales@mammalick.com",
      "24/7 Support Available"
    ]
  },
  {
    icon: MapPin,
    title: "Distribution Center",
    details: [
      "USA Distribution Hub",
      "Fast nationwide shipping"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9 AM - 6 PM"
    ]
  }
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Holidays", hours: "Limited Hours" }
]

const faqs = [
  {
    question: "What is your minimum order quantity for wholesale pricing?",
    answer: "Our wholesale pricing starts at 21 units (any combination of products). We offer tiered discounts with larger quantities, up to 15% off for orders of 51+ units."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free shipping on all selected orders within the continental United States. For smaller orders, shipping rates are calculated based on weight and destination."
  },
  {
    question: "Can I get custom sizes or private labeling?",
    answer: "Absolutely! We offer custom sizing for large orders and private labeling services for distributors and farm supply stores. Contact our sales team for more information about custom solutions."
  }
]