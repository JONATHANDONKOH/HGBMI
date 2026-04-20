"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

export default function AffirmationPage() {
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

        .afp {
          --blue:    #3A4FD8;
          --blue-lt: #6B83F5;
          --gold:    #C9960A;
          --gold-lt: #F5C842;
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
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        /* ═══════ HERO ═══════ */
        .afp-hero {
          position: relative;
          width: 100%;
          min-height: 68vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .afp-hero-svg {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none;
        }
        .afp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 600px;
          opacity: 0;
        }
        .afp-hero-ready .afp-hero-text { animation: fadeUp .8s ease .15s forwards; }
        @media(max-width:768px){ .afp-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .afp-eyebrow {
          display: flex; align-items: center; gap: .75rem;
          font-size: .62rem; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue); margin-bottom: 1.25rem;
        }
        .afp-eyebrow::before {
          content:''; display:inline-block;
          width:2rem; height:2px; background:var(--gold);
        }
        .afp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7.5rem);
          font-weight: 700; line-height: .92;
          letter-spacing: -.02em; color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .afp-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .afp-hero-title .t-gold { color: var(--gold); }
        .afp-hero-body {
          font-size: 1rem; line-height: 1.75;
          color: var(--muted); font-weight: 300; max-width: 44ch;
        }

        /* Decorative right element */
        .afp-hero-deco {
          position: absolute;
          right: 6rem; top: 50%;
          transform: translateY(-50%);
          z-index: 3; pointer-events: none;
          text-align: center; opacity: 0;
        }
        .afp-hero-ready .afp-hero-deco { animation: fadeIn 1s ease .7s forwards; }
        @media(max-width:900px){ .afp-hero-deco{ display:none; } }

        .afp-deco-symbol {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10rem; font-weight: 700;
          color: var(--divider); line-height: 1; display: block;
        }
        .afp-deco-label {
          font-size: .62rem; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase; color: var(--muted);
        }

        /* ═══════ GOLD SCRIPTURE STRIP ═══════ */
        .afp-strip {
          background: var(--gold);
          padding: 2rem 6rem;
          display: flex; align-items: center; gap: 2rem;
        }
        @media(max-width:768px){ .afp-strip{ padding:1.75rem 1.5rem; flex-direction:column; gap:1rem; } }
        .afp-strip-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem; color: rgba(255,255,255,0.25);
          line-height: 1; flex-shrink: 0;
        }
        .afp-strip-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1rem,1.8vw,1.35rem);
          color: #fff; line-height: 1.55;
        }
        .afp-strip-ref {
          display: block; margin-top: .5rem;
          font-family: 'Jost', sans-serif; font-style: normal;
          font-size: .62rem; font-weight: 600;
          letter-spacing: .16em; text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }

        /* ═══════ EMPTY STATE SECTION ═══════ */
        .afp-body {
          position: relative;
          background: #F8F9FF;
          padding: 6rem;
          overflow: hidden;
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media(max-width:768px){ .afp-body{ padding:4rem 1.5rem; } }

        .afp-body-svg {
          position: absolute;
          inset: 0; width:100%; height:100%; pointer-events:none;
        }

        .afp-body-inner {
          position: relative; z-index: 1;
          width: 100%;
        }

        .afp-sec-head {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem; padding-bottom: 1.5rem;
          border-bottom: 1.5px solid var(--divider);
        }
        .afp-sec-label {
          font-size: .62rem; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue); display: flex; align-items: center;
          gap: .6rem; margin-bottom: .75rem;
        }
        .afp-sec-label::before {
          content:''; display:inline-block;
          width:1.75rem; height:2px; background:var(--gold);
        }
        .afp-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem; font-weight: 700;
          line-height: 1.08; color: var(--ink);
        }
        .afp-big-sym {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem; font-weight: 700;
          color: var(--divider); line-height: 1;
        }

        /* Empty card */
        .afp-empty-card {
          background: #fff;
          padding: 5rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .afp-empty-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 3px; height: 0;
          background: var(--blue);
          transition: height .5s ease;
        }
        .afp-empty-card:hover::before { height: 100%; }

        .afp-empty-icon {
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem; line-height: 1;
          color: var(--divider);
          animation: float 4s ease-in-out infinite;
          display: block;
        }

        .afp-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700; color: var(--ink);
          line-height: 1.1;
        }
        .afp-empty-title em { font-style: italic; color: var(--blue); }

        .afp-empty-desc {
          font-size: .95rem; color: var(--muted);
          line-height: 1.75; font-weight: 300;
          max-width: 42ch;
        }

        /* Decorative dots pattern */
        .afp-dots {
          position: absolute;
          bottom: 2rem; right: 3rem;
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 8px;
          opacity: .35;
          pointer-events: none;
        }
        .afp-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue);
        }
      `}</style>

      <div className="afp">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`afp-hero ${heroReady ? "afp-hero-ready" : ""}`}>
          <svg className="afp-hero-svg" viewBox="0 0 1440 580" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="afpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 158 L 1305 224 Q 1085 282, 875 325 Q 665 368, 430 406 Q 170 448, -100 522 Z" fill="url(#afpRib)" />
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 118 L 1302 185 Q 1082 245, 872 288 Q 662 330, 422 368 Q 162 408, -100 478 Z" fill="rgba(255,255,255,0.18)" />
          </svg>

          {/* Decorative right side */}
          <div className="afp-hero-deco">
            <span className="afp-deco-symbol">✦</span>
            <span className="afp-deco-label">Daily Word</span>
          </div>

          <div className="afp-hero-text">
            <p className="afp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="afp-hero-title">
              Daily<br />
              <span className="t-blue">Faith</span><br />
              <span className="t-gold">Affirmations</span>
            </h1>
            <p className="afp-hero-body">
              Words of encouragement and spiritual affirmations to uplift your soul
              and strengthen your faith each day.
            </p>
          </div>
        </section>

        {/* ══ GOLD SCRIPTURE STRIP ══ */}
        <div className="afp-strip">
          <span className="afp-strip-mark">"</span>
          <p className="afp-strip-text">
            Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right —
            think about such things, and the God of peace will be with you.
            <span className="afp-strip-ref">Philippians 4:8 – 9</span>
          </p>
        </div>

        {/* ══ EMPTY STATE ══ */}
        <section className="afp-body">
          <svg className="afp-body-svg" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="afpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#afpBRib)" />
          </svg>

          <div className="afp-body-inner">
            <div className="afp-sec-head">
              <div>
                <p className="afp-sec-label">Today's Word</p>
                <h2 className="afp-sec-title">Affirmations</h2>
              </div>
              <span className="afp-big-sym">✦</span>
            </div>

            <div className="afp-empty-card">
              <span className="afp-empty-icon">✦</span>

              <p className="afp-empty-title">
                Coming <em>Soon</em>
              </p>
              <p className="afp-empty-desc">
                No affirmations have been posted yet. Check back soon for inspiring
                words of encouragement and daily declarations of faith from our community.
              </p>

              {/* Decorative dot grid */}
              <div className="afp-dots">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="afp-dot" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}