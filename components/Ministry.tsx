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
      <div className="w-full max-w-5xl flex flex-col items-start">
  <h2 className="fellowship-header text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance" style={{ fontFamily: '"Bebas Neue", sans-serif', color: "#1560BD", position: 'relative' }}>
          Our Fellowship
        </h2>
        <div className="flex flex-row items-start justify-center gap-[160px] mt-[10px] mb-10 w-full">
          <div className="flex flex-row items-start">
            <div className="h-full w-[4px] bg-red-600 rounded mr-6"></div>
            <p className="text-lg text-white text-left max-w-xl ml-[170px]">
              The church is a sanctuary where hearts gather to worship, heal, and grow in faith. Through prayer, fellowship, and service, it becomes a living testimony of God’s grace and love. Each gathering is a reminder that we are not alone—called together for purpose, peace, and transformation
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-stretch justify-center gap-6 md:gap-8 w-full max-w-7xl px-4 md:px-6 overflow-x-auto">
        {ministries.map((ministry, index) => (
          <div key={ministry.title} className={`flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px] md:w-[340px] lg:w-[280px] xl:w-[320px] min-h-[360px] transform-style-preserve-3d ${index === 0 ? 'rotate-y-[10deg]' : index === 3 ? 'rotate-y-[-10deg]' : ''} hover:rotate-y-0 transition-all duration-300`}>
            <img src={ministry.image} alt={ministry.title} className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-blue-900 text-center">{ministry.title}</h3>
            <p className="text-black-700 text-center mb-4 text-lg">{ministry.about}</p>
            <Button asChild className="mt-auto px-6 py-2 rounded-md font-bold shadow hover:scale-105 transition-transform duration-200 inline-block text-center animate-bounce hover:animate-none">
              <Link href={`/ministries/${ministry.title.toLowerCase().replace(' fellowship', '')}`}>
                Read More
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}