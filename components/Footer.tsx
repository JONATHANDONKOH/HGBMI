import React from "react";
import Link from "next/link";
import { Facebook, Youtube, Instagram, MapPin, Phone, Mail, Church } from "lucide-react";

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.3 3c.6 2 2.1 3.3 4.4 3.7v2.7c-1.5 0-2.8-.3-4.1-1.2v7.2c0 3.7-3 6.6-6.7 6.6s-6.7-3-6.7-6.6 3-6.7 6.7-6.7c.5 0 .9 0 1.3.1v2.9c-.4-.1-.8-.2-1.3-.2-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V3h2.7Z" />
    </svg>
  )
}

const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/hgbmi",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@hgbmi",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hgbmi_gh/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@princeofosuhene7",
    icon: TikTokIcon,
  },
  {
    name: "Location",
    href: "/contact/location",
    icon: MapPin,
  },
];

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Give", href: "/give" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                HGBMI
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Hour of Grace Believers Ministry International is dedicated to spreading God's word and fostering spiritual growth.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-200 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Service Times
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Sunday Services</p>
                <p className="text-gray-400">9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Wednesday</p>
                <p className="text-gray-400">6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Friday</p>
                <p className="text-gray-400">6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm">
              <a href="tel:0246819964" className="block text-gray-400 hover:text-blue-200 transition-colors">
                0246819964
              </a>
              <a href="mailto:Heous2020@yahoo.com" className="block text-gray-400 hover:text-blue-200 transition-colors">
                Heous2020@yahoo.com
              </a>
              <a href="/contact/location" className="block text-gray-400 hover:text-blue-200 transition-colors">
                Lashibi, Accra
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-gray-400">Follow Us</span>
              <div className="flex space-x-4">
                {socialMediaLinks.map((social) => {
                  let iconColor = "text-gray-400 hover:text-gray-300";
                  if (social.name === "Facebook") iconColor = "text-blue-600 hover:text-blue-500";
                  if (social.name === "YouTube") iconColor = "text-red-600 hover:text-red-500";
                  if (social.name === "Instagram") iconColor = "text-pink-600 hover:text-pink-500";
                  if (social.name === "TikTok") iconColor = "text-cyan-400 hover:text-cyan-300";
                  if (social.name === "Location") iconColor = "text-green-600 hover:text-green-500";
                  
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${iconColor} transition-colors`}
                      title={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} HGBMI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

