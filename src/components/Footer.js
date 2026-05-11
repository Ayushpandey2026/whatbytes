import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b366e] text-white py-8 px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-bold mb-4 text-base">Filters</h4>
          <p className="text-gray-300">All Electronics</p>
          <p className="text-gray-300 mt-8">© 2024 American</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-base">About Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-base">Follow Us</h4>
          <div className="flex gap-4">
            
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#1864b8] flex items-center justify-center hover:bg-white hover:text-[#104c97] transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#1864b8] flex items-center justify-center hover:bg-white hover:text-[#104c97] transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#1864b8] flex items-center justify-center hover:bg-white hover:text-[#104c97] transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}