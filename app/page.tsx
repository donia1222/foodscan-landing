"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  Sparkles,
  Star,
  Download,
  Camera,
  Utensils,
  Heart,
  Clock,
  ArrowDown,
  Smartphone,
  MessageSquare,
  Scan,
  Brain,
  CookingPot,
} from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { PhoneCarousel } from "@/components/phone-carousel"
import Link from "next/link"

export default function LandingPage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current as HTMLElement
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              FoodScan AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("nav.features")}
            </a>
            <a href="#screenshots" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              {t("nav.app")}
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              {t("nav.testimonials")}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <a href="https://apps.apple.com/us/app/foodscan-ai/id6472478688" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Download className="w-4 h-4 mr-2" />
                {t("nav.download")}
              </Button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" ref={sectionRefs[0]}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center md:text-left"
            >
              <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200">
                <Sparkles className="w-4 h-4 mr-1" />
                {t("hero.badge")}
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">{t("hero.subtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <a
                  href="https://apps.apple.com/us/app/foodscan-ai/id6472478688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6 group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    {t("hero.download")}
                  </Button>
                </a>
   
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/2149255915.jpg"
                alt="FoodScan AI App Interface"
                className="relative z-10 mx-auto rounded-3xl shadow-2xl border-8 border-white"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mt-16"
          >
            <a
              href="#features"
              className="flex flex-col items-center text-orange-500 hover:text-orange-600 transition-colors"
            >
              <span className="mb-2">{t("hero.discover")}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowDown className="w-6 h-6" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white" ref={sectionRefs[1]}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Utensils className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{t("features.personalized.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("features.personalized.description")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{t("features.instructions.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("features.instructions.description")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{t("features.ai.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("features.ai.description")}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots */}
      <section id="screenshots" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50" ref={sectionRefs[2]}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {t("screenshots.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("screenshots.subtitle")}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-300/30 to-red-300/30 rounded-full blur-3xl"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 relative z-10"
            >
              <motion.div variants={fadeInUp} className="text-center group">
                <div className="relative mb-6 transform perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: 10, rotateX: -10 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <img
                      src="/610c1398.jpg"
                      alt={t("screenshots.scan")}
                      className="mx-auto rounded-3xl shadow-xl border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-3xl"></div>
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center z-20 shadow-lg border-4 border-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Camera className="w-10 h-10 text-orange-500" />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t("screenshots.scan")}</h3>
                <p className="text-gray-600">{t("screenshots.scan.description")}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center group mt-10 md:mt-0">
                <div className="relative mb-6 transform perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <img
                      src="/6101398.jpg"
                      alt={t("screenshots.generate")}
                      className="mx-auto rounded-3xl shadow-xl border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-3xl"></div>
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-100 rounded-full flex items-center justify-center z-20 shadow-lg border-4 border-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles className="w-10 h-10 text-red-500" />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t("screenshots.generate")}</h3>
                <p className="text-gray-600">{t("screenshots.generate.description")}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center group">
                <div className="relative mb-6 transform perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: 10, rotateX: -10 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <img
                      src="/6x10c1398.jpg"
                      alt={t("screenshots.cook")}
                      className="mx-auto rounded-3xl shadow-xl border-8 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-3xl"></div>
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center z-20 shadow-lg border-4 border-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Utensils className="w-10 h-10 text-pink-500" />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{t("screenshots.cook")}</h3>
                <p className="text-gray-600">{t("screenshots.cook.description")}</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <a href="https://apps.apple.com/us/app/foodscan-ai/id6472478688" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("screenshots.try")}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Enhanced Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your ingredients into delicious meals in just three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 transform -translate-y-1/2"></div>

            {[
              {
                step: 1,
                title: t("howto.step1.title"),
                description: t("howto.step1.description"),
                icon: <Scan className="w-12 h-12 text-white" />,
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                step: 2,
                title: t("howto.step2.title"),
                description: t("howto.step2.description"),
                icon: <Brain className="w-12 h-12 text-white" />,
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
              },
              {
                step: 3,
                title: t("howto.step3.title"),
                description: t("howto.step3.description"),
                icon: <CookingPot className="w-12 h-12 text-white" />,
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center relative z-10"
              >
                <div className="mb-8 relative">
                  <div
                    className={`w-32 h-32 mx-auto rounded-full ${item.bgColor} shadow-xl border-4 border-white flex items-center justify-center relative`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-full`}></div>
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white`}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <a href="https://apps.apple.com/us/app/foodscan-ai/id6472478688" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Try It Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50" ref={sectionRefs[3]}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Lina",
                role: t("testimonials.lina.role"),
                text: t("testimonials.lina.text"),
              },
              {
                name: "María",
                role: t("testimonials.maria.role"),
                text: t("testimonials.maria.text"),
              },
              {
                name: "Carlos",
                role: t("testimonials.carlos.role"),
                text: t("testimonials.carlos.text"),
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-xl transition-all duration-300 border-orange-100 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">{testimonial.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t("cta.title")}</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">{t("cta.subtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://apps.apple.com/us/app/foodscan-ai/id6472478688"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    <Download className="w-6 h-6 mr-2" />
                    Download Now
                  </Button>
                </motion.div>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-orange-100">
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span>4.9★ Rating</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                <span>Free to Download</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16"
          >
            <PhoneCarousel />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">FoodScan AI</span>
              </div>
              <p className="text-gray-400 mb-4">{t("footer.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { key: "Home", href: "#" },
                  { key: "Features", href: "#features" },
                  { key: "Download", href: "#" },
                  { key: "About", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                      {link.key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  { key: "Terms of Use", href: "/terms-of-use" },
                  { key: "Privacy Policy", href: "/privacy-policy" },
                  { key: "Cookie Policy", href: "/cookie-policy" },
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                      {link.key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400 mt-1">📍</span>
                  <span className="text-gray-400">Main Street 123, City</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400 mt-1">📧</span>
                  <span className="text-gray-400">info@lweb.ch</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-400 mt-1">📱</span>
                  <span className="text-gray-400">+1 234 567 890</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="mt-4 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <p className="text-gray-500 text-sm">© 2025 FoodScan AI. All rights reserved.</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  <strong>Image Credits:</strong> Some images from Freepik.
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-gray-500 text-sm">
                  <strong>Website Design:</strong>{" "}
                  <a
                    href="https://lweb.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    lweb.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
