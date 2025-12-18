import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Truck, MapPin, Calendar, CreditCard, Camera } from 'lucide-react';

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-gray-300 text-lg">Tell us what you need to move, and we'll get it there safely.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <form className="space-y-8">

            {/* Section 1: Pickup & Delivery */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-amber-500" /> Pickup & Delivery Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Pickup From</h3>
                  <input type="text" placeholder="Street Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    <input type="text" placeholder="Postal Code" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Deliver To</h3>
                  <input type="text" placeholder="Street Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    <input type="text" placeholder="Postal Code" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2: Package Details */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Package className="text-amber-500" /> Package Details
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                  <input type="number" placeholder="0.00" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (LxWxH cm)</label>
                  <input type="text" placeholder="e.g. 30x20x15" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                    <option>Standard Parcel</option>
                    <option>Document</option>
                    <option>Fragile</option>
                    <option>Pallet</option>
                  </select>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Package Image (Optional)</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-8 h-8 mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">Upload a photo if dimensions are unclear or for fragile items.</p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3: Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Truck className="text-amber-500" /> Your Contact Info
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="text" placeholder="Company Name (Optional)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>

            <button type="button" className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 rounded-md text-lg transition-colors shadow-md mt-4">
              Get My Quote
            </button>
            <p className="text-center text-gray-500 text-sm">No credit card required for quote.</p>

          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
