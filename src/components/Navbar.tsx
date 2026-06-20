export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-green-700">
          🌿 SriAgencies
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#home" className="hover:text-green-700">Home</a>
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#products" className="hover:text-green-700">Products</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}