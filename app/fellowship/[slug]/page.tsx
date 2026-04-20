import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MessageCircle, MapPin, BookOpen, Clock } from 'lucide-react'
import Footer from "@/components/Footer"

const fellowships = [
  {
    name: "Pleroma Fellowship",
    slug: "pleroma",
    location: "Lashibi",
    address: "Lashibi, Accra",
    image: "/quire.jpg",
    communityImage: "/quire.jpg",
    description: "Uplifting worship through music and praise.",
    whatsapp: "+233 271645202",
    phone: "+233 271645202",
    email: "spintex@hgbmi.org",
    policies: "Open to all. Focus on worship and praise.",
    meetingDays: "Every Sunday, 9:00 AM",
    teachings: ["Worship", "Music Ministry", "Praise"],
    foundationSchool: { time: "Saturdays, 10:00 AM - 12:00 PM", location: "Lashibi Hall" },
    num: "01",
  },
  {
    name: "Light Fellowship",
    slug: "light",
    location: "Light Ministry",
    address: "Accra Technical University, Accra, Ghana",
    image: "/attuu.jpeg",
    communityImage: "/light.jpeg",
    description: "Guiding young hearts in faith and joy.",
    whatsapp: "+233 509772930",
    phone: "+233 509772930",
    email: "rlordson45@gmail.com",
    policies: "Open to students. Focus on youth ministry.",
    meetingDays: "Every Thursday, 6:00 PM",
    teachings: ["Youth Ministry", "Faith Development", "Campus Outreach"],
    foundationSchool: { time: "Sundays, 2:00 PM - 4:00 PM", location: "Campus Hall" },
    num: "02",
  },
  {
    name: "Klagon Fellowship",
    slug: "klagon",
    location: "Klagon",
    address: "Klagon, Accra",
    image: "/vhh.jpg",
    communityImage: "/klagg.jpeg",
    description: "Empowering students with spiritual growth.",
    whatsapp: "+233 206821255",
    phone: "+233 206821255",
    email: "teikoteyem@gmail.com",
    policies: "Open to all students. Focus on spiritual empowerment.",
    meetingDays: "Every Wednesday, 7:00 PM",
    teachings: ["Spiritual Growth", "Student Ministry", "Academic Excellence"],
    foundationSchool: { time: "Saturdays, 9:00 AM - 11:00 AM", location: "Klagon Hall" },
    num: "03",
  },
  {
    name: "Nungua Fellowship",
    slug: "nungua",
    location: "Nungua",
    address: "Nungua, Accra",
    image: "/kyt.jpg",
    communityImage: "/kyt.jpg",
    description: "Building community through shared faith.",
    whatsapp: "+233 246148032",
    phone: "+233 246148032",
    email: "nungua@hgbmi.org",
    policies: "Open to all. Focus on community building.",
    meetingDays: "Every Tuesday, 5:30 PM",
    teachings: ["Community", "Fellowship", "Faith Building"],
    foundationSchool: { time: "Saturdays, 3:00 PM - 5:00 PM", location: "Nungua Hall" },
    num: "04",
  },
  {
    name: "WorldLove Fellowship",
    slug: "youth-fellowship",
    location: "Campus Ministry",
    address: "University of Professional Studies, Accra",
    image: "/worldlove.jpg",
    communityImage: "/mem-world.jpg",
    description: "Spreading God's love to the world through vibrant community and spiritual growth.",
    whatsapp: "+233 271645202",
    phone: "+233 271645202",
    email: "ekowdadzie1234@gmail.com",
    policies: "Members must be between 18-35 years old. Regular attendance required.",
    meetingDays: "Every Tuesday, 7:00 PM - 8:00 PM",
    teachings: ["Spiritual Growth", "Leadership Development", "Community Service"],
    foundationSchool: { time: "Saturdays, 10:00 AM - 12:00 PM", location: "Campus Ministry Hall" },
    num: "05",
  },
  {
    name: "Faith Fellowship",
    slug: "FAITH-fellowship",
    location: "Ghana Communication Technology University",
    address: "HGBMI Main Church, Lashibi, Accra",
    image: "/faith.jpg",
    communityImage: "/faith comm.jpg",
    description: "Empowering believers through prayer, study, and mutual support in faith.",
    whatsapp: "+233 209169568",
    phone: "+233 209169568",
    email: "aryeeaaron1360@gmail.com",
    policies: "Open to all believers. Focus on spiritual empowerment and community.",
    meetingDays: "Every Monday, 7:00 PM",
    teachings: ["Foundation School"],
    foundationSchool: { time: "Sundays, 2:00 PM - 4:00 PM", location: "Main Sanctuary" },
    num: "06",
  },
  {
    name: "Life Fellowship",
    slug: "Life-fellowship",
    location: "Fellowship Hall",
    address: "HGBMI Fellowship Hall, Accra",
    image: "/life.jpg",
    communityImage: "/life comm.jpg",
    description: "Experiencing abundant life in Christ through fellowship and biblical teachings.",
    whatsapp: "+233 201159482",
    phone: "+233 201159482",
    email: "pkayrulestheworld@gmail.com",
    policies: "Open to all. Emphasis on leadership and service.",
    meetingDays: "Mondays & Tuesdays, 7:00 PM",
    teachings: ["Biblical Manhood", "Leadership", "Family Responsibilities"],
    foundationSchool: { time: "Saturdays, 9:00 AM - 11:00 AM", location: "University of Professional Studies" },
    num: "07",
  },
  {
    name: "Spirit's Fellowship",
    slug: "Spririt-fellowship",
    location: "Accra Technical University",
    address: "Accra",
    image: "/atuuu.jpg",
    communityImage: "/OMA.jpeg",
    description: "Filled with the Holy Spirit, nurturing hearts with God's love and faith-based activities.",
    whatsapp: "+233 538746203",
    phone: "+233 538746203",
    email: "antwipokyere@gmail.com",
    policies: "All are welcome.",
    meetingDays: "Tuesdays & Saturdays",
    teachings: ["Bible Stories", "Christian Values", "Faith Activities"],
    foundationSchool: { time: "", location: "Kids Zone" },
    num: "08",
  },
]

