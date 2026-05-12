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

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
          <p className="text-gray-600 mt-5">The product you're looking for doesn't exist.</p>
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

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 grid md:grid-cols-2 gap-14 lg:gap-20">
          <div className="relative h-[500px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center">
                <Star size={18} fill="gold" stroke="gold" />
              </div>
              <span className="font-medium text-gray-700">{product.rating}</span>
              <span className="text-gray-400 text-sm">(Premium Quality)</span>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
              {product.title}
            </h1>

            <p className="text-4xl font-bold text-blue-700 mb-10">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-8 mb-12 text-lg">
              {product.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-7 mb-12 border border-gray-200 space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Category</span>
                <span className="text-gray-900 font-semibold">{product.category}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Brand</span>
                <span className="text-gray-900 font-semibold">{product.brand}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Stock Available</span>
                <span className="text-green-600 font-semibold">{product.stock} items</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-6">
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                <button
                  onClick={decreaseQty}
                  className="px-4 py-3 hover:bg-gray-200 transition text-gray-700"
                >
                  <Minus size={20} />
                </button>

                <span className="px-8 font-semibold text-gray-900 min-w-16 text-center">
                  {quantity}
                </span>

                <button
                  onClick={increaseQty}
                  className="px-4 py-3 hover:bg-gray-200 transition text-gray-700"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-95 flex-1 sm:flex-none"
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