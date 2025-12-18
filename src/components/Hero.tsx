import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpeg"
          alt="Kaelo Logistics Fleet"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Reliable Local <br />
          Courier Services <br />
          You Can Trust,
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
          Fast, secure delivery for parcels, documents, and packages—powered by local delivery vehicles 🇿🇦 across South Africa 🇿🇦
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-md uppercase tracking-wide transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
