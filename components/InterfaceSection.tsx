"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InterfaceSection() {
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
            PhishGuardAI <span className="text-blue-600">Interface</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Experience our user-friendly interface designed for seamless
            phishing detection. Simply enter a URL and get instant results with
            detailed threat analysis.
          </p>
          <a
            href="https://phishguardai.vercel.app/"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Button className="bg-blue-600 hidden sm:flex mx-auto mt-5 hover:bg-blue-700 text-lg px-8 py-4">
              <ExternalLink className="h-5 w-5 mr-2" />
              Try PhishGuardAI Now
            </Button>
          </a>
        </motion.div>

        {/* Main Interface Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl shadow-xl mb-16"
        >
          <Button className="bg-blue-600 sm:hidden hover:bg-blue-700 text-lg px-8 py-4">
            <ExternalLink className="h-5 w-5 mr-2" />
            Try PhishGuardAI Now
          </Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative  ">
              <div className="  h-80 w-full ">
                <Image
                  src="images\interface2.png"
                  alt="Mahendra Pennikin"
                  fill
                  className=" w-full object-contain"
                />
              </div>
            </div>
            <div className="relative  ">
              <div className="  h-80   w-full ">
                <Image
                  src="images\interface.png"
                  alt="Mahendra Pennikin"
                  fill
                  className=" w-full h-52 object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Responsive Design Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Desktop Optimized
            </h3>
            <p className="text-gray-600">
              Full-featured interface with comprehensive analysis dashboard
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Tablet className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tablet Friendly
            </h3>
            <p className="text-gray-600">
              Responsive design that adapts to tablet screens seamlessly
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Mobile Ready
            </h3>
            <p className="text-gray-600">
              Quick URL checking on-the-go with mobile-optimized interface
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
