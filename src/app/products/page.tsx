'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Scale, Package, Truck, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ProductsPage() {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 uppercase text-white drop-shadow-lg"
          >
            Premium Animal Lick Salt Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white drop-shadow"
          >
            MammaLick Brand offers Premium Himalayan Pink Animal Lick Salt. Choose from our assorted sizes for your various animal needs
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-80 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="text-[#FF9798]" size={18} />
                    <span className="text-[#FF9798] font-semibold text-sm">{product.weight}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#FF9798] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-[#FF9798]">
                      ${product.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      Free Shipping
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link href="/contact" className="w-full bg-[#FF9798] hover:bg-[#FF8889] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      <DollarSign size={18} />
                      Buy Now
                    </Link>
                    <Link href="/contact" className="w-full border-2 border-[#FF9798] text-[#FF9798] hover:bg-[#FF9798] hover:text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart size={18} />
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing Section */}
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
              MammaLick Specials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with larger quantities. Perfect for farms, ranches, and distributors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 ${tier.featured 
                  ? 'bg-[#FF9798] text-white shadow-xl' 
                  : 'bg-gray-50'
                }`}
              >
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${tier.featured ? 'text-white' : 'text-[#FF9798]'}`}>
                    {tier.discount}
                  </div>
                  <p className={`mb-6 ${tier.featured ? 'text-pink-100' : 'text-gray-600'}`}>
                    {/* {tier.description} */}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-2 ${tier.featured ? 'text-white' : 'text-gray-700'}`}>
                        <div className={`w-2 h-2 rounded-full ${tier.featured ? 'bg-white' : 'bg-[#FF9798]'}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                    tier.featured 
                      ? 'bg-white text-[#FF9798] hover:bg-gray-100' 
                      : 'bg-[#FF9798] text-white hover:bg-[#FF8889]'
                  }`}>
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Information */}
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
              Shipping & Delivery
            </h2>
            <p className="text-xl text-gray-600">
              Fast, reliable delivery across the United States
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-[#FF9798]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #FFD9E1 0%, #FFB6C1 50%, #FFD9E1 100%)' }}>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.35\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          opacity: 0.5
        }}></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg uppercase">
              Need Custom Quantities?
            </h2>
            <p className="text-xl mb-8 text-white">
              Contact our sales team for custom orders, special pricing, and bulk shipping arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#FF9798] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Call: 443-762-0441
              </Link>
            </div>
          </motion.div>
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
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">5kg Lick Salt</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">10kg Lick Salt</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">15kg Lick Salt</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Hanging Licks</Link></li>
              </ul>
            </div>
            
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
const products = [
  {
    id: 1,
    name: "Standard 2 Pack - 5kg / 11 lbs",
    weight: "2kg / 5.5 lbs",
    price: "24.99",
    image: "/standard salt lick.jpeg",
    features: [
      "Perfect for pets and wildlife",
      "Easy to handle and place",
      "Weather-resistant design"
    ]
  },
  {
    id: 2,
    name: "Standard 4 Pack - 10kg / 22 lbs",
    weight: "2kg / 5.5 lbs",
    price: "49.99",
    image: "/medium salt link.jpeg",
    features: [
      "Extended durability",
      "Lasts 6-8 months average",
      "Rope hole for hanging"
    ]
  },
  {
    id: 3,
    name: "Standard 6 Pack - 15kg / 33 lbs",
    weight: "2kg / 5.5 lbs",
    price: "84.99",
    image: "/large salt link.jpeg",
    features: [
      "Maximum cost efficiency",
      "Long Lasting",
      "Heavy-duty construction"
    ]
  }
]

const pricingTiers = [
  {
    name: "Starter",
    discount: "5% OFF",
    features: [
      "5-20 units per order",
      "Standard shipping",
      "Basic support",
      "Monthly delivery options",
      "Quality guarantee"
    ],
    featured: false
  },
  {
    name: "Professional",
    discount: "10% OFF",
    features: [
      "21-50 units per order",
      "Free shipping on orders $500+",
      "Priority support",
      "Bi-weekly delivery options",
      "Volume pricing"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    discount: "15% OFF",
    features: [
      "51+ units per order",
      "Always free shipping",
      "Dedicated account manager",
      "Custom delivery schedules",
      "Exclusive wholesale pricing"
    ],
    featured: false
  }
]

const shippingInfo = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "2-5 business days shipping across continental US"
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Professional packaging to prevent damage during transit"
  },
  {
    icon: DollarSign,
    title: "Free Shipping",
    description: "Orders over $500 qualify for free shipping"
  },
  {
    icon: Scale,
    title: "Quality Guarantee",
    description: "100% satisfaction guaranteed"
  }
]