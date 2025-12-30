import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Congregation() {
  return (
    <main>
<section className="w-full py-10 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 text-balance" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Our Congregation</h2>
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              A diverse community of believers united in faith, love, and service. Join us on this spiritual journey.
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Large featured image */}
            <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group" style={{ border: '5px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
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
              <div className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group" style={{ border: '5px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/quire.jpg"
                  alt="Quire image"
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group" style={{ border: '5px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/marry.jpg"
                  alt="Marry image"
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Congregation Info Card */}
          <div className="mb-16" style={{ perspective: '1500px' }}>
            <div className="ground" style={{
              transform: 'rotateX(90deg) translateZ(-100px)',
              backgroundColor: '#f5f5f5',
              width: '100%',
              height: '150px',
              position: 'absolute',
              bottom: '0',
              left: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: 'red',
              fontFamily: '"Bebas Neue", sans-serif',
              letterSpacing: '1rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              zIndex: 10,
              transformStyle: 'preserve-3d'
            }}>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(20px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                S
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(15px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                A
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(10px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                L
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(5px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                V
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(0px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                A
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(-5px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                T
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(-10px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                I
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(-15px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                O
              </span>
              <span style={{
                display: 'inline-block',
                transform: 'rotateX(-90deg) translateZ(-20px)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)'
              }}>
                N
              </span>
            </div>
            <div className="wall bg-white rounded-xl p-12 shadow-sm hover:shadow-md transition-shadow text-center" style={{
              transform: 'translateZ(50px)',
              position: 'relative'
            }}>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>About Our Congregation</h3>
              <p className="text-lg text-[#374151] leading-relaxed max-w-4xl mx-auto">
                Our congregation is a vibrant community of over 500 members from all walks of life, united in faith and service.
                With more than 25 active ministries and over 50 years of serving our community, we continue to grow and make
                a positive impact in the lives of those around us. Join us in our mission to spread God's love and grace to everyone.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-balance">Become Part of Our Family</h3>
            <p className="text-lg text-[#e0f0ff] mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're new to faith or have been walking with God for years, there's a place for you here. Join us
              this Sunday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-bounce hover:animate-none"
                >
                  Join Us Sunday
                </Button>
              </Link>
              <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent animate-bounce hover:animate-none"
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
