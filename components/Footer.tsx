"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, GraduationCap } from "lucide-react";
import { FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PhishGuardAI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Advanced AI-powered phishing detection system developed by Group
              46 at University of Sri Jayewardenepura using ensemble machine
              learning methods.
            </p>
            <div className="flex items-center space-x-2 text-blue-400">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm">
                Research Project • Faculty of Technology
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Problem Statement
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Research
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#outcomes"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Outcomes
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Project Details</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">Group 46</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">Faculty of Technology</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">
                  University of Sri Jayewardenepura
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">
                  Final Year Project {currentYear}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} PhishGuardAI Research Project. Developed by Group
              46 for academic research purposes.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://phishguardai.vercel.app/"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm">Try PhishGuardAI</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Contact Team</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
