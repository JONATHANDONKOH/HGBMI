"use client"

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from '@/components/ui/button'

const ministries = [
  {
    title: "Spintex Fellowship",
    image: "/vhh.jpg",
    about: "Uplifting worship through music and praise.",
  },
  {
    title: "Campus Fellowship",
    image: "/campus.jpg",
    about: "Guiding young hearts in faith and joy.",
  },
  {
    title: "Klagon Fellowship",
    image: "/quire.jpg",
    about: "Empowering students with spiritual growth.",
  },
  {
    title: "Nungua Fellowship",
    image: "/kyt.jpg",
    about: "Building community through shared faith.",
  },
];

export default function Ministry() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section
      className="w-full min-h-[20vh] py-12 flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/sky me.webp') center/cover no-repeat`,
        boxShadow: '0 0 40px 0 rgba(0,0,0,0.06)'
      }}
    >
      <div className="w-full max-w-5xl px-4 flex flex-col items-start mb-8">
        <h2
          className="text-5xl lg:text-7xl font-bold leading-tight"
          style={{ fontFamily: '"Bebas Neue", sans-serif', color: "#1560BD" }}
        >
          Our Fellowship
        </h2>

        <div className="flex flex-row items-start mt-3 w-full gap-4">
          <div className="w-[4px] self-stretch bg-red-600 rounded shrink-0" />
          <p className="text-lg text-white text-left max-w-xl">
            The church is a sanctuary where hearts gather to worship, heal, and grow in faith.
            Through prayer, fellowship, and service, it becomes a living testimony of God's grace
            and love. Each gathering is a reminder that we are not alone—called together for
            purpose, peace, and transformation.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="
          flex flex-row flex-nowrap items-stretch
          snap-x snap-mandatory
          gap-4 sm:gap-6
          w-full max-w-7xl
          px-4 sm:px-6
          [scroll-padding-left:1rem] sm:[scroll-padding-left:1.5rem]
          overflow-x-auto
          pb-6
          scroll-smooth
          scrollbar-hide
        "
      >
        {ministries.map((ministry) => (
          <div
            key={ministry.title}
            className="
              shrink-0 snap-start
              flex flex-col items-center
              bg-white rounded-xl shadow-md p-6
              w-[72vw] sm:w-[260px] md:w-[300px] lg:w-[280px] xl:w-[300px]
              min-h-[380px]
              hover:scale-[1.02] transition-transform duration-300
            "
          >
            <img
              src={ministry.image}
              alt={ministry.title}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-3 text-blue-900 text-center">
              {ministry.title}
            </h3>
            <p className="text-gray-700 text-center mb-4 text-lg">{ministry.about}</p>
            <Button
              asChild
              className="mt-auto px-6 py-2 rounded-md font-bold shadow hover:scale-105 transition-transform duration-200 animate-bounce hover:animate-none"
            >
              <Link href="/fellowship">
                Read More
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}