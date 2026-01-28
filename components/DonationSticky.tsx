"use client"

import Link from "next/link"

export function DonationSticky() {
  return (
    <Link href="/give">
      <div 
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
      >
        <div className="bg-white text-black font-bold px-2 py-6 rounded-l-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer writing-mode-vertical text-center" style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '1px'
        }}>
          Give Generously
        </div>
      </div>
    </Link>
  )
}

