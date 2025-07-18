"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, ChevronRight } from "lucide-react";
import Image from "next/image";

const PartnersComponent = () => {
  const partnersData = [
    {
      category: "Data, Analytics & Artificial Intelligence",
      partners: [
        {
          name: "Databricks",
          logo: "https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667650343823",
        },
        {
          name: "Snowflake",
          logo: "https://cdn.brandfetch.io/idO0Y4-7Tt/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1749142472696",
        },
        {
          name: "Azure AI",
          logo: "https://cdn.brandfetch.io/idgS27aNck/theme/dark/id3I3zPTEl.svg?c=1bxid64Mup7aczewSAYMX&t=1676866243195",
        },
        {
          name: "Informatica",
          logo: "https://cdn.brandfetch.io/idrw6ovtUj/w/250/h/91/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1667838102407",
        },
        {
          name: "Microsoft Fabric",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "Tableau",
          logo: "https://cdn.brandfetch.io/id9sYMA_Im/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667560960373",
        },
        {
          name: "Google BigQuery",
          logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "Cloudare",
          logo: "https://www.cloudera.com/content/dam/www/marketing/images/logos/cloudera/cloudera-logo@2x.png",
        },
      ],
    },
    {
      category: "Digital Transformation at Scale with Cloud first Strategy",
      partners: [
        {
          name: "GCP",
          logo: "https://cdn.brandfetch.io/idraDGOvr8/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748275789099",
        },
        {
          name: "AWS",
          logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1691083841257",
        },
        {
          name: "Azure",
          logo: "https://cdn.brandfetch.io/idgS27aNck/theme/dark/id3I3zPTEl.svg?c=1bxid64Mup7aczewSAYMX&t=1676866243195",
        },
      ],
    },
    {
      category: "Robust Cyber Defense, Compliance & Governance Services",
      partners: [
        {
          name: "Sailpoint",
          logo: "https://cdn.brandfetch.io/idmTvFU2Bh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668013734658",
        },

        {
          name: "Barracuda",
          logo: "https://cdn.brandfetch.io/idNduLDSoG/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1750786633677",
        },

        {
          name: "Forcepoint",
          logo: "https://cdn.brandfetch.io/idwYIxvPsl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667665897836",
        },
        {
          name: "Kaspersky",
          logo: "https://cdn.brandfetch.io/idedmP5Q8M/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692821436989",
        },
      ],
    },
    {
      category: "Industry 4.0 Solutions Intelligent Process Automation",
      partners: [
        {
          name: "Honeywell",
          logo: "https://cdn.brandfetch.io/id9eVV7cJp/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1676044241884",
        },

        {
          name: "Siemens",
          logo: "https://cdn.brandfetch.io/idtwZZpkvB/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692871842342",
        },
        {
          name: "Rockwell Automation",
          logo: "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg",
        },
        {
          name: "Uipath",
          logo: "https://cdn.brandfetch.io/idEaAShmlC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667779183199",
        },
      ],
    },
    {
      category: "ERP Solutions",
      partners: [
        {
          name: "SAP",
          logo: "https://cdn.brandfetch.io/idQXbkxScC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1675843845700",
        },
        {
          name: "ORACLE",
          logo: "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667576597046",
        },
        {
          name: "Microsoft",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },
        {
          name: "INFOR",
          logo: "https://cdn.brandfetch.io/idsRd-6zJL/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562289876",
        },
      ],
    },
    {
      category: "CRM, & API Integration & Management, Business Intelligence",
      partners: [
        {
          name: "Salesforce",
          logo: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667559911541",
        },

        {
          name: "Microsoft CRM",
          logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        },

        {
          name: "Dell Boomi",
          logo: "https://cdn.brandfetch.io/id-pASSdTY/w/820/h/106/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1746739757578",
        },
        {
          name: "IBM WebMethods",
          logo: "https://store-images.s-microsoft.com/image/apps.38214.a02a684a-e90b-4292-bdd1-1b7ee9d2af8d.6dcd9984-dee8-4bb5-86c2-d6d76d33a801.89b0feaf-d2d6-4763-8de7-dbd21165420e",
        },
      ],
    },
    {
      category: "Information Management & ITSM Solutions",
      partners: [
        {
          name: "OpenText",
          logo: "https://cdn.brandfetch.io/idSy1EvYON/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1673587852892",
        },

        {
          name: "ServiceNow",
          logo: "https://cdn.brandfetch.io/idn6njzi5Z/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1677205843183",
        },

        {
          name: "ManageEngine",
          logo: "https://cdn.brandfetch.io/idHLy8nQ41/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1695289842818",
        },
      ],
    },
    {
      category: "QHSE Digital Solutions",
      partners: [
        {
          name: "Intelex",
          logo: "https://cdn.brandfetch.io/idrPMCHGit/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1750959327461",
        },

        {
          name: "SAP",
          logo: "https://cdn.brandfetch.io/idQXbkxScC/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1675843845700",
        },
        {
          name: "Oracle",
          logo: "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667576597046",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Radial Line Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle,
              rgba(14, 165, 233, 0.3) 0px,
              rgba(14, 165, 233, 0.3) 1px,
              transparent 1px,
              transparent 10px
            )
          `,
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-4 border border-blue-100">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
            Our Technology Partners
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              Offerings & Technologies
            </span>
            <span className="text-blue-600"> / Partners</span>
          </h2>
          <p className="text-lg bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent max-w-3xl mx-auto font-medium">
            "Love what you do, Love who you do it with and Love who you do it
            for."
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {partnersData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[120px]">
                {/* Category Column */}
                <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 flex items-center border-r border-blue-100">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-md font-semibold text-slate-900 leading-tight">
                        {section.category}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Partners Column */}
                <div className="lg:col-span-3 p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {section.partners.map((partner, partnerIndex) => (
                      <motion.div
                        key={partnerIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                      >
                        <div className="aspect-[2/1] bg-white rounded-lg border border-gray-200 p-1 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                          {/* Placeholder for logo */}
                          <div className="w-full h-full bg-slate-100 rounded-md flex items-center justify-center overflow-hidden">
                            <Image
                              src={partner.logo}
                              alt={partner.name || "Partner"}
                              width={100}
                              height={90}
                              className="object-contain drop-shadow-md"
                            />
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Partner with Industry Leaders?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Leverage our extensive network of technology partners to
              accelerate your digital transformation journey.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
              Get Started Today
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersComponent;
