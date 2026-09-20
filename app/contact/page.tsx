"use client"

import React, { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [heroReady, setHeroReady] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }

    setStatus("sending")

    const templateParams = {
      name: form.name,
      email: form.email,
      time: new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      message: form.message,
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
    }
  }

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
          --cream:   #FAF6EF;
          --cream-deep: #F3EDE2;
          --ink:     #111827;
          --muted:   #111827;
          --divider: #E8E1D4;
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

        .cp-hero {
          position: relative;
          width: 100%;
          min-height: 62vh;
          background: var(--cream);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .cp-hero-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cp-hero-logo {
          position: absolute;
          top: 50%;
          left: 62%;
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 0;
          perspective: 1000px;
        }
        .cp-hero-ready .cp-hero-logo { animation: fadeIn 0.9s ease 0.55s forwards; }
        .cp-hero-logo img {
          width: 560px;
          height: 760px;
          object-fit: contain;
          opacity: 0.7;
          filter: drop-shadow(0 8px 18px rgba(58,79,216,0.08)) drop-shadow(0 5px 10px rgba(17,24,39,0.05));
          transform-style: preserve-3d;
          animation: floatTilt 5s ease-in-out 1.5s infinite;
        }
        @media(max-width:768px){
          .cp-hero-logo {
            left: auto;
            right: 2.5rem;
            top: 2.75rem;
            transform: none;
          }
          .cp-hero-logo img { width: 200px; height: 267px; }
        }

        .cp-hero-text {
          position: relative;
          z-index: 5;
          padding: 2.5rem 0 4rem 6rem;
          max-width: 620px;
          text-align: left;
          opacity: 0;
        }
        .cp-hero-ready .cp-hero-text { animation: fadeUp 0.8s ease 0.15s forwards; }
        @media(max-width:768px){ .cp-hero-text{ padding: 2rem 0 3rem 1.5rem; max-width:92vw; } }

        .cp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .75rem;
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--blue);
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
          color: var(--ink);
          font-weight: 300;
          max-width: 44ch;
        }

        .cp-card-section {
          position: relative;
          background: var(--cream-deep);
          padding: 6rem;
          overflow: hidden;
        }
        @media(max-width:768px){ .cp-card-section{ padding: 3rem 1.5rem 4rem; } }

        .cp-card-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cp-card-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }
        @media(max-width:900px){ .cp-card-grid{ grid-template-columns: 1fr; gap: 3rem; } }
        .cp-card-grid-solo {
          grid-template-columns: 1fr;
          justify-items: center;
        }
        .cp-card-grid-solo .cp-form-card { width: 100%; max-width: 520px; }

        .cp-card-left { display: flex; flex-direction: column; gap: 1.75rem; }

        .cp-card-eyebrow {
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: .6rem;
        }
        .cp-card-eyebrow::before {
          content:'';
          display:inline-block;
          width:1.75rem; height:2px;
          background: var(--gold);
        }

        .cp-card-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.1rem, 3.4vw, 2.9rem);
          font-weight: 700;
          line-height: 1.12;
          color: var(--ink);
        }
        .cp-card-heading .t-blue { color: var(--blue); font-style: italic; }

        .cp-card-desc {
          font-size: .92rem;
          line-height: 1.8;
          font-weight: 300;
          color: var(--ink);
          max-width: 42ch;
        }

        .cp-card-contacts {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: .5rem;
        }

        .cp-card-contact-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
        }

        .cp-card-contact-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--blue);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-card-contact-lbl {
          font-size: .64rem;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--ink);
          opacity: .6;
          display: block;
          margin-bottom: .2rem;
        }
        .cp-card-contact-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          display: block;
          transition: color .2s;
        }
        .cp-card-contact-row:hover .cp-card-contact-val { color: var(--blue); }

        .cp-card-scripture {
          margin-top: .75rem;
          padding: 1.25rem 1.5rem;
          background: var(--blue);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .cp-card-scripture::before {
          content: '"';
          position: absolute;
          top: -1rem; left: .75rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          color: rgba(255,255,255,0.1);
          line-height: 1;
          pointer-events: none;
        }
        .cp-card-scripture-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-style: italic;
          color: rgba(255,255,255,0.92);
          line-height: 1.55;
          position: relative;
          z-index: 1;
        }
        .cp-card-scripture-ref {
          display: block;
          margin-top: .6rem;
          font-family: 'Jost', sans-serif;
          font-style: normal;
          font-size: .62rem;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--gold-lt);
        }

        .cp-form-card {
          position: relative;
          background: #fff;
          border-radius: 16px;
          padding: 2.75rem;
          box-shadow: 0 30px 60px -24px rgba(58,79,216,0.28), 0 10px 24px -12px rgba(17,24,39,0.08);
        }
        @media(max-width:768px){ .cp-form-card{ padding: 2rem 1.5rem; } }

        .cp-form-field {
          display: flex;
          flex-direction: column;
          gap: .45rem;
          margin-bottom: 1.35rem;
        }

        .cp-form-label {
          font-size: .66rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--ink);
          opacity: .7;
        }

        .cp-form-input,
        .cp-form-select,
        .cp-form-textarea {
          font-family: 'Jost', sans-serif;
          font-size: .92rem;
          color: var(--ink);
          background: var(--cream);
          border: 1.5px solid var(--divider);
          border-radius: 6px;
          padding: .8rem .95rem;
          transition: border-color .2s, background .2s;
          width: 100%;
        }
        .cp-form-input::placeholder,
        .cp-form-textarea::placeholder { color: #9CA3AF; }
        .cp-form-input:focus,
        .cp-form-select:focus,
        .cp-form-textarea:focus {
          outline: none;
          border-color: var(--blue);
          background: #fff;
        }
        .cp-form-textarea { resize: vertical; min-height: 110px; }

        .cp-form-submit {
          display: inline-flex;
          align-items: center;
          gap: .85rem;
          background: var(--blue);
          color: #fff;
          border: none;
          padding: .7rem .6rem .7rem 1.75rem;
          border-radius: 999px;
          font-family: 'Jost', sans-serif;
          font-size: .82rem;
          font-weight: 600;
          letter-spacing: .04em;
          cursor: pointer;
          transition: background .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 10px 22px -10px rgba(58,79,216,0.6);
        }
        .cp-form-submit:hover { background: #2535b8; transform: translateY(-2px); }
        .cp-form-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }

        .cp-form-submit-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fff;
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @keyframes arrowNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .cp-form-submit-icon svg {
          animation: arrowNudge 1.6s ease-in-out infinite;
        }
        .cp-form-submit:hover .cp-form-submit-icon svg {
          animation-duration: .6s;
        }

        .cp-form-status {
          font-size: .82rem;
          margin-top: 1rem;
          font-weight: 500;
        }
        .cp-form-status-success { color: #1a7f37; }
        .cp-form-status-error { color: #c0392b; }
      `}</style>

      <div className="cp">
        <Navbar />

        <section className={`cp-hero ${heroReady ? "cp-hero-ready" : ""}`}>

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

          <div className="cp-hero-logo">
            <img
              src="/shadowangel.png"
              alt="Hour of Grace Believers Ministry International"
            />
          </div>

          <div className="cp-hero-text">
            <p className="cp-card-eyebrow">We're Here To Help You</p>
            <h2 className="cp-card-heading">
              Discuss Your <span className="t-blue">Prayer</span> &amp; Ministry Needs
            </h2>
            <p className="cp-card-desc">
              Looking for prayer, guidance, or a place to belong? Reach out and
              our team will get back to you — you're also welcome to visit us
              in person for a service.
            </p>

            <div className="cp-card-contacts">
              <a href="mailto:Heous2020@yahoo.com" className="cp-card-contact-row">
                <div className="cp-card-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="cp-card-contact-lbl">E-mail</span>
                  <span className="cp-card-contact-val">Heous2020@yahoo.com</span>
                </div>
              </a>

              <a href="tel:+233271645202" className="cp-card-contact-row">
                <div className="cp-card-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="cp-card-contact-lbl">Phone number</span>
                  <span className="cp-card-contact-val">+233 246 819 964</span>
                </div>
              </a>
            </div>

            <div className="cp-card-scripture">
              <p className="cp-card-scripture-text">
                "And the peace of God, which transcends all understanding, will guard your hearts
                and your minds in Christ Jesus."
                <span className="cp-card-scripture-ref">Philippians 4:7</span>
              </p>
            </div>
          </div>
        </section>

        <section className="cp-card-section">

          <svg
            className="cp-card-svg"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cpCardRib" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#3A4FD8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3A4FD8" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <path d="M-80 380 Q360 310 720 330 Q1080 350 1540 240 L1540 295 Q1080 405 720 385 Q360 365 -80 435 Z" fill="url(#cpCardRib)" />
          </svg>

          <div className="cp-card-grid cp-card-grid-solo">
            <form className="cp-form-card" onSubmit={handleSubmit}>
              <div className="cp-form-field">
                <label className="cp-form-label" htmlFor="cp-name">Name</label>
                <input
                  className="cp-form-input"
                  id="cp-name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cp-form-field">
                <label className="cp-form-label" htmlFor="cp-email">Email</label>
                <input
                  className="cp-form-input"
                  id="cp-email"
                  name="email"
                  type="email"
                  placeholder="jane@name.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cp-form-field">
                <label className="cp-form-label" htmlFor="cp-message">Message</label>
                <textarea
                  className="cp-form-textarea"
                  id="cp-message"
                  name="message"
                  placeholder="Type your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="cp-form-submit" type="submit" disabled={status === "sending"}>
                <span className="cp-form-submit-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="cp-form-status cp-form-status-success">
                  Message sent — we'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="cp-form-status cp-form-status-error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>

          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}