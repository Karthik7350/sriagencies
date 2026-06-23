
export default function why() {
  const highlights = [
    {
      title: "10+ Years Experience",
      desc: "Serving farmers with trusted agricultural solutions and expert support.",
      icon: "🌱",
    },
    {
      title: "1000+ Happy Farmers",
      desc: "Trusted by farmers across Tamil Nadu and throughout India.",
      icon: "👨‍🌾",
    },
    {
      title: "Authorized Stanes Dealer",
      desc: "Providing genuine Stanes products with assured quality.",
      icon: "🏆",
    },
    {
      title: "India-Wide Delivery",
      desc: "Reliable parcel services ensure products reach farmers anywhere in India.",
      icon: "🚚",
    },
  ];

  return (
    <section
      id="why"
      className="bg-gradient-to-b from-green-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            About SriAgencies
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Empowering Farmers With
            <span className="text-green-700"> Trusted Agricultural Solutions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            SriAgencies, based in Alanthurai, Coimbatore, has been supporting
            farmers for over 10 years with premium agricultural products,
            expert farming guidance, and dependable service. As an Authorized
            Stanes Dealer, we deliver genuine products and practical solutions
            that help farmers achieve healthier crops and better yields.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="mb-3 text-xl font-bold text-green-700">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          <div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Why Farmers Choose SriAgencies
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✅ Authorized Dealer for Stanes Agricultural Products</li>
              <li>✅ Organic Fertilizers & Bio Fertilizers</li>
              <li>✅ Organic Seeds & Plant Growth Promoters</li>
              <li>✅ Crop Protection & Pesticide Solutions</li>
              <li>✅ Drip Irrigation Products</li>
              <li>✅ Agricultural Tools & Farming Essentials</li>
              <li>✅ Expert Farming Consultation & Technical Guidance</li>
              <li>✅ Genuine Products at Competitive Prices</li>
              <li>✅ Fast and Reliable Delivery Across India</li>
            </ul>
          </div>

          {/* Consultation Highlight */}
          <div className="rounded-3xl bg-green-700 p-10 text-white shadow-xl">
            <div className="text-6xl">👨‍🌾</div>

            <h3 className="mt-4 text-3xl font-bold">
              Free Farming Consultation
            </h3>

            <p className="mt-4 text-lg leading-8 text-green-50">
              Our agricultural experts provide personalized farming guidance,
              crop nutrition recommendations, pest management solutions, and
              cultivation support to help farmers improve productivity and
              profitability.
            </p>

            <div className="mt-6 rounded-xl bg-white/10 p-4">
              🌾 Expert Advice • Crop Care • Soil Nutrition • Yield Improvement
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}