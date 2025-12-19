'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Truck, MapPin, Calendar, CreditCard, Camera, X, CheckCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import LocationPicker from '@/components/LocationPicker';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

/**
 * Interface representing a geographic location with address and coordinates.
 */
interface Location {
  address: string;
  lat: number;
  lng: number;
}

/**
 * Interface representing the form data structure for a quote request.
 */
interface QuoteFormData {
  pickupLocation: Location;
  deliveryLocation: Location;
  weight: string;
  dimensions: string;
  packageType: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  images: File[];
}

/**
 * QuotePage Component
 * 
 * Displays a multi-section form for users to request a shipping quote.
 * Features include:
 * - Location selection with distance calculation
 * - Package details input with image upload
 * - Contact information collection
 * - Submission to Basin via FormData (supports file uploads)
 * - Success modal popup
 */
export default function QuotePage() {
  const [isSending, setIsSending] = useState(false);
  const [distance, setDistance] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const isSubmittingRef = useRef(false);
  const [formKey, setFormKey] = useState(0); // Used to reset LocationPickers

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    defaultValues: {
      weight: '',
      dimensions: '',
      packageType: 'Standard Parcel',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      companyName: '',
      images: [],
    },
  });

  const images = watch('images');
  const pickupLocation = watch('pickupLocation');
  const deliveryLocation = watch('deliveryLocation');

  /**
   * Calculates the distance between two coordinates using the Haversine formula.
   * @param lat1 Latitude of first point
   * @param lon1 Longitude of first point
   * @param lat2 Latitude of second point
   * @param lon2 Longitude of second point
   * @returns Distance in kilometers formatted to 2 decimal places
   */
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d.toFixed(2);
  };

  /**
   * Converts degrees to radians.
   */
  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  // Effect to automatically calculate distance when locations change
  useEffect(() => {
    if (pickupLocation && pickupLocation.lat && deliveryLocation && deliveryLocation.lat) {
      const dist = calculateDistance(
        pickupLocation.lat,
        pickupLocation.lng,
        deliveryLocation.lat,
        deliveryLocation.lng
      );
      setDistance(dist);
    } else {
      setDistance(null);
    }
  }, [pickupLocation, deliveryLocation]);

  /**
   * Handles file selection for image upload.
   * Appends selected file to the images array in form state.
   */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const currentImages = watch('images') || [];
      setValue('images', [...currentImages, file]);
    }
  };

  /**
   * Removes an image from the selection by index.
   */
  const removeImage = (index: number) => {
    const currentImages = watch('images');
    const newImages = [...currentImages];
    newImages.splice(index, 1);
    setValue('images', newImages);
  };

  /**
   * Form submission handler.
   * Constructs FormData and sends it to Basin.
   */
  const onSubmit: SubmitHandler<QuoteFormData> = async (data) => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsSending(true);

    const BASIN_FORM_ID = '319dc21d4bb4';

    try {
      const formData = new FormData();
      // Append standard text fields
      formData.append("name", data.contactName);
      formData.append("email", data.contactEmail);
      formData.append("phone", data.contactPhone);
      formData.append("company", data.companyName);
      formData.append("pickup_address", data.pickupLocation.address);
      formData.append("delivery_address", data.deliveryLocation.address);
      formData.append("distance", distance ? `${distance} km` : "N/A");
      formData.append("weight", data.weight);
      formData.append("dimensions", data.dimensions);
      formData.append("package_type", data.packageType);

      // Append images as binary files
      data.images.forEach(file => {
        formData.append("images[]", file);
      });

      // Send request to Basin
      const response = await fetch(`https://usebasin.com/f/${BASIN_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Force JSON response
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      console.log('Quote sent via Basin');

      // Show success modal instead of alert
      setShowSuccessModal(true);

      reset();
      setFormKey(prev => prev + 1); // Reset LocationPickers
      setDistance(null); // Reset distance display
    } catch (error: any) {
      console.error('Submission Error:', error);
      alert(`Failed to send quote request: ${error.message}`);
    } finally {
      setIsSending(false);
      // Small timeout to prevent immediate double-submit if user clicks fast
      setTimeout(() => {
        isSubmittingRef.current = false;
      }, 2000);
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

            {/* Section 1: Pickup & Delivery */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-amber-500" /> Pickup & Delivery Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Controller
                    name="pickupLocation"
                    control={control}
                    rules={{ required: 'Pickup location is required' }}
                    render={({ field }) => (
                      <LocationPicker
                        key={`pickup-${formKey}`}
                        label="Pickup From"
                        onLocationSelect={field.onChange}
                      />
                    )}
                  />
                  {errors.pickupLocation && <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>}
                </div>
                <div className="space-y-4">
                  <Controller
                    name="deliveryLocation"
                    control={control}
                    rules={{ required: 'Delivery location is required' }}
                    render={({ field }) => (
                      <LocationPicker
                        key={`delivery-${formKey}`}
                        label="Deliver To"
                        onLocationSelect={field.onChange}
                      />
                    )}
                  />
                  {errors.deliveryLocation && <p className="text-red-500 text-sm">{errors.deliveryLocation.message}</p>}
                </div>
              </div>

              {/* Distance Display */}
              {distance && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-3">
                  <MapPin className="text-blue-500 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Estimated Distance</p>
                    <p className="text-xl font-bold text-gray-900">{distance} km</p>
                  </div>
                </div>
              )}
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
                    placeholder="0.00"
                    {...register('weight', { required: 'Weight is required' })}
                    className={`w-full p-3 border ${errors.weight ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions (LxWxH cm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 30x20x15"
                    {...register('dimensions', { required: 'Dimensions are required' })}
                    className={`w-full p-3 border ${errors.dimensions ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.dimensions && <p className="text-red-500 text-sm mt-1">{errors.dimensions.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                  <select
                    {...register('packageType')}
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
                {images && images.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Attached Images ({images.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(img)}
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
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('contactName', { required: 'Name is required' })}
                    className={`w-full p-3 border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('contactEmail', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full p-3 border ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('contactPhone', { required: 'Phone number is required' })}
                    className={`w-full p-3 border ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.contactPhone && <p className="text-red-500 text-sm mt-1">{errors.contactPhone.message}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    {...register('companyName')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
            <p className="text-gray-600 mb-8">
              Thank you for choosing Kaelo. We have received your details and will reach out to you shortly with a personalized quote.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
