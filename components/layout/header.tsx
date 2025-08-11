"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Globe, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Services dropdown items
  const servicesItems = [
    {
      title: "Data • Analytics • AI Solutions",
      href: "/services/data-analytics-ai",
    },
    {
      title: "Digital Transformation at Scale",
      href: "/services/digital-transformation",
    },
    {
      title: "Robust Cyber Defence & Compliance",
      href: "/services/cyber-security",
    },
    { title: "Industry 4.0 Solutions", href: "/services/industry-4-0" },
    { title: "ERP Solutions", href: "/services/erp-solutions" },
    {
      title: "CRM • API Integration • Business Intelligence",
      href: "/services/crm-api-bi",
    },
    {
      title: "Information Management & ITSM",
      href: "/services/information-management",
    },
    { title: "QHSE Digital Solutions", href: "/services/qhse-solutions" },
    {
      title: "IT Talent • Workforce Localization • Training",
      href: "/services/it-talent",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        event.target &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-sky-100/50 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <Image
              src="./logo.png"
              alt="AJAB Tech Logo"
              width={192}
              height={80}
              className="h-12 w-auto sm:h-16 lg:h-20 lg:w-48 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm rounded-md px-2 py-1 border border-sky-100/50 shadow-sm">
              {siteConfig.navigation.main.map((item, index) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="relative" ref={servicesRef}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-all duration-200 rounded-md hover:bg-sky-50/80 group"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                        <div className="absolute inset-0 rounded-md bg-sky-600/10 scale-0 group-hover:scale-100 transition-transform duration-200" />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setIsServicesOpen(false)}
                            className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-sky-100/50 rounded-lg shadow-lg overflow-hidden z-50"
                          >
                            <div className="p-2 max-h-96 overflow-y-auto">
                              {servicesItems.map((service, idx) => (
                                <Link
                                  key={idx}
                                  href={service.href}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="block px-4 py-3 text-sm text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 rounded-md transition-all duration-200 border border-transparent hover:border-sky-100/50"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-all duration-200 rounded-md hover:bg-sky-50/80 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 rounded-md bg-sky-600/10 scale-0 group-hover:scale-100 transition-transform duration-200" />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle - Desktop */}
            <Link href="/contact">
              <Button
                size="sm"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2 rounded-md border border-sky-100/50 bg-white/60 backdrop-blur-sm hover:bg-sky-50/80 transition-all duration-200"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5 text-slate-700" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5 text-slate-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[90vw] max-w-[320px] bg-white/95 backdrop-blur-xl border-l border-sky-100/50 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col space-y-6 mt-8"
                >
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 px-4">
                    <Image
                      src="./logo.png"
                      alt="AJAB Tech Logo"
                      width={120}
                      height={50}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2 px-4">
                    {siteConfig.navigation.main.map((item, index) => {
                      if (item.name === "Services") {
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1 + index * 0.05,
                            }}
                          >
                            <button
                              onClick={() =>
                                setIsMobileServicesOpen(!isMobileServicesOpen)
                              }
                              className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 rounded-md transition-all duration-200 border border-transparent hover:border-sky-100/50"
                            >
                              <span>{item.name}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  isMobileServicesOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {isMobileServicesOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-4 mt-2 space-y-1 border-l-2 border-sky-100 pl-4"
                                >
                                  {servicesItems.map((service, idx) => (
                                    <Link
                                      key={idx}
                                      href={service.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsMobileServicesOpen(false);
                                      }}
                                      className="block px-3 py-2 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50/50 rounded-md transition-all duration-200"
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 + index * 0.05,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 rounded-md transition-all duration-200 border border-transparent hover:border-sky-100/50"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile Language Toggle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="px-4"
                  >
                    <Link href="/contact">
                      <Button
                        size="sm"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-sky-700 rounded-md transition-all duration-200"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="px-4 pt-4 border-t border-sky-100/50"
                  >
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium py-3 rounded-md shadow-sm transition-all duration-200"
                    >
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
