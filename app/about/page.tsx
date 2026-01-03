"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Church, Users, Heart, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AboutPage() {
  const [historyExpanded, setHistoryExpanded] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [imageIndices, setImageIndices] = useState({
    row1_1: 0,
    row1_2: 0,
    row1_3: 0,
    row1_4: 0,
    row2_1: 0,
    row2_2: 0,
    row2_3: 0,
    row2_4: 0
  })
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

  // Create arrays of 3 images for each gallery box
  const galleryBoxes = [
    // First row
    ["/father.jpg", "/cong.jpg", "/worldlove.jpg"],
    ["/grace-book-cover.jpg", "/papa.jpg", "/marry.jpg"],
    ["/mem-world.jpg", "/campus.jpg", "/father.jpg"],
    ["/cong.jpg", "/worldlove.jpg", "/grace-book-cover.jpg"],
    // Second row
    ["/papa.jpg", "/marry.jpg", "/mem-world.jpg"],
    ["/campus.jpg", "/father.jpg", "/cong.jpg"],
    ["/worldlove.jpg", "/grace-book-cover.jpg", "/papa.jpg"],
    ["/marry.jpg", "/mem-world.jpg", "/campus.jpg"]
  ]

  React.useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndices(prev => ({
        row1_1: (prev.row1_1 + 1) % 3,
        row1_2: (prev.row1_2 + 1) % 3,
        row1_3: (prev.row1_3 + 1) % 3,
        row1_4: (prev.row1_4 + 1) % 3,
        row2_1: (prev.row2_1 + 1) % 3,
        row2_2: (prev.row2_2 + 1) % 3,
        row2_3: (prev.row2_3 + 1) % 3,
        row2_4: (prev.row2_4 + 1) % 3
      }))
    }, 5000) // Change image every 5 seconds

    const visionInterval = setInterval(() => {
      setVisionTextIndex(prev => (prev + 1) % visionTexts.length)
    }, 6000) // Change vision text color every 6 seconds

    return () => {
      clearInterval(imageInterval)
      clearInterval(visionInterval)
    }
  }, [])

  const getImageIndex = (boxIndex: number, isSecondRow: boolean = false): number => {
    const baseIndex = isSecondRow ? 4 : 0
    const key = `row${isSecondRow ? 2 : 1}_${boxIndex + 1}` as keyof typeof imageIndices
    return imageIndices[key]
  }

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
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Our Vision
            </h2>
            <div className="text-center max-w-4xl mx-auto">
              <div
                className="leading-relaxed text-3xl md:text-5xl font-bold"
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

        {/* Gallery First Row Section */}
        <section
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Community in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryBoxes.slice(0, 4).map((imageArray, index) => {
              const currentImageIndex = getImageIndex(index, false)
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg h-48 cursor-pointer border-4 border-white/20"
                >
                  <img
                    key={`img-${index}-${currentImageIndex}`}
                    src={imageArray[currentImageIndex]}
                    alt={`Community image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div
                      className="text-white text-sm font-semibold"
                    >
                      Church Life
                    </div>
                  </div>
                </div>
              )
            })}
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
                <div key={index} className="text-center">
                  <IconComponent className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#d1d5db] mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-[#60a5fa] font-semibold hover:text-[#93c5fd] transition-colors">
                        Learn More →
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <IconComponent className="w-6 h-6 text-[#2563eb]" />
                            {value.title}
                          </DialogTitle>
                          <DialogDescription>
                            {value.details}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                )
              })}
            </div>
        </section>

        {/* Image Gallery Section - Second Row */}
        <section
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryBoxes.slice(4, 8).map((imageArray, index) => {
              const currentImageIndex = getImageIndex(index, true)
              return (
                <div
                  key={index + 4}
                  className="relative overflow-hidden rounded-lg shadow-lg h-48 cursor-pointer border-4 border-white/20"
                >
                  <img
                    key={`img-${index + 4}-${currentImageIndex}`}
                    src={imageArray[currentImageIndex]}
                    alt={`Community image ${index + 5}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div
                      className="text-white text-sm font-semibold"
                    >
                      Church Life
                    </div>
                  </div>
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

