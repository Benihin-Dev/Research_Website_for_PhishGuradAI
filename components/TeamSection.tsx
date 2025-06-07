"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Mail } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "F.A.M. Rimsan",
      id: "ICT/20/918",
      specialization: "Network Technology",
      department: "ICT Department",
      image: "/images/Rimsan.jpeg",
    },
    {
      name: "S.I.M. Rismi",
      id: "ICT/20/919",
      specialization: "Network Technology",
      department: "ICT Department",
      image: "/images/Rismi.jpeg",
    },
    {
      name: "Mahendra Pennikin",
      id: "ICT/20/964",
      specialization: "Software Technology",
      department: "ICT Department",
      image: "/images/Pennikin.jpg",
    },
  ];

  const supervisors = [
    {
      name: "Dr. P.L.M. Prabhani",
      title: "Academic Supervisor",
      department: "Department of Information Communication Technology",
      faculty: "Faculty of Technology",
      university: "University of Sri Jayewardenepura",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzOOoQ3zgO7V1BiMILa9vXj2sRhVMbtWCSA&s",
    },
    {
      name: "Mrs. Sankani Heenkenda",
      title: "Academic Co-Supervisor",
      department: "Department of Information Communication Technology",
      faculty: "Faculty of Technology",
      university: "University of Sri Jayewardenepura",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrYL5zsBNwxWPSxocLFTrxa4AMI1oM_Qa3A&s",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="  w-20 mx-auto border-b  h-2 mb-20 border-gray-500"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Group 46 from the Faculty of Technology at University of Sri
            Jayewardenepura, dedicated to advancing cybersecurity through
            innovative AI solutions.
          </p>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl mb-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            AI-BASED ENSEMBLE METHODS FOR DETECTING PHISHING ATTACKS IN
            REAL-TIME
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            A Final Year Research Project by Group 46
          </p>
          <div className="  w-full flex items-center justify-center pb-8">
            <img
              src="https://science.sjp.ac.lk/sports/wp-content/uploads/sites/42/2017/03/cropped-University-of-Sri-Jayewardenepura-Logo.png"
              className=" mx-auto w-32 aspect-square object-fill"
              alt=""
            />
          </div>
          <div className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full">
            <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">
              Faculty of Technology • University of Sri Jayewardenepura
            </span>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Research Team Members
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4    rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className=" object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">{member.id}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.specialization}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {member.department}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supervisors */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Academic Supervisors
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={supervisor.image}
                      alt={supervisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {supervisor.name}
                  </h4>
                  <p className="text-blue-600 font-semibold text-lg mb-3">
                    {supervisor.title}
                  </p>
                  <div className="space-y-1 text-gray-600">
                    <p className="text-sm">{supervisor.department}</p>
                    <p className="text-sm">{supervisor.faculty}</p>
                    <p className="text-sm font-medium">
                      {supervisor.university}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 p-8 md:p-12 rounded-2xl text-white text-center"
        >
          <Mail className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-blue-100 mb-6">
            Interested in our research or have questions about PhishGuardAI?
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-blue-100 font-bold">Project Group: </span>
              <span className=" ">Group 46</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-blue-100 font-bold">University: </span>
              <span className="">University of Sri Jayewardenepura</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
