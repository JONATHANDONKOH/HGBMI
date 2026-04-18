"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Building2 } from "lucide-react";

export default function Give({ isHomepage = false }: { isHomepage?: boolean }) {
  const headerRef = useScrollAnimation("fadeInUp");
  const contentRef = useScrollAnimation("fadeInLeft", 0.2);
  const ctaRef = useScrollAnimation("scaleIn", 0.3);

  const givingCategories = [
    {
      img: "/mission work.webp",
      label: "Ministry & Outreach",
      desc: "Reaching souls and spreading God's word to the ends of the earth",
    },
    {
      img: "/comm support.webp",
      label: "Community Support",
      desc: "Caring for those in need within and beyond our walls",
    },
    {
      img: "/giveee.jpg",
      label: "Building & Facilities",
      desc: "Expanding and maintaining our places of worship",
    },
    {
      img: "/education support.webp",
      label: "Education Programs",
      desc: "Nurturing spiritual growth across every generation",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .give-section {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --cream: #FAF7F2;
          --ink: #1A1612;
          --stone: #6B6057;
          --divider: #E0D8CC;
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
        }

        .give-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .give-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(4rem, 10vw, 8rem);
          letter-spacing: -0.02em;
          line-height: 0.9;
          color: var(--ink);
        }

        .give-hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .category-item {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 1rem;
          align-items: start;
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--divider);
          transition: opacity 0.2s;
        }
        .category-item:last-child { border-bottom: none; }
        .category-item:hover { opacity: 0.8; }

        .category-img {
          width: 72px;
          height: 72px;
          object-fit: cover;
          filter: grayscale(30%) sepia(10%);
        }

        .scripture-block {
          border-left: 2px solid var(--gold);
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
        }

        .cta-block {
          background-color: var(--ink);
          color: var(--cream);
          padding: 4rem 3rem;
          position: relative;
          overflow: hidden;
        }
        .cta-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse at top right, rgba(201,168,76,0.15), transparent 60%);
          pointer-events: none;
        }

        .cta-give-btn {
          display: inline-block;
          background: var(--gold);
          color: var(--ink) !important;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .cta-give-btn:hover {
          background: var(--gold-light);
          transform: translateY(-1px);
        }

        .label-tag {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .label-tag::before {
          content: '';
          display: inline-block;
          width: 1.5rem;
          height: 1px;
          background: var(--gold);
        }

        .section-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 300;
          color: var(--divider);
          line-height: 1;
          position: absolute;
          top: -0.8rem;
          right: 0;
        }

        .payment-card {
          background: white;
          border: 1px solid var(--divider);
          border-radius: 2px;
          padding: 1.25rem 1.5rem;
        }

        .payment-card p {
          font-size: 0.875rem;
          color: var(--stone);
          margin-bottom: 0.25rem;
        }
        .payment-card p:last-child { margin-bottom: 0; }
      `}</style>

      <section className="give-section w-full mb-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">

          {/* ── Hero ── */}
          <div ref={headerRef} className="pt-20 pb-16 border-b border-[var(--divider)]">
            <p className="label-tag mb-8">Financial Stewardship</p>
            <h1 className="give-hero-title mb-8">
              Give <em>Generously,</em><br />
              Live Abundantly
            </h1>
            <p className="text-[var(--stone)] text-lg max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>
              Every gift you offer is a seed of faith — sown into lives, communities,
              and a mission that stretches beyond what we can see.
            </p>
          </div>

          {/* ── Main Content ── */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 border-b border-[var(--divider)]">

            {/* Left: Where gifts go */}
            <div>
              <div className="relative mb-10">
                <span className="section-number">01</span>
                <p className="label-tag mb-3">Allocation</p>
                <h2 className="give-display text-4xl font-semibold">Where Your Gift Goes</h2>
              </div>

              <div>
                {givingCategories.map(({ img, label, desc }) => (
                  <div key={label} className="category-item">
                    <img src={img} alt={label} className="category-img" />
                    <div>
                      <p className="font-medium text-sm mb-0.5">{label}</p>
                      <p className="text-[var(--stone)] text-sm leading-relaxed" style={{ fontWeight: 300 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Payment Information */}
            <div>
              <div className="relative mb-10">
                <span className="section-number">02</span>
                <p className="label-tag mb-3">Payment Details</p>
                <h2 className="give-display text-4xl font-semibold">Make a Donation</h2>
              </div>

              <p className="text-[var(--stone)] text-sm leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                Send your donations using the payment details below. Your contribution makes an eternal difference.
              </p>

              <div className="space-y-6">
                {/* Mobile Money */}
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-[var(--ink)] flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[var(--gold)]" />
                    Mobile Money (Momo)
                  </h4>
                  <div className="payment-card">
                    <p>Phone Number</p>
                    <p className="font-mono font-bold text-[var(--ink)] text-base">0246 819 964</p>
                    <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: "var(--stone)" }}>Apostle Prince Ofosu Hene</p>
                  </div>
                </div>

                {/* Bank Account */}
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-[var(--ink)] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[var(--gold)]" />
                    Bank Account
                  </h4>
                  <div className="payment-card">
                    <p>Bank</p>
                    <p className="font-bold text-[var(--ink)]">Stanbic Bank</p>
                    <p className="mt-3">Account Number</p>
                    <p className="font-mono font-bold text-[var(--ink)] text-base">9040002232337</p>
                    <p className="mt-3">Account Name</p>
                    <p className="font-bold text-[var(--ink)] uppercase tracking-wide text-sm">Prince Ofosu Hene</p>
                  </div>
                </div>

                {/* Note */}
                <div className="border-l-2 border-[var(--gold)] pl-4 py-1">
                  <p className="text-xs text-[var(--stone)] leading-relaxed">
                    Please include the donation type in your reference — e.g. <em>Tithe</em>, <em>Offering</em>, <em>Building Fund</em>, or <em>Missions</em>.
                  </p>
                </div>
              </div>

              <div className="scripture-block mt-8">
                <p className="give-display text-xl font-light italic text-[var(--ink)] leading-relaxed mb-2">
                  "It is more blessed to give than to receive."
                </p>
                <p className="label-tag">Acts 20:35</p>
              </div>
            </div>

          </div>

          {/* ── CTA ── */}
          {isHomepage && (
            <div ref={ctaRef} className="py-16">
              <div className="cta-block">
                <p className="label-tag mb-6" style={{ color: "rgba(250,247,242,0.4)" }}>
                  <span style={{ background: "rgba(201,168,76,0.6)", height: "1px", width: "1.5rem", display: "inline-block", marginRight: "0.6rem", verticalAlign: "middle" }}></span>
                  Start Giving
                </p>
                <h3 className="give-display text-5xl font-light text-[var(--cream)] mb-4">
                  Ready to make<br /><em>your mark?</em>
                </h3>
                <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(250,247,242,0.6)", fontWeight: 300 }}>
                  Experience the joy of generosity. Witness God's faithfulness overflow
                  into every area of your life.
                </p>
                <Link href="/give">
                  <button className="cta-give-btn">Give Generously Today</button>
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}