interface FellowshipPageProps {
  params: Promise<{ slug: string }>
}

export default async function FellowshipDetailPage({ params }: FellowshipPageProps) {
  const { slug } = await params
  const fellowship = fellowships.find(f => f.slug === slug)
  if (!fellowship) notFound()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .fdp {
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
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        /* ═══════ HERO ═══════ */
        .fdp-hero {
          position: relative;
          min-height: 72vh;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fdp-hero-svg {
          position: absolute;
          inset: 0; width:100%; height:100%;
          pointer-events: none;
        }

        /* Back link */
        .fdp-back {
          position: absolute;
          top: 2rem; left: 6rem;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          font-size: .72rem;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--blue);
          text-decoration: none;
          transition: gap .2s;
        }
        .fdp-back:hover { gap: .8rem; }
        @media(max-width:768px){ .fdp-back{ left:1.5rem; } }

        /* Hero layout: text left, portrait right */
        .fdp-hero-inner {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 7rem 6rem 4rem;
          gap: 4rem;
          animation: fadeUp .8s ease .15s both;
        }
        @media(max-width:900px){
          .fdp-hero-inner { grid-template-columns:1fr; padding:7rem 1.5rem 3rem; gap:2.5rem; }
        }

        .fdp-eyebrow {
          display: flex; align-items: center; gap: .75rem;
          font-size: .62rem; font-weight: 600;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue); margin-bottom: 1.25rem;
        }
        .fdp-eyebrow::before {
          content:''; display:inline-block;
          width:2rem; height:2px; background:var(--gold);
        }

        .fdp-hero-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 700;
          color: var(--divider); margin-bottom: .5rem;
          display: block;
        }

        .fdp-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem,6vw,5.5rem);
          font-weight: 700; line-height: .95;
          letter-spacing: -.02em; color: var(--ink);
          margin-bottom: 1.25rem;
        }
        .fdp-hero-title em { font-style:italic; color:var(--blue); }

        .fdp-hero-desc {
          font-size: 1rem; line-height: 1.75;
          color: var(--muted); font-weight: 300;
          max-width: 42ch; margin-bottom: 1.5rem;
        }

        .fdp-hero-loc {
          display: flex; align-items: center; gap: .5rem;
          font-size: .78rem; font-weight: 600;
          letter-spacing: .06em; color: var(--blue);
          text-transform: uppercase;
        }

        /* Portrait */
        .fdp-portrait-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fdp-portrait {
          width: 260px; height: 260px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--blue);
          box-shadow:
            0 0 0 8px rgba(58,79,216,0.1),
            0 20px 60px rgba(58,79,216,0.2);
          animation: float 4s ease-in-out 1s infinite;
        }
        .fdp-portrait img {
          width:100%; height:100%;
          object-fit:cover;
          object-position:center top;
        }
        @media(max-width:900px){
          .fdp-portrait { width:180px; height:180px; }
          .fdp-portrait-wrap { justify-content:flex-start; }
        }

        /* ═══════ COMMUNITY IMAGE ═══════ */
        .fdp-community {
          position: relative;
          overflow: hidden;
        }
        .fdp-community img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .fdp-community-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,36,140,0.75) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 3rem 6rem;
        }
        @media(max-width:768px){ .fdp-community-overlay{ padding:2rem 1.5rem; } }

        .fdp-community-caption {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem,4vw,3rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
        }
        .fdp-community-caption em { font-style:italic; color:var(--gold-lt); }

        /* ═══════ DETAILS SECTION ═══════ */
        .fdp-details {
          position: relative;
          background: #F8F9FF;
          padding: 5rem 6rem 6rem;
          overflow: hidden;
        }
        @media(max-width:768px){ .fdp-details{ padding:3rem 1.5rem 4rem; } }

        .fdp-ribbon {
          position: absolute; inset:0;
          width:100%; height:100%; pointer-events:none;
        }

        .fdp-details-inner { position:relative; z-index:1; }

        .fdp-sec-head {
          display:flex; align-items:flex-end;
          justify-content:space-between;
          margin-bottom:2.5rem; padding-bottom:1.5rem;
          border-bottom:1.5px solid var(--divider);
        }
        .fdp-sec-label {
          font-size:.62rem; font-weight:600;
          letter-spacing:.22em; text-transform:uppercase;
          color:var(--blue); display:flex; align-items:center;
          gap:.6rem; margin-bottom:.75rem;
        }
        .fdp-sec-label::before {
          content:''; display:inline-block;
          width:1.75rem; height:2px; background:var(--gold);
        }
        .fdp-sec-title {
          font-family:'Cormorant Garamond',serif;
          font-size:2.4rem; font-weight:700;
          line-height:1.08; color:var(--ink);
        }
        .fdp-big-num {
          font-family:'Cormorant Garamond',serif;
          font-size:5.5rem; font-weight:700;
          color:var(--divider); line-height:1;
        }

        /* 3-column detail grid */
        .fdp-detail-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.5px;
          background: var(--divider);
        }
        @media(max-width:900px){ .fdp-detail-grid{ grid-template-columns:1fr; } }

        .fdp-detail-card {
          background: #fff;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          overflow: hidden;
          transition: background .25s;
        }
        .fdp-detail-card::before {
          content:''; position:absolute;
          top:0; left:0; width:3px; height:0;
          background:var(--gold); transition:height .35s ease;
        }
        .fdp-detail-card:hover::before { height:100%; }
        .fdp-detail-card:hover { background:#F0F3FF; }

        .fdp-detail-icon {
          width:48px; height:48px; border-radius:2px;
          background:var(--divider);
          display:flex; align-items:center; justify-content:center;
          color:var(--blue); transition:background .2s, color .2s;
          flex-shrink:0;
        }
        .fdp-detail-card:hover .fdp-detail-icon { background:var(--blue); color:#fff; }

        .fdp-detail-title {
          font-family:'Cormorant Garamond',serif;
          font-size:1.4rem; font-weight:700; color:var(--ink);
        }

        /* Teachings list */
        .fdp-teachings {
          display:flex; flex-direction:column; gap:.6rem;
        }
        .fdp-teaching-item {
          display:flex; align-items:center; gap:.75rem;
          font-size:.85rem; color:var(--muted); font-weight:400;
        }
        .fdp-teaching-dot {
          width:6px; height:6px; border-radius:50%;
          background:var(--blue); flex-shrink:0;
        }

        /* Contact items */
        .fdp-contact-items {
          display:flex; flex-direction:column; gap:.85rem;
        }
        .fdp-contact-item {
          display:flex; align-items:center; gap:.75rem;
        }
        .fdp-contact-label {
          font-size:.62rem; font-weight:600;
          letter-spacing:.12em; text-transform:uppercase;
          color:var(--muted); display:block; margin-bottom:.15rem;
        }
        .fdp-contact-val {
          font-size:.9rem; font-weight:500; color:var(--ink);
          text-decoration:none; transition:color .2s;
        }
        .fdp-contact-val:hover { color:var(--blue); }

        /* Meeting info */
        .fdp-meeting-row {
          display:flex; align-items:flex-start; gap:.75rem;
          margin-bottom:1rem;
        }
        .fdp-meeting-val {
          font-size:.88rem; color:var(--muted);
          line-height:1.6; font-weight:300;
        }
        .fdp-meeting-strong {
          font-weight:600; color:var(--ink);
          display:block; margin-bottom:.2rem; font-size:.85rem;
        }

        /* Policies stripe */
        .fdp-policy {
          margin-top:2rem;
          background:var(--blue);
          padding:2rem 2.5rem;
          position:relative; overflow:hidden;
        }
        .fdp-policy::before {
          content:'"';
          position:absolute; top:-1rem; left:1rem;
          font-family:'Cormorant Garamond',serif;
          font-size:8rem; color:rgba(255,255,255,0.07);
          line-height:1; pointer-events:none;
        }
        .fdp-policy-label {
          font-size:.62rem; font-weight:600;
          letter-spacing:.18em; text-transform:uppercase;
          color:var(--gold-lt); margin-bottom:.5rem; display:block;
        }
        .fdp-policy-text {
          font-family:'Cormorant Garamond',serif;
          font-style:italic; font-size:1.1rem;
          color:rgba(255,255,255,.9); line-height:1.6;
          position:relative; z-index:1;
        }

        /* Foundation school section */
        .fdp-school-section {
          background:#fff;
          padding:4rem 6rem;
          border-top:1.5px solid var(--divider);
        }
        @media(max-width:768px){ .fdp-school-section{ padding:3rem 1.5rem; } }

        .fdp-school-inner {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:1.5px;
          background:var(--divider);
        }
        @media(max-width:768px){ .fdp-school-inner{ grid-template-columns:1fr; } }

        .fdp-school-card {
          background:#F8F9FF; padding:2.5rem;
          position:relative; overflow:hidden;
          transition:background .2s;
        }
        .fdp-school-card:hover { background:#EEF1FF; }
        .fdp-school-card::after {
          content:''; position:absolute;
          bottom:0; left:0; width:0; height:3px;
          background:var(--blue); transition:width .35s;
        }
        .fdp-school-card:hover::after { width:100%; }

        .fdp-school-label {
          font-size:.62rem; font-weight:600;
          letter-spacing:.18em; text-transform:uppercase;
          color:var(--blue); display:flex; align-items:center;
          gap:.6rem; margin-bottom:.75rem;
        }
        .fdp-school-label::before {
          content:''; display:inline-block;
          width:1.5rem; height:2px; background:var(--gold);
        }
        .fdp-school-title {
          font-family:'Cormorant Garamond',serif;
          font-size:1.4rem; font-weight:700;
          color:var(--ink); margin-bottom:.5rem;
        }
        .fdp-school-val {
          font-size:.88rem; color:var(--muted);
          line-height:1.65; font-weight:300;
        }
      `}</style>

      <div className="fdp">

        {/* ══ HERO ══ */}
        <section className="fdp-hero">
          <svg className="fdp-hero-svg" viewBox="0 0 1440 580" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fdpRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#7B93F8" />
                <stop offset="40%"  stopColor="#3A4FD8" />
                <stop offset="100%" stopColor="#1E2D9E" />
              </linearGradient>
            </defs>
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 158 L 1305 224 Q 1085 282, 875 325 Q 665 368, 430 406 Q 170 448, -100 522 Z" fill="url(#fdpRib)" />
            <path d="M -100 460 Q 160 385, 420 345 Q 660 310, 870 268 Q 1080 228, 1300 168 L 1540 100 L 1540 118 L 1302 185 Q 1082 245, 872 288 Q 662 330, 422 368 Q 162 408, -100 478 Z" fill="rgba(255,255,255,0.18)" />
          </svg>

          {/* Back link */}
          <Link href="/fellowship" className="fdp-back">
            <ArrowLeft size={14} />
            All Fellowships
          </Link>

          <div className="fdp-hero-inner">
            {/* Left: text */}
            <div>
              <p className="fdp-eyebrow">Hour of Grace Believers Ministry</p>
              <span className="fdp-hero-num">{fellowship.num}</span>
              <h1 className="fdp-hero-title">
                <em>{fellowship.name.split(' ')[0]}</em><br />
                {fellowship.name.split(' ').slice(1).join(' ')}
              </h1>
              <p className="fdp-hero-desc">{fellowship.description}</p>
              <p className="fdp-hero-loc">
                <MapPin size={14} />
                {fellowship.location}
              </p>
            </div>

            {/* Right: round portrait */}
            <div className="fdp-portrait-wrap">
              <div className="fdp-portrait">
                <img src={fellowship.image} alt={fellowship.name} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COMMUNITY PHOTO ══ */}
        <div className="fdp-community">
          <img
            src={fellowship.communityImage || fellowship.image}
            alt={`${fellowship.name} community`}
          />
          <div className="fdp-community-overlay">
            <div>
              <p style={{ fontSize:'.62rem', fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:'.5rem' }}>
                Our Community
              </p>
              <p className="fdp-community-caption">
                {fellowship.name.split(' ')[0]} <em>Family</em>
              </p>
            </div>
          </div>
        </div>

        {/* ══ DETAILS ══ */}
        <section className="fdp-details">
          <svg className="fdp-ribbon" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fdpBRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#fdpBRib)" />
          </svg>

          <div className="fdp-details-inner">
            <div className="fdp-sec-head">
              <div>
                <p className="fdp-sec-label">Everything You Need to Know</p>
                <h2 className="fdp-sec-title">Fellowship Details</h2>
              </div>
              <span className="fdp-big-num">{fellowship.num}</span>
            </div>

            <div className="fdp-detail-grid">

              {/* Teachings */}
              <div className="fdp-detail-card">
                <div className="fdp-detail-icon"><BookOpen size={22} /></div>
                <p className="fdp-detail-title">Our Teachings</p>
                <div className="fdp-teachings">
                  {(fellowship.teachings || []).map((t) => (
                    <div key={t} className="fdp-teaching-item">
                      <span className="fdp-teaching-dot" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="fdp-detail-card">
                <div className="fdp-detail-icon"><MessageCircle size={22} /></div>
                <p className="fdp-detail-title">Contact Info</p>
                <div className="fdp-contact-items">
                  <div className="fdp-contact-item">
                    <Phone size={16} style={{ color:'var(--blue)', flexShrink:0 }} />
                    <div>
                      <span className="fdp-contact-label">Phone / WhatsApp</span>
                      <a href={`tel:${fellowship.phone}`} className="fdp-contact-val">
                        {fellowship.phone}
                      </a>
                    </div>
                  </div>
                  {fellowship.email && (
                    <div className="fdp-contact-item">
                      <Mail size={16} style={{ color:'var(--blue)', flexShrink:0 }} />
                      <div>
                        <span className="fdp-contact-label">Email</span>
                        <a href={`mailto:${fellowship.email}`} className="fdp-contact-val">
                          {fellowship.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Meeting */}
              <div className="fdp-detail-card">
                <div className="fdp-detail-icon"><MapPin size={22} /></div>
                <p className="fdp-detail-title">When & Where</p>
                <div>
                  <div className="fdp-meeting-row">
                    <Clock size={15} style={{ color:'var(--blue)', marginTop:2, flexShrink:0 }} />
                    <div>
                      <span className="fdp-meeting-strong">Meeting Schedule</span>
                      <span className="fdp-meeting-val">{fellowship.meetingDays}</span>
                    </div>
                  </div>
                  <div className="fdp-meeting-row">
                    <MapPin size={15} style={{ color:'var(--blue)', marginTop:2, flexShrink:0 }} />
                    <div>
                      <span className="fdp-meeting-strong">Address</span>
                      <span className="fdp-meeting-val">{fellowship.address}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Policies */}
            {fellowship.policies && fellowship.policies.trim() !== '.' && (
              <div className="fdp-policy">
                <span className="fdp-policy-label">Fellowship Policy</span>
                <p className="fdp-policy-text">{fellowship.policies}</p>
              </div>
            )}
          </div>
        </section>

        {/* ══ FOUNDATION SCHOOL ══ */}
        <div className="fdp-school-section">
          <div style={{ marginBottom:'2rem' }}>
            <p className="fdp-sec-label" style={{ display:'flex', alignItems:'center', gap:'.6rem', marginBottom:'.5rem' }}>
              <span style={{ display:'inline-block', width:'1.75rem', height:'2px', background:'var(--gold)' }} />
              Foundation School
            </p>
            <h2 className="fdp-sec-title">School Details</h2>
          </div>

          <div className="fdp-school-inner">
            {fellowship.foundationSchool?.time && (
              <div className="fdp-school-card">
                <p className="fdp-school-label">Schedule</p>
                <p className="fdp-school-title">Meeting Time</p>
                <p className="fdp-school-val">{fellowship.foundationSchool.time}</p>
              </div>
            )}
            <div className="fdp-school-card">
              <p className="fdp-school-label">Venue</p>
              <p className="fdp-school-title">Location</p>
              <p className="fdp-school-val">{fellowship.foundationSchool?.location || 'TBA'}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}