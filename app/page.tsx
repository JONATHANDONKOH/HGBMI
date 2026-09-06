"use client"
import React, { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from '@/components/ui/button'
import Ministry from "@/components/Ministry"
import Verse from "@/components/Verse"
import Pastor from "@/components/Pastor"
import YouthPastor from "@/components/YouthPastor"
import Congregation from "@/components/Congregation"
import Events from "@/components/Events"
import Give from "@/components/Give"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function HomePage() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isHovering, setIsHovering] = useState(false)

	// Animation refs
	const heroTitleRef = useScrollAnimation('fadeInUp')
	const heroSubtitleRef = useScrollAnimation('fadeInUp', 0.15)
	const heroButtonsRef = useScrollAnimation('fadeInUp', 0.25)

	useEffect(() => {
		if (isHovering) return
		const interval = setInterval(() => {
			setCurrentSlide((prev) => prev + 1)
		}, 5000)
		return () => clearInterval(interval)
	}, [isHovering])

	return (
		<div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #4A90E2 0%, #000000 50%, #4e1bc5 100%)' }}>
			<Navbar />

			{/* Hero Section */}
			<div className="relative min-h-[70vh]">
				<div className="absolute top-0 left-0 w-full h-full z-0">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-full object-cover"
						style={{
							filter: 'contrast(1.3) brightness(0.8) blur(2px) sepia(0.2)',
							WebkitFilter: 'contrast(1.3) brightness(0.8) blur(2px) sepia(0.2)'
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
								color: '#FCCB06',
								filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 2px 8px #0008)',
								WebkitTextStroke: '1px #fff',
								fontFamily: '"Bebas Neue", sans-serif',
								fontWeight: '400',
								fontStyle: 'normal'
							}}
						>
							You are invited to join us at church!
						</h1>
						<p
							ref={heroSubtitleRef}
							className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-2xl mb-6"
							style={{
								color: '#FCCB06',
								filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 1px 4px #0006)',
								WebkitTextStroke: '0.5px #fff2',
								fontFamily: '"Bebas Neue", sans-serif',
								fontWeight: '400',
								fontStyle: 'normal'
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

			<div className="w-full py-6" style={{ backgroundColor: 'black', marginTop: '-20px', zIndex: 10 }} />

			{/* Verse Section */}
			<div className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden mb-4">
				<div className="max-w-7xl mx-auto">
					<Verse />
				</div>
			</div>

			{/* Ministry Section */}
			<div className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden mb-4">
				<div className="max-w-7xl mx-auto">
					<Ministry />
				</div>
			</div>

			{/* Pastor Section */}
			<div className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden mb-4">
				<div className="max-w-7xl mx-auto">
					<Pastor />
				</div>
			</div>

			{/* Youth Pastor Section */}
			<div
				className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl overflow-hidden"
				style={{ borderRadius: '16px' }}
			>
				<div className="max-w-7xl mx-auto">
					<YouthPastor />
				</div>
			</div>

			{/* Give Section */}
			<div className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<Give isHomepage={true} />
				</div>
			</div>

			{/* Congregation Section — fixed: single className, no duplicate props */}
			<div
				className="give-section w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl overflow-hidden mb-10 md:mb-0 -mt-12 md:-mt-16 relative z-10"
				style={{ backgroundColor: 'var(--card)' }}
			>
				<div className="max-w-7xl mx-auto">
					<Congregation />
				</div>
			</div>

			{/* Events Section */}
			<div className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl mb-[50px] mt-5 lg:mt-0 lg:z-20 lg:relative">
				<div className="max-w-7xl mx-auto">
					<Events limit={3} />
				</div>
			</div>

			{/* Find Us on the Map Section */}
			<section className="w-screen -ml-[calc((100vw-100%)/2)] py-8 md:py-12 lg:py-16 shadow-2xl overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg">
						<h2
							className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center"
							style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
						>
							Find Us on the Map
						</h2>
						<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
							{/* Embedded Google Map */}
							<div className="flex-1">
								<div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4474528338947!2d-0.05825892555233181!3d5.648218294333065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81357e6bb9db%3A0xdf659928606db91e!2sHour%20of%20Grace%20Believers%20Ministries%20International!5e0!3m2!1sen!2sgh!4v1762594726158!5m2!1sen!2sgh"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										title="Church Location Map"
									/>
								</div>
							</div>

							{/* Text Directions */}
							<div className="flex-1">
								<h3
									className="text-xl sm:text-2xl font-bold text-white mb-4"
									style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
								>
									Directions to Our Church
								</h3>
								<div className="space-y-4 text-white text-sm sm:text-base">
									<div>
										<h4 className="font-semibold text-white mb-2">From Accra Central:</h4>
										<p className="leading-relaxed">
											Take the Tema Motorway (N1) towards Tema. Exit at the Community 25 junction and turn left onto the main road.
											Continue straight for approximately 2km until you reach the Hour of Grace Believers Ministries International building on your right.
											Look for the distinctive church signage and ample parking area.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-white mb-2">From Tema:</h4>
										<p className="leading-relaxed">
											Head towards Accra on the Tema Motorway (N1). Take the Community 25 exit and turn right onto the access road.
											Follow the road for about 1.5km. The church will be visible on your left with clear directional signs.
											Our location is easily accessible with good road conditions throughout the route.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-white mb-2">Public Transport:</h4>
										<p className="leading-relaxed">
											Multiple tro-tro routes serve this area. Routes from Accra Central (37, 38, 39) and Tema (1, 2, 3) stop near Community 25.
											From the tro-tro stop, it's a short 5-minute walk to the church. Taxis are also readily available in the area.
										</p>
									</div>
									<div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
										<p className="text-xs sm:text-sm text-white font-medium">
											<strong>Note:</strong> Free parking is available on-site. For large groups or special events, please contact us in advance for parking arrangements.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
