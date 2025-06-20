"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function PartnersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const allPartners = [...siteConfig.partners.cloud, ...siteConfig.partners.enterprise, ...siteConfig.partners.security]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(allPartners.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [allPartners.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Trusted technology partnerships that power our solutions</p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(allPartners.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {allPartners.slice(slideIndex * 4, (slideIndex + 1) * 4).map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
