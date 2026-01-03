import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Gift, Heart, Home, BookOpen } from "lucide-react"
import PaystackForm from "@/components/PaystackForm"
import Image from "next/image"

export default function OfferingsPage() {

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Special Offerings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Support special projects and community outreach through your generous offerings.
            Make a lasting impact on our community and beyond.
          </p>
        </div>
      </section>

      <main className="bg-white">
        {/* Offering Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Choose Your Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select a special offering category that speaks to your heart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Building Fund */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/church pro.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Home className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Building Fund
                    </h3>
                    <p className="text-white/90 mb-6">
                      Help us expand our facilities to better serve our growing community.
                    </p>

                    <div className="text-white font-semibold">
                      Building Fund
                    </div>
                  </div>
                </div>
              </div>

              {/* Missions */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/mission work.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Missions
                    </h3>
                    <p className="text-white/90 mb-6">
                      Support our mission work both locally and internationally.
                    </p>

                    <div className="text-white font-semibold">
                      Mission Work
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/education support.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Education
                    </h3>
                    <p className="text-white/90 mb-6">
                      Fund educational programs and resources for our community.
                    </p>

                    <div className="text-white font-semibold">
                      Education Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Aid */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/comm support.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Gift className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Community Aid
                    </h3>
                    <p className="text-white/90 mb-6">
                      Help those in need through our community assistance programs.
                    </p>

                    <div className="text-white font-semibold">
                      Community Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Payment Information
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Send your special offerings using the payment details below
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Give Special Offerings
                  </h3>
                  <p className="text-white/90 text-center text-sm mt-2">Support special projects and community outreach</p>
                </div>

                {/* Payment Details */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Mobile Money */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Mobile Money (Momo)
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Phone Number: <span className="font-mono font-bold">(0246819964) APOSTLE PRINCE OFOSU HENE</span></p>
                      </div>
                    </div>

                    {/* Bank Account */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Bank Account
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Bank: <span className="font-bold">GT Bank</span></p>
                        <p className="text-sm text-gray-600">Account Number: <span className="font-mono font-bold">1234567890</span></p>
                        <p className="text-sm text-gray-600">Account Name: <span className="font-bold">HGBMI</span></p>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> Please indicate the type of offering in your reference when making the payment (e.g., Building Fund, Missions, Education, Community Aid).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Current Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how your offerings are making a real difference
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Youth Center Renovation
                </h3>
                <p className="text-[#374151] mb-6">
                  We're renovating our youth center to create a better space for young people to gather, learn, and grow in faith.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#374151] mb-2">
                    <span>Progress</span>
                    <span>$15,000 / $25,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#2563eb] h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="text-[#2563eb] font-semibold">
                  Youth Center Renovation Project
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Community Food Bank
                </h3>
                <p className="text-[#374151] mb-6">
                  Supporting our local food bank to ensure no one in our community goes hungry.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#374151] mb-2">
                    <span>Progress</span>
                    <span>$8,500 / $15,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#2563eb] h-2 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                </div>
                <div className="text-[#2563eb] font-semibold">
                  Community Food Bank Project
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Make a Difference Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your special offering can transform lives and build a stronger community for God's kingdom.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg italic mb-6">"Whoever sows generously will also reap generously." - 2 Corinthians 9:6</p>
              <p className="text-sm opacity-80">Your generosity creates eternal impact</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

