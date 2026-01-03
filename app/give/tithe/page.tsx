import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { CreditCard, Smartphone, Building2 } from "lucide-react"
import PaystackForm from "@/components/PaystackForm"

export default function TithePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Online Tithe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Give your tithe securely online with multiple payment options available.
            Honor God with your firstfruits and support His work in our community.
          </p>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Payment Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Send your tithe using the payment details below
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] px-8 py-6 text-white">
                <h3 className="text-2xl font-bold text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Give Your Tithe
                </h3>
                <p className="text-white/90 text-center text-sm mt-2">Send your tithe using the details below</p>
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
                      <strong>Important:</strong> Please indicate "Tithe" in your payment reference when making the transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tithe Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            About Tithing
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Tithing is a biblical principle of giving back to God a portion of what He has blessed us with.
            Your tithe supports the ministry work, helps spread the gospel, and enables us to serve our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Biblical Foundation</h3>
              <p className="text-gray-600">"Bring the whole tithe into the storehouse... Test me in this... and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." - Malachi 3:10</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Kingdom Impact</h3>
              <p className="text-gray-600">Your tithe enables us to reach more people with the gospel, support missionaries, and provide for those in need throughout our community and beyond.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Spiritual Blessing</h3>
              <p className="text-gray-600">Tithing is an act of worship and obedience that opens the door to God's abundant blessings in every area of your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Honor God With Your Tithe
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the joy of faithful giving and witness God's provision in your life.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-lg italic mb-6">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
            <p className="text-sm opacity-80">Your tithe makes eternal impact possible</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

