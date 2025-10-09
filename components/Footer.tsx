"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image src="/logoipsum.svg" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl font-bold font-mono">EMPIRE</h1>
            </Link>
            
            <p className="text-gray-600 font-light leading-relaxed mb-8 max-w-sm">
              Elite athlete representation agency dedicated to maximizing potential and securing futures — 
              through strategic negotiations, brand partnerships, and comprehensive career management.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <Link 
                  href="mailto:contact@empiresports.com" 
                  className="text-gray-600 hover:text-black transition-colors duration-300 font-light"
                >
                  contact@empiresports.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600 font-light">
                  Los Angeles, California
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h4 className="font-mono font-semibold mb-6">PAGES</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono font-semibold mb-6">SERVICES</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Contract Negotiation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Brand Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Career Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors duration-300 font-light">
                    Media Relations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1">
            <h4 className="font-mono font-semibold mb-6">ELEVATE YOUR CAREER</h4>
            <p className="text-gray-600 font-light mb-8 leading-relaxed">
              Ready to take your athletic career to the next level? Let's secure your future with strategic representation.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              GET REPRESENTED
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Empire Sports Agency. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light flex items-center gap-1"
            >
              Back to Top
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer