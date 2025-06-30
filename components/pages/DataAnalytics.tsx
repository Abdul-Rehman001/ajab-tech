import React from "react";
import {
  Database,
  BarChart3,
  Brain,
  Shield,
  Rocket,
  Globe,
  Settings,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";

const DataAnalyticsAIPage = () => {
  const services = [
    {
      icon: Database,
      title: "Data Services",
      subtitle: "Foundation for Intelligence",
      description:
        "Build secure, scalable, and trusted data infrastructure that serves as the foundation for analytics and AI.",
      features: [
        "Data strategy and architecture consulting",
        "Data warehousing & data lake setup (Azure, Snowflake, Databricks)",
        "ETL/ELT pipelines and real-time data streaming",
        "Data quality, governance, and compliance (incl. local KSA regulations)",
        "Master data management (MDM) and metadata cataloging",
      ],
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: BarChart3,
      title: "Analytics Solutions",
      subtitle: "From Insight to Advantage",
      description:
        "Make faster, smarter decisions with modern analytics tools that deliver real-time, actionable insights across your organization.",
      features: [
        "Interactive dashboards and reports (Power BI, Tableau)",
        "Business KPIs and operational intelligence",
        "Self-service analytics for business users",
        "Data modeling, forecasting, and scenario planning",
        "Embedded analytics within business apps (ERP, CRM, HRMS)",
      ],
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Build the Intelligent Enterprise",
      description:
        "Move from reactive to predictive with custom AI models, ML algorithms, and automation workflows.",
      features: [
        "AI/ML model development and deployment",
        "Customer behavior and churn prediction",
        "Demand forecasting and fraud detection",
        "GenAI use cases (chatbots, content generation, summarization)",
        "Computer vision and natural language processing (NLP)",
        "MLOps and AI lifecycle management",
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Future-ready solutions",
      description: "Tailored to your business model",
    },
    {
      icon: Brain,
      title: "Domain expertise",
      description: "Cloud data platforms & AI frameworks",
    },
    {
      icon: Globe,
      title: "Localized implementation",
      description: "KSA/GCC compliance ready",
    },
    {
      icon: Settings,
      title: "Trusted tools",
      description: "Azure AI, Databricks, Microsoft Fabric",
    },
    {
      icon: Users,
      title: "Collaborative delivery",
      description: "Transparent & outcome-driven",
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
              <Database className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">Data</span>
              <span className="text-slate-400">•</span>
              <BarChart3 className="w-6 h-6 text-sky-600" />
              <span className="text-slate-600 text-sm font-medium">
                Analytics
              </span>
              <span className="text-slate-400">•</span>
              <Brain className="w-6 h-6 text-emerald-600" />
              <span className="text-slate-600 text-sm font-medium">
                AI Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              Transform Data Into Intelligence.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Turn Intelligence Into Growth
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              At AJAB Tech, we help organizations unlock the true potential of
              their data through advanced analytics, intelligent automation, and
              enterprise-ready AI solutions. Whether you're just beginning your
              data journey or scaling AI across your business, we provide the
              strategy, tools, and expertise to drive impactful outcomes.
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
              From raw data to predictive insights—
              <span className="text-blue-600">
                {" "}
                we power decisions that move your business forward
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
                          ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              Why Work With <span className="text-blue-600">AJAB Tech?</span>
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
            Ready to Transform Your Data Into Intelligence?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Let's discuss how we can help you unlock the full potential of your
            data and drive meaningful business outcomes.
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

export default DataAnalyticsAIPage;
