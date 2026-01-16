'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-[#FFEBEB] bg-opacity-40 shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Embossed Logo - Responsive for all screen sizes */}
          <div className="absolute left-2 sm:left-4 lg:left-8 top-2 sm:top-1 z-50">
            <Link href="/" className="block">
              <div className="bg-white rounded-full shadow-xl p-2.5 sm:p-3.5 border-[5px] border-[#E89BA8] w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                <Image 
                  src="/Vector Smart Object.png" 
                  alt="PureLick Logo" 
                  width={120} 
                  height={120} 
                  className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-lg" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link 
              href="/" 
              className={`transition-colors text-base font-bold ${
                isActive('/') 
                  ? 'text-[#D4758C]' 
                  : 'text-[#D4758C] hover:text-[#B85973]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`transition-colors text-base font-bold ${
                isActive('/products') 
                  ? 'text-[#D4758C]' 
                  : 'text-[#D4758C] hover:text-[#B85973]'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors text-base font-bold ${
                isActive('/about') 
                  ? 'text-[#D4758C]' 
                  : 'text-[#D4758C] hover:text-[#B85973]'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors text-base font-bold ${
                isActive('/blog') 
                  ? 'text-[#D4758C]' 
                  : 'text-[#D4758C] hover:text-[#B85973]'
              }`}
            >
              Knowledge
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors text-base font-bold ${
                isActive('/contact') 
                  ? 'text-[#D4758C]' 
                  : 'text-[#D4758C] hover:text-[#B85973]'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#FF989A] text-white px-6 py-2.5 rounded-md hover:bg-[#FF7A84] transition-colors font-semibold text-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={toggleMenu}
                className={`px-4 py-2 text-lg font-bold transition-colors ${
                  isActive('/') 
                    ? 'text-pink-600' + ' ' + 'bg-[#FFEBEC]' 
                    : 'text-pink-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                onClick={toggleMenu}
                className={`px-4 py-2 text-lg font-bold transition-colors ${
                  isActive('/products') 
                    ? 'text-pink-600' + ' ' + 'bg-[#FFEBEC]' 
                    : 'text-pink-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                onClick={toggleMenu}
                className={`px-4 py-2 text-lg font-bold transition-colors ${
                  isActive('/about') 
                    ? 'text-pink-600' + ' ' + 'bg-[#FFEBEC]' 
                    : 'text-pink-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                About Us
              </Link>
              <Link 
                href="/blog" 
                onClick={toggleMenu}
                className={`px-4 py-2 text-lg font-bold transition-colors ${
                  isActive('/blog') 
                    ? 'text-pink-600' + ' ' + 'bg-[#FFEBEC]' 
                    : 'text-pink-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                Knowledge
              </Link>
              <Link 
                href="/contact" 
                onClick={toggleMenu}
                className={`px-4 py-2 text-lg font-bold transition-colors ${
                  isActive('/contact') 
                    ? 'text-pink-600' + ' ' + 'bg-[#FFEBEC]' 
                    : 'text-pink-500 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                onClick={toggleMenu}
                className="mx-4 bg-[#FF989A] text-white px-6 py-3 rounded-lg hover:bg-[#FF7A84] transition-colors text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
