"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
      <div className="mb-16 text-center">
        <h2 className="text-6xl font-mono font-semibold mb-4">FREQUENTLY ASKED</h2>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
          Common questions about athlete representation, contracts, and how Empire Sports Agency elevates athletic careers.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className="border-y-gray-100 overflow-hidden"
          >
            <button 
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-8 py-6 text-left flex items-center justify-between"
            >
              <h3 className="text-xl font-mono font-semibold text-black pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-6 w-6 text-black" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
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
              <div className="px-8 py-6 bg-white border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
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