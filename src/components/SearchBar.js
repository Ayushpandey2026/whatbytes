"use client";

import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full md:w-[450px]">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />

      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-white rounded-full py-3 pl-12 pr-4 shadow-md"
      />
    </div>
  );
}