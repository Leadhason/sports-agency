import React from 'react'
import Link from "next/link"
import { ArrowDownRight } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section - Elegant Simplicity */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Refined header */}
          <div className="mb-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-light">+</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Our expertise</p>
                  <p className="text-lg text-black">Strategic representation</p>
                </div>
              </div>
              
              <div className="text-right">
                <h1 className="text-8xl font-bold leading-tight">
                  Services that
                  <br />
                  <span className="font-serif italic text-7xl text-gray-400">elevate</span>
                </h1>
              </div>
            </div>
            
            <div className="mt-12 h-px bg-gray-200"></div>
          </div>

          {/* Two-column intro */}
          <div className="grid grid-cols-2 gap-20 mb-20">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed">
                We don't just negotiate contracts — we architect careers. Each service is designed to amplify your potential and secure your legacy in ways that transcend the game itself.
              </p>
            </div>
            <div className="flex items-end justify-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Discuss your needs
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <ArrowDownRight className="w-3 h-3 text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - "The Gallery" */}
      <div className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Service 01 - Contract Negotiation */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(01)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Contract Negotiation</h2>
                <p className="text-lg text-gray-500">Maximizing your value</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic contract negotiations that secure record-breaking deals while protecting your long-term interests. We leverage deep market analysis and industry relationships to ensure every dollar you deserve.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Salary Optimization</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Performance Bonuses</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Trade Protection</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">$2.5B+</div>
                <div className="text-sm text-gray-500">Total Negotiated</div>
              </div>
            </div>
          </div>

          {/* Service 02 - Brand Partnerships */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(02)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Brand Partnerships</h2>
                <p className="text-lg text-gray-500">Building your empire</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Premium brand partnerships and endorsement deals that align with your values and amplify your marketability. We connect you with global brands that enhance your legacy.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Endorsement Deals</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Social Campaigns</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Brand Alignment</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">250+</div>
                <div className="text-sm text-gray-500">Brand Deals</div>
              </div>
            </div>
          </div>

          {/* Service 03 - Career Development */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(03)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Career Development</h2>
                <p className="text-lg text-gray-500">Long-term planning</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive career guidance that extends beyond the playing field. We help you build a lasting legacy and prepare for post-career success through strategic planning.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Career Strategy</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Transition Planning</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Legacy Building</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">98%</div>
                <div className="text-sm text-gray-500">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Service 04 - Financial Management */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(04)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Financial Management</h2>
                <p className="text-lg text-gray-500">Securing your future</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional wealth management tailored to athletes' unique earning patterns. Smart investments, tax optimization, and financial security that lasts a lifetime.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Investment Planning</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Tax Strategy</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Wealth Management</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">$500M+</div>
                <div className="text-sm text-gray-500">Assets Managed</div>
              </div>
            </div>
          </div>

          {/* Service 05 - Marketing & PR */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(05)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Marketing & PR</h2>
                <p className="text-lg text-gray-500">Amplifying your voice</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Strategic marketing and public relations that build and protect your personal brand. We craft compelling narratives that resonate with fans and enhance your reputation.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Media Relations</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Content Strategy</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Crisis Management</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">50M+</div>
                <div className="text-sm text-gray-500">Media Reach</div>
              </div>
            </div>
          </div>

          {/* Service 06 - Legal Services */}
          <div className="border-t border-gray-200 py-16 group">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-1">
                <span className="text-sm font-mono text-gray-400">(06)</span>
              </div>
              <div className="col-span-4">
                <h2 className="text-4xl font-bold mb-3 group-hover:text-gray-600 transition-colors">Legal Services</h2>
                <p className="text-lg text-gray-500">Protecting your interests</p>
              </div>
              <div className="col-span-5">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive legal support covering all aspects of your athletic career. Expert sports law guidance, contract reviews, and dispute resolution when you need it most.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded">Contract Review</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Dispute Resolution</span>
                  <span className="px-3 py-1 bg-gray-100 rounded">Compliance</span>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className="text-3xl font-bold text-black mb-1">100%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Bottom border */}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* The Empire Method - Our Signature Process */}
      <div className="px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="mb-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-light">×</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Our methodology</p>
                  <p className="text-lg text-black">The Empire Method</p>
                </div>
              </div>
              
              <div className="text-right">
                <h2 className="text-6xl font-bold leading-tight">
                  How we
                  <span className="font-serif italic text-5xl text-gray-400 ml-4">architect</span>
                  <br />
                  <span className="text-7xl font-black">greatness</span>
                </h2>
              </div>
            </div>
          </div>

          {/* The Process Flow - Unique Timeline Design */}
          <div className="relative">
            {/* Central timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {/* Phase 01 - Discovery */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="text-right pr-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-gray-400">PHASE</span>
                    <div className="text-3xl font-bold">01</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Discovery</h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    We dive deep into your current position, aspirations, and untapped potential. Every championship begins with understanding the athlete.
                  </p>
                  <div className="text-sm text-gray-500">
                    2-3 weeks • In-depth analysis
                  </div>
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

              {/* Phase 02 - Strategy */}
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
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Your personalized blueprint for success. We craft a comprehensive strategy that addresses every aspect of your career trajectory.
                  </p>
                  <div className="text-sm text-gray-500">
                    1-2 weeks • Strategic planning
                  </div>
                </div>
              </div>

              {/* Phase 03 - Execution */}
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="text-right pr-8">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-gray-400">PHASE</span>
                    <div className="text-3xl font-bold">03</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Execution</h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Strategy becomes reality. Our expert team manages every detail while you focus on what you do best — dominating your sport.
                  </p>
                  <div className="text-sm text-gray-500">
                    Ongoing • Results-driven
                  </div>
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

      {/* Success Stories - The Hall of Fame */}
      <div className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="mb-20">
            <div className="flex items-center justify-between">
              <div className="text-right">
                <h2 className="text-6xl font-bold leading-tight">
                  Success
                  <span className="font-serif italic text-5xl text-gray-400 ml-4">stories</span>
                  <br />
                  <span className="text-7xl font-black">that inspire</span>
                </h2>
              </div>
              
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Hall of fame</p>
                  <p className="text-lg text-black">Championship moments</p>
                </div>
                <div className="text-2xl font-light">★</div>
              </div>
            </div>
            
            <div className="mt-12 h-px bg-gray-200"></div>
          </div>

          {/* Success Story Grid - Asymmetric Layout */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            
            {/* Featured Story - Large */}
            <div className="col-span-7">
              <div className="bg-black text-white p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-6 right-6 text-white/20 text-6xl font-mono">01</div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="text-sm font-mono text-gray-300 mb-4">CONTRACT BREAKTHROUGH</div>
                    <h3 className="text-4xl font-bold mb-4">$127M Deal</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      From a $2M rookie contract to the largest deal in franchise history. Strategic positioning and market timing created a 6,000% value increase.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold">$127M</div>
                      <div className="text-gray-400 text-sm">Total Value</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">6 years</div>
                      <div className="text-gray-400 text-sm">Contract Length</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">$85M</div>
                      <div className="text-gray-400 text-sm">Guaranteed</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-sm text-gray-300">
                      "Empire didn't just negotiate a contract — they architected my entire future."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Stories - Stacked */}
            <div className="col-span-5 space-y-8">
              
              {/* Story 02 */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-2">BRAND PARTNERSHIP</div>
                    <h3 className="text-2xl font-bold">Nike Global Deal</h3>
                  </div>
                  <div className="text-gray-300 text-3xl font-mono">02</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transformed a regional endorsement into a global partnership worth $45M over 5 years, including signature product line.
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="font-bold text-black">$45M</div>
                    <div className="text-gray-500">Total Value</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">Global</div>
                    <div className="text-gray-500">Reach</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">5 years</div>
                    <div className="text-gray-500">Partnership</div>
                  </div>
                </div>
              </div>

              {/* Story 03 */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-2">CAREER TRANSITION</div>
                    <h3 className="text-2xl font-bold">Broadcasting Empire</h3>
                  </div>
                  <div className="text-gray-300 text-3xl font-mono">03</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamless transition from playing career to media mogul, securing broadcasting deals and launching successful podcast network.
                </p>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="font-bold text-black">$12M</div>
                    <div className="text-gray-500">Broadcasting Deal</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">3 shows</div>
                    <div className="text-gray-500">Network</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">2M+</div>
                    <div className="text-gray-500">Listeners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="bg-black text-white rounded-2xl p-8">
            <div className="grid grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold font-mono mb-2">$2.5B+</div>
                <div className="text-gray-300 text-sm">Total contracts negotiated</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono mb-2">150+</div>
                <div className="text-gray-300 text-sm">Elite athletes represented</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono mb-2">98%</div>
                <div className="text-gray-300 text-sm">Client satisfaction rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono mb-2">12+</div>
                <div className="text-gray-300 text-sm">Years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Pure Elegance */}
      <div className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h2 className="text-6xl font-bold mb-6">
              Ready to
              <span className="font-serif italic text-gray-400"> elevate?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your championship story begins with a conversation. Let's discuss how we can transform your athletic career into something legendary.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8">
            <Link 
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Start the conversation</span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowDownRight className="w-3 h-3 text-black" />
              </div>
            </Link>
            
            <Link 
              href="/about"
              className="text-black hover:text-gray-600 transition-colors duration-300 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600"
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