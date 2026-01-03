"use client"

import React, { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface MediaFile {
  id: string
  title: string
  type: 'audio' | 'video'
  url: string
  duration: string
  thumbnail?: string
}

const sampleMediaFiles: MediaFile[] = [
  {
    id: '1',
    title: 'How to Fight for Your Faith',
    type: 'audio',
    url: '/audio/how to fight for your faith.mp3',
    duration: '45:32'
  },
  {
    id: '2',
    title: 'How to Overcome',
    type: 'audio',
    url: '/audio/how to overcome.mp3',
    duration: '32:15'
  },
  {
    id: '3',
    title: 'Ministry of the Holy Spirit',
    type: 'audio',
    url: '/audio/ministry of the holy spirit.mp3',
    duration: '28:47'
  },
  {
    id: '4',
    title: 'Power',
    type: 'audio',
    url: '/audio/power.mp3',
    duration: '52:18'
  }
]

export default function MessagesPage() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Audio Messages
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Listen to inspiring sermons and teachings from our church community. Click on any message to start listening.
          </p>
        </section>

        {/* Media Grid */}
        <section
          className="mb-16"
        >
          {sampleMediaFiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleMediaFiles.map((file) => (
                <div key={file.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Media Preview */}
                  <div 
                    className="relative h-48 flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: 'url(/father.jpg)' }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => togglePlay(file.id)}
                      className="absolute inset-0 flex items-center justify-center hover:bg-black/30 transition-colors z-10"
                    >
                      {playingId === file.id ? (
                        <Pause className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Media Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                      {file.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-[#374151]">
                      <span className="capitalize">{file.type}</span>
                      <span>{file.duration}</span>
                    </div>

                    {/* Audio Element */}
                    {playingId === file.id && (
                      <div className="mt-4">
                        <audio
                          controls
                          autoPlay
                          muted={isMuted}
                          className="w-full"
                          onEnded={() => setPlayingId(null)}
                        >
                          <source src={file.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                No Messages Yet
              </h3>
              <p className="text-[#374151] text-lg">
                Check back soon for new sermons and media content.
              </p>
            </div>
          )}
        </section>

        {/* Global Controls */}
        <section
          className="text-center"
        >
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              {isMuted ? 'Unmute All' : 'Mute All'}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

