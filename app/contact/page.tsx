"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ContactPage() {
  const headerRef = useScrollAnimation('fadeInUp');
  const contentRef = useScrollAnimation('fadeInLeft', 0.2);
  const ctaRef = useScrollAnimation('scaleIn', 0.3);

  return (
    <div className="w-full bg-black text-white">
      <Navbar />

      {/* Main Header */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16" ref={headerRef}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              CONTACT US
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
              We'd love to hear from you! Reach out through any of these channels or send us a message.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" ref={contentRef}>
            
            {/* Left: Location & Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                  Connect With Us
                </h2>
                <div className="space-y-6">
                  {/* Location */}
                  <Link href="/contact/location">
                    <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <MapPin className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                          Location
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Find our church location and get directions.
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Directions */}
                  <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                    <MessageCircle className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                        Prayer Requests
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Submit your prayer requests or message using the form below. Our team will be praying with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Info & Direct Contact */}
            <div className="space-y-6">
              <div className="border-b-2 border-blue-600 pb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Phone</p>
                    <a href="tel:+233271645202" className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                      +233 271 645 202
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Email</p>
                    <a href="mailto:Heous2020@yahoo.com" className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                      Heous2020@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-200 italic">
                  "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." - Philippians 4:7
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form Section */}
          <div ref={ctaRef}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

