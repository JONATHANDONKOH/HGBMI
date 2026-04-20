"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/Footer'
import { Play, Pause, Volume2, VolumeX, Headphones } from 'lucide-react'

interface MediaFile {
  id: string
  title: string
  type: 'audio' | 'video'
  url: string
  duration: string
  thumbnail?: string
}

const sampleMediaFiles: MediaFile[] = [
  { id: '1', title: 'How to Fight for Your Faith', type: 'audio', url: '/audio/how to fight for your faith.mp3', duration: '45:32' },
  { id: '2', title: 'How to Overcome', type: 'audio', url: '/audio/how to overcome.mp3', duration: '32:15' },
  { id: '3', title: 'Ministry of the Holy Spirit', type: 'audio', url: '/audio/ministry of the holy spirit.mp3', duration: '28:47' },
  { id: '4', title: 'Power', type: 'audio', url: '/audio/power.mp3', duration: '52:18' },
  { id: '5', title: 'Sunday Church Service 30-11-2025', type: 'audio', url: '/audio/SUNDAY CHURCH SERVICE 30-11-2025 hgbmi.mp3', duration: '60:00' },
  { id: '6', title: 'How to Live a Victorious Life Over Demons', type: 'audio', url: '/audio/HOW TO LIVE A VICTORIOUS LIFE OVER DEMONS 28-09-2025 hgbmi.mp3', duration: '45:00' },
  { id: '7', title: 'The Way to Success', type: 'audio', url: '/audio/THE WAY TO SUCCESS 19-10-2025 hgbmi.mp3', duration: '40:00' },
  { id: '8', title: 'Three Major Things to Establish Your Faith', type: 'audio', url: '/audio/THREE MAJOR THINGS TO ESTABLISH YOUR FAITH 21-09-2025 hgbmi.mp3', duration: '50:00' },
  { id: '9', title: 'The Perseverance of Faith', type: 'audio', url: '/audio/THE PERSEVERANCE OF FAITH 23-11-2025 hgbmi.mp3', duration: '55:00' },
]

