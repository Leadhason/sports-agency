"use client"

import React, { useState } from 'react'
import Link from "next/link"
import { Plus, ArrowUpRight, Minus } from 'lucide-react'
import Image from "next/image"

function ServicesSection() {
  const [openService, setOpenService] = useState<number | null>(null)

  const toggleService = (serviceNumber: number) => {
    setOpenService(openService === serviceNumber ? null : serviceNumber)
  }

  return (
    <div className="bg-black text-white px-10 py-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-2xl font-semibold font-mono">OUR SERVICES</h2>
        
        <div className="text-center max-w-md">
          <p className="text-md font-light leading-tight">
            Comprehensive athlete representation services designed to maximize career potential and secure your future.
          </p>
        </div>
        
        <Link href="/services" className="border border-white/30 px-6 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
          VIEW ALL
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Services List */}
      <div className="space-y-0">
        {/* Service 01 - Contract Negotiation */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(1)}
            className="w-full py-12 flex items-center justify-between transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-serif">(01)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Contract Negotiation</h3>
                <p className="text-lg text-gray-400 font-light">Maximizing your value</p>
              </div>
            </div>
            
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 1 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Our experienced negotiation team leverages deep market knowledge and industry relationships to secure 
                    the most favorable contract terms. We analyze comparable deals, assess market value, and fight for 
                    every dollar you deserve while protecting your long-term interests.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ SALARY NEGOTIATION ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ PERFORMANCE BONUSES ]</span>
                    <span className="text-gray-400 text-sm  px-3 py-1 rounded">[ TRADE CLAUSES ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ GUARANTEED MONEY ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ CONTRACT EXTENSIONS ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ INJURY PROTECTION ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/field.jpg" 
                    alt="Contract Negotiation" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 02 - Brand Partnerships */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(2)}
            className="w-full py-12 flex items-center justify-between  transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-mono">(02)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Brand Partnerships</h3>
                <p className="text-lg text-gray-400 font-light">Building your empire</p>
              </div>
            </div>
              
              <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 2 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Strategic brand partnership development that connects athletes with premium sponsors. We identify 
                    alignment opportunities, negotiate favorable terms, and manage ongoing relationships to maximize 
                    endorsement value while protecting your brand integrity.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ ENDORSEMENT DEALS ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ SPONSORSHIP AGREEMENTS ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ BRAND ALIGNMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ SOCIAL MEDIA ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ APPEARANCE FEES ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Brand Partnerships" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 03 - Career Development */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(3)}
            className="w-full py-12 flex items-center justify-between transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-serif">(03)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Career Development</h3>
                <p className="text-lg text-gray-400 font-light">Long-term planning</p>
              </div>
            </div>
            
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 3 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Comprehensive career guidance that extends beyond the playing field. We help athletes make 
                    strategic decisions about their professional trajectory, prepare for post-career transitions, 
                    and build lasting legacies that transcend sports.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ CAREER STRATEGY ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ TRANSITION PLANNING ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ EDUCATION SUPPORT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ MENTORSHIP ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ LEGACY BUILDING ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Career Development" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 04 - Financial Management */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(4)}
            className="w-full py-12 flex items-center justify-between transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-serif">(04)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Financial Management</h3>
                <p className="text-lg text-gray-400 font-light">Securing your future</p>
              </div>
            </div>
            
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 4 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Professional financial planning and wealth management tailored to athletes' unique earning patterns. 
                    We help you make smart investment decisions, plan for taxes, and build long-term financial security 
                    that extends well beyond your playing career.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ INVESTMENT PLANNING ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ TAX OPTIMIZATION ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ WEALTH MANAGEMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ RETIREMENT PLANNING ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ INSURANCE ]</span>
                    <span className="text-gray-400 font-light text-sm px-3 py-1 rounded">[ ESTATE PLANNING ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/field-2.jpg" 
                    alt="Financial Management" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 05 - Marketing & PR */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(5)}
            className="w-full py-12 flex items-center justify-between transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-serif">(05)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Marketing & PR</h3>
                <p className="text-lg text-gray-400 font-light">Amplifying your voice</p>
              </div>
            </div>
            
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 5 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Strategic marketing and public relations services to build and protect your personal brand. 
                    We manage media relations, craft compelling narratives, and create engaging content that 
                    resonates with fans while enhancing your marketability and reputation.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ MEDIA RELATIONS ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ CONTENT CREATION ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ CRISIS MANAGEMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ DIGITAL MARKETING ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ PRESS CONFERENCES ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ BRAND STORYTELLING ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Marketing & PR" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 06 - Legal Services */}
        <div className="border-t border-white/20">
          <button 
            onClick={() => toggleService(6)}
            className="w-full py-12 flex items-center justify-between transition-colors duration-300 px-6 -mx-6"
          >
            <div className="flex items-center gap-16">
              <span className="text-gray-400 text-lg font-serif">(06)</span>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-2">Legal Services</h3>
                <p className="text-lg text-gray-400 font-light">Protecting your interests</p>
              </div>
            </div>
            
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              {openService === 6 ? (
                <Minus className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-5 h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-12">
              <div className="flex gap-16 ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Comprehensive legal support covering all aspects of an athlete's career. Our experienced sports 
                    law team handles contract reviews, disputes, intellectual property protection, and ensures 
                    compliance with league regulations and international sports law.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ CONTRACT REVIEW ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ DISPUTE RESOLUTION ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ IP PROTECTION ]</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ COMPLIANCE ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ ARBITRATION ]</span>
                    <span className="text-gray-400 text-sm px-3 py-1 rounded">[ REGULATORY MATTERS ]</span>
                  </div>
                </div>
                
                <div className="w-64">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Legal Services" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-white/20"></div>
      </div>
    </div>
  )
}

export default ServicesSection