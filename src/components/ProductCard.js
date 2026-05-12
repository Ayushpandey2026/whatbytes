"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 border border-gray-100 h-full flex flex-col mt-10">
      <Link href={`/product/${product.id}`} className="block flex-shrink-0">
        <div className="relative h-64 bg-gray-100 overflow-hidden group">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star size={16} fill="gold" stroke="gold" />
          </div>
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
        </div>

        <h3 className="font-bold text-base mb-2 text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-blue-700 text-2xl font-bold mt-auto">
          ${product.price}
        </p>

        <div className="pt-5">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}