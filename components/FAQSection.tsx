"use client"

import React, { useState } from 'react'
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

  const toggleFAQ = (faqNumber: number) => {
    setOpenFAQ(openFAQ === faqNumber ? null : faqNumber)
  }

  return (
    <div className="bg-white text-black px-10 py-20">
      {/* Header */}
      <div className="mb-16 border-t border-gray-300 pt-8 flex justify-between w-full">
        <p className="text-lg font-medium">FAQs</p>
        <p className="text-lg text-gray-600 text-left font-medium max-w-lg flex flex-col">
          Have questions? <span className="text-black">Discover the answers here</span>
        </p>
        <p className="text-lg font-serif text-gray-300 font-medium">07<span className="text-black"> QUESTIONS</span></p>
      </div>

      <div className="mb-16 flex justify-between items-start">
        <div className="max-w-md">
          <h2 className="text-xl font-semibold text-black mb-4">Still got more questions?</h2>
          <p className="text-gray-500 leading-relaxed">
            Our proven process eliminates complexities, saves you time and money, and ensures a successful athletic career journey.
          </p>
          <button className="mt-6 border-b border-black pb-1 text-black font-medium hover:text-gray-600 transition-colors">
            ASK YOUR QUESTION
            <ArrowDownRight className="w-4 h-4 inline-block ml-1" />
          </button>
        </div>  
        
        <div className="flex-1 max-w-2xl ml-20">
          <div className="space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-t border-gray-200">
                <button 
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-8 text-left flex items-center justify-between group"
                >
                  <h3 className="text-xl font-medium text-black pr-8 group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-black"></div>
                      </div>
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-4 h-0.5 bg-black"></div>
                          <div className="w-0.5 h-4 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-8 pr-12">
                    <p className="text-gray-600 leading-relaxed">
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

      {/* Refined Minimal CTA */}
      <div className="mt-20">
        <div className="bg-black rounded-2xl px-16 py-16 text-center relative overflow-hidden">
          {/* Single subtle accent */}
          <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full"></div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-light text-white mb-6 leading-tight">
              Ready to elevate 
              <span className="font-mono italic"> your game?</span>
            </h3>
            
            <p className="text-gray-400 mb-10 leading-relaxed">
              Every champion needs the right representation. Let's discuss how we can unlock your potential.
            </p>

            <div className="flex items-center justify-center gap-6">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 group">
                <span>Start Conversation</span>
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowDownRight className="w-3 h-3 text-white" />
                </div>
              </button>
              
              <button className="text-white hover:text-gray-300 transition-colors duration-300 underline underline-offset-4 decoration-white/40 hover:decoration-white/80">
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