"use client";
import { motion } from "framer-motion";


export default function About() {
  const highlights = [
    { title: "10+ Years", desc: "Experience in Agriculture" },
    { title: "5000+", desc: "Happy Farmers" },
    { title: "100%", desc: "Genuine Products" },
    { title: "Expert", desc: "Crop Guidance" },
  ];

  const services = [
    "Fertilizers Supply",
    "High Quality Seeds",
    "Pesticides & Crop Protection",
    "Soil Health Guidance",
    "Farming Advisory Support",
  ];

  return (
    <section
      id="aboutus"
      className="bg-gradient-to-b from-green-50 to-white py-20 scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empowering Farmers With{" "}
            <span className="text-green-600">Trusted Agricultural Solutions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
        Sri Agri Agencies, based in Alanthurai, Coimbatore, has been supporting farmers for over 10+ years with trusted agricultural solutions and expert guidance.
As an Authorized Stanes Dealer, we provide only genuine and high-quality products that help improve crop yield and maintain healthy soil.
Along with agri products, we also specialize in garden setup and maintenance services, offering complete green space solutions with care, quality, and long-term support.
We are committed to helping farmers and garden owners grow healthier, greener, and more productive spaces.
          </p>
        </motion.div>
        {/* Highlights */}
        

        {/* Content Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="images/Garden.png"
              alt="Garden Setup"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Right: Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What We Provide
            </h2>

            <ul className="space-y-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
                  {service}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-600 leading-7">
              Our mission is to help farmers achieve better yield,
              improve soil fertility, and adopt modern sustainable farming practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}