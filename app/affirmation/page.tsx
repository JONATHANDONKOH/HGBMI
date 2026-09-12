"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

const affirmations = [
  {
    date: "Week 1",
    title: "I Am Covered By Grace",
    ref: "Ephesians 2:8",
    body: "I declare that I am saved by grace, not by my own works. Every mistake I've made is already covered by the blood of Jesus. Today I walk in freedom, not condemnation, because His grace is sufficient for me.",
  },
  {
    date: "Week 2",
    title: "My Faith Moves Mountains",
    ref: "Matthew 17:20",
    body: "No obstacle in front of me is bigger than the God who lives in me. I speak to every mountain of fear, delay, and doubt, and I command it to move. My faith is small like a seed, but it is planted in the power of God.",
  },
  {
    date: "Week 3",
    title: "I Walk In God's Favor",
    ref: "Psalm 5:12",
    body: "Favor surrounds me like a shield today. Doors that no man can open are opening for me, and doors that no man can shut are shutting behind me. I am blessed to be a blessing wherever I go.",
  },
  {
    date: "Week 4",
    title: "I Am Anointed For Purpose",
    ref: "Jeremiah 1:5",
    body: "Before I was formed, God knew me and set me apart for a purpose. I am not here by accident. The gifts and calling on my life are already working, and I move forward today in full confidence of who I was made to be.",
  },
  {
    date: "Week 5",
    title: "Peace Guards My Heart",
    ref: "Philippians 4:7",
    body: "I refuse anxiety and receive the peace of God, which surpasses all understanding. That peace stands guard over my heart and my mind today. Whatever tries to disturb me, I release to God and I remain unshaken.",
  },
  {
    date: "Week 6",
    title: "I Am More Than A Conqueror",
    ref: "Romans 8:37",
    body: "Through Christ who loves me, I am more than a conqueror over every trial. What was meant to defeat me is instead making me stronger. I rise today, not in my own strength, but in the victory already won for me.",
  },
]

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
          --blue:      #3A4FD8;
          --blue-mid:  #5068E8;
          --blue-lt:   #6B83F5;
          --gold:      #C9960A;
          --gold-lt:   #F5C842;
          --white:     #FFFFFF;
          --cream:     #FAF6EF;
          --cream-deep:#F3EDE2;
          --ink:       #111827;
          --muted:     #4B5563;
          --divider:   #E8E1D4;
          --border:    #D6CFC0;
          background: var(--cream);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
        }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes floatTilt {
          0%,100% { transform: translateY(0) rotateY(0deg) rotateX(0deg); }
          50%     { transform: translateY(-12px) rotateY(7deg) rotateX(-4deg); }
        }

        /* ═══════ HERO — matching About page exactly ═══════ */
        .afp-hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          background: var(--cream);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .afp-hero-svg {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none;
        }

        /* Hero logo — exact same treatment as About page */
        .afp-hero-logo {
          position: absolute;
          top: 50%;
          left: 60%;
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 0;
          perspective: 1000px;
        }
        .afp-hero-ready .afp-hero-logo { animation: fadeIn 0.9s ease 0.55s forwards; }
        .afp-hero-logo img {
          width: 600px;
          height: 800px;
          object-fit: contain;
          opacity: 0.6;
          filter: drop-shadow(0 8px 18px rgba(58,79,216,0.08)) drop-shadow(0 5px 10px rgba(17,24,39,0.05));
          transform-style: preserve-3d;
          animation: floatTilt 5s ease-in-out 1.5s infinite;
        }
        @media(max-width:768px){
          .afp-hero-logo {
            left: auto;
            right: 3.5rem;
            top: 2.75rem;
            transform: none;
          }
          .afp-hero-logo img { width: 200px; height: 267px; }
        }

        .afp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6.5rem 0 0 6rem;
          max-width: 540px;
          opacity: 0;
        }
        .afp-hero-ready .afp-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .afp-hero-text{padding:2rem 0 0 1.5rem;max-width:52vw;} }

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
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 700; line-height: .93;
          letter-spacing: -.02em; color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .afp-hero-title .t-blue { color: var(--blue); font-style: italic; }
        .afp-hero-title .t-gold { color: var(--gold); }

        /* Hero body — matching About page weight & color */
        .afp-hero-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--ink);
          font-weight: 400;
          max-width: 40ch;
          margin-bottom: 2rem;
        }

        /* Hero CTA button — same as About page */
        .afp-hero-cta {
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
          box-shadow: 0 8px 20px -8px rgba(58,79,216,0.55);
          transition:background .2s,transform .2s, box-shadow .2s;
        }
        .afp-hero-cta:hover { background:#2535b8; transform:translateY(-2px); box-shadow: 0 12px 26px -8px rgba(58,79,216,0.65); }

        /* Hero stats — same as About page */
        .afp-hero-stats {
          position:relative;
          z-index:5;
          margin-top:auto;
          padding:2.5rem 6rem;
          display:flex;
          gap:0;
          border-top: 1.5px solid var(--border);
          opacity:0;
        }
        .afp-hero-ready .afp-hero-stats { animation:fadeUp .7s ease 1s forwards; }
        @media(max-width:768px){ .afp-hero-stats{padding:2rem 1.5rem;flex-wrap:wrap;} }

        .afp-stat-item {
          padding: 0 3rem 0 0;
          margin-right: 3rem;
          border-right: 1.5px solid var(--border);
        }
        .afp-stat-item:last-child { border-right: none; margin-right: 0; }
        @media(max-width:768px){
          .afp-stat-item { padding: 0 1.5rem 0 0; margin-right: 1.5rem; }
        }

        .afp-stat-num {
          font-family:'Cormorant Garamond',serif;
          font-size:2.6rem;
          font-weight:700;
          color:var(--blue);
          line-height:1;
          display:block;
        }
        .afp-stat-lbl {
          font-size:.68rem;
          font-weight:600;
          letter-spacing:.1em;
          text-transform:uppercase;
          color:var(--ink);
          display:block;
          margin-top:.25rem;
        }

        /* Angled divider — same as About page */
        .afp-angle-divide {
          position: relative;
          height: 46px;
          overflow: hidden;
        }
        .afp-angle-divide::before {
          content: '';
          position: absolute;
          left: -5%;
          right: -5%;
          top: 0;
          height: 100%;
          background: linear-gradient(90deg, var(--blue) 0%, var(--blue-mid) 50%, var(--gold) 100%);
          transform: skewY(-2.2deg);
          transform-origin: top left;
          opacity: 0.9;
        }

        /* ═══════ AFFIRMATIONS BLOG — matching About theme ═══════ */
        .afp-body {
          position: relative;
          background: var(--cream);
          padding: 6rem;
          overflow: hidden;
          border-bottom: 1.5px solid var(--border);
        }
        @media(max-width:768px){ .afp-body{ padding:3.5rem 1.5rem; } }

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
          border-bottom: 2px solid var(--border);
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
          line-height: 1.1; color: var(--ink);
        }
        .afp-big-sym {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.5rem; font-weight: 700;
          color: var(--border); line-height: 1;
        }

        /* Blog grid */
        .afp-blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5px;
          background: var(--border);
          border: 1.5px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 18px 40px -24px rgba(58,79,216,0.35);
        }
        @media(max-width:900px){ .afp-blog-grid{ grid-template-columns: 1fr; } }

        .afp-post {
          background: #fff;
          padding: 2.75rem;
          display: flex;
          flex-direction: column;
          gap: .85rem;
          border-left: 3px solid transparent;
          transition: border-color .3s ease, transform .3s ease, box-shadow .3s ease, background .25s;
        }
        .afp-post:hover {
          border-left-color: var(--blue);
          transform: translateY(-4px);
          background: #F0F3FF;
          box-shadow: 0 24px 44px -26px rgba(58,79,216,0.28);
        }

        .afp-post-date {
          font-size: .66rem;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--blue);
        }
        .afp-post-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.15;
        }
        .afp-post-body {
          font-size: .92rem;
          line-height: 1.8;
          color: var(--muted);
          font-weight: 300;
        }
        .afp-post-ref {
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: .25rem;
        }

        /* ═══════ SCRIPTURE STRIP — restyled to match About palette ═══════ */
        .afp-strip {
          position: relative;
          background: var(--cream-deep);
          padding: 3.5rem 6rem;
          display: flex; align-items: center; gap: 2rem;
          border-bottom: 1.5px solid var(--border);
          overflow: hidden;
        }
        @media(max-width:768px){ .afp-strip{ padding:2.5rem 1.5rem; flex-direction:column; gap:1rem; } }

        .afp-strip-svg {
          position: absolute;
          inset: 0; width:100%; height:100%; pointer-events:none;
        }

        .afp-strip-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem; color: var(--border);
          line-height: 1; flex-shrink: 0;
          position: relative; z-index: 1;
        }
        .afp-strip-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1rem,1.8vw,1.35rem);
          color: var(--ink); line-height: 1.55;
          position: relative; z-index: 1;
        }
        .afp-strip-ref {
          display: block; margin-top: .5rem;
          font-family: 'Jost', sans-serif; font-style: normal;
          font-size: .62rem; font-weight: 600;
          letter-spacing: .16em; text-transform: uppercase;
          color: var(--blue);
        }
      `}</style>

      <div className="afp">
        <Navbar />

        {/* ══ HERO — now identical structure to About page ══ */}
        <section className={`afp-hero ${heroReady ? "afp-hero-ready" : ""}`}>
          <svg className="afp-hero-svg" viewBox="0 0 1440 780" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="afpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#5B76EC" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
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
              fill="url(#afpRib)"
            />
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
              "
              fill="rgba(255,255,255,0.2)"
            />
          </svg>

          {/* Hero logo — exact same treatment as About page */}
          <div className="afp-hero-logo">
            <img
              src="/shadowangel.png"
              alt="Hour of Grace Believers Ministry International"
            />
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
            <a href="#affirmations" className="afp-hero-cta">
              Read Affirmations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="afp-hero-stats">
            {[
              { num: "52",  label: "Weekly Words" },
              { num: "6",   label: "Core Affirmations" },
              { num: "365", label: "Days of Grace" },
            ].map(s => (
              <div className="afp-stat-item" key={s.label}>
                <span className="afp-stat-num">{s.num}</span>
                <span className="afp-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="afp-angle-divide" />

        {/* ══ AFFIRMATIONS BLOG ══ */}
        <section className="afp-body" id="affirmations">
          <svg className="afp-body-svg" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="afpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#afpBRib)" />
          </svg>

          <div className="afp-body-inner">
            <div className="afp-sec-head">
              <div>
                <p className="afp-sec-label">Words To Live By</p>
                <h2 className="afp-sec-title">Affirmations</h2>
              </div>
              <span className="afp-big-sym">✦</span>
            </div>

            <div className="afp-blog-grid">
              {affirmations.map((a) => (
                <article className="afp-post" key={a.title}>
                  <span className="afp-post-date">{a.date}</span>
                  <h3 className="afp-post-title">{a.title}</h3>
                  <p className="afp-post-body">{a.body}</p>
                  <span className="afp-post-ref">{a.ref}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SCRIPTURE STRIP — restyled to match About palette ══ */}
        <div className="afp-strip">
          <svg className="afp-strip-svg" viewBox="0 0 1440 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="afpSRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 130 Q360 90 720 105 Q1080 120 1540 60 L1540 100 Q1080 160 720 145 Q360 130 -80 170 Z" fill="url(#afpSRib)" />
          </svg>
          <span className="afp-strip-mark">"</span>
          <p className="afp-strip-text">
            Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right —
            think about such things, and the God of peace will be with you.
            <span className="afp-strip-ref">Philippians 4:8 – 9</span>
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
}