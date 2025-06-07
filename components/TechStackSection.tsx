"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, Globe, Shield, Zap } from "lucide-react";

export default function TechStackSection() {
  const frontendTechs = [
    { name: "HTML5", description: "Modern semantic markup" },
    { name: "CSS3", description: "Advanced styling and animations" },
    {
      name: "JavaScript - React Framework (NextJs)",
      description: "Interactive user experience",
    },
    {
      name: "TailwindCSS & Framer Motion",
      description: "Responsive framework with Animations",
    },
  ];

  const backendTechs = [
    { name: "Python", description: "Core ML implementation" },
    { name: "Scikit-learn", description: "Machine learning algorithms" },
    { name: "Pandas", description: "Data processing and analysis" },
    { name: "FastAPI", description: "RESTful API development" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Loading Optimization",
      description:
        "Optimized code and asset compression for lightning-fast performance",
    },
    {
      icon: Globe,
      title: "Cross-browser Compatibility",
      description: "Consistent experience across all modern web browsers",
    },
    {
      icon: Cpu,
      title: "Mobile-first Approach",
      description: "Designed for mobile devices with progressive enhancement",
    },
    {
      icon: Shield,
      title: "Accessibility Standards",
      description: "WCAG 2.1 compliant for inclusive user experience",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Technical</span> Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built with modern web technologies and best practices to ensure
            optimal performance, security, and user experience across all
            platforms.
          </p>
        </motion.div>

        {/* Technology Stacks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Frontend Technologies
              </h3>
            </div>
            <div className="space-y-4">
              {frontendTechs.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{tech.name}</h4>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Backend & ML Stack
              </h3>
            </div>
            <div className="space-y-4">
              {backendTechs.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{tech.name}</h4>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Performance & Compatibility Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Performance Benchmarks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                &lt;1000ms
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Response Time
              </h4>
              <p className="text-gray-600">
                Average API response time for URL analysis
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Uptime
              </h4>
              <p className="text-gray-600">
                System availability and reliability
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Concurrent Users
              </h4>
              <p className="text-gray-600">
                Supported simultaneous analysis requests
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
