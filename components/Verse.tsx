import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Youtube, Calendar, Clock } from "lucide-react";

export default function Verse() {
  // YouTube video URL
  const videoUrl = "https://www.youtube.com/embed/N0ncEHIccf4?start=468&autoplay=1&mute=1";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cinema 3D Animated Background */}
      <div className="absolute inset-0 bg-black overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 animate-pulse"></div>

        {/* Enhanced 3D Blobs */}
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-bounce" style={{ transform: 'rotateX(15deg) rotateY(15deg)' }}></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" style={{ transform: 'rotateX(10deg) rotateY(-10deg)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-indigo-500/20 rounded-full blur-3xl animate-bounce delay-500" style={{ transform: 'rotateX(-5deg) rotateY(20deg)' }}></div>

        {/* Cinema Spotlight Effects */}
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-300/10 rounded-full blur-2xl animate-pulse delay-300" style={{ transform: 'rotateX(20deg)' }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-red-400/10 rounded-full blur-2xl animate-bounce delay-700" style={{ transform: 'rotateY(15deg)' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1200" style={{ transform: 'rotateX(-10deg) rotateY(-10deg)' }}></div>

        {/* Floating Particles */}
        <div className="absolute top-1/6 left-1/6 w-1 h-1 sm:w-2 sm:h-2 bg-white/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-2/6 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/40 rounded-full animate-pulse delay-800"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-yellow-200/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 sm:w-2 sm:h-2 bg-purple-200/50 rounded-full animate-ping delay-1500"></div>

        {/* 3D Geometric Elements */}
        <div className="absolute top-1/3 left-1/3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-white/10 transform rotate-45 animate-spin opacity-20" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg) rotateY(30deg) rotateZ(45deg)' }}></div>
        <div className="absolute bottom-1/6 right-1/4 w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 border border-white/15 transform rotate-30 animate-pulse delay-2000 opacity-15" style={{ transform: 'rotateX(-20deg) rotateY(40deg)' }}></div>

        {/* Cinema Curtain Effect */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/30 to-transparent animate-pulse delay-3000"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/30 to-transparent animate-pulse delay-3500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-sm sm:text-base text-white font-medium">Live & On-Demand</span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
            style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Online Worship Center
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Welcome to our digital sanctuary where faith comes alive. Experience past live sermons, join upcoming services,
            and connect with God's word anytime, anywhere through our comprehensive online platform.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-white/20 shadow-2xl mb-12 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <motion.div
                  className="mx-auto mb-4 p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full w-fit"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Youtube className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl sm:text-3xl text-gray-800 font-bold">Past Live Sermon</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600">
                    Revisit our recent live service and experience the power of God's word
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 lg:px-8 pb-8">
                <motion.div
                  className="relative max-w-4xl mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800" style={{ height: '500px' }}>
                    <iframe
                      src={videoUrl}
                      title="Church Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
