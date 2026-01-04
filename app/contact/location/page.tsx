"use client"
import React from "react"
import dynamic from 'next/dynamic'
import Footer from "@/components/Footer"

const LocationMotion = dynamic(() => import('./LocationMotion'), { ssr: false })

export default function LocationPage() {
  return (
    <div className="min-h-screen">
      <LocationMotion />
      <Footer />
    </div>
  )
}

