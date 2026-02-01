"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Give({ isHomepage = false }: { isHomepage?: boolean }) {
  const headerRef = useScrollAnimation('fadeInUp');
  const contentRef = useScrollAnimation('fadeInLeft', 0.2);
  const ctaRef = useScrollAnimation('scaleIn', 0.3);

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Header */}
        <div className="mb-16" ref={headerRef}>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            GIVING
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
            Supporting God's work through your generosity
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" ref={contentRef}>
          
          {/* Left: Message */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Why Give?
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Your generous giving is an investment in eternal impact. Every contribution supports our mission to spread God's love, reach the lost, and build stronger communities through faith.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Where Your Gift Goes
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3 items-center">
                  <img src="/mission work.webp" alt="Ministry & Outreach" className="w-20 h-20 rounded object-cover" />
                  <span><strong>Ministry & Outreach</strong> - Reaching souls and spreading God's word</span>
                </li>
                <li className="flex gap-3 items-center">
                  <img src="/comm support.webp" alt="Community Support" className="w-20 h-20 rounded object-cover" />
                  <span><strong>Community Support</strong> - Helping those in need within our community</span>
                </li>
                <li className="flex gap-3 items-center">
                  <img src="/giveee.jpg" alt="Building & Facilities" className="w-20 h-20 rounded object-cover" />
                  <span><strong>Building & Facilities</strong> - Expanding our worship spaces</span>
                </li>
                <li className="flex gap-3 items-center">
                  <img src="/education support.webp" alt="Education Programs" className="w-20 h-20 rounded object-cover" />
                  <span><strong>Education Programs</strong> - Nurturing spiritual growth</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Giving Options */}
          <div className="space-y-6">
            <div className="border-b-2 border-blue-600 pb-6">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                Give Today
              </h3>
              <p className="text-gray-300 mb-6">
                Choose how you'd like to support our ministry. Your gift makes a difference.
              </p>
              <div className="space-y-3">
                <Link href="/give/tithe">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 text-lg transition-all hover:scale-105" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                    Tithe
                  </button>
                </Link>
                <Link href="/give/offerings">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 text-lg transition-all hover:scale-105" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                    Offerings
                  </button>
                </Link>
                <Link href="/give/partner">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 text-lg transition-all hover:scale-105" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                    Partner with Us
                  </button>
                </Link>
                <Link href="/give/recurring">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 text-lg transition-all hover:scale-105" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                    Recurring Giving
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-gray-200 italic">
                "It is more blessed to give than to receive." - Acts 20:35
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        {isHomepage && (
          <div className="text-center bg-gradient-to-r from-blue-500/5 to-purple-600/5 border border-blue-500/20 rounded p-8" ref={ctaRef}>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
              Ready to Give?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the joy of giving and witness God's blessings overflow in your life.
            </p>
            <Link href="/give">
              <Button
                className="px-6 sm:px-10 py-6 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 animate-bounce hover:animate-none hover:scale-105 transition-transform"
                style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
              >
                Give Generously Today
              </Button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}


