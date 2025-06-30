"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import {
  Building2,
  Heart,
  Factory,
  Building,
  ShoppingCart,
  GraduationCap,
  Scale,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  Building2,
  Heart,
  Factory,
  Building,
  ShoppingCart,
  GraduationCap,
  Scale,
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-4">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Radial Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle,
                rgba(14, 165, 233, 0.3) 0px,
                rgba(14, 165, 233, 0.3) 1px,
                transparent 1px,
                transparent 10px
              )
            `,
            backgroundSize: "cover",
            zIndex: 0,
          }}
        ></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              Our Expertise
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                Industries We <span className="text-blue-600">Serve</span>
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Specialized IT solutions tailored for diverse industry sectors
              across the Middle East
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.industries.map((industry, index) => {
              const IconComponent =
                iconMap[industry.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/60 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group-hover:bg-white/80">
                    <CardHeader className="text-center pb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
                          <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 w-16 h-16 bg-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center text-slate-600 font-light leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-blue-100 shadow-sm">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                  Don't See Your{" "}
                  <span className="text-blue-600">Industry?</span>
                </span>
              </h2>
              <p className="text-xl text-slate-600 font-light mb-8 max-w-2xl mx-auto">
                We work with businesses across all sectors. Contact us to
                discuss your specific needs and discover how we can help
                transform your industry.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Link href="/contact" className="inline-flex items-center">
                  Get in Touch
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
