import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Users, Heart, Home, Coffee } from "lucide-react"

export default function NunguaFellowshipPage() {
  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(circle at center, #aeccf3ff 0%, #e6b2dfff 25%, #fec7f2ff 50%, #90a0ee91 75%, #818cf8 100%)' }}>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/kyt.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ fontFamily: '"Bebas Neue", sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
            Nungua Fellowship
          </h1>
          <p className="text-xl md:text-3xl lg:text-2xl mb-8 animate-fade-in delay-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Building community through shared faith. A warm and welcoming fellowship for families and individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-10 py-7 md:px-12 md:py-8 lg:px-10 lg:py-7 rounded-lg font-semibold text-xl md:text-2xl lg:text-xl transition-all duration-300 transform hover:scale-105">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-10 py-7 md:px-12 md:py-8 lg:px-10 lg:py-7 rounded-lg font-semibold text-xl md:text-2xl lg:text-xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20">

        {/* Fellowship Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                About Our Fellowship
              </h2>
              <p className="text-lg text-[#374151] leading-relaxed mb-6">
                The Nungua Fellowship is a close-knit community that emphasizes building strong relationships
                and supporting one another in faith. Our fellowship creates a warm, family-like atmosphere
                where everyone feels valued and loved.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Nungua Community Hall</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Every Sunday, 2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Led by Pastor Kyte</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                What We Offer
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Family Ministry</h3>
                    <p className="text-[#374151]">Programs for all ages and family groups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Support Groups</h3>
                    <p className="text-[#374151]">Small groups for encouragement and prayer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Fellowship Meals</h3>
                    <p className="text-[#374151]">Community meals and social gatherings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Sunday Fellowship
              </h3>
              <p className="text-[#374151] mb-4">
                Warm, welcoming gatherings with worship, teaching, and fellowship.
              </p>
              <p className="text-sm text-[#6b7280]">Every Sunday 2:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Prayer Circles
              </h3>
              <p className="text-[#374151] mb-4">
                Intimate prayer groups for sharing and interceding together.
              </p>
              <p className="text-sm text-[#6b7280]">Weekly meetings</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Community Meals
              </h3>
              <p className="text-[#374151] mb-4">
                Potluck dinners and fellowship meals bringing people together.
              </p>
              <p className="text-sm text-[#6b7280]">Monthly gatherings</p>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-16">
          <div className="bg-[#f8fafc] rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Community Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Support Network
                </h3>
                <p className="text-[#374151]">
                  Our fellowship provides a strong support network for members going through
                  life's challenges, offering prayer, encouragement, and practical help.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  Family Focus
                </h3>
                <p className="text-[#374151]">
                  We believe in ministering to the whole family, with programs designed to
                  strengthen family bonds and spiritual growth across all ages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-[#1e3a8a] rounded-2xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                A Place Like Home
              </h2>
              <blockquote className="text-xl italic mb-6">
                "The Nungua Fellowship feels like family. In this community, I've found the love,
                support, and spiritual growth I've been searching for. It's truly a blessing."
              </blockquote>
              <p className="text-lg">- Emmanuel, Long-time Member</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Find Your Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our warm and welcoming fellowship in Nungua. Whether you're new to the area
            or looking for deeper connections, you'll find a place here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Join This Sunday
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More About Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

