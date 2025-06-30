import React from "react";
import {
  Settings,
  Users,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Cog,
  Building,
  Briefcase,
} from "lucide-react";

const ERPSolutionsPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: "ERP Consulting & Strategy",
      subtitle: "Right Platform, Right Strategy",
      description:
        "We guide you in selecting the right ERP platform—based on your size, industry, and goals. From Microsoft Dynamics 365 to SAP and Oracle, we align technology with your business vision.",
      features: [
        "Platform selection and evaluation",
        "Business process analysis and optimization",
        "Technology roadmap development",
        "ROI analysis and business case preparation",
        "Change management strategy",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Settings,
      title: "Implementation & Customization",
      subtitle: "Tailored to Your Workflows",
      description:
        "Our certified experts implement and tailor ERP systems to match your workflows, whether for finance, supply chain, HR, projects, or manufacturing.",
      features: [
        "End-to-end ERP implementation",
        "Custom module development",
        "Business process configuration",
        "Data migration and validation",
        "User training and adoption programs",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: Shield,
      title: "Localization & Compliance",
      subtitle: "Region-Ready Solutions",
      description:
        "We ensure your ERP meets regional requirements such as ZATCA e-invoicing, VAT compliance, and Arabic-language interfaces—especially critical for businesses in Saudi Arabia and the GCC.",
      features: [
        "ZATCA e-invoicing compliance",
        "VAT and tax configuration",
        "Arabic language localization",
        "Local regulatory reporting",
        "GCC-specific business requirements",
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: Zap,
      title: "Integration & Automation",
      subtitle: "Seamless Digital Ecosystem",
      description:
        "We connect ERP with your CRM, eCommerce, BI, and other systems, unlocking seamless data flow and process automation across your digital ecosystem.",
      features: [
        "CRM and eCommerce integration",
        "Business intelligence connectivity",
        "Third-party system integrations",
        "Process automation workflows",
        "Real-time data synchronization",
      ],
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: TrendingUp,
      title: "Support & Optimization",
      subtitle: "Continuous Value Delivery",
      description:
        "Beyond go-live, we offer ongoing support, enhancements, and performance tuning to ensure your ERP continues delivering value as your business evolves.",
      features: [
        "24/7 technical support",
        "Performance monitoring and tuning",
        "System updates and upgrades",
        "Continuous improvement programs",
        "User training and skill development",
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  const platforms = [
    "Microsoft Dynamics 365 (F&O, Business Central, CRM)",
    "SAP S/4HANA",
    "Oracle",
    "Odoo (Open Source ERP)",
    "Custom ERP modules for specific industries",
  ];

  const industries = [
    "Manufacturing & Distribution",
    "Retail & eCommerce",
    "Construction & Real Estate",
    "Financial Services",
    "Healthcare",
    "Public Sector & Government",
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced ERP consultants",
      description: "Functional experts with deep industry knowledge",
    },
    {
      icon: Globe,
      title: "Region-specific compliance",
      description: "KSA, GCC, Africa regulatory expertise",
    },
    {
      icon: Zap,
      title: "Rapid deployment options",
      description: "Fast-track solutions for SMBs",
    },
    {
      icon: Settings,
      title: "Strong partner ecosystem",
      description: "Add-ons and integrations network",
    },
    {
      icon: Shield,
      title: "Customer-first approach",
      description: "Long-term support and partnership",
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
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            zIndex: 0,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Settings className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">ERP</span>
              <span className="text-slate-400">•</span>
              <Building className="w-6 h-6 text-sky-600" />
              <span className="text-slate-600 text-sm font-medium">
                Solutions
              </span>
              <span className="text-slate-400">•</span>
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <span className="text-slate-600 text-sm font-medium">
                Business Growth
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              ERP Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                That Power Your Business Forward
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              We help businesses unlock efficiency, visibility, and control
              through end-to-end ERP solutions tailored to their industry and
              growth stage.
              <br />
              <br />
              Whether you're a fast-growing SME or a large enterprise, our ERP
              services are designed to streamline operations, automate
              processes, and enable data-driven decisions—so you can focus on
              what matters most: growing your business.
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
              What We Offer—
              <span className="text-blue-600">
                {" "}
                comprehensive ERP services that transform your operations
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
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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
                          ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 3
                          ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Platforms Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
                Platforms We{" "}
                <span className="text-blue-600">Specialize In</span>
              </h2>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-light">
                      {platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
                Industry-Focused{" "}
                <span className="text-blue-600">ERP Expertise</span>
              </h2>
              <p className="text-slate-600 font-light mb-6">
                We serve clients across key industries including:
              </p>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-light">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
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
                className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
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
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how our ERP solutions can streamline your processes,
            improve visibility, and drive growth across your organization.
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

export default ERPSolutionsPage;
