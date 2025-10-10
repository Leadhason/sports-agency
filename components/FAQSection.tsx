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

      {/* Dark CTA Section */}
      <div className="mt-20 bg-black text-white rounded-2xl p-16 text-center">
        <h3 className="text-4xl font-mono font-semibold mb-6">
          Ready to Take Your Career to the Next Level?
        </h3>
        <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-gray-300">
          Our expert team is here to discuss your athletic career goals and show you how Empire can maximize your potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-300">
            Schedule a Consultation
          </button>
          <button className="border border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQSection