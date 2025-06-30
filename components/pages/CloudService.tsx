import React from "react";
import {
  Cloud,
  Shield,
  TrendingUp,
  Cpu,
  Brain,
  GitBranch,
  Rocket,
  Globe,
  Settings,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Layers,
  Lock,
  BarChart3,
} from "lucide-react";

const CloudServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy & Consulting",
      subtitle: "Strategic Foundation",
      description:
        "We help businesses define the right cloud strategy—choosing the right platform, architecture, and roadmap aligned with their digital goals.",
      features: [
        "Cloud readiness assessment and planning",
        "Platform selection (GCP, AWS, Azure)",
        "Architecture design and optimization",
        "Digital transformation roadmap",
        "ROI analysis and business case development",
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Settings,
      title: "Cloud Migration Services",
      subtitle: "Seamless Transition",
      description:
        "Seamless migration of applications, databases, and infrastructure from on-premises or legacy systems to GCP, AWS, Azure, or hybrid environments.",
      features: [
        "Application and database migration",
        "Infrastructure lift-and-shift",
        "Re-platforming and modernization",
        "Hybrid cloud integration",
        "Zero-downtime migration strategies",
      ],
      gradient: "from-sky-600 to-pink-600",
      bgGradient: "from-sky-50 to-pink-50",
    },
    {
      icon: Shield,
      title: "Cloud Security & Governance",
      subtitle: "Secure & Compliant",
      description:
        "We ensure your cloud environment is secure, compliant, and resilient—using industry best practices and tools for IAM, encryption, and threat monitoring.",
      features: [
        "Identity and Access Management (IAM)",
        "Data encryption and key management",
        "Compliance framework implementation",
        "Threat detection and monitoring",
        "Security audit and assessment",
      ],
      gradient: "froo-blue-600 to-teal-600",
      bgGradient: "froo-blue-50 to-teal-50",
    },
    {
      icon: TrendingUp,
      title: "Cloud Optimization & FinOps",
      subtitle: "Performance & Cost Efficiency",
      description:
        "Maximize the performance and cost-efficiency of your cloud infrastructure with automated monitoring, resource tuning, and financial operations (FinOps).",
      features: [
        "Cost optimization and rightsizing",
        "Performance monitoring and tuning",
        "Resource automation and scaling",
        "Financial operations (FinOps) implementation",
        "Cloud spend governance",
      ],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Brain,
      title: "AI/ML & Data Analytics on Cloud",
      subtitle: "Intelligent Insights",
      description:
        "Build intelligent applications with AI/ML services, and unlock data-driven insights using native analytics tools from AWS, Azure, and GCP.",
      features: [
        "Machine learning model development",
        "Data pipeline and analytics setup",
        "AI service integration",
        "Real-time data processing",
        "Predictive analytics solutions",
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      subtitle: "Accelerated Development",
      description:
        "Implement CI/CD pipelines, containerization (Kubernetes, Docker), and Infrastructure-as-Code (IaC) to accelerate your development lifecycle.",
      features: [
        "CI/CD pipeline implementation",
        "Kubernetes and container orchestration",
        "Infrastructure as Code (IaC)",
        "Automated testing and deployment",
        "Monitoring and observability",
      ],
      gradient: "from-violet-600 to-sky-600",
      bgGradient: "from-violet-50 to-sky-50",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Cloud Experts",
      description:
        "Our engineers hold top certifications across AWS, Azure, and GCP",
    },
    {
      icon: Layers,
      title: "Vendor-Neutral Approach",
      description:
        "We recommend the best-fit cloud solution—not the most marketed one",
    },
    {
      icon: Globe,
      title: "Global Delivery Model",
      description:
        "24/7 support and cloud managed services for agility and uptime",
    },
    {
      icon: Lock,
      title: "Scalable & Secure",
      description:
        "Designed to grow with your business while keeping operations safe",
    },
    {
      icon: Settings,
      title: "Multi-Cloud Expertise",
      description: "Architect strategies balancing workloads across platforms",
    },
  ];

  const cloudPlatforms = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "GCP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24 overflow-hidden">
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
            <div className="flex items-center justify-center gap-3 mb-8">
              <Cloud className="w-8 h-8 text-blue-600" />
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Cloud First Strategy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Digital Transformation
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 bg-clip-text text-transparent font-normal">
                at Scale
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
              Empowering businesses with{" "}
              <strong className="font-medium text-slate-700">
                GCP, AWS, Azure
              </strong>
              , and beyond. Whether you're starting your cloud journey,
              optimizing your environment, or scaling globally, our certified
              cloud experts transform, innovate, and lead with confidence.
            </p>

            {/* Cloud Platform Logos */}
            <div className="flex items-center justify-center gap-8 mb-12 opacity-60">
              {cloudPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="h-8 w-16 flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-slate-600">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Our Cloud Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              End-to-end cloud services built on the world's leading platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={service.title} className="group">
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 texo-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-600 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Cloud Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Multi-Cloud & Hybrid Cloud Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              We help enterprises architect multi-cloud strategies—balancing
              workloads across platforms for risk mitigation, performance, and
              compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <Layers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Multi-Cloud Strategy
              </h3>
              <p className="text-sm text-slate-600 font-light">
                Leverage the best of each cloud platform while avoiding vendor
                lock-in
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <GitBranch className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Hybrid Integration
              </h3>
              <p className="text-sm text-slate-600 font-light">
                Seamlessly connect on-premises infrastructure with cloud
                services
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-12 h-12 texo-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Risk Mitigation
              </h3>
              <p className="text-sm text-slate-600 font-light">
                Distribute workloads to minimize risk and ensure business
                continuity
              </p>
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
                className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Ready to Take Off?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
            Unlock the full potential of the cloud. Let's modernize your
            infrastructure, innovate with AI, and scale your business securely
            and smartly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Download Cloud Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;
