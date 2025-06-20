"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  Server,
  Lightbulb,
  Cloud,
  Shield,
  Network,
  Code,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  Server,
  Lightbulb,
  Cloud,
  Shield,
  Network,
  Code,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="space-y-20">
            {siteConfig.services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-lg text-blue-600">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div
                    className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-32 w-32 text-blue-600 opacity-20" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
