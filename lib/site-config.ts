export const siteConfig = {
  name: "AJAB Tech",
  domain: "www.ajabtech.com",
  tagline: "Your Gateway to the Middle East",
  description:
    "Empowering Your Business Through Technology - Leading IT consulting and services company in Saudi Arabia",

  // Contact Information
  contact: {
    phone: "+966-50-123-4567",
    whatsapp: "966501234567",
    email: "info@ajabtech.com",
    address: "King Fahd Road, Riyadh 12345, Saudi Arabia",
    coordinates: { lat: 24.7136, lng: 46.6753 },
  },

  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/ajabtech",
    twitter: "https://twitter.com/ajabtech",
    facebook: "https://facebook.com/ajabtech",
  },

  // Hero Slider Content
  heroSlides: [
    {
      id: 1,
      image: "/slide1.webp",
      tagline: "Your Gateway to the Middle East",
      subtitle: "Empowering businesses through innovative IT solutions",
      cta: "Explore Services",
    },
    {
      id: 2,
      image: "/slide2.webp",
      tagline: "Empowering Your Business Through Technology",
      subtitle: "Comprehensive IT consulting and managed services",
      cta: "Get Started",
    },
    {
      id: 3,
      image: "/slide3.webp",
      tagline: "Innovation Meets Excellence",
      subtitle: "Transforming businesses with cutting-edge technology",
      cta: "Learn More",
    },
    {
      id: 4,
      image: "/slide4.jpg",
      tagline: "Innovation Meets Excellence",
      subtitle: "Transforming businesses with cutting-edge technology",
      cta: "Learn More",
    },
    {
      id: 5,
      image: "/slide5.jpg",
      tagline: "Innovation Meets Excellence",
      subtitle: "Transforming businesses with cutting-edge technology",
      cta: "Learn More",
    },
  ],

  // Services
  services: [
    {
      id: "managed-it",
      title: "Managed IT Services",
      subtitle: "Complete IT infrastructure management",
      icon: "Server",
      description:
        "Comprehensive IT infrastructure management and support services to keep your business running smoothly. Our proactive approach ensures minimal downtime and maximum productivity.",
      benefits: [
        "24/7 monitoring and support",
        "Proactive maintenance",
        "Cost-effective solutions",
        "Scalable infrastructure",
      ],
    },
    {
      id: "consulting",
      title: "IT Consulting & Strategy",
      subtitle: "Strategic technology planning",
      icon: "Lightbulb",
      description:
        "Expert guidance to align your technology investments with business objectives. We help you make informed decisions about your IT infrastructure and digital transformation journey.",
      benefits: [
        "Strategic IT planning",
        "Technology roadmaps",
        "Digital transformation",
        "ROI optimization",
      ],
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      subtitle: "Public, Private, and Hybrid Cloud",
      icon: "Cloud",
      description:
        "Comprehensive cloud services including migration, management, and optimization across public, private, and hybrid cloud environments.",
      benefits: [
        "Cloud migration services",
        "Multi-cloud management",
        "Cost optimization",
        "Enhanced security",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Compliance",
      subtitle: "Comprehensive security solutions",
      icon: "Shield",
      description:
        "Advanced cybersecurity solutions to protect your business from evolving threats while ensuring compliance with industry regulations.",
      benefits: [
        "Threat detection & response",
        "Compliance management",
        "Security assessments",
        "Employee training",
      ],
    },
    {
      id: "network-infrastructure",
      title: "Network Design & Infrastructure",
      subtitle: "Robust network solutions",
      icon: "Network",
      description:
        "Design and implementation of robust network infrastructure that supports your business growth and ensures reliable connectivity.",
      benefits: [
        "Network design & planning",
        "Infrastructure deployment",
        "Performance optimization",
        "Redundancy & reliability",
      ],
    },
    {
      id: "software-development",
      title: "Custom Software Development",
      subtitle: "Tailored software solutions",
      icon: "Code",
      description:
        "Custom software development and system integration services to meet your unique business requirements and streamline operations.",
      benefits: [
        "Custom application development",
        "System integration",
        "API development",
        "Legacy system modernization",
      ],
    },
  ],

  // Industries
  industries: [
    {
      id: "financial",
      title: "Financial Services",
      icon: "Building2",
      description:
        "Secure, compliant IT solutions for banks, insurance companies, and financial institutions.",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "Heart",
      description:
        "HIPAA-compliant technology solutions for hospitals, clinics, and healthcare providers.",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: "Factory",
      description:
        "Industrial IoT, automation, and ERP solutions for manufacturing companies.",
    },
    {
      id: "government",
      title: "Government",
      icon: "Building",
      description:
        "Secure, scalable IT infrastructure for government agencies and public sector organizations.",
    },
    {
      id: "retail",
      title: "Retail & eCommerce",
      icon: "ShoppingCart",
      description:
        "Digital transformation solutions for retail businesses and e-commerce platforms.",
    },
    {
      id: "education",
      title: "Education",
      icon: "GraduationCap",
      description:
        "Educational technology solutions for schools, universities, and training institutions.",
    },
    {
      id: "legal",
      title: "Legal & Professional Services",
      icon: "Scale",
      description:
        "Secure document management and collaboration tools for law firms and professional services.",
    },
  ],

  // Partners
  partners: {
    cloud: [
      {
        name: "AWS",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://aws.amazon.com",
      },
      {
        name: "Microsoft Azure",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://azure.microsoft.com",
      },
      {
        name: "Google Cloud",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://cloud.google.com",
      },
    ],
    enterprise: [
      {
        name: "SAP",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://sap.com",
      },
      {
        name: "Oracle",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://oracle.com",
      },
      {
        name: "ServiceNow",
        logo: "/placeholder.svg?height=80&width=120",
        url: "https://servicenow.com",
      },
    ],
    security: [
      {
        name: "Broadbits",
        logo: "/placeholder.svg?height=80&width=120",
        url: "#",
      },
      {
        name: "SAMCOFMS",
        logo: "/placeholder.svg?height=80&width=120",
        url: "#",
      },
    ],
  },

  // Why Choose AJAB
  whyChooseUs: [
    {
      icon: "Award",
      title: "Proven Expertise",
      description:
        "Years of experience delivering successful IT solutions across various industries.",
    },
    {
      icon: "Shield",
      title: "Security-First",
      description:
        "We prioritize security in every solution we design and implement.",
    },
    {
      icon: "Users",
      title: "Tailored Engagements",
      description:
        "Customized solutions that fit your specific business needs and requirements.",
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description:
        "Future-proof technology solutions that grow with your business.",
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description:
        "Round-the-clock support to ensure your systems are always running optimally.",
    },
  ],

  // Company Information
  company: {
    mission:
      "To empower businesses in the Middle East with innovative technology solutions that drive growth, efficiency, and competitive advantage.",
    vision:
      "To be the leading IT consulting and services partner in the Middle East, known for excellence, innovation, and customer success.",
    values: [
      "Excellence in everything we do",
      "Innovation through technology",
      "Customer-centric approach",
      "Integrity and transparency",
      "Continuous learning and improvement",
    ],
    founded: "2015",
    employees: "50+",
    clients: "200+",

    // New image configurations
    images: {
      about: {
        main: "/about.jpg", // Main about section image
        alt: "AJAB Tech professional team working on innovative solutions",
        fallback: "/images/about/office-building.jpg", // Fallback image
      },
      office: {
        exterior: "/images/office/building-exterior.jpg",
        interior: "/images/office/modern-workspace.jpg",
        meeting: "/images/office/team-meeting.jpg",
        alt: "AJAB Tech modern office space",
      },
      team: {
        leadership: "/images/team/leadership-team.jpg",
        developers: "/images/team/development-team.jpg",
        consultants: "/images/team/consulting-team.jpg",
        alt: "Professional team members at AJAB Tech",
      },
    },

    // Enhanced company stats
    achievements: [
      {
        metric: "99.9%",
        label: "Uptime Guarantee",
        description: "Reliable service delivery",
      },
      {
        metric: "24/7",
        label: "Support Available",
        description: "Round-the-clock assistance",
      },
      {
        metric: "15+",
        label: "Industries Served",
        description: "Diverse sector expertise",
      },
    ],

    // Company highlights for about section
    highlights: [
      {
        title: "Industry Expertise",
        description:
          "Deep knowledge across multiple sectors in the Middle East market",
        icon: "Building2",
      },
      {
        title: "Proven Track Record",
        description:
          "Successfully delivered 500+ projects with measurable business impact",
        icon: "Award",
      },
      {
        title: "Innovation Focus",
        description:
          "Cutting-edge solutions using latest technologies and methodologies",
        icon: "Lightbulb",
      },
    ],
  },

  // Team Members
  team: [
    {
      name: "Ahmed Al-Rashid",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in IT consulting and digital transformation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Technology expert specializing in cloud architecture and cybersecurity.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mohammed Al-Fahad",
      position: "VP of Operations",
      bio: "Operations specialist ensuring seamless service delivery and client satisfaction.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Industries", href: "/industries" },
      { name: "Partners", href: "/partners" },
      { name: "Why AJAB", href: "/why-ajab" },
      { name: "Contact", href: "/contact" },
    ],
  },

  // Multilingual Support
  languages: {
    en: {
      name: "English",
      code: "en",
      dir: "ltr",
    },
    ar: {
      name: "العربية",
      code: "ar",
      dir: "rtl",
    },
  },
};

export type SiteConfig = typeof siteConfig;
