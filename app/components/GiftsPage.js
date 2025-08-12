'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Lock, Unlock, Heart, ArrowRight, Star, Camera } from 'lucide-react'

export default function GiftsPage({ onNext }) {
  const [unlockedGifts, setUnlockedGifts] = useState(new Set())

  const gifts = [
    {
      id: 1,
      title: "Memory Book 📚",
      description: "A collection of our favorite memories together",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "This memory book contains all our precious moments from the past year. Every page tells a story of laughter, adventures, and the bond we share. Flip through and relive these beautiful memories!",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      title: "Friendship Bracelet ✨",
      description: "A symbol of our unbreakable bond",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample2.jpg",
      message: "This special bracelet represents our friendship that grows stronger with each passing day. Wear it as a reminder that you're always loved and cherished!",
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: 3,
      title: "Adventure Fund 💰",
      description: "For your next amazing adventure",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample3.jpg",
      message: "Here's some money to fund your next big adventure! Whether it's traveling to a new place or trying something exciting, this is to help make those dreams come true!",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      title: "Custom Playlist 🎵",
      description: "Songs that remind us of you",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample4.jpg",
      message: "A carefully curated playlist of songs that capture your spirit and remind us of the amazing times we've shared. Each song holds a special meaning and memory!",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 5,
      title: "Photo Collage 📸",
      description: "Our recent favorite moments captured",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample5.jpg",
      message: "A beautiful collage of our recent photos together - from spontaneous selfies to planned photoshoots. These moments capture the joy and fun we have together!",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      title: "Handwritten Letters 💌",
      description: "Personal messages from loved ones",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "A collection of heartfelt handwritten letters from family and friends, each expressing their love and best wishes for your special day!",
      color: "from-red-400 to-pink-500"
    }
  ]

  const recentPhotos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_fill/sample.jpg",
      caption: "That amazing day at the beach! 🏖️"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_fill/sample2.jpg",
      caption: "Coffee dates are the best dates ☕"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_fill/sample3.jpg",
      caption: "Adventures in the city 🏙️"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_fill/sample4.jpg",
      caption: "Movie night was epic! 🍿"
    }
  ]

  const notes = [
    "You make every ordinary day feel extraordinary! ✨",
    "Your smile is contagious and lights up everyone's day 😊",
    "Thank you for being such an amazing person in our lives 💕",
    "Here's to more adventures and memories together! 🎉",
    "Your 20s are going to be absolutely incredible! 🚀"
  ]

  const unlockGift = (giftId) => {
    setUnlockedGifts(prev => new Set([...prev, giftId]))
  }

  return (
    <div className="min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Your Special Gifts 🎁
          </h1>
          <p className="text-xl text-gray-600">
            Click to unlock each gift and discover the surprise inside!
          </p>
        </div>

        {/* Gifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${gift.color} p-1 rounded-2xl gift-shadow`}>
                <div className="bg-white rounded-xl p-6 h-full">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      {unlockedGifts.has(gift.id) ? (
                        <Unlock className="w-8 h-8 text-white" />
                      ) : (
                        <Lock className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{gift.title}</h3>
                    <p className="text-gray-600">{gift.description}</p>
                  </div>

                  {!unlockedGifts.has(gift.id) ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => unlockGift(gift.id)}
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Gift className="w-5 h-5" />
                      Unlock Gift
                    </motion.button>
                  ) : (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-4">
                          <img 
                            src={gift.image}
                            alt={gift.title}
                            className="w-full h-32 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {gift.message}
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4 text-pink-600">
                          <Heart className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Heart className="w-4 h-4 fill-current" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Recent Adventures
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Camera className="w-5 h-5" />
              <span>Memories we've created together</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={photo.url}
                    alt={`Recent memory ${photo.id}`}
                    className="w-full h-48 object-cover rounded-xl mb-3 group-hover:brightness-110 transition-all duration-300"
                  />
                  <p className="text-center text-gray-700 font-medium">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
              Sweet Notes
            </h2>
            <p className="text-gray-600">Little reminders of how special you are</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 2.8 + index * 0.1, duration: 0.5 }}
                className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-rotate-1"
              >
                <p className="text-gray-800 font-medium italic">{note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-semibold rounded-full shadow-xl hover:shadow-indigo-300/50 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
          >
            Last Year's Memories
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </div>
)}