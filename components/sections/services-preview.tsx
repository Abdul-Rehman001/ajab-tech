// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { siteConfig } from "@/lib/site-config";
// import {
//   Server,
//   Lightbulb,
//   Cloud,
//   Shield,
//   Network,
//   Code,
//   ArrowRight,
//   Zap,
//   CheckCircle,
// } from "lucide-react";

// const iconMap = {
//   Server,
//   Lightbulb,
//   Cloud,
//   Shield,
//   Network,
//   Code,
// };

// export function ServicesPreview() {
//   return (
//     <section className="relative py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-sky-50 overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
//         <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
//       </div>

//       {/* Geometric Pattern Overlay */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
//             linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "20px 20px",
//         }}
//       ></div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center px-3 py-1 rounded-md bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 text-xs font-medium mb-4 border border-sky-100">
//             <Zap className="w-3 h-3 mr-2 text-sky-600" />
//             Our Services
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
//             <span className="bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
//               Comprehensive IT Solutions
//             </span>
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
//             Tailored technology services designed to accelerate your business
//             growth
//           </p>
//         </motion.div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {siteConfig.services.map((service, index) => {
//             const IconComponent = iconMap[service.icon as keyof typeof iconMap];

//             // Create varied card sizes for bento grid effect
//             const cardVariants = [
//               "md:col-span-1 lg:col-span-1", // Standard
//               "md:col-span-2 lg:col-span-1", // Wide on medium
//               "md:col-span-1 lg:col-span-1", // Standard
//               "md:col-span-1 lg:col-span-2", // Wide on large
//               "md:col-span-1 lg:col-span-1", // Standard
//               "md:col-span-2 lg:col-span-1", // Wide on medium
//             ];

//             const isLargeCard = index === 3; // Fourth card is larger

//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`group ${cardVariants[index % cardVariants.length]}`}
//               >
//                 <div className="relative h-full bg-white backdrop-blur-sm rounded-xl border border-sky-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-sky-200 overflow-hidden">
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div
//                     className={`relative p-6 ${isLargeCard ? "lg:p-8" : ""}`}
//                   >
//                     {/* Icon Section */}
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="relative">
//                         <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                           <IconComponent className="w-6 h-6 text-sky-600" />
//                         </div>
//                       </div>
//                       <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all duration-300" />
//                     </div>

//                     {/* Content */}
//                     <div className="mb-4">
//                       <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-sky-900 transition-colors duration-300">
//                         {service.title}
//                       </h3>
//                       <p className="text-sky-600 text-sm font-medium mb-3">
//                         {service.subtitle}
//                       </p>
//                       <p className="text-slate-600 text-sm leading-relaxed font-light">
//                         {service.description}
//                       </p>
//                     </div>

//                     {/* Benefits List */}
//                     <div className="space-y-2">
//                       {service.benefits
//                         .slice(0, isLargeCard ? 4 : 3)
//                         .map((benefit, idx) => (
//                           <div
//                             key={idx}
//                             className="flex items-start group/item"
//                           >
//                             <CheckCircle className="w-3 h-3 text-sky-500 mr-2 mt-0.5 flex-shrink-0 group-hover/item:text-sky-600 transition-colors duration-200" />
//                             <span className="text-xs text-slate-600 font-light group-hover/item:text-slate-700 transition-colors duration-200">
//                               {benefit}
//                             </span>
//                           </div>
//                         ))}
//                     </div>

//                     {/* Bottom decoration */}
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-sky-100 shadow-sm">
//             <div className="text-center sm:text-left">
//               <h3 className="text-lg font-semibold text-slate-900 mb-1">
//                 Ready to Transform Your Business?
//               </h3>
//               <p className="text-sm text-slate-600 font-light">
//                 Discover how our comprehensive IT solutions can drive your
//                 success
//               </p>
//             </div>
//             <Button
//               asChild
//               className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md group"
//             >
//               <Link href="/services" className="inline-flex items-center">
//                 View All Services
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </Link>
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
