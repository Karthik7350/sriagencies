export default function Navbar() {
  const menuItems = [
    "About Us",
    "Services",
    "Products",
    "Why Choose Us",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            🌿
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-green-700 tracking-wide transition-transform duration-300 group-hover:scale-105">
              SriAgencies
            </h1>

            <p className="text-xs text-gray-500">
              Agricultural Solutions
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="relative font-medium text-gray-800 transition-all duration-300 hover:text-green-700
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-green-700 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
