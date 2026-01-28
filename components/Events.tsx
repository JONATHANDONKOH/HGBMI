"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Events({ limit }: { limit?: number }) {
  const [selectedEvent, setSelectedEvent] = useState(0)
  const [isLarge, setIsLarge] = useState(false)
  const headerRef = useScrollAnimation('fadeInUp')
  const cardsRef = useScrollAnimation('fadeInLeft', 0.2)

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1024)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM - 12:00 PM",
      location: "Main Sanctuary, Lashibi",
      attendees: 1500,
      category: "Worship",
      flier: "/father.jpg"
    },
    {
      id: 2,
      title: "Friday Service",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary, Lashibi",
      attendees: 1200,
      category: "Worship",
      flier: "/kyt.jpg"
    },
    {
      id: 3,
      title: "Wednesday Service",
      date: "Every Wednesday",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary, Lashibi",
      attendees: 1000,
      category: "Worship",
      flier: "/marry.jpg"
    },
    {
      id: 4,
      title: "Soul Wining",
      date: "Every Saturday",
      time: "5:00 PM - 7:00 PM",
      location: "Accra",
      attendees: 800,
      category: "Fellowship",
      flier: "/life.jpg"
    },
    {
      id: 5,
      title: "Foundation School",
      date: "Every Tuesday",
      time: "6:00 PM - 8:00 PM",
      location: "Fellowship Hall, Lashibi",
      attendees: 600,
      category: "Study",
      flier: "/faith.jpg"
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-black">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        {/* HEADER */}
        <div className="text-center mb-12" ref={headerRef}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
            Upcoming Events
          </h2>
          <p className="text-slate-300 text-lg" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE: IMAGE */}
          <div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            <img
              src="/service.jpg"
              alt="Church Service"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* RIGHT SIDE: EVENTS LIST */}
          <div className="space-y-6 animate-fade-in-up-stagger" ref={cardsRef}>
            {events.slice(0, limit).map((event, index) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(index)}
                className={`
                  cursor-pointer
                  p-8
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  border-b-2
                  ${
                    selectedEvent === index
                      ? "border-purple-700 bg-black"
                      : "border-slate-700 bg-black"
                  }
                `}
              >
                {/* HOVER EFFECT BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 relative z-10">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                        {event.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      <div>
                        <p className="text-sm text-slate-400 mb-3" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>Date</p>
                        <p className="text-white text-lg font-semibold" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>{event.date}</p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-400 mb-3" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>Time</p>
                        <p className="text-white text-lg font-semibold" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>{event.time}</p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-400 mb-3" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>Location</p>
                        <p className="text-white text-lg font-semibold" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div
          className="text-center mt-16"
        >
          <Link href="/events">

          </Link>
        </div>

        {/* CTA BUTTON - Only show on homepage */}
        {limit && (
          <div
            className="text-center mt-16"
          >
            <Link href="/events">
              <Button className="
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:from-blue-600 hover:to-purple-700
                text-white font-bold px-10 py-6 rounded-mid
                text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25
                transition-all duration-300
                hover:scale-105
              " style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600 }}>
                View All Events
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

