"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Give from "@/components/Give"
import { Smartphone, Building2 } from "lucide-react"

export default function GivePage() {

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section
          className="text-center mb-16"
        >
          
        </section>

        {/* Give Component */}
        <div>
          <Give />
        </div>

        {/* Payment Information Section */}
        <section
          className="mt-16 mb-16"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Payment Information
              </h2>
              <p className="text-gray-600 text-lg">
                Send your donations using the payment details below
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Make a Donation
                  </h3>
                  <p className="text-white/90 text-center text-sm mt-2">Send your donation using the details below</p>
                </div>

                {/* Payment Details */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Mobile Money */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-green-600" />
                        Mobile Money (Momo)
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Phone Number: <span className="font-mono font-bold">(0246819964) APOSTLE PRINCE OFOSU HENE</span></p>
                      </div>
                    </div>

                    {/* Bank Account */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
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
                        <strong>Important:</strong> Please indicate the type of donation in your payment reference (e.g., Tithe, Offering, Building Fund, Missions).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

