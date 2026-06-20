"use client";

import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

type Props = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl"
        >
          ×
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="h-64 w-full rounded-lg object-cover"
        />

        <h2 className="mt-4 text-2xl font-bold text-green-700">
          {product.name}
        </h2>

        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

        <a
          href={`https://wa.me/919965653302?text=Hello SriAgencies, I would like to know more about ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 text-white"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}