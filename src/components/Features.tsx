import { CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Reliable & On Time",
    description: "We deliver when we say we will - no excuses.",
    icon: CheckCircle2,
    color: "text-amber-500"
  },
  {
    title: "Local Knowledge",
    description: "We understand South African routes, traffic, and last-mile challenges.",
    icon: MapPin,
    color: "text-green-600"
  },
  {
    title: "Secure & Professional",
    description: "Your packages are handled with care, accountability, and respect.",
    icon: ShieldCheck,
    color: "text-blue-600"
  }
];

export default function Features() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Serving Local Businesses Across South Africa</h2>
        <p className="text-gray-600 mb-8 md:mb-12 max-w-3xl">
          Whether you're a growing startup or an established business, Kaelo Logistics delivers with consistency, care, and local expertise. 🇿🇦
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="shrink-0">
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
