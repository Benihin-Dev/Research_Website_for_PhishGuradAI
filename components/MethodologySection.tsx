"use client";

import { motion } from "framer-motion";
import { GitBranch, Cpu, Database, TestTube } from "lucide-react";

export default function MethodologySection() {
  const methodologySteps = [
    {
      icon: Database,
      title: "Data Collection & Preprocessing",
      description:
        "Gathered diverse datasets of phishing and legitimate URLs with comprehensive feature extraction",
      details: [
        "100,000+ URL samples",
        "15 extracted features",
        "Balanced dataset creation",
        "Data cleaning & normalization",
      ],
    },
    {
      icon: GitBranch,
      title: "Ensemble Model Design",
      description:
        "Implemented multiple machine learning algorithms with weighted soft voting mechanism",
      details: [
        "Decision Tree Classifier",
        "Random Forest",
        "Gradient Boosting",
        "Naïve Bayes",
        "Weighted Soft Voting",
      ],
    },
    {
      icon: Cpu,
      title: "Model Training & Optimization",
      description:
        "Systematic training and hyperparameter tuning for optimal performance",
      details: [
        "Cross-validation testing",
        "Hyperparameter optimization",
        "Feature importance analysis",
        "Performance evaluation",
      ],
    },
    {
      icon: TestTube,
      title: "Testing & Validation",
      description:
        "Comprehensive testing with real-world scenarios and performance benchmarking",
      details: [
        "Real-time testing",
        "Accuracy validation",
        "False positive analysis",
        "Performance benchmarking",
      ],
    },
  ];

  const algorithms = [
    { name: "Decision Tree", accuracy: "92.3%", weight: "0.25" },
    { name: "Random Forest", accuracy: "94.7%", weight: "0.30" },
    { name: "Gradient Boosting", accuracy: "93.8%", weight: "0.25" },
    { name: "Naïve Bayes", accuracy: "89.2%", weight: "0.20" },
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A systematic approach combining multiple machine learning algorithms
            in an ensemble framework for superior phishing detection accuracy
            and reliability.
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ensemble Architecture */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ensemble Architecture Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {algorithms.map((algorithm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {algorithm.name}
                </h4>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">
                    {algorithm.accuracy}
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                  <div className="text-lg font-semibold text-gray-800">
                    Weight: {algorithm.weight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg">
              <span className="text-lg font-bold">
                Ensemble Accuracy: 96.2%
              </span>
            </div>
          </div>
        </motion.div> */}

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detection Process Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900">URL Input</h4>
              <p className="text-sm text-gray-600">User submits URL</p>
            </div>
            <div className="hidden md:block text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900">
                Feature Extraction
              </h4>
              <p className="text-sm text-gray-600">30 features extracted</p>
            </div>
            <div className="hidden md:block text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900">Ensemble Analysis</h4>
              <p className="text-sm text-gray-600">4 algorithms process</p>
            </div>
            <div className="hidden md:block text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900">Result</h4>
              <p className="text-sm text-gray-600">Safe or Phishing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
