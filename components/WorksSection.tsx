"use client"

import React from 'react'
import Image from "next/image"
import { Plus } from 'lucide-react'
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'


function WorksSection() {
  return (
    <div className="bg-white text-black px-4 sm:px-8 lg:px-10 py-16 sm:py-20 animate-fade-in-up">
      {/* Header */}
      <div className="mb-12 sm:mb-16 border-b border-gray-300 pb-6 sm:pb-8 flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-6 lg:gap-0">
        <p className="text-base sm:text-lg font-serif font-medium">OUR <span className="text-gray-300">ATHLETES</span></p>
        <p className="text-sm sm:text-md text-gray-600 text-left lg:text-center font-medium max-w-lg order-3 lg:order-2">
          Celebrating the achievements of our elite athletes and the game-changing contracts that elevated their careers to new heights.
        </p>
         <Link href="/services" className="border border-black/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 order-2 lg:order-3">
          VIEW ALL
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Responsive Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-3 sm:gap-4 auto-rows-fr lg:h-[800px] animate-fade-in-up">
        
        {/* Marcus Johnson NFL Deal - Large card [01] */}
        <div className="sm:col-span-2 lg:col-span-4 lg:row-span-3 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[280px] sm:h-[320px] lg:h-auto">
          <div className="relative h-full animate-fade-in-up">
            <Image 
              src="/field.jpg" 
              alt="Marcus Johnson NFL Contract" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[01]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Marcus Johnson</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">$85M NFL Contract Extension</p>
            </div>
          </div>
        </div>

        {/* Sarah Chen Nike Deal - Medium card [02] */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[240px] sm:h-[280px] lg:h-auto animate-fade-in-up">
          <div className="relative h-full">
            <Image 
              src="/lead-1.jpg" 
              alt="Sarah Chen Nike Partnership" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[02]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">Sarah Chen</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">$15M Nike Endorsement Deal</p>
            </div>
          </div>
        </div>

        {/* David Rodriguez Trade - Medium card [03] */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[240px] sm:h-[280px] lg:h-auto">
          <div className="relative h-full">
            <Image 
              src="/lead-2.jpg" 
              alt="David Rodriguez Trade Success" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[03]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">David Rodriguez</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">Strategic MLS Trade & Extension</p>
            </div>
          </div>
        </div>

        {/* Amanda Foster Tennis - Medium card [04] */}
        <div className="sm:col-span-2 lg:col-span-4 lg:row-span-3 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[280px] sm:h-[320px] lg:h-auto">
          <div className="relative h-full">
            <Image 
              src="/field.jpg" 
              alt="Amanda Foster Tennis Career" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[04]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Amanda Foster</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">WTA Career Transformation</p>
            </div>
          </div>
        </div>

        {/* James Wilson NBA - Medium card [06] */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[240px] sm:h-[280px] lg:h-auto">
          <div className="relative h-full">
            <Image 
              src="/lead-1.jpg" 
              alt="James Wilson NBA Contract" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[06]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">James Wilson</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">$12M NBA Rookie Contract</p>
            </div>
          </div>
        </div>

        {/* Lisa Park Olympics - Large card [05] */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-4 relative group overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-[320px] sm:h-[360px] lg:h-auto">
          <div className="relative h-full">
            <Image 
              src="/lead-2.jpg" 
              alt="Lisa Park Olympic Success" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="text-white text-xs sm:text-sm font-mono">[05]</span>
            </div>
            
            <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="flex justify-between items-end mb-1 sm:mb-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Lisa Park</h3>
                <span className="text-white text-xs sm:text-sm">2024</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">Olympic Gold & Sponsorship Portfolio</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WorksSection