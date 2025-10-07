'use client';

import Link from "next/link"
import { useState } from "react"
import Image from "next/image";
import { Menu, X,  ArrowUpRight  } from 'lucide-react';

const navlinks = {
    Home: {
        name: "HOME",
        href: "/"
    },
    About: {
        name: "ABOUT",
        href: "/about"
    },
    Services: {
        name: "SERVICES",
        href: "/services"
    },
    Contact: {
        name: "CONTACT",
        href: "/contact"
    }
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="absolute top-0 left-0 right-0 flex w-full items-center px-8 py-6 z-50 justify-between">

            {!isMenuOpen ? (
                // Menu Button (Initial State)
                <button 
                    className="bg-white flex items-center p-3 rounded-xl text-black opacity-80 gap-2 hover:opacity-100 transition-all duration-300" 
                    onClick={() => setIsMenuOpen(true)} 
                    aria-label="Toggle menu"
                >
                    <Menu size={24} className="text-black font-light"/>
                    Menu
                </button>
            ) : (
                // Expanded Menu (Replaces Button)
                <div className="bg-black/90 text-white rounded-3xl p-4 w-[250px] transition-all duration-300">
                    {/* Header with close button */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">Menu</span>
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-white hover:bg-white rounded-full p-2 cursor-pointer transition-colors"
                        >
                            <X className="text-black text-sm w-4 h-4 font-light"/>
                        </button>
                    </div>
                    <hr className="border-white/20 mb-6" /> 
                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-2 mb-6">
                        {Object.entries(navlinks).map(([key, { name, href }]) => (
                            <Link 
                                key={key} 
                                href={href} 
                                className="text-white text-sm font-light hover:text-emerald-400 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                    
                    {/* Call to Action Button */}
                    <Link 
                        href="/contact"
                        className="bg-white hover:bg-emerald-700 text-black flex items-center justify-center gap-2 font-light py-2 px-4 rounded-full w-full text-center block transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get in touch
                        <span className="bg-emerald-400 rounded-full p-2">
                            <ArrowUpRight size={16} className="text-black text-sm w-3 h-3" />
                        </span>
                    </Link>
                </div>
            )}







            {/* Logo */}
            <div>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logoipsum.svg" alt="Logo" width={40} height={40} className="brightness-0 invert" />
                    <h1 className="text-2xl font-bold text-white">EMPIRE</h1>
                </Link>
            </div>

        </div>
    )
}