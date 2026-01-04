import React from "react";
import Link from "next/link";
import { Button } from '@/components/ui/button'

const ministries = [
  {
    title: "Spintex Fellowship",
    image: "/vhh.jpg", // Updated to use vhh.jpg from public
    about: "Uplifting worship through music and praise.",
  },
  {
    title: "Campus Fellowship",
    image: "/campus.jpg", // Campus image moved to second container
    about: "Guiding young hearts in faith and joy.",
  },
  {
    title: "Klagon Fellowship",
    image: "/quire.jpg", // Added quire image as third image
    about: "Empowering students with spiritual growth.",
  },
  {
    title: "Nungua Fellowship",
    image: "/kyt.jpg", // Added kyt.jpg as image for last container
    about: "Building community through shared faith.",
  },
];

export default function Ministry() {
  return (
  <section
    className="w-full min-h-[20vh] py-12 flex flex-col items-center justify-center"
    style={{
      background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/sky me.webp') center/cover no-repeat`,
      boxShadow: '0 0 40px 0 rgba(0,0,0,0.06)'
    }}
  >
      <div className="w-full max-w-5xl flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-6">
        <h2 className="fellowship-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance" style={{ fontFamily: '"Bebas Neue", sans-serif', color: "#1560BD", position: 'relative' }}>
          Our Fellowship
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 lg:gap-[160px] mt-[10px] mb-10 w-full">
          <div className="flex flex-row items-start w-full md:w-auto">
            <div className="h-full w-[4px] bg-blue-600 rounded mr-4 md:mr-5 lg:mr-6 flex-shrink-0"></div>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-white text-left max-w-xl lg:ml-[170px]">
              The church is a sanctuary where hearts gather to worship, heal, and grow in faith. Through prayer, fellowship, and service, it becomes a living testimony of God's grace and love. Each gathering is a reminder that we are not alone—called together for purpose, peace, and transformation
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex overflow-x-auto gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ministries.map((ministry, index) => (
          <div
            key={ministry.title}
            className={`flex flex-col items-center bg-white rounded-xl shadow-md p-6 sm:p-5 md:p-6 flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[280px] 2xl:w-[320px] min-h-[400px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[360px] snap-center ${index === 0 ? 'lg:rotate-y-[10deg]' : index === 3 ? 'lg:rotate-y-[-10deg]' : ''} hover:rotate-y-0 transition-all duration-300`}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 w-full h-40 sm:h-44 md:h-48 lg:h-40">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'auto',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-3 text-blue-900 text-center"
            >
              {ministry.title}
            </h3>
            <p
              className="text-gray-700 text-center mb-4 text-base sm:text-base md:text-base"
            >
              {ministry.about}
            </p>
            <div>
              <Button asChild className="mt-auto px-6 py-2 rounded-md font-bold shadow hover:scale-105 transition-transform duration-200 inline-block text-center animate-bounce hover:animate-none">
                <Link href={`/ministries/${ministry.title.toLowerCase().replace(' fellowship', '')}`}>
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

