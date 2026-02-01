"use client"

import Link from "next/link"

export function DonationSticky() {
  return (
    <Link href="/give">
      <div 
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
      >
        <div className="bg-white text-red font-bold px-0 py-3 sm:py-6 rounded-l-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer writing-mode-vertical text-center text-[12px] sm:text-[15px] w-auto h-auto" style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          letterSpacing: '1px'
        }}>
          <span className="block sm:hidden">Give generously</span>
          <span className="hidden sm:block">Give generously</span>
        </div>
      </div>
    </Link>
  )
}

