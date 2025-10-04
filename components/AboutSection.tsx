export default function AboutSection() {
    return (
        <section className="relative bg-gray-900 py-16 px-8">
            {/* Transition Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Join Us Header */}
                <div className="text-center mb-12">
                    <span className="text-emerald-400 text-xs uppercase tracking-widest font-medium">
                        JOIN US
                    </span>
                    <div className="w-6 h-px bg-emerald-400 mx-auto mt-3"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                            YOUR TRANSFORMATIVE
                            <br />
                            <span className="text-emerald-400">SPORTS AGENCY</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                We help pioneering brands, properties, and athletes activate their investment in 
                                sport through purpose-led strategies that drive meaningful business outcomes.
                            </p>

                            <p>
                                The sports industry has the power to build a fairer, healthier, and more prosperous 
                                world for all.
                            </p>

                            <p className="text-white font-medium">
                                Are you ready to get in the game?
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 transition-colors font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-full">
                        <div className="h-full bg-gray-800 rounded overflow-hidden">
                            {/* Placeholder for athlete image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                    <p className="text-sm">Athlete Image</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative element */}
                        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-emerald-400/10 rounded -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}