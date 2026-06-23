"use client";
import { motion } from "framer-motion";

export default function WhyChooseus() {

  const highlights = [
    {
      title: "10+ Years Experience",
      desc: "Proven expertise in delivering reliable agricultural solutions.",
      icon: "🌱",
    },
    {
      title: "1000+ Farmers Trust Us",
      desc: "A growing community of farmers across Tamil Nadu & India.",
      icon: "👨‍🌾",
    },
    {
      title: "Authorized Stanes Partner",
      desc: "Certified access to genuine and high-quality products.",
      icon: "🏆",
    },
    {
      title: "Pan-India Delivery",
      desc: "Fast and reliable supply chain to every farming region.",
      icon: "🚚",
    },
  ];

  return (
    <section
      id="whychooseus"
      className="bg-gradient-to-b from-green-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-900">
            Trusted by Modern Farmers
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Reliable agricultural solutions built for productivity, sustainability, and long-term farm growth.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="mb-2 text-xl font-semibold text-green-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Why Farmers Choose Us
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Certified Stanes agricultural products</li>
              <li>✔ Organic & bio-fertilizer solutions</li>
              <li>✔ High-quality seeds & growth enhancers</li>
              <li>✔ Crop protection & pest management support</li>
              <li>✔ Modern drip irrigation solutions</li>
              <li>✔ Essential farming tools & inputs</li>
              <li>✔ Expert agricultural guidance</li>
              <li>✔ Fair pricing with assured quality</li>
              <li>✔ Reliable delivery across India</li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl bg-green-800 p-10 text-white shadow-xl">
            <div className="text-5xl">👨‍🌾</div>

            <h3 className="mt-5 text-3xl font-bold">
              Expert Farming Support
            </h3>

            <p className="mt-4 text-green-50 text-lg leading-relaxed">
              Personalized agricultural guidance to improve soil health, crop yield,
              and overall farm productivity with practical, field-tested solutions.
            </p>

            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm">
              🌾 Crop Care • Soil Health • Yield Optimization • Field Support
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}