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
    <footer className="bg-white text-black border-t border-gray-100">
      {/* Refined minimalist section */}
      <div className="px-10 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Elegant divider with subtle flourish */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px bg-gray-200 flex-1"></div>
            <div className="mx-8">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Clean 3-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Brand - Sophisticated simplicity */}
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group">
                <Image src="/logoipsum.svg" alt="Logo" width={32} height={32} />
                <h1 className="text-2xl font-bold font-mono group-hover:tracking-wider transition-all duration-300">EMPIRE</h1>
              </Link>
              
              <p className="text-gray-600 leading-relaxed max-w-sm font-light">
                Elite athlete representation agency dedicated to maximizing potential and securing futures.
              </p>
              
              {/* Minimal contact */}
              <div className="space-y-3">
                <Link 
                  href="mailto:contact@empiresports.com" 
                  className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors duration-300 group"
                >
                  <Mail className="h-4 w-4" />
                  <span className="group-hover:underline underline-offset-4">contact@empiresports.com</span>
                </Link>
                <div className="flex items-center gap-3 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Los Angeles, California</span>
                </div>
              </div>
            </div>

            {/* Navigation - Clean lists */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono font-semibold mb-6 text-sm tracking-wider">PAGES</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Services', href: '/services' },
                    { name: 'Contact', href: '/contact' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-black transition-colors duration-300 font-light hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-mono font-semibold mb-6 text-sm tracking-wider">SERVICES</h4>
                <ul className="space-y-4">
                  {[
                    'Contract Negotiation',
                    'Brand Partnerships', 
                    'Career Development',
                    'Media Relations'
                  ].map((service) => (
                    <li key={service}>
                      <Link 
                        href="/services" 
                        className="text-gray-600 hover:text-black transition-colors duration-300 font-light hover:translate-x-1 inline-block"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA - Refined elegance */}
            <div className="space-y-8">
              <div>
                <h4 className="font-mono font-semibold mb-6 text-sm tracking-wider">READY TO BEGIN?</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Let's craft your path to athletic excellence with strategic representation that delivers results.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 group"
                >
                  <span>Get started</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-3 h-3 text-black" />
                  </div>
                </Link>
              </div>

              {/* Subtle stats */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-black">$2.5B+</div>
                    <div className="text-gray-500 text-xs">Negotiated</div>
                  </div>
                  <div>
                    <div className="font-semibold text-black">150+</div>
                    <div className="text-gray-500 text-xs">Athletes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-black">98%</div>
                    <div className="text-gray-500 text-xs">Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal bottom bar */}
      <div className="border-t border-gray-100 px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Empire Sports Agency. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-light hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="text-gray-500 hover:text-black transition-all duration-300 text-sm font-light flex items-center gap-2 hover:translate-y-px"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer