"use client";
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">SriAgencies</h3>

            <p className="mt-4 text-sm text-green-100">
              Trusted agricultural solutions provider in Alanthurai,
              Coimbatore.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>

            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-white">
                  Products
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>

            <div className="space-y-2 text-green-100">
              <p>📍 Alanthurai, Coimbatore</p>
              <p>📞 9791614629</p>
              <p>✉️ karthikn7350@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-700 pt-6 text-center text-sm text-green-200">
          © {new Date().getFullYear()} SriAgencies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}