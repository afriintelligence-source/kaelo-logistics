'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Kaelo Logistics"
                        className="h-24 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <Link href="/services" className="hover:text-black">Services</Link>
                    <Link href="/about" className="hover:text-black">About Us</Link>
                    <Link href="/#contact" className="hover:text-black">Contact</Link>
                </div>

                {/* Desktop Phone Button */}
                <a href="tel:+27601234567" className="hidden md:flex bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-md items-center gap-2 transition-colors">
                    <Phone size={18} className="fill-current" />
                    <span>+27 60 123 4567</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 font-medium text-gray-700 border-t border-gray-100">
                    <Link href="/" className="hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/services" className="hover:text-black" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/about" className="hover:text-black" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/#contact" className="hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
