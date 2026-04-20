"use client"

import React, { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Church, Users, Heart, BookOpen } from "lucide-react"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export default function AboutPage() {
  const [historyExpanded, setHistoryExpanded] = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  const vision = useInView()
  const values = useInView()
  const history = useInView()

  const coreValues = [
    {
      icon: Church,
      title: "Faith",
      description: "We believe in the power of faith to move mountains and transform lives.",
      details: "Our faith is rooted in the teachings of Jesus Christ — through prayer, scripture, and community we witness His promises fulfilled.",
      num: "01",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and supporting one another in our spiritual journey.",
      details: "We foster a welcoming environment where everyone feels valued through small groups, fellowship, and outreach.",
      num: "02",
    },
    {
      icon: Heart,
      title: "Love",
      description: "Showing God's love through acts of kindness and compassion in every season.",
      details: "Love is at the core of our ministry — demonstrated through charitable works, counselling, and serving our community.",
      num: "03",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous growth through Bible study and Spirit-led education.",
      details: "We offer Bible study, workshops, and seminars to deepen understanding of scripture and spiritual principles.",
      num: "04",
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ap {
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
        }

        @keyframes fadeUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        /* ═══════════════════════════════
           HERO
        ═══════════════════════════════ */
        .hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          background: #ffffff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Full-bleed SVG ribbon — same sweep as the image */
        .hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Logo anchored to sit on the ribbon */
        .hero-logo {
          position: absolute;
          top: 50%;
          left: 60%;
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 0;
        }
        .hero-ready .hero-logo { animation: fadeIn 0.9s ease 0.55s forwards; }
        .hero-logo img {
          width: 220px;
          height: 220px;
          object-fit: contain;
          filter: drop-shadow(0 16px 48px rgba(58,79,216,0.28)) drop-shadow(0 4px 20px rgba(0,0,0,0.16));
          animation: float 4s ease-in-out 1.5s infinite;
        }
        @media(max-width:768px){
          .hero-logo { left:50%; top:72%; }
          .hero-logo img { width:150px; height:150px; }
        }

        /* Text block */
        .hero-text {
          position: relative;
          z-index: 5;
          padding: 6.5rem 0 0 6rem;
          max-width: 540px;
          opacity: 0;
        }
        .hero-ready .hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .hero-text{padding:5rem 0 0 1.5rem;max-width:92vw;} }

        .hero-eyebrow {
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
        .hero-eyebrow::before {
          content:'';
          display:inline-block;
          width:2rem; height:2px;
          background:var(--gold);
        }

        .hero-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(3.5rem,7vw,6.5rem);
          font-weight:700;
          line-height:.93;
          letter-spacing:-.02em;
          color:var(--ink);
          margin-bottom:1.5rem;
        }
        .hero-title .t-blue { color:var(--blue); font-style:italic; }
        .hero-title .t-gold { color:var(--gold); }

        .hero-body {
          font-size:1rem;
          line-height:1.75;
          color:var(--muted);
          font-weight:300;
          max-width:40ch;
          margin-bottom:2rem;
        }

        .hero-cta {
          display:inline-flex;
          align-items:center;
          gap:.6rem;
          background:var(--blue);
          color:#fff;
          font-size:.75rem;
          font-weight:600;
          letter-spacing:.12em;
          text-transform:uppercase;
          padding:.9rem 2.2rem;
          border:none;
          cursor:pointer;
          text-decoration:none;
          border-radius:2px;
          transition:background .2s,transform .2s;
        }
        .hero-cta:hover { background:#2535b8; transform:translateY(-2px); }

        /* Stats row bottom */
        .hero-stats {
          position:relative;
          z-index:5;
          margin-top:auto;
          padding:2.5rem 6rem;
          display:flex;
          gap:4rem;
          opacity:0;
        }
        .hero-ready .hero-stats { animation:fadeUp .7s ease 1s forwards; }
        @media(max-width:768px){ .hero-stats{padding:2rem 1.5rem;gap:2rem;flex-wrap:wrap;} }

        .stat-num {
          font-family:'Cormorant Garamond',serif;
          font-size:2.6rem;
          font-weight:700;
          color:var(--blue);
          line-height:1;
          display:block;
        }
        .stat-lbl {
          font-size:.68rem;
          font-weight:500;
          letter-spacing:.1em;
          text-transform:uppercase;
          color:var(--muted);
          display:block;
          margin-top:.25rem;
        }

        /* ═══════════════════════════════
           VISION
        ═══════════════════════════════ */
        .vision-section {
          position:relative;
          background:#fff;
          padding:6rem;
          overflow:hidden;
        }
        @media(max-width:768px){ .vision-section{padding:3.5rem 1.5rem;} }

        .vis-ribbon {
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          pointer-events:none;
        }

        .vision-inner {
          position:relative;
          z-index:1;
          display:grid;
          grid-template-columns:1fr 1.6fr;
          gap:5rem;
          align-items:center;
        }
        @media(max-width:768px){ .vision-inner{grid-template-columns:1fr;gap:2rem;} }

        .sec-label {
          font-size:.62rem;
          font-weight:600;
          letter-spacing:.22em;
          text-transform:uppercase;
          color:var(--blue);
          display:flex;
          align-items:center;
          gap:.6rem;
          margin-bottom:1rem;
        }
        .sec-label::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:var(--gold);
        }

        .vision-heading {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2rem,3.5vw,3rem);
          font-weight:700;
          line-height:1.08;
          color:var(--ink);
        }

        .vision-quote {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.4rem,2.5vw,2rem);
          font-weight:400;
          font-style:italic;
          color:var(--ink);
          line-height:1.5;
          padding-left:1.75rem;
          border-left:3px solid var(--blue);
          position:relative;
        }

        /* scroll anim */
        .anim {
          opacity:0;
          transform:translateY(22px);
          transition:opacity .7s ease, transform .7s ease;
        }
        .anim.in { opacity:1; transform:translateY(0); }
        .anim.d1 { transition-delay:.1s; }
        .anim.d2 { transition-delay:.22s; }

        /* ═══════════════════════════════
           VALUES
        ═══════════════════════════════ */
        .values-section {
          position:relative;
          background:#F8F9FF;
          padding:6rem;
          overflow:hidden;
        }
        @media(max-width:768px){ .values-section{padding:3.5rem 1.5rem;} }

        .val-ribbon { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }

        .val-header {
          position:relative;
          z-index:1;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          margin-bottom:3rem;
          padding-bottom:1.5rem;
          border-bottom:1.5px solid var(--divider);
        }

        .val-big-num {
          font-family:'Cormorant Garamond',serif;
          font-size:5.5rem;
          font-weight:700;
          color:var(--divider);
          line-height:1;
        }

        .val-grid {
          position:relative;
          z-index:1;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:1.5px;
          background:var(--divider);
        }
        @media(max-width:900px){ .val-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:500px){ .val-grid{grid-template-columns:1fr;} }

        .val-card {
          background:#fff;
          padding:2.25rem;
          position:relative;
          overflow:hidden;
          opacity:0;
          transform:translateY(18px);
          transition:background .25s, transform .25s;
        }
        .val-card.in { animation:fadeUp .55s ease forwards; }
        .val-card::after {
          content:'';
          position:absolute;
          bottom:0; left:0;
          width:0; height:3px;
          background:var(--blue);
          transition:width .35s ease;
        }
        .val-card:hover::after { width:100%; }
        .val-card:hover { background:#F0F3FF; transform:translateY(-4px); }

        .vc-num {
          font-family:'Cormorant Garamond',serif;
          font-size:3rem;
          font-weight:700;
          color:var(--divider);
          line-height:1;
          display:block;
          margin-bottom:1.25rem;
        }
        .vc-icon { color:var(--blue); margin-bottom:.85rem; }
        .vc-title {
          font-family:'Cormorant Garamond',serif;
          font-size:1.45rem;
          font-weight:700;
          color:var(--ink);
          margin-bottom:.6rem;
        }
        .vc-desc { font-size:.82rem; color:var(--muted); line-height:1.7; margin-bottom:.6rem; }
        .vc-detail { font-size:.76rem; color:var(--muted); line-height:1.65; opacity:.8; }

        /* ═══════════════════════════════
           HISTORY
        ═══════════════════════════════ */
        .history-section {
          display:grid;
          grid-template-columns:1fr 1fr;
          min-height:560px;
          background:#fff;
          overflow:hidden;
        }
        @media(max-width:768px){
          .history-section{grid-template-columns:1fr;}
          .hist-visual{min-height:340px;}
        }

        .hist-content {
          position:relative;
          z-index:2;
          padding:5.5rem 4rem 5.5rem 6rem;
          background:#fff;
        }
        @media(max-width:768px){ .hist-content{padding:3rem 1.5rem;} }

        .hist-eyebrow {
          font-size:.62rem;
          font-weight:600;
          letter-spacing:.22em;
          text-transform:uppercase;
          color:var(--blue);
          display:flex;
          align-items:center;
          gap:.6rem;
          margin-bottom:1.25rem;
        }
        .hist-eyebrow::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:var(--gold);
        }

        .hist-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.4rem,4vw,3.6rem);
          font-weight:700;
          line-height:1.05;
          color:var(--ink);
          margin-bottom:1.75rem;
        }
        .hist-title em { font-style:italic; color:var(--blue); }

        .hist-body {
          font-size:.9rem;
          line-height:1.85;
          color:var(--muted);
          font-weight:300;
          margin-bottom:1.25rem;
        }

        .hist-extra {
          max-height:0;
          opacity:0;
          overflow:hidden;
          transition:max-height .55s ease, opacity .4s ease .1s;
          font-size:.9rem;
          line-height:1.85;
          color:var(--muted);
          font-weight:300;
          margin-bottom:1.25rem;
        }
        .hist-extra.open { max-height:220px; opacity:1; }

        .hist-toggle {
          background:none;
          border:2px solid var(--blue);
          color:var(--blue);
          font-family:'Jost',sans-serif;
          font-size:.72rem;
          font-weight:600;
          letter-spacing:.12em;
          text-transform:uppercase;
          padding:.75rem 1.85rem;
          cursor:pointer;
          border-radius:2px;
          transition:all .25s;
        }
        .hist-toggle:hover { background:var(--blue); color:#fff; }

        /* Right visual: white bg + ribbon + logo */
        .hist-visual {
          position:relative;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .hist-svg {
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          pointer-events:none;
        }

        .hist-logo {
          position:relative;
          z-index:2;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:1.25rem;
        }
        .hist-logo img {
          width:180px;
          height:180px;
          object-fit:contain;
          filter:drop-shadow(0 12px 40px rgba(58,79,216,.24)) drop-shadow(0 4px 16px rgba(0,0,0,.13));
          animation:float 4s ease-in-out infinite;
        }
        .hist-caption {
          font-family:'Cormorant Garamond',serif;
          font-style:italic;
          font-size:1rem;
          color:var(--blue);
          text-align:center;
          line-height:1.5;
        }
      `}</style>

      <div className="ap">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className={`hero ${heroReady ? "hero-ready" : ""}`}>

          {/*
            THE RIBBON — replicates the image exactly:
            thick curved band sweeping from lower-left to upper-right,
            with a gradient from lighter blue (left) to deep blue (right).
          */}
          <svg className="hero-svg" viewBox="0 0 1440 780" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            {/* Main ribbon body */}
            <path
              d="
                M -100 650
                Q  160 560,  420 510
                Q  660 465,  870 415
                Q 1080 365, 1300 290
                L 1540 190

                L 1540 255
                L 1310 350
                Q 1090 425, 880 475
                Q 670 525, 430 575
                Q  170 625, -100 715
                Z
              "
              fill="url(#hRib)"
            />
            {/* Top-edge highlight (white sheen) */}
            <path
              d="
                M -100 650
                Q  160 560,  420 510
                Q  660 465,  870 415
                Q 1080 365, 1300 290
                L 1540 190
                L 1540 210
                L 1305 308
                Q 1085 383, 875 433
                Q 665 483, 425 528
                Q  163 578, -100 668
                Z
              "
              fill="rgba(255,255,255,0.18)"
            />
          </svg>

          {/* Logo on ribbon */}
          <div className="hero-logo">
            <img
              src="/church_loog-removebg-preview.png"
              alt="Hour of Grace Believers Ministry International"
            />
          </div>

          {/* Text — upper left, above the ribbon */}
          <div className="hero-text">
            <p className="hero-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="hero-title">
              About<br />
              <span className="t-blue">Our</span><br />
              <span className="t-gold">Church</span>
            </h1>
            <p className="hero-body">
              A community of faith dedicated to spreading God's love and grace —
              welcoming people from every walk of life into His presence.
            </p>
            <a href="#vision" className="hero-cta">
              Discover Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            {[
              { num: "10+",  label: "Years of Ministry" },
              { num: "500+", label: "Lives Impacted" },
              { num: "52",   label: "Services Per Year" },
            ].map(s => (
              <div key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>


        {/* ══ VISION ══ */}
        <section className="vision-section" id="vision">
          {/* Subtle ribbon echo */}
          <svg className="vis-ribbon" viewBox="0 0 1440 380" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path d="M-80 300 Q360 240 720 260 Q1080 280 1540 175 L1540 230 Q1080 335 720 315 Q360 295 -80 355 Z" fill="url(#vRib)" />
          </svg>

          <div className="vision-inner">
            <div ref={vision.ref} className={`anim ${vision.visible ? "in" : ""}`}>
              <p className="sec-label">Our Vision</p>
              <h2 className="vision-heading">What<br />We Stand<br />For</h2>
            </div>
            <div className={`anim d2 ${vision.visible ? "in" : ""}`}>
              <p className="vision-quote">
                Bringing Men to the light of God's dear son through the demonstration
                of Love and the Holy Spirit.
              </p>
            </div>
          </div>
        </section>


        {/* ══ VALUES ══ */}
        <section className="values-section">
          <svg className="val-ribbon" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="valR" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path d="M-80 350 Q360 280 720 300 Q1080 320 1540 215 L1540 270 Q1080 375 720 355 Q360 335 -80 405 Z" fill="url(#valR)" />
          </svg>

          <div ref={values.ref} className={`val-header anim ${values.visible ? "in" : ""}`}>
            <div>
              <p className="sec-label">What We Believe</p>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.4rem", fontWeight:700, lineHeight:1.1 }}>
                Our Core Values
              </h2>
            </div>
            <span className="val-big-num">04</span>
          </div>

          <div className="val-grid">
            {coreValues.map(({ icon: Icon, title, description, details, num }, i) => (
              <div
                key={title}
                className={`val-card ${values.visible ? "in" : ""}`}
                style={{ animationDelay: values.visible ? `${i * 0.12}s` : "0s" }}
              >
                <span className="vc-num">{num}</span>
                <Icon className="vc-icon" size={22} />
                <p className="vc-title">{title}</p>
                <p className="vc-desc">{description}</p>
                <p className="vc-detail">{details}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ══ HISTORY ══ */}
        <section className="history-section">
          <div ref={history.ref} className={`hist-content anim ${history.visible ? "in" : ""}`}>
            <p className="hist-eyebrow">Our Story</p>
            <h2 className="hist-title">
              Rooted in<br /><em>Faith,</em><br />Driven by Grace
            </h2>
            <p className="hist-body">
              Hour of Grace Believers Ministry International was born out of a divine
              mandate — to bring men and women into the light of God's dear Son through
              the demonstration of Love and the Holy Spirit. Every gathering, every
              prayer, every act of service flows from this singular calling.
            </p>
            <div className={`hist-extra ${historyExpanded ? "open" : ""}`}>
              From its earliest days, this ministry has been a haven for the seeking
              soul — a place where the Holy Spirit moves freely and God's love is made
              tangible. We don't just preach the gospel; we live it through compassion,
              fellowship, and unwavering faith. Our vision continues to expand as we
              reach communities and touch lives with the transforming power of Christ.
            </div>
            <button className="hist-toggle" onClick={() => setHistoryExpanded(!historyExpanded)}>
              {historyExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right side: white + ribbon + logo — same motif as hero */}
          <div className="hist-visual">
            <svg className="hist-svg" viewBox="0 0 720 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hvR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#7B93F8" />
                  <stop offset="100%" stopColor="#1E2D9E" />
                </linearGradient>
              </defs>
              <path
                d="M-40 420 Q180 355 360 325 Q520 300 760 235 L760 292 Q520 358 360 385 Q180 415 -40 480 Z"
                fill="url(#hvR)"
              />
              <path
                d="M-40 420 Q180 355 360 325 Q520 300 760 235 L760 250 Q520 315 360 340 Q180 370 -40 435 Z"
                fill="rgba(255,255,255,0.18)"
              />
            </svg>

            <div className="hist-logo">
              <img src="/church_loog-removebg-preview.png" alt="Hour of Grace Logo" />
              <p className="hist-caption">
                Hour of Grace<br />Believers Ministry International
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}