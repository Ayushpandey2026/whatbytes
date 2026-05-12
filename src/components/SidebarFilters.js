"use client";

const categories = ["all", "electronics", "fashion", "accessories"];

export default function SidebarFilters({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice
}) {
  return (
    <aside className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-fit sticky top-28">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-gray-100">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
          Filters
        </h2>

        <span
          className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100 transition"
          onClick={() => {
            setSelectedCategory("all");
            setMaxPrice(1000);
          }}
        >
          Reset
        </span>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <h3 className="font-bold mb-5 text-gray-800 text-sm uppercase tracking-wider">
          Categories
        </h3>

        <div className="flex flex-col gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 font-medium ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-200 translate-x-1"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="pt-8 border-t border-gray-100">
        <div className="flex justify-between items-center mb-7">
          <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
            Price Range
          </h3>

          <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg">
            ${maxPrice}
          </span>
        </div>

        <div className="px-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />

          <div className="flex justify-between text-xs font-medium text-gray-500 mt-6">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    </aside>
  );
}