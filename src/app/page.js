"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarFilters from "@/components/SidebarFilters";
import ProductGrid from "@/components/ProductGrid";
import EmptyState from "@/components/EmptyState";
import products from "@/data/products";

function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const search = searchParams.get("search");

    if (category) setSelectedCategory(category);
    if (price) setMaxPrice(Number(price));
    if (search) setSearchQuery(search);
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }

    if (maxPrice < 1000) {
      params.set("price", maxPrice);
    }

    if (searchQuery.trim()) {
      params.set("search", searchQuery);
    }

    router.push(`/?${params.toString()}`);
  }, [selectedCategory, maxPrice, searchQuery, router]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const priceMatch = product.price <= maxPrice;

      const searchMatch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    });
  }, [selectedCategory, maxPrice, searchQuery]);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* IMPORTANT SPACE BELOW NAVBAR */}
      <div className="h-12"></div>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <SidebarFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}