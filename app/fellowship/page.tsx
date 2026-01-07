import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Heart, Star, BookOpen, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

const fellowships = [
  // First 4 fellowships match the ministry section on homepage
  {
    name: "Pleroma Fellowship",
    slug: "pleroma",
    location: "Lashibi",
    address: "Lashibi, Accra",
    image: "/quire.jpg",
    description: "Uplifting worship through music and praise.",
    whatsapp: "+233 271645202",
    phone: "+233 271645202",
    email: "spintex@hgbmi.org",
    policies: "Open to all. Focus on worship and praise.",
    meetingDays: "Every Sunday, 9:00 AM",
    teachings: ["Worship", "Music Ministry", "Praise"],
    foundationSchool: {
      time: "Saturdays, 10:00 AM - 12:00 PM",
      location: "Spintex Hall"
    },
    googleMeetId: "abc-defg-hij"
  },
  {
    name: "Light Fellowship",
    slug: "light",
    location: "Accra Technical University",
    address: "UPSA, Accra",
    image: "/attuu.jpeg",
    description: "Guiding young hearts in faith and joy.",
    whatsapp: "+233 246148032",
    phone: "+233 246148032",
    email: "campus@hgbmi.org",
    policies: "Open to students. Focus on youth ministry.",
    meetingDays: "Every Thursday, 6:00 PM",
    teachings: ["Youth Ministry", "Faith Development", "Campus Outreach"],
    foundationSchool: {
      time: "Sundays, 2:00 PM - 4:00 PM",
      location: "Campus Hall"
    },
    googleMeetId: "def-ghij-klm"
  },
  {
    name: "Klagon Fellowship",
    slug: "klagon",
    location: "Klagon",
    address: "Klagon, Accra",
    image: "/vhh.jpg",
    description: "Empowering students with spiritual growth.",
    whatsapp: "+233 201159482",
    phone: "+233 201159482",
    email: "klagon@hgbmi.org",
    policies: "Open to all students. Focus on spiritual empowerment.",
    meetingDays: "Every Wednesday, 7:00 PM",
    teachings: ["Spiritual Growth", "Student Ministry", "Academic Excellence"],
    foundationSchool: {
      time: "Saturdays, 9:00 AM - 11:00 AM",
      location: "Klagon Hall"
    },
    googleMeetId: "ghi-jklm-nop"
  },
  {
    name: "Nungua Fellowship",
    slug: "nungua",
    location: "Nungua",
    address: "Nungua, Accra",
    image: "/kyt.jpg",
    description: "Building community through shared faith.",
    whatsapp: "+233 246148032",
    phone: "+233 246148032",
    email: "nungua@hgbmi.org",
    policies: "Open to all. Focus on community building.",
    meetingDays: "Every Tuesday, 5:30 PM",
    teachings: ["Community", "Fellowship", "Faith Building"],
    foundationSchool: {
      time: "Saturdays, 3:00 PM - 5:00 PM",
      location: "Nungua Hall"
    },
    googleMeetId: "jkl-mnop-qrs"
  },
  // Additional fellowships
  {
    name: "WorldLove Fellowship",
    slug: "youth-fellowship",
    location: "university of proffessional studies",
    address: "University of Proffessional Studies, Accra",
    image: "/worldlove.jpg",
    description: "Spreading God's love to the world through vibrant community and spiritual growth.",
    whatsapp: "+233 271645202",
    phone: "+233 271645202",
    email: "ekowdadzie1234@gmail.com",
    policies: "Members must be between 18-35 years old. Regular attendance required.",
    meetingDays: "Every Tuesday, 7:00 PM - 8:00pm",
    teachings: ["Spiritual Growth", "Leadership Development", "Community Service"],
    foundationSchool: {
      time: "Saturdays, 10:00 AM - 12:00 PM",
      location: "Campus Ministry Hall"
    },
    googleMeetId: "abc-defg-hij"
  },
  {
    name: "FAITH  Fellowship",
    slug: "FAITH-fellowship",
    location: "Ghana communication Technology  University",
    address: "HGBMI Main Church, Lashibi, Accra",
    image: "/faith.jpg",
    description: "Empowering believers through prayer, study, and mutual support in faith.",
    whatsapp: "+233 209169568",
    phone: "+233 209169568",
    email: "aryeeaaron1360@gmail.com",
    policies: "Open to all believers. Focus on spiritual empowerment and community.",
    meetingDays: "Every Monday, :700 PM",
    teachings: ["Foundation School"],
    foundationSchool: {
      time: "Sundays, 2:00 PM - 4:00 PM",
      location: "Main Sanctuary"
    },
    googleMeetId: "def-ghij-klm"
  },
  {
    name: "Life Fellowship",
    slug: "Life-fellowship",
    location: "university of professional studies",
    address: "HGBMI Fellowship Hall, Accra",
    image: "/life.jpg",
    description: "Experiencing abundant life in Christ through fellowship and biblical teachings.",
    whatsapp: "+233 201159482",
    phone: "+233 201159482",
    email: "pkayrulestheworld@gmail.com",
    policies: "Open to all. Emphasis on leadership and service.",
    meetingDays: "Mondays, 7:00 PM,Tuesdays, 7:00 PM",
    teachings: ["Biblical Manhood", "Leadership", "Family Responsibilities"],
    foundationSchool: {
      time: "Saturdays, 9:00 AM - 11:00 AM",
      location: "Fellowship Hall"
    },
    googleMeetId: "ghi-jklm-nop"
  },
  {
    name: "Spirit's Fellowship",
    slug: "Spririt-fellowship",
    location: "Accra Technical university",
    address: "accra, Accra",
    image: "/spirit.jpg",
    description: "Filled with the Holy Spirit, nurturing hearts with God's love and faith-based activities.",
    whatsapp: "+233 538746203",
    phone: "+233 538746203",
    email: "",
    policies: ".",
    meetingDays: "Every Tuesday, 5:30 PM ,Saturdays, 3:30 PM",
    teachings: ["Bible Stories", "Christian Values", "Fun Activities"],
    foundationSchool: {

      location: "Kids Zone"
    },
    googleMeetId: "jkl-mnop-qrs"
  },
]

