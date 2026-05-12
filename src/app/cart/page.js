"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");

  if (cartItems.length === 0) {
    return (
      <>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-white rounded-2xl shadow-lg p-20 text-center border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={48} className="text-blue-700" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              Your Cart is Empty
            </h1>

            <p className="text-gray-600 mb-12 text-lg">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-3">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100 p-7 flex flex-col md:flex-row gap-8"
              >
                <div className="relative w-full md:w-44 h-44 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-blue-700 text-2xl font-bold mb-6">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, "decrease")
                        }
                        className="px-4 py-3 hover:bg-gray-200 text-gray-700 transition"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="px-6 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, "increase")
                        }
                        className="px-4 py-3 hover:bg-gray-200 text-gray-700 transition"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 sticky top-28">
              <h2 className="text-2xl font-bold mb-10 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$20.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$15.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 flex justify-between text-xl font-bold mb-10 text-gray-900">
                <span>Total</span>
                <span className="text-blue-700">${(totalPrice + 35).toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-95">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}