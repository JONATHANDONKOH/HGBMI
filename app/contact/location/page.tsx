import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import LocationMotion from "./LocationMotion"

export default function LocationPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <LocationMotion />

      <Footer />
    </div>
  )
}
