'use client';

import Link from "next/link"
import { useState } from "react"

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
            {/* Logo */}
            <div>
                <Link href="/">
                    <h1 className="text-2xl font-medium text-white">EMPIRE</h1>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                {Object.entries(navlinks).map(([key, { name, href }]) => (
                    <Link 
                        key={key} 
                        href={href} 
                        className="text-white text-sm opacity-80 hover:opacity-100 hover:underline hover:underline-offset-4 transition-all"
                    >
                        {name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white opacity-80 hover:opacity-100"
                aria-label="Toggle menu"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/90 md:hidden">
                    <nav className="flex flex-col p-6 space-y-3">
                        {Object.entries(navlinks).map(([key, { name, href }]) => (
                            <Link 
                                key={key} 
                                href={href} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white text-sm opacity-80 hover:opacity-100 py-2"
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}