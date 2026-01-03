import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Heart, Star, BookOpen, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"

const fellowships = [
  {
    name: "WorldLove Fellowship",
    slug: "youth-fellowship",
    location: "Campus Ministry",
    address: "University of Proffessional Studies, Accra",
    image: "/worldlove.jpg",
    description: "Spreading God's love to the world through vibrant community and spiritual growth.",
    whatsapp: "+233 123 456 789",
    phone: "+233 123 456 780",
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
    location: "Ghana Telecom University",
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
    location: "Fellowship Hall",
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
  {
    name: "Senior Fellowship",
    slug: "senior-fellowship",
    location: "Community Center",
    address: "HGBMI Community Center, Accra",
    image: "/placeholder.jpg",
    description: "A place for our senior members to share wisdom and continue growing in faith.",
    whatsapp: "+233 123 456 793",
    phone: "+233 123 456 793",
    email: "senior@hgbmi.org",
    policies: "Open to seniors 60+. Focus on fellowship and wisdom sharing.",
    meetingDays: "Every Tuesday, 4:00 PM",
    teachings: ["Life Wisdom", "Prayer", "Community Support"],
    foundationSchool: {
      time: "Wednesdays, 3:00 PM - 5:00 PM",
      location: "Community Center"
    },
    googleMeetId: "mno-pqrs-tuv"
  },
  {
    name: "Young Adult Fellowship",
    slug: "young-adult-fellowship",
    location: "Youth Center",
    address: "HGBMI Youth Center, Accra",
    image: "/kyt.jpg",
    description: "Connecting young professionals through faith, fellowship, and service.",
    whatsapp: "+233 123 456 794",
    phone: "+233 123 456 794",
    email: "youngadult@hgbmi.org",
    policies: "Ages 25-40. Career and faith integration.",
    meetingDays: "Every Saturday, 5:00 PM",
    teachings: ["Professional Ethics", "Marriage Preparation", "Service"],
    foundationSchool: {
      time: "Sundays, 1:00 PM - 3:00 PM",
      location: "Youth Center"
    },
    googleMeetId: "opq-rstu-vwx"
  },
  {
    name: "Prayer Fellowship",
    slug: "prayer-fellowship",
    location: "Prayer Room",
    address: "HGBMI Prayer Room, Accra",
    image: "/placeholder.jpg",
    description: "Dedicated to intercessory prayer and deepening our prayer life together.",
    whatsapp: "+233 123 456 795",
    phone: "+233 123 456 795",
    email: "prayer@hgbmi.org",
    policies: "All welcome. Focus on prayer and spiritual disciplines.",
    meetingDays: "Every Monday, 6:00 PM",
    teachings: ["Prayer Techniques", "Intercession", "Spiritual Warfare"],
    foundationSchool: {
      time: "Fridays, 7:00 PM - 9:00 PM",
      location: "Prayer Room"
    },
    googleMeetId: "qrs-tuvw-xyz"
  },
  {
    name: "Music Fellowship",
    slug: "music-fellowship",
    location: "Worship Hall",
    address: "HGBMI Worship Hall, Accra",
    image: "/placeholder.jpg",
    description: "Uniting through music and worship to glorify God and uplift our spirits.",
    whatsapp: "+233 123 456 796",
    phone: "+233 123 456 796",
    email: "music@hgbmi.org",
    policies: "Musicians and singers welcome. Auditions required.",
    meetingDays: "Every Sunday, 8:00 AM",
    teachings: ["Worship Leading", "Music Theory", "Spiritual Songs"],
    foundationSchool: {
      time: "Saturdays, 2:00 PM - 4:00 PM",
      location: "Worship Hall"
    },
    googleMeetId: "stu-vwxy-abc"
  }
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
              className="absolute animate-pulse text-yellow-200 text-opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 12 + 8}px`,
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
                  <Card className="bg-[#2563eb] border-2 border-white/20 hover:border-white hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer w-80">
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
                      <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200 rounded-full" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}>
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

              <Button
                size="lg"
                className="bg-[#FCCB06] hover:bg-[#e6b805] text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-bounce hover:animate-none"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                Explore Fellowships
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

