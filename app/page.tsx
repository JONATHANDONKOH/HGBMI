"use client"
import React, { useState, useEffect, FormEvent } from "react"
import { Navbar } from "@/components/navbar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from '@/components/ui/button'
import Ministry from "@/components/Ministry"
import Verse from "@/components/Verse"
import Pastor from "@/components/Pastor"
import YouthPastor from "@/components/YouthPastor"
import Congregation from "@/components/Congregation"
import Events from "@/components/Events"
import Give from "@/components/Give"
import Footer from "@/components/Footer"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

const books = [
	{
		id: 1,
		title: "Grace & Faith",
		about: "Discover the transformative power of God's grace in your daily walk. This inspiring book explores how faith can move mountains and bring peace to your heart.",
		coverImage: "/grace-book-cover.jpg",
		ctaText: "Read More"
	},
	{
		id: 2,
		title: "Leadership in Ministry",
		about: "Learn essential leadership principles for effective ministry. Perfect for church leaders, small group facilitators, and anyone called to serve.",
		coverImage: "/leadership-book-cover.png",
		ctaText: "Buy Now"
	},
	{
		id: 3,
		title: "Spiritual Growth",
		about: "A comprehensive guide to deepening your relationship with God through prayer, study, and community. Transform your spiritual journey today.",
		coverImage: "/spiritual-book-cover.jpg",
		ctaText: "Get Started"
	},
	{
		id: 4,
		title: "Prayer Power",
		about: "Unlock the power of prayer in your life with practical steps and biblical wisdom.",
		coverImage: "/prayer-book-cover.jpg",
		ctaText: "Learn More"
	},
	{
		id: 5,
		title: "Praise & Worship",
		about: "A guide to living a life of praise and worship every day.",
		coverImage: "/praise-music-cover.jpg",
		ctaText: "Sing Along"
	},
	{
		id: 6,
		title: "Teaching & Discipleship",
		about: "Grow as a disciple and teacher in your faith journey.",
		coverImage: "/discipleship-sermon-cover.jpg",
		ctaText: "Start Learning"
	}
]

