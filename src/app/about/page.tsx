'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Shield, Truck, Heart, Lightbulb, Handshake, Zap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-amber-400">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kaelo Logistics</h1>
          <p className="text-xl text-gray-300">
            We Fulfill. You Thrive.
          </p>
        </div>
      </div>

      {/* Founding Story */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Founding Story</h2>
        <div className="space-y-6 text-gray-900 leading-relaxed text-lg font-medium">
          <p>
            At Kaelo Logistics, our journey began with a simple yet powerful belief: that every South African business, regardless of size or location, deserves access to reliable, transparent and empowering logistics.
          </p>
          <p>
            Founded by Neo Mohlabeng - an entrepreneur who personally experienced the gaps in our country’s delivery landscape - Kaelo was born not from a boardroom strategy, but from the real-world challenges of growing a business without a logistics partner you could truly trust.
          </p>
          <p>
            We saw a system where small and medium enterprises faced an impossible choice: sacrifice affordability for reliability, or risk their reputation with inconsistent service. We witnessed how logistical barriers stifled ambition, limited reach, and eroded the trust between businesses and their customers. And we recognised that this wasn’t just a business problem, it was a barrier to economic inclusion, community growth and national progress.
          </p>
          <p>
            So we decided to build a different kind of logistics company. One that bridges divides instead of creating them. One that leverages technology not to replace human connection, but to strengthen it. One that sees every parcel not as a simple transaction, but as a vital link in someone’s dream, livelihood or opportunity.
          </p>
          <p>
            From the bustling hubs of Gauteng to the growing economies of Limpopo, KwaZulu-Natal and North West, we are redefining what logistics can be. We are proving that reliability doesn’t have to come at a premium, that transparency should be the standard, and that every business, whether in a high-rise or a home office, deserves a partner who shows up, follows through and helps them move forward.
          </p>
          <p className="font-bold text-black">
            This is more than our story. It’s our commitment. A promise to deliver not just packages, but progress. To be not just a service, but a steadfast partner in the journey of every business we serve. Because at Kaelo, we believe that when logistics work better, businesses grow stronger, communities thrive deeper, and South Africa moves forward together.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg my-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower South African businesses by providing accessible, transparent, and reliable logistics solutions that turn shipping from a constant headache into a competitive advantage. We believe every SME deserves a courier partner that is as invested in their success as they are, delivering not just parcels, but peace of mind and possibility.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the most trusted and indispensable logistics network in Southern Africa, renowned for bridging economic divides and enabling seamless commerce from major CBDs to every township and town. We envision a future where any business, anywhere in our regions, can grow without limits, supported by a delivery service they can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Our Seven Core Values</h2>
          <p className="text-gray-900 font-medium text-lg">The principles that drive every delivery we make.</p>
        </div>

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
      </section>

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
