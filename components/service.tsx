"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

const YOUTUBE_LIVE_URL = "https://www.youtube.com/@hgbmi/live"

const serviceTimes = [
  { day: "Sunday", time: "9:00 AM", label: "Main Service" },
  { day: "Monday", time: "9:00 AM", label: "Morning Service" },
  { day: "Wednesday", time: "6:00 PM", label: "Midweek Service" },
  { day: "Friday", time: "6:00 PM", label: "Friday Service" },
]

export default function ServiceSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .svp {
          background: #060306;
          color: #fff;
          font-family: 'Jost', sans-serif;
        }

        /* ═══════════════════════════════
           HERO
        ═══════════════════════════════ */
        .svp-hero {
          position: relative;
          min-height: 86vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          background:
            radial-gradient(ellipse 900px 700px at 20% 90%, rgba(255,150,40,0.28) 0%, rgba(255,150,40,0) 60%),
            radial-gradient(ellipse 700px 600px at 85% 20%, rgba(110,80,255,0.3) 0%, rgba(110,80,255,0) 60%),
            linear-gradient(180deg, rgba(5,3,6,0.55) 0%, rgba(5,3,6,0.72) 60%, rgba(5,3,6,0.88) 100%),
            url('/campus.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .svp-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          padding: 7rem 6rem;
        }
        @media(max-width:960px){
          .svp-hero-inner { grid-template-columns: 1fr; padding: 6rem 1.5rem 3rem; gap: 2.5rem; }
        }

        .svp-eyebrow {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #B9C2FF;
          margin-bottom: 1.25rem;
        }

        .svp-title {
          font-family: 'Jost', sans-serif;
          font-size: clamp(2.6rem, 5.5vw, 4.6rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: #fff;
          margin-bottom: 1.25rem;
        }

        .svp-title-underline {
          width: 130px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #C9960A, #F5C842);
          margin-bottom: 1.75rem;
        }

        .svp-subtext {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.78);
          font-weight: 300;
          max-width: 46ch;
          margin-bottom: 2.25rem;
        }

        .svp-cta {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          text-decoration: none;
          font-size: .8rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 1rem 1.75rem;
          border-radius: 4px;
          transition: background .2s, transform .2s, border-color .2s;
        }
        .svp-cta:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        /* Image side */
        .svp-media {
          position: relative;
        }
        .svp-media-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          box-shadow: 0 40px 90px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06);
        }
        .svp-media-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .svp-media-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 45%);
          pointer-events: none;
        }

        .svp-play {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 74px; height: 74px;
          border-radius: 50%;
          background: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 14px 34px -10px rgba(239,68,68,0.65);
          transition: transform .2s, background .2s;
        }
        .svp-play:hover { transform: translate(-50%,-50%) scale(1.06); background: #dc2626; }
        .svp-play svg { width: 26px; height: 26px; margin-left: 3px; }

        /* ═══════════════════════════════
           SERVICE TIMES
        ═══════════════════════════════ */
        .svp-times {
          position: relative;
          padding: 6rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media(max-width:900px){ .svp-times{ padding: 4rem 1.5rem; } }

        .svp-times-head { margin-bottom: 3rem; }
        .svp-times-eyebrow {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #8FA3FF;
          display: flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: 1rem;
        }
        .svp-times-eyebrow::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:#C9960A;
        }
        .svp-times-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 700;
          color: #fff;
        }

        .svp-times-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          overflow: hidden;
        }
        @media(max-width:900px){ .svp-times-grid{ grid-template-columns: repeat(2, 1fr); } }
        @media(max-width:520px){ .svp-times-grid{ grid-template-columns: 1fr; } }

        .svp-time-card {
          background: #0a0710;
          padding: 2.25rem 1.75rem;
          transition: background .2s;
        }
        .svp-time-card:hover { background: #120c1c; }

        .svp-time-day {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: .5rem;
        }
        .svp-time-clock {
          font-size: 1.1rem;
          font-weight: 600;
          color: #C9960A;
          margin-bottom: .35rem;
        }
        .svp-time-label {
          font-size: .78rem;
          color: rgba(255,255,255,0.55);
          font-weight: 300;
        }

        /* ═══════════════════════════════
           CLOSING MARQUEE
        ═══════════════════════════════ */
        .svp-marquee {
          position: relative;
          overflow: hidden;
          padding: 2.5rem 0;
          background: #020102;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .svp-marquee-track {
          display: flex;
          width: max-content;
          animation: svpMarquee 24s linear infinite;
        }

        .svp-marquee-item {
          display: flex;
          align-items: center;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-style: italic;
          font-size: 30px;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: .01em;
          white-space: nowrap;
          padding: 0 2.5rem;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.5);
        }
        .svp-marquee-item:nth-child(even) {
          color: #C9960A;
          -webkit-text-stroke: 0;
        }

        @keyframes svpMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="svp">
        {/* ══ HERO ══ */}
        <div className="svp-hero">
          <div className="svp-hero-inner">
            <div>
              <p className="svp-eyebrow">Hour of Grace Believers Ministry International</p>
              <h1 className="svp-title">Come As<br />You Are</h1>
              <div className="svp-title-underline" />
              <p className="svp-subtext">
                Every service is an encounter — a place to worship freely, hear
                the Word, and experience the presence of God. Join us in person
                or watch live from wherever you are.
              </p>
              <a className="svp-cta" href="#service-times">
                View Service Times
              </a>
            </div>

            <div className="svp-media">
              <div className="svp-media-frame">
                <img src="/service.jpg" alt="Sunday service" />
                <div className="svp-media-scrim" />
                <a
                  className="svp-play"
                  href={YOUTUBE_LIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch live"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══ SERVICE TIMES ══ */}
        <div className="svp-times" id="service-times">
          <div className="svp-times-head">
            <p className="svp-times-eyebrow">Join Us</p>
            <h2 className="svp-times-title">Service Times</h2>
          </div>

          <div className="svp-times-grid">
            {serviceTimes.map((s) => (
              <div className="svp-time-card" key={s.day}>
                <p className="svp-time-day">{s.day}</p>
                <p className="svp-time-clock">{s.time}</p>
                <p className="svp-time-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ CLOSING MARQUEE ══ */}
        <div className="svp-marquee">
          <div className="svp-marquee-track">
            {[...Array(16)].map((_, i) => (
              <span className="svp-marquee-item" key={i}>Glory</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}