export default function HomePage() {
	const router = useRouter()
	const { signUp, signIn, user } = useAuth()
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isHovering, setIsHovering] = useState(false)
	const [showLogin, setShowLogin] = useState(false)
	const [bookstoreCurrentSlide, setBookstoreCurrentSlide] = useState(0)

	// Auto-play carousel
	useEffect(() => {
		if (isHovering) return // Don't auto-play when hovering over arrows

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % books.length)
		}, 5000) // Change slide every 5 seconds

		return () => clearInterval(interval)
	}, [isHovering])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % books.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + books.length) % books.length)
	}

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}

	const bookstoreBooks = books.slice(0, 3)

	const nextBookstoreSlide = () => {
		setBookstoreCurrentSlide((prev) => (prev + 1) % bookstoreBooks.length)
	}

	const prevBookstoreSlide = () => {
		setBookstoreCurrentSlide((prev) => (prev - 1 + bookstoreBooks.length) % bookstoreBooks.length)
	}

	// Auto-play bookstore carousel (no hover interruption)
	useEffect(() => {
		if (!user) return // Don't auto-play if user is not logged in

		const interval = setInterval(() => {
			setBookstoreCurrentSlide((prev) => (prev + 1) % bookstoreBooks.length)
		}, 5000) // Change slide every 5 seconds

		return () => clearInterval(interval)
	}, [user, bookstoreBooks.length])

	return (
		<div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #4A90E2 0%, #000000 50%, #4e1bc5 100%)' }}>
			<Navbar />

			<div className="relative min-h-[70vh]">
				<div
					className="absolute top-0 left-0 w-full h-full z-0"
				>
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
					<div
						className="flex flex-col items-center"
					>
						<h1
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
						  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full items-center justify-center"
						>
						  <Link href="/affirmation">
						    <Button className="px-16 sm:px-20 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 bebas-neue-regular animate-bounce hover:animate-none" style={{ borderRadius: '7px', fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
						      Daily Affirmation
						    </Button>
						  </Link>
						  <Link href="/messages">
						    <Button className="px-16 sm:px-20 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 bebas-neue-regular animate-bounce hover:animate-none" style={{ borderRadius: '7px', fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
						      Messages
						    </Button>
						  </Link>
						</div>
					</div>
				</div>
			</div>

			{/* Marquee Books Section */}
			<div className="w-full overflow-hidden py-10 relative" style={{ backgroundColor: 'black', marginTop: '-20px', zIndex: 10 }}>
				<div className="relative w-full" style={{ height: '120px' }}>
					{/* Marquee container: duplicate books for seamless loop */}
					<div className="marquee-track flex items-center gap-8 animate-marquee" style={{ minWidth: '200%', width: 'max-content' }}>
						{[...books, ...books].map((book, idx) => (
							<div key={idx} className="flex flex-col items-center min-w-[120px] p-2 rounded-lg shadow-md" style={{ backgroundColor: 'black' }}>
								<img
									src={book.coverImage}
									alt={book.title}
									className="h-24 w-16 object-cover rounded-md mb-2"
								/>
								<span className="text-sm font-bold bebas-neue-regular text-white text-center">
									{book.title}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="w-full flex flex-col items-center justify-center mt-8">
					{/* Animated Denim Blue Bar */}
					<div className="w-full flex justify-center mb-6">
						<div className="h-1.5 w-3/4 rounded-full animate-denim-bar" style={{ background: 'linear-gradient(90deg, #1560BD 0%, #1E90FF 100%)' }}></div>
					</div>
					{user ? (
						/* Bookstore Card - Shown when user is authenticated */
						<div className="w-full max-w-7xl mx-auto px-4">
							<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8" style={{ color: 'white', fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
								Bookstore
							</h2>
							<div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
								{/* Carousel Container */}
								<div className="relative overflow-hidden min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[420px]">
									<div
										className="flex transition-transform duration-500 ease-in-out"
										style={{ transform: `translateX(-${bookstoreCurrentSlide * 100}%)` }}
									>
										{bookstoreBooks.map((book) => (
											<div
												key={book.id}
												className="w-full flex-shrink-0 flex justify-center px-2 sm:px-4"
											>
												<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] h-full">
													<div className="flex flex-col lg:flex-row h-full">
														{/* Book Cover Image */}
														<div className="w-full lg:w-[250px] xl:w-[300px] flex-shrink-0">
															<div className="bg-gray-200 overflow-hidden h-[240px] sm:h-[260px] lg:h-full xl:h-[400px]">
																<img
																	src={book.coverImage}
																	alt={book.title}
																	className="w-full h-full object-cover"
																/>
															</div>
														</div>
														{/* Book Info */}
														<div className="flex-1 flex flex-col justify-between p-3 sm:p-4 lg:p-6 xl:p-8">
															<div>
																<h3
																	className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 lg:mb-4 text-gray-800 text-center lg:text-left"
																	style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
																>
																	{book.title}
																</h3>
																{/* About text - hidden on mobile, visible on lg and above */}
																<p className="hidden lg:block text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mb-4 lg:mb-6 leading-relaxed" style={{ maxHeight: '180px', overflow: 'auto' }}>
																	{book.about}
																</p>
															</div>
															<Button
																className="w-full mt-2 lg:mt-0 bebas-neue-regular text-sm sm:text-base lg:text-lg xl:text-xl py-2 lg:py-3"
																style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
															>
																Buy
															</Button>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Navigation Arrows */}
								<button
									onClick={prevBookstoreSlide}
									className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10"
									aria-label="Previous book"
								>
									<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-gray-800" />
								</button>
								<button
									onClick={nextBookstoreSlide}
									className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10"
									aria-label="Next book"
								>
									<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-gray-800" />
								</button>

								{/* Carousel Indicators */}
								<div className="flex justify-center gap-2 mt-6">
									{bookstoreBooks.map((_, index) => (
										<button
											key={index}
											onClick={() => setBookstoreCurrentSlide(index)}
											className={`w-2 h-2 rounded-full transition-all duration-200 ${
												index === bookstoreCurrentSlide ? 'bg-white w-8' : 'bg-white/50'
											}`}
											aria-label={`Go to slide ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					) : (
						/* Sign Up/Login Forms - Shown when user is not authenticated */
						<>
							<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4" style={{ color: 'white', fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
								Sign up to receive life changing hope and encouragement!
							</h2>
							<div
								className="flex flex-col items-center justify-center w-full"
								style={{
									width: 'calc(100% - 20px)',
									marginLeft: '10px',
									marginRight: '10px',
									minHeight: '140px',
									boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
									padding: '18px 0',
								}}
							>
								<div className="flex gap-4 mb-6">
									<Button
										onClick={() => setShowLogin(false)}
										className={`px-6 py-2 text-base bebas-neue-regular ${!showLogin ? 'bg-blue-600' : 'bg-gray-400'}`}
										style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
									>
										Register
									</Button>
									<Button
										onClick={() => setShowLogin(true)}
										className={`px-6 py-2 text-base bebas-neue-regular ${showLogin ? 'bg-blue-600' : 'bg-gray-400'}`}
										style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
									>
										Login
									</Button>
								</div>

								{/* Register Form */}
								<form
									style={{
										opacity: showLogin ? '0' : '1',
										transition: 'opacity 0.3s ease-in-out',
										display: showLogin ? 'none' : 'flex',
									}}
									onSubmit={async (e: FormEvent) => {
										e.preventDefault()
										const formData = new FormData(e.target as HTMLFormElement)
										const name = formData.get('name') as string
										const email = formData.get('email') as string
										const password = formData.get('password') as string

										try {
											await signUp(email, password)
											// User will see bookstore card immediately after signup
										} catch (error) {
											console.error('Signup error:', error)
										}
									}}
									className="flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl sm:max-w-3xl justify-center items-center"
								>
									<input
										type="text"
										name="name"
										placeholder="Name"
										required
										className="px-3 py-2 rounded-md border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 truncate placeholder-white text-white bg-transparent"
									/>
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
										className="px-3 py-2 rounded-md border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 truncate placeholder-white text-white bg-transparent"
									/>
									<input
										type="password"
										name="password"
										placeholder="Password"
										required
										minLength={6}
										className="px-3 py-2 rounded-md border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 truncate placeholder-white text-white bg-transparent"
									/>
									<Button
										type="submit"
										className="px-6 py-2 rounded-md text-base bebas-neue-regular w-full sm:w-80 animate-bounce hover:animate-none"
										style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
									>
										Register
									</Button>
								</form>

								{/* Login Form */}
								<form
									style={{
										opacity: showLogin ? '1' : '0',
										transition: 'opacity 0.3s ease-in-out',
										display: showLogin ? 'flex' : 'none',
									}}
									onSubmit={async (e: FormEvent) => {
										e.preventDefault()
										const formData = new FormData(e.target as HTMLFormElement)
										const email = formData.get('email') as string
										const password = formData.get('password') as string

										try {
											await signIn(email, password)
											// User will see bookstore card immediately after signin
										} catch (error) {
											console.error('Login error:', error)
										}
									}}
									className="flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl sm:max-w-3xl justify-center items-center"
								>
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
										className="px-3 py-2 rounded-md border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 truncate placeholder-white text-white bg-transparent"
									/>
									<input
										type="password"
										name="password"
										placeholder="Password"
										required
										minLength={6}
										className="px-3 py-2 rounded-md border border-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 truncate placeholder-white text-white bg-transparent"
									/>
									<Button
										type="submit"
										className="px-6 py-2 rounded-md text-base bebas-neue-regular w-full sm:w-80 animate-bounce hover:animate-none"
										style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
									>
										Login
									</Button>
								</form>

								<div className="mt-4 text-center w-full">
									<span className="text-gray-600 text-sm">Sign up to purchase the book</span>
								</div>
							</div>
						</>
					)}
				</div>
			</div>

			<div
				className="mb-4 w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden"
			>
				<div className="max-w-7xl mx-auto">
					<Verse />
				</div>
			</div>
			<div
				className="mb-4 w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden"
			>
				<div className="max-w-7xl mx-auto">
					<Ministry />
				</div>
			</div>
			<div
				className="mb-4 w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden"
			>
				<div className="max-w-7xl mx-auto">
					<Pastor />
				</div>
			</div>
			<div
				className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl overflow-hidden"
				style={{ borderRadius: '16px' }}
			>
				<div className="max-w-7xl mx-auto">
					<YouthPastor />
				</div>
			</div>
<div
		className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl overflow-hidden"
>
		<div className="max-w-7xl mx-auto">
			 <Give isHomepage={true} />
		</div>
</div>
<div
		className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-2xl shadow-xl overflow-hidden mb-10 md:mb-0 -mt-12 md:-mt-16 relative z-10"
>
		<div className="max-w-7xl mx-auto">
			 <Congregation />
		</div>
</div>
			<div
				className="w-screen -ml-[calc((100vw-100%)/2)] py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 shadow-xl mb-[50px] mt-5 lg:mt-0 lg:z-20 lg:relative"
			>
				<div className="max-w-7xl mx-auto">
					<Events limit={3} />
				</div>
			</div>

			{/* Find Us on the Map Section */}
			<section
				className="w-screen -ml-[calc((100vw-100%)/2)] py-8 md:py-12 lg:py-16 shadow-2xl overflow-hidden"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6 sm:mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
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
									></iframe>
								</div>
							</div>

							{/* Text Directions */}
							<div className="flex-1">
								<h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
									Directions to Our Church
								</h3>
								<div className="space-y-4 text-[#374151] text-sm sm:text-base">
									<div>
										<h4 className="font-semibold text-[#1e3a8a] mb-2">From Accra Central:</h4>
										<p className="leading-relaxed">
											Take the Tema Motorway (N1) towards Tema. Exit at the Community 25 junction and turn left onto the main road.
											Continue straight for approximately 2km until you reach the Hour of Grace Believers Ministries International building on your right.
											Look for the distinctive church signage and ample parking area.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-[#1e3a8a] mb-2">From Tema:</h4>
										<p className="leading-relaxed">
											Head towards Accra on the Tema Motorway (N1). Take the Community 25 exit and turn right onto the access road.
											Follow the road for about 1.5km. The church will be visible on your left with clear directional signs.
											Our location is easily accessible with good road conditions throughout the route.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-[#1e3a8a] mb-2">Public Transport:</h4>
										<p className="leading-relaxed">
											Multiple tro-tro routes serve this area. Routes from Accra Central (37, 38, 39) and Tema (1, 2, 3) stop near Community 25.
											From the tro-tro stop, it's a short 5-minute walk to the church. Taxis are also readily available in the area.
										</p>
									</div>
									<div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
										<p className="text-xs sm:text-sm text-[#2563eb] font-medium">
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

