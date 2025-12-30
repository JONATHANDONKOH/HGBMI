import React from "react";
import { motion } from "framer-motion";

export default function Pastor() {
  return (
    <section
      className="w-full min-h-screen md:min-h-[100vh] relative flex items-center justify-center py-8 md:py-0"
    >
      {/* Overlay gradient for professional depth */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>

      {/* Image and Text layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 sm:px-8 lg:px-16 gap-6 lg:gap-12">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/myp.png"
            alt="Apostle Prince Ofosu Hene"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20"
          />
        </motion.div>
        <motion.div
          className="bg-black/60 backdrop-blur-sm border-l-4 border-yellow-500 p-6 sm:p-8 lg:p-12 w-full max-w-2xl shadow-2xl transform lg:-skew-x-3 lg:hover:skew-x-0 transition-transform duration-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white transform lg:skew-x-3 text-center lg:text-left"
            style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400, fontStyle: 'normal', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            APOSTLE PRINCE OFOSU HENE
          </motion.h2>
          <div className="space-y-3 lg:space-y-4 text-white transform lg:skew-x-3">
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Our pastor is a deeply respected spiritual leader and visionary, guiding our church community with wisdom, compassion, and unwavering faith.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              He is a gifted teacher and author, whose messages and writings continue to inspire transformation and spiritual growth across generations.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Through powerful evangelistic outreach and heartfelt ministry, he has touched countless lives across the nation and beyond.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Our pastor reaches thousands through in-person services, media broadcasts, and online platforms—bringing hope, healing, and truth to all who listen.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
