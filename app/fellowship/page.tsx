import Link from "next/link"
import { Users, MapPin, Heart, BookOpen, Clock, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

const fellowships = [
  {
    name: "Pleroma Fellowship",
    slug: "pleroma",
    location: "Lashibi",
    image: "/quire.jpg",
    description: "Uplifting worship through music and praise.",
    meetingDays: "Every Sunday, 9:00 AM",
    num: "01",
  },
  {
    name: "Light Fellowship",
    slug: "light",
    location: "Accra Technical University",
    image: "/attuu.jpeg",
    description: "Guiding young hearts in faith and joy.",
    meetingDays: "Every Thursday, 6:00 PM",
    num: "02",
  },
  {
    name: "Klagon Fellowship",
    slug: "klagon",
    location: "Klagon",
    image: "/vhh.jpg",
    description: "Empowering students with spiritual growth.",
    meetingDays: "Every Wednesday, 7:00 PM",
    num: "03",
  },
  {
    name: "Nungua Fellowship",
    slug: "nungua",
    location: "Nungua",
    image: "/kyt.jpg",
    description: "Building community through shared faith.",
    meetingDays: "Every Tuesday, 5:30 PM",
    num: "04",
  },
  {
    name: "WorldLove Fellowship",
    slug: "youth-fellowship",
    location: "University of Professional Studies",
    image: "/worldlove.jpg",
    description: "Spreading God's love to the world through vibrant community and spiritual growth.",
    meetingDays: "Every Tuesday, 7:00 PM",
    num: "05",
  },
  {
    name: "Faith Fellowship",
    slug: "FAITH-fellowship",
    location: "Ghana Communication Technology University",
    image: "/faith.jpg",
    description: "Empowering believers through prayer, study, and mutual support in faith.",
    meetingDays: "Every Monday, 7:00 PM",
    num: "06",
  },
  {
    name: "Life Fellowship",
    slug: "Life-fellowship",
    location: "University of Professional Studies",
    image: "/life.jpg",
    description: "Experiencing abundant life in Christ through fellowship and biblical teachings.",
    meetingDays: "Mondays & Tuesdays, 7:00 PM",
    num: "07",
  },
  {
    name: "Spirit's Fellowship",
    slug: "Spririt-fellowship",
    location: "Accra Technical University",
    image: "/spirit.jpg",
    description: "Filled with the Holy Spirit, nurturing hearts with God's love and faith-based activities.",
    meetingDays: "Tuesdays & Saturdays",
    num: "08",
  },
]

const categories = [
  { icon: Heart,    label: "Youth Fellowships", desc: "For young adults seeking spiritual growth and community" },
  { icon: Users,    label: "Adult Groups",       desc: "Professional and family-focused fellowship communities" },
  { icon: BookOpen, label: "Study Groups",       desc: "Bible study and spiritual development fellowships" },
  { icon: Star,     label: "Special Interest",   desc: "Music, prayer, and ministry-focused fellowships" },
]

const whyItems = [
  { icon: Clock,  label: "Regular Meetings",  desc: "Weekly gatherings for worship and fellowship" },
  { icon: Users,  label: "Community Support", desc: "Build lasting relationships with fellow believers" },
  { icon: Heart,  label: "Spiritual Growth",  desc: "Deepen your faith through study and prayer" },
]

export default function FellowshipPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .fp {
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

        /* ═══════ HERO ═══════ */
        .fp-hero {
          position: relative;
          width: 100%;
          min-height: 68vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          animation: fadeUp .8s ease .1s both;
        }
        .fp-hero-svg {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none;
        }
        .fp-hero-text {
          position: relative;
          z-index: 5;
          padding: 6rem 0 4rem 6rem;
          max-width: 620px;
        }
        @media(max-width:768px){ .fp-hero-text{ padding: 5rem 0 3rem 1.5rem; max-width:92vw; } }

        .fp-eyebrow {
          display: flex; align-items: center; gap: .75rem;
          font-size: .62rem; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue); margin-bottom: 1.25rem;
        }
        .fp-eyebrow::before {
          content:''; display:inline-block;
          width:2rem; height:2px; background:var(--gold);
        }
        .fp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem,8vw,7.5rem);
          font-weight: 700; line-height: .92;
          letter-spacing: -.02em; color: var(--ink); margin-bottom: 1.5rem;
        }
        .fp-hero-title .t-blue { color:var(--blue); font-style:italic; }
        .fp-hero-title .t-gold { color:var(--gold); }

        .fp-hero-body {
          font-size:1rem; line-height:1.75;
          color:var(--muted); font-weight:300; max-width:44ch;
        }
        .fp-hero-deco {
          position:absolute; right:6rem; top:50%;
          transform:translateY(-50%);
          z-index:3; pointer-events:none; text-align:center;
          animation: fadeIn 1s ease .7s both;
        }
        @media(max-width:900px){ .fp-hero-deco{ display:none; } }
        .fp-deco-num {
          font-family:'Cormorant Garamond',serif;
          font-size:9rem; font-weight:700;
          color:var(--divider); line-height:1; display:block;
        }
        .fp-deco-lbl {
          font-size:.62rem; font-weight:600;
          letter-spacing:.2em; text-transform:uppercase; color:var(--muted);
        }

        /* ═══════ SHARED SECTION UTILS ═══════ */
        .fp-sec-label {
          font-size:.62rem; font-weight:600;
          letter-spacing:.22em; text-transform:uppercase;
          color:var(--blue); display:flex; align-items:center;
          gap:.6rem; margin-bottom:.75rem;
        }
        .fp-sec-label::before {
          content:''; display:inline-block;
          width:1.75rem; height:2px; background:var(--gold);
        }
        .fp-sec-title {
          font-family:'Cormorant Garamond',serif;
          font-size:2.4rem; font-weight:700;
          line-height:1.08; color:var(--ink);
        }
        .fp-sec-head {
          display:flex; align-items:flex-end;
          justify-content:space-between;
          margin-bottom:2.5rem; padding-bottom:1.5rem;
          border-bottom:1.5px solid var(--divider);
        }
        .fp-big-num {
          font-family:'Cormorant Garamond',serif;
          font-size:5.5rem; font-weight:700;
          color:var(--divider); line-height:1;
        }

        /* ═══════ FELLOWSHIP CARDS ═══════ */
        .fp-cards-section {
          position:relative;
          background:#F8F9FF;
          padding:5rem 6rem 6rem;
          overflow:hidden;
        }
        @media(max-width:768px){ .fp-cards-section{ padding:3rem 1.5rem 4rem; } }

        .fp-ribbon-bg {
          position:absolute; inset:0;
          width:100%; height:100%; pointer-events:none;
        }

        /* 4-column grid */
        .fp-grid {
          position:relative; z-index:1;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:1.5px;
          background:var(--divider);
        }
        @media(max-width:1100px){ .fp-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:560px) { .fp-grid{ grid-template-columns:1fr; } }

        /* Card */
        .fp-card {
          background:#fff;
          display:flex; flex-direction:column;
          align-items:center;
          text-decoration:none; color:inherit;
          padding:2.25rem 1.75rem 2rem;
          position:relative; overflow:hidden;
          transition:background .25s, transform .2s;
          text-align:center;
        }
        .fp-card::after {
          content:''; position:absolute;
          bottom:0; left:0; width:0; height:3px;
          background:var(--blue);
          transition:width .35s ease;
        }
        .fp-card:hover::after { width:100%; }
        .fp-card:hover { background:#F0F3FF; transform:translateY(-5px); }

        /* Round portrait — big enough to see faces */
        .fp-card-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--blue);
          margin-bottom: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(58,79,216,0.18);
          transition: border-color .25s, box-shadow .25s;
          background: var(--divider);
        }
        .fp-card:hover .fp-card-avatar {
          border-color: var(--gold);
          box-shadow: 0 6px 28px rgba(201,150,10,0.22);
        }
        .fp-card-avatar img {
          width:100%; height:100%;
          object-fit:cover;
          object-position:center top; /* push toward face */
          display:block;
          transition:transform .35s ease;
        }
        .fp-card:hover .fp-card-avatar img { transform:scale(1.07); }

        .fp-card-num {
          font-family:'Cormorant Garamond',serif;
          font-size:1.1rem; font-weight:700;
          color:var(--divider); line-height:1;
          margin-bottom:.5rem;
        }
        .fp-card-name {
          font-family:'Cormorant Garamond',serif;
          font-size:1.3rem; font-weight:700;
          color:var(--ink); line-height:1.2;
          margin-bottom:.4rem;
        }
        .fp-card-location {
          display:flex; align-items:center;
          justify-content:center;
          gap:.35rem;
          font-size:.7rem; font-weight:500;
          color:var(--blue); letter-spacing:.04em;
          margin-bottom:.85rem;
        }
        .fp-card-desc {
          font-size:.8rem; color:var(--muted);
          line-height:1.65; font-weight:300;
          margin-bottom:1rem;
        }
        .fp-card-meeting {
          display:flex; align-items:center;
          justify-content:center;
          gap:.4rem;
          font-size:.68rem; font-weight:500;
          color:var(--muted); letter-spacing:.03em;
          margin-bottom:1.25rem;
        }
        .fp-card-cta {
          display:inline-flex; align-items:center;
          gap:.5rem;
          background:none;
          border:1.5px solid var(--blue);
          color:var(--blue);
          font-size:.68rem; font-weight:600;
          letter-spacing:.12em; text-transform:uppercase;
          padding:.55rem 1.25rem;
          text-decoration:none;
          transition:background .2s, color .2s;
        }
        .fp-card:hover .fp-card-cta {
          background:var(--blue); color:#fff;
        }

        /* ═══════ CATEGORIES ═══════ */
        .fp-cat-section {
          background:#fff;
          padding:5rem 6rem;
          overflow:hidden; position:relative;
        }
        @media(max-width:768px){ .fp-cat-section{ padding:3rem 1.5rem; } }

        .fp-cat-grid {
          position:relative; z-index:1;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:1.5px; background:var(--divider);
        }
        @media(max-width:900px){ .fp-cat-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:500px){ .fp-cat-grid{ grid-template-columns:1fr; } }

        .fp-cat-card {
          background:#fff; padding:2.5rem 2rem;
          display:flex; flex-direction:column;
          align-items:flex-start; gap:1rem;
          position:relative; overflow:hidden;
          transition:background .25s;
        }
        .fp-cat-card::before {
          content:''; position:absolute;
          top:0; left:0; width:3px; height:0;
          background:var(--gold); transition:height .35s ease;
        }
        .fp-cat-card:hover::before { height:100%; }
        .fp-cat-card:hover { background:#F8F9FF; }

        .fp-cat-icon {
          width:48px; height:48px; border-radius:2px;
          background:var(--divider);
          display:flex; align-items:center; justify-content:center;
          color:var(--blue); transition:background .2s, color .2s;
        }
        .fp-cat-card:hover .fp-cat-icon { background:var(--blue); color:#fff; }

        .fp-cat-label {
          font-family:'Cormorant Garamond',serif;
          font-size:1.35rem; font-weight:700; color:var(--ink);
        }
        .fp-cat-desc {
          font-size:.82rem; color:var(--muted);
          line-height:1.65; font-weight:300;
        }

        /* ═══════ JOIN ═══════ */
        .fp-join-section {
          position:relative; background:var(--blue);
          padding:5rem 6rem; overflow:hidden;
        }
        @media(max-width:768px){ .fp-join-section{ padding:3rem 1.5rem; } }

        .fp-join-ribbon {
          position:absolute; inset:0;
          width:100%; height:100%; pointer-events:none;
        }
        .fp-join-inner { position:relative; z-index:1; }

        .fp-join-head {
          display:flex; align-items:flex-end;
          justify-content:space-between;
          margin-bottom:3rem; padding-bottom:1.5rem;
          border-bottom:1.5px solid rgba(255,255,255,0.15);
        }
        .fp-join-eyebrow {
          font-size:.62rem; font-weight:600;
          letter-spacing:.22em; text-transform:uppercase;
          color:var(--gold-lt);
          display:flex; align-items:center;
          gap:.6rem; margin-bottom:.75rem;
        }
        .fp-join-eyebrow::before {
          content:''; display:inline-block;
          width:1.75rem; height:2px; background:var(--gold-lt);
        }
        .fp-join-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2rem,4vw,3.2rem);
          font-weight:700; line-height:1.05; color:#fff;
        }
        .fp-join-title em { font-style:italic; color:var(--gold-lt); }

        .fp-join-big {
          font-family:'Cormorant Garamond',serif;
          font-size:5.5rem; font-weight:700;
          color:rgba(255,255,255,0.1); line-height:1;
        }

        .fp-why-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1.5px;
          background:rgba(255,255,255,0.12);
        }
        @media(max-width:768px){ .fp-why-grid{ grid-template-columns:1fr; } }

        .fp-why-card {
          background:rgba(255,255,255,0.06);
          padding:2.5rem 2rem;
          display:flex; flex-direction:column; gap:1rem;
          transition:background .25s;
        }
        .fp-why-card:hover { background:rgba(255,255,255,0.12); }

        .fp-why-icon {
          width:48px; height:48px; border-radius:2px;
          background:rgba(201,150,10,0.2);
          display:flex; align-items:center; justify-content:center;
          color:var(--gold-lt);
        }
        .fp-why-label {
          font-family:'Cormorant Garamond',serif;
          font-size:1.35rem; font-weight:700; color:#fff;
        }
        .fp-why-desc {
          font-size:.82rem; color:rgba(255,255,255,0.65);
          line-height:1.65; font-weight:300;
        }
      `}</style>

      <div className="fp">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="fp-hero">
          <svg className="fp-hero-svg" viewBox="0 0 1440 580" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 158 L 1305 224 Q 1085 282, 875 325 Q 665 368, 430 406 Q 170 448, -100 522 Z" fill="url(#fpRib)" />
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 118 L 1302 185 Q 1082 245, 872 288 Q 662 330, 422 368 Q 162 408, -100 478 Z" fill="rgba(255,255,255,0.18)" />
          </svg>

          <div className="fp-hero-deco">
            <span className="fp-deco-num">{String(fellowships.length).padStart(2,'0')}</span>
            <span className="fp-deco-lbl">Fellowships</span>
          </div>

          <div className="fp-hero-text">
            <p className="fp-eyebrow">Hour of Grace Believers Ministry International</p>
            <h1 className="fp-hero-title">
              Our<br />
              <span className="t-blue">Fellowship</span><br />
              <span className="t-gold">Communities</span>
            </h1>
            <p className="fp-hero-body">
              Join our vibrant fellowship communities and grow in faith together —
              discover your spiritual home among our diverse groups dedicated to
              worship, learning, and service.
            </p>
          </div>
        </section>

        {/* ══ FELLOWSHIP CARDS ══ */}
        <section className="fp-cards-section">
          <svg className="fp-ribbon-bg" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#fpBRib)" />
          </svg>

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="fp-sec-head">
              <div>
                <p className="fp-sec-label">All Fellowships</p>
                <h2 className="fp-sec-title">Our Communities</h2>
              </div>
              <span className="fp-big-num">{String(fellowships.length).padStart(2,'0')}</span>
            </div>

            <div className="fp-grid">
              {fellowships.map((f) => (
                <Link key={f.slug} href={`/fellowship/${f.slug}`} className="fp-card">
                  {/* Round avatar — object-position top to show faces */}
                  <div className="fp-card-avatar">
                    <img src={f.image} alt={f.name} />
                  </div>

                  <span className="fp-card-num">{f.num}</span>
                  <p className="fp-card-name">{f.name}</p>
                  <p className="fp-card-location">
                    <MapPin size={11} />
                    {f.location}
                  </p>
                  <p className="fp-card-desc">{f.description}</p>
                  <p className="fp-card-meeting">
                    <Clock size={11} />
                    {f.meetingDays}
                  </p>
                  <span className="fp-card-cta">
                    Learn More <Users size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CATEGORIES ══ */}
        <section className="fp-cat-section">
          <svg className="fp-ribbon-bg" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fpCRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path d="M-80 300 Q360 240 720 258 Q1080 278 1540 175 L1540 228 Q1080 330 720 312 Q360 294 -80 352 Z" fill="url(#fpCRib)" />
          </svg>

          <div className="fp-sec-head" style={{ position:'relative', zIndex:1 }}>
            <div>
              <p className="fp-sec-label">Fellowship Types</p>
              <h2 className="fp-sec-title">Categories</h2>
            </div>
            <span className="fp-big-num">04</span>
          </div>

          <div className="fp-cat-grid">
            {categories.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="fp-cat-card">
                <div className="fp-cat-icon"><Icon size={22} /></div>
                <p className="fp-cat-label">{label}</p>
                <p className="fp-cat-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ JOIN ══ */}
        <section className="fp-join-section">
          <svg className="fp-join-ribbon" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M-80 310 Q360 250 720 268 Q1080 288 1540 185 L1540 240 Q1080 342 720 324 Q360 306 -80 364 Z" fill="rgba(255,255,255,0.05)" />
          </svg>

          <div className="fp-join-inner">
            <div className="fp-join-head">
              <div>
                <p className="fp-join-eyebrow">Take the Next Step</p>
                <h2 className="fp-join-title">
                  Ready to Join a<br /><em>Fellowship?</em>
                </h2>
              </div>
              <span className="fp-join-big">✝</span>
            </div>

            <div className="fp-why-grid">
              {whyItems.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="fp-why-card">
                  <div className="fp-why-icon"><Icon size={22} /></div>
                  <p className="fp-why-label">{label}</p>
                  <p className="fp-why-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}