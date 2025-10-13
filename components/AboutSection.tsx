'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { ArrowDownRight } from 'lucide-react'
import Link from "next/link"

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [imagesVisible, setImagesVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, observerOptions)

    const imagesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImagesVisible(true)
        }
      })
    }, observerOptions)

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContentVisible(true)
        }
      })
    }, observerOptions)

    if (sectionRef.current) sectionObserver.observe(sectionRef.current)
    if (imagesRef.current) imagesObserver.observe(imagesRef.current)
    if (contentRef.current) contentObserver.observe(contentRef.current)

    return () => {
      sectionObserver.disconnect()
      imagesObserver.disconnect()
      contentObserver.disconnect()
    }
  }, [])
  return (
    <div 
      ref={sectionRef}
      className={`bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 mt-6 sm:mt-8 md:mt-10 flex flex-col transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Header Section - Mobile responsive */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
        <div className={`flex justify-start items-start transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
           <Image 
             src="/logoipsum.svg" 
             alt="Logo" 
             width={60} 
             height={60} 
             className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300" 
           />
        </div>
        <div className={`flex justify-start lg:justify-center items-start lg:items-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full lg:max-w-3xl transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <p className="leading-tight">We are a premier sports agency dedicated to empowering athletes and elevating careers. Our passion is to unlock potential and create championship opportunities — blending strategic expertise with personalized athlete development.</p>
        </div>
      </div>
      {/* Main Content Section - Mobile responsive */}
      <div className="flex flex-col xl:flex-row justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mt-12 sm:mt-16 md:mt-20">
        {/* Left Column - Our Approach - Hidden on small screens */}
        <div 
          ref={imagesRef}
          className={`hidden md:flex flex-col justify-between items-start w-full xl:max-w-md order-2 xl:order-1 transition-all duration-800 delay-700 ${
            imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
           <h2 className="font-light text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12">OUR APPROACH</h2>
           <div className="flex flex-row sm:flex-row justify-center sm:justify-start items-center gap-3 sm:gap-4 w-full">
            <Image 
              src="/lead-1.jpg" 
              alt="Sports agent" 
              width={120} 
              height={120} 
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover hover:scale-105 transition-all duration-500 ${
                imagesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{transitionDelay: imagesVisible ? '0.2s' : '0s'}}
            />
            <Image 
              src="/lead-2.jpg" 
              alt="Athlete consultation" 
              width={120} 
              height={120} 
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg object-cover hover:scale-105 transition-all duration-500 ${
                imagesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{transitionDelay: imagesVisible ? '0.4s' : '0s'}}
            />
            <Image 
              src="/lead-1.jpg" 
              alt="Contract negotiation" 
              width={120} 
              height={120} 
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover hover:scale-105 transition-all duration-500 ${
                imagesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{transitionDelay: imagesVisible ? '0.6s' : '0s'}}
            />
           </div>
        </div>
        
        {/* Right Column - Content */}
        <div 
          ref={contentRef}
          className={`flex flex-col justify-start items-start w-full xl:max-w-2xl order-1 xl:order-2 transition-all duration-800 delay-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold text-black mb-6 sm:mb-8 leading-tight transition-all duration-600 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{transitionDelay: contentVisible ? '0.2s' : '0s'}}>
            Where athletic excellence meets strategic representation.
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className={`text-sm sm:text-base md:text-md text-gray-500 leading-relaxed transition-all duration-600 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{transitionDelay: contentVisible ? '0.4s' : '0s'}}>
              Empire Sports Agency represents elite athletes across multiple disciplines, from contract negotiations to brand partnerships. We are a comprehensive sports management firm dedicated to maximizing our clients' potential both on and off the field.
            </p>
            <p className={`text-sm sm:text-base md:text-md text-gray-500 leading-relaxed transition-all duration-600 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{transitionDelay: contentVisible ? '0.6s' : '0s'}}>
              Our experienced team combines deep industry knowledge with personalized service to secure record-breaking contracts, lucrative endorsements, and strategic career opportunities. We're committed to building lasting legacies for the world's most talented athletes.
            </p>
            <Link 
              href="/about" 
              className={`flex border-b border-black pb-1 items-center w-fit hover:border-gray-600 transition-all duration-600 group mt-6 sm:mt-8 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{transitionDelay: contentVisible ? '0.8s' : '0s'}}
            >
              <span className="text-sm sm:text-base font-medium group-hover:text-gray-600 transition-colors duration-300">LEARN MORE ABOUT US</span>
              <ArrowDownRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection