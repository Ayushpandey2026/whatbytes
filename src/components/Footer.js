import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Whatbytes Store</h3>
          <p className="text-sm text-gray-300">
            Premium ecommerce shopping experience built with Next.js.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 text-center text-sm text-gray-400">
        © 2026 Whatbytes Store. All rights reserved.
      </div>
    </footer>
  );
}