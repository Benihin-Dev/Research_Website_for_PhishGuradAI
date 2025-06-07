"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Target } from "lucide-react";

export default function IdeaSection() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Intelligent models that detect phishing patterns by learning from large datasets",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description:
        "Instant URL scanning and threat detection with millisecond response times",
    },
    {
      icon: Shield,
      title: "Ensemble Methods",
      description:
        "Multiple AI models working together for superior accuracy and reliability",
    },
    {
      icon: Target,
      title: "Precision Detection",
      description:
        "High accuracy rates with minimal false positives for better user experience",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">AI-Powered</span> Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Harnessing the power of artificial intelligence and machine learning
            to create an intelligent defense system against sophisticated
            phishing attacks.
          </p>
        </motion.div>

        {/* Main Idea Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why AI is the Answer
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Traditional rule-based security systems cannot keep pace with
                  the rapidly evolving landscape of cyber threats. AI offers
                  unique advantages that make it the ideal solution for modern
                  cybersecurity challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Adaptive Learning:</strong> AI systems
                      continuously learn from new threats and adapt their
                      detection mechanisms
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Pattern Recognition:</strong> Machine learning can
                      identify subtle patterns that humans might miss
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Scalability:</strong> AI can analyze millions of
                      URLs simultaneously without performance degradation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                // animate={{ rotate: 360 }}
                // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Brain className="h-32 w-32 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <Zap className="h-8 w-8 text-yellow-800" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h4>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
