"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export default function PartnersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Trusted technology partnerships that power our solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Sections */}
      <section className="py-20 bg-white">
        <div className="container px-4 space-y-16">
          {/* Cloud Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cloud Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.partners.cloud.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="mx-auto mb-4 opacity-70 hover:opacity-100 transition-opacity"
                      />
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Enterprise Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.partners.enterprise.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="mx-auto mb-4 opacity-70 hover:opacity-100 transition-opacity"
                      />
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {siteConfig.partners.security.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="mx-auto mb-4 opacity-70 hover:opacity-100 transition-opacity"
                      />
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
