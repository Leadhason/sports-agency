'use client'

import React from 'react'
import { ArrowDownRight, Phone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ContactPage: React.FC = () => {

  interface FormData {
  name: string;
  sport: string;
  email: string;
  phone: string;
  careerStage: string;
  services: string[];
  goals: string;
  }

  const [formData, setFormData] = React.useState({
    name: '',
    sport: '',
    email: '',
    phone: '',
    careerStage: '',
    services: [],
    goals: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      
      <Header />
      {/* Hero Section */}
      <div className="pt-12 mt-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Elegant header */}
          <div className="mb-10 sm:mb-16 md:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-xl sm:text-2xl font-light">◦</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-light mb-1">Let's connect</p>
                  <p className="text-base sm:text-lg text-black">Start the conversation</p>
                </div>
              </div>
              
              <div className="text-right">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  Every champion
                  <br />
                  <span className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-400">starts with</span>
                  <br />
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black">hello</span>
                </h1>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 h-px bg-gray-200"></div>
          </div>

          {/* Intro content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-10 sm:mb-16 md:mb-20">
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Your championship story begins with a single conversation. Whether you're ready to elevate your career or just exploring possibilities, we're here to listen, understand, and architect your path to greatness.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-2">&lt; 24hrs</div>
                <div className="text-xs sm:text-sm text-gray-500">Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Connection Hub */}
      <div className="px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* Contact Methods - Left Side */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              
              {/* Primary Contact Card */}
              <div className="bg-black text-white p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden">
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-white/10 text-3xl md:text-4xl">01</div>
                <div className="relative z-10">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to dominate?</h2>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Schedule a confidential consultation to discuss your career goals and discover how Empire can elevate your game.
                    </p>
                  </div>
                  
                  <a 
                    href="mailto:contact@empiresports.com"
                    className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <span className="truncate">contact@empiresports.com</span>
                    <div className="w-5 md:w-6 h-5 md:h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-45 transition-transform duration-300">
                      <ArrowDownRight className="w-2 md:w-3 h-2 md:h-3 text-white" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                
                {/* Phone */}
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3 md:w-4 h-3 md:h-4 text-white" />
                    </div>
                    <div className="text-xs md:text-sm font-mono text-gray-500">CALL</div>
                  </div>
                  <div className="font-semibold text-base md:text-lg mb-1">+1 (555) 123-4567</div>
                  <div className="text-xs md:text-sm text-gray-500">Direct line to our team</div>
                </div>

                {/* Location */}
                <div className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-sm"></div>
                    </div>
                    <div className="text-xs md:text-sm font-mono text-gray-500">VISIT</div>
                  </div>
                  <div className="font-semibold text-base md:text-lg mb-1">Los Angeles</div>
                  <div className="text-xs md:text-sm text-gray-500">Beverly Hills office</div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 md:w-4 h-3 md:h-4 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="text-xs md:text-sm font-mono text-gray-500">OFFICE HOURS</div>
                </div>
                
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
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
                
                <div className="mt-4 md:mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-xs text-gray-500">Emergency consultations available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 relative">
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-gray-100 text-3xl md:text-4xl">02</div>
                
                <div className="relative z-10">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Tell us your story</h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Every athlete's journey is unique. Help us understand where you are and where you want to go.
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    
                    {/* Name and Sport */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Full Name*
                        </label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Sport*
                        </label>
                        <select 
                          value={formData.sport}
                          onChange={(e) => handleInputChange('sport', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        >
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Email Address*
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm md:text-base"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Career Stage */}
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Career Stage*
                      </label>
                      <select 
                        value={formData.careerStage}
                        onChange={(e) => handleInputChange('careerStage', e.target.value)}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      >
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
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">
                        Services of Interest*
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                        {[
                          'Contract Negotiation',
                          'Brand Partnerships',
                          'Career Development',
                          'Financial Management',
                          'Marketing & PR',
                          'Legal Services'
                        ].map((service) => (
                          <label key={service} className="flex items-center gap-2 md:gap-3 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="text-xs md:text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Tell us about your goals*
                      </label>
                      <textarea 
                        rows={4}
                        value={formData.goals}
                        onChange={(e) => handleInputChange('goals', e.target.value)}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                        placeholder="Share your career aspirations, current challenges, or specific questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 md:pt-4">
                      <div className="text-xs md:text-sm text-gray-500">
                        * Required fields
                      </div>
                      
                      <button 
                        onClick={handleSubmit}
                        className="w-full sm:w-auto bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 group"
                      >
                        <span>Send Message</span>
                        <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                          <ArrowDownRight className="w-2 md:w-3 h-2 md:h-3 text-black" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next - Process Transparency */}
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">What happens next?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Transparency is the foundation of trust. Here's exactly what you can expect when you reach out.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8 md:space-y-16">
            
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Initial Response</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Within &lt; 24hrs, you'll receive a personal response from our team acknowledging your inquiry and scheduling a convenient time for a deeper conversation.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-500">Guaranteed response time</span>
                    </div>
                    <div className="text-gray-300 hidden sm:block">•</div>
                    <div className="text-gray-500">Personal, not automated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Discovery Session</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    A comprehensive 30-45 minute consultation where we dive deep into your career goals, current situation, and specific challenges you're facing.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-500">Career assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-500">Goal alignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-500">Market analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-500">Strategy overview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Custom Strategy Proposal</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Within 48 hours of our discovery session, you'll receive a detailed, personalized strategy proposal outlining how Empire can accelerate your career trajectory.
                  </p>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="font-semibold text-sm md:text-base text-gray-800 mb-2">Proposal includes:</div>
                    <div className="text-xs md:text-sm text-gray-600 space-y-1">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black text-white p-4 md:p-8 rounded-lg md:rounded-2xl">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Partnership Begins</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    Once you're ready to move forward, we immediately activate your dedicated team and begin executing the strategy designed specifically for your success.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-white text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                      Day 1 activation
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      Your success becomes our obsession
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-white p-6 md:p-12 rounded-2xl md:rounded-3xl border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to get started?</h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto px-4">
                The first step is always the hardest. Let us make the journey easier.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a 
                  href="mailto:contact@empiresports.com"
                  className="w-full sm:w-auto bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 group"
                >
                  <span>Start the conversation</span>
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowDownRight className="w-2 md:w-3 h-2 md:h-3 text-black" />
                  </div>
                </a>
                
                <div className="text-gray-400 hidden sm:block">or</div>
                
                <a 
                  href="tel:+15551234567"
                  className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:border-black transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Call directly</span>
                </a>
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