"use client";

import { products } from "../data/products";
import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[0] | null>(null);

  return (
    <section id="products" className="bg-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-green-700">
          Our Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}