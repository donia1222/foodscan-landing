"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const phoneImages = [
  {
    src: "/IMG_3236.jpg",
    alt: "Ingredient Scanning",
  },
  {
    src: "/IMG_3237.PNG",
    alt: "Recipe Generation",
  },
  {
    src: "/IMG_3238.PNG",
    alt: "Cooking Instructions",
  },
  {
    src: "/IMG_3239.PNG",
    alt: "Recipe Management",
  },
]

export function PhoneCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % phoneImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto">
      {/* Phone Frame */}
      <div className="relative w-80 h-[600px] mx-auto">
        {/* Phone Outer Frame */}
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
            {/* Screen */}
            <div className="absolute inset-4 bg-white rounded-[2rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={phoneImages[currentImage].src}
                  alt={phoneImages[currentImage].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Phone Details */}
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>

          {/* Camera Notch */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-2xl">🍳</span>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="text-xl">🥕</span>
        </motion.div>

        <motion.div
          className="absolute top-20 -left-6 w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-xl">🧄</span>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {phoneImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
