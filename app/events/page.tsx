'use client'

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Events from "@/components/Events"

export default function EventsPage() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ep {
          --blue:     #3A4FD8;
          --blue-mid: #5068E8;
          --blue-lt:  #6B83F5;
          --gold:     #C9960A;
          --gold-lt:  #F5C842;
          --white:    #FFFFFF;
          --ink:      #111827;
          --muted:    #6B7280;
          --divider:  #E9EBF8;
          background: #fff;
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
        }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        /* ═══════════════════════════════
           HERO — white + blue ribbon
        ═══════════════════════════════ */
        .ep-hero {
          position: relative;
          width: 100%;
          min-height: 70vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Full-bleed ribbon SVG — same sweep as About hero */
        .ep-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Text content */
        .ep-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 620px;
          opacity: 0;
        }
        .ep-hero-ready .ep-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .ep-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .ep-eyebrow {
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
        .ep-eyebrow::before {
          content: '';
          display: inline-block;
          width: 2rem; height: 2px;
          background: var(--gold);
        }

        .ep-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7.5rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .ep-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .ep-hero-title .t-gold { color: var(--gold); }

        .ep-hero-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
          max-width: 44ch;
        }

        /* Decorative right-side element on hero */
        .ep-hero-deco {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          text-align: center;
          opacity: 0;
          pointer-events: none;
        }
        .ep-hero-ready .ep-hero-deco { animation: fadeIn 1s ease 0.7s forwards; }
        @media(max-width:900px){ .ep-hero-deco { display: none; } }

        .ep-hero-deco-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 9rem;
          font-weight: 700;
          line-height: 1;
          color: var(--divider);
          display: block;
        }
        .ep-hero-deco-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ═══════════════════════════════
           EVENTS BODY SECTION
        ═══════════════════════════════ */
        .ep-body {
          position: relative;
          background: #F8F9FF;
          overflow: hidden;
          padding: 5rem 6rem 6rem;
        }
        @media(max-width:768px){ .ep-body{ padding: 3rem 1.5rem 4rem; } }

        /* Ribbon echo in body section */
        .ep-body-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ep-body-inner {
          position: relative;
          z-index: 1;
        }

        .ep-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1.5px solid var(--divider);
        }

        .ep-sec-label {
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
        .ep-sec-label::before {
          content: '';
          display: inline-block;
          width: 1.75rem; height: 2px;
          background: var(--gold);
        }

        .ep-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.08;
          color: var(--ink);
        }

        .ep-big-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem;
          font-weight: 700;
          color: var(--divider);
          line-height: 1;
        }

        /* Wrapper for the Events component — override any old cream styles */
        .ep-events-wrap {
          background: transparent;
        }
        .ep-events-wrap * {
          --cream: #F8F9FF;
          --divider: #E9EBF8;
          --stone: #6B7280;
          --gold: #C9960A;
          --gold-light: #F5C842;
          --ink: #111827;
        }
      `}</style>

      <div className="ep">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`ep-hero ${heroReady ? "ep-hero-ready" : ""}`}>

          {/* Blue curved ribbon — same shape as About page hero */}
          <svg
            className="ep-hero-svg"
            viewBox="0 0 1440 640"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="epRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            {/* Main ribbon body */}
            <path
              d="
                M -100 520
                Q  160 440,  420 400
                Q  660 365,  870 320
                Q 1080 275, 1300 215
                L 1540 140

                L 1540 200
                L 1305 272
                Q 1085 332, 875 378
                Q 665 423, 430 460
                Q  170 502, -100 582
                Z
              "
              fill="url(#epRib)"
            />
            {/* Top highlight sheen */}
            <path
              d="
                M -100 520
                Q  160 440,  420 400
                Q  660 365,  870 320
                Q 1080 275, 1300 215
                L 1540 140
                L 1540 158
                L 1302 232
                Q 1082 292, 872 338
                Q 662 383, 422 418
                Q  162 458, -100 538
                Z
              "
              fill="rgba(255,255,255,0.18)"
            />
          </svg>

          {/* Decorative large number — right side, above the ribbon */}
          <div className="ep-hero-deco">
            <span className="ep-hero-deco-num">E</span>
            <span className="ep-hero-deco-label">Events</span>
          </div>

          {/* Text */}
          <div className="ep-hero-text">
            <p className="ep-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="ep-hero-title">
              Upcoming<br />
              <span className="t-blue">Church</span><br />
              <span className="t-gold">Events</span>
            </h1>
            <p className="ep-hero-body">
              Come gather with us — for worship, fellowship, and spiritual growth.
              Every event is an open door. You are welcome here.
            </p>
          </div>
        </section>


        {/* ══ EVENTS BODY ══ */}
        <section className="ep-body">

          {/* Subtle ribbon echo */}
          <svg
            className="ep-body-svg"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="epBodyRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path
              d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z"
              fill="url(#epBodyRib)"
            />
          </svg>

          <div className="ep-body-inner">
            <div className="ep-section-head">
              <div>
                <p className="ep-sec-label">Schedule</p>
                <h2 className="ep-sec-title">What's On</h2>
              </div>
              <span className="ep-big-num">↓</span>
            </div>

            {/* Events component inherits the new palette */}
            <div className="ep-events-wrap">
              <Events />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}