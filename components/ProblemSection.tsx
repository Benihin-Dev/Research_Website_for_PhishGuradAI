"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Users, DollarSign } from "lucide-react";

export default function ProblemSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: "3.4 Billion",
      label: "Phishing emails sent daily",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      value: "65%",
      label: "Increase in phishing attacks (2023)",
      color: "text-orange-600",
    },
    {
      icon: Users,
      value: "1 in 4",
      label: "People fall victim to phishing",
      color: "text-yellow-600",
    },
    {
      icon: DollarSign,
      value: "$4.91M",
      label: "Average cost of a data breach",
      color: "text-green-600",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Growing <span className="text-red-600">Threat</span> of Phishing
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Cybercriminals are becoming increasingly sophisticated, using
            advanced techniques to deceive users and steal sensitive
            information. The traditional security measures are no longer
            sufficient to combat these evolving threats.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Problem Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl sha dow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why We Need a New Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Evolving Tactics:</strong> Phishers constantly adapt
                    their methods to bypass traditional security filters
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Human Error:</strong> Even security-aware users can
                    fall victim to sophisticated phishing attempts
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Scale of Attack:</strong> Millions of new phishing
                    websites are created daily, making manual detection
                    impossible
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Financial Impact:</strong> Organizations lose
                    billions annually due to successful phishing attacks
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                // animate={{ rotate: [0, 5, -5, 0] }}
                // transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
