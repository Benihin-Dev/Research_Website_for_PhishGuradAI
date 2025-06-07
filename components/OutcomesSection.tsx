"use client";

import { motion } from "framer-motion";
import { Target, Zap, Shield, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function OutcomesSection() {
  const metrics = [
    {
      label: "Overall Accuracy",
      value: 89.2,
      icon: Target,
      color: "text-green-600",
    },
    {
      label: "Precision",
      value: 92.1,
      icon: CheckCircle,
      color: "text-blue-600",
    },
    { label: "Recall", value: 85.7, icon: Shield, color: "text-purple-600" },
    { label: "F1-Score", value: 88.8, icon: Zap, color: "text-orange-600" },
  ];

  const features = [
    { name: "URL Length", importance: 92 },
    { name: "Domain Age", importance: 88 },
    { name: "HTTPS Usage", importance: 85 },
    { name: "Subdomain Count", importance: 82 },
    { name: "Special Characters", importance: 78 },
    { name: "IP Address Usage", importance: 75 },
  ];

  const modelAttributes = [
    {
      title: "Real-time Processing",
      description:
        "Average response time under 500ms for instant threat detection",
      icon: Zap,
    },
    {
      title: "High Accuracy",
      description: "89.2% accuracy rate with minimal false positives",
      icon: Target,
    },
    {
      title: "Scalable Architecture",
      description: "Can handle thousands of concurrent URL analysis requests",
      icon: Shield,
    },
    {
      title: "Adaptive Learning",
      description: "Continuously improves with new phishing patterns and data",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="outcomes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Model <span className="text-blue-600">Performance</span> & Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our ensemble machine learning model achieves exceptional performance
            metrics, demonstrating superior accuracy and reliability in
            real-world phishing detection scenarios.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <metric.icon
                className={`h-12 w-12 ${metric.color} mx-auto mb-4`}
              />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}%
              </h3>
              <p className="text-gray-600 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Model Attributes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Model Attributes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modelAttributes.map((attribute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <attribute.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {attribute.title}
                  </h4>
                  <p className="text-gray-600">{attribute.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Importance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Feature Importance Analysis
              </h3>
              <p className="text-gray-600 mb-8">
                Our analysis reveals the most critical URL features that
                contribute to accurate phishing detection. These insights help
                improve model interpretability and performance.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {feature.name}
                      </span>
                      <span className="text-blue-600 font-bold">
                        {feature.importance}%
                      </span>
                    </div>
                    <Progress value={feature.importance} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex flex-col items-center justify-center text-white mb-6">
                  <Target className="h-16 w-16 mb-4" />
                  <div className="text-4xl font-bold">89.2%</div>
                  <div className="text-lg">Overall Accuracy</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Training Dataset
                  </h4>
                  <p className="text-gray-600">100,000+ URLs analyzed</p>
                  <p className="text-gray-600">14 features extracted</p>
                  <p className="text-gray-600">4 algorithms ensemble</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
