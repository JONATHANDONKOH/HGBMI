"use client"
import React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Users, Heart, Calendar, Star } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function JoinPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#4A90E2' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Join Our Family
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience the warmth of community, the power of worship, and the joy of fellowship.
            Every Sunday is an opportunity to grow closer to God and to each other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FCCB06] hover:bg-[#e6b805] text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-bounce hover:animate-none"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 bg-transparent animate-bounce hover:animate-none"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Service Times
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for worship, fellowship, and spiritual growth at our weekly services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sunday Service */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Sunday Worship</h3>
              <p className="text-lg mb-4">Every Sunday</p>
              <div className="space-y-2">
                <p className="font-semibold">Main Service: 9:00 AM</p>
                <p className="font-semibold">Second Service: 11:00 AM</p>
                <p className="text-sm opacity-90">Children's Ministry Available</p>
              </div>
            </div>

            {/* Midweek Service */}
            <div className="bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Midweek Prayer</h3>
              <p className="text-lg mb-4">Every Wednesday</p>
              <div className="space-y-2">
                <p className="font-semibold">7:00 PM</p>
                <p className="text-sm opacity-90">Prayer, Bible Study & Fellowship</p>
              </div>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Special Events</h3>
              <p className="text-lg mb-4">Various Times</p>
              <div className="space-y-2">
                <p className="font-semibold">Conferences & Retreats</p>
                <p className="text-sm opacity-90">Check our events page for details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our services are designed to welcome everyone, from lifelong believers to those exploring faith for the first time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Warm Welcome</h3>
              <p className="text-gray-600">Friendly greeters and ushers to help you feel at home</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Community</h3>
              <p className="text-gray-600">Connect with others in fellowship and small groups</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Inspiring Worship</h3>
              <p className="text-gray-600">Contemporary music and powerful preaching</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Children's Ministry</h3>
              <p className="text-gray-600">Safe, engaging programs for kids of all ages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Find Us
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#2563eb] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Main Campus</p>
                    <p className="text-gray-600">123 Faith Street<br />Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#2563eb] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Parking</p>
                    <p className="text-gray-600">Free parking available on premises</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-bounce hover:animate-none"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                Get Directions
              </Button>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/cong.jpg"
                alt="Church building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* First Time Visitor Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            First Time Here?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're excited to meet you! Here's what you can expect on your first visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Arrival</h3>
              <p>Arrive 15 minutes early. Our welcome team will greet you and help you find your way.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>During Service</h3>
              <p>Join in worship, listen to the message, and participate in communion if you choose.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>After Service</h3>
              <p>Stay for fellowship, coffee, and conversation. We'd love to get to know you!</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-[#FCCB06] hover:bg-[#e6b805] text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-bounce hover:animate-none"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            I'm Planning to Visit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}