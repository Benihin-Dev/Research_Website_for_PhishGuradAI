"use client";

import { motion } from "framer-motion";
import { FileText, Search, Database, BarChart3 } from "lucide-react";

export default function ResearchSection() {
  const researchAreas = [
    {
      icon: Search,
      title: "Literature Review",
      description:
        "Comprehensive analysis of existing phishing detection methods and their limitations",
      papers: "30+ research papers analyzed",
    },
    {
      icon: Database,
      title: "Dataset Analysis",
      description:
        "Extensive study of phishing and legitimate website datasets for model training",
      papers: "100,000+ URLs analyzed",
    },
    {
      icon: BarChart3,
      title: "Algorithm Comparison",
      description:
        "Systematic evaluation of different machine learning algorithms for phishing detection",
      papers: "15+ algorithms tested",
    },
    {
      icon: FileText,
      title: "Feature Engineering",
      description:
        "Research on optimal URL features for accurate phishing website identification",
      papers: "15+ features evaluated",
    },
  ];

  const keyFindings = [
    "Ensemble methods significantly outperform individual algorithms",
    "URL structure analysis is more reliable than content-based features",
    "Real-time processing requires optimized feature extraction",
    "Weighted soft voting improves overall model accuracy by 12%",
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Research</span> Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Extensive research and analysis form the backbone of our AI-powered
            phishing detection system. We've studied the latest developments in
            cybersecurity and machine learning to build a robust solution.
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <area.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {area.papers}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Research Findings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Key Research Findings
              </h3>
              <div className="space-y-4">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{finding}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Research Methodology
                </h4>
                <p className="text-gray-700">
                  Our research follows a systematic approach combining
                  quantitative analysis of existing datasets with qualitative
                  evaluation of current detection methods.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Publication Status
                </h4>
                <p className="text-gray-700">
                  Research findings are being prepared for submission to
                  international cybersecurity conferences and peer-reviewed
                  journals.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
