import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full h-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-10">
        <Search className="h-6 w-6 text-gray-400" />
      </div>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full
          h-full
          rounded-full
          bg-white
          text-gray-900
          placeholder-gray-500
          text-base
          text-center
          shadow-md
          border border-transparent
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300
          transition-all
          px-6
        "
      />
    </div>
  );
}