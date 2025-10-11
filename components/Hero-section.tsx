import Image from "next/image";
import { Plus } from 'lucide-react';
import Link from "next/link"


export default function HeroSection() {
    return(
        <div className="relative">
            <div className="relative min-h-screen">
                {/* Background Video */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Bottom transition overlay - Responsive text sizing */}
                <div className="absolute inset-0 -mb-[250px] md:-mb-[250px] sm:-mb-[150px] items-end justify-center flex">
                    <h1 className="text-[120px] sm:text-[200px] md:text-[280px] lg:text-[380px] font-semibold text-white text-center animate-fade-in-up"> 
                        EMPIRE
                    </h1>
                </div>
                
                {/* Content overlay - Responsive layout */}
                <div className="absolute inset-0 flex flex-col lg:flex-row -mt-[150px] md:-mt-[150px] items-center justify-center lg:justify-between px-4 sm:px-8 gap-8 lg:gap-0">
                    {/* Left content - Responsive positioning */}
                    <div className="text-left lg:text-left text-center items-center justify-start flex max-w-xl px-4 lg:px-8 order-2 lg:order-1 animate-fade-in-left">
                        <p className="text-base sm:text-lg font-light text-white">(01)
                        <span className="block mt-2">Elite sports representation driving athletic careers to championship levels — through strategic negotiation, brand building, and career development.</span>
                        </p>
                    </div>
                    
                    {/* Right card - Responsive sizing and positioning */}
                    <div className="bg-white w-[280px] sm:w-[250px] max-h-[300px] p-4 rounded-2xl order-1 lg:order-2 hover:scale-105 transition-transform duration-300 animate-fade-in-right">
                        <div className="flex items-center justify-between">
                            <Image src="/logoipsum.svg" alt="Logo" width={40} height={40} className="transition-transform duration-300 hover:rotate-12" />
                            <Plus size={24} className="text-black font-light text-sm transition-transform duration-300 hover:rotate-45"/>
                        </div>
                        <Image src="/field.jpg" alt="Mockup" width={220} height={180} className="mt-4 rounded-none object-cover transition-transform duration-300 hover:scale-105"/>      
                        
                        <Link href="" className="underline font-medium text-lg text-center flex items-center justify-center mt-4 underline-offset-4 hover:underline-offset-8 transition-all duration-300">Meet Our Athletes</Link>
                    </div>
                </div>
               
                                
                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white animate-bounce">
                    <span className="text-xs uppercase tracking-wide mb-2 opacity-75">Scroll</span>
                    <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div> */}
            </div>
        </div>
    )
}