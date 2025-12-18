'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Truck, MapPin, Calendar, CreditCard, Camera, X } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';
import LocationPicker from '@/components/LocationPicker';

export default function QuotePage() {
  const [images, setImages] = useState<string[]>([]);
  const [pickupLocation, setPickupLocation] = useState<any>(null);
  const [deliveryLocation, setDeliveryLocation] = useState<any>(null);

  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Form State
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [packageType, setPackageType] = useState('Standard Parcel');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImages([...images, imageUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!pickupLocation || !deliveryLocation) {
      alert('Please select both pickup and delivery locations.');
      setIsSending(false);
      return;
    }

    const templateParams = {
      to_email: 'koosms02@gmail.com',
      from_name: contactName,
      from_email: contactEmail,
      phone_number: contactPhone,
      company_name: companyName,
      pickup_address: pickupLocation.address,
      pickup_lat: pickupLocation.lat,
      pickup_lng: pickupLocation.lng,
      delivery_address: deliveryLocation.address,
      delivery_lat: deliveryLocation.lat,
      delivery_lng: deliveryLocation.lng,
      weight: weight,
      dimensions: dimensions,
      package_type: packageType,
      // We can only send a limited amount of data, so we'll just say if images are attached
      has_images: images.length > 0 ? 'Yes' : 'No',
      image_count: images.length,
      // Attempt to attach first image if exists (might be truncated if too large)
      image_preview: images.length > 0 ? images[0].substring(0, 50000) : '',
    };

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can get these from https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_ze2d46a';
    const TEMPLATE_ID = 'template_utyt0nb';
    const PUBLIC_KEY = 'Owp0hti2ljiZFA1na';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert('Quote request sent successfully!');
        // Reset form
        setImages([]);
        setWeight('');
        setDimensions('');
        setPackageType('Standard Parcel');
        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setCompanyName('');
        // Note: Location pickers don't reset automatically in this implementation
      }, (error) => {
        console.log(error.text);
        alert('Failed to send quote request. Please try again or contact support.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

            {/* Section 1: Pickup & Delivery */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-amber-500" /> Pickup & Delivery Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <LocationPicker
                    label="Pickup From"
                    onLocationSelect={setPickupLocation}
                  />
                </div>
                <div className="space-y-4">
                  <LocationPicker
                    label="Deliver To"
                    onLocationSelect={setDeliveryLocation}
                  />
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
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (LxWxH cm)</label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 30x20x15"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                  >
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
                    <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">Upload a photo if dimensions are unclear or for fragile items.</p>

                {/* Image Preview Grid */}
                {images.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Attached Images ({images.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={img}
                            alt={`Uploaded package ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg border border-gray-200 shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition-colors"
                            title="Remove image"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3: Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Truck className="text-amber-500" /> Your Contact Info
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 rounded-md text-lg transition-colors shadow-md mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <Loader2 className="animate-spin" /> Sending Quote Request...
                </>
              ) : (
                'Get My Quote'
              )}
            </button>
            <p className="text-center text-gray-500 text-sm">No credit card required for quote.</p>

          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
