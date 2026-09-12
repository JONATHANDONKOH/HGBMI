'use client'

import React, { useEffect, useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

export default function EventsPage() {
  const [ready, setReady] = useState(false)
  const [isVisible, setIsVisible] = useState({
    story: false,
    image: false,
    detail: false,
  })

  const storyRef = useRef(null)
  const imageRef = useRef(null)
  const detailRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === storyRef.current) {
            setIsVisible((prev) => ({ ...prev, story: entry.isIntersecting }))
          }
          if (entry.target === imageRef.current) {
            setIsVisible((prev) => ({ ...prev, image: entry.isIntersecting }))
          }
          if (entry.target === detailRef.current) {
            setIsVisible((prev) => ({ ...prev, detail: entry.isIntersecting }))
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (storyRef.current) observer.observe(storyRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (detailRef.current) observer.observe(detailRef.current)

    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current)
      if (imageRef.current) observer.unobserve(imageRef.current)
      if (detailRef.current) observer.unobserve(detailRef.current)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ep {
          --blue:     #3A4FD8;
          --blue-mid: #5068E8;
          --blue-lt:  #5169E0;
          --gold:     #C9960A;
          --gold-lt:  #F5C842;
          --white:    #FFFFFF;
          --cream:    #FAF6EF;
          --cream-deep: #F3EDE2;
          --ink:      #111827;
          --muted:    #6B7280;
          --divider:  #E8E1D4;
          background: var(--cream);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ═══════════════════════════════
           SPARKLE ANIMATIONS WITH COLOR CHANGE ✨🌈
        ═══════════════════════════════ */
        .sparkle-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0;
          animation: sparkleFloat 5s infinite ease-in-out;
        }

        .sparkle-sm {
          width: 4px;
          height: 4px;
        }
        .sparkle-lg {
          width: 8px;
          height: 8px;
        }

        @keyframes sparkleFloat {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0) rotate(0deg);
            background: radial-gradient(circle, #fff, #F5C842, #C9960A);
            box-shadow: 0 0 20px #F5C842, 0 0 40px #C9960A;
          }
          15% {
            opacity: 1;
            transform: translate(30px, -40px) scale(1.8) rotate(60deg);
            background: radial-gradient(circle, #fff, #6B83F5, #3A4FD8);
            box-shadow: 0 0 25px #6B83F5, 0 0 50px #3A4FD8;
          }
          30% {
            opacity: 0.9;
            transform: translate(70px, -100px) scale(1.2) rotate(120deg);
            background: radial-gradient(circle, #fff, #F5C842, #FF6B6B);
            box-shadow: 0 0 30px #F5C842, 0 0 60px #FF6B6B;
          }
          45% {
            opacity: 0.8;
            transform: translate(120px, -170px) scale(1.6) rotate(180deg);
            background: radial-gradient(circle, #fff, #6B83F5, #4ECDC4);
            box-shadow: 0 0 25px #6B83F5, 0 0 50px #4ECDC4;
          }
          60% {
            opacity: 0.6;
            transform: translate(180px, -250px) scale(1) rotate(240deg);
            background: radial-gradient(circle, #fff, #C9960A, #FF6B6B);
            box-shadow: 0 0 35px #C9960A, 0 0 70px #FF6B6B;
          }
          80% {
            opacity: 0.3;
            transform: translate(240px, -320px) scale(0.6) rotate(300deg);
            background: radial-gradient(circle, #fff, #4ECDC4, #3A4FD8);
            box-shadow: 0 0 20px #4ECDC4, 0 0 40px #3A4FD8;
          }
          100% {
            opacity: 0;
            transform: translate(300px, -400px) scale(0) rotate(360deg);
            background: radial-gradient(circle, #fff, #F5C842, #C9960A);
            box-shadow: 0 0 20px #F5C842, 0 0 40px #C9960A;
          }
        }

        .sparkle-twinkle {
          animation-name: sparkleTwinkle;
          animation-duration: 4s;
        }

        @keyframes sparkleTwinkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
            background: radial-gradient(circle, #fff, #F5C842, #C9960A);
            box-shadow: 0 0 20px #F5C842, 0 0 40px #C9960A;
          }
          15% {
            opacity: 1;
            transform: scale(2) rotate(60deg);
            background: radial-gradient(circle, #fff, #6B83F5, #3A4FD8);
            box-shadow: 0 0 30px #6B83F5, 0 0 60px #3A4FD8;
          }
          30% {
            opacity: 0.3;
            transform: scale(0.5) rotate(120deg);
            background: radial-gradient(circle, #fff, #FF6B6B, #C9960A);
            box-shadow: 0 0 25px #FF6B6B, 0 0 50px #C9960A;
          }
          45% {
            opacity: 1;
            transform: scale(1.8) rotate(180deg);
            background: radial-gradient(circle, #fff, #4ECDC4, #6B83F5);
            box-shadow: 0 0 35px #4ECDC4, 0 0 70px #6B83F5;
          }
          60% {
            opacity: 0.4;
            transform: scale(0.7) rotate(240deg);
            background: radial-gradient(circle, #fff, #F5C842, #FF6B6B);
            box-shadow: 0 0 20px #F5C842, 0 0 40px #FF6B6B;
          }
          80% {
            opacity: 0.8;
            transform: scale(1.3) rotate(300deg);
            background: radial-gradient(circle, #fff, #3A4FD8, #4ECDC4);
            box-shadow: 0 0 30px #3A4FD8, 0 0 60px #4ECDC4;
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
            background: radial-gradient(circle, #fff, #C9960A, #F5C842);
            box-shadow: 0 0 20px #C9960A, 0 0 40px #F5C842;
          }
        }

        .sparkle-reverse {
          animation-direction: reverse;
        }

        .sparkle-1 { left: 5%; top: 10%; animation-delay: 0s; }
        .sparkle-2 { left: 15%; top: 30%; animation-delay: 0.8s; }
        .sparkle-3 { left: 25%; top: 5%; animation-delay: 1.6s; }
        .sparkle-4 { left: 35%; top: 45%; animation-delay: 2.4s; }
        .sparkle-5 { left: 45%; top: 15%; animation-delay: 0.4s; }
        .sparkle-6 { left: 55%; top: 55%; animation-delay: 1.2s; }
        .sparkle-7 { left: 65%; top: 8%; animation-delay: 2.0s; }
        .sparkle-8 { left: 75%; top: 35%; animation-delay: 2.8s; }
        .sparkle-9 { left: 85%; top: 20%; animation-delay: 0.6s; }
        .sparkle-10 { left: 92%; top: 50%; animation-delay: 1.4s; }
        .sparkle-11 { left: 10%; top: 70%; animation-delay: 2.2s; }
        .sparkle-12 { left: 30%; top: 80%; animation-delay: 0.2s; }
        .sparkle-13 { left: 50%; top: 90%; animation-delay: 1.0s; }
        .sparkle-14 { left: 70%; top: 75%; animation-delay: 1.8s; }
        .sparkle-15 { left: 90%; top: 85%; animation-delay: 2.6s; }
        .sparkle-16 { left: 20%; top: 60%; animation-delay: 0.5s; }
        .sparkle-17 { left: 60%; top: 40%; animation-delay: 1.3s; }
        .sparkle-18 { left: 80%; top: 65%; animation-delay: 2.1s; }
        .sparkle-19 { left: 40%; top: 25%; animation-delay: 2.9s; }
        .sparkle-20 { left: 95%; top: 10%; animation-delay: 0.7s; }

        .sparkle-3, .sparkle-8, .sparkle-13, .sparkle-18 {
          animation-direction: reverse;
        }

        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes zoomIn  { from{opacity:0;transform:scale(1.05)} to{opacity:1;transform:scale(1)} }

        /* ═══════════════════════════════
           SCROLL ANIMATIONS — ONLY ON SCROLL DOWN
        ═══════════════════════════════ */
        @keyframes scrollFadeUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollFadeIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scrollSlideRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollSlideLeft {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scroll-animate {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate:not(.visible) {
          transform: translateY(60px);
        }

        .scroll-animate-scale {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animate-scale.visible {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-animate-scale:not(.visible) {
          transform: scale(0.92);
        }

        .scroll-animate-right {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animate-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-right:not(.visible) {
          transform: translateX(-50px);
        }

        .scroll-animate-left {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animate-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-animate-left:not(.visible) {
          transform: translateX(50px);
        }

        /* ═══════════════════════════════
           TOP SECTION — story + photo, side by side
        ═══════════════════════════════ */
        .ep-main {
          position: relative;
          min-height: 82vh;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          overflow: hidden;
          z-index: 1;
        }
        @media(max-width:900px){
          .ep-main { grid-template-columns: 1fr; min-height: auto; }
        }

        /* ── Left: story panel ── */
        .ep-story {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem 6rem;
          background: var(--cream);
        }
        @media(max-width:900px){
          .ep-story { padding: 3rem 1.75rem; order: 2; }
        }

        .ep-story-inner { max-width: 480px; opacity: 0; }
        .ep-ready .ep-story-inner { animation: fadeUp 0.75s ease 0.1s forwards; }

        .ep-eyebrow {
          display: flex;
          align-items: center;
          gap: .6rem;
          font-size: .6rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 1.1rem;
        }
        .ep-eyebrow::before {
          content: '';
          display: inline-block;
          width: 1.75rem; height: 2px;
          background: var(--gold);
        }

        .ep-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 4.2vw, 4rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.1rem;
        }
        .ep-title .t-blue { color: var(--blue); font-style: italic; }
        .ep-title .t-gold { 
          background: linear-gradient(145deg, var(--gold), #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ep-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--ink);
          font-weight: 400;
          margin-bottom: 1.5rem;
        }

        .ep-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.1rem;
          background: var(--cream-deep);
          border: 1px solid var(--divider);
          border-left: 3px solid var(--gold);
          border-radius: 4px;
          margin-bottom: 1.75rem;
        }
        .ep-notice-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); flex-shrink: 0; }
        .ep-notice-text { font-size: 0.82rem; color: var(--ink); font-weight: 400; }
        .ep-notice-text b { color: var(--blue); font-weight: 600; }

        .ep-meta {
          display: flex;
          gap: 2rem;
          padding-top: 1.25rem;
          border-top: 1.5px solid var(--divider);
        }
        .ep-meta-item { display: flex; flex-direction: column; gap: 0.25rem; }
        .ep-meta-label {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue);
        }
        .ep-meta-value { font-size: 0.88rem; font-weight: 600; color: var(--ink); }

        /* ── Right: photo panel ── */
        .ep-frame {
          position: relative;
          overflow: hidden;
          background: var(--ink);
        }
        @media(max-width:900px){
          .ep-frame { order: 1; min-height: 46vh; }
        }

        .ep-frame-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
        }
        .ep-ready .ep-frame-img { animation: zoomIn 1.1s ease 0.05s forwards; }

        .ep-frame-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(17,24,39,0) 45%, rgba(17,24,39,0.6) 100%);
        }

        .ep-frame-seam {
          position: absolute;
          left: 0; top: 0;
          width: 130px;
          height: 100%;
          pointer-events: none;
        }
        @media(max-width:900px){ .ep-frame-seam { display: none; } }

        .ep-frame-ribbon {
          position: absolute;
          top: 1.75rem;
          left: 1.75rem;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gold);
          color: #fff;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.5rem 1.1rem;
          border-radius: 3px;
          box-shadow: 0 8px 18px -6px rgba(201,150,10,0.55);
          opacity: 0;
        }
        .ep-ready .ep-frame-ribbon { animation: fadeIn 0.8s ease 0.5s forwards; }

        .ep-frame-caption {
          position: absolute;
          left: 1.75rem;
          right: 1.75rem;
          bottom: 1.5rem;
          z-index: 3;
          opacity: 0;
        }
        .ep-ready .ep-frame-caption { animation: fadeUp 0.8s ease 0.6s forwards; }

        .ep-frame-caption-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 0.25rem;
        }
        .ep-frame-caption-sub { font-size: 0.78rem; font-weight: 300; color: rgba(255,255,255,0.85); }

        /* ═══════════════════════════════
           SECONDARY DETAIL SECTION (below the fold)
        ═══════════════════════════════ */
        .ep-detail {
          position: relative;
          background: var(--cream-deep);
          padding: 3.5rem 6rem;
          border-top: 1.5px solid var(--divider);
          z-index: 1;
        }
        @media(max-width:900px){ .ep-detail { padding: 2.5rem 1.75rem; } }

        .ep-detail-label {
          font-size: .58rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: .5rem;
          margin-bottom: .6rem;
        }
        .ep-detail-label::before {
          content: '';
          display: inline-block;
          width: 1.5rem; height: 2px;
          background: var(--gold);
        }

        .ep-detail-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 0.6rem;
        }

        .ep-detail-text {
          font-size: 0.9rem;
          line-height: 1.8;
          color: var(--ink);
          font-weight: 400;
          max-width: 70ch;
        }

        /* ─── GOLD RIBBON ENHANCEMENT ─── */
        .ep-frame-ribbon {
          background: linear-gradient(135deg, var(--gold), #b8860b);
          box-shadow: 0 8px 24px -6px rgba(201,150,10,0.65);
        }

        /* ─── RESPONSIVE ─── */
        @media(max-width:900px){
          .scroll-animate-right:not(.visible) { transform: translateX(0); }
          .scroll-animate-left:not(.visible) { transform: translateX(0); }
        }
      `}</style>

      <div className={`ep ${ready ? "ep-ready" : ""}`}>
        {/* SPARKLE CONTAINER - COLOR CHANGING SPARKLES */}
        <div className="sparkle-container">
          <div className="sparkle sparkle-1 sparkle-sm"></div>
          <div className="sparkle sparkle-3 sparkle-lg"></div>
          <div className="sparkle sparkle-4 sparkle-sm"></div>
          <div className="sparkle sparkle-5 sparkle-lg"></div>
          <div className="sparkle sparkle-6 sparkle-sm"></div>
          <div className="sparkle sparkle-8 sparkle-lg"></div>
          <div className="sparkle sparkle-9 sparkle-sm"></div>
          <div className="sparkle sparkle-10 sparkle-lg"></div>
          <div className="sparkle sparkle-11 sparkle-sm"></div>
          <div className="sparkle sparkle-13 sparkle-lg"></div>
          <div className="sparkle sparkle-14 sparkle-sm"></div>
          <div className="sparkle sparkle-15 sparkle-lg"></div>
          <div className="sparkle sparkle-16 sparkle-sm"></div>
          <div className="sparkle sparkle-18 sparkle-lg"></div>
          <div className="sparkle sparkle-19 sparkle-sm"></div>
          <div className="sparkle sparkle-20 sparkle-lg"></div>
          
          <div className="sparkle sparkle-3 sparkle-reverse sparkle-lg"></div>
          <div className="sparkle sparkle-8 sparkle-reverse sparkle-sm"></div>
          <div className="sparkle sparkle-13 sparkle-reverse sparkle-lg"></div>
          <div className="sparkle sparkle-18 sparkle-reverse sparkle-sm"></div>
        </div>

        <Navbar />

        {/* ══ TOP: STORY + PHOTO, VISIBLE IMMEDIATELY ══ */}
        <section className="ep-main">
          {/* Story panel - scroll animation: fade up */}
          <div 
            ref={storyRef}
            className={`ep-story scroll-animate ${isVisible.story ? "visible" : ""}`}
          >
            <div className="ep-story-inner">
              <p className="ep-eyebrow">Hour of Grace Believers Ministry International</p>
              <h1 className="ep-title">
                Church <span className="t-blue">Events</span> &amp;<br />
                <span className="t-gold">Gathered Moments</span>
              </h1>
              <p className="ep-desc">
                Every gathering here is a testimony of God's grace — worship,
                fellowship, and community coming together in faith and joy.
              </p>
              <div className="ep-notice">
                <span className="ep-notice-dot" />
                <span className="ep-notice-text">
                  <b>No upcoming events</b> scheduled right now — check back soon.
                </span>
              </div>
              <div className="ep-meta">
                <div className="ep-meta-item">
                  <span className="ep-meta-label">Category</span>
                  <span className="ep-meta-value">Fellowship</span>
                </div>
                <div className="ep-meta-item">
                  <span className="ep-meta-label">Status</span>
                  <span className="ep-meta-value">Past Event</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image panel - scroll animation: scale in */}
          <div 
            ref={imageRef}
            className={`ep-frame scroll-animate-scale ${isVisible.image ? "visible" : ""}`}
          >
            <img
              src="/alabi.jpeg"
              alt="Past church event — moment of worship and fellowship"
              className="ep-frame-img"
            />
            <div className="ep-frame-shade" />

            <svg
              className="ep-frame-seam"
              viewBox="0 0 130 700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="epSeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"  stopColor="#5B76EC" />
                  <stop offset="55%" stopColor="#3A4FD8" />
                  <stop offset="100%" stopColor="#1E2D9E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 0 L90 0 L20 700 L0 700 Z" fill="url(#epSeam)" />
              <path d="M0 0 L34 0 L6 700 L0 700 Z" fill="rgba(255,255,255,0.22)" />
            </svg>

            <span className="ep-frame-ribbon">Past Event</span>

            <div className="ep-frame-caption">
              <p className="ep-frame-caption-title">Grace In Gathering</p>
              <p className="ep-frame-caption-sub">A moment to remember</p>
            </div>
          </div>
        </section>

        {/* ══ BELOW THE FOLD: extra context ══ */}
        <section 
          ref={detailRef}
          className={`ep-detail scroll-animate ${isVisible.detail ? "visible" : ""}`}
        >
          <p className="ep-detail-label">About This Moment</p>
          <h2 className="ep-detail-title">A Look Back</h2>
          <p className="ep-detail-text">
            A look back at a recent moment of worship and fellowship — the
            community coming together in faith, joy, and unity. As new events
            are scheduled, they'll appear here first.
          </p>
        </section>

        <Footer />
      </div>
    </>
  )
}