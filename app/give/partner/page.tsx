import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Heart, Users, Target } from "lucide-react"
import PaystackForm from "@/components/PaystackForm"

export default function PartnerPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Ministry Partnership
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Become a ministry partner and support our mission to spread God's love and serve our community.
            Join us in making a lasting impact for His kingdom.
          </p>
        </div>
      </section>

      <main className="bg-white">
        {/* Partnership Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Partnership Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the ways your partnership makes a difference
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/spiritual-book-cover.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Spiritual Impact
                    </h3>
                    <p className="text-white/90">
                      Your partnership directly supports our mission to spread the gospel and help those in need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/comm support.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Users className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Community Support
                    </h3>
                    <p className="text-white/90">
                      Help us build a stronger community through outreach programs and support services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div
                  className="p-8 text-center h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/church pro.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10">
                    <Target className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      Kingdom Growth
                    </h3>
                    <p className="text-white/90">
                      Contribute to the growth of God's kingdom through our various ministry initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Partnership Levels */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Partnership Levels
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the level that best fits your commitment to our shared mission
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Bronze Partner
                </h3>
                <p className="text-3xl font-bold text-[#2563eb] mb-4">$50/month</p>
                <ul className="text-[#374151] space-y-2 mb-6">
                  <li>• Monthly prayer support</li>
                  <li>• Ministry updates</li>
                  <li>• Partner recognition</li>
                </ul>
                <div className="text-[#2563eb] font-semibold">
                  Community Support Partner
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#2563eb] relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2563eb] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Silver Partner
                </h3>
                <p className="text-3xl font-bold text-[#2563eb] mb-4">$100/month</p>
                <ul className="text-[#374151] space-y-2 mb-6">
                  <li>• All Bronze benefits</li>
                  <li>• Quarterly partner meetings</li>
                  <li>• Special event invitations</li>
                  <li>• Personalized thank you note</li>
                </ul>
                <div className="text-[#2563eb] font-semibold">
                  Discipleship Partner
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Gold Partner
                </h3>
                <p className="text-3xl font-bold text-[#2563eb] mb-4">$250/month</p>
                <ul className="text-[#374151] space-y-2 mb-6">
                  <li>• All Silver benefits</li>
                  <li>• Monthly partner calls</li>
                  <li>• VIP event access</li>
                  <li>• Named recognition</li>
                </ul>
                <div className="text-[#2563eb] font-semibold">
                  Church Growth Partner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Payment Information
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Send your partnership contributions using the payment details below
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Become a Ministry Partner
                  </h3>
                  <p className="text-white/90 text-center text-sm mt-2">Join our partnership program and support our mission</p>
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
                        <strong>Important:</strong> Please indicate "Partnership" in your payment reference when making the transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your partnership makes a real difference in our ability to serve our community and spread God's love.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg italic mb-6">"Whoever sows generously will also reap generously." - 2 Corinthians 9:6</p>
              <p className="text-sm opacity-80">Your partnership creates eternal impact</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
