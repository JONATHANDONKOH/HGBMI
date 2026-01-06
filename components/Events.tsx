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

export default function Events({ limit }: { limit?: number }) {
  const [selectedEvent, setSelectedEvent] = useState(0)
  const [isLarge, setIsLarge] = useState(false)

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-slate-300 text-lg">
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
          <div className="space-y-6">
            {events.slice(0, limit).map((event, index) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(index)}
                className={`
                  cursor-pointer
                  rounded-xl
                  p-6
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  border-2
                  ${
                    selectedEvent === index
                      ? "border-yellow-400 bg-gradient-to-br from-slate-900 to-slate-800"
                      : "border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900"
                  }
                `}
              >
                {/* HOVER EFFECT BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 relative z-10">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {event.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedEvent === index 
                          ? "bg-yellow-500 text-black" 
                          : "bg-slate-700 text-slate-300"
                      }`}>
                        {event.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Calendar size={16} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Date</p>
                          <p className="text-white">{event.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Clock size={16} className="text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Time</p>
                          <p className="text-white">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <MapPin size={16} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Location</p>
                          <p className="text-white">{event.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <Users size={16} className="text-red-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Attendees</p>
                          <p className="text-white">{event.attendees.toLocaleString()}+</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      ${selectedEvent === index 
                        ? "bg-yellow-500 text-black" 
                        : "bg-slate-700 text-slate-300"
                      }
                      transition-colors duration-300
                    `}>
                      <ChevronRight size={24} />
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
                bg-gradient-to-r from-yellow-500 to-yellow-600
                hover:from-yellow-600 hover:to-yellow-700
                text-black font-bold px-10 py-6 rounded-full
                text-lg shadow-lg hover:shadow-xl hover:shadow-yellow-500/25
                transition-all duration-300
                hover:scale-105
              ">
                View All Events
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

