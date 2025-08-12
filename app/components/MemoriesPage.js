'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Heart, Home, Star, Camera, MapPin, Clock, Users } from 'lucide-react'

export default function MemoriesPage({ onHome }) {
  const [selectedMemory, setSelectedMemory] = useState(null)

  const lastBirthdayMemories = [
    {
      id: 1,
      title: "The Surprise Party Setup",
      date: "Birthday Morning - 19th Birthday",
      location: "Home Sweet Home",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample.jpg",
      description: "Remember how we secretly decorated the entire house while you were sleeping? The balloons, streamers, and that huge '19' banner took us hours to put up!",
      highlights: ["50+ balloons", "Surprise decorations", "Early morning setup", "Team effort"],
      people: ["Family", "Close Friends"]
    },
    {
      id: 2,
      title: "The Cake Disaster & Triumph",
      date: "Birthday Afternoon",
      location: "Kitchen Adventures",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample2.jpg",
      description: "That hilarious moment when the first cake didn't turn out as planned, but we quickly made another one together. The second cake was even better!",
      highlights: ["Baking together", "Chocolate everywhere", "Teamwork", "Delicious success"],
      people: ["Baker Squad"]
    },
    {
      id: 3,
      title: "Surprise Guest Arrivals",
      date: "Birthday Evening",
      location: "Front Door Magic",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample3.jpg",
      description: "Your face when friends started showing up one by one was priceless! Each knock on the door brought another wave of excitement and joy.",
      highlights: ["Doorbell surprises", "Happy tears", "Unexpected friends", "Pure joy"],
      people: ["Surprise Friends", "Cousins", "College Buddies"]
    },
    {
      id: 4,
      title: "The Photo Booth Fun",
      date: "Party Peak Time",
      location: "Living Room Studio",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample4.jpg",
      description: "We turned the living room into a photo booth with props and silly signs. Those candid shots captured the pure happiness of the moment!",
      highlights: ["Silly props", "Candid moments", "Group photos", "Laughter therapy"],
      people: ["Everyone!"]
    },
    {
      id: 5,
      title: "Gift Opening Ceremony",
      date: "Party Highlights",
      location: "Gift Corner",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample5.jpg",
      description: "The anticipation and excitement as you unwrapped each gift was so heartwarming. Each present told a story of love and thoughtfulness.",
      highlights: ["Thoughtful gifts", "Surprise reactions", "Grateful tears", "Love expressed"],
      people: ["Gift Givers United"]
    },
    {
      id: 6,
      title: "Late Night Conversations",
      date: "After Party Glow",
      location: "Cozy Corner",
      image: "https://res.cloudinary.com/demo/image/upload/w_400,h_300,c_fill/sample.jpg",
      description: "When the party wound down, we sat together sharing stories, dreams, and reflecting on the amazing year that was. Those quiet moments were precious.",
      highlights: ["Deep talks", "Future dreams", "Reflection time", "Peaceful moments"],
      people: ["Inner Circle"]
    }
  ]

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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Last Birthday Memories
            </h1>
            <div className="flex items-center justify-center gap-3 text-xl text-gray-600 mb-4">
              <Calendar className="w-6 h-6" />
              <span>Your Amazing 19th Birthday Celebration</span>
              <Calendar className="w-6 h-6" />
            </div>
            <p className="text-lg text-gray-600">
              Reliving the magical moments from your special day last year ✨
            </p>
          </motion.div>
        </div>

        {/* Memories Timeline */}
        <div className="space-y-8 mb-16">
          {lastBirthdayMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all duration-300"
                >
                  <img 
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{memory.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{memory.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{memory.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{memory.description}</p>
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100"
                >
                  <h4 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Memory Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {memory.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="bg-white px-3 py-2 rounded-lg shadow-sm border border-purple-100 text-gray-700 text-sm font-medium"
                      >
                        ✨ {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-purple-700">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">Who was there:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {memory.people.map((person, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Birthday Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-center mb-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border-2 border-pink-200"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">
              From 19 to 20: A Year of Growth 🌟
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Looking back at your 19th birthday, we can see how much you've grown and accomplished this year. 
              From that wonderful celebration to this moment of turning 20, you've continued to amaze everyone 
              with your kindness, determination, and beautiful spirit. Each memory from last year has been a 
              stepping stone to the incredible person you are today!
            </p>
            <div className="flex items-center justify-center gap-4 text-2xl">
              <Heart className="text-red-500 fill-current" />
              <span className="text-purple-700 font-semibold"> Here's to many more years of beautiful memories!</span>
              <Heart className="text-red-500 fill-current" />
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onHome}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold rounded-full shadow-xl hover:shadow-purple-300/50 transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <Home className="w-6 h-6" />
            Back to Home
          </button>
          
          <div className="text-center">
            <p className="text-gray-600 font-medium">
              🎉 Thank you for celebrating with us! 🎉
            </p>
          </div>
        </motion.div>

        {/* Final Birthday Wishes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="text-center mt-12 p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl border-2 border-yellow-200"
        >
          <h3 className="text-2xl font-bold text-purple-800 mb-4">🎂 Happy 20th Birthday! 🎂</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            May this new decade bring you endless joy, exciting adventures, amazing opportunities, 
            and all the love your heart can hold. You deserve all the happiness in the world! 
            Here's to making this year the best one yet! ✨🎈🎁
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}