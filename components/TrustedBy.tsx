import React from 'react'
import Image from "next/image"

function TrustedBy() {
  return (
    <div className="bg-white px-10 py-14">
      <div className="flex gap-20 items-start">
        {/* Left side text */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-black font-mono">TRUSTED BY</h2>
          <p className="text-lg text-gray-400 font-light mt-2">LEADING BRANDS</p>
        </div>
        
        {/* Right side logos grid */}
        <div className="flex-1">
          {/* First row of logos */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center justify-center">
              <Image src="/codot-logo.svg" alt="Codot" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo-brand.svg" alt="Logo Brand" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logoips-brand.svg" alt="Logoips" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/load-brand.svg" alt="Load" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logoipsum-brand.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          {/* Second row of logos */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <Image src="/logoipsum-2.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logoipsum-3.svg" alt="Logoipsum" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/codot-2.svg" alt="Codot" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logoipsum-4.svg" alt="Logoipsum Foundation" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo-star.svg" alt="Logo Star" width={120} height={50} className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy