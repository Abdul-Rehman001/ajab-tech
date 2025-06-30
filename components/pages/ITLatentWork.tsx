import React from "react";
import {
  Users,
  GraduationCap,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Settings,
  Target,
  Award,
  Zap,
  Building,
  BookOpen,
  UserCheck,
} from "lucide-react";

const ITTalentWorkforce = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "IT Training Programs",
      subtitle: "Tailored, Hands-on Digital Skills Development",
      description:
        "We deliver specialized training to upskill employees and prepare them for real-world digital transformation challenges across multiple technology domains.",
      keyAreas: [
        "Cloud Administration (Azure, AWS, GCP)",
        "DevOps & System Engineering (Linux, Kubernetes, CI/CD)",
        "Cybersecurity & Governance (SOC, NCA controls, PDPL)",
        "Data, AI & Analytics (Power BI, Python, ML, Azure AI)",
        "ERP/CRM Platforms (Dynamics 365, SAP, Salesforce)",
        "Software Development (Java, .NET, React, API)",
      ],
      deliveryModes: [
        "Classroom, Virtual, or Hybrid",
        "Custom corporate bootcamps",
        "Arabic/English bilingual programs",
        "Certification exam preparation (Microsoft, AWS, CompTIA, etc.)",
      ],
      gradient: "from-blue-600 to-sky-600",
      bgGradient: "from-blue-50 to-sky-50",
    },
    {
      icon: Users,
      title: "Technical Staffing & Outsourcing",
      subtitle: "Qualified IT Professionals & Turnkey Solutions",
      description:
        "We provide qualified, pre-vetted IT professionals to augment your team or deliver turnkey solutions—on-site or remote, with full Saudization support.",
      keyAreas: [
        "Contract IT staffing & outsourcing",
        "Project-based team deployment",
        "Saudi national placement support (Saudization)",
        "Managed services & technical resource pools",
        "Nitaqat and local labor compliance support",
      ],
      deliveryModes: [
        "Cloud Engineers, DevOps, Data Analysts",
        "Cybersecurity Specialists & SOC Analysts",
        "ERP/CRM Consultants",
        "AI/ML Engineers & Software Developers",
        "IT Support, QA/Testers, and more",
      ],
      gradient: "from-blue-600 to-teal-600",
      bgGradient: "from-blue-50 to-teal-50",
    },
  ];

  const vision2030Objectives = [
    "Developing a digitally skilled Saudi workforce",
    "Empowering youth through tech and AI training",
    "Enabling Saudization in the private tech sector",
    "Supporting giga-projects (NEOM, The Line, Diriyah) with specialized IT talent",
    "Partnering with local universities, NITAs, and government reskilling programs",
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Public & Private Sector Experience",
      description: "experienced in upskilling diverse IT teams across sectors",
    },
    {
      icon: Globe,
      title: "Comprehensive Talent Pool",
      description: "access to Saudi and international tech talent networks",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "vendor-certified trainers and deployment-ready consultants",
    },
    {
      icon: BookOpen,
      title: "Bilingual Support",
      description: "Arabic/English training content and comprehensive support",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "workforce analytics and training ROI tracking available",
    },
  ];

  const techAreas = [
    { icon: Cloud, name: "Cloud Technologies", color: "text-blue-600" },
    { icon: Shield, name: "Cybersecurity", color: "text-red-600" },
    { icon: Database, name: "Data & Analytics", color: "text-purple-600" },
    { icon: Code, name: "Software Development", color: "text-sky-600" },
    { icon: Settings, name: "DevOps & Engineering", color: "text-orange-600" },
    { icon: Building, name: "ERP/CRM Systems", color: "text-indigo-600" },
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
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            zIndex: 0,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Upskill
              </span>
              <span className="text-slate-400">•</span>
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-slate-600 text-sm font-medium">
                Empower
              </span>
              <span className="text-slate-400">•</span>
              <Target className="w-6 h-6 text-purple-600" />
              <span className="text-slate-600 text-sm font-medium">
                Deliver
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 leading-tight">
              IT Talent & Workforce Localization
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent font-normal">
                Upskill. Empower. Deliver.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              Saudization in IT functions and building capabilities through
              internal reskilling and strategic partnerships. We help
              organizations build and scale a future-ready digital workforce
              through specialized training programs and IT staffing services.
            </p>

            <p className="text-base text-slate-500 max-w-3xl mx-auto mb-8 font-light">
              Our offerings are designed to close skill gaps, support
              Saudization, and align with the Kingdom's Vision 2030 goals of
              developing national talent and driving innovation across public
              and private sectors.
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

      {/* Technology Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4">
              Technology <span className="text-blue-600">Expertise Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techAreas.map((area, index) => (
              <div
                key={area.name}
                className="text-center p-4 bg-slate-50 rounded-sm hover:bg-slate-100 transition-colors duration-300"
              >
                <area.icon className={`w-8 h-8 ${area.color} mx-auto mb-3`} />
                <h3 className="text-sm font-medium text-slate-900">
                  {area.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Our Offerings—
              <span className="text-blue-600">
                {" "}
                comprehensive workforce development
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

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        {index === 0
                          ? "Key Training Areas:"
                          : "Staffing Services:"}
                      </p>
                      <div className="space-y-3">
                        {service.keyAreas.map((area, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 font-light">
                              {area}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-3">
                        {index === 0 ? "Delivery Modes:" : "Roles We Cover:"}
                      </p>
                      <div className="space-y-3">
                        {service.deliveryModes.map((mode, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 font-light">
                              {mode}
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
                          ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Vision 2030 Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Supporting <span className="text-sky-600">Vision 2030</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              Our training and staffing solutions directly support national
              transformation objectives under Vision 2030.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vision2030Objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-sky-50 p-6 rounded-sm border border-sky-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-sky-600" />
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed text-sm">
                    {objective}
                  </p>
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
            Ready to Build Your Future-Ready IT Workforce?
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Whether you're growing your in-house capabilities or need certified
            professionals for a critical IT project—we provide the people and
            the knowledge to power your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 text-sm font-medium rounded-sm hover:bg-blue-50 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-white text-white text-sm font-medium rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View Training Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITTalentWorkforce;
