import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

export default function ProductCard({
  product,
  onClick,
}: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="h-80 w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-full flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold">{product.name}</h3>

          <p className="mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}