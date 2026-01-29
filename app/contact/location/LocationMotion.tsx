"use client"
import React from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('@/components/Globe'), { ssr: false })

export default function LocationMotion() {
  const headerRef = useScrollAnimation('fadeInUp');
  const leftRef = useScrollAnimation('fadeInLeft', 0.2);
  const rightRef = useScrollAnimation('fadeInRight', 0.2);
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black pt-16 pb-12 border-b border-gray-800" ref={headerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-white" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
            LOCATION
          </h1>
          <p className="text-lg text-gray-400">Visit us at Hour of Grace Believers Ministries International</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Information */}
          <div className="space-y-16" ref={leftRef}>
            
            {/* Main Location */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold mb-8 text-white uppercase tracking-wider" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Main Location
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-widest">ADDRESS</p>
                  <p className="text-base text-white leading-relaxed">
                    Hour of Grace Believers Ministries<br />
                    Lashibi, Accra<br />
                    Ghana
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-widest">HOURS</p>
                  <p className="text-base text-white">
                    Open 24 hours
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-widest">PHONE</p>
                  <p className="text-base text-white">
                    <a href="tel:+233271645202" className="text-blue-400 hover:text-blue-300 transition">
                      +233 271 645 202
                    </a>
                  </p>
                </div>
                <div>
                  <a href="https://www.google.com/maps/search/lashibi+accra" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 transition-all">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="pb-8 border-t border-gray-800 pt-8">
              <h2 className="text-2xl font-bold mb-8 text-white uppercase tracking-wider" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Service Times
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Sunday Services</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>8:30 AM - Holy Ghost Encounter</li>
                    <li>12:00 PM - Main Service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Wednesday Services</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>7:00 PM - Prayer & Praise</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Friday Services</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>7:00 PM - Night Prayer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl font-bold mb-8 text-white uppercase tracking-wider" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Connect With Us
              </h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Have questions or need assistance? We'd love to hear from you. Reach out to us through any of the channels below.
              </p>
              <div className="space-y-4 text-sm">
                <a href="mailto:info@hgbmi.org" className="block text-blue-400 hover:text-blue-300 transition">
                  Email: info@hgbmi.org
                </a>
                <a href="tel:+233271645202" className="block text-blue-400 hover:text-blue-300 transition">
                  WhatsApp: +233 271 645 202
                </a>
              </div>
            </div>

          </div>

          {/* Right: Map with 3D Globe Overlay */}
          <div className="h-full min-h-[600px] overflow-hidden shadow-2xl relative" ref={rightRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4474528338947!2d-0.05825892555233181!3d5.648218294333065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81357e6bb9db%3A0xdf659928606db91e!2sHour%20of%20Grace%20Believers%20Ministries%20International!5e0!3m2!1sen!2sgh!4v1762594726158!5m2!1sen!2sgh&style=feature:all|element:labels|visibility:off"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "600px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location Map"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none">
              <Globe />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

