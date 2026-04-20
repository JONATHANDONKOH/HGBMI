"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Give from "@/components/Give"

export default function GivePage() {
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

        .gp {
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

        /* ═══════════════════════════════
           HERO
        ═══════════════════════════════ */
        .gp-hero {
          position: relative;
          width: 100%;
          min-height: 62vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gp-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 600px;
          opacity: 0;
        }
        .gp-hero-ready .gp-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .gp-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .gp-eyebrow {
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
        .gp-eyebrow::before {
          content: '';
          display: inline-block;
          width: 2rem; height: 2px;
          background: var(--gold);
        }

        .gp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7.5rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .gp-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .gp-hero-title .t-gold { color: var(--gold); }

        .gp-hero-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
          max-width: 44ch;
        }

        /* Decorative right element */
        .gp-hero-deco {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          opacity: 0;
          pointer-events: none;
          text-align: center;
        }
        .gp-hero-ready .gp-hero-deco { animation: fadeIn 1s ease 0.7s forwards; }
        @media(max-width:900px){ .gp-hero-deco{ display: none; } }

        .gp-deco-symbol {
          font-family: 'Cormorant Garamond', serif;
          font-size: 9rem;
          font-weight: 700;
          line-height: 1;
          color: var(--divider);
          display: block;
          margin-bottom: .5rem;
        }
        .gp-deco-label {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ═══════════════════════════════
           SCRIPTURE STRIP — gold band
        ═══════════════════════════════ */
        .gp-strip {
          background: var(--gold);
          padding: 2rem 6rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          overflow: hidden;
          position: relative;
        }
        @media(max-width:768px){ .gp-strip{ padding: 1.75rem 1.5rem; flex-direction: column; gap: 1rem; } }

        .gp-strip-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          color: rgba(255,255,255,0.25);
          line-height: 1;
          flex-shrink: 0;
        }

        .gp-strip-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1rem, 1.8vw, 1.35rem);
          color: #fff;
          line-height: 1.55;
        }

        .gp-strip-ref {
          display: block;
          margin-top: .5rem;
          font-family: 'Jost', sans-serif;
          font-style: normal;
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }

        /* ═══════════════════════════════
           GIVE SECTION
        ═══════════════════════════════ */
        .gp-body {
          position: relative;
          background: #F8F9FF;
          padding: 5rem 6rem 6rem;
          overflow: hidden;
        }
        @media(max-width:768px){ .gp-body{ padding: 3rem 1.5rem 4rem; } }

        .gp-body-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gp-body-inner { position: relative; z-index: 1; }

        .gp-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1.5px solid var(--divider);
        }

        .gp-sec-label {
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
        .gp-sec-label::before {
          content: '';
          display: inline-block;
          width: 1.75rem; height: 2px;
          background: var(--gold);
        }

        .gp-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.08;
          color: var(--ink);
        }

        .gp-big-sym {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem;
          font-weight: 700;
          color: var(--divider);
          line-height: 1;
        }

        /* Give component wrapper — white card */
        .gp-give-wrap {
          background: #fff;
          padding: 3rem;
        }
        @media(max-width:768px){ .gp-give-wrap{ padding: 1.75rem 1.25rem; } }
      `}</style>

      <div className="gp">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`gp-hero ${heroReady ? "gp-hero-ready" : ""}`}>

          {/* Blue curved ribbon — same as all other pages */}
          <svg
            className="gp-hero-svg"
            viewBox="0 0 1440 540"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            <path
              d="
                M -100 430
                Q  160 358,  420 318
                Q  660 283,  870 242
                Q 1080 202, 1300 148
                L 1540 82
                L 1540 140
                L 1305 205
                Q 1085 258, 875 300
                Q 665 342, 430 378
                Q  170 418, -100 490
                Z
              "
              fill="url(#gpRib)"
            />
            {/* Sheen */}
            <path
              d="
                M -100 430
                Q  160 358,  420 318
                Q  660 283,  870 242
                Q 1080 202, 1300 148
                L 1540 82 L 1540 100
                L 1302 164 Q 1082 218, 872 260
                Q 662 302, 422 336
                Q  162 372, -100 448 Z
              "
              fill="rgba(255,255,255,0.18)"
            />
          </svg>

          {/* Decorative right side */}
          <div className="gp-hero-deco">
            <span className="gp-deco-symbol">♡</span>
            <span className="gp-deco-label">Give Generously</span>
          </div>

          {/* Text */}
          <div className="gp-hero-text">
            <p className="gp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="gp-hero-title">
              Give<br />
              <span className="t-blue">With a</span><br />
              <span className="t-gold">Cheerful Heart</span>
            </h1>
            <p className="gp-hero-body">
              Your generosity fuels the mission — supporting worship, outreach,
              and the work of God's Kingdom in our community and beyond.
            </p>
          </div>
        </section>

        {/* ══ GOLD SCRIPTURE STRIP ══ */}
        <div className="gp-strip">
          <span className="gp-strip-quote-mark">"</span>
          <p className="gp-strip-text">
            Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver.
            <span className="gp-strip-ref">2 Corinthians 9:7</span>
          </p>
        </div>

        {/* ══ GIVE SECTION ══ */}
        <section className="gp-body">

          {/* Ribbon echo */}
          <svg
            className="gp-body-svg"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path
              d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z"
              fill="url(#gpBRib)"
            />
          </svg>

          <div className="gp-body-inner">
            <div className="gp-section-head">
              <div>
                <p className="gp-sec-label">Support the Ministry</p>
                <h2 className="gp-sec-title">Ways to Give</h2>
              </div>
              <span className="gp-big-sym">♡</span>
            </div>

            {/* Give component in white card */}
            <div className="gp-give-wrap">
              <Give />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}