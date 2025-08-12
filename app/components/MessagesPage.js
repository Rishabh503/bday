'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart, ArrowRight } from 'lucide-react'

export default function MessagesPage({ onNext }) {
  const [openMessage, setOpenMessage] = useState(null)

  const messages = [
    {
      id: 1,
      title: "Your First Steps into Adulthood 🌟",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "20 years ago, you entered this world and made it brighter! Every step you've taken has led you to this amazing milestone. Here's to the incredible journey ahead!"
    },
    {
      id: 2,
      title: "Childhood Memories 🧸",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample2.jpg",
      message: "From playing with toys to achieving your dreams, you've grown into such an amazing person. Those childhood giggles still echo in our hearts!"
    },
    {
      id: 3,
      title: "School Days Adventures 🎒",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample3.jpg",
      message: "Remember those school days filled with laughter, friendships, and learning? You've always been curious and eager to explore the world around you!"
    },
    {
      id: 4,
      title: "Your Creative Spirit 🎨",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample4.jpg",
      message: "Your creativity knows no bounds! Whether it's art, music, or any other passion, you always put your heart into everything you do."
    },
    {
      id: 5,
      title: "Friendship Goals 👫",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample5.jpg",
      message: "You've always been that friend everyone can count on. Your kindness and loyalty make you absolutely irreplaceable!"
    },
    // Add 15 more messages...
    {
      id: 6,
      title: "Family Love ❤️",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "The joy you bring to our family is immeasurable. Every family gathering is brighter with your presence and laughter!"
    },
    {
      id: 7,
      title: "Your Determination 💪",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample2.jpg",
      message: "Watching you chase your dreams with such determination inspires everyone around you. Never stop believing in yourself!"
    },
    {
      id: 8,
      title: "Adventure Seeker 🗺️",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample3.jpg",
      message: "Your adventurous spirit and love for exploring new places always amazes us. The world is your playground!"
    },
    {
      id: 9,
      title: "Your Beautiful Heart 💖",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample4.jpg",
      message: "Your compassion and empathy towards others shows what a beautiful soul you have. You make the world a better place!"
    },
    {
      id: 10,
      title: "Milestone Celebrations 🎊",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample5.jpg",
      message: "Every birthday has been special, but this 20th one is extra magical! You're stepping into an exciting new decade!"
    },
    {
      id: 11,
      title: "Your Wisdom 🦉",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "Despite being young, you have wisdom beyond your years. Your advice and perspective always amazes everyone!"
    },
    {
      id: 12,
      title: "Dream Chaser 🌟",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample2.jpg",
      message: "Your dreams are valid and achievable! Keep reaching for the stars because you deserve all the success in the world!"
    },
    {
      id: 13,
      title: "Your Laughter 😄",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample3.jpg",
      message: "Your infectious laughter can light up any room! Thank you for bringing so much joy into our lives!"
    },
    {
      id: 14,
      title: "Supportive Soul 🤝",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample4.jpg",
      message: "You're always there to lend a helping hand or a listening ear. Your support means the world to everyone who knows you!"
    },
    {
      id: 15,
      title: "Your Uniqueness ✨",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample5.jpg",
      message: "There's absolutely no one like you in this world! Your unique personality and quirks make you absolutely perfect!"
    },
    {
      id: 16,
      title: "Growth & Change 🌱",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample.jpg",
      message: "Watching you grow and evolve over the years has been incredible. You've become such a wonderful person!"
    },
    {
      id: 17,
      title: "Your Talents 🎭",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample2.jpg",
      message: "Your talents and abilities continue to amaze us! Whether it's singing, dancing, or any other skill - you excel at everything!"
    },
    {
      id: 18,
      title: "Memorable Moments 📸",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample3.jpg",
      message: "So many beautiful memories have been created with you! Each moment spent together is a treasure we'll always cherish!"
    },
    {
      id: 19,
      title: "Your Future 🚀",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample4.jpg",
      message: "The future holds so many amazing opportunities for you! We can't wait to see all the incredible things you'll achieve!"
    },
    {
      id: 20,
      title: "Forever Grateful 🙏",
      image: "https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_fill/sample5.jpg",
      message: "We're forever grateful to have you in our lives! Happy 20th Birthday! May this year bring you endless happiness, love, and success! 🎉❤️"
    }
  ]

  const toggleMessage = (id) => {
    setOpenMessage(openMessage === id ? null : id)
  }

  return (
    <div className="min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            20 Messages of Love
          </h1>
          <p className="text-xl text-gray-600">
            Each message holds a special memory and wish for you ✨
          </p>
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-12">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleMessage(msg.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {msg.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{msg.title}</h3>
                </div>
                {openMessage === msg.id ? (
                  <ChevronUp className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                )}
              </button>

              <AnimatePresence>
                {openMessage === msg.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-purple-100">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3">
                          <img 
                            src={msg.image}
                            alt={`Memory ${msg.id}`}
                            className="w-full h-48 object-cover rounded-xl shadow-md"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            {msg.message}
                          </p>
                          <div className="flex items-center gap-2 text-pink-600">
                            <Heart className="w-5 h-5 fill-current" />
                            <span className="text-sm font-medium">With lots of love</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-semibold rounded-full shadow-xl hover:shadow-purple-300/50 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
          >
            Open Your Gifts
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}