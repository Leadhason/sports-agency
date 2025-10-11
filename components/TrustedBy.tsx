import React from 'react'
import Image from "next/image"

function TrustedBy() {
  return (
    <div className="bg-white px-4 sm:px-10 py-14">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
        {/* Left side text - Mobile centered, desktop left aligned */}
        <div className="flex flex-col text-center lg:text-left w-full lg:w-auto animate-fade-in-left">
          <h2 className="text-xl font-semibold text-black font-mono">TRUSTED BY</h2>
          <p className="text-lg text-gray-400 font-light mt-2">LEADING BRANDS</p>
        </div>
        
        {/* Right side logos grid - Mobile responsive */}
        <div className="flex-1 w-full animate-fade-in-right">
          {/* First row of logos - Mobile scroll, tablet/desktop grid */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between mb-8 lg:mb-12 gap-6 lg:gap-4">
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/codot-logo.svg" alt="Codot" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logo-brand.svg" alt="Logo Brand" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logoips-brand.svg" alt="Logoips" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/load-brand.svg" alt="Load" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logoipsum-brand.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
          </div>
          
          {/* Second row of logos - Mobile responsive */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-4">
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logoipsum-2.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logoipsum-3.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/codot-2.svg" alt="Codot" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logoipsum-4.svg" alt="Logoipsum Foundation" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Image src="/logo-star.svg" alt="Logo Star" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy