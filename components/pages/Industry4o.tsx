import React from "react";
import {
  Cog,
  Factory,
  Brain,
  TrendingUp,
  Rocket,
  Globe,
  Settings,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Cpu,
  Network,
  Eye,
  Link,
} from "lucide-react";

const Industry40Page = () => {
  const services = [
    {
      icon: Factory,
      title: "Smart Factory Integration",
      subtitle: "Connected Manufacturing Ecosystem",
      description:
        "We connect machines, devices, sensors, and systems to enable real-time monitoring, predictive maintenance, and seamless production control.",
      features: [
        "IIoT implementation (Industrial IoT)",
        "Machine-to-cloud data streaming",
        "SCADA / MES integration",
        "OPC UA and Modbus protocol connectivity",
        "Edge computing with Azure IoT Edge or AWS Greengrass",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: TrendingUp,
      title: "Industrial Data & Analytics",
      subtitle: "From Data to Actionable Insights",
      description:
        "We transform raw sensor and machine data into actionable insights to optimize production, quality, energy usage, and asset performance.",
      features: [
        "Industrial dashboards & KPI reporting",
        "Predictive maintenance analytics",
        "OEE (Overall Equipment Effectiveness) tracking",
        "Anomaly detection and failure prediction",
        "Integration with Power BI, Azure Synapse, Databricks",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: Brain,
      title: "AI & Automation for Manufacturing",
      subtitle: "Intelligent Manufacturing Operations",
      description:
        "We use AI and advanced automation to improve quality, reduce downtime, and enable autonomous decision-making.",
      features: [
        "Computer vision for defect detection & safety",
        "Digital twin design and simulation",
        "AI-based production scheduling and planning",
        "Generative AI for documentation and training",
        "Integration with ERP and MES platforms",
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: Link,
      title: "Connected Supply Chain",
      subtitle: "Enhanced Agility & Traceability",
      description:
        "Enhance agility, traceability, and collaboration across your supply chain using intelligent platforms and integrated workflows.",
      features: [
        "Supply chain visibility dashboards",
        "Inventory & logistics analytics",
        "Vendor performance monitoring",
        "Blockchain for traceability & provenance",
      ],
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
    },
  ];

  const industries = [
    "Discrete Manufacturing",
    "Process Industries (Oil & Gas, Chemicals, Food)",
    "Automotive & Industrial Equipment",
    "Utilities & Energy",
    "Smart Cities & Public Infrastructure",
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "End-to-end Industry 4.0 expertise",
      description: "from factory floor to cloud",
    },
    {
      icon: Settings,
      title: "Integration-ready",
      description: "connects ERP, MES, CRM, and IoT systems",
    },
    {
      icon: Brain,
      title: "Innovation-led",
      description: "powered by AI, machine learning, and automation",
    },
    {
      icon: Globe,
      title: "Regionally aware",
      description: "KSA/GCC-specific data policies & compliance",
    },
    {
      icon: Zap,
      title: "Scalable",
      description:
        "designed for pilot, proof of concept, or full enterprise rollout",
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
              <Factory className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Digital Factories
              </span>
              <span className="text-slate-400">•</span>
              <Cog className="w-6 h-6 text-sky-600" />
              <span className="text-slate-600 text-sm font-medium">
                Smart Operations
              </span>
              <span className="text-slate-400">•</span>
              <Brain className="w-6 h-6 text-emerald-600" />
              <span className="text-slate-600 text-sm font-medium">
                Intelligent Decisions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Industry 4.0 Solutions
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Digital Factories. Smart Operations. Intelligent Decisions.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              We empower manufacturers and industrial enterprises to embrace the
              future with Industry 4.0 solutions that integrate operational
              technology (OT) with information technology (IT), driving
              automation, intelligence, and efficiency across every layer of the
              value chain.
            </p>

            <p className="text-base text-slate-500 max-w-3xl mx-auto mb-8 font-light">
              We help organizations move from traditional operations to
              connected, predictive, and autonomous ecosystems—aligned with the
              vision of the fourth industrial revolution.
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
                comprehensive Industry 4.0 transformation
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
                          ? "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                    <Factory className="w-4 h-4 text-blue-600" />
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
            Ready to Transform Your Operations with Industry 4.0?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how we can help you build connected, intelligent, and
            autonomous manufacturing operations.
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

export default Industry40Page;
