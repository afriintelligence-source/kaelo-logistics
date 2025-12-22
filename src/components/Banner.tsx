export default function Banner() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Delivery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Ship with Kaelo Logistics?</h2>
        <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience the difference of a logistics partner that truly cares about your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        </div>
      </div>
    </section>
  );
}
