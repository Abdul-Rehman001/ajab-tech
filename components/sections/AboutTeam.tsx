"use client";
import { useState } from "react";
import {
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Star,
  Lightbulb,
  Shield,
  TrendingUp,
  UserCheck,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSectionTwo() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const coreValues = [
    {
      title: "Integrity",
      description:
        "We act with transparency and honesty in all our engagements.",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of the curve with emerging technologies and creative solutions.",
      icon: Lightbulb,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      textColor: "text-sky-700",
    },
    {
      title: "Client Focus",
      description: "We treat your business as if it were our own.",
      icon: UserCheck,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      title: "Excellence",
      description: "We don't just meet expectations—we exceed them.",
      icon: TrendingUp,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      textColor: "text-sky-700",
    },
  ];

  const stats = [
    { value: "150+", label: "Years Combined Experience", icon: Award },
    { value: "24/7", label: "Customer Support", icon: Heart },
    { value: "100%", label: "Client Satisfaction", icon: Star },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-tr from-white via-slate-50/50 to-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-r from-blue-200 to-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(14, 165, 233, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(14, 165, 233, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(14, 165, 233, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(14, 165, 233, 0.1) 75%)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
        }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mission Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
            <Target className="w-3.5 h-3.5 mr-2" />
            Our Mission
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 leading-tight mb-8">
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Making the world work better
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The mission of AJAB is to be a catalyst that makes the world work
              better, empower every person and every organization on the planet
              to achieve more, help people see data in new ways, discover
              insights, unlock endless possibilities and create wonders.
            </p>
          </div>
        </motion.div>

        {/* Leadership Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
            <Users className="w-3.5 h-3.5 mr-2" />
            Leadership & Values
          </div>

          <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-700 leading-relaxed mb-6 italic">
              "Good business leaders create a vision, articulate the vision,
              passionately own the vision, and relentlessly drive it to
              completion."
            </blockquote>
            <cite className="text-slate-500 font-medium">— Jack Welch</cite>
          </div>
        </motion.div>

        {/* Management Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Management Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                  Powerful Management Team
                </span>
              </h3>

              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  AJAB has a powerful management team with over 150 person-years
                  of experience and knowledge. The management team approaches
                  new challenges with proactive thinking and strategic planning,
                  keeping the larger picture in perspective.
                </p>

                <p className="text-slate-600 leading-relaxed font-light">
                  The working team comprises some of the industry's most
                  experienced, talented, and committed professionals who thrive
                  to provide purpose-built solutions to customers.
                </p>

                <p className="text-slate-600 leading-relaxed font-light">
                  Our unmatched experience and specialized skills enable us to
                  deliver high-end and consistent results, which ensures your IT
                  investment yields returns. Our high-performing teams and rich
                  set of innovative solutions offer commendable working
                  experience with a customer-first strategy.
                </p>

                <p className="text-slate-600 leading-relaxed font-light">
                  We have partnered with some of the most renowned and top
                  companies in the world for products and services, that help
                  introduce business improvements to drive growth.
                </p>

                <p className="text-slate-600 leading-relaxed font-light">
                  Our forward-looking leadership team is made up of experienced,
                  focused, and dedicated executives. Working with each other and
                  our employees, their knowledge and experience come together to
                  make a difference for all our clients.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Team Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-sky-100 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
              {/* Team Icon Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 opacity-60">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full flex items-center justify-center"
                    >
                      <Users className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Central Focus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">
            The principles that guide every decision and shape our company
            culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                hoveredValue === index
                  ? `${value.bgColor} ${value.borderColor} shadow-lg scale-105`
                  : "bg-white/60 border-slate-200 hover:shadow-md"
              }`}
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                  hoveredValue === index
                    ? `bg-gradient-to-r ${value.color} shadow-lg`
                    : "bg-slate-100"
                }`}
              >
                <value.icon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    hoveredValue === index ? "text-white" : "text-slate-600"
                  }`}
                />
              </div>

              <h4
                className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  hoveredValue === index ? value.textColor : "text-slate-900"
                }`}
              >
                {value.title}
              </h4>

              <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${
                  hoveredValue === index ? "text-slate-700" : "text-slate-600"
                }`}
              >
                {value.description}
              </p>

              {/* Hover Effect Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredValue === index ? 1 : 0,
                  x: hoveredValue === index ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-6 right-6"
              >
                <ChevronRight className={`w-5 h-5 ${value.textColor}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
