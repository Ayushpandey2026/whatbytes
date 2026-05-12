"use client";

import Link from "next/link";
import { ShoppingCart, User, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg border-b border-blue-600/30">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-10 min-h-[110px] flex flex-wrap md:flex-nowrap items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-white hover:opacity-90 transition flex items-center gap-3 flex-shrink-0"
        >
          <Store size={34} />
          <span className="text-2xl font-bold whitespace-nowrap tracking-tight">
            Whatbytes Store
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 min-w-[280px] max-w-[750px] h-[60px]">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 flex-shrink-0">
      <Link
  href="/cart"
  className="relative group"
>
  <div className="bg-blue-950 hover:bg-blue-900 w-[180px] h-[65px] rounded-2xl flex items-center justify-center gap-4 shadow-xl transition-all duration-300 hover:scale-105">
    
    <ShoppingCart
      size={30}
      className="text-white group-hover:scale-110 transition"
    />

    <span className="text-white font-bold text-lg tracking-wide">
      CART
    </span>
  </div>

  {cartCount > 0 && (
    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold rounded-full h-7 w-7 flex items-center justify-center shadow-lg">
      {cartCount}
    </span>
  )}
</Link>
          <div className="bg-white rounded-full p-4 flex items-center justify-center shadow-lg ml-5">
            <User size={50} className="text-blue-700" />
          </div>
        </div>
      </div>
    </header>
  );
}