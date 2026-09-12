"use client"

import React from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Congregation from "@/components/congrgation"
import LocationSection from "@/components/location"
import PastorSection from "@/components/mypastor"
import ServiceSection from "@/components/service"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function HomePage() {
	const heroTitleRef = useScrollAnimation("fadeInUp")
	const heroSubtitleRef = useScrollAnimation("fadeInUp", 0.15)
	const heroButtonsRef = useScrollAnimation("fadeInUp", 0.25)

	return (
		<div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #4A90E2 0%, #000000 50%, #4e1bc5 100%)" }}>
			<Navbar />

			<div className="relative min-h-[70vh]">
				<div className="absolute top-0 left-0 w-full h-full z-0">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-full object-cover"
						style={{
							filter: "contrast(1.3) brightness(0.8) blur(2px) sepia(0.2)",
							WebkitFilter: "contrast(1.3) brightness(0.8) blur(2px) sepia(0.2)"
						}}
					>
						<source src="/videos/WEEKLY INTRO.m4v" type="video/mp4" />
					</video>
				</div>

				<div className="absolute inset-0 flex flex-col items-center justify-start z-10 pt-32 md:pt-[170px] lg:pt-40">
					<div className="flex flex-col items-center">
						<h1
							ref={heroTitleRef}
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-4"
							style={{
								color: "#FCCB06",
								filter: "brightness(1.2) contrast(1.2) drop-shadow(0 2px 8px #0008)",
								WebkitTextStroke: "1px #fff",
								fontFamily: '"Bebas Neue", sans-serif',
								fontWeight: "400",
								fontStyle: "normal"
							}}
						>
							You are invited to join us at church!
						</h1>
						<p
							ref={heroSubtitleRef}
							className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-2xl mb-6"
							style={{
								color: "#FCCB06",
								filter: "brightness(1.2) contrast(1.2) drop-shadow(0 1px 4px #0006)",
								WebkitTextStroke: "0.5px #fff2",
								fontFamily: '"Bebas Neue", sans-serif',
								fontWeight: "400",
								fontStyle: "normal"
							}}
						>
							Experience community, worship, and inspiration every week. All are welcome!
						</p>
						<div
							ref={heroButtonsRef}
							className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full items-center justify-center"
						>
							<Link href="/affirmation">
								<Button
									className="px-10 py-2 lg:py-3 text-lg text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce hover:animate-none"
									style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
								>
									Daily Affirmation
								</Button>
							</Link>
							<Link href="/messages">
								<Button
									className="px-10 py-2 lg:py-3 text-lg text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 animate-bounce hover:animate-none"
									style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
								>
									Messages
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full py-6" style={{ backgroundColor: "black", marginTop: "-20px", zIndex: 10 }} />

			<Congregation />
			<PastorSection />
			<LocationSection />
			<ServiceSection />

			<Footer />
		</div>
	)
}
