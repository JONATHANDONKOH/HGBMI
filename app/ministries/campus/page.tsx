"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Users, BookOpen, Heart, GraduationCap } from "lucide-react"

export default function CampusFellowshipPage() {

  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(circle at center, #aeccf3ff 0%, #e6b2dfff 25%, #fec7f2ff 50%, #90a0ee91 75%, #818cf8 100%)' }}>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/campus.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ fontFamily: '"Bebas Neue", sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
            Campus Fellowship
          </h1>
          <p className="text-xl md:text-3xl lg:text-2xl mb-8 animate-fade-in delay-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Guiding young hearts in faith and joy. A vibrant community for students and young adults.
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
        <section
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                About Our Fellowship
              </h2>
              <p className="text-lg text-[#374151] leading-relaxed mb-6">
                The Campus Fellowship is dedicated to nurturing the spiritual growth of students and young adults.
                We create a supportive environment where young people can explore their faith, build meaningful
                relationships, and discover their purpose in God's plan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">University of proffesional studies Campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#374151]">Every Thursday, 7:00 PM - 9:00 PM</span>
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
                    <h3 className="font-semibold text-[#1e3a8a]">Bible Study</h3>
                    <p className="text-[#374151]">Interactive Bible studies tailored for students</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Mentorship</h3>
                    <p className="text-[#374151]">One-on-one mentoring and spiritual guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#2563eb] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1e3a8a]">Career Guidance</h3>
                    <p className="text-[#374151]">Support for academic and career decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Thursday Fellowship
              </h3>
              <p className="text-[#374151] mb-4">
                Weekly gatherings with worship, teaching, and fellowship.
              </p>
              <p className="text-sm text-[#6b7280]">Every Thursday 6:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Study Groups
              </h3>
              <p className="text-[#374151] mb-4">
                Small group Bible studies for deeper learning and discussion.
              </p>
              <p className="text-sm text-[#6b7280]">Weekly meetings</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Community Service
              </h3>
              <p className="text-[#374151] mb-4">
                Volunteering in local communities and campus outreach.
              </p>
              <p className="text-sm text-[#6b7280]">Monthly projects</p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          className="mb-16"
        >
          <div className="bg-[#1e3a8a] rounded-2xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                What Our Members Say
              </h2>
              <blockquote className="text-xl italic mb-6">
                "The Campus Fellowship has been a lifeline during my university years. It's where I found
                true friendship, spiritual growth, and a sense of purpose. I'm grateful for this community."
              </blockquote>
              <p className="text-lg">- Ama, University Student</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Join Our Campus Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a student, faculty member, or just love being around young people,
            there's a place for you in our campus fellowship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Join This Thursday at University OF PROFFESSIONAL STUDIES (UPSA);
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

