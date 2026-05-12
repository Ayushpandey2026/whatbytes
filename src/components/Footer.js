import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b366e] to-[#07244a] text-white py-20 px-8 border-t border-blue-500/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm mb-12">
        <div className="flex flex-col">
          <h4 className="font-extrabold mb-6 text-lg uppercase tracking-wider text-blue-100">Filters</h4>
          <p className="text-gray-300 leading-relaxed hover:text-white transition-colors cursor-pointer w-max">All Electronics</p>
          <div className="mt-auto pt-10">
            <p className="text-blue-300/60 text-xs font-medium tracking-wide">© 2024 American. All rights reserved.</p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-extrabold mb-6 text-lg uppercase tracking-wider text-blue-100">About Us</h4>
          <ul className="space-y-4 text-gray-300 font-medium">
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all inline-block">About Us</a></li>
            <li><a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all inline-block">Contact</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-extrabold mb-6 text-lg uppercase tracking-wider text-blue-100">Follow Us</h4>
          <div className="flex gap-5">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="w-10 h-10 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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