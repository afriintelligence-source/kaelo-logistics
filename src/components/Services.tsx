'use client';

import { Truck, Bike, Package, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Same-Day & Next-Day",
    description: "Urgent courier services for parcels and documents that can't wait.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Last-Mile Scooter",
    description: "Fast, efficient delivery in busy urban areas and townships.",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Secure Parcel Handling",
    description: "Careful handling of packages, documents, and fragile items.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Business Courier Services",
    description: "Reliable daily and scheduled deliveries for businesses.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1493946740622-4493e6838b39?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Local Delivery Solutions Built for Speed</h2>
        <p className="text-gray-600 mb-12">Quick, dependable services tailored to your business needs.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 rounded-md mb-4 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                {/* Icon Overlay */}
                <div className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-sm">
                  <service.icon size={16} className="text-amber-500" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
