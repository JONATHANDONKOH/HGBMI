"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Give({ isHomepage = false }: { isHomepage?: boolean }) {
  return (
    <section className="w-full flex flex-col items-center relative z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Why You Must Give
          </h2>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto mb-12">
          <h3
            className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Your Giving Makes Eternal Impact
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            Experience the joy of giving and witness God's blessings overflow in
            your life. Your gift today is an investment in eternal impact that
            will echo through eternity.
          </p>
        </div>

        {/* Projects */}
        <div className="w-full mb-12">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Our Church Projects
          </h3>

          {/* GRID LAYOUT (FIXED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">

            {/* Card 1 */}
            <ProjectCard
              title="Building Fund"
              description="Help us expand our facilities to better serve our growing community."
              label="Building Fund"
              image="/church pro.jpg"
            />

            {/* Card 2 */}
            <ProjectCard
              title="Missions"
              description="Support our mission work both locally and internationally."
              label="Mission Work"
              image="/mission work.webp"
            />

            {/* Card 3 */}
            <ProjectCard
              title="Education"
              description="Fund educational programs and resources for our community."
              label="Education Support"
              image="/education support.webp"
            />

            {/* Card 4 */}
            <ProjectCard
              title="Community Aid"
              description="Help those in need through our community assistance programs."
              label="Community Support"
              image="/comm support.webp"
            />
          </div>

          {/* Button */}
          {isHomepage && (
            <div className="text-center mt-10">
              <Link href="/give">
                <Button
                  className="px-8 py-4 text-lg font-bold text-white animate-bounce hover:animate-none hover:scale-105 transition-transform"
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

/* ----------------- Card Component ----------------- */

function ProjectCard({
  title,
  description,
  label,
  image,
}: {
  title: string;
  description: string;
  label: string;
  image: string;
}) {
  return (
    <div
      className="relative w-full max-w-[300px] h-[240px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-[5px] border-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 text-center h-full flex flex-col justify-center">
        <h3
          className="text-xl font-bold text-white mb-3"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-white/90 text-sm mb-4">{description}</p>
        <span className="text-white font-semibold text-sm">{label}</span>
      </div>
    </div>
  );
}
