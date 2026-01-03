"use client"
import { MapPin, Clock, Car, Train } from "lucide-react"
export default function LocationMotion() {
  return (
    <main className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <section
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          Our Location
        </h1>
        <p className="text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
          Find us and join our community. We're located in the heart of the city, easily accessible by car or public transport.
        </p>
      </section>

      {/* Address and Service Times */}
      <section
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Visit Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#2563eb] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1e3a8a]">Address</h3>
                  <p className="text-[#374151]">
                    123 Faith Street<br />
                    Grace City, GC 12345<br />
                    Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[#2563eb] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1e3a8a]">Service Times</h3>
                  <p className="text-[#374151]">
                    Sunday Worship: 10:00 AM - 12:00 PM<br />
                    Wednesday Bible Study: 7:00 PM - 9:00 PM<br />
                    Friday Prayer Meeting: 7:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#1e3a8a]">Phone</h3>
                <p className="text-[#374151]">(555) CHURCH-1</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1e3a8a]">Email</h3>
                <p className="text-[#374151]">info@hgbmi.org</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1e3a8a]">Office Hours</h3>
                <p className="text-[#374151]">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed (except for services)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section
        className="mb-16"
      >
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Find Us on the Map
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
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
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Directions to Our Church
              </h3>
              <div className="space-y-4 text-[#374151]">
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-[#2563eb] font-medium">
                    <strong>Note:</strong> Free parking is available on-site. For large groups or special events, please contact us in advance for parking arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          Getting Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-[#2563eb]" />
              <h3 className="text-xl font-bold text-[#1e3a8a]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                By Car
              </h3>
            </div>
            <p className="text-[#374151] mb-4">
              Free parking is available on-site. Enter from Faith Street and follow the signs to the main entrance.
            </p>
            <ul className="text-[#374151] space-y-1">
              <li>• From Highway 1: Exit at Faith Street, turn right</li>
              <li>• From Downtown: Head north on Main Street, turn left onto Faith</li>
              <li>• Parking: Free on-site parking available</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Train className="w-8 h-8 text-[#2563eb]" />
              <h3 className="text-xl font-bold text-[#1e3a8a]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Public Transport
              </h3>
            </div>
            <p className="text-[#374151] mb-4">
              We're easily accessible by bus and train. The nearest stop is just a 5-minute walk away.
            </p>
            <ul className="text-[#374151] space-y-1">
              <li>• Bus Route 15: Faith Street stop</li>
              <li>• Train Station: Grace City Central (10 min walk)</li>
              <li>• Taxi services available at station</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Main Sanctuary
            </h3>
            <p className="text-[#374151]">
              Our beautiful main worship space seats 500 people with modern audio-visual equipment.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Youth Center
            </h3>
            <p className="text-[#374151]">
              Dedicated space for youth activities, Bible study, and fellowship gatherings.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Prayer Room
            </h3>
            <p className="text-[#374151]">
              A quiet space for personal prayer, meditation, and spiritual reflection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-[#1e3a8a] rounded-2xl p-12 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          Plan Your Visit
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We can't wait to welcome you to our church family. Come experience God's love in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            View Service Times
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Directions
          </button>
        </div>
      </section>
    </main>
  )
}

