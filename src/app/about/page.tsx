'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Shield, Truck, Heart, Lightbulb, Handshake, Zap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-amber-400">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Kaelo Logistics</h1>
          <p className="text-lg md:text-xl text-gray-300">We Fulfill. You Thrive.</p>
        </div>
      </div>

      {/* Founding Story */}
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Story</h2>
        <div className="space-y-6 text-gray-900 font-medium leading-relaxed">
          <p>
            Kaelo Logistics was born out of a simple observation: small businesses and individuals needed a courier service that wasn't just about moving boxes, but about <strong>moving relationships forward</strong>.
          </p>
          <p>
            Founded in 2024 by Neo Mohlabeng, we started with a single vehicle and a commitment to reliability. We saw that while big logistics companies offered scale, they often lacked the personal touch and flexibility that local businesses require.
          </p>
          <p>
            "Kaelo" means "Growth" or "Beginning" in Sesotho. It represents our promise to our clients: when you partner with us, we help facilitate your growth by ensuring your goods reach their destination safely and on time.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-amber-50 p-6 md:p-8 rounded-lg shadow-sm border border-amber-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide reliable, efficient, and personalized logistics solutions that empower local businesses to grow and connect communities across South Africa.
            </p>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted local courier partner in South Africa, known for our commitment to service excellence, community support, and sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Shield className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">1. Trust</h3>
            <p className="text-sm text-gray-700">We are the unwavering guardians of your promise and reputation.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Handshake className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">2. Partnership</h3>
            <p className="text-sm text-gray-700">Your growth is our shared journey and success.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Award className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">3. Grit</h3>
            <p className="text-sm text-gray-700">We navigate complexity with resilient determination and courage.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Shield className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">4. Integrity</h3>
            <p className="text-sm text-gray-700">We do what is right, not what is easy.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Heart className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">5. Community</h3>
            <p className="text-sm text-gray-700">We strengthen the local networks and economies we serve.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Lightbulb className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">6. Innovation</h3>
            <p className="text-sm text-gray-700">We reimagine possibility through purposeful technology.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <Zap className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">7. Empowerment</h3>
            <p className="text-sm text-gray-700">We create meaningful opportunities for growth at every level.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <h3 className="text-4xl font-bold mb-2 text-amber-400">5k+</h3>
            <p className="font-medium text-gray-300">Deliveries Monthly</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 text-amber-400">98%</h3>
            <p className="font-medium text-gray-300">On-Time Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 text-amber-400">50+</h3>
            <p className="font-medium text-gray-300">Cities Covered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2 text-amber-400">24/7</h3>
            <p className="font-medium text-gray-300">Support</p>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
}
