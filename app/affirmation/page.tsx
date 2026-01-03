"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

export default function AffirmationPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#4A90E2' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Daily Affirmations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Words of encouragement and spiritual affirmations to uplift your soul and strengthen your faith.
          </p>
        </div>
      </section>

      {/* Affirmations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              No Affirmation Posted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check back soon for inspiring affirmations and words of encouragement from our faith community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

