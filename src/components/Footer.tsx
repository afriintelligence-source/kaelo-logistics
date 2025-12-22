import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <img
              src="/logo.png"
              alt="Kaelo Logistics"
              className="h-24 w-auto object-contain invert brightness-0"
            />
          </div>
          <p className="text-gray-400 text-sm mb-4">Local Delivery. Securely Delivered.</p>
          <div className="flex gap-4">
            {/* Social Media Placeholders - Replace hrefs with actual links when available */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/kaelologistics/?igsh=MTVwZmN0ZXVsbGJlag%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">X (Twitter)</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quote" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-md uppercase tracking-wide transition-colors inline-block text-center">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>Fast responses. Transparent pricing. Friendly support.</p>
        <p className="mt-2 md:mt-0">&copy; {new Date().getFullYear()} Kaelo Logistics. All rights reserved.</p>
      </div>
    </footer>
  );
}
