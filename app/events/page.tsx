'use client'

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Events from "@/components/Events"

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Events
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Join us for worship, fellowship, and spiritual growth. All events are open to everyone.
          </p>
        </section>

        {/* Events Component */}
        <div
        >
          <Events />
        </div>
      </main>

      <Footer />
    </div>
  )
}

