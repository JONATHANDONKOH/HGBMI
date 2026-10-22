'use client'

import React, { useEffect, useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

/* ═══════════════════════════════════════════
   EDIT YOUR UPCOMING EVENT HERE
   - Put allnievent.jpeg inside /public
   - date: ISO format, e.g. "2026-11-28T21:00:00" (leave "" to hide countdown)
═══════════════════════════════════════════ */
const EVENT = {
  image: "/allnievent.jpeg",
  title: "Event Title",
  tagline: "Come expecting a move of God — worship, the Word, and fellowship.",
  date: "2026-10-23T22:00:00",
  dateLabel: "23 October 2026",
  timeLabel: "10:00 PM",
  venue: "Hour of Grace Believers Ministry International",
  category: "Fellowship",
  mapLink: "",
}

type TimeLeft = { d: number; h: number; m: number; s: number }

export default function EventsPage() {
  const [ready, setReady] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [isVisible, setIsVisible] = useState({
    story: false,
    image: false,
    detail: false,
    past: false,
  })

  const storyRef = useRef(null)
  const imageRef = useRef(null)
  const detailRef = useRef(null)
  const pastRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  /* Countdown */
  useEffect(() => {
    if (!EVENT.date) return
    const target = new Date(EVENT.date).getTime()
    if (isNaN(target)) return

    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
        return
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === storyRef.current) {
            setIsVisible((prev) => ({ ...prev, story: entry.isIntersecting }))
          }
          if (entry.target === imageRef.current) {
            setIsVisible((prev) => ({ ...prev, image: entry.isIntersecting }))
          }
          if (entry.target === detailRef.current) {
            setIsVisible((prev) => ({ ...prev, detail: entry.isIntersecting }))
          }
          if (entry.target === pastRef.current) {
            setIsVisible((prev) => ({ ...prev, past: entry.isIntersecting }))
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (storyRef.current) observer.observe(storyRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (detailRef.current) observer.observe(detailRef.current)
    if (pastRef.current) observer.observe(pastRef.current)

    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current)
      if (imageRef.current) observer.unobserve(imageRef.current)
      if (detailRef.current) observer.unobserve(detailRef.current)
      if (pastRef.current) observer.unobserve(pastRef.current)
    }
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        .ep {
          --blue:     #3A4FD8;
          --blue-mid: #5068E8;
          --blue-lt:  #5169E0;
          --blue-dk:  #1E2D9E;
          --gold:     #C9960A;
          --gold-lt:  #F5C842;
          --white:    #FFFFFF;
          --cream:    #FAF6EF;
          --cream-deep: #F3EDE2;
          --ink:      #111827;
          --muted:    #6B7280;
          --divider:  #E8E1D4;
          background: var(--cream);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ═══════════════════════════════
           SPARKLE ANIMATIONS WITH COLOR CHANGE ✨🌈
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

        .sparkle-twinkle {
          animation-name: sparkleTwinkle;
          animation-duration: 4s;
        }

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

        .sparkle-reverse { animation-direction: reverse; }

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

        .sparkle-3, .sparkle-8, .sparkle-13, .sparkle-18 { animation-direction: reverse; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes zoomIn  { from{opacity:0;transform:scale(1.05)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseDot {
          0%   { box-shadow: 0 0 0 0 rgba(58,79,216,0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(58,79,216,0); }
          100% { box-shadow: 0 0 0 0 rgba(58,79,216,0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes shine {
          0%   { transform: translateX(-120%) skewX(-20deg); }
          60%  { transform: translateX(260%) skewX(-20deg); }
          100% { transform: translateX(260%) skewX(-20deg); }
        }

        /* ═══════════════════════════════
           SCROLL ANIMATIONS
        ═══════════════════════════════ */
        .scroll-animate,
        .scroll-animate-scale,
        .scroll-animate-right,
        .scroll-animate-left {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animate.visible,
        .scroll-animate-scale.visible,
        .scroll-animate-right.visible,
        .scroll-animate-left.visible { opacity: 1; }

        .scroll-animate.visible { transform: translateY(0); }
        .scroll-animate:not(.visible) { transform: translateY(60px); }

        .scroll-animate-scale.visible { transform: scale(1); }
        .scroll-animate-scale:not(.visible) { transform: scale(0.92); }

        .scroll-animate-right.visible { transform: translateX(0); }
        .scroll-animate-right:not(.visible) { transform: translateX(-50px); }

        .scroll-animate-left.visible { transform: translateX(0); }
        .scroll-animate-left:not(.visible) { transform: translateX(50px); }

        /* ═══════════════════════════════
           TOP SECTION — story + flyer, side by side
        ═══════════════════════════════ */
        .ep-main {
          position: relative;
          min-height: 88vh;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          overflow: hidden;
          z-index: 1;
        }
        @media(max-width:900px){
          .ep-main { grid-template-columns: 1fr; min-height: auto; }
        }

        /* ── Left: story panel ── */
        .ep-story {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem 6rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(201,150,10,0.10), transparent 45%),
            var(--cream);
        }
        @media(max-width:900px){
          .ep-story { padding: 3rem 1.75rem; order: 2; }
        }

        .ep-story-inner { max-width: 540px; opacity: 0; }
        .ep-ready .ep-story-inner { animation: fadeUp 0.75s ease 0.1s forwards; }

        .ep-eyebrow {
          display: flex;
          align-items: center;
          gap: .6rem;
          font-size: .6rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 1.1rem;
        }
        .ep-eyebrow::before {
          content: '';
          display: inline-block;
          width: 1.75rem; height: 2px;
          background: var(--gold);
        }

        .ep-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 4.4vw, 4.2rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.1rem;
        }
        .ep-title .t-blue { color: var(--blue); font-style: italic; }
        .ep-title .t-gold {
          background: linear-gradient(145deg, var(--gold), #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ep-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--ink);
          font-weight: 400;
          margin-bottom: 1.5rem;
        }

        .ep-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.1rem;
          background: var(--cream-deep);
          border: 1px solid var(--divider);
          border-left: 3px solid var(--gold);
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }
        .ep-notice-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
          animation: pulseDot 1.8s infinite;
        }
        .ep-notice-text { font-size: 0.82rem; color: var(--ink); font-weight: 400; }
        .ep-notice-text b { color: var(--blue); font-weight: 600; }

        /* ── Countdown ── */
        .ep-countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          max-width: 380px;
          margin-bottom: 1.75rem;
        }
        .ep-count-box {
          background: linear-gradient(160deg, var(--blue-mid), var(--blue-dk));
          color: #fff;
          border-radius: 8px;
          padding: 0.85rem 0.25rem 0.7rem;
          text-align: center;
          box-shadow: 0 14px 26px -14px rgba(58,79,216,0.7);
          position: relative;
          overflow: hidden;
        }
        .ep-count-box::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          animation: shine 5s ease-in-out infinite;
        }
        .ep-count-num {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          color: var(--gold-lt);
        }
        .ep-count-label {
          display: block;
          margin-top: 0.35rem;
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
        }

        /* ── Meta row ── */
        .ep-meta {
          display: grid;
          grid-template-columns: repeat(3, auto);
          justify-content: start;
          gap: 2rem;
          padding-top: 1.25rem;
          border-top: 1.5px solid var(--divider);
        }
        @media(max-width:520px){
          .ep-meta { grid-template-columns: 1fr 1fr; gap: 1.25rem 1.5rem; }
        }
        .ep-meta-item { display: flex; flex-direction: column; gap: 0.25rem; }
        .ep-meta-label {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue);
        }
        .ep-meta-value { font-size: 0.88rem; font-weight: 600; color: var(--ink); }

        /* ── Buttons ── */
        .ep-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.75rem; }
        .ep-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          border: 1.5px solid var(--blue);
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
        }
        .ep-btn-primary {
          background: linear-gradient(135deg, var(--blue-mid), var(--blue));
          color: #fff;
          box-shadow: 0 12px 24px -12px rgba(58,79,216,0.8);
        }
        .ep-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -12px rgba(58,79,216,0.9); }
        .ep-btn-ghost { background: transparent; color: var(--blue); }
        .ep-btn-ghost:hover { background: var(--blue); color: #fff; transform: translateY(-2px); }

        /* ── Right: flyer panel ── */
        .ep-frame {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, var(--blue-mid) 0%, var(--blue) 45%, var(--blue-dk) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4.5rem 3.5rem 4.5rem 5.5rem;
        }
        @media(max-width:900px){
          .ep-frame { order: 1; min-height: 46vh; padding: 4.5rem 1.75rem 2.5rem; }
        }

        .ep-frame-bg {
          position: absolute;
          inset: -30px;
          background-size: cover;
          background-position: center;
          filter: blur(34px) saturate(1.2);
          opacity: 0.35;
          transform: scale(1.1);
        }

        .ep-frame-glow {
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,200,66,0.35), transparent 65%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ep-flyer {
          position: relative;
          z-index: 2;
          max-width: 100%;
          width: 100%;
          max-width: 430px;
          border-radius: 6px;
          padding: 10px;
          background: #fff;
          box-shadow: 0 40px 70px -25px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.4);
          opacity: 0;
        }
        .ep-ready .ep-flyer {
          animation: zoomIn 1.1s ease 0.1s forwards, floatCard 6s ease-in-out 1.3s infinite;
        }
        .ep-flyer-img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 72vh;
          object-fit: contain;
          border-radius: 3px;
        }
        .ep-flyer::after {
          content: '';
          position: absolute;
          inset: 10px;
          border-radius: 3px;
          overflow: hidden;
          background: linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%);
          background-size: 250% 100%;
          pointer-events: none;
        }

        .ep-frame-seam {
          position: absolute;
          left: 0; top: 0;
          width: 130px;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        @media(max-width:900px){ .ep-frame-seam { display: none; } }

        .ep-frame-ribbon {
          position: absolute;
          top: 1.75rem;
          right: 1.75rem;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--gold), #b8860b);
          color: #fff;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.5rem 1.1rem;
          border-radius: 3px;
          box-shadow: 0 8px 24px -6px rgba(201,150,10,0.65);
          opacity: 0;
        }
        .ep-ready .ep-frame-ribbon { animation: fadeIn 0.8s ease 0.5s forwards; }
        .ep-frame-ribbon::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: pulseDot 1.8s infinite;
        }

        /* ═══════════════════════════════
           DETAILS STRIP (below the fold)
        ═══════════════════════════════ */
        .ep-detail {
          position: relative;
          background: var(--cream-deep);
          padding: 3.5rem 6rem;
          border-top: 1.5px solid var(--divider);
          z-index: 1;
        }
        @media(max-width:900px){ .ep-detail { padding: 2.5rem 1.75rem; } }

        .ep-detail-label {
          font-size: .58rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: .5rem;
          margin-bottom: .6rem;
        }
        .ep-detail-label::before {
          content: '';
          display: inline-block;
          width: 1.5rem; height: 2px;
          background: var(--gold);
        }

        .ep-detail-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 0.6rem;
        }

        .ep-detail-text {
          font-size: 0.9rem;
          line-height: 1.8;
          color: var(--ink);
          font-weight: 400;
          max-width: 70ch;
        }

        .ep-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 2rem;
        }
        @media(max-width:900px){ .ep-cards { grid-template-columns: 1fr; } }

        .ep-card {
          background: #fff;
          border: 1px solid var(--divider);
          border-top: 3px solid var(--gold);
          border-radius: 6px;
          padding: 1.5rem 1.4rem;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .ep-card:hover { transform: translateY(-5px); box-shadow: 0 22px 36px -22px rgba(58,79,216,0.5); }
        .ep-card-icon {
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--blue-mid), var(--blue));
          color: #fff;
          margin-bottom: 1rem;
        }
        .ep-card-label {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.35rem;
        }
        .ep-card-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.25;
          color: var(--ink);
        }

        /* ═══════════════════════════════
           PAST EVENTS
        ═══════════════════════════════ */
        .ep-past {
          position: relative;
          background: var(--cream);
          padding: 4rem 6rem;
          border-top: 1.5px solid var(--divider);
          z-index: 1;
        }
        @media(max-width:900px){ .ep-past { padding: 2.5rem 1.75rem; } }

        .ep-past-card {
          margin-top: 1.75rem;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          background: #fff;
          border: 1px solid var(--divider);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 30px 50px -35px rgba(17,24,39,0.45);
        }
        @media(max-width:900px){ .ep-past-card { grid-template-columns: 1fr; } }

        .ep-past-media { position: relative; min-height: 320px; background: var(--ink); overflow: hidden; }
        .ep-past-media img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
        }
        .ep-past-card:hover .ep-past-media img { transform: scale(1.05); }
        .ep-past-media::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(17,24,39,0) 50%, rgba(17,24,39,0.55) 100%);
        }
        .ep-past-tag {
          position: absolute;
          top: 1.25rem; left: 1.25rem;
          z-index: 2;
          background: rgba(17,24,39,0.75);
          color: #fff;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.4rem 0.9rem;
          border-radius: 3px;
        }
        .ep-past-body {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ep-past-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }
        .ep-past-title span { color: var(--blue); font-style: italic; }
        .ep-past-text { font-size: 0.9rem; line-height: 1.8; color: var(--ink); }

        /* ─── RESPONSIVE ─── */
        @media(max-width:900px){
          .scroll-animate-right:not(.visible) { transform: translateX(0); }
          .scroll-animate-left:not(.visible) { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ep-flyer, .ep-count-box::after, .ep-notice-dot { animation: none !important; }
        }
      `}</style>

      <div className={`ep ${ready ? "ep-ready" : ""}`}>
        {/* SPARKLE CONTAINER - COLOR CHANGING SPARKLES */}
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

        {/* ══ TOP: UPCOMING EVENT STORY + FLYER ══ */}
        <section className="ep-main">
          {/* Story panel */}
          <div
            ref={storyRef}
            className={`ep-story scroll-animate ${isVisible.story ? "visible" : ""}`}
          >
            <div className="ep-story-inner">
              <p className="ep-eyebrow">Hour of Grace Believers Ministry International</p>
              <h1 className="ep-title">
                Upcoming <span className="t-blue">Event</span><br />
                <span className="t-gold">{EVENT.title}</span>
              </h1>
              <p className="ep-desc">{EVENT.tagline}</p>

              <div className="ep-notice">
                <span className="ep-notice-dot" />
                <span className="ep-notice-text">
                  <b>You&apos;re invited</b> — we would love to have you join us.
                </span>
              </div>

              {timeLeft && (
                <div className="ep-countdown" aria-label="Countdown to event">
                  <div className="ep-count-box">
                    <span className="ep-count-num">{pad(timeLeft.d)}</span>
                    <span className="ep-count-label">Days</span>
                  </div>
                  <div className="ep-count-box">
                    <span className="ep-count-num">{pad(timeLeft.h)}</span>
                    <span className="ep-count-label">Hours</span>
                  </div>
                  <div className="ep-count-box">
                    <span className="ep-count-num">{pad(timeLeft.m)}</span>
                    <span className="ep-count-label">Mins</span>
                  </div>
                  <div className="ep-count-box">
                    <span className="ep-count-num">{pad(timeLeft.s)}</span>
                    <span className="ep-count-label">Secs</span>
                  </div>
                </div>
              )}

              <div className="ep-meta">
                <div className="ep-meta-item">
                  <span className="ep-meta-label">Category</span>
                  <span className="ep-meta-value">{EVENT.category}</span>
                </div>
                <div className="ep-meta-item">
                  <span className="ep-meta-label">Date</span>
                  <span className="ep-meta-value">{EVENT.dateLabel}</span>
                </div>
                <div className="ep-meta-item">
                  <span className="ep-meta-label">Status</span>
                  <span className="ep-meta-value">Upcoming</span>
                </div>
              </div>

              <div className="ep-actions">
                <a href="#event-details" className="ep-btn ep-btn-primary">
                  Event Details
                </a>
                {EVENT.mapLink && (
                  <a
                    href={EVENT.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ep-btn ep-btn-ghost"
                  >
                    Get Directions
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Flyer panel */}
          <div
            ref={imageRef}
            className={`ep-frame scroll-animate-scale ${isVisible.image ? "visible" : ""}`}
          >
            <div
              className="ep-frame-bg"
              style={{ backgroundImage: `url(${EVENT.image})` }}
            />
            <div className="ep-frame-glow" />

            <svg
              className="ep-frame-seam"
              viewBox="0 0 130 700"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="epSeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"  stopColor="#5B76EC" />
                  <stop offset="55%" stopColor="#3A4FD8" />
                  <stop offset="100%" stopColor="#1E2D9E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 0 L90 0 L20 700 L0 700 Z" fill="url(#epSeam)" />
              <path d="M0 0 L34 0 L6 700 L0 700 Z" fill="rgba(255,255,255,0.22)" />
            </svg>

            <span className="ep-frame-ribbon">Upcoming Event</span>

            <div className="ep-flyer">
              <img
                src={EVENT.image}
                alt={`${EVENT.title} — upcoming event flyer`}
                className="ep-flyer-img"
              />
            </div>
          </div>
        </section>

        {/* ══ DETAILS ══ */}
        <section
          id="event-details"
          ref={detailRef}
          className={`ep-detail scroll-animate ${isVisible.detail ? "visible" : ""}`}
        >
          <p className="ep-detail-label">Save The Date</p>
          <h2 className="ep-detail-title">Event Details</h2>
          <p className="ep-detail-text">
            Join the family of Hour of Grace Believers Ministry International for a
            time of worship, the Word, and fellowship. Bring a friend, come with
            expectation, and be part of what God is doing.
          </p>

          <div className="ep-cards">
            <div className="ep-card">
              <div className="ep-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p className="ep-card-label">Date</p>
              <p className="ep-card-value">{EVENT.dateLabel}</p>
            </div>

            <div className="ep-card">
              <div className="ep-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className="ep-card-label">Time</p>
              <p className="ep-card-value">{EVENT.timeLabel}</p>
            </div>

            <div className="ep-card">
              <div className="ep-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="ep-card-label">Venue</p>
              <p className="ep-card-value">{EVENT.venue}</p>
            </div>
          </div>
        </section>

        {/* ══ PAST EVENTS ══ */}
        <section
          ref={pastRef}
          className={`ep-past scroll-animate ${isVisible.past ? "visible" : ""}`}
        >
          <p className="ep-detail-label">Gathered Moments</p>
          <h2 className="ep-detail-title">A Look Back</h2>

          <div className="ep-past-card">
            <div className="ep-past-media">
              <img
                src="/alabi.jpeg"
                alt="Past church event — moment of worship and fellowship"
              />
              <span className="ep-past-tag">Past Event</span>
            </div>
            <div className="ep-past-body">
              <h3 className="ep-past-title">
                Grace In <span>Gathering</span>
              </h3>
              <p className="ep-past-text">
                A look back at a recent moment of worship and fellowship — the
                community coming together in faith, joy, and unity. Every
                gathering here is a testimony of God&apos;s grace.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}