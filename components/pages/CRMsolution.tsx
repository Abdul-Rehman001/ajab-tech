import React from "react";
import {
  Users,
  Network,
  BarChart3,
  Database,
  Rocket,
  Globe,
  Settings,
  Shield,
  Brain,
  CheckCircle,
  ArrowRight,
  Play,
  Link2,
  Target,
} from "lucide-react";

const CRMSolutionsPage = () => {
  const services = [
    {
      icon: Users,
      title: "CRM Solutions: Build Meaningful Customer Relationships",
      subtitle: "Sell Smarter, Serve Better, Grow Faster",
      description:
        "We implement and optimize CRM platforms that help you sell smarter, serve better, and grow faster.",
      features: [
        "CRM strategy and platform selection",
        "Implementation of Dynamics 365, Salesforce, Zoho, and others",
        "Sales automation, customer service, and marketing modules",
        "Workflow customization and dashboard creation",
        "Integration with ERP, eCommerce, and communication tools",
        "Arabic language support & KSA/GCC regulatory compliance",
      ],
      subtitle2:
        "Whether you're just starting or scaling, our CRM experts align your system with your sales process and customer goals.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Network,
      title: "API Integration & Management: Connect Everything",
      subtitle: "Seamless Enterprise Connectivity",
      description:
        "Your business systems shouldn't operate in silos. We help you integrate, orchestrate, and manage APIs to ensure seamless, secure data exchange across your enterprise.",
      features: [
        "REST & SOAP API development and integration",
        "API management platforms (Azure API Management, Mulesoft, Google APIGEE, WebMethods etc.)",
        "Secure API gateway setup and throttling policies",
        "ERP–CRM–HR–eCommerce–Payments system integration",
        "Middleware solutions (Logic Apps, Dell Boomi, Zapier, etc.)",
        "Real-time and batch data synchronization",
      ],
      subtitle2:
        "From strategy to deployment, we ensure your ecosystem is connected, responsive, and secure.",
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence (BI): Make Insightful Decisions",
      subtitle: "Transform Data into Visual Insights",
      description:
        "We help you transform raw data into visual insights that guide smarter business decisions and performance optimization.",
      features: [
        "Dashboard and report development (Power BI, Tableau, Qlik)",
        "Data warehouse and ETL pipeline setup",
        "Business KPIs, predictive insights, and trend analytics",
        "Embedded BI within CRM/ERP platforms",
        "Self-service analytics for non-technical users",
        "Real-time data monitoring and visualization",
      ],
      subtitle2:
        "We make it easy for business leaders to access the right data at the right time—with clarity and confidence.",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Business-first approach",
      description: "with deep technical expertise",
    },
    {
      icon: Shield,
      title: "Certified in top CRM, API, and BI platforms",
      description: "industry-leading certifications",
    },
    {
      icon: Globe,
      title: "Focused on KSA, GCC, and regional localization needs",
      description: "regional expertise and compliance",
    },
    {
      icon: Settings,
      title: "Security, scalability, and compliance built-in",
      description: "enterprise-grade solutions",
    },
    {
      icon: Users,
      title: "Long-term support and strategic partnership mindset",
      description: "committed to your success",
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
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">CRM</span>
              <span className="text-slate-400">•</span>
              <Network className="w-6 h-6 text-sky-600" />
              <span className="text-slate-600 text-sm font-medium">
                API Integration & Management
              </span>
              <span className="text-slate-400">•</span>
              <BarChart3 className="w-6 h-6 text-emerald-600" />
              <span className="text-slate-600 text-sm font-medium">
                Business Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Connecting Your Business.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Empowering Your Data. Transforming Your Decisions.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              We specialize in delivering smart, scalable solutions across
              Customer Relationship Management (CRM), API Integration &
              Management, and Business Intelligence (BI)—helping organizations
              unify customer experiences, automate operations, and harness the
              full power of their data.
            </p>

            <p className="text-base text-slate-500 max-w-3xl mx-auto mb-8 font-light">
              We combine deep technical expertise with industry insight to help
              businesses thrive in today's connected, digital-first economy.
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
              Comprehensive solutions that—
              <span className="text-blue-600">
                {" "}
                connect, integrate, and illuminate your business
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

                  <p className="text-slate-600 mb-4 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <p className="text-sm font-medium text-slate-900 mb-3">
                      {index === 0
                        ? "What we offer:"
                        : index === 1
                        ? "Our integration services include:"
                        : "BI offerings include:"}
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

                  <p className="text-slate-600 font-light leading-relaxed italic">
                    {service.subtitle2}
                  </p>
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
                          ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            Ready to Connect, Integrate, and Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how we can help you unify customer experiences,
            automate operations, and harness the full power of your data.
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

export default CRMSolutionsPage;
