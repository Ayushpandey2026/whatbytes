"use client";

const categories = ["all", "electronics", "fashion", "accessories"];

export default function SidebarFilters({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice
}) {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-6 h-fit">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      <div className="mb-8">
        <h3 className="font-semibold mb-4">Categories</h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-3 rounded-xl transition ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Max Price: ${maxPrice}</h3>

        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </aside>
  );
}