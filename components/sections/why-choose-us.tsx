"use client";

import React from "react";
import {
  Award,
  Shield,
  Users,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

// Sample data - replace with your siteConfig.whyChooseUs
const whyChooseUsData = [
  {
    title: "Expert Team",
    description:
      "Our certified professionals bring years of experience and cutting-edge expertise to deliver exceptional results for your business transformation.",
    icon: "Award",
    stats: "500+ Projects",
  },
  {
    title: "Proven Security",
    description:
      "Enterprise-grade security protocols and compliance standards ensure your data and systems remain protected at all times.",
    icon: "Shield",
    stats: "99.9% Uptime",
  },
  {
    title: "Client-Centric",
    description:
      "Dedicated support teams and personalized service approach focused on understanding and exceeding your unique business requirements.",
    icon: "Users",
    stats: "24/7 Support",
  },
  {
    title: "Innovation Focus",
    description:
      "Leveraging the latest technologies and methodologies to keep your business ahead of the competition in the digital landscape.",
    icon: "TrendingUp",
    stats: "50+ Technologies",
  },
  {
    title: "Rapid Delivery",
    description:
      "Agile development processes and efficient project management ensure faster time-to-market without compromising on quality.",
    icon: "Clock",
    stats: "Fast Deployment",
  },
];

const iconMap = {
  Award,
  Shield,
  Users,
  TrendingUp,
  Clock,
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
            Why Choose AJAB Tech
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Your Trusted</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400">
              Middle East IT Ally
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Partner with industry leaders who understand the unique challenges
            and opportunities of the Middle East technology landscape.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div
                key={item.title}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/10 transform hover:-translate-y-2">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-sky-400 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {item.stats}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-400 transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-sky-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300">
                Join hundreds of companies who trust AJAB Tech for their digital
                transformation journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="group px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
          {[
            { label: "Projects Delivered", value: "500+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "50+" },
            { label: "Client Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
