"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Events({ limit }: { limit?: number }) {
  const headerRef = useScrollAnimation("fadeInUp")
  const contentRef = useScrollAnimation("fadeInUp", 0.2)

  return (
    <section className="w-full bg-[#4a9fa5]">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="text-center mb-10" ref={headerRef}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
          >
            Upcoming Events
          </h2>
          <p
            className="text-white/80 text-base"
            style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}
          >
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>

        {/* MAIN FLEXBOX BLOCK */}
        <div
          className="flex flex-col lg:flex-row gap-12 items-center lg:items-start"
          ref={contentRef}
        >
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-2xl shadow-black/30">
            <img
src="/larbi.jpeg"
              alt="Sunday Worship Service"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-white space-y-5 text-center lg:text-left">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-white/20"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Worship
            </span>

            <h3
              className="text-3xl sm:text-4xl font-bold leading-snug"
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
            >
              Sunday Worship Service
            </h3>

            <p
              className="text-white/85 text-base sm:text-lg italic leading-relaxed"
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}
            >
              Every Sunday is a divine appointment. Join thousands as we gather
              to worship, receive the Word, and experience the presence of God
              together in one accord. Come expecting a miracle.
            </p>

            <div
              className="text-white/75 text-sm space-y-1"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <p>📅 Every Sunday &nbsp;·&nbsp; 🕐 9:00 AM – 12:00 PM</p>
              <p>📍 Main Sanctuary, Lashibi</p>
            </div>

            <div className="pt-2">
              <Link href="/events">
                <button
                  className="bg-[#1a5f6a] hover:bg-[#154f59] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        {limit && (
          <div className="text-center mt-12">
            <Link href="/events">
              <Button
                className="bg-white text-[#4a9fa5] hover:bg-white/90 font-bold px-10 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
              >
                View All Events
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
