"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already seen the cookie banner
    const hasSeenCookieBanner = localStorage.getItem("cookieConsent")
    if (!hasSeenCookieBanner) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "dismissed")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
        >
          <Card className="bg-white border-orange-200 shadow-2xl">
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">We use cookies</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    We use cookies to enhance your experience, analyze site usage, and provide personalized features. By
                    continuing to use our site, you agree to our use of cookies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={handleAccept}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm px-4 py-2"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      className="border-orange-300 text-orange-600 hover:bg-orange-50 text-sm px-4 py-2"
                    >
                      Decline
                    </Button>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 text-sm px-2" asChild>
                      <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
