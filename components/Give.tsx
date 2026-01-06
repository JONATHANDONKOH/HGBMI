"use client"

import React from "react";
import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function Give({ isHomepage = false }: { isHomepage?: boolean }) {
  return (
    <section
      className="w-full flex flex-col items-center relative z-20 mb-0"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif', position: 'relative', bottom: '30px' }}>
            Why You Must Give
          </h2>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-7 md:p-8 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Your Giving Makes Eternal Impact
          </h3>
          <p className="text-gray-600 mb-0 text-base sm:text-base md:text-lg">
            Experience the joy of giving and witness God's blessings overflow in your life. Your gift today is an investment in eternal impact that will echo through eternity.
          </p>
        </div>

        {/* Images Container - Church Projects */}
        <div className="w-full max-w-7xl mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 sm:mb-7 md:mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Our Church Projects
          </h3>

          {/* Responsive Image Layout */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center items-center mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-[400px] md:max-w-[450px] lg:w-[280px] xl:w-[320px] 2xl:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[220px] xl:h-[250px] 2xl:h-[240px]" style={{ border: '5px solid white' }}>
              <div
                className="p-6 text-center h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/church pro.jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Building Fund
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-sm">
                    Help us expand our facilities to better serve our growing community.
                  </p>
                  <div className="text-white font-semibold text-sm">
                    Building Fund
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-[400px] md:max-w-[450px] lg:w-[280px] xl:w-[320px] 2xl:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[220px] xl:h-[250px] 2xl:h-[240px]" style={{ border: '5px solid white' }}>
              <div
                className="p-6 text-center h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/mission work.webp")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Missions
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-sm">
                    Support our mission work both locally and internationally.
                  </p>
                  <div className="text-white font-semibold text-sm">
                    Mission Work
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-[400px] md:max-w-[450px] lg:w-[280px] xl:w-[320px] 2xl:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[220px] xl:h-[250px] 2xl:h-[240px]" style={{ border: '5px solid white' }}>
              <div
                className="p-6 text-center h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/education support.webp")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Education
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-sm">
                    Fund educational programs and resources for our community.
                  </p>
                  <div className="text-white font-semibold text-sm">
                    Education Support
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-[400px] md:max-w-[450px] lg:w-[280px] xl:w-[320px] 2xl:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[220px] xl:h-[250px] 2xl:h-[240px]" style={{ border: '5px solid white' }}>
              <div
                className="p-6 text-center h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/comm support.webp")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    Community Aid
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-sm">
                    Help those in need through our community assistance programs.
                  </p>
                  <div className="text-white font-semibold text-sm">
                    Community Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isHomepage && (
            <div className="text-center">
              <Link href="/give">
                <Button
                  className="px-6 sm:px-7 md:px-8 py-3 sm:py-3 md:py-4 text-base sm:text-base md:text-lg font-bold text-white animate-bounce hover:animate-none hover:scale-105 transition-transform duration-200"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  Give Generously Today
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

