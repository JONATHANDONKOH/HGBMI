"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Give from "@/components/Give"

export default function GivePage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="w-full px-6 py-8 overflow-x-hidden">
        {/* Give Component */}
        <div className="w-full">
          <Give />
        </div>
      </main>

      <Footer />
    </div>
  )
}

