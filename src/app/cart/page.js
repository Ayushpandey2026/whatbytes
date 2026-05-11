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

        <main className="max-w-7xl mx-auto px-4 py-20">
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
            <ShoppingBag
              size={60}
              className="mx-auto text-blue-700 mb-6"
            />

            <h1 className="text-3xl font-bold mb-4">
              Your Cart is Empty
            </h1>

            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold"
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

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="relative w-full md:w-40 h-40 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-blue-700 text-2xl font-bold mb-4">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, "decrease")
                        }
                        className="px-4 py-3 hover:bg-gray-200"
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
                        className="px-4 py-3 hover:bg-gray-200"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
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
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-28">
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
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

              <div className="border-t pt-5 flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>${(totalPrice + 35).toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition">
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