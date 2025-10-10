import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, Users, Trophy, Target, Star } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="gap-8 items-center">
            {/* Left side - Main headline */}
            <div className="">
              <h1 className="text-8xl font-bold leading-tight">
                We craft <span className="font-serif italic text-7xl">Athletes</span> that
                <span>change the game</span>
              </h1>
            </div>
            
            {/* Right side - Content and image */}
            <div className="col-span-5 space-y-8">
              {/* Plus icon and description */}
              <div className="flex items-start gap-4">
                <div className="text-2xl font-light">+</div>
                <div className="max-w-sm">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We're a team of agents, negotiators, and strategists bringing elite representation to life with <strong>purpose, passion,</strong> and unforgettable execution.
                  </p>
                </div>
              </div>
              
              {/* Get started button */}
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Get started
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowDownRight className="w-4 h-4 text-black" />
                </div>
              </Link>
              
              {/* Image */}
              <div className="relative">
                <Image 
                  src="/field-2.jpg" 
                  alt="Elite athletic training" 
                  width={400} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-64"
                />
                
                {/* Coordinates overlay */}
                <div className="absolute bottom-4 left-4 text-white text-sm font-mono">
                  (41.8781° N, 87.6298° W)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Goal Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-2xl font-light">+</div>
              <p className="text-lg text-gray-600">Not just another agency</p>
            </div>
            <h2 className="text-7xl font-bold leading-tight">
              Turning <span className="font-serif italic text-6xl">Vision</span>
              <br />into reality
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left - Image with overlay text */}
            <div className="col-span-4">
              <div className="relative">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Team collaboration" 
                  width={400} 
                  height={500} 
                  className="rounded-2xl object-cover w-full h-96"
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg leading-relaxed mb-4">
                    Every great career begins with a simple conversation — let's start yours.
                  </p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Marcus</span>
                    <span className="text-sm opacity-80">Founder & CEO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Our Mission */}
            <div className="col-span-4 space-y-6">
              <h3 className="text-2xl font-semibold">Our mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower athletes through bold representation, strategic thinking, and <strong>championship experiences</strong> that inspire greatness and create lasting impact. To help <strong>athletes</strong> stand out through thoughtful career planning and <strong>high-performance representation</strong> rooted in integrity and excellence.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Meet our team
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <ArrowDownRight className="w-3 h-3 text-black" />
                </div>
              </Link>
            </div>

            {/* Right - Our Goal */}
            <div className="col-span-4 space-y-6">
              <h3 className="text-2xl font-semibold">Our goal</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-black text-lg">•</span>
                  <span>Clear and focused strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black text-lg">•</span>
                  <span>Contracts that drive impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black text-lg">•</span>
                  <span>Representation without the chaos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black text-lg">•</span>
                  <span>Outcomes that build momentum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black text-lg">•</span>
                  <span>Smart solutions, tailored for you</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">© 2025 Empire Sports Agency</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Years of experience */}
            <div className="col-span-2 text-center">
              <p className="text-sm text-gray-500 mb-4">Years of experience</p>
              <div className="text-6xl font-bold font-mono mb-2">8<span className="text-4xl">+</span></div>
              <p className="text-sm text-gray-600 leading-tight">
                Expertise that drives meaningful results.
              </p>
            </div>

            {/* Central feature card */}
            <div className="col-span-4 col-start-3">
              <div className="bg-black text-white rounded-2xl p-8 relative">
                {/* Client avatars */}
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    <Image src="/lead-1.jpg" alt="Client" width={40} height={40} className="rounded-full border-2 border-white" />
                    <Image src="/lead-2.jpg" alt="Client" width={40} height={40} className="rounded-full border-2 border-white" />
                    <Image src="/lead-1.jpg" alt="Client" width={40} height={40} className="rounded-full border-2 border-white" />
                    <Image src="/lead-2.jpg" alt="Client" width={40} height={40} className="rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-3 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                    72+
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-sm text-gray-300">Happy athletes worldwide</p>
                
                {/* Main stat */}
                <div className="mt-8">
                  <div className="text-6xl font-bold font-mono mb-2">98<span className="text-4xl">%</span></div>
                  <p className="text-sm text-gray-300 leading-tight">
                    Athletes stay for our quality and results.
                  </p>
                </div>
              </div>
            </div>

            {/* Contracts negotiated */}
            <div className="col-span-2 col-start-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Contracts negotiated</p>
              <div className="text-6xl font-bold font-mono mb-2">100<span className="text-4xl">+</span></div>
              <p className="text-sm text-gray-600 leading-tight">
                Elite deals built with purpose.
              </p>
            </div>

            {/* Championships won */}
            <div className="col-span-2 col-start-11 text-center">
              <p className="text-sm text-gray-500 mb-4">Championships won</p>
              <div className="text-6xl font-bold font-mono mb-2">86<span className="text-4xl">+</span></div>
              <p className="text-sm text-gray-600 leading-tight">
                From strategy to championship visuals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-mono font-semibold mb-8">OUR STORY</h2>
              <div className="space-y-6 text-lg text-gray-600 font-serif leading-relaxed">
                <p>
                  Founded in 2015, Empire Sports Agency emerged from a simple yet powerful vision: to revolutionize athlete representation by combining strategic expertise with genuine personal care for our clients.
                </p>
                <p>
                  What started as a boutique agency representing local talent has evolved into a premier sports management firm, handling contracts worth over $2.5 billion and representing elite athletes across multiple professional sports.
                </p>
                <p>
                  Our success isn't measured only in dollars negotiated, but in careers elevated, legacies built, and dreams realized. We believe that behind every great athlete is a team that truly understands their unique journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/field-2.jpg" 
                alt="Our team at work" 
                width={600} 
                height={400} 
                className="rounded-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-8 rounded-2xl">
                <h3 className="text-3xl font-mono font-semibold">2015</h3>
                <p className="text-sm font-light mt-2">Founded in Chicago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-mono font-semibold text-center mb-16">OUR CORE VALUES</h2>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Value 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We pursue excellence in every negotiation, every partnership, and every interaction. Our commitment to the highest standards drives exceptional results for our clients.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trust is the foundation of every athlete-agent relationship. We operate with complete transparency and unwavering ethical standards in all our dealings.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Strategic Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We see beyond the immediate deal to craft long-term career strategies that maximize both on-field performance and off-field opportunities.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personal Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every client receives individualized attention. We limit our roster to ensure each athlete gets the dedicated service they deserve to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-20 px-8 bg-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-light">+</div>
              <p className="text-lg text-gray-300">Meet our team</p>
            </div>
            <h2 className="text-7xl font-bold leading-tight text-center">
              The team that <span className="font-serif italic text-6xl">Builds</span>
              <br />bold
            </h2>
            <div></div> {/* Spacer for alignment */}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large featured member */}
            <div className="col-span-4 row-span-2">
              <div className="relative group h-full">
                <Image 
                  src="/lead-1.jpg" 
                  alt="Marcus Thompson" 
                  width={400} 
                  height={600} 
                  className="rounded-2xl object-cover w-full h-full"
                />
                <div className="absolute top-6 left-6">
                  <div className="text-white font-bold text-lg">EMPIRE™</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">Marcus Thompson</h3>
                  <p className="text-gray-300">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Team member 2 */}
            <div className="col-span-4">
              <div className="relative group">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Sarah Chen" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Sarah Chen</h3>
                  <p className="text-gray-300 text-sm">Brand Partnerships Director</p>
                </div>
                {/* Social icons */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team member 3 */}
            <div className="col-span-4">
              <div className="relative group">
                <Image 
                  src="/lead-1.jpg" 
                  alt="David Rodriguez" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">David Rodriguez</h3>
                  <p className="text-gray-300 text-sm">Lead Negotiator</p>
                </div>
              </div>
            </div>

            {/* Team member 4 */}
            <div className="col-span-3">
              <div className="relative group">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Riley Brooks" 
                  width={250} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Riley Brooks</h3>
                  <p className="text-gray-300 text-sm">Senior Agent</p>
                </div>
              </div>
            </div>

            {/* Team member 5 */}
            <div className="col-span-3">
              <div className="relative group">
                <Image 
                  src="/lead-1.jpg" 
                  alt="Alex Morgan" 
                  width={250} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Alex Morgan</h3>
                  <p className="text-gray-300 text-sm">Financial Advisor</p>
                </div>
              </div>
            </div>

            {/* Team member 6 */}
            <div className="col-span-3">
              <div className="relative group">
                <Image 
                  src="/lead-2.jpg" 
                  alt="Jordan Lee" 
                  width={250} 
                  height={300} 
                  className="rounded-2xl object-cover w-full h-72"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Jordan Lee</h3>
                  <p className="text-gray-300 text-sm">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-16 text-center">
            <div>
              <h3 className="text-6xl font-bold text-black font-mono mb-4">150+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Elite Athletes Represented</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-black font-mono mb-4">$2.5B</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Total Contracts Negotiated</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-black font-mono mb-4">12</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Championship Titles Won</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-black font-mono mb-4">98%</h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-mono font-semibold mb-6">Ready to Join the Empire Family?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover how our personalized approach and proven track record can elevate your athletic career to new heights.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact" className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Start Your Journey
            </Link>
            <Link href="/services" className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage