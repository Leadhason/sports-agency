import React from 'react'
import Link from "next/link"
import { ArrowDownRight, Phone } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section - The Conversation Starter */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Elegant header */}
          <div className="mb-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-light">◦</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Let's connect</p>
                  <p className="text-lg text-black">Start the conversation</p>
                </div>
              </div>
              
              <div className="text-right">
                <h1 className="text-8xl font-bold leading-tight">
                  Every champion
                  <br />
                  <span className="font-serif italic text-7xl text-gray-400">starts with</span>
                  <br />
                  <span className="text-9xl font-black">hello</span>
                </h1>
              </div>
            </div>
            
            <div className="mt-12 h-px bg-gray-200"></div>
          </div>

          {/* Intro content */}
          <div className="grid grid-cols-2 gap-20 mb-20">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your championship story begins with a single conversation. Whether you're ready to elevate your career or just exploring possibilities, we're here to listen, understand, and architect your path to greatness.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-right">
                <div className="text-4xl font-bold font-mono mb-2">&lt; 24hrs</div>
                <div className="text-sm text-gray-500">Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Connection Hub - Revolutionary Contact Layout */}
      <div className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-12 gap-8">
            
            {/* Contact Methods - Left Side */}
            <div className="col-span-5 space-y-8">
              
              {/* Primary Contact Card */}
              <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-6 right-6 text-white/10 text-4xl">01</div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to dominate?</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Schedule a confidential consultation to discuss your career goals and discover how Empire can elevate your game.
                    </p>
                  </div>
                  
                  <Link 
                    href="mailto:contact@empiresports.com"
                    className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <span>contact@empiresports.com</span>
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowDownRight className="w-3 h-3 text-white" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Phone */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-mono text-gray-500">CALL</div>
                  </div>
                  <div className="font-semibold text-lg mb-1">+1 (555) 123-4567</div>
                  <div className="text-sm text-gray-500">Direct line to our team</div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div className="text-sm font-mono text-gray-500">VISIT</div>
                  </div>
                  <div className="font-semibold text-lg mb-1">Los Angeles</div>
                  <div className="text-sm text-gray-500">Beverly Hills office</div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-mono text-gray-500">OFFICE HOURS</div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Emergency consultations available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="col-span-7">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 relative">
                <div className="absolute top-6 right-6 text-gray-100 text-4xl">02</div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Tell us your story</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Every athlete's journey is unique. Help us understand where you are and where you want to go.
                    </p>
                  </div>

                  <form className="space-y-6">
                    
                    {/* Name and Sport */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name*
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sport*
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300">
                          <option>Select your sport</option>
                          <option>Football (NFL)</option>
                          <option>Basketball (NBA)</option>
                          <option>Baseball (MLB)</option>
                          <option>Hockey (NHL)</option>
                          <option>Soccer (MLS)</option>
                          <option>Tennis</option>
                          <option>Golf</option>
                          <option>Olympic Sports</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address*
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Career Stage */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Career Stage*
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300">
                        <option>Where are you in your career?</option>
                        <option>High School Prospect</option>
                        <option>College Athlete</option>
                        <option>Professional Rookie</option>
                        <option>Established Professional</option>
                        <option>Veteran Player</option>
                        <option>Transitioning/Retired</option>
                      </select>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services of Interest*
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'Contract Negotiation',
                          'Brand Partnerships',
                          'Career Development',
                          'Financial Management',
                          'Marketing & PR',
                          'Legal Services'
                        ].map((service) => (
                          <label key={service} className="flex items-center gap-3 cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your goals*
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Share your career aspirations, current challenges, or specific questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-gray-500">
                        * Required fields
                      </div>
                      
                      <button 
                        type="submit"
                        className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 group"
                      >
                        <span>Send Message</span>
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                          <ArrowDownRight className="w-3 h-3 text-black" />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next - Process Transparency */}
      <div className="px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What happens next?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparency is the foundation of trust. Here's exactly what you can expect when you reach out.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16">
            
            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Initial Response</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Within &lt; 24hrs, you'll receive a personal response from our team acknowledging your inquiry and scheduling a convenient time for a deeper conversation.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-500">Guaranteed response time</span>
                    </div>
                    <div className="text-gray-300">•</div>
                    <div className="text-gray-500">Personal, not automated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Discovery Session</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A comprehensive 30-45 minute consultation where we dive deep into your career goals, current situation, and specific challenges you're facing.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-500">Career assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-500">Goal alignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-500">Market analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-500">Strategy overview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">Custom Strategy Proposal</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Within 48 hours of our discovery session, you'll receive a detailed, personalized strategy proposal outlining how Empire can accelerate your career trajectory.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-800 mb-2">Proposal includes:</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Tailored service recommendations</div>
                      <div>• Timeline and milestones</div>
                      <div>• Investment structure</div>
                      <div>• Expected outcomes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">Partnership Begins</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Once you're ready to move forward, we immediately activate your dedicated team and begin executing the strategy designed specifically for your success.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      Day 1 activation
                    </div>
                    <div className="text-gray-400 text-sm">
                      Your success becomes our obsession
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-white p-12 rounded-3xl border border-gray-200">
              <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                The first step is always the hardest. Let us make the journey easier.
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <Link 
                  href="mailto:contact@empiresports.com"
                  className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Start the conversation</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowDownRight className="w-3 h-3 text-black" />
                  </div>
                </Link>
                
                <div className="text-gray-400">or</div>
                
                <Link 
                  href="tel:+15551234567"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-black transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call directly</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage