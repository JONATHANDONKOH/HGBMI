import React from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Heart, Users, MessageCircle } from "lucide-react"

export default function PrayerPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000ff 0%, #4e1bc5ff 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Prayer Requests
          </h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Submit your prayer requests to our ministry team. We believe in the power of prayer and community support.
          </p>
        </section>

        {/* Prayer Request Form */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-12 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Submit Your Prayer Request
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Prayer Request Category
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent">
                  <option>Personal Healing</option>
                  <option>Family Concerns</option>
                  <option>Financial Needs</option>
                  <option>Spiritual Growth</option>
                  <option>Relationships</option>
                  <option>Work/Career</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Your Prayer Request
                </label>
                <textarea
                  rows={8}
                  placeholder="Please share your prayer request. Be as specific as you'd like. Your request will be kept confidential."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="h-4 w-4 text-[#2563eb] focus:ring-[#2563eb] border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 text-sm text-[#374151]">
                  Submit anonymously (your name won't be shared with the prayer team)
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Submit Prayer Request
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            How Prayer Requests Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Submit
              </h3>
              <p className="text-[#374151]">
                Share your prayer request through our secure form. All requests are treated with confidentiality.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Pray
              </h3>
              <p className="text-[#374151]">
                Our dedicated prayer team and congregation lift up your requests in prayer regularly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Support
              </h3>
              <p className="text-[#374151]">
                We provide spiritual support and encouragement as we pray together for God's guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Encouragement */}
        <section className="bg-[#1e3a8a] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            "Pray without ceasing"
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            1 Thessalonians 5:17 - We believe in the power of persistent prayer and the strength of community support.
            Your prayer requests help us grow closer to God and to each other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Submit Request
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

