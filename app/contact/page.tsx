"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"
import { MapPin, MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactPage() {
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

        .cp {
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
        .cp-hero {
          position: relative;
          width: 100%;
          min-height: 62vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cp-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 600px;
          opacity: 0;
        }
        .cp-hero-ready .cp-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .cp-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .cp-eyebrow {
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
        .cp-eyebrow::before {
          content:'';
          display:inline-block;
          width:2rem; height:2px;
          background:var(--gold);
        }

        .cp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7.5rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .cp-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .cp-hero-title .t-gold { color: var(--gold); }

        .cp-hero-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          font-weight: 300;
          max-width: 44ch;
        }

        /* Decorative right element */
        .cp-hero-deco {
          position: absolute;
          right: 6rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          opacity: 0;
          pointer-events: none;
          text-align: center;
        }
        .cp-hero-ready .cp-hero-deco { animation: fadeIn 1s ease 0.7s forwards; }
        @media(max-width:900px){ .cp-hero-deco{ display:none; } }

        .cp-deco-cross {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 1rem;
        }
        .cp-deco-v {
          width: 2px;
          height: 140px;
          background: linear-gradient(to bottom, transparent, var(--divider), transparent);
        }
        .cp-deco-h {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 140px; height: 2px;
          background: linear-gradient(to right, transparent, var(--divider), transparent);
        }
        .cp-deco-label {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ═══════════════════════════════
           CONTENT SECTION
        ═══════════════════════════════ */
        .cp-body {
          position: relative;
          background: #F8F9FF;
          padding: 5rem 6rem 6rem;
          overflow: hidden;
        }
        @media(max-width:768px){ .cp-body{ padding: 3rem 1.5rem 4rem; } }

        .cp-body-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cp-body-inner { position: relative; z-index: 1; }

        .cp-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1.5px solid var(--divider);
        }

        .cp-sec-label {
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
        .cp-sec-label::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:var(--gold);
        }

        .cp-sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.08;
          color: var(--ink);
        }

        .cp-big-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem;
          font-weight: 700;
          color: var(--divider);
          line-height: 1;
        }

        /* ── Two-column grid ── */
        .cp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
          background: var(--divider);
          margin-bottom: 1.5px;
        }
        @media(max-width:768px){ .cp-grid{ grid-template-columns: 1fr; } }

        /* ── Info cards ── */
        .cp-info-panel {
          background: #fff;
          padding: 3rem;
        }
        @media(max-width:768px){ .cp-info-panel{ padding: 2rem 1.5rem; } }

        .cp-panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 1.75rem;
        }

        .cp-contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5px;
          background: var(--divider);
        }

        .cp-contact-card {
          background: #fff;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.5rem 1.75rem;
          text-decoration: none;
          color: inherit;
          transition: background .2s, transform .2s;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: none;
          width: 100%;
          text-align: left;
        }
        .cp-contact-card::after {
          content:'';
          position: absolute;
          left:0; top:0;
          width:3px; height:0;
          background: var(--blue);
          transition: height .35s ease;
        }
        .cp-contact-card:hover::after { height:100%; }
        .cp-contact-card:hover { background: #F0F3FF; transform: translateX(4px); }

        .cp-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 2px;
          background: var(--divider);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--blue);
          transition: background .2s;
        }
        .cp-contact-card:hover .cp-card-icon { background: var(--blue); color: #fff; }

        .cp-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: .3rem;
        }

        .cp-card-desc {
          font-size: .82rem;
          color: var(--muted);
          line-height: 1.6;
          font-weight: 300;
        }

        .cp-card-link {
          font-size: .88rem;
          font-weight: 600;
          color: var(--blue);
          text-decoration: none;
          transition: color .2s;
        }
        .cp-card-link:hover { color: #1E2D9E; }

        /* Direct contact panel */
        .cp-direct-panel {
          background: #fff;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        @media(max-width:768px){ .cp-direct-panel{ padding: 2rem 1.5rem; } }

        .cp-direct-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--ink);
          padding-bottom: 1.25rem;
          border-bottom: 2px solid var(--blue);
        }

        .cp-direct-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cp-direct-item {}
        .cp-direct-lbl {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: .4rem;
          display: block;
        }
        .cp-direct-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--blue);
          text-decoration: none;
          transition: color .2s;
          display: block;
        }
        .cp-direct-val:hover { color: #1E2D9E; }

        /* Scripture quote block */
        .cp-scripture {
          background: var(--blue);
          padding: 2rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .cp-scripture::before {
          content: '"';
          position: absolute;
          top: -1rem; left: 1rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 8rem;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          pointer-events: none;
        }
        .cp-scripture-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: rgba(255,255,255,0.92);
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
        .cp-scripture-ref {
          display: block;
          margin-top: .75rem;
          font-family: 'Jost', sans-serif;
          font-style: normal;
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--gold-lt);
        }

        /* ── Form section ── */
        .cp-form-section {
          background: #fff;
          padding: 0;
        }
      `}</style>

      <div className="cp">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`cp-hero ${heroReady ? "cp-hero-ready" : ""}`}>

          {/* Blue curved ribbon */}
          <svg
            className="cp-hero-svg"
            viewBox="0 0 1440 540"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cpRib" x1="0%" y1="0%" x2="100%" y2="0%">
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
              fill="url(#cpRib)"
            />
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

          {/* Decorative cross */}
          <div className="cp-hero-deco">
            <div className="cp-deco-cross">
              <div className="cp-deco-v" />
              <div className="cp-deco-h" />
            </div>
            <span className="cp-deco-label">Get In Touch</span>
          </div>

          <div className="cp-hero-text">
            <p className="cp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="cp-hero-title">
              Get In<br />
              <span className="t-blue">Touch</span><br />
              <span className="t-gold">With Us</span>
            </h1>
            <p className="cp-hero-body">
              We'd love to hear from you — reach out through any of these channels
              or send us a message directly.
            </p>
          </div>
        </section>


        {/* ══ CONTENT ══ */}
        <section className="cp-body">

          {/* Subtle ribbon echo */}
          <svg
            className="cp-body-svg"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#cpBRib)" />
          </svg>

          <div className="cp-body-inner">

            {/* Section header */}
            <div className="cp-section-head">
              <div>
                <p className="cp-sec-label">Reach Out</p>
                <h2 className="cp-sec-title">Connect With Us</h2>
              </div>
              <span className="cp-big-num">✝</span>
            </div>

            {/* Two-column grid */}
            <div className="cp-grid">

              {/* Left — info cards */}
              <div className="cp-info-panel">
                <p className="cp-panel-title">Ways to Connect</p>
                <div className="cp-contact-cards">

                  <Link href="/contact/location" style={{ textDecoration:'none' }}>
                    <div className="cp-contact-card">
                      <div className="cp-card-icon">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="cp-card-title">Our Location</p>
                        <p className="cp-card-desc">Find our church and get directions to join us in person.</p>
                      </div>
                    </div>
                  </Link>

                  <div className="cp-contact-card">
                    <div className="cp-card-icon">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="cp-card-title">Prayer Requests</p>
                      <p className="cp-card-desc">Submit your prayer requests using the form below. Our team will be praying with you.</p>
                    </div>
                  </div>

                  <a href="tel:+233271645202" className="cp-contact-card">
                    <div className="cp-card-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="cp-card-title">Call Us</p>
                      <p className="cp-card-desc">Speak directly with someone from our team.</p>
                      <span className="cp-card-link">+233 271 645 202</span>
                    </div>
                  </a>

                  <a href="mailto:Heous2020@yahoo.com" className="cp-contact-card">
                    <div className="cp-card-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="cp-card-title">Email Us</p>
                      <p className="cp-card-desc">Send us a message and we'll get back to you.</p>
                      <span className="cp-card-link">Heous2020@yahoo.com</span>
                    </div>
                  </a>

                </div>
              </div>

              {/* Right — direct contact + scripture */}
              <div className="cp-direct-panel">
                <p className="cp-direct-title">Direct Contact</p>

                <div className="cp-direct-items">
                  <div className="cp-direct-item">
                    <span className="cp-direct-lbl">Phone</span>
                    <a href="tel:+233271645202" className="cp-direct-val">+233 271 645 202</a>
                  </div>
                  <div className="cp-direct-item">
                    <span className="cp-direct-lbl">Email</span>
                    <a href="mailto:Heous2020@yahoo.com" className="cp-direct-val">Heous2020@yahoo.com</a>
                  </div>
                </div>

                {/* Scripture */}
                <div className="cp-scripture">
                  <p className="cp-scripture-text">
                    "And the peace of God, which transcends all understanding, will guard your hearts 
                    and your minds in Christ Jesus."
                    <span className="cp-scripture-ref">Philippians 4:7</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Form — full width, same grid lines */}
            <div style={{ background:'var(--divider)', paddingTop:'1.5px' }}>
              <div style={{ background:'#fff', padding:'3rem' }}>
                <div className="cp-section-head" style={{ marginBottom:'2rem' }}>
                  <div>
                    <p className="cp-sec-label">Send a Message</p>
                    <h2 className="cp-sec-title">Contact Form</h2>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}