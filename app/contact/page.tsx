"use client"

import React, { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Heart, MessageSquare, Users, Star } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/Footer"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.current) {
      setError('Form not properly initialized');
      return;
    }
    
    const formData = new FormData(form.current);
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!message || message.trim().length < 10) {
      setError('Please enter a message of at least 10 characters');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setSuccess(false);
    
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
        }
      )
      .then(
        () => {
          setSuccess(true);
          setIsLoading(false);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setError('Failed to send message. Please try again or contact us directly at support@hgbmi.org');
          setIsLoading(false);
        },
      );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#4A90E2' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 to-[#2563eb]/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            We&apos;d love to hear from you. Get in touch with our team for any questions, prayer requests, or support.
            Every message is important to us and we&apos;ll respond as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 bg-transparent animate-bounce hover:animate-none"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              024 681 9964
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our ministry team and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Phone Support</h3>
              <p className="text-lg mb-4">Call us for immediate assistance</p>
              <div className="space-y-2">
                <p className="font-semibold">Main Line: (024) 681-9964</p>
                <p className="text-sm opacity-90">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Email Support</h3>
              <p className="text-lg mb-4">Send us an email anytime</p>
              <div className="space-y-2">
                <p className="font-semibold">support@hgbmi.org</p>
                <p className="text-sm opacity-90">We respond within 24 hours</p>
              </div>
            </div>

            {/* Prayer Requests */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Prayer Requests</h3>
              <p className="text-lg mb-4">Submit your prayer needs</p>
              <div className="space-y-2">
                <p className="font-semibold">Dedicated Prayer Team</p>
                <p className="text-sm opacity-90">Your requests are confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              How We Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is here to support you in your spiritual journey and community needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>General Inquiries</h3>
              <p className="text-gray-600">Questions about our church, services, or community</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Ministry Support</h3>
              <p className="text-gray-600">Connect with our ministry teams and volunteers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Event Information</h3>
              <p className="text-gray-600">Details about upcoming services and special events</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Location & Directions</h3>
              <p className="text-gray-600">Find us and get directions to our facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                Visit Our Location
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#2563eb] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Main Sanctuary</p>
                    <p className="text-gray-600">123 Faith Street<br />Lashibi, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#2563eb] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Service Times</p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 12:00 PM<br />Wednesday: 7:00 PM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#2563eb] mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Contact Info</p>
                    <p className="text-gray-600">Phone: (024) 681-9964<br />Email: support@hgbmi.org</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-bounce hover:animate-none"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                Get Directions
              </Button>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/cong.jpg"
                alt="HGBMI Church building in Lashibi, Accra"
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Send Us a Message
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Have a question or need support? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <style jsx>{`
              input:invalid, textarea:invalid {
                border-color: rgba(255, 255, 255, 0.3) !important;
                box-shadow: none !important;
              }
            `}</style>
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              noValidate 
              className="grid grid-cols-1 md:grid-cols-2 gap-6" 
              style={{ border: 'none', outline: 'none' }}
              aria-label="Contact form"
            >
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="first_name">
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FCCB06] focus:border-transparent bg-white/10 text-white placeholder-white/70"
                  placeholder="Your first name"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FCCB06] focus:border-transparent bg-white/10 text-white placeholder-white/70"
                  placeholder="Your last name"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="user_email">
                  Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FCCB06] focus:border-transparent bg-white/10 text-white placeholder-white/70"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                />
              </div>
             
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FCCB06] focus:border-transparent bg-white/10 text-white placeholder-white/70"
                  placeholder="How can we help you?"
                  required
                  aria-required="true"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FCCB06] focus:border-transparent bg-white/10 text-white placeholder-white/70"
                  placeholder="Tell us more about your inquiry..."
                  required
                  aria-required="true"
                  minLength={10}
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-[#FCCB06] hover:bg-[#e6b805] text-[#1e3a8a] px-8 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-bounce hover:animate-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                  aria-label={isLoading ? 'Sending message...' : 'Send message'}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              {success && (
                <div className="md:col-span-2 text-center">
                  <p className="text-green-400 text-lg font-semibold">Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}
              {error && (
                <div className="md:col-span-2 text-center">
                  <p className="text-red-300 text-lg font-semibold">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}