import React from 'react'
import Link from "next/link"
import { ArrowDownRight } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ServicesPage: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Contract Negotiation",
      subtitle: "Maximizing your value",
      description: "Strategic contract negotiations that secure record-breaking deals while protecting your long-term interests. We leverage deep market analysis and industry relationships to ensure every dollar you deserve.",
      tags: ["Salary Optimization", "Performance Bonuses", "Trade Protection"],
      stat: "$2.5B+",
      statLabel: "Total Negotiated"
    },
    {
      number: "02",
      title: "Brand Partnerships",
      subtitle: "Building your empire",
      description: "Premium brand partnerships and endorsement deals that align with your values and amplify your marketability. We connect you with global brands that enhance your legacy.",
      tags: ["Endorsement Deals", "Social Campaigns", "Brand Alignment"],
      stat: "250+",
      statLabel: "Brand Deals"
    },
    {
      number: "03",
      title: "Career Development",
      subtitle: "Long-term planning",
      description: "Comprehensive career guidance that extends beyond the playing field. We help you build a lasting legacy and prepare for post-career success through strategic planning.",
      tags: ["Career Strategy", "Transition Planning", "Legacy Building"],
      stat: "98%",
      statLabel: "Client Retention"
    },
    {
      number: "04",
      title: "Financial Management",
      subtitle: "Securing your future",
      description: "Professional wealth management tailored to athletes' unique earning patterns. Smart investments, tax optimization, and financial security that lasts a lifetime.",
      tags: ["Investment Planning", "Tax Strategy", "Wealth Management"],
      stat: "$500M+",
      statLabel: "Assets Managed"
    },
    {
      number: "05",
      title: "Media Relations",
      subtitle: "Protecting your narrative",
      description: "Strategic marketing and public relations that build and protect your personal brand. We craft compelling narratives that resonate with fans and enhance your reputation.",
      tags: ["Media Relations", "Content Strategy", "Crisis Management"],
      stat: "150+",
      statLabel: "PR Campaigns"
    },
    {
      number: "06",
      title: "Legal Services",
      subtitle: "Protecting your interests",
      description: "Comprehensive legal support covering all aspects of your athletic career. Expert sports law guidance, contract reviews, and dispute resolution when you need it most.",
      tags: ["Contract Review", "Dispute Resolution", "Compliance"],
      stat: "100%",
      statLabel: "Success Rate"
    }
  ]

  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-lg sm:text-2xl font-light">+</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Our expertise</p>
                  <p className="text-base sm:text-lg text-black">Strategic representation</p>
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
                  Services that
                  <br />
                  <span className="font-serif italic text-2xl sm:text-4xl lg:text-7xl text-gray-400">elevate</span>
                </h1>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 lg:mt-12 h-px bg-gray-200"></div>
          </div>

          {/* Intro section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                We don't just negotiate contracts — we architect careers. Each service is designed to amplify your potential and secure your legacy in ways that transcend the game itself.
              </p>
            </div>
            <div className="flex items-start lg:items-end justify-start lg:justify-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
              >
                Discuss your needs
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                  <ArrowDownRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={service.number} className="border-t border-gray-200 py-8 sm:py-12 lg:py-16 group">
              
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
                <div className="col-span-1">
                  <span className="text-sm font-mono text-gray-400">({service.number})</span>
                </div>
                <div className="col-span-4">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2 group-hover:text-gray-600 transition-colors">{service.title}</h2>
                  <p className="text-base lg:text-lg text-gray-500">{service.subtitle}</p>
                </div>
                <div className="col-span-5">
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1">{service.stat}</div>
                  <div className="text-xs lg:text-sm text-gray-500">{service.statLabel}</div>
                </div>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono text-gray-400">({service.number})</span>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-black">{service.stat}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{service.statLabel}</div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-gray-600 transition-colors">{service.title}</h2>
                  <p className="text-sm sm:text-base text-gray-500 mb-3">{service.subtitle}</p>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 sm:px-3 py-1 bg-gray-100 rounded text-xs sm:text-sm text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-lg sm:text-2xl font-light">×</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Our methodology</p>
                  <p className="text-base sm:text-lg text-black">The Empire Method</p>
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  How we<span className="font-serif italic text-xl sm:text-3xl lg:text-5xl text-gray-400 ml-2">architect</span>
                  <br />
                  <span className="text-3xl sm:text-5xl lg:text-7xl font-black">greatness</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Mobile Process - Vertical Stack */}
          <div className="lg:hidden space-y-8 sm:space-y-12">
            
            {/* Phase 01 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono text-gray-400">PHASE</span>
                <div className="text-2xl sm:text-3xl font-bold">01</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Discovery</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                We dive deep into your current position, aspirations, and untapped potential. Every championship begins with understanding the athlete.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm mb-4">
                <div className="space-y-1">
                  <div>✓ Career Assessment</div>
                  <div>✓ Market Analysis</div>
                  <div>✓ Goal Mapping</div>
                </div>
                <div className="space-y-1">
                  <div>✓ Brand Audit</div>
                  <div>✓ Financial Review</div>
                  <div>✓ Vision Alignment</div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">2-3 weeks • In-depth analysis</div>
            </div>

            {/* Phase 02 */}
            <div className="bg-black text-white p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono text-gray-300">PHASE</span>
                <div className="text-2xl sm:text-3xl font-bold">02</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Strategy</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Your personalized blueprint for success. We craft a comprehensive strategy that addresses every aspect of your career trajectory.
              </p>
              <div className="mb-4">
                <div className="text-sm sm:text-base font-bold font-mono mb-3">STRATEGIC BLUEPRINT</div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Contract negotiation timeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Brand partnership strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Media & PR campaign</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Financial optimization plan</span>
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-300">1-2 weeks • Strategic planning</div>
            </div>

            {/* Phase 03 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs sm:text-sm font-mono text-gray-400">PHASE</span>
                <div className="text-2xl sm:text-3xl font-bold">03</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Execution</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Strategy becomes reality. Our expert team manages every detail while you focus on what you do best — dominating your sport.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1">$85M</div>
                <div className="text-xs sm:text-sm text-gray-500 mb-3">Average contract increase</div>
                <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-black">98%</div>
                    <div className="text-gray-500">Success rate</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">30 days</div>
                    <div className="text-gray-500">Avg close time</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">150+</div>
                    <div className="text-gray-500">Athletes served</div>
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Ongoing • Results-driven</div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {/* Phase 01 */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="text-right pr-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-gray-400">PHASE</span>
                    <div className="text-3xl font-bold">01</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Discovery</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We dive deep into your current position, aspirations, and untapped potential. Every championship begins with understanding the athlete.
                  </p>
                  <div className="text-sm text-gray-500">2-3 weeks • In-depth analysis</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-8 w-4 h-4 bg-black rounded-full"></div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">✓ Career Assessment</div>
                        <div className="font-medium">✓ Market Analysis</div>
                        <div className="font-medium">✓ Goal Mapping</div>
                      </div>
                      <div className="space-y-2">
                        <div className="font-medium">✓ Brand Audit</div>
                        <div className="font-medium">✓ Financial Review</div>
                        <div className="font-medium">✓ Vision Alignment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 02 */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -right-8 top-8 w-4 h-4 bg-black rounded-full"></div>
                  <div className="bg-black text-white p-8 rounded-2xl">
                    <div className="mb-6">
                      <div className="text-2xl font-bold font-mono mb-2">STRATEGIC BLUEPRINT</div>
                      <div className="text-gray-300 text-sm">Custom roadmap for your success</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Contract negotiation timeline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Brand partnership strategy</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Media & PR campaign</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Financial optimization plan</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-gray-400">PHASE</span>
                    <div className="text-3xl font-bold">02</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Strategy</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Your personalized blueprint for success. We craft a comprehensive strategy that addresses every aspect of your career trajectory.
                  </p>
                  <div className="text-sm text-gray-500">1-2 weeks • Strategic planning</div>
                </div>
              </div>

              {/* Phase 03 */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="text-right pr-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-gray-400">PHASE</span>
                    <div className="text-3xl font-bold">03</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Execution</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Strategy becomes reality. Our expert team manages every detail while you focus on what you do best — dominating your sport.
                  </p>
                  <div className="text-sm text-gray-500">Ongoing • Results-driven</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-8 w-4 h-4 bg-black rounded-full"></div>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-black mb-2">$85M</div>
                      <div className="text-sm text-gray-500">Average contract increase</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-bold text-black">98%</div>
                        <div className="text-gray-500">Success rate</div>
                      </div>
                      <div>
                        <div className="font-bold text-black">30 days</div>
                        <div className="text-gray-500">Avg close time</div>
                      </div>
                      <div>
                        <div className="font-bold text-black">150+</div>
                        <div className="text-gray-500">Athletes served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Ready to <span className="font-serif italic text-gray-400">elevate?</span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Your championship story begins with a conversation. Let's discuss how we can transform your athletic career into something legendary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-black text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
            >
              <span>Start the conversation</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowDownRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
              </div>
            </Link>
            
            <Link 
              href="/about"
              className="text-black hover:text-gray-600 transition-colors duration-300 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 text-sm sm:text-base"
            >
              Meet our team
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicesPage