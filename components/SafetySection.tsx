"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SafetySection() {
  const safetyTips = [
    {
      icon: Eye,
      title: "Always Verify URLs",
      description: "Check the website address carefully before entering sensitive information"
    },
    {
      icon: Lock,
      title: "Look for HTTPS",
      description: "Ensure secure connections with SSL certificates for financial transactions"
    },
    {
      icon: AlertTriangle,
      title: "Be Suspicious of Urgent Messages",
      description: "Phishers often create false urgency to rush your decision-making"
    },
    {
      icon: Shield,
      title: "Use PhishGuardAI",
      description: "Let our AI analyze suspicious links before you click on them"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay <span className="text-yellow-300">Safe</span> from Phishers
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Protect yourself and your organization with PhishGuardAI's advanced threat detection 
            and follow these essential security practices.
          </p>
        </motion.div>

        {/* Safety Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {safetyTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <tip.icon className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
              <p className="text-blue-100">{tip.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Shield className="h-20 w-20 text-yellow-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">
              Don't Let Phishers Catch You Off Guard
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Use PhishGuardAI's advanced AI-powered detection system to verify suspicious links 
              and protect yourself from cyber threats. Our ensemble machine learning model provides 
              real-time analysis with 96.2% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4">
                Try PhishGuardAI Free
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Learn More About Security
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-yellow-300 mb-2">96.2%</div>
            <p className="text-blue-100">Detection Accuracy</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-300 mb-2">&lt;500ms</div>
            <p className="text-blue-100">Response Time</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
            <p className="text-blue-100">Protection Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}