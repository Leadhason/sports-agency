import Image from "next/image";
import { Plus } from 'lucide-react';
import Link from "next/link"


export default function HeroSection() {
    return(
        <div className="relative overflow-hidden">
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Video - Enhanced for mobile */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
                
                {/* Bottom transition overlay - Enhanced responsive text sizing */}
                <div className="absolute inset-0 -mb-[150px] sm:-mb-[200px] md:-mb-[110px] lg:-mb-[130px] items-end justify-center flex">
                    <h1 className="text-[80px] xs:text-[120px] sm:text-[180px] md:text-[280px] lg:text-[320px] xl:text-[380px] font-semibold text-white text-center animate-fade-in-up leading-none tracking-tight"> 
                        EMPIRE
                    </h1>
                </div>
                
                {/* Content overlay - Enhanced responsive layout */}
                <div className="absolute inset-0 flex flex-col lg:flex-row -mt-[120px] sm:-mt-[140px] md:-mt-[160px] lg:-mt-[180px] items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left content - Enhanced responsive positioning */}
                    <div className="text-center lg:text-left items-center lg:items-start justify-center lg:justify-start flex flex-col max-w-sm sm:max-w-md lg:max-w-xl px-2 sm:px-4 lg:px-8 order-2 lg:order-1 animate-fade-in-left">
                        <p className="text-sm sm:text-base lg:text-lg font-light text-white leading-relaxed">
                            <span className="text-white/80 font-mono text-xs sm:text-sm">(01)</span>
                            <span className="block mt-2 sm:mt-3">Elite sports representation driving athletic careers to championship levels — through strategic negotiation, brand building, and career development.</span>
                        </p>
                    </div>
                    
                    {/* Right card - Enhanced responsive sizing and positioning */}
                    <div className="bg-white w-[260px] sm:w-[280px] md:w-[300px] lg:w-[250px] max-h-[280px] sm:max-h-[320px] lg:max-h-[300px] p-3 sm:p-4 rounded-2xl order-1 lg:order-2 hover:scale-105 transition-all duration-300 animate-fade-in-right shadow-lg hover:shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                            <Image src="/logoipsum.svg" alt="Logo" width={32} height={32} className="sm:w-10 sm:h-10 transition-transform duration-300 hover:rotate-12" />
                            <Plus size={20} className="sm:w-6 sm:h-6 text-black font-light transition-transform duration-300 hover:rotate-45"/>
                        </div>
                        <div className="overflow-hidden rounded-lg mb-3">
                            <Image 
                                src="/field.jpg" 
                                alt="Sports field" 
                                width={220} 
                                height={160} 
                                className="w-full h-[140px] sm:h-[160px] lg:h-[180px] object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        
                        <Link href="/about" className="underline font-medium text-sm sm:text-base lg:text-lg text-center flex items-center justify-center underline-offset-4 hover:underline-offset-8 transition-all duration-300 hover:text-gray-700">
                            Meet Our Athletes
                        </Link>
                    </div>
                </div>
               
                                
                {/* Scroll Indicator - Mobile only */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white animate-bounce md:hidden">
                    <span className="text-xs uppercase tracking-wide mb-2 opacity-75 font-light">Scroll</span>
                    <svg className="w-4 h-6 opacity-75 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}