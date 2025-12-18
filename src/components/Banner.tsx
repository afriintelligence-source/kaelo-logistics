export default function Banner() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Delivery Banner" 
          className="w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center">
        <div className="max-w-xl">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            From small packages <br/>
            to daily business deliveries, <br/>
            we move it safely.
           </h2>
        </div>
      </div>
    </section>
  );
}
