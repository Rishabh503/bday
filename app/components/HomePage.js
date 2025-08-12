'use client'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Gift } from 'lucide-react'
import pic from "../../public/pic.jpg"
import Image from 'next/image'
export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400 rounded-full sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Birthday Photo */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl bounce-gentle">
            <Image 
              src={pic}
              alt="Birthday Person"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            HAPPY
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="text-yellow-400 w-12 h-12" />
            <h2 className="text-7xl md:text-9xl font-bold birthday-gradient bg-clip-text text-transparent">
              20th
            </h2>
            <Sparkles className="text-yellow-400 w-12 h-12" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            BIRTHDAY!
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-2xl text-gray-700 mb-8 flex items-center justify-center gap-2"
        >
          <Heart className="text-red-500 w-6 h-6" />
          Welcome to your special celebration
          <Heart className="text-red-500 w-6 h-6" />
        </motion.p>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-semibold rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <Gift className="w-8 h-8" />
          Let s Celebrate!
          <Gift className="w-8 h-8" />
        </motion.button>

        {/* Age celebration text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 text-lg text-purple-600 font-medium"
        >
          🎉 Two decades of amazing memories and many more to come! 🎉
        </motion.p>
      </motion.div>
    </div>
  )
}