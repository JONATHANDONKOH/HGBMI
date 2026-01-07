"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ministries = [
  {
    title: "Pleroma Fellowship",
    slug: "pleroma",
    image: "/quire.jpg",
    about: "Uplifting worship through music and praise.",
  },
  {
    title: "Light Fellowship",
    slug: "campus",
    image: "/campus.jpg",
    about: "Guiding young hearts in faith and joy.",
  },
  {
    title: "Klagon Fellowship",
    slug: "klagon",
    image: "/vhh.jpg",
    about: "Empowering students with spiritual growth.",
  },
  {
    title: "Nungua Fellowship",
    slug: "nungua",
    image: "/kyt.jpg",
    about: "Building community through shared faith.",
  },
];

export default function Ministry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 🔒 Only track scroll on MOBILE
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) return;

    const handleScroll = () => {
      const cardWidth = container.firstElementChild?.clientWidth || 1;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 1;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full py-12 flex flex-col items-center overflow-x-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/sky me.webp') center/cover no-repeat`,
      }}
    >
      {/* HEADER */}
      <div className="w-full max-w-5xl px-4 sm:px-6 mb-10">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          style={{ fontFamily: '"Bebas Neue", sans-serif', color: "#1560BD" }}
        >
          Our Fellowship
        </h2>
        <p className="text-white max-w-xl mt-4">
          The church is a sanctuary where hearts gather to worship, heal, and grow
          in faith. Through prayer, fellowship, and service, it becomes a living
          testimony of God's grace and love.
        </p>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-7xl">
        <div
          ref={scrollContainerRef}
          className="
            flex lg:grid
            lg:grid-cols-4
            gap-6
            px-4
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory
          "
        >
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="
                bg-white rounded-xl shadow-md p-6
                w-[280px] sm:w-[300px] lg:w-full
                min-h-[380px]
                flex-shrink-0 lg:flex-shrink
                snap-center
                transition-transform duration-300
                hover:scale-105
              "
            >
              <div className="h-40 rounded-lg overflow-hidden mb-4">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                {ministry.title}
              </h3>

              <p className="text-gray-700 text-center mb-4">
                {ministry.about}
              </p>

              <Button asChild className="mx-auto block font-bold">
                <Link href={`/fellowship/${ministry.slug}`}>
                  Read More
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* DOTS (MOBILE ONLY) */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {ministries.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-blue-600" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
