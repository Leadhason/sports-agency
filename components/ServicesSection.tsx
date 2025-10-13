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
    <div className="bg-black text-white px-4 sm:px-8 lg:px-10 py-16 sm:py-20">
      {/* Header Section - Better mobile design */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 sm:mb-16 gap-6 sm:gap-8 lg:gap-0">
        <h2 className="text-xl sm:text-2xl font-semibold font-mono animate-fade-in-left">OUR SERVICES</h2>
        
        <div className="text-left lg:text-center max-w-md lg:max-w-lg order-3 lg:order-2 animate-fade-in">
          <p className="text-sm sm:text-md font-light leading-relaxed text-gray-300">
            Comprehensive athlete representation services designed to maximize career potential and secure your future.
          </p>
        </div>
        
        <Link href="/services" className="border border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 order-2 lg:order-3 group animate-fade-in-right">
          VIEW ALL
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </Link>
      </div>

      {/* Services List */}
      <div className="space-y-0">
        {/* Service 01 - Contract Negotiation */}
        <div className="border-t border-white/20 animate-slide-in-up">
          <button 
            onClick={() => toggleService(1)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(01)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Contract Negotiation</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Maximizing your value</p>
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 1 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 1 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Our experienced negotiation team leverages deep market knowledge and industry relationships to secure 
                    the most favorable contract terms. We analyze comparable deals, assess market value, and fight for 
                    every dollar you deserve while protecting your long-term interests.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ SALARY NEGOTIATION ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ PERFORMANCE BONUSES ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ TRADE CLAUSES ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ GUARANTEED MONEY ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ CONTRACT EXTENSIONS ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ INJURY PROTECTION ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/field.jpg" 
                    alt="Contract Negotiation" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 02 - Brand Partnerships */}
        <div className="border-t border-white/20 animate-fade-in-left">
          <button 
            onClick={() => toggleService(2)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(02)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Brand Partnerships</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Building your empire</p>
              </div>
            </div>
              
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 2 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 2 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Strategic brand partnership development that connects athletes with premium sponsors. We identify 
                    alignment opportunities, negotiate favorable terms, and manage ongoing relationships to maximize 
                    endorsement value while protecting your brand integrity.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ ENDORSEMENT DEALS ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ SPONSORSHIP AGREEMENTS ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ BRAND ALIGNMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ SOCIAL MEDIA ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ APPEARANCE FEES ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Brand Partnerships" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 03 - Career Development */}
        <div className="border-t border-white/20 animate-fade-in-right">
          <button 
            onClick={() => toggleService(3)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(03)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Career Development</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Long-term planning</p>
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 3 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 3 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Comprehensive career guidance that extends beyond the playing field. We help athletes make 
                    strategic decisions about their professional trajectory, prepare for post-career transitions, 
                    and build lasting legacies that transcend sports.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ CAREER STRATEGY ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ TRANSITION PLANNING ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ EDUCATION SUPPORT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ MENTORSHIP ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ LEGACY BUILDING ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Career Development" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 04 - Financial Management */}
        <div className="border-t border-white/20 animate-fade-in-left">
          <button 
            onClick={() => toggleService(4)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(04)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Financial Management</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Securing your future</p>
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 4 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 4 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Professional financial planning and wealth management tailored to athletes' unique earning patterns. 
                    We help you make smart investment decisions, plan for taxes, and build long-term financial security 
                    that extends well beyond your playing career.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ INVESTMENT PLANNING ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ TAX OPTIMIZATION ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ WEALTH MANAGEMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ RETIREMENT PLANNING ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ INSURANCE ]</span>
                    <span className="text-gray-400 font-light text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ ESTATE PLANNING ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/field-2.jpg" 
                    alt="Financial Management" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 05 - Marketing & PR */}
        <div className="border-t border-white/20 animate-fade-in-right">
          <button 
            onClick={() => toggleService(5)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(05)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Marketing & PR</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Amplifying your voice</p>
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 5 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 5 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Strategic marketing and public relations services to build and protect your personal brand. 
                    We manage media relations, craft compelling narratives, and create engaging content that 
                    resonates with fans while enhancing your marketability and reputation.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ MEDIA RELATIONS ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ CONTENT CREATION ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ CRISIS MANAGEMENT ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ DIGITAL MARKETING ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ PRESS CONFERENCES ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ BRAND STORYTELLING ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Marketing & PR" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 06 - Legal Services */}
        <div className="border-t border-white/20 animate-fade-in-left">
          <button 
            onClick={() => toggleService(6)}
            className="w-full py-6 sm:py-8 lg:py-12 flex items-center justify-between transition-colors duration-300 px-2 sm:px-4 lg:px-6 -mx-2 sm:-mx-4 lg:-mx-6 hover:bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-16">
              <span className="text-gray-400 text-base sm:text-lg font-serif hidden sm:block">(06)</span>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Legal Services</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-light">Protecting your interests</p>
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group flex-shrink-0">
              {openService === 6 ? (
                <Minus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              ) : (
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform duration-300" />
              )}
            </div>
          </button>
          
          {/* Expanded Content - Mobile responsive */}
          <div className={`overflow-hidden transition-all duration-500 ${openService === 6 ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 sm:ml-8 lg:ml-24">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
                    Comprehensive legal support covering all aspects of an athlete's career. Our experienced sports 
                    law team handles contract reviews, disputes, intellectual property protection, and ensures 
                    compliance with league regulations and international sports law.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ CONTRACT REVIEW ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ DISPUTE RESOLUTION ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ IP PROTECTION ]</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-4 mt-2">
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ COMPLIANCE ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ ARBITRATION ]</span>
                    <span className="text-gray-400 text-xs sm:text-xs lg:text-sm px-2 sm:px-2 lg:px-3 py-1 rounded bg-white/5">[ REGULATORY MATTERS ]</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center lg:justify-start mt-4 lg:mt-0">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Legal Services" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 w-full sm:w-4/5 lg:w-full max-w-[250px]"
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