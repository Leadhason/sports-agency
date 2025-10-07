import React from 'react'
import Link from "next/link"
import { Plus, ArrowUpRight } from 'lucide-react'

function ServicesSection() {
  return (
    <div className="bg-black text-white px-10 py-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-2xl font-semibold font-mono">OUR SERVICES</h2>
        
        <div className="text-center max-w-md">
          <p className="text-3xl font-light leading-tight">
            Bridging timeless brand principles with tomorrow's digital possibilities.
          </p>
        </div>
        
        <Link href="/services" className="border border-white/30 px-6 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
          VIEW ALL
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Services List */}
      <div className="space-y-0">
        {/* Service 01 */}
        <div className="border-t border-white/20 py-12 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 px-6 -mx-6">
          <div className="flex items-center gap-16">
            <span className="text-gray-400 text-lg font-mono">01</span>
            <div>
              <h3 className="text-3xl font-semibold mb-2">Brand Strategy</h3>
              <p className="text-xl text-gray-400 font-light">Building from inside</p>
            </div>
          </div>
          
          <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
            <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Service 02 */}
        <div className="border-t border-white/20 py-12 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 px-6 -mx-6">
          <div className="flex items-center gap-16">
            <span className="text-gray-400 text-lg font-mono">02</span>
            <div>
              <h3 className="text-3xl font-semibold mb-2">Web Design Rooted</h3>
              <p className="text-xl text-gray-400 font-light">in Strategy</p>
            </div>
          </div>
          
          <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
            <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Service 03 */}
        <div className="border-t border-white/20 py-12 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 px-6 -mx-6">
          <div className="flex items-center gap-16">
            <span className="text-gray-400 text-lg font-mono">03</span>
            <div>
              <h3 className="text-3xl font-semibold mb-2">Webflow</h3>
              <p className="text-xl text-gray-400 font-light">Development</p>
            </div>
          </div>
          
          <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
            <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom border */}
        <div className="border-t border-white/20"></div>
      </div>
    </div>
  )
}

export default ServicesSection