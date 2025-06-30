import React from "react";
import {
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  AlertTriangle,
  FileText,
  BarChart3,
  Leaf,
  ArrowRight,
  Play,
  Award,
  Eye,
  Brain,
  Zap,
  Settings,
} from "lucide-react";

const QHSEDigitalSolutions = () => {
  const services = [
    {
      icon: Shield,
      title: "QHSE Management Platforms",
      subtitle: "Centralized Digital Control & Visibility",
      description:
        "We implement end-to-end systems that digitize and centralize QHSE operations for better control and visibility across all safety, quality, and environmental processes.",
      features: [
        "QHSE software (off-the-shelf or custom-built)",
        "Mobile-based incident reporting & inspections",
        "Corrective and preventive action (CAPA) workflows",
        "Real-time dashboards and compliance tracking",
        "Role-based access and user-friendly reporting tools",
      ],
      gradient: "from-blue-600 to-sky-600",
      bgGradient: "from-blue-50 to-sky-50",
    },
    {
      icon: AlertTriangle,
      title: "Incident & Risk Management",
      subtitle: "Proactive Hazard Control & Safety Excellence",
      description:
        "Minimize hazards and manage workplace incidents with proactive, data-driven tools that ensure compliance with local and international safety standards.",
      features: [
        "Hazard identification & risk assessments (HIRA)",
        "Incident reporting, investigation & root cause analysis",
        "Risk matrix automation & mitigation planning",
        "Compliance with OSHA, ISO 45001 & Saudi labor laws",
        "Predictive analytics for safety performance",
      ],
      gradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Award,
      title: "Quality Management",
      subtitle: "Digital Quality Excellence & Standards Compliance",
      description:
        "Digitize and optimize your quality processes to meet national and global standards while ensuring continuous improvement and operational excellence.",
      features: [
        "Quality audits and inspection tracking",
        "Supplier quality management",
        "Non-conformance reporting (NCR)",
        "ISO 9001-compliant quality documentation",
        "KPI tracking for quality performance",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Leaf,
      title: "Environmental Monitoring & Sustainability",
      subtitle: "ESG Goals & Environmental Compliance",
      description:
        "Support your ESG goals with tools that monitor environmental impact and resource usage, ensuring compliance with sustainability frameworks and Vision 2030 objectives.",
      features: [
        "Real-time monitoring of emissions, waste, and energy",
        "EHS compliance with Saudi and GSO standards",
        "Sustainability reporting & dashboards",
        "Green initiatives tracking (Vision 2030 compliance)",
        "Carbon footprint monitoring and reporting",
      ],
      gradient: "from-blue-600 to-blue-600",
      bgGradient: "from-blue-50 to-blue-50",
    },
    {
      icon: Users,
      title: "HSE Training & Awareness (Digital)",
      subtitle: "Workforce Empowerment Through Digital Learning",
      description:
        "Empower your workforce with digital learning modules and on-the-job safety training that promotes Saudization and continuous skill development.",
      features: [
        "LMS-enabled QHSE training delivery",
        "E-learning modules for safety protocols",
        "Compliance testing & certification tracking",
        "VR/AR safety simulation (optional)",
        "Multilingual training content for diverse workforce",
      ],
      gradient: "from-purple-600 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
    },
  ];

  const industries = [
    "Construction & Infrastructure",
    "Oil & Gas Operations",
    "Manufacturing & Industrial",
    "Logistics & Transportation",
    "Public Infrastructure & Smart Cities",
    "NEOM & Giga-Projects",
  ];

  const vision2030Benefits = [
    "Supporting local regulatory frameworks from SFDA, MOMRA, NCEM, and GSO",
    "Enabling digital QHSE transformation for NEOM, giga-projects, and smart industries",
    "Driving automation and IoT adoption in field safety and environmental monitoring",
    "Promoting Saudization and workforce empowerment through digital QHSE learning",
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "KSA/GCC QHSE Expertise",
      description: "tailored for local regulatory compliance and standards",
    },
    {
      icon: Globe,
      title: "Mobile-first platforms",
      description: "multilingual and user-friendly for diverse workforces",
    },
    {
      icon: CheckCircle,
      title: "Vision 2030 aligned",
      description: "committed to NTP and sustainability frameworks",
    },
    {
      icon: TrendingUp,
      title: "Sector-specific solutions",
      description: "oil & gas, construction, logistics, public infrastructure",
    },
    {
      icon: BarChart3,
      title: "Long-term partnership",
      description: "data analytics, reporting, and continuous improvement",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(rgba(5, 75, 150, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5, 61, 150, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            zIndex: 0,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Enhancing Safety
              </span>
              <span className="text-slate-400">•</span>
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Ensuring Quality
              </span>
              <span className="text-slate-400">•</span>
              <Leaf className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Empowering Sustainability
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              QHSE Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Enhancing Safety. Ensuring Quality. Empowering Sustainability.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              We deliver technology-driven QHSE solutions that help
              organizations build a culture of safety, environmental
              responsibility, and operational excellence. Aligned with the
              Kingdom's Vision 2030, our offerings enable industries to digitize
              their compliance processes, track performance, and drive
              continuous improvement.
            </p>

            <p className="text-base text-slate-500 max-w-3xl mx-auto mb-8 font-light">
              Whether you're in construction, oil & gas, manufacturing, or
              logistics—we help you stay compliant, safe, and future-ready
              across quality, health, safety, and environmental domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-medium rounded-sm hover:from-blue-700 hover:to-sky-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-sm hover:bg-slate-50 transition-all duration-300">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Our QHSE Offerings—
              <span className="text-blue-600">
                {" "}
                comprehensive digital transformation
              </span>
            </h2>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-sm bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-900 mb-3">
                      What we deliver:
                    </p>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div
                    className={`rounded-sm bg-gradient-to-br ${service.bgGradient} p-8 h-80 flex items-center justify-center`}
                  >
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 3
                          ? "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      }
                      alt={service.title}
                      className="w-full h-full object-cover rounded-sm opacity-80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">
                    {industry}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Aligned with{" "}
              <span className="text-blue-600">Saudi Vision 2030</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              We help companies align with Vision 2030's focus on workforce
              safety, operational excellence, and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vision2030Benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-sm border border-blue-200"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-sm flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-slate-700 font-light leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Why Work With <span className="text-blue-600">AJAB?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Ready to Transform Your QHSE Operations?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how we can help you build a culture of safety, quality
            excellence, and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 text-sm font-medium rounded-sm hover:bg-blue-50 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-white text-white text-sm font-medium rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QHSEDigitalSolutions;
