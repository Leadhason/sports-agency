"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "NFL Quarterback",
    company: "Chicago Bears",
    content: "Empire Sports Agency transformed my career completely. Their negotiation skills are unmatched and they secured me the contract of my dreams. I couldn't have achieved this without their expert guidance.",
    rating: 5,
    image: "/lead-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Olympic Swimmer",
    company: "Team USA",
    content: "Working with Empire was a game-changer. They didn't just handle my contracts, they built my entire brand and secured endorsements that align perfectly with my values.",
    rating: 5,
    image: "/lead-2.jpg"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Professional Soccer Player",
    company: "LA Galaxy",
    content: "Their comprehensive approach is exactly what modern athletes need. From contract negotiations to brand partnerships, Empire handles everything with incredible professionalism and results.",
    rating: 5,
    image: "/lead-1.jpg"
  },
  {
    id: 4,
    name: "Amanda Foster",
    role: "Tennis Pro",
    company: "WTA Tour",
    content: "Empire's team brings both strategic thinking and personal care to athlete representation. They've helped me maximize my earning potential while building a lasting legacy in tennis.",
    rating: 5,
    image: "/lead-2.jpg"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "NBA Forward",
    company: "Miami Heat",
    content: "The attention to detail and strategic thinking Empire brought to my career was exceptional. They helped me secure endorsements and build a brand that truly reflects my values both on and off the court.",
    rating: 5,
    image: "/lead-1.jpg"
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Track & Field Athlete",
    company: "Olympic Team",
    content: "Empire exceeded our expectations in every way. Their approach to athlete representation is collaborative, insightful, and produces results that make a real impact on your career and financial future.",
    rating: 5,
    image: "/lead-2.jpg"
  }
];

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Progressive disclosure animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, observerOptions)

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      })
    }, observerOptions)

    const carouselObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCarouselVisible(true)
        }
      })
    }, observerOptions)

    if (sectionRef.current) sectionObserver.observe(sectionRef.current)
    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (carouselRef.current) carouselObserver.observe(carouselRef.current)

    return () => {
      sectionObserver.disconnect()
      headerObserver.disconnect()
      carouselObserver.disconnect()
    }
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 sm:h-5 sm:w-5 ${
          index < rating ? "fill-black text-black" : "text-gray-300"
        } transition-all duration-300`}
      />
    ));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      ref={sectionRef}
      className={`bg-white text-black px-4 sm:px-8 lg:px-10 py-16 sm:py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Header */}
      <div 
        ref={headerRef}
        className={`mb-12 sm:mb-16 border-t border-gray-300 pt-6 sm:pt-8 flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-6 lg:gap-0 transition-all duration-700 delay-300 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-base sm:text-lg font-medium">WHAT OUR <span className="text-gray-300">ATHLETES SAY</span></p>
        <p className="text-sm sm:text-md text-gray-600 text-left lg:text-center font-medium max-w-lg order-3 lg:order-2">
          Hear from the elite athletes whose careers we've elevated and the success stories that drive us forward.
        </p>
        <p className="text-base sm:text-lg font-serif text-gray-300 font-medium order-2 lg:order-3">06<span className="text-black"> REVIEWS</span></p>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className={`relative max-w-5xl mx-auto transition-all duration-700 delay-500 ${
          carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Testimonial Slides */}
        <div className="overflow-hidden rounded-lg sm:rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 bg-gray-50 p-6 sm:p-8 lg:p-12"
              >
                <div className="text-center max-w-4xl mx-auto">
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light text-lg sm:text-xl lg:text-2xl">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="font-semibold text-black font-mono text-lg sm:text-xl mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-light text-base sm:text-lg">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center hover:scale-105 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center hover:scale-105 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>

      </div>

    </div>
  )
}

export default TestimonialsSection