"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Church, Users, Heart, BookOpen, ChevronDown, ChevronUp } from "lucide-react"

export default function AboutPage() {
  const [historyExpanded, setHistoryExpanded] = useState(false)
  const [visionTextIndex, setVisionTextIndex] = useState(0)

  const visionTexts = [
    { text: "Bringing Men to the light of God's dear son through the demonstration of Love and the Holy spirit.", color: "#e11d48" },
    { text: "Bringing Men to the light of God's dear son through the demonstration of Love and the Holy spirit.", color: "#f97316" },
    { text: "Bringing Men to the light of God's dear son through the demonstration of Love and the Holy spirit.", color: "#eab308" },
    { text: "Bringing Men to the light of God's dear son through the demonstration of Love and the Holy spirit.", color: "#16a34a" },
    { text: "Bringing Men to the light of God's dear son through the demonstration of Love and the Holy spirit.", color: "#8b5cf6" }
  ]

  const values = [
    {
      icon: Church,
      title: "Faith",
      description: "We believe in the power of faith to move mountains and transform lives.",
      details: "Our faith is rooted in the teachings of Jesus Christ. Through prayer, scripture, and community, we witness miracles and personal transformations that strengthen our belief in God's promises."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and supporting one another in our spiritual journey.",
      details: "We foster a welcoming environment where everyone feels valued. Our small groups, fellowship events, and outreach programs help build lasting connections and mutual support."
    },
    {
      icon: Heart,
      title: "Love",
      description: "Showing God's love through acts of kindness and compassion.",
      details: "Love is at the core of our ministry. We demonstrate God's love through charitable works, counseling, and serving our community in practical ways."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous growth through Bible study and spiritual education.",
      details: "We offer comprehensive Bible study programs, workshops, and seminars to deepen understanding of scripture and spiritual principles."
    }
  ]

  React.useEffect(() => {
    const visionInterval = setInterval(() => {
      setVisionTextIndex(prev => (prev + 1) % visionTexts.length)
    }, 6000) // Change vision text color every 6 seconds

    return () => {
      clearInterval(visionInterval)
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block mb-8">
            <img
              src="/church_loog-removebg-preview.png"
              alt="Church Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full shadow-2xl border-4 border-white bg-white/10"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            About Our Church
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Welcome to Hour of Grace Believers Ministry International. We are a community of faith dedicated to spreading God's love and grace.
          </p>
        </section>

        {/* Mission Section */}
        <section
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Our Vision
            </h2>
            <div className="text-center max-w-3xl mx-auto">
              <div
                className="leading-relaxed text-2xl md:text-4xl font-bold"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {visionTexts[visionTextIndex].text.split(" ").map((word, index) => (
                  <span
                    key={`${visionTextIndex}-${index}`}
                    className="inline-block mr-2"
                    style={{ color: visionTexts[visionTextIndex].color }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className={`text-center ${index < 3 ? 'border-r-[5px] border-b-[5px] border-white' : ''}`}>
                  <IconComponent className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#d1d5db] mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <p className="text-[#d1d5db] text-sm leading-relaxed">
                    {value.details}
                  </p>
                </div>
              )
            })}
          </div>
        </section>



        {/* History Section */}
        <section
          className="mb-16"
        >
          <div className="bg-[#1e3a8a] rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Our History
            </h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center mb-6">
              Founded with a vision to create a place where people from all walks of life can come together in worship and fellowship.
              Over the years, we've grown into a vibrant community serving our local area and beyond.
              {historyExpanded && (
                <span className="block mt-4">
                  Our journey began in 2010 with a small group of believers passionate about spreading God's word.
                  Through dedication and faith, we've established multiple congregations across Ghana, touching countless lives with our ministry.
                  Today, we continue to expand our reach through online services, community outreach, and educational programs.
                </span>
              )}
            </p>
            <div className="text-center">
              <button
                onClick={() => setHistoryExpanded(!historyExpanded)}
                className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {historyExpanded ? (
                  <>
                    Read Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

