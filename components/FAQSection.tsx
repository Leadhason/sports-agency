"use client"

import React, { useState, useEffect, useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services does Empire Sports Agency offer?",
    answer: "We provide comprehensive athlete representation including contract negotiation, brand partnerships, career development, financial planning, and media relations. Our full-service approach ensures every aspect of your athletic career is strategically managed for maximum success."
  },
  {
    id: 2,
    question: "How do you determine athlete representation fees?",
    answer: "Our commission structure is competitive and transparent, typically ranging from 3-5% depending on the type of deal and services required. We only succeed when you succeed - our fees are earned through results, not upfront payments."
  },
  {
    id: 3,
    question: "Do you represent athletes in all sports?",
    answer: "Yes, Empire Sports Agency represents elite athletes across all major professional sports including NFL, NBA, MLB, NHL, MLS, Tennis, Golf, Olympic sports, and international competitions. Our expertise spans the entire athletic landscape."
  },
  {
    id: 4,
    question: "How do you negotiate contracts for athletes?",
    answer: "Our negotiation process combines deep market analysis, performance metrics evaluation, and strategic positioning. We leverage industry relationships, comparable contract data, and future earning potential to secure the most favorable terms possible while protecting your interests."
  },
  {
    id: 5,
    question: "What kind of brand partnerships can you secure?",
    answer: "We develop strategic partnerships with premium brands that align with your values and career goals. From equipment deals to lifestyle endorsements, we maximize your marketability while building authentic, long-term relationships that extend beyond your playing career."
  },
  {
    id: 6,
    question: "What makes Empire Sports Agency different?",
    answer: "Our personalized approach, proven track record, and comprehensive career management set us apart. We limit our client roster to ensure dedicated attention, have negotiated over $2.5B in contracts, and focus on building lasting legacies rather than just securing deals."
  }
];

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current) {
          setIsVisible(true)
        } else if (entry.target === headerRef.current) {
          setHeaderVisible(true)
        } else if (entry.target === contentRef.current) {
          setContentVisible(true)
        } else if (entry.target === ctaRef.current) {
          setCtaVisible(true)
        }
      })
    }, observerOptions)

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (headerRef.current) observer.observe(headerRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (faqNumber: number) => {
    setOpenFAQ(openFAQ === faqNumber ? null : faqNumber)
  }

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
        <p className="text-base sm:text-lg font-medium">FAQs</p>
        <p className="text-sm sm:text-lg text-gray-600 text-left lg:text-center font-medium max-w-lg flex flex-col">
          Have questions? <span className="text-black">Discover the answers here</span>
        </p>
        <p className="text-base sm:text-lg font-serif text-gray-300 font-medium">06<span className="text-black"> QUESTIONS</span></p>
      </div>

      <div 
        ref={contentRef}
        className={`mb-12 sm:mb-16 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 transition-all duration-700 delay-500 ${
          contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="w-full lg:max-w-md">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">Still got more questions?</h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
            Our proven process eliminates complexities, saves you time and money, and ensures a successful athletic career journey.
          </p>
          <button className="mt-4 sm:mt-6 border-b border-black pb-1 text-black font-medium hover:text-gray-600 transition-colors text-sm sm:text-base flex items-center gap-1">
            ASK YOUR QUESTION
            <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>  
        
        <div className="flex-1 w-full max-w-3xl">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`border-t border-gray-200 transition-all duration-500 ${
                  contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: contentVisible ? `${600 + index * 100}ms` : '0ms' }}
              >
                <button 
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-6 sm:py-8 text-left flex items-center justify-between group hover:bg-gray-50/50 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-black pr-4 sm:pr-8 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <div className="w-3 sm:w-4 h-0.5 bg-black transition-transform duration-300"></div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-3 sm:w-4 h-0.5 bg-black transition-transform duration-300"></div>
                          <div className="w-0.5 h-3 sm:h-4 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === faq.id
                      ? "max-h-[500px] sm:max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 sm:pb-8 px-2 sm:px-4 pr-8 sm:pr-12">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className={`mt-16 sm:mt-20 transition-all duration-700 delay-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-black rounded-xl sm:rounded-2xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"></div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6 leading-tight">
              Ready to elevate 
              <span className="font-mono italic"> your game?</span>
            </h3>
            
            <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Every champion needs the right representation. Let's discuss how we can unlock your potential.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span className="text-sm sm:text-base">Start Conversation</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowDownRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </button>
              
              <button className="text-white hover:text-gray-300 transition-colors duration-300 underline underline-offset-4 decoration-white/40 hover:decoration-white/80 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection