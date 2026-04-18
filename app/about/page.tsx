"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Church, Users, Heart, BookOpen } from "lucide-react"

export default function AboutPage() {
  const [historyExpanded, setHistoryExpanded] = useState(false)

  const values = [
    {
      icon: Church,
      title: "Faith",
      description: "We believe in the power of faith to move mountains and transform lives.",
      details: "Our faith is rooted in the teachings of Jesus Christ. Through prayer, scripture, and community, we witness miracles and personal transformations that strengthen our belief in God's promises.",
      num: "01",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and supporting one another in our spiritual journey.",
      details: "We foster a welcoming environment where everyone feels valued. Our small groups, fellowship events, and outreach programs help build lasting connections and mutual support.",
      num: "02",
    },
    {
      icon: Heart,
      title: "Love",
      description: "Showing God's love through acts of kindness and compassion.",
      details: "Love is at the core of our ministry. We demonstrate God's love through charitable works, counseling, and serving our community in practical ways.",
      num: "03",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous growth through Bible study and spiritual education.",
      details: "We offer comprehensive Bible study programs, workshops, and seminars to deepen understanding of scripture and spiritual principles.",
      num: "04",
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .about-page {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --cream: #FAF7F2;
          --ink: #1A1612;
          --stone: #6B6057;
          --divider: #E0D8CC;
          --deep: #12100E;
          background-color: var(--cream);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
        }

        .about-display {
          font-family: 'Cormorant Garamond', serif;
        }

        /* ── HERO ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 88vh;
          border-bottom: 1px solid var(--divider);
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .hero-img-panel { height: 50vw; min-height: 260px; }
        }

        .hero-text-panel {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 3rem 4rem 4rem 6rem;
          background-color: var(--cream);
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-text-panel { padding: 2.5rem 1.5rem; }
        }

        .hero-img-panel {
          position: relative;
          overflow: hidden;
          background-color: var(--deep);
        }
        .hero-img-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.85;
          mix-blend-mode: luminosity;
        }
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.18) 0%, transparent 60%);
        }
        .hero-img-logo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-img-logo img {
          width: 180px;
          height: 180px;
          object-fit: contain;
          opacity: 1;
          mix-blend-mode: normal;
          filter: drop-shadow(0 4px 32px rgba(0,0,0,0.4));
        }

        .hero-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--stone);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .hero-eyebrow::before {
          content: '';
          width: 1.5rem;
          height: 1px;
          background: var(--gold);
          display: inline-block;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 2rem;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .hero-body {
          color: var(--stone);
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 300;
          max-width: 36ch;
        }

        .hero-corner-label {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 300;
          color: var(--divider);
          line-height: 1;
          pointer-events: none;
        }

        /* ── VISION ── */
        .vision-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          padding: 5rem 6rem;
          border-bottom: 1px solid var(--divider);
          align-items: start;
        }
        @media (max-width: 768px) {
          .vision-section { grid-template-columns: 1fr; padding: 3rem 1.5rem; gap: 2rem; }
        }

        .vision-label {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .vision-label::before {
          content: '';
          width: 1.5rem;
          height: 1px;
          background: var(--gold);
          display: inline-block;
        }

        .vision-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.1;
        }

        .vision-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 300;
          font-style: italic;
          color: var(--ink);
          line-height: 1.4;
          border-left: 2px solid var(--gold);
          padding-left: 2rem;
        }

        /* ── VALUES ── */
        .values-section {
          padding: 5rem 6rem;
          border-bottom: 1px solid var(--divider);
        }
        @media (max-width: 768px) {
          .values-section { padding: 3rem 1.5rem; }
        }

        .values-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--divider);
          padding-bottom: 1.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .values-grid { grid-template-columns: 1fr; }
        }

        .value-card {
          padding: 2rem 2rem 2.5rem;
          border-right: 1px solid var(--divider);
          transition: background 0.25s;
        }
        .value-card:last-child { border-right: none; }
        .value-card:hover { background: rgba(201,168,76,0.04); }

        .value-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: var(--divider);
          line-height: 1;
          margin-bottom: 1.5rem;
          display: block;
        }

        .value-icon {
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 0.75rem;
        }

        .value-desc {
          font-size: 0.82rem;
          color: var(--stone);
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 0.75rem;
        }

        .value-detail {
          font-size: 0.78rem;
          color: var(--stone);
          line-height: 1.65;
          font-weight: 300;
          opacity: 0.75;
        }

        /* ── HISTORY ── */
        .history-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: var(--deep);
          color: var(--cream);
        }
        @media (max-width: 768px) {
          .history-section { grid-template-columns: 1fr; }
          .history-deco { display: none; }
        }

        .history-content {
          padding: 5rem 4rem 5rem 6rem;
        }
        @media (max-width: 768px) {
          .history-content { padding: 3rem 1.5rem; }
        }

        .history-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(250,247,242,0.4);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .history-eyebrow::before {
          content: '';
          width: 1.5rem;
          height: 1px;
          background: var(--gold);
          display: inline-block;
        }

        .history-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          line-height: 1;
          color: var(--cream);
          margin-bottom: 2rem;
        }
        .history-title em { font-style: italic; color: var(--gold); }

        .history-body {
          font-size: 0.9rem;
          line-height: 1.8;
          color: rgba(250,247,242,0.65);
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .history-toggle {
          background: none;
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.75rem 1.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .history-toggle:hover {
          background: var(--gold);
          color: var(--deep);
        }

        .history-deco {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .history-deco-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14rem;
          font-weight: 700;
          font-style: italic;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          user-select: none;
          white-space: nowrap;
        }
        .history-year {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          font-weight: 300;
          color: rgba(201,168,76,0.25);
          line-height: 1;
        }
      `}</style>

      <div className="about-page min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section className="hero-grid">
          <div className="hero-text-panel">
            <span className="hero-corner-label">01</span>
            <p className="hero-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="hero-title">
              About<br />
              <em>Our</em><br />
              Church
            </h1>
            <p className="hero-body">
              A community of faith dedicated to spreading God's love and grace — 
              welcoming people from every walk of life into His presence.
            </p>
          </div>

          <div className="hero-img-panel">
            {/* Background texture / dark panel */}
            <div className="hero-img-overlay" />
            {/* Church logo centered on dark panel */}
            <div className="hero-img-logo">
              <img
                src="/church_loog-removebg-preview.png"
                alt="Hour of Grace Church Logo"
              />
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section className="vision-section">
          <div>
            <p className="vision-label">Our Vision</p>
            <h2 className="vision-heading">What<br />We Stand<br />For</h2>
          </div>
          <div>
            <p className="vision-quote">
              "Bringing Men to the light of God's dear son through the demonstration 
              of Love and the Holy Spirit."
            </p>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="values-section">
          <div className="values-header">
            <div>
              <p className="vision-label" style={{ marginBottom: "0.5rem" }}>What We Believe</p>
              <h2 className="about-display" style={{ fontSize: "2.5rem", fontWeight: 600 }}>Our Core Values</h2>
            </div>
            <span className="about-display" style={{ fontSize: "5rem", fontWeight: 300, color: "var(--divider)", lineHeight: 1 }}>
              04
            </span>
          </div>

          <div className="values-grid">
            {values.map(({ icon: Icon, title, description, details, num }) => (
              <div key={title} className="value-card">
                <span className="value-num">{num}</span>
                <Icon className="value-icon" size={22} />
                <p className="value-title">{title}</p>
                <p className="value-desc">{description}</p>
                <p className="value-detail">{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HISTORY ── */}
        <section className="history-section">
          <div className="history-content">
            <p className="history-eyebrow">Our Story</p>
            <h2 className="history-title">
              Rooted<br />in <em>Faith,</em><br />Growing<br />in Grace
            </h2>
            <p className="history-body">
              Founded with a vision to create a place where people from all walks of life 
              can come together in worship and fellowship. Over the years, we've grown into 
              a vibrant community serving our local area and beyond.
            </p>
            {historyExpanded && (
              <p className="history-body">
                Our journey began in 2010 with a small group of believers passionate about 
                spreading God's word. Through dedication and faith, we've established multiple 
                congregations across Ghana, touching countless lives with our ministry. Today, 
                we continue to expand our reach through online services, community outreach, 
                and educational programs.
              </p>
            )}
            <button
              className="history-toggle"
              onClick={() => setHistoryExpanded(!historyExpanded)}
            >
              {historyExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="history-deco">
            <span className="history-deco-text">Grace</span>
            <span className="history-year">2010</span>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}