export default function FellowshipPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
        {/* Natural Stars Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse animate-spin text-yellow-200 text-opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 6 + 4}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
                opacity: Math.random() * 0.6 + 0.3,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/60" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              HGBMI Fellowships
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join our vibrant fellowship communities and grow in faith together. Discover your spiritual home
              among our diverse groups dedicated to worship, learning, and service.
            </p>
          </div>
        </section>

        {/* Fellowship Cards Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Our Fellowships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our diverse fellowship communities, each offering unique opportunities for spiritual growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {fellowships.map((fellowship, index) => (
                <Link key={index} href={`/fellowship/${fellowship.slug}`}>
                  <Card className="bg-white border-2 border-gray-200 hover:border-[#2563eb] hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer w-full max-w-sm">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-[#2563eb]">
                        <img src={fellowship.image} alt={fellowship.name} className="w-full h-full object-cover" />
                      </div>
                      <CardTitle className="text-2xl text-[#1e3a8a]" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: '400' }}>{fellowship.name}</CardTitle>
                      <CardDescription className="flex items-center justify-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {fellowship.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-700 mb-6">{fellowship.description}</p>
                      <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold shadow-lg animate-bounce hover:animate-none hover:scale-105 transition-all duration-200 rounded-full" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}>
                        Read More
                        <Users className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fellowship Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Fellowship Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our fellowships cater to different age groups and interests, ensuring everyone finds their place
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Youth Fellowships</h3>
                <p className="text-gray-600">For young adults seeking spiritual growth and community</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Adult Groups</h3>
                <p className="text-gray-600">Professional and family-focused fellowship communities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Study Groups</h3>
                <p className="text-gray-600">Bible study and spiritual development fellowships</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Special Interest</h3>
                <p className="text-gray-600">Music, prayer, and ministry-focused fellowships</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Fellowship Section */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Ready to Join a Fellowship?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step in your spiritual journey. Connect with like-minded believers and grow in faith together.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-[#FCCB06]" />
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Regular Meetings</h3>
                  <p className="text-sm opacity-90">Weekly gatherings for worship and fellowship</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-[#FCCB06]" />
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Community Support</h3>
                  <p className="text-sm opacity-90">Build lasting relationships with fellow believers</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-[#FCCB06]" />
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Spiritual Growth</h3>
                  <p className="text-sm opacity-90">Deepen your faith through study and prayer</p>
                </div>
              </div>

              
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

