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
                
                {/* Bottom transition overlay */}
                <div className="absolute inset-0 -mb-[250px] items-end justify-center flex">
                    <h1 className="text-[380px] font-semibold text-white text-center"> 
                        EMPIRE
                    </h1>
                </div>
                <div className="absolute inset-0 flex -mt-[150px] items-center justify-between px-8">
                    <div className="text-left items-center justify-start flex max-w-xl px-8">
                        <p className="text-lg font-light text-white">(01)
                        <span className="block">Elite sports representation driving athletic careers to championship levels — through strategic negotiation, brand building, and career development.</span>
                        </p>
                    </div>
                    <div className="bg-white w-[250px] max-h-[300px] p-4 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <Image src="/logoipsum.svg" alt="Logo" width={40} height={40} />

                            <Plus size={24} className="text-black font-light text-sm"/>
                        </div>
                        <Image src="/field.jpg" alt="Mockup" width={220} height={180} className="mt-4 rounded-none object-cover"/>      
                        
                        <Link href="" className="underline font-medium text-lg text-center flex items-center justify-center mt-4 underline-offset-4">Meet Our Athletes</Link>
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