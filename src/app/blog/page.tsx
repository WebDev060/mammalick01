'use client'

import { motion } from 'framer-motion'
import { Droplet, Heart, Activity, TrendingUp, CheckCircle, Shield, Beaker, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function KnowledgePage() {
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
            className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-white drop-shadow-lg"
          >
            KNOWLEDGE CENTER
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-white drop-shadow"
          >
            Essential Guide to Animal Lick Salt: Science-Backed Benefits for Livestock Health
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
              Understanding Animal Lick Salt: Essential Nutrition for Livestock
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed text-justify">
              Salt (sodium chloride) is one of the most critical nutrients for livestock health, yet it&apos;s often overlooked in animal nutrition programs. Unlike many nutrients, animals cannot synthesize sodium and chloride in their bodies, making supplementation essential for optimal health and productivity.*
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed text-justify">
              Himalayan pink lick salt provide not only sodium and chloride but also trace minerals that support various physiological functions in livestock. This comprehensive guide explores the science-backed benefits of salt supplementation for your animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Salt is Essential */}
      <section className="py-16" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              Why Salt is Vital for Your Livestock
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sodium and chloride play fundamental roles in animal physiology and health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-[#FF9798]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
                Salt Deficiency: Recognizing the Signs
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Animals experiencing salt deficiency often exhibit specific behavioral and physical symptoms. Early recognition can prevent serious health issues and production losses.
              </p>
              <div className="space-y-4">
                {deficiencySigns.map((sign, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#FF9798] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl h-96 overflow-hidden shadow-xl"
            >
              <Image 
                src="/Cow & Goat.jpg" 
                alt="Healthy Livestock" 
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Himalayan Pink Salt Benefits */}
      <section className="py-16" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              Why Himalayan Pink Salt for Livestock?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Himalayan pink salt offers unique advantages over regular white salt through its natural mineral composition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {himalyanBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="bg-gradient-to-br from-pink-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-[#FF9798]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle className="text-[#FF9798] mt-0.5 flex-shrink-0" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Species-Specific Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl h-[550px] overflow-hidden shadow-xl -ml-8"
            >
              <Image 
                src="/Vibrant Green Horse Pasture in Maryland, USA stock photo (1).jpg" 
                alt="Horses Grazing" 
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
                Salt Requirements by Livestock Type
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Different livestock species have varying salt requirements based on their size, production level, and physiological needs. Understanding these requirements ensures optimal supplementation.*
              </p>
              <div className="space-y-6">
                {speciesRequirements.map((species, index) => (
                  <div key={index} className="border-l-4 border-[#FF9798] pl-6 py-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{species.species}</h4>
                    <p className="text-gray-700 mb-2">{species.requirement}</p>
                    <p className="text-sm text-gray-600 italic">{species.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16" style={{ backgroundColor: '#FFEBEC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              Best Practices for Salt Supplementation
            </h2>
            <p className="text-xl text-gray-600">
              Maximize benefits and ensure safety with proper supplementation methods
            </p>
          </motion.div>

          <div className="space-y-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#FF9798] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{practice.title}</h3>
                    <p className="text-gray-700">{practice.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Research */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase">
              Scientific Research & Evidence
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              The benefits of salt supplementation for livestock are supported by extensive scientific research and field studies conducted by agricultural universities and research institutions.*
            </p>
            
            <div style={{ backgroundColor: '#FFEBEC' }} className="p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Research Findings:</h3>
              <ul className="space-y-3">
                {researchFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Beaker className="text-[#FF9798] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#FF9798]">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>*Important Note:</strong> The information provided on this page is for educational purposes and is based on publicly available research from agricultural universities, veterinary institutions, and peer-reviewed scientific literature. Salt requirements may vary based on individual animal needs, environmental conditions, diet composition, and production systems. Always consult with a qualified veterinarian or animal nutritionist for specific recommendations tailored to your livestock operation. This information should not replace professional veterinary advice.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#FF9798] text-3xl">M</span><span className="text-[#FF9798] text-2xl">AMMA</span><span className="text-white text-3xl">L</span><span className="text-white text-2xl">ICK</span>
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
            <p>&copy; 2024 PureLick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Data Arrays
const essentialBenefits = [
  {
    icon: Droplet,
    title: "Fluid Balance",
    description: "Sodium and chloride regulate water distribution throughout the body, maintaining proper hydration and cellular function."
  },
  {
    icon: Activity,
    title: "Nerve Function",
    description: "Essential for nerve impulse transmission and muscle contraction, enabling proper movement and coordination."
  },
  {
    icon: Heart,
    title: "Digestive Health",
    description: "Chloride is crucial for stomach acid production, enabling proper digestion and nutrient absorption."
  },
  {
    icon: TrendingUp,
    title: "Growth & Production",
    description: "Adequate salt intake supports optimal milk production, weight gain, and reproductive performance."
  }
]

const deficiencySigns = [
  "Pica (abnormal licking or chewing of objects)",
  "Decreased feed and forage intake",
  "Rough, dull coat appearance",
  "Reduced milk production in dairy animals",
  "Weight loss and poor body condition",
  "Decreased water consumption",
  "Abnormal eating behavior (soil, wood, urine)"
]

const himalyanBenefits = [
  {
    icon: Shield,
    title: "Natural Purity",
    description: "Mined from ancient sea beds deep within the Himalayas",
    points: [
      "Protected from modern environmental pollutants",
      "Free from additives and processing chemicals",
      "Naturally occurring mineral composition"
    ]
  },
  {
    icon: Beaker,
    title: "Rich Trace Minerals",
    description: "Contains 84 naturally occurring minerals and elements",
    points: [
      "Iron for blood health and oxygen transport",
      "Magnesium for muscle and nerve function",
      "Calcium for bone development and milk production",
      "Potassium for cellular function and heart health"
    ]
  },
  {
    icon: Users,
    title: "High Palatability",
    description: "Animals naturally prefer the taste",
    points: [
      "Encourages consistent consumption",
      "Reduces waste compared to loose minerals",
      "Self-regulating intake based on animal needs"
    ]
  }
]

const speciesRequirements = [
  {
    species: "Beef Cattle",
    requirement: "25-50 grams per day",
    note: "Higher requirements during lactation and hot weather"
  },
  {
    species: "Dairy Cattle",
    requirement: "40-80 grams per day",
    note: "Increased needs during peak milk production"
  },
  {
    species: "Horses",
    requirement: "25-55 grams per day",
    note: "Varies with work intensity and climate"
  },
  {
    species: "Sheep & Goats",
    requirement: "5-10 grams per day",
    note: "Small ruminants with lower body mass requirements"
  },
  {
    species: "Swine",
    requirement: "8-15 grams per day",
    note: "Depends on growth stage and production phase"
  }
]

const bestPractices = [
  {
    number: "1",
    title: "Free-Choice Access",
    description: "Provide lick salt in multiple locations throughout pastures and barns, allowing animals to consume according to their individual needs."
  },
  {
    number: "2",
    title: "Weather Protection",
    description: "While lick salt can withstand rain, placing them under shelter or in covered areas extends their lifespan and maintains mineral integrity."
  },
  {
    number: "3",
    title: "Regular Monitoring",
    description: "Check consumption patterns weekly. Sudden increases or decreases may indicate health issues or dietary imbalances requiring attention."
  },
  {
    number: "4",
    title: "Clean Water Access",
    description: "Ensure unlimited access to fresh, clean water. Salt consumption naturally increases thirst, promoting proper hydration."
  },
  {
    number: "5",
    title: "Complementary to Diet",
    description: "Lick Salt supplement but don't replace a balanced diet. Consider dietary sodium content when determining supplementation needs."
  },
  {
    number: "6",
    title: "Gradual Introduction",
    description: "When introducing lick salt to animals unfamiliar with them, allow time for acceptance. Initial over-consumption typically self-regulates."
  }
]

const researchFindings = [
  "Oklahoma State University Extension reports that sodium deficiency can reduce feed intake by 10-15% and significantly impact weight gain in cattle.",
  "Journal of Dairy Science research shows that adequate salt supplementation improves milk production and composition in dairy cows.",
  "USDA studies confirm that trace mineral deficiencies cost the U.S. livestock industry billions annually in lost production.",
  "Kentucky Equine Research demonstrates that horses in work require 25-55g of salt daily, with needs doubling in hot, humid conditions.",
  "National Research Council guidelines emphasize that salt is the one mineral livestock will actively seek when deficient, making free-choice access essential.",
  "Penn State Extension research indicates that proper mineral supplementation improves immune function and reproductive performance across all livestock species."
]