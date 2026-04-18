'use client'

import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import Events from "@/components/Events"

export default function EventsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .events-page {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --cream: #FAF7F2;
          --ink: #1A1612;
          --stone: #6B6057;
          --divider: #E0D8CC;
          font-family: 'DM Sans', sans-serif;
          background-color: var(--cream);
          color: var(--ink);
          min-height: 100vh;
        }

        .events-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .events-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(4.5rem, 12vw, 9rem);
          letter-spacing: -0.03em;
          line-height: 0.88;
          color: var(--ink);
        }

        .events-hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .events-label-tag {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .events-label-tag::before {
          content: '';
          display: inline-block;
          width: 1.5rem;
          height: 1px;
          background: var(--gold);
        }

        .events-divider {
          height: 1px;
          background: var(--divider);
          border: none;
          margin: 0;
        }

        .events-gold-bar {
          height: 3px;
          width: 4rem;
          background: var(--gold);
          margin-bottom: 2rem;
        }

        /* Decorative large background character */
        .events-bg-char {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 28vw;
          color: rgba(201, 168, 76, 0.04);
          position: absolute;
          right: -2vw;
          top: -4rem;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
      `}</style>

      <div className="events-page">
        <Navbar />

        <main className="w-full px-6 lg:px-16 xl:px-24 mb-20">

          {/* ── Hero ── */}
          <div className="relative pt-20 pb-16 border-b border-[var(--divider)] overflow-hidden">
            <span className="events-bg-char" aria-hidden="true">E</span>

            <div className="relative z-10">
              <p className="events-label-tag mb-8">Hour of Grace Believers Ministry</p>

              <h1 className="events-hero-title mb-10">
                Upcoming<br />
                <em>Events</em>
              </h1>

              <p
                className="text-[var(--stone)] text-lg max-w-lg leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Come gather with us — for worship, fellowship, and spiritual growth.
                Every event is an open door. You are welcome here.
              </p>
            </div>
          </div>

          {/* ── Events Component ── */}
          <div className="pt-16">
            <div className="relative mb-10">
              <p className="events-label-tag mb-3">Schedule</p>
              <h2 className="events-display text-4xl font-semibold text-[var(--ink)]">
                What's On
              </h2>
            </div>

            <hr className="events-divider mb-12" />

            {/* Events renders inside the same cream page — no wrapper box */}
            <Events />
          </div>

        </main>

        <Footer />
      </div>
    </>
  )
}