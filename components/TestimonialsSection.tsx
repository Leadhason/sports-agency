"use client"

import React, { useState, useEffect } from 'react'
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-black text-black" : "text-gray-300"
        }`}
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
    <div className="bg-white text-black px-10 py-20">
      {/* Header */}
      <div className="mb-16 border-t border-gray-300 pt-8 flex justify-between w-full items-center">
        <p className="text-lg font-medium">WHAT OUR <span className="text-gray-300">ATHLETES SAY</span></p>
        <p className="text-md text-gray-600 text-center font-medium max-w-lg">
          Hear from the elite athletes whose careers we've elevated and the success stories that drive us forward.
        </p>
        <p className="text-lg font-serif text-gray-300 font-medium">07<span className="text-black"> REVIEWS</span></p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Slides */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 bg-gray-50 p-12"
              >
                <div className="text-center max-w-3xl mx-auto">
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-8">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-12 leading-relaxed font-light text-2xl">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover mr-6"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-black font-mono text-xl mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-light text-lg">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>

      </div>

    </div>
  )
}

export default TestimonialsSection