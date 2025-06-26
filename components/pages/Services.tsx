"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  BarChart3,
  Cloud,
  Shield,
  Factory,
  Settings,
  Users,
  Database,
  CheckCircle,
  GraduationCap,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  BarChart3,
  Cloud,
  Shield,
  Factory,
  Settings,
  Users,
  Database,
  CheckCircle,
  GraduationCap,
};

// Example service type
type Service = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  benefits: string[];
  keyCapabilities?: string[];
  technologies?: string[];
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 via-sky-700 to-sky-600"></div>
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)]'></div>
        <div className="relative container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm rounded-md text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Enterprise IT Solutions &amp; Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide leading-tight">
              Transform Your
              <span className="block font-normal bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-2">
                Digital Infrastructure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sky-200 max-w-2xl mx-auto leading-relaxed font-light">
              Professional technology solutions engineered to optimize your
              business operations and accelerate digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container px-6 mx-auto">
          <div className="space-y-24">
            {siteConfig.services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content Section */}
                    <div
                      className={`lg:col-span-7 ${
                        !isEven ? "lg:col-start-6" : ""
                      } space-y-8`}
                    >
                      <div className="space-y-6">
                        {/* Service Header */}
                        <div className="flex items-start space-x-5">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg flex items-center justify-center shadow-md border border-sky-200">
                            <IconComponent className="h-7 w-7 text-sky-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="text-2xl lg:text-3xl font-light text-sky-900 mb-2 leading-tight">
                              {service.title}
                            </h2>
                            <p className="text-base text-sky-600 font-normal">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-sky-600 leading-relaxed font-light">
                          {service.description}
                        </p>

                        {/* Key Capabilities */}
                        {service.keyCapabilities && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-normal text-sky-800">
                              Key Capabilities
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.keyCapabilities.map(
                                (capability: string, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex items-center space-x-3 group"
                                  >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-sky-400 rounded-full group-hover:bg-sky-600 transition-colors"></div>
                                    <span className="text-sky-700 text-sm font-normal">
                                      {capability}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Benefits */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-normal text-sky-800">
                            Why Choose Us
                          </h3>
                          <div className="space-y-3">
                            {service.benefits.map(
                              (benefit: string, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-3 p-4 rounded-md bg-sky-50 hover:bg-sky-100 transition-all duration-300 group border border-sky-100"
                                >
                                  <CheckCircle className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0 group-hover:text-sky-600 transition-colors" />
                                  <span className="text-sky-700 font-normal text-sm">
                                    {benefit}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Technologies */}
                        {service.technologies && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-normal text-sky-800">
                              Technologies We Use
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map(
                                (tech: string, idx: number) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white border border-sky-200 text-sky-700 text-sm font-normal rounded hover:bg-sky-50 hover:border-sky-300 transition-all duration-300 shadow-sm"
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-6">
                          <Button
                            asChild
                            size="lg"
                            className="bg-sky-800 hover:bg-sky-900 text-white px-6 py-2.5 rounded shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 group font-normal"
                          >
                            <Link
                              href="/contact"
                              className="flex items-center space-x-2"
                            >
                              <span>Get Started</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Visual Section */}

                    <div
                      className={`lg:col-span-5 ${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <div className="relative group">
                        <div className="relative aspect-square bg-gradient-to-br from-sky-50 via-white to-sky-100 rounded-lg overflow-hidden shadow-lg shadow-sky-200/50 group-hover:shadow-xl group-hover:shadow-sky-200/60 transition-all duration-500 border border-sky-200">
                          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-sky-600/5"></div>

                          {/* ✅ Replace IconComponent with Image */}
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 via-sky-700 to-sky-600"></div>
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-50'></div>
        <div className="relative container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm rounded-md text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Optimize Your Operations?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide leading-tight">
              Let&apos;s Build Efficient
              <span className="block font-normal bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-2">
                Solutions Together
              </span>
            </h2>
            <p className="text-lg text-sky-200 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Partner with our expert team to implement robust technology
              solutions that drive measurable business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-sky-800 hover:bg-sky-50 px-6 py-2.5 rounded shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 group font-normal"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/5 backdrop-blur-sm px-6 py-2.5 rounded shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 font-normal"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
