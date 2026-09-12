"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Smartphone, Building2 } from "lucide-react"

export default function GivePage() {
  const [heroReady, setHeroReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const givingCategories = [
    { img: "/mission work.webp", label: "Ministry & Outreach" },
    { img: "/comm support.webp", label: "Community Support" },
    { img: "/giveee.jpg", label: "Building & Facilities" },
    { img: "/education support.webp", label: "Education Programs" },
  ]

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Track viewport width to know when to switch to carousel mode
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Autoplay — only runs once we're in carousel (mobile) mode
  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % givingCategories.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [isMobile, givingCategories.length])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        .gp {
          --blue: #3A4FD8;
          --blue-lt: #6B83F5;
          --gold: #C9960A;
          --gold-lt: #F5C842;
          --white: #FFFFFF;
          --cream: #FAF6EF;
          --cream-deep: #F3EDE2;
          --ink: #111827;
          --muted: #111827;
          --divider: #E8E1D4;
          --card-border: #E8E1D4;

          background: var(--cream);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ═══════════════════════════════
           PHONE RINGING ANIMATION 📞
        ═══════════════════════════════ */
        @keyframes phoneRing {
          0% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-15deg) scale(1.1); }
          20% { transform: rotate(15deg) scale(1.1); }
          30% { transform: rotate(-10deg) scale(1.05); }
          40% { transform: rotate(10deg) scale(1.05); }
          50% { transform: rotate(-5deg) scale(1); }
          60% { transform: rotate(5deg) scale(1); }
          70% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes phonePulse {
          0% { box-shadow: 0 0 0 0 rgba(201, 150, 10, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(201, 150, 10, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 150, 10, 0); }
        }

        .gp-pay-card:first-child .gp-pay-heading svg {
          animation: phoneRing 2.4s ease-in-out infinite;
        }

        .ringing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.62rem;
          font-weight: 600;
          color: var(--gold);
          margin-left: 8px;
        }

        .ringing-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: phonePulse 1.6s ease-out infinite;
        }

        /* ═══════════════════════════════
           SPARKLE ANIMATIONS
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

        .sparkle-sm { width: 4px; height: 4px; }
        .sparkle-lg { width: 8px; height: 8px; }

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

        .sparkle-twinkle { animation-name: sparkleTwinkle; animation-duration: 4s; }

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

        .sparkle-reverse { animation-direction: reverse; }
        .sparkle-3, .sparkle-8, .sparkle-13, .sparkle-18 { animation-direction: reverse; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ═══════════════════════════════
           HERO
        ═══════════════════════════════ */
        .gp-hero {
          position: relative;
          padding: 4rem 6rem 2.25rem;
          background: var(--cream);
          z-index: 1;
          border-bottom: 1px solid var(--divider);
        }
        @media(max-width:768px) {
          .gp-hero { padding: 3rem 1.5rem 1.75rem; }
        }

        .gp-hero-inner {
          max-width: 640px;
          opacity: 0;
        }
        .gp-hero-ready .gp-hero-inner {
          animation: fadeUp 0.6s ease 0.1s forwards;
        }

        .gp-eyebrow {
          display: flex;
          align-items: center;
          gap: .6rem;
          font-size: .6rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.9rem;
        }
        .gp-eyebrow::before {
          content: '';
          display: inline-block;
          width: 1.5rem;
          height: 2px;
          background: var(--gold);
        }

        .gp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4.6vw, 3.2rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 0.75rem;
        }
        .gp-hero-title .t-gold {
          color: var(--gold);
        }

        .gp-hero-body {
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--muted);
          font-weight: 400;
          max-width: 52ch;
        }

        /* ═══════════════════════════════
           SCRIPTURE LINE
        ═══════════════════════════════ */
        .gp-strip {
          background: var(--gold);
          padding: 0.85rem 6rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        @media(max-width:768px) { .gp-strip { padding: 0.85rem 1.5rem; } }

        .gp-strip-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.96rem;
          color: #fff;
          margin: 0;
        }
        .gp-strip-text span {
          font-family: 'Jost', sans-serif;
          font-style: normal;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          margin-left: 0.6rem;
        }

        /* ═══════════════════════════════
           BODY
        ═══════════════════════════════ */
        .gp-body {
          background: var(--cream-deep);
          padding: 3rem 6rem 4rem;
          position: relative;
          z-index: 1;
        }
        @media(max-width:768px) { .gp-body { padding: 2.5rem 1.5rem 3rem; } }

        .gp-body-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .gp-sec-eyebrow {
          font-size: .6rem;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.4rem;
        }

        .gp-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 1.25rem;
        }

        /* ─── Categories — flexbox row on desktop, autoplay carousel on mobile ─── */
        .gp-cat-row {
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .gp-cat-track {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .gp-cat-item {
          flex: 1 1 180px;
          max-width: 240px;
          text-align: left;
          background: #fff;
          border: 1px solid var(--card-border);
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .gp-cat-item:hover {
          border-color: var(--blue-lt);
          box-shadow: 0 4px 16px rgba(58, 79, 216, 0.08);
        }

        .gp-cat-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }

        .gp-cat-label {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--ink);
          padding: 0.75rem 0.9rem;
        }

        .gp-cat-dots {
          display: none;
          justify-content: center;
          gap: 6px;
          margin-bottom: 2rem;
        }
        .gp-cat-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--card-border);
          transition: background 0.3s ease, width 0.3s ease;
        }
        .gp-cat-dot.active {
          background: var(--gold);
          width: 16px;
          border-radius: 3px;
        }

        @media(max-width:640px) {
          .gp-cat-track {
            flex-wrap: nowrap;
            transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          }
          .gp-cat-item {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .gp-cat-dots {
            display: flex;
          }
        }

        /* ─── Payment methods — flexbox row, cards grow evenly ─── */
        .gp-pay-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .gp-pay-card {
          flex: 1 1 260px;
          background: #fff;
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 1.5rem 1.6rem;
        }

        .gp-pay-heading {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ink);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.1rem;
          padding-bottom: 0.9rem;
          border-bottom: 1px solid var(--divider);
        }
        .gp-pay-heading svg {
          width: 17px;
          height: 17px;
          color: var(--gold);
          flex-shrink: 0;
        }

        .gp-pay-row-label {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.15rem;
        }

        .gp-pay-value {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: 0.01em;
          margin: 0 0 0.85rem;
        }
        .gp-pay-value:last-child { margin-bottom: 0; }

        .gp-pay-line {
          font-size: 0.88rem;
          color: var(--ink);
          font-weight: 600;
          margin: 0 0 0.85rem;
        }

        .gp-pay-sub {
          font-size: 0.74rem;
          font-weight: 500;
          color: var(--muted);
          margin: -0.6rem 0 0.85rem;
        }

        .gp-ref-note {
          font-size: 0.8rem;
          line-height: 1.65;
          color: var(--muted);
          border-left: 2px solid var(--gold);
          padding: 0 0 0 1rem;
          margin-bottom: 3rem;
        }
        .gp-ref-note em { color: var(--ink); font-style: italic; font-weight: 500; }
      `}</style>

      <div className={`gp ${heroReady ? "gp-hero-ready" : ""}`}>
        {/* SPARKLE CONTAINER */}
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

        {/* HERO */}
        <section className="gp-hero">
          <div className="gp-hero-inner">
            <p className="gp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="gp-hero-title">
              Give With a <span className="t-gold">Cheerful Heart</span>
            </h1>
            <p className="gp-hero-body">
              Your generosity fuels the mission — supporting worship, outreach,
              and the work of God's Kingdom in our community and beyond.
            </p>
          </div>
        </section>

        {/* SCRIPTURE LINE */}
        <div className="gp-strip">
          <p className="gp-strip-text">
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
            <span>2 Corinthians 9:7</span>
          </p>
        </div>

        {/* BODY */}
        <section className="gp-body">
          <div className="gp-body-inner">
            {/* Where Your Gift Goes */}
            <div>
              <p className="gp-sec-eyebrow">Impact</p>
              <h2 className="gp-sec-title" style={{ fontSize: "1.3rem" }}>
                Where Your Gift Goes
              </h2>

              <div className="gp-cat-row">
                <div
                  className="gp-cat-track"
                  style={{
                    transform: isMobile ? `translateX(-${activeSlide * 100}%)` : "none",
                  }}
                >
                  {givingCategories.map(({ img, label }) => (
                    <div key={label} className="gp-cat-item">
                      <img src={img} alt={label} className="gp-cat-img" />
                      <p className="gp-cat-label">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gp-cat-dots">
                {givingCategories.map((_, i) => (
                  <span
                    key={i}
                    className={`gp-cat-dot ${i === activeSlide ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Make a Donation */}
            <div>
              <p className="gp-sec-eyebrow">Payment Details</p>
              <h2 className="gp-sec-title">Make a Donation</h2>

              <div className="gp-pay-grid">
                <div className="gp-pay-card">
                  <p className="gp-pay-heading">
                    <Smartphone size={17} />
                    Mobile Money
                    <span className="ringing-badge">Active</span>
                  </p>
                  <p className="gp-pay-row-label">Phone Number</p>
                  <p className="gp-pay-value">0246 819 964</p>
                  <p className="gp-pay-sub">Apostle Prince Ofosu Hene</p>
                </div>

                <div className="gp-pay-card">
                  <p className="gp-pay-heading">
                    <Building2 size={17} />
                    Bank Transfer
                  </p>
                  <p className="gp-pay-row-label">Bank</p>
                  <p className="gp-pay-line">Stanbic Bank</p>
                  <p className="gp-pay-row-label">Account Number</p>
                  <p className="gp-pay-value">9040002232337</p>
                  <p className="gp-pay-sub">Prince Ofosu Hene</p>
                </div>
              </div>

              <p className="gp-ref-note">
                Please include the donation type in your reference — e.g.{" "}
                <em>Tithe</em>, <em>Offering</em>, <em>Building Fund</em>, or{" "}
                <em>Missions</em>.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}