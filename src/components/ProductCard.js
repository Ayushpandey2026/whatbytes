"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <Star size={16} fill="gold" stroke="gold" />
          <span className="text-sm">{product.rating}</span>
        </div>

        <h3 className="font-bold text-lg mb-2">{product.title}</h3>

        <p className="text-blue-700 text-2xl font-bold mb-4">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}