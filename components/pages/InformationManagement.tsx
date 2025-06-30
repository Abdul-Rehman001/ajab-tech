import React from "react";
import {
  FileText,
  Settings,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Database,
  Users,
  Target,
  Folder,
  Wrench,
} from "lucide-react";

const InformationManagementPage = () => {
  const services = [
    {
      icon: Folder,
      title: "Information Management Services",
      subtitle: "Structure Your Data. Secure Your Knowledge.",
      description:
        "We help organizations modernize how they capture, store, govern, and access enterprise information—across departments, formats, and platforms.",
      features: [
        "Document & content management (DMS/ECM solutions)",
        "Enterprise knowledge bases & intranets (SharePoint, M-Files, OpenText)",
        "Records management & digital archiving",
        "Workflow automation & eForms",
        "Data classification, tagging, and lifecycle governance",
        "Compliance with Saudi data laws (NCA, PDPL, MOMRA, SFDA)",
      ],
      benefits: [
        "Eliminate paper-based processes",
        "Enable secure, centralized access to critical information",
        "Improve collaboration, governance, and audit-readiness",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Wrench,
      title: "IT Service Management (ITSM)",
      subtitle: "Deliver Better IT. Enable Smarter Operations.",
      description:
        "We implement and optimize ITSM platforms that align with ITIL frameworks, meet compliance standards, and enhance user experience.",
      features: [
        "ITSM platform deployment (ServiceNow, ManageEngine, BMC)",
        "Incident, request, change, and asset management",
        "Service desk setup & automation",
        "SLA tracking and performance reporting",
        "ITIL process consulting & continuous improvement",
        "Integration with CMDB, monitoring, and HR systems",
      ],
      benefits: [
        "Reduce downtime and service delays",
        "Increase IT efficiency and visibility",
        "Empower users with self-service portals",
        "Align IT with business priorities and compliance mandates",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
  ];

  const visionAlignment = [
    "Enabling paperless government and records digitization",
    "Supporting compliance with local data laws and cybersecurity frameworks",
    "Integrating ITSM across smart cities, healthcare, education, and finance",
    "Supporting local cloud-first initiatives and data residency regulations",
    "Empowering IT departments with automation and analytics",
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Global platforms + local compliance",
      description:
        "Experts in international solutions with KSA regulatory alignment",
    },
    {
      icon: Settings,
      title: "Seamless integration",
      description: "Microsoft 365, Dynamics, Azure, and more",
    },
    {
      icon: Globe,
      title: "Public sector expertise",
      description: "Deep understanding of regulated industries in KSA",
    },
    {
      icon: Database,
      title: "Data security-first mindset",
      description: "NCA & PDPL alignment built-in",
    },
    {
      icon: TrendingUp,
      title: "Scalable solutions",
      description: "From small teams to enterprise-level operations",
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
              <FileText className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Information
              </span>
              <span className="text-slate-400">•</span>
              <Settings className="w-6 h-6 text-sky-600" />
              <span className="text-slate-600 text-sm font-medium">
                Management
              </span>
              <span className="text-slate-400">•</span>
              <Wrench className="w-6 h-6 text-emerald-600" />
              <span className="text-slate-600 text-sm font-medium">
                ITSM Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Information Management & ITSM Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Organize Information. Optimize IT. Drive National Impact.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              We enable public and private sector organizations to digitally
              manage their information assets and deliver seamless IT
              services—in line with the Kingdom's digital transformation goals
              under Saudi Vision 2030.
              <br />
              <br />
              Our solutions are built for performance, compliance, and user
              experience. We help you manage data, systems, and services with
              intelligence and agility—supporting innovation, accountability,
              and national competitiveness.
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

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        {index === 0 ? "Key Capabilities:" : "ITSM Offerings:"}
                      </p>
                      <div className="space-y-3">
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

                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        {index === 0 ? "Benefits:" : "Outcomes:"}
                      </p>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 font-light">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                          ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Saudi Vision 2030 Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Saudi Vision 2030 <span className="text-blue-600">Alignment</span>
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-3xl mx-auto">
              We support the Kingdom's Vision 2030 focus on digital governance,
              e-government platforms, and public sector modernization by:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionAlignment.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
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
            Ready to Transform Your Information Management & IT Services?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how our solutions can help you organize information,
            optimize IT operations, and drive national impact in alignment with
            Saudi Vision 2030.
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

export default InformationManagementPage;
