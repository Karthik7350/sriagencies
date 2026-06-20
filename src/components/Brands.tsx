import Image from "next/image";

const brands = [
  "/images/brands/stanes.jpg",
  "/images/brands/vendor1.jpg",
  "/images/brands/vendor2.jpg",
];

export default function Brands() {
  return (
    <section className="bg-green-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-green-700">
          Our Brand Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {brands.map((brand) => (
            <Image
              key={brand}
              src={brand}
              alt="Brand Logo"
              width={150}
              height={80}
              className="h-16 w-auto object-contain grayscale transition hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}