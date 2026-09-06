```tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Congregation() {
  return (
    <main>
      <section className="w-full py-10 mt-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 text-balance"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
              }}
            >
              A diverse community of believers
            </h2>

            <p
              className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
              }}
            >
              United in faith, love, and service. Join us on this spiritual
              journey.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            {/* Large featured image */}
            <div
              className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group"
              style={{
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/cong.jpg"
                alt="Congregation worshipping together"
                fill
                quality={95}
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Two smaller images stacked */}
            <div className="flex flex-col gap-6">

              {/* Choir */}
              <div
                className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group"
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/quire.jpg"
                  alt="Choir image"
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Marriage */}
              <div
                className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group"
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/marry.jpg"
                  alt="Marriage ceremony"
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

            </div>
          </div>

          {/* Congregation Info Card */}
          <div
            className="mb-16"
            style={{
              perspective: "1500px",
            }}
          >

            {/* SALVATION 3D text */}
            <div
              className="ground"
              style={{
                transform: "rotateX(90deg) translateZ(-100px)",
                width: "100%",
                height: "150px",
                position: "absolute",
                bottom: "0",
                left: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                fontWeight: "bold",
                color: "red",
                fontFamily: '"Bebas Neue", sans-serif',
                letterSpacing: "1rem",
                textShadow: "3px 3px 6px rgba(0,0,0,0.5)",
                zIndex: 10,
                transformStyle: "preserve-3d",
              }}
            >
              {"SALVATION".split("").map((letter, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    transform: `rotateX(-90deg) translateZ(${20 - i * 5}px)`,
                    textShadow:
                      "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Congregation wall */}
            <div
              className="wall rounded-xl p-12 shadow-sm hover:shadow-md transition-shadow text-center"
              style={{
                transform: "translateZ(50px)",
                position: "relative",
              }}
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                }}
              >
                Our Congregation
              </h3>

              <p
                className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                }}
              >
                Our congregation is a vibrant, welcoming community united in
                faith and service. We gather regularly to worship, support one
                another, and share God's love with our neighbors. Everyone is
                invited to experience fellowship, encouragement, and spiritual
                growth with us.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl p-12 text-center">

            <h3
              className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 text-balance"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
              }}
            >
              Become Part of Our Family
            </h3>

            <p
              className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto mb-6"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
              }}
            >
              Whether you're new to faith or have been walking with God for
              years, there's a place for you here. Join us this Sunday.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Join Us */}
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Join Us Sunday
                </Button>
              </Link>

              {/* Learn More */}
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Learn More
                </Button>
              </Link>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
```
