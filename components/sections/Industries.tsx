"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Sample industries data - replace with your siteConfig.industries
const industries = [
  {
    id: 1,
    title: "Healthcare & Life Sciences",
    description:
      "Advanced digital solutions for healthcare providers, pharmaceutical companies, and medical device manufacturers. We deliver HIPAA-compliant systems, telemedicine platforms, and AI-powered diagnostic tools.",
    image:
      "https://plus.unsplash.com/premium_photo-1681967058815-b3853bd74eab?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Electronic Health Records",
      "Telemedicine Solutions",
      "AI Diagnostics",
      "Compliance Management",
    ],
  },
  {
    id: 2,
    title: "Financial Services",
    description:
      "Secure, scalable fintech solutions including digital banking, payment processing, and blockchain technologies. Our expertise spans from traditional banking to innovative cryptocurrency platforms.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Digital Banking",
      "Payment Processing",
      "Blockchain Solutions",
      "Risk Management",
    ],
  },
  {
    id: 3,
    title: "E-commerce & Retail",
    description:
      "Complete digital commerce ecosystems with advanced analytics, inventory management, and customer experience optimization. Drive sales with AI-powered recommendations and seamless omnichannel experiences.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    features: [
      "E-commerce Platforms",
      "Inventory Management",
      "Customer Analytics",
      "Mobile Commerce",
    ],
  },
  {
    id: 4,
    title: "Manufacturing & IoT",
    description:
      "Smart manufacturing solutions leveraging IoT, predictive maintenance, and industrial automation. Transform your operations with real-time monitoring and data-driven insights.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "IoT Integration",
      "Predictive Maintenance",
      "Industrial Automation",
      "Supply Chain Optimization",
    ],
  },
  {
    id: 5,
    title: "Education & EdTech",
    description:
      "Revolutionary learning management systems, virtual classrooms, and AI-powered educational tools. Enhance learning outcomes with personalized education experiences.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    features: [
      "Learning Management",
      "Virtual Classrooms",
      "Educational Analytics",
      "Mobile Learning",
    ],
  },
  {
    id: 6,
    title: "Real Estate & PropTech",
    description:
      "Comprehensive property management platforms, virtual tours, and smart building solutions. Streamline operations with automated workflows and enhanced tenant experiences.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
    features: [
      "Property Management",
      "Virtual Tours",
      "Smart Buildings",
      "Tenant Portals",
    ],
  },
];

export default function IndustriesWeServe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + industries.length) % industries.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentIndustry = industries[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 block">
              Diverse Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge technology solutions tailored to meet the
            unique challenges and opportunities of your industry sector.
          </p>
        </div>

        {/* Main Slider */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Image Section */}
            <div className="relative overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-blue-600/20 z-10"></div>
              <img
                src={currentIndustry.image}
                alt={currentIndustry.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <span className="text-sm font-semibold text-gray-800">
                    {String(currentSlide + 1).padStart(2, "0")} /{" "}
                    {String(industries.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium mb-4">
                    Industry Focus
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {currentIndustry.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentIndustry.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    Key Solutions
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentIndustry.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center group z-30"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-sky-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center group z-30"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-sky-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-sky-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Industry Grid Overview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                index === currentSlide
                  ? "border-sky-500 bg-sky-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-sky-300 hover:shadow-md"
              }`}
            >
              <div className="text-sm font-semibold text-gray-800 truncate">
                {industry.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {industry.features.length} Solutions
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              We work across many more sectors and can customize solutions for
              your specific industry needs.
            </p>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Explore All Industries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
