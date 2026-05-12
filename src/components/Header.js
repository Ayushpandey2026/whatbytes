"use client";

import Link from "next/link";
import { ShoppingCart, User, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg border-b border-blue-600 border-opacity-30 mb-12">
      <div
        className="max-w-7xl mx-auto px-8"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          minHeight: "72px",
          paddingTop: "14px",
          paddingBottom: "14px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
          className="text-white hover:opacity-90 transition"
        >
          <Store size={28} style={{ flexShrink: 0 }} />
          <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>
            Whatbytes Store
          </span>
        </Link>

        {/* Search Bar - grows in middle */}
        <div style={{ flex: "1 1 280px", maxWidth: "480px", margin: "0 0 0 0" }}>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
          <Link href="/cart" className="relative text-white hover:opacity-80 transition group">
            <ShoppingCart size={26} className="group-hover:scale-110 transition" />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "#ef4444",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  height: "20px",
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          <div
            style={{
              background: "#fff",
              borderRadius: "9999px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <User size={20} style={{ color: "#1d4ed8" }} />
          </div>
        </div>
      </div>
    </header>
  );
}