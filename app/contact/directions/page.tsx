import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { MapPin, Navigation, Car, Train, Clock } from "lucide-react"

export default function DirectionsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Get Directions
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Detailed directions to Hour of Grace Believers Ministry International. Find the easiest way to reach us.
          </p>
        </section>

        {/* Address Card */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Our Address
            </h2>
            <p className="text-xl text-[#374151] mb-2">
              123 Faith Street
            </p>
            <p className="text-lg text-[#374151] mb-4">
              Grace City, GC 12345, Ghana
            </p>
            <p className="text-[#374151]">
              Sunday Worship: 10:00 AM - 12:00 PM<br />
              Wednesday Bible Study: 7:00 PM - 8:30 PM
            </p>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Interactive Map
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-[#374151] text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            How to Get Here
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* By Car */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-8 h-8 text-[#2563eb]" />
                <h3 className="text-2xl font-bold text-[#1e3a8a]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Driving Directions
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">From Accra (East)</h4>
                  <ol className="list-decimal list-inside text-[#374151] space-y-1">
                    <li>Take the Tema Motorway heading west</li>
                    <li>Exit at Cantonments roundabout</li>
                    <li>Turn left onto Liberation Road</li>
                    <li>Continue for 2km, turn right onto Faith Street</li>
                    <li>Church is on the left after 500m</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">From Tema (West)</h4>
                  <ol className="list-decimal list-inside text-[#374151] space-y-1">
                    <li>Take the Tema Motorway heading east</li>
                    <li>Exit at Tetteh Quarshie interchange</li>
                    <li>Turn right onto Ring Road Central</li>
                    <li>Continue for 3km, turn left onto Faith Street</li>
                    <li>Church is on the right after 300m</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-[#374151]">
                    <strong>Parking:</strong> Free on-site parking available. Enter from Faith Street.
                  </p>
                </div>
              </div>
            </div>

            {/* Public Transport */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-[#2563eb]" />
                <h3 className="text-2xl font-bold text-[#1e3a8a]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Public Transport
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">By Bus</h4>
                  <ul className="text-[#374151] space-y-1">
                    <li><strong>Route 15:</strong> Faith Street stop (2-minute walk)</li>
                    <li><strong>Route 23:</strong> Cantonments stop (5-minute walk)</li>
                    <li><strong>Route 45:</strong> Ring Road Central stop (7-minute walk)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">By Train</h4>
                  <p className="text-[#374151]">
                    Nearest station: <strong>Grace City Central</strong><br />
                    Walking distance: 10 minutes<br />
                    Taxi services available at station
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">By Taxi/Ride Share</h4>
                  <p className="text-[#374151]">
                    Use apps like Bolt, Uber, or Yango<br />
                    Search for "HGBMI Church" or "123 Faith Street"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Nearby Landmarks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Shopping Center
              </h3>
              <p className="text-[#374151] mb-2">Grace City Mall - 1.2km away</p>
              <p className="text-sm text-[#6b7280]">Great for post-service shopping</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Hospital
              </h3>
              <p className="text-[#374151] mb-2">Grace City General Hospital - 2.5km away</p>
              <p className="text-sm text-[#6b7280]">Emergency medical services</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Restaurant
              </h3>
              <p className="text-[#374151] mb-2">Faith Street Café - 300m away</p>
              <p className="text-sm text-[#6b7280]">Perfect for fellowship meals</p>
            </div>
          </div>
        </section>

        {/* Contact for Help */}
        <section className="bg-[#1e3a8a] rounded-2xl p-12 text-white text-center">
          <Navigation className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Need Help Finding Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you need assistance with directions or have any questions about getting to our church,
            don't hesitate to contact us. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-CHURCH"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Call Us: (0246819964) CHURCH-1
            </a>
            <a
              href="mailto:info@hgbmi.org"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
