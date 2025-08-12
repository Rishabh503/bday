'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart, ArrowRight } from 'lucide-react'
import { messages  } from '@/public/data/memories'

export default function MessagesPage({ onNext }) {
  const [openMessage, setOpenMessage] = useState(null)



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