'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDownRight, Users, Trophy, Target, Star, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FAQSection from "@/components/FAQSection"

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 text-black flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="gap-8 items-center">
            {/* Main headline */}
            <div className="w-full mx-auto text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight flex flex-col">
               <p className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <span>We craft</span>
                <span className="font-mono italic sm:mx-8 font-light text-3xl sm:text-5xl lg:text-7xl"> Athletes </span> 
                <span className="sm:inline">that</span>
               </p>
                <span className="mt-2 sm:mt-0">change the game</span>
              </h1>
            </div>
            {/* Content and image section */}
            <div className="w-full mt-8 sm:mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              <div className="flex-1 space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="max-w-xl">
                    <p className="text-base sm:text-lg lg:text-xl text-left text-gray-600 leading-relaxed">
                      <span className="text-xl sm:text-2xl font-light">+</span>
                      <span className="ml-6 sm:ml-10 text-black">We're a team of agents, negotiators,</span> <span className="text-black">and strategists bringing elite representation to life with purpose, passion, and unforgettable execution.</span>
                    </p>
                  </div>
                </div>
                
                {/* Get started button */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 w-fit"
                >
                  <span className="text-sm sm:text-base">Get started</span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </div>
                </Link>
              </div>

              {/* Image section */}
              <div className="flex-shrink-0 lg:w-auto w-full flex justify-center lg:justify-end">
                <div className="relative">
                  <Image 
                    src="/field-2.jpg" 
                    alt="Elite athletic training" 
                    width={400} 
                    height={300} 
                    className="rounded-xl sm:rounded-2xl object-cover w-full sm:w-80 lg:w-96 h-48 sm:h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="flex flex-col justify-between order-2 lg:order-1">
              <div className="text-xl sm:text-2xl font-light mb-6 lg:mb-0">+
                <span className="text-base sm:text-lg text-gray-600"> Not just another agency</span>
              </div>
              
              <div className="relative mx-auto lg:mx-0">
                <Image 
                  src="/port.jpeg" 
                  alt="Team collaboration" 
                  width={300} 
                  height={500} 
                  className="rounded-xl sm:rounded-2xl object-cover w-full max-w-sm sm:w-80 aspect-[1/2]"
                />
                <div className="absolute bottom-4 right-4 left-4 text-white">
                  <p className="text-base sm:text-lg leading-relaxed mb-4">
                    Every great career begins with a simple conversation — let's start yours.
                  </p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-base sm:text-lg">Marcus</span>
                    <span className="text-sm opacity-80">Founder & CEO</span>
                  </div>
                </div>
              </div>
            </div>
              <div className="w-full">
                <p className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                  Turning <span className="font-serif italic">Vision</span> into Reality
                </p>
              </div>
              
              <div className="flex flex-col space-y-6 sm:space-y-8">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-4 sm:p-6 border border-gray-300 rounded-xl sm:rounded-2xl">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      To empower athletes to reach their full potential through unparalleled representation, strategic career management, and personalized support, fostering long-term success both on and off the field.
                    </p>
                  </div>
                  <div className="p-4 sm:p-6 border border-gray-300 rounded-xl sm:rounded-2xl">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Our Goals</h3>
                    <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                      <li className="flex items-start gap-3">
                        <span className="text-black text-lg flex-shrink-0">•</span>
                        <span>Clear and focused strategy for each athlete</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-black text-lg flex-shrink-0">•</span>
                        <span>Contracts that drive meaningful impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-black text-lg flex-shrink-0">•</span>
                        <span>Representation without the chaos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-black text-lg flex-shrink-0">•</span>
                        <span>Outcomes that build lasting momentum</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-black text-lg flex-shrink-0">•</span>
                        <span>Smart solutions, tailored for each client</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href="/#" 
                  className="inline-flex w-fit items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  <span className="text-sm sm:text-base">Meet Our Team</span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </div>
                </Link>
              </div>
              
              <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 text-left text-base sm:text-lg font-light">
                <p className="text-black">© 2025 Empire <span className="text-gray-400">Sports Agency</span></p>
              </div>
            </div>
          </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Years of experience */}
            <div className="lg:col-span-3 bg-white text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-xl sm:rounded-2xl">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Years of experience</p>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-2">
                8<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                Expertise that drives meaningful results.
              </p>
            </div>

            {/* Central feature card */}
            <div className="sm:col-span-2 lg:col-span-6 order-last sm:order-none">
              <div className="bg-black text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative">
                {/* Client avatars */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="flex -space-x-2">
                    <Image 
                      src="/lead-1.jpg" 
                      alt="Client" 
                      width={32} 
                      height={32} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg border-2 border-white" 
                    />
                    <Image 
                      src="/lead-2.jpg" 
                      alt="Client" 
                      width={32} 
                      height={32} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg border-2 border-white" 
                    />
                    <Image 
                      src="/lead-1.jpg" 
                      alt="Client" 
                      width={32} 
                      height={32} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg border-2 border-white" 
                    />
                    <Image 
                      src="/lead-2.jpg" 
                      alt="Client" 
                      width={32} 
                      height={32} 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg border-2 border-white" 
                    />
                  </div>
                  <div className="ml-2 sm:ml-3 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    72+
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300">Happy athletes worldwide</p>
                
                {/* Main stat */}
                <div className="mt-4 sm:mt-6 lg:mt-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-2">
                    98<span className="text-2xl sm:text-3xl lg:text-4xl">%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-tight">
                    Athletes stay for our quality and results.
                  </p>
                </div>
              </div>
            </div>

            {/* Contracts negotiated */}
            <div className="lg:col-span-3 bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-xl sm:rounded-2xl text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Contracts negotiated</p>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-2">
                100<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                Elite deals built with purpose.
              </p>
            </div>

            {/* Championships won */}
            <div className="lg:col-span-3 bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 rounded-xl sm:rounded-2xl text-center lg:col-start-10">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Championships won</p>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-2">
                86<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                From strategy to championship visuals.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Leadership Team Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-black text-white relative overflow-hidden" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px),
          repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.015) 2px, rgba(255, 255, 255, 0.015) 4px),
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
        `,
        backgroundSize: '6px 6px, 8px 8px, 200px 200px, 300px 300px'
      }}>
        {/* Coarse texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 255, 255, 0.01) 2deg, transparent 4deg),
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255, 255, 255, 0.008) 1px, rgba(255, 255, 255, 0.008) 2px)
          `,
          backgroundSize: '12px 12px, 3px 3px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Header - Refined Elegance */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20">
            {/* Responsive content layout */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-4">
              
              {/* Left side - Minimal intro */}
              <div className="flex items-center gap-4">
                <div className="text-xl sm:text-2xl font-light text-white/80">+</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-light mb-1">Meet our team</p>
                  <p className="text-base sm:text-lg text-white">Leadership excellence</p>
                </div>
              </div>

              {/* Right side - Clean title */}
              <div className="text-left sm:text-right">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                  The team that <span className="font-serif italic text-3xl sm:text-4xl lg:text-6xl text-gray-300">builds</span>
                  <br />
                  <span className="text-5xl sm:text-6xl lg:text-8xl font-black">bold</span>
                </h2>
              </div>
            </div>

            {/* Subtle accent line */}
            <div className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
          </div>

          {/* Desktop: Revolutionary Hexagonal Constellation Layout */}
          <div className="hidden lg:block relative h-[800px] w-full">
            
            {/* Central Founder - Hexagonal Hero */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative group">
                {/* Hexagonal mask container */}
                <div className="w-80 h-80 relative overflow-hidden" style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}>
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Marcus Thompson" 
                    width={400} 
                    height={400} 
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>
                </div>
                
                {/* Rotating social ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="relative w-32 h-32 animate-spin-slow">
                    <a href="#" className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-125">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-125">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-125">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Empire badge */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
                  <div className="text-white font-bold text-sm">EMPIRE™</div>
                </div>
                
                {/* Name card */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 min-w-max">
                  <h3 className="text-2xl font-bold text-white mb-1 text-center">Marcus Thompson</h3>
                  <p className="text-gray-300 text-center">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Orbiting Team Members - Circular Formation */}
            
            {/* Sarah - Top Right Orbit */}
            <div className="absolute top-20 right-32 transform rotate-12 hover:rotate-0 transition-all duration-500 z-20">
              <div className="relative group w-64 h-80 overflow-hidden rounded-3xl shadow-2xl">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Sarah Chen" 
                  width={280} 
                  height={320} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating social constellation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="relative">
                    <a href="#" className="absolute -translate-x-8 -translate-y-4 w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="absolute translate-x-2 -translate-y-8 w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="absolute translate-x-8 translate-y-4 w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1">Sarah Chen</h3>
                  <p className="text-gray-200 text-sm">Brand Partnerships Director</p>
                </div>
              </div>
            </div>

            {/* David - Top Left Orbit */}
            <div className="absolute top-32 left-20 transform -rotate-15 hover:rotate-0 transition-all duration-500 z-20">
              <div className="relative group w-60 h-72 overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/lead-1.jpg" 
                  alt="David Rodriguez" 
                  width={260} 
                  height={300} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-black/30"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                  <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
                
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-bold text-white mb-1">David Rodriguez</h3>
                  <p className="text-gray-200 text-sm">Lead Negotiator</p>
                </div>
              </div>
            </div>

            {/* Riley - Bottom Left Satellite */}
            <div className="absolute bottom-24 left-48 transform rotate-8 hover:rotate-0 transition-all duration-500 z-15">
              <div className="relative group w-52 h-64 overflow-hidden rounded-xl shadow-lg">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Riley Brooks" 
                  width={220} 
                  height={280} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Facebook className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Twitter className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Linkedin className="w-3 h-3 text-white" />
                  </a>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base font-bold text-white mb-1">Riley Brooks</h3>
                  <p className="text-gray-200 text-xs">Senior Agent</p>
                </div>
              </div>
            </div>

            {/* Alex - Right Side Floating */}
            <div className="absolute bottom-40 right-20 transform -rotate-10 hover:rotate-0 transition-all duration-500 z-15">
              <div className="relative group w-56 h-68 overflow-hidden rounded-xl shadow-lg">
                <Image 
                  src="/lead-1.jpg" 
                  alt="Alex Morgan" 
                  width={240} 
                  height={290} 
                  className="object-cover w-full h-72 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-transparent to-black/20"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Instagram className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Twitter className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Linkedin className="w-3 h-3 text-white" />
                  </a>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base font-bold text-white mb-1">Alex Morgan</h3>
                  <p className="text-gray-200 text-xs">Financial Advisor</p>
                </div>
              </div>
            </div>

            {/* Jordan - Bottom Right Corner Accent */}
            <div className="absolute bottom-16 right-48 transform rotate-5 hover:rotate-0 transition-all duration-500 z-10">
              <div className="relative group w-48 h-60 overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Jordan Lee" 
                  width={200} 
                  height={260} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Facebook className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Instagram className="w-3 h-3 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Linkedin className="w-3 h-3 text-white" />
                  </a>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base font-bold text-white mb-1">Jordan Lee</h3>
                  <p className="text-gray-200 text-xs">Marketing Specialist</p>
                </div>
              </div>
            </div>

            {/* Connecting orbital lines - subtle animations */}
            <div className="absolute inset-0 pointer-events-none z-5">
              <svg className="w-full h-full opacity-10">
                <circle cx="50%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5">
                  <animateTransform 
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate" 
                    from="0 50% 50%" 
                    to="360 50% 50%" 
                    dur="60s" 
                    repeatCount="indefinite"/>
                </circle>
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3,7">
                  <animateTransform 
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate" 
                    from="360 50% 50%" 
                    to="0 50% 50%" 
                    dur="45s" 
                    repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>

          {/* Mobile & Tablet: Responsive Grid Layout */}
          <div className="lg:hidden">
            {/* Featured Founder - Mobile Hero */}
            <div className="mb-8 sm:mb-12 flex justify-center">
              <div className="relative group">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-3xl shadow-2xl">
                  <Image 
                    src="/founder.jpg" 
                    alt="Marcus Thompson - Founder & CEO" 
                    width={300} 
                    height={300} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Empire badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30">
                    <div className="text-white font-bold text-xs">EMPIRE™</div>
                  </div>
                </div>
                
                {/* Social icons - Mobile */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
                
                {/* Name card - Mobile */}
                <div className="mt-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Marcus Thompson</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Team Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Sarah Chen */}
              <div className="relative group">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Sarah Chen" 
                    width={400} 
                    height={480} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Sarah Chen</h3>
                    <p className="text-gray-200 text-sm">Brand Partnerships Director</p>
                  </div>
                </div>
              </div>

              {/* David Rodriguez */}
              <div className="relative group">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="David Rodriguez" 
                    width={400} 
                    height={480} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">David Rodriguez</h3>
                    <p className="text-gray-200 text-sm">Lead Negotiator</p>
                  </div>
                </div>
              </div>

              {/* Riley Brooks */}
              <div className="relative group">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Riley Brooks" 
                    width={400} 
                    height={480} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Riley Brooks</h3>
                    <p className="text-gray-200 text-sm">Senior Agent</p>
                  </div>
                </div>
              </div>

              {/* Alex Morgan */}
              <div className="relative group">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/lead-1.jpg" 
                    alt="Alex Morgan" 
                    width={400} 
                    height={480} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Alex Morgan</h3>
                    <p className="text-gray-200 text-sm">Financial Advisor</p>
                  </div>
                </div>
              </div>

              {/* Jordan Lee - Spans full width on mobile */}
              <div className="relative group sm:col-span-2 sm:max-w-md sm:mx-auto">
                <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image 
                    src="/lead-2.jpg" 
                    alt="Jordan Lee" 
                    width={400} 
                    height={480} 
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Social icons */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Jordan Lee</h3>
                    <p className="text-gray-200 text-sm">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  )
}

export default AboutPage