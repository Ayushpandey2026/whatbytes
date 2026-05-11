"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import products from "@/data/products";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
        </div>

        <Footer />
      </>
    );
  }

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10">
          <div className="relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} fill="gold" stroke="gold" />
              <span className="font-medium">{product.rating}</span>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-4xl font-bold text-blue-700 mb-6">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              {product.description}
            </p>

            <div className="space-y-3 mb-8">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>

              <p>
                <span className="font-semibold">Brand:</span>{" "}
                {product.brand}
              </p>

              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {product.stock} available
              </p>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={decreaseQty}
                  className="px-4 py-3 hover:bg-gray-200"
                >
                  <Minus size={18} />
                </button>

                <span className="px-6 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQty}
                  className="px-4 py-3 hover:bg-gray-200"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}