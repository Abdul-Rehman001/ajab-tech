"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { Award, Shield, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Award,
  Shield,
  Users,
  TrendingUp,
  Clock,
}

export default function WhyAjabPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Choose AJAB Tech?</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted Middle East IT partner for digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-10 w-10 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700 mb-8">
              "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate
              competitive advantage."
            </blockquote>
            <cite className="text-lg text-gray-500">— Jack Welch</cite>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the AJAB Difference?</h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied clients who trust AJAB Tech with their IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
