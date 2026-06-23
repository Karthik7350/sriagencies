"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Farm Consultation",
      description:
        "Expert guidance for farmers to improve crop planning, soil health, irrigation methods, and overall farm productivity.",
      icon: "🌾",
    },
    {
      title: "Garden Setup & Maintenance",
      description:
        "Complete assistance in designing, setting up, and maintaining home gardens, kitchen gardens, and agricultural plots.",
      icon: "🌱",
    },
    {
      title: "Organic Fertilizer Advisory",
      description:
        "Recommendations on eco-friendly and organic fertilizers to enhance soil fertility and promote sustainable farming practices.",
      icon: "♻️",
    },
    {
      title: "Organic Seed Supply",
      description:
        "High-quality certified organic seeds for vegetables, fruits, and crops to ensure healthy growth and better yield.",
      icon: "🌿",
    },
  ];

  // Animation settings
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
            Sustainable farming solutions for a healthier future
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}