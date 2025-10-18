'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"

interface LogoItemProps {
  src: string;
  alt: string;
  delay: number;
}

function TrustedBy() {
  const [visibleRefs, setVisibleRefs] = useState<Set<Element>>(new Set())
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)
  
  const refs = {
    section: sectionRef,
    header: headerRef,
    container: containerRef,
    firstRow: firstRowRef,
    secondRow: secondRowRef
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleRefs(prev => new Set([...prev, entry.target]))
        }
      })
    }, observerOptions)

    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (ref: React.RefObject<HTMLDivElement | null>) => ref.current ? visibleRefs.has(ref.current) : false

  const LogoItem: React.FC<LogoItemProps> = ({ src, alt, delay }) => (
    <div
      className={`flex items-center justify-center hover:scale-110 transition-all duration-500 ${
        isVisible(containerRef) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: isVisible(containerRef) ? `${delay}s` : '0s' }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={120} 
        height={50} 
        className="opacity-60 hover:opacity-100 transition-opacity duration-300 w-20 sm:w-24 lg:w-[120px] h-auto" 
      />
    </div>
  )

  const logos1 = [
    { src: '/codot-logo.svg', alt: 'Codot' },
    { src: '/logo-brand.svg', alt: 'Logo Brand' },
    { src: '/logoips-brand.svg', alt: 'Logoips' },
    { src: '/load-brand.svg', alt: 'Load' },
    { src: '/logoipsum-brand.svg', alt: 'Logoipsum' }
  ]

  const logos2 = [
    { src: '/logoipsum-2.svg', alt: 'Logoipsum' },
    { src: '/logoipsum-3.svg', alt: 'Logoipsum' },
    { src: '/codot-2.svg', alt: 'Codot' },
    { src: '/logoipsum-4.svg', alt: 'Logoipsum Foundation' },
    { src: '/logo-star.svg', alt: 'Logo Star' }
  ]

  return (
    <div 
      ref={sectionRef}
      className={`bg-white px-4 sm:px-10 py-14 transition-all duration-1000 ${
        isVisible(sectionRef) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
        <div 
          ref={headerRef}
          className={`flex flex-col text-center lg:text-left w-full lg:w-auto transition-all duration-700 delay-300 ${
            isVisible(headerRef) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <h2 className="text-xl font-semibold text-black font-mono">TRUSTED BY</h2>
          <p className="text-lg text-gray-400 font-light mt-2">LEADING BRANDS</p>
        </div>
        
        <div 
          ref={containerRef}
          className={`flex-1 w-full transition-all duration-700 delay-500 ${
            isVisible(containerRef) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div 
            ref={firstRowRef}
            className={`flex flex-wrap items-center justify-center lg:justify-between mb-8 lg:mb-12 gap-6 lg:gap-4 transition-all duration-800 ${
              isVisible(firstRowRef) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {logos1.map((logo, i) => (
              <LogoItem key={logo.alt} {...logo} delay={0.1 * (i + 1)} />
            ))}
          </div>
          
          <div 
            ref={secondRowRef}
            className={`flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-4 transition-all duration-800 delay-200 ${
              isVisible(secondRowRef) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {logos2.map((logo, i) => (
              <LogoItem key={logo.alt} {...logo} delay={0.1 * (i + 1)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy