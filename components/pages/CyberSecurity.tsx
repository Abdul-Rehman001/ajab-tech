"use client";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Brain,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Globe,
  Settings,
  Zap,
  Search,
  UserCheck,
  Server,
  Monitor,
  FileText,
  Target,
  Layers,
} from "lucide-react";

const CybersecurityServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "Risk Assessment & Compliance",
      subtitle: "Foundation Security",
      description:
        "We assess your security posture, identify vulnerabilities, and align your organization with local and global compliance frameworks including NCA and ISO 27001.",
      features: [
        "NCA compliance (Essential Cybersecurity Controls)",
        "ISO 27001 & NIST cybersecurity frameworks",
        "Risk management and security audits",
        "Data privacy assessments (including PDPL compliance)",
        "Vulnerability assessment and penetration testing",
      ],
      gradient: "from-blue-600 to-sky-600",
      bgGradient: "from-blue-50 to-sky-50",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&h=300&fit=crop&crop=center",
    },
    {
      icon: Shield,
      title: "Network & Endpoint Security",
      subtitle: "Perimeter Defense",
      description:
        "Protect your IT and OT environments against internal and external threats with advanced perimeter and endpoint security solutions.",
      features: [
        "Next-gen firewall & intrusion prevention (IPS/IDS)",
        "Endpoint detection and response (EDR)",
        "Secure remote access and VPN hardening",
        "Network segmentation and zero trust architecture",
        "Advanced threat protection and malware defense",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center",
    },
    {
      icon: Monitor,
      title: "Security Operations & Threat Monitoring",
      subtitle: "24/7 Protection",
      description:
        "Gain real-time visibility, rapid detection, and fast response to cyber threats with our managed SOC and SIEM solutions.",
      features: [
        "24/7 Security Operations Center (SOC-as-a-Service)",
        "SIEM integration (Azure Sentinel, Splunk, IBM QRadar)",
        "Threat intelligence and incident response",
        "Phishing detection, alert triage, and forensic analysis",
        "Continuous monitoring and threat hunting",
      ],
      gradient: "from-blue-600 to-pink-600",
      bgGradient: "from-blue-50 to-pink-50",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    },
    {
      icon: UserCheck,
      title: "Identity & Access Management (IAM)",
      subtitle: "Access Control",
      description:
        "Control who gets access to what—across users, systems, and devices—with robust IAM strategies and zero-trust principles.",
      features: [
        "Single sign-on (SSO) and multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Privileged access management (PAM)",
        "Identity lifecycle automation (via Azure AD or Okta)",
        "Zero-trust identity verification",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=300&fit=crop&crop=center",
    },
    {
      icon: Brain,
      title: "Cyber Resilience & Awareness",
      subtitle: "Human Factor Security",
      description:
        "We help your teams stay secure and prepared with ongoing training, cyber drills, and business continuity planning.",
      features: [
        "Cyber awareness & phishing simulations",
        "Incident response plans & tabletop exercises",
        "Backup strategy, ransomware readiness",
        "Business continuity & disaster recovery (BC/DR)",
        "Security culture development programs",
      ],
      gradient: "from-blue-600 to-sky-600",
      bgGradient: "from-blue-50 to-sky-50",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    },
    {
      icon: FileText,
      title: "Governance & Risk Management",
      subtitle: "Strategic Security",
      description:
        "Establish robust cybersecurity governance frameworks that align with business objectives and regulatory requirements.",
      features: [
        "Cybersecurity policy development",
        "Risk assessment and management frameworks",
        "Compliance monitoring and reporting",
        "Security metrics and KPI tracking",
        "Executive security briefings and dashboards",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      image:
        "https://images.unsplash.com/photo-1554774853-719586f82d77?w=500&h=300&fit=crop&crop=center",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "KSA Cybersecurity Specialists",
      description:
        "Specialized expertise in NCA, PDPL, and Saudi cybersecurity frameworks",
    },
    {
      icon: Brain,
      title: "Certified Security Experts",
      description:
        "Certified professionals in Microsoft, Fortinet, Sailpoint, Sectona, and more",
    },
    {
      icon: Monitor,
      title: "24/7 Threat Monitoring",
      description:
        "Round-the-clock monitoring, threat detection, and incident response",
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description:
        "Tailored security solutions for enterprises, government & SMEs",
    },
    {
      icon: Globe,
      title: "Vision 2030 Aligned",
      description:
        "Committed to enabling Saudi Arabia's secure digital transformation",
    },
  ];

  const complianceFrameworks = [
    {
      name: "NCA",
      description: "National Cybersecurity Authority",
    },
    {
      name: "ISO 27001",
      description: "Information Security Management",
    },
    {
      name: "NIST",
      description: "Cybersecurity Framework",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    return { ref, controls };
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24 overflow-hidden">
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="w-8 h-8 text-blue-600" />
              </motion.div>
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Cyber Defense Excellence
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight"
              variants={fadeInUp}
            >
              Robust Cyber Defence
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent font-normal"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                & Compliance
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              variants={fadeInUp}
            >
              <strong className="font-medium text-slate-700">
                Secure. Compliant. Future-Ready.
              </strong>{" "}
              We provide end-to-end cybersecurity services that protect your
              digital assets, ensure regulatory compliance, and build cyber
              resilience for the future. Aligned with Saudi Vision 2030's
              digital transformation agenda.
            </motion.p>

            {/* Compliance Framework Logos */}
            <motion.div
              className="flex items-center justify-center gap-8 mb-12"
              variants={fadeInUp}
            >
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="bg-white rounded-lg p-4 shadow-md group-hover:shadow-lg transition-all duration-300 border border-blue-100">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                      {framework.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-medium rounded-lg shadow-lg overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Secure Your Infrastructure</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                className="inline-flex items-center px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mr-2 group-hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                Security Assessment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=600&fit=crop&crop=center"
              alt="Cybersecurity Technology"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            {...useScrollAnimation()}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Our Cybersecurity Offerings
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              Comprehensive security solutions protecting your digital
              transformation journey
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
            {...useScrollAnimation()}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover="hover"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    <motion.div
                      className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 mb-6 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="space-y-3"
                      variants={staggerChildren}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          variants={fadeInUp}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm text-slate-600 font-light">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            {...useScrollAnimation()}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Aligned with Saudi Vision 2030
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              We support the Kingdom's Vision 2030 goals by enabling secure
              digital government, smart cities, e-commerce, and industrial
              modernization through robust cybersecurity frameworks.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...useScrollAnimation()}
            variants={staggerChildren}
          >
            {[
              {
                icon: FileText,
                title: "NCA & PDPL Compliance",
                description:
                  "Localization and support for National Cybersecurity Authority frameworks",
              },
              {
                icon: Server,
                title: "Local Infrastructure",
                description:
                  "Integration with Saudi cloud providers and local data centers",
              },
              {
                icon: Target,
                title: "Sector-Specific Protection",
                description:
                  "Specialized security for finance, health, energy, and public services",
              },
              {
                icon: Globe,
                title: "Global Partnerships",
                description:
                  "Strategic alliances with global and regional cybersecurity vendors",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-12 h-12 text-blue-600 mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-full h-full" />
                    </motion.div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...useScrollAnimation()}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Why Work With <span className="text-blue-600">AJAB?</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...useScrollAnimation()}
            variants={staggerChildren}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Shield className="w-16 h-16 text-white mx-auto opacity-90" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
              Protect your digital assets with enterprise-grade cybersecurity.
              Let's build a resilient, compliant, and future-ready security
              posture that grows with your business.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get Security Assessment</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Security Guide
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityServicesPage;
