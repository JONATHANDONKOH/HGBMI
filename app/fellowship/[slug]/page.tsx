import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Phone, Mail, MessageCircle, Calendar, MapPin, BookOpen, Clock } from 'lucide-react'
import Footer from "@/components/Footer"

const fellowships = [
  // First 4 fellowships match the ministry section on homepage
  {
    name: "Pleroma Fellowship",
    slug: "pleroma",
    location: "Lashibi",
    address: "Lashibi, Accra",
    image: "/quire.jpg",
    communityImage: "/quire.jpg",
    description: "Uplifting worship through music and praise.",
    whatsapp: "+233 271645202",
    phone: "+233 271645202",
    email: "spintex@hgbmi.org",
    policies: "Open to all. Focus on worship and praise.",
    meetingDays: "Every Sunday, 9:00 AM",
    teachings: ["Worship", "Music Ministry", "Praise"],
    foundationSchool: {
      time: "Saturdays, 10:00 AM - 12:00 PM",
      location: "Lashibi Hall"
    },
    googleMeetId: "abc-defg-hij"
  },
  {
    name: "Light Fellowship",
    slug: "light",
    location: "Light Ministry",
    address: "ATU, Accra",
    image: "/campus.jpg",
    communityImage: "/light.jpeg",
    description: "Guiding young hearts in faith and joy.",
    whatsapp: "+233 509772930",
    phone: "+233 509772930",
    email: "rlordson45@gmail.com",
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
    communityImage: "/vhh.jpg",
    description: "Empowering students with spiritual growth.",
    whatsapp: "+233 206821255",
    phone: "+233 206821255",
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
    communityImage: "/kyt.jpg",
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
    location: "Campus Ministry",
    address: "University of Proffessional Studies, Accra",
    image: "/worldlove.jpg",
    communityImage: "/mem-world.jpg",
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
    location: "Ghana communication Technology University",
    address: "HGBMI Main Church, Lashibi, Accra",
    image: "/faith.jpg",
    communityImage: "/faith comm.jpg",
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
    communityImage: "/life comm.jpg",
    description: "Experiencing abundant life in Christ through fellowship and biblical teachings.",
    whatsapp: "+233 201159482",
    phone: "+233 201159482",
    email: "pkayrulestheworld@gmail.com",
    policies: "Open to all. Emphasis on leadership and service.",
    meetingDays: "Mondays, 7:00 PM,Tuesdays, 7:00 PM",
    teachings: ["Biblical Manhood", "Leadership", "Family Responsibilities"],
    foundationSchool: {
      time: "Saturdays, 9:00 AM - 11:00 AM",
      location: "university of professional studies"
    },
    googleMeetId: "ghi-jklm-nop"
  },
  {
    name: "Spirit's Fellowship",
    slug: "Spririt-fellowship",
    location: "Accra Technical university",
    address: "accra, Accra",
    image: "/spirit.jpg",
    communityImage: "/OMA.jpeg",
    description: "Filled with the Holy Spirit, nurturing hearts with God's love and faith-based activities.",
    whatsapp: "+233 538746203",
    phone: "+233 538746203",
    email: "antwipokyere@gmail.com",
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

interface FellowshipPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function FellowshipDetailPage({ params }: FellowshipPageProps) {
  const { slug } = await params
  const fellowship = fellowships.find(f => f.slug === slug)

  if (!fellowship) {
    notFound()
  }

  return (
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-6">
          <Link href="/fellowship">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Fellowships
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/60" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-[#FCCB06]">
              <img src={fellowship.image} alt={fellowship.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              {fellowship.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
              {fellowship.description}
            </p>
            <p className="text-white/80 flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-6 w-6" />
              {fellowship.location}
            </p>
          </div>
        </section>

        {/* Community Image Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the wonderful people who make up our fellowship community
              </p>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img src={fellowship.communityImage || '/life comm.jpg'} alt={`${fellowship.name} Community`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {fellowship.name}
                  </h3>
                  <p className="text-lg opacity-90">Building relationships that last a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fellowship Details Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Fellowship Details
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about joining our fellowship community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Our Teachings</h3>
                <ul className="text-gray-600 space-y-1">
                  {(fellowship.teachings || []).map((teaching, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                      {teaching}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Contact Info</h3>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p><strong>WhatsApp:</strong> {fellowship.whatsapp}</p>
                  <p><strong>Phone:</strong> <a href={`tel:${fellowship.phone}`} className="text-[#2563eb] hover:underline">{fellowship.phone}</a></p>
                  <p><strong>Email:</strong> {fellowship.email || 'N/A'}</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Meeting Location</h3>
                <p className="text-gray-600 text-sm">{fellowship.address}</p>
                <p className="text-gray-600 text-sm mt-2"><strong>Time:</strong> {fellowship.meetingDays}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}