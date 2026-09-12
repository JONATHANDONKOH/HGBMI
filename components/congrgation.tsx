export default function Congregation() {
  return (
    <>
      <style>{`
        .dhs-section {
          position: relative;
          background: radial-gradient(
            ellipse 900px 700px at 78% 60%,
            #16306e 0%,
            #0b1330 32%,
            #06091c 58%,
            #020308 82%,
            #000000 100%
          );
          padding: 7rem 6rem;
          overflow: hidden;
          color: #fff;
        }
        @media(max-width:900px){ .dhs-section{ padding: 4rem 1.5rem; } }

        .dhs-ribbon {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .dhs-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 4rem;
          align-items: center;
        }
        @media(max-width:900px){ .dhs-grid{ grid-template-columns: 1fr; gap: 3rem; } }

        .dhs-text {
          position: relative;
          z-index: 10;
          max-width: 520px;
        }

        .dhs-eyebrow {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #8FA3FF;
          display: flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: 1.25rem;
        }
        .dhs-eyebrow::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background:#C9960A;
        }

        .dhs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 1.75rem;
        }
        .dhs-title em { font-style: italic; color: #7B93F8; }

        .dhs-body {
          font-size: .92rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.8);
          font-weight: 300;
          margin-bottom: 1.25rem;
        }

        /* ── Visual: landscape frames with safe margins so nothing clips ── */
        .dhs-visual {
          position: relative;
          height: 480px;
          padding: 2%;
          perspective: 1400px;
          z-index: 1;
        }
        @media(max-width:900px){ .dhs-visual{ height: 400px; margin-top: 1rem; } }
        @media(max-width:600px){ .dhs-visual{ height: 300px; } }

        .dhs-photo {
          position: absolute;
          border-radius: 14px;
          overflow: hidden;
          will-change: transform, opacity, filter;
          animation: dhsIterate 12s cubic-bezier(0.65,0,0.35,1) infinite;
        }
        .dhs-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .dhs-photo:hover {
          animation-play-state: paused;
          opacity: 1 !important;
          transform: scale(1.05) translateY(-8px) rotate(0deg) !important;
          filter: brightness(1) saturate(1) !important;
          z-index: 20 !important;
        }

        /* Smooth eased "spotlight" cycle — no hard pops, no z-index snapping */
        @keyframes dhsIterate {
          0%   { opacity: .55; transform: scale(.96) translateY(6px) rotate(var(--r, 0deg)); filter: brightness(.62) saturate(.85); box-shadow: 0 18px 36px -18px rgba(0,0,0,.55); z-index: 1; }
          8%   { opacity: .8;  transform: scale(1) translateY(0) rotate(calc(var(--r, 0deg) / 2)); filter: brightness(.85) saturate(.92); box-shadow: 0 24px 46px -18px rgba(0,0,0,.55); z-index: 5; }
          16%  { opacity: 1;   transform: scale(1.045) translateY(-6px) rotate(0deg); filter: brightness(1) saturate(1); box-shadow: 0 36px 70px -20px rgba(58,79,216,.5), 0 14px 30px -10px rgba(0,0,0,.55); z-index: 10; }
          34%  { opacity: 1;   transform: scale(1.045) translateY(-6px) rotate(0deg); filter: brightness(1) saturate(1); box-shadow: 0 36px 70px -20px rgba(58,79,216,.5), 0 14px 30px -10px rgba(0,0,0,.55); z-index: 10; }
          42%  { opacity: .8;  transform: scale(1) translateY(0) rotate(calc(var(--r, 0deg) / 2)); filter: brightness(.85) saturate(.92); box-shadow: 0 24px 46px -18px rgba(0,0,0,.55); z-index: 5; }
          50%  { opacity: .55; transform: scale(.96) translateY(6px) rotate(var(--r, 0deg)); filter: brightness(.62) saturate(.85); box-shadow: 0 18px 36px -18px rgba(0,0,0,.55); z-index: 1; }
          100% { opacity: .55; transform: scale(.96) translateY(6px) rotate(var(--r, 0deg)); filter: brightness(.62) saturate(.85); box-shadow: 0 18px 36px -18px rgba(0,0,0,.55); z-index: 1; }
        }

        /* Landscape frames so wide group/congregation shots aren't cropped down to a sliver */
        .dhs-photo-1 {
          --r: -5deg;
          width: 320px; height: 220px;
          top: 4%; left: 2%;
          animation-delay: 0s;
        }
        .dhs-photo-2 {
          --r: 3deg;
          width: 360px; height: 250px;
          top: 42%; left: 26%;
          animation-delay: 4s;
        }
        .dhs-photo-3 {
          --r: 5deg;
          width: 300px; height: 208px;
          top: 2%; right: 2%;
          animation-delay: 8s;
        }
        @media(max-width:900px){
          .dhs-photo-1 { width: 260px; height: 180px; }
          .dhs-photo-2 { width: 290px; height: 200px; top: 46%; left: 20%; }
          .dhs-photo-3 { width: 240px; height: 168px; }
        }
        @media(max-width:600px){
          .dhs-photo-1 { width: 190px; height: 132px; left: 0; top: 0; }
          .dhs-photo-2 { width: 210px; height: 146px; left: 16%; top: 42%; }
          .dhs-photo-3 { width: 170px; height: 120px; right: 0; top: 6%; }
        }
      `}</style>

      <section className="dhs-section">
        <svg
          className="dhs-ribbon"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dhsRib" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3A4FD8" stopOpacity="0" />
              <stop offset="60%" stopColor="#3A4FD8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7B93F8" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="
              M -100 560
              Q 200 480 480 430
              Q 760 380 1040 300
              Q 1300 230 1540 150
              L 1540 230
              Q 1300 300 1040 370
              Q 760 450 480 500
              Q 200 550 -100 640
              Z
            "
            fill="url(#dhsRib)"
          />
        </svg>

        <div className="dhs-grid">
          <div className="dhs-text">
            <p className="dhs-eyebrow">Our Story</p>
            <h2 className="dhs-title">
              Rooted in<br /><em>Faith,</em><br />Driven by Grace
            </h2>
            <p className="dhs-body">
              Hour of Grace Believers Ministry International was born out of a divine
              mandate — to bring men and women into the light of God's dear Son through
              the demonstration of Love and the Holy Spirit. Every gathering, every
              prayer, every act of service flows from this singular calling.
            </p>
            <p className="dhs-body">
              From its earliest days, this ministry has been a haven for the seeking
              soul — a place where the Holy Spirit moves freely and God's love is made
              tangible. We don't just preach the gospel; we live it through compassion,
              fellowship, and unwavering faith. Our vision continues to expand as we
              reach communities and touch lives with the transforming power of Christ.
            </p>
          </div>

          <div className="dhs-visual">
            <div className="dhs-photo dhs-photo-1">
              <img src="/cong.jpg" alt="Congregation" />
            </div>
            <div className="dhs-photo dhs-photo-2">
              <img src="/quire.jpg" alt="Choir" />
            </div>
            <div className="dhs-photo dhs-photo-3">
              <img src="/marry.jpg" alt="Wedding ceremony" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}