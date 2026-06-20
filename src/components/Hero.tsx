import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh]">
      <Image
        src="/images/hero/farm-banner.webp"
        alt="SriAgencies Farm Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-6 text-center text-white">
          <p className="mb-4 text-lg font-medium text-green-200">
            Authorized Partner of Stanes
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            SriAgencies
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-2xl">
            Delivering trusted agricultural solutions to farmers across
            Alanthurai and Coimbatore.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-green-600 px-8 py-4 font-semibold transition hover:bg-green-700"
            >
              Explore Products
            </a>

            <a
              href="https://wa.me/919965653302"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}