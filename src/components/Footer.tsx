"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
      <section
      id="contact">
    <footer className="bg-[#0b2e13] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Company (Enhanced) */}
          <div>
            <h3 className="text-2xl font-bold">SriAgencies</h3>

            <p className="mt-4 text-sm text-green-100 leading-relaxed">
              SriAgencies is a trusted agricultural solutions provider based in
              Alanthurai, Coimbatore, committed to empowering farmers with
              high-quality inputs and modern farming practices.
            </p>

            <p className="mt-3 text-sm text-green-100 leading-relaxed">
              We specialize in organic fertilizers, crop protection products,
              garden setup support, and expert agricultural consultation.
            </p>

            <div className="mt-4 text-sm text-green-200">
              🌱 Supporting sustainable farming for a better tomorrow
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#whychooseus" className="hover:text-white">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact (Right Side) */}
          <div className="md:text-right md:justify-self-end">
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>

            <div className="space-y-2 text-green-100 text-sm">
              <p>📍 Alanthurai, Coimbatore</p>
              <p>📞 9791614629</p>
              <p>✉️ sriagencies2505@gmail.com </p>
            </div>
<div className="mt-6 flex gap-3 md:justify-end">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/BehindTalkies"
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-full border border-green-600 text-white hover:bg-green-600 hover:scale-110 transition-all duration-300"
  >
    <FaFacebookF className="text-lg" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/living_plants_24/"
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-full border border-green-600 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:scale-110 transition-all duration-300"
  >
    <FaInstagram className="text-lg" />
  </a>

</div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-green-800 pt-6 text-center text-sm text-green-200">
          © {new Date().getFullYear()} SriAgencies. All rights reserved.
        </div>

      </div>
    </footer>
    </section>
  );
}