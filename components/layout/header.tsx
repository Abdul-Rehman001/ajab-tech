"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-md">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="./logo.png"
              alt="AJAB Tech Logo"
              width={40}
              height={40}
              className="h-20 w-48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-sm rounded-md px-2 py-1 border border-sky-100/50 shadow-sm">
              {siteConfig.navigation.main.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-all duration-200 rounded-md hover:bg-sky-50/80 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 rounded-md bg-sky-600/10 scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle - Desktop */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentLang(currentLang === "en" ? "ar" : "en")}
              className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 rounded-md border border-sky-100/50 bg-white/60 backdrop-blur-sm transition-all duration-200"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang === "en" ? "العربية" : "English"}</span>
            </Button>

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
                className="w-[320px] bg-white/95 backdrop-blur-xl border-l border-sky-100/50"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col space-y-6 mt-12"
                >
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 px-4">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-600 to-sky-700" />
                    <span className="text-xl font-semibold bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                      {siteConfig.name}
                    </span>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2 px-4">
                    {siteConfig.navigation.main.map((item, index) => (
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
                    ))}
                  </div>

                  {/* Mobile Language Toggle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="px-4"
                  >
                    <Button
                      variant="ghost"
                      onClick={() =>
                        setCurrentLang(currentLang === "en" ? "ar" : "en")
                      }
                      className="w-full justify-start px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 rounded-md border border-sky-100/50 bg-white/60"
                    >
                      <Globe className="h-5 w-5 mr-3" />
                      {currentLang === "en" ? "العربية" : "English"}
                    </Button>
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
