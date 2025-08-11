"use client";

import React from "react";
import {
  Award,
  Shield,
  Users,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronRight,
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
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
            Why Choose AJAB Tech
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              Your Trusted
            </span>
            <br />
            <span className="text-blue-600">Middle East IT Partner</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Partner with industry leaders who understand the unique challenges
            and opportunities of the Middle East technology landscape.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div
                key={item.title}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card */}
                <div className="relative bg-white/60 backdrop-blur-sm border border-blue-100 rounded-xl p-8 h-full hover:bg-white/80 transition-all duration-300 hover:border-blue-200 hover:shadow-lg group-hover:-translate-y-1">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container with Stats Badge */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto border border-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 group-hover:border-blue-200 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                        {item.stats}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="mr-2 text-sm">Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-blue-100">
          {[
            { label: "Projects Delivered", value: "500+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "50+" },
            { label: "Client Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
