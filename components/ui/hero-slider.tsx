"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const slides = siteConfig.heroSlides;

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length, isAutoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-black to-gray-900/80">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].tagline}
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center min-h-[600px]">
            <div className="w-full max-w-3xl text-left">
              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-4 border border-blue-100"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                Professional Services
              </motion.div>

              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight"
              >
                <span className="text-white drop-shadow-sm">
                  {slides[currentSlide].tagline}
                </span>
              </motion.h1>

              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-100/90 mb-6 leading-relaxed font-light max-w-2xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                key={`cta-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-md transition-all duration-200">
                  {slides[currentSlide].cta}
                </Button>
                <Button
                  variant="outline"
                  className="border bg-white border-blue-300 text-blue-600 hover:bg-blue-900 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:text-white"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm text-blue-300 hover:bg-white hover:text-blue-900 shadow-md  transition-all duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm text-blue-300 hover:bg-white hover:text-blue-900 shadow-md  transition-all duration-200"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 shadow-md ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-200 rounded-sm ${
                index === currentSlide ? "w-6 h-2" : "w-2 h-2"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-sm transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-blue-600"
                    : "bg-white hover:bg-blue-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-0.5 bg-blue-100/40">
          <motion.div
            key={currentSlide}
            className="h-full bg-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