export default function MessagesPage() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [isMuted, setIsMuted]     = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  const togglePlay = (id: string) => setPlayingId(playingId === id ? null : id)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .mp {
          --blue:    #3A4FD8;
          --blue-lt: #6B83F5;
          --gold:    #C9960A;
          --gold-lt: #F5C842;
          --white:   #FFFFFF;
          --ink:     #111827;
          --muted:   #6B7280;
          --divider: #E9EBF8;
          background: #fff;
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
        }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes pulse  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }

        /* ═══════════════════════════════
           HERO
        ═══════════════════════════════ */
        .mp-hero {
          position: relative;
          width: 100%;
          min-height: 68vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mp-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .mp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 600px;
          opacity: 0;
        }
        .mp-hero-ready .mp-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .mp-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .mp-eyebrow {
          display: flex;
          align-items: center;
          gap: .75rem;
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 1.25rem;
        }
        .mp-eyebrow::before {
          content:'';
          display:inline-block;
          width:2rem; height:2px;
          background:var(--gold);
        }

        .mp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7.5rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .mp-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .mp-hero-title .t-gold { color: var(--gold); }

        .mp-hero-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
          max-width: 44ch;
          margin-bottom: 2rem;
        }

        .mp-mute-btn {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          background: var(--blue);
          color: #fff;
          font-size: .75rem;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: .85rem 2rem;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: background .2s, transform .2s;
        }
        .mp-mute-btn:hover { background: #2535b8; transform: translateY(-2px); }

        /* Decorative headphone icon — right side above ribbon */
        .mp-hero-deco {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          opacity: 0;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .mp-hero-ready .mp-hero-deco { animation: fadeIn 1s ease 0.7s forwards; }
        @media(max-width:900px){ .mp-hero-deco{ display:none; } }

        .mp-hero-deco-icon {
          color: var(--divider);
          display: block;
        }
        .mp-hero-deco-label {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ═══════════════════════════════
           GRID SECTION
        ═══════════════════════════════ */
        .mp-grid-section {
          position: relative;
          background: #F8F9FF;
          padding: 5rem 6rem 6rem;
          overflow: hidden;
        }
        @media(max-width:768px){ .mp-grid-section{ padding: 3rem 1.5rem 4rem; } }

        .mp-grid-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .mp-grid-inner { position: relative; z-index: 1; }

        .mp-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1.5px solid var(--divider);
        }

        .mp-sec-label {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: .75rem;
        }
        .mp-sec-label::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:var(--gold);
        }

        .mp-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.08;
          color: var(--ink);
        }

        .mp-big-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem;
          font-weight: 700;
          color: var(--divider);
          line-height: 1;
        }

        /* ── Cards grid ── */
        .mp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: var(--divider);
        }
        @media(max-width:900px){ .mp-grid{ grid-template-columns: repeat(2,1fr); } }
        @media(max-width:560px){ .mp-grid{ grid-template-columns: 1fr; } }

        .mp-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: background .25s, transform .2s;
          position: relative;
        }
        .mp-card:hover { background: #F0F3FF; transform: translateY(-3px); }
        .mp-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 3px;
          background: var(--blue);
          transition: width .35s ease;
        }
        .mp-card:hover::after { width: 100%; }

        /* Thumbnail / play area */
        .mp-card-thumb {
          position: relative;
          height: 180px;
          background-image: url(/father.jpg);
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
          overflow: hidden;
        }
        .mp-card-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,36,140,0.55);
          transition: background .25s;
        }
        .mp-card:hover .mp-card-thumb-overlay { background: rgba(26,36,140,0.65); }

        .mp-card-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          cursor: pointer;
          border: none;
          background: none;
        }

        .mp-play-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .2s, transform .2s;
          backdrop-filter: blur(4px);
        }
        .mp-card-play:hover .mp-play-circle {
          background: var(--blue);
          border-color: var(--blue);
          transform: scale(1.1);
        }
        .mp-play-circle svg { color: #fff; }

        /* Playing indicator badge */
        .mp-playing-badge {
          position: absolute;
          top: .75rem;
          left: .75rem;
          z-index: 3;
          background: var(--gold);
          color: #fff;
          font-size: .58rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: .3rem .7rem;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: .4rem;
        }
        .mp-playing-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: pulse 1s ease-in-out infinite;
        }

        /* Duration badge */
        .mp-duration-badge {
          position: absolute;
          bottom: .75rem;
          right: .75rem;
          z-index: 3;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: .65rem;
          font-weight: 500;
          padding: .25rem .65rem;
          border-radius: 2px;
          backdrop-filter: blur(4px);
        }

        /* Card body */
        .mp-card-body {
          padding: 1.5rem 1.75rem 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .mp-card-index {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--divider);
          line-height: 1;
          margin-bottom: .6rem;
        }

        .mp-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: .5rem;
          flex: 1;
        }

        .mp-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: .72rem;
          color: var(--muted);
          font-weight: 500;
          letter-spacing: .04em;
          text-transform: uppercase;
          margin-top: .75rem;
        }

        .mp-card-type {
          display: flex;
          align-items: center;
          gap: .4rem;
          color: var(--blue);
        }

        /* Audio player */
        .mp-audio-wrap {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1.5px solid var(--divider);
        }
        .mp-audio-wrap audio {
          width: 100%;
          height: 36px;
          accent-color: var(--blue);
        }

        /* Empty state */
        .mp-empty {
          text-align: center;
          padding: 5rem 2rem;
          color: var(--muted);
        }
        .mp-empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: .4;
        }
        .mp-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: .5rem;
        }
      `}</style>

      <div className="mp">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`mp-hero ${heroReady ? "mp-hero-ready" : ""}`}>

          {/* Blue curved ribbon — same shape as About & Events */}
          <svg
            className="mp-hero-svg"
            viewBox="0 0 1440 580"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            <path
              d="
                M -100 460
                Q  160 385,  420 345
                Q  660 310,  870 268
                Q 1080 228, 1300 168
                L 1540 100
                L 1540 158
                L 1305 224
                Q 1085 282, 875 325
                Q 665 368, 430 406
                Q  170 448, -100 522
                Z
              "
              fill="url(#mpRib)"
            />
            {/* Sheen */}
            <path
              d="
                M -100 460
                Q  160 385,  420 345
                Q  660 310,  870 268
                Q 1080 228, 1300 168
                L 1540 100 L 1540 118
                L 1302 185 Q 1082 245, 872 288
                Q 662 330, 422 368
                Q  162 408, -100 478 Z
              "
              fill="rgba(255,255,255,0.18)"
            />
          </svg>

          {/* Decorative headphones icon */}
          <div className="mp-hero-deco">
            <Headphones className="mp-hero-deco-icon" size={160} strokeWidth={0.8} />
            <span className="mp-hero-deco-label">Sermons</span>
          </div>

          {/* Text */}
          <div className="mp-hero-text">
            <p className="mp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="mp-hero-title">
              Audio<br />
              <span className="t-blue">Messages</span><br />
              <span className="t-gold">&amp; Sermons</span>
            </h1>
            <p className="mp-hero-body">
              Listen to inspiring sermons and teachings from our church community.
              Click on any message to start listening.
            </p>
            <button className="mp-mute-btn" onClick={toggleMute}>
              {isMuted
                ? <><VolumeX size={16} /> Unmute All</>
                : <><Volume2 size={16} /> Mute All</>
              }
            </button>
          </div>
        </section>


        {/* ══ GRID ══ */}
        <section className="mp-grid-section">

          {/* Subtle ribbon echo */}
          <svg
            className="mp-grid-svg"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mpGRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#mpGRib)" />
          </svg>

          <div className="mp-grid-inner">
            <div className="mp-section-head">
              <div>
                <p className="mp-sec-label">Library</p>
                <h2 className="mp-sec-title">All Messages</h2>
              </div>
              <span className="mp-big-num">
                {String(sampleMediaFiles.length).padStart(2, '0')}
              </span>
            </div>

            {sampleMediaFiles.length > 0 ? (
              <div className="mp-grid">
                {sampleMediaFiles.map((file, i) => (
                  <div key={file.id} className="mp-card">

                    {/* Thumbnail / play */}
                    <div className="mp-card-thumb">
                      <div className="mp-card-thumb-overlay" />

                      {playingId === file.id && (
                        <div className="mp-playing-badge">
                          <span className="mp-playing-dot" />
                          Now Playing
                        </div>
                      )}

                      <span className="mp-duration-badge">{file.duration}</span>

                      <button
                        className="mp-card-play"
                        onClick={() => togglePlay(file.id)}
                        aria-label={playingId === file.id ? "Pause" : "Play"}
                      >
                        <span className="mp-play-circle">
                          {playingId === file.id
                            ? <Pause size={22} />
                            : <Play  size={22} style={{ marginLeft: 3 }} />
                          }
                        </span>
                      </button>
                    </div>

                    {/* Body */}
                    <div className="mp-card-body">
                      <span className="mp-card-index">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="mp-card-title">{file.title}</p>
                      <div className="mp-card-meta">
                        <span className="mp-card-type">
                          <Headphones size={13} />
                          {file.type}
                        </span>
                        <span>{file.duration}</span>
                      </div>

                      {/* Audio player — expands when playing */}
                      {playingId === file.id && (
                        <div className="mp-audio-wrap">
                          <audio
                            controls
                            autoPlay
                            muted={isMuted}
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
              <div className="mp-empty">
                <div className="mp-empty-icon">
                  <Headphones size={64} strokeWidth={1} />
                </div>
                <p className="mp-empty-title">No Messages Yet</p>
                <p>Check back soon for new sermons and media content.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}