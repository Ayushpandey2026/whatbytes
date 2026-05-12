import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {/* Icon ka size thoda bada kiya hai (h-6 w-6) taaki bade bar ke sath acha lage */}
        <Search className="h-6 w-6 text-gray-400" />
      </div>
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        // py-3.5 aur text-base add kiya hai area aur text bada karne ke liye
        className="block w-full pl-14 pr-14 py-3.5 border border-transparent rounded-full leading-5 bg-white text-gray-900 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition-all shadow-sm"
      />
    </div>
  );
}