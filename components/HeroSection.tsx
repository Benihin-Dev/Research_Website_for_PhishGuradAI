"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { FaShieldAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center space-x-8 mb-8"
        ></motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          <span className="text-blue-600">PhishGuard</span>AI
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
        >
          Protect Yourself from Phishing Attacks
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8"
        >
          Our advanced AI-powered ensemble system helps you identify and avoid
          phishing websites with real-time analysis and cutting-edge machine
          learning technology.
        </motion.p>

        {/* University Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full mb-12"
        >
          <span className="text-blue-800 font-medium">
            A Research Project by Group 46 • Faculty of Technology • University
            of Sri Jayewardenepura
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="https://phishguardai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              Try PhishGuardAI Now
            </Button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1_8uS_KRgXu1HWWYutf1YkA0ax5QKOokz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View Research Paper
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-500 mb-4">
            Discover why and how we developed this AI solution
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-blue-600 cursor-pointer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
