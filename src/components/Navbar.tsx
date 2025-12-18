import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
            <Link href="/" className="flex items-center gap-2">
                <img
                    src="/logo.png"
                    alt="Kaelo Logistics"
                    className="h-24 w-auto object-contain"
                />
            </Link>

            <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                <Link href="/" className="hover:text-black">Home</Link>
                <Link href="#" className="hover:text-black">Services</Link>
                <Link href="#" className="hover:text-black">About Us</Link>
                <Link href="#" className="hover:text-black">Contact</Link>
            </div>

            <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-md flex items-center gap-2 transition-colors">
                <Phone size={18} className="fill-current" />
                <span>+27 60 123 4567</span>
            </button>
        </nav>
    );
}
