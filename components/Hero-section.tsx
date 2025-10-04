export default function HeroSection() {
    return(
        <div className="relative">
            <div className="bg-[url('/field-2.jpg')] bg-cover bg-center h-screen">
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Bottom transition overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
                
                {/* Hero Content */}
                <div className="absolute left-0 z-10 flex flex-col justify-center max-w-xl p-8 h-screen ml-24">
                    {/* Main Heading */}
                    <h1 className="text-5xl font-bold text-white mb-2">
                        WELCOME TO 
                        <span className="block text-emerald-400">EMPIRE</span>
                    </h1>
                    
                    {/* Subheading */}
                    <h2 className="text-xl text-gray-300 mb-6 font-light">
                        Where Champions Are Made
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                        Elite sports management and training for dedicated athletes.
                    </p>

                    {/* Single Call-to-Action */}
                    <div>
                        <button className="bg-emerald-600 text-white py-3 px-8 hover:bg-emerald-700 transition-colors">
                            Get in touch
                        </button>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white animate-bounce">
                    <span className="text-xs uppercase tracking-wide mb-2 opacity-75">Scroll</span>
                    <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}