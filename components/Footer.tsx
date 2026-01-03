import React from "react";
import Link from "next/link";
import { Facebook, Youtube, Instagram, MapPin, Phone, Mail, Church } from "lucide-react";

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
    href: "https://instagram.com/hgbmi",
    icon: Instagram,
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
  { title: "Bookstore", href: "/bookstore" },
  { title: "Give", href: "/give" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-6 w-6" />
              <span className="text-xl font-bold" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                HGBMI
              </span>
            </div>
            <p className="text-sm mb-4">
              Hour of Grace Believers Ministry International is dedicated to spreading God's word, building community, and fostering spiritual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm hover:text-blue-200 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(0246819964) APOSTLE PRINCE OFOSU HENE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@hgbmi.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>5°38'53.4"N 0°03, 21 3rd Avenue, Accra</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Follow Us
            </h3>
            <div className="flex space-x-3">
              {socialMediaLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Hour of Grace Believers Ministry International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

