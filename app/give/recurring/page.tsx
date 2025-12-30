import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Calendar, CreditCard, CheckCircle } from "lucide-react"
import { Button } from '@/components/ui/button'
import PaystackForm from "@/components/PaystackForm"

export default function RecurringPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Recurring Giving
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Set up automatic monthly or weekly giving to support our ongoing ministry work.
            Make a lasting commitment to God's work in our community.
          </p>
        </div>
      </section>

      <main className="bg-white">
        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Why Choose Recurring Giving?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the convenience and impact of consistent, automatic giving
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <Calendar className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Convenient
                </h3>
                <p className="text-[#374151]">
                  Never forget to give again. Your support continues automatically.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <CreditCard className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Secure
                </h3>
                <p className="text-[#374151]">
                  Your payment information is encrypted and securely stored.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <CheckCircle className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Flexible
                </h3>
                <p className="text-[#374151]">
                  Change or cancel your recurring giving at any time.
                </p>
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
                Send your recurring contributions using the payment details below
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Set Up Recurring Giving
                  </h3>
                  <p className="text-white/90 text-center text-sm mt-2">Set up automatic monthly giving to support our ministry</p>
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
                        <strong>Important:</strong> Please indicate "Recurring" in your payment reference when making the transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about recurring giving
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-100">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">
                  Can I change my giving amount?
                </h3>
                <p className="text-[#374151]">
                  Yes, you can update your recurring giving amount at any time through your account dashboard.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-100">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">
                  How do I cancel recurring giving?
                </h3>
                <p className="text-[#374151]">
                  You can cancel or pause your recurring giving at any time by contacting our office or through your online account.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-100">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">
                  Is my payment information secure?
                </h3>
                <p className="text-[#374151]">
                  Absolutely. We use industry-standard encryption and security measures to protect your payment information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Join Our Faithful Givers
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Become part of our community of faithful supporters who make our ministry possible through regular giving.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg italic mb-6">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap." - Luke 6:38</p>
              <p className="text-sm opacity-80">Your consistent giving creates eternal impact</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
