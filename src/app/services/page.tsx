'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, Package, Briefcase, ShoppingBag } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Services</h1>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Comprehensive logistics solutions designed for individuals, businesses, and e-commerce growth.
          </p>

          <div className="space-y-16">
              
              {/* KAELO SEND */}
              <div>
                  <div className="flex items-center gap-3 mb-6">
                      <Truck className="w-8 h-8 text-amber-500" />
                      <h3 className="text-2xl font-bold text-gray-900">KAELO SEND (Standard Courier)</h3>
                  </div>
                  <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100 text-sm text-left">
                          <thead className="bg-gray-900 text-white">
                              <tr>
                                  <th className="p-4 rounded-tl-xl">Tier</th>
                                  <th className="p-4">Price Range (ZAR)</th>
                                  <th className="p-4">Max Weight/Size</th>
                                  <th className="p-4">Delivery Speed</th>
                                  <th className="p-4">Key Features</th>
                                  <th className="p-4 rounded-tr-xl">Best For</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Kasi Quick</td>
                                  <td className="p-4 text-amber-600 font-medium">R60 - R85</td>
                                  <td className="p-4">5kg <br/><span className="text-xs text-gray-500">30x30x30cm</span></td>
                                  <td className="p-4">Same day or next business day <br/><span className="text-xs text-gray-500">(within same metro)</span></td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Basic SMS tracking</li>
                                          <li>Township coverage</li>
                                          <li>Cash on Delivery option</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">Documents, small packages, non-urgent local deliveries</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Business Standard</td>
                                  <td className="p-4 text-amber-600 font-medium">R85 – R120</td>
                                  <td className="p-4">10kg <br/><span className="text-xs text-gray-500">40x40x40cm</span></td>
                                  <td className="p-4">Next business day <br/><span className="text-xs text-gray-500">(within province)</span></td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Live GPS tracking</li>
                                          <li>Photo proof of delivery</li>
                                          <li>Email/WhatsApp updates</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">E-commerce orders, regular business shipments</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Express Secure</td>
                                  <td className="p-4 text-amber-600 font-medium">R120 - R200+</td>
                                  <td className="p-4">20kg <br/><span className="text-xs text-gray-500">50x50x50cm</span></td>
                                  <td className="p-4">Same-day or Next day <br/><span className="text-xs text-gray-500">by 10am/12pm</span></td>
                                  <td className="p-4 text-center text-gray-500">-</td>
                                  <td className="p-4 text-gray-600">-</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              {/* KAELO FREIGHT */}
              <div>
                  <div className="flex items-center gap-3 mb-6">
                      <Package className="w-8 h-8 text-amber-500" />
                      <h3 className="text-2xl font-bold text-gray-900">KAELO FREIGHT (Goods Delivery)</h3>
                  </div>
                  <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100 text-sm text-left">
                          <thead className="bg-gray-900 text-white">
                              <tr>
                                  <th className="p-4 rounded-tl-xl">Tier</th>
                                  <th className="p-4">Price Range (ZAR)</th>
                                  <th className="p-4">Capacity</th>
                                  <th className="p-4">Delivery Speed</th>
                                  <th className="p-4">Key Features</th>
                                  <th className="p-4 rounded-tr-xl">Best For</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Partial Load Share</td>
                                  <td className="p-4 text-amber-600 font-medium">From R300</td>
                                  <td className="p-4">1-10 cartons <br/><span className="text-xs text-gray-500">(share vehicle)</span></td>
                                  <td className="p-4">2-3 day window <br/><span className="text-xs text-gray-500">(scheduled routes)</span></td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Cost-effective</li>
                                          <li>Scheduled departures</li>
                                          <li>Basic tracking</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">Small to medium stock shipments, shared freight</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Dedicated Bakkie/Van</td>
                                  <td className="p-4 text-amber-600 font-medium">From R750</td>
                                  <td className="p-4">Exclusive vehicle use <br/><span className="text-xs text-gray-500">(up to 1500kg)</span></td>
                                  <td className="p-4">1-2 days <br/><span className="text-xs text-gray-500">(direct delivery)</span></td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Door-to-door service</li>
                                          <li>Single consignment</li>
                                          <li>Real-time tracking</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">Furniture, equipment, bulk stock, business moves</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Scheduled Contract</td>
                                  <td className="p-4 text-amber-600 font-medium">Custom Quote</td>
                                  <td className="p-4">Tailored to volume</td>
                                  <td className="p-4">Regular schedule</td>
                                  <td className="p-4 text-center text-gray-500">-</td>
                                  <td className="p-4 text-gray-600">-</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              {/* KAELO COMMERCE */}
              <div>
                  <div className="flex items-center gap-3 mb-6">
                      <ShoppingBag className="w-8 h-8 text-amber-500" />
                      <h3 className="text-2xl font-bold text-gray-900">KAELO COMMERCE (E-Commerce Integration)</h3>
                  </div>
                  <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100 text-sm text-left">
                          <thead className="bg-gray-900 text-white">
                              <tr>
                                  <th className="p-4 rounded-tl-xl">Tier</th>
                                  <th className="p-4">Monthly Fee</th>
                                  <th className="p-4">Included Deliveries</th>
                                  <th className="p-4">Key Features</th>
                                  <th className="p-4">Support Level</th>
                                  <th className="p-4 rounded-tr-xl">Best For</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Starter Plan</td>
                                  <td className="p-4 text-amber-600 font-medium">R199/month</td>
                                  <td className="p-4">10x Kasi Quick deliveries</td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Basic API integration</li>
                                          <li>Dashboard analytics</li>
                                          <li>Standard tracking</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">Email support</td>
                                  <td className="p-4 text-gray-600">New online sellers, low-volume stores</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Growth Plan</td>
                                  <td className="p-4 text-amber-600 font-medium">R499/month</td>
                                  <td className="p-4">Volume-based discounts (15-25%)</td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Advanced API features</li>
                                          <li>Branded tracking page</li>
                                          <li>CoD management</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">Dedicated account manager and priority support</td>
                                  <td className="p-4 text-gray-600">Scaling businesses, medium-volume sellers</td>
                              </tr>
                              <tr className="hover:bg-gray-50">
                                  <td className="p-4 font-bold text-gray-900">Enterprise Plan</td>
                                  <td className="p-4 text-amber-600 font-medium">Custom</td>
                                  <td className="p-4">Tailored to requirements</td>
                                  <td className="p-4">
                                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                                          <li>Custom integrations</li>
                                          <li>Warehousing options</li>
                                          <li>Full supply chain consulting</li>
                                      </ul>
                                  </td>
                                  <td className="p-4 text-gray-600">-</td>
                                  <td className="p-4 text-gray-600">-</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
