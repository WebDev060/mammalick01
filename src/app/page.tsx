'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Truck, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { OrganizationJsonLd } from '@/components/StructuredData'
import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <OrganizationJsonLd />
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center pt-12">
        <div className="absolute inset-0">
          {/* Carousel Component */}
          <HeroCarousel />
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        <div className="absolute bottom-16 right-8 md:right-16 z-10 text-right max-w-xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-2xl text-white"
          >
            PURE HIMALAYAN ANIMAL<br />LICK SALT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl mb-4 text-white drop-shadow-lg"
          >
            Nature&apos;s Essential Mineral for Healthy Livestock
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
              Why Choose Himalayan Pink Animal Lick Salt?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Packed with 84 essential trace minerals, our lick salt provides comprehensive nutrition for your livestock
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center">
                  <Image src={benefit.icon} alt={benefit.title} width={80} height={80} className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Pink Salt Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Main large image */}
              <div className="relative rounded-2xl h-72 w-full overflow-hidden">
                <Image 
                  src="/Layer 11.png" 
                  alt="Himalayan Salt Mine Tunnel" 
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              {/* Grid of smaller images - same width as top image */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl h-36 overflow-hidden">
                  <Image 
                    src="/Khewra Salt Mine.jpg" 
                    alt="Khewra Salt Mine" 
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="relative rounded-xl h-36 overflow-hidden">
                  <Image 
                    src="/Khewra Salt Mine 2.jpg" 
                    alt="Salt Mine Interior" 
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
                Pure from the Himalayan Mountains
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Sourced directly from the pristine Khewra Salt Mines in Pakistan, our pink Himalayan salt licks are formed over 250 million years ago, completely free from modern pollutants.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-[#FF9798]" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animal Types Section */}
      <section className="py-20" style={{ backgroundColor: '#FFE4E1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
              Perfect for all FARM animals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our salt licks benefit a wide range of livestock and wildlife
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {animals.map((animal, index) => (
              <motion.div
                key={animal.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 group-hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image src={animal.image} alt={animal.name} fill className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FF9798] mb-3">{animal.name}</h3>
                  <p className="text-gray-600">{animal.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moreAnimals.map((animal, index) => (
              <motion.div
                key={animal.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 group-hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image src={animal.image} alt={animal.name} fill className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FF9798] mb-3">{animal.name}</h3>
                  <p className="text-gray-600">{animal.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#FF9798] mb-4 uppercase">
              Trusted by FARMERS all across America
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about PureLick salt licks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
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
              Ready to Improve Your Livestock&apos;s Health?
            </h2>
            <p className="text-xl mb-8 text-white">
              Contact us today for wholesale pricing and bulk orders. Free shipping available for large quantities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors">
                Get Wholesale Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-md text-lg font-semibold transition-colors">
                Contact Us
              </button>
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
                <span className="text-[#FF9798]">MAMMA</span><span className="text-white">LICK</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Premium Himalayan Pink Salt Licks for healthier livestock across America.
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
                <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 sales@mammalick.com</p>
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
const benefits = [
  {
    icon: "/Layer 10.png",
    title: "84 Trace Minerals",
    description: "Complete mineral profile including calcium, potassium, magnesium, and iron"
  },
  {
    icon: "/Layer 7.png",
    title: "Improves Health",
    description: "Boosts immune system, improves digestion, and increases milk production"
  },
  {
    icon: "/Layer 8.png",
    title: "Weather Resistant",
    description: "Naturally durable and long-lasting in all outdoor conditions"
  },
  {
    icon: "/Layer 9.png",
    title: "Pure & Natural",
    description: "No artificial additives, chemicals, or processing - straight from nature"
  }
]

const features = [
  "Mined from 250-million-year-old deposits",
  "Hand-selected for purity and quality",
  "Rich natural pink color indicates high mineral content",
  "Sustainable and eco-friendly extraction methods"
]

const animals = [
  {
    name: "Horses",
    image: "/Layer 14.png",
    benefits: "Improves coat shine, muscle function, and performance"
  },
  {
    name: "Cattle",
    image: "/Layer 15.png",
    benefits: "Increases milk production and supports healthy weight gain"
  },
  {
    name: "Goats",
    image: "/Layer 16.png",
    benefits: "Enhances fertility and improves overall herd health"
  },
  {
    name: "Sheep",
    image: "/sheep.jpg",
    benefits: "Promotes wool quality and overall flock health"
  }
]

const moreAnimals = [
  {
    name: "Donkey",
    image: "/donkey.jpg",
    benefits: "Supports hoof health and maintains strong bones"
  },
  {
    name: "Camel",
    image: "/camel.jpg",
    benefits: "Supports hydration and mineral balance"
  },
  {
    name: "Lama",
    image: "/lama.jpg",
    benefits: "Enhances fiber quality and maintains healthy weight"
  },
  {
    name: "Wildlife",
    image: "/Layer 17.png",
    benefits: "Attracts deer and supports natural wildlife nutrition"
  }
]

const testimonials = [
  {
    quote: "Since switching to PureLick salt licks, our dairy cows' milk production increased by 15%. The quality is exceptional!",
    name: "Sarah Johnson",
    location: "Wisconsin Dairy Farm"
  },
  {
    quote: "Our horses love these salt licks. Their coats are shinier and they seem more energetic during training.",
    name: "Mike Rodriguez",
    location: "Texas Horse Ranch"
  },
  {
    quote: "Best investment we've made for our goat farm. The animals are healthier and the licks last much longer than others.",
    name: "Linda Chen",
    location: "California Farm"
  }
]
