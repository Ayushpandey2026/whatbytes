"use client";

import Link from "next/link";
import { ShoppingCart, User, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4 justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Store size={30} />
          <span className="text-2xl font-bold">Whatbytes Store</span>
        </Link>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="flex items-center gap-5">
          <Link href="/cart" className="relative text-white">
            <ShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="bg-white p-2 rounded-full shadow">
            <User className="text-blue-800" size={22} />
          </div>
        </div>
      </div>
    </header>
  );
}