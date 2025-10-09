"use client"

import React from 'react'
import Image from "next/image"
import { Plus } from 'lucide-react'

function WorksSection() {
  return (
    <div className="bg-white text-black px-10 py-20">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-6xl font-mono font-semibold mb-4">SUCCESS STORIES</h2>
        <p className="text-xl text-gray-600 font-light max-w-2xl">
          Celebrating the achievements of our elite athletes and the game-changing contracts that elevated their careers to new heights.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
        
        {/* Marcus Johnson NFL Deal - Large card [01] */}
        <div className="col-span-4 row-span-3 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/field.jpg" 
              alt="Marcus Johnson NFL Contract" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[01]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-semibold text-white">Marcus Johnson</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">$85M NFL Contract Extension</p>
            </div>
          </div>
        </div>

        {/* Sarah Chen Nike Deal - Medium card [02] */}
        <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/lead-1.jpg" 
              alt="Sarah Chen Nike Partnership" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[02]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-xl font-semibold text-white">Sarah Chen</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">$15M Nike Endorsement Deal</p>
            </div>
          </div>
        </div>

        {/* David Rodriguez Trade - Medium card [03] */}
        <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/lead-2.jpg" 
              alt="David Rodriguez Trade Success" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[03]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-xl font-semibold text-white">David Rodriguez</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">Strategic MLS Trade & Extension</p>
            </div>
          </div>
        </div>

        {/* Amanda Foster Tennis - Medium card [04] */}
        <div className="col-span-4 row-span-3 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/field.jpg" 
              alt="Amanda Foster Tennis Career" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[04]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-semibold text-white">Amanda Foster</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">WTA Career Transformation</p>
            </div>
          </div>
        </div>

        {/* Global Bank - Medium card [06] */}
        <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/lead-1.jpg" 
              alt="Global Bank Project" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[06]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-xl font-semibold text-white">James Wilson</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">$12M NBA Rookie Contract</p>
            </div>
          </div>
        </div>

        {/* Lisa Park Olympics - Large card [05] */}
        <div className="col-span-4 row-span-4 relative group overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-full">
            <Image 
              src="/lead-2.jpg" 
              alt="Lisa Park Olympic Success" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-white text-sm font-mono">[05]</span>
            </div>
            
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Plus className="w-4 h-4 text-white hover:text-black" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-3xl font-semibold text-white">Lisa Park</h3>
                <span className="text-white text-sm">2024</span>
              </div>
              <p className="text-white/80 text-sm">Olympic Gold & Sponsorship Portfolio</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WorksSection