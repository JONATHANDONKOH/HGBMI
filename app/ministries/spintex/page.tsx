import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Users, MapPin, Calendar, Heart } from "lucide-react"

export default function SpintexFellowshipPage() {
  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(circle at center, #aeccf3ff 0%, #e6b2dfff 25%, #fec7f2ff 50%, #90a0ee91 75%, #818cf8 100%)' }}>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/vhh.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ fontFamily: '"Bebas Neue", sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
            Spintex Fellowship
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Uplifting worship through music and praise. Join our vibrant community in Spintex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
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
                The Spintex Fellowship is a dynamic community of believers committed to worship, fellowship,
                and service. Our focus on music and praise creates an atmosphere where hearts are uplifted
                and spirits are renewed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Spintex Community Center, Spintex</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Every Sunday, 9:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Led by Pastor David Osei</span>
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
                    <h3 className="font-semibold text-[#1e3a8a]">Worship Services</h3>
                    <p className="text-[#374151]">Dynamic worship with live music and praise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Community Groups</h3>
                    <p className="text-[#374151]">Small groups for fellowship and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Youth Programs</h3>
                    <p className="text-[#374151]">Special programs for young people</p>
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
                Sunday Worship
              </h3>
              <p className="text-[#374151] mb-4">
                Join us for powerful worship services with inspiring music and messages.
              </p>
              <p className="text-sm text-[#6b7280]">Every Sunday 9:00 AM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Prayer Meetings
              </h3>
              <p className="text-[#374151] mb-4">
                Weekly prayer gatherings for spiritual growth and intercession.
              </p>
              <p className="text-sm text-[#6b7280]">Every Wednesday 7:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Community Outreach
              </h3>
              <p className="text-[#374151] mb-4">
                Serving our local community through various outreach programs.
              </p>
              <p className="text-sm text-[#6b7280]">Monthly activities</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1e3a8a] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Join Our Fellowship
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Become part of our loving community in Spintex. All are welcome to experience God's love and grace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Visit Us This Sunday
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

