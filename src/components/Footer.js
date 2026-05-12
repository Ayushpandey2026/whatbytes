import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b366e] to-[#07244a] text-white border-t border-blue-500/30 mt-20">
      <div className="w-full max-w-screen-2xl mx-auto px-10 lg:px-16 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-8 text-xl uppercase tracking-wider text-blue-100">
              Filters
            </h4>

            <div className="flex flex-col gap-5">
              <p className="text-white-800  cursor-pointer text-base ml-5">
                All Electronics
              </p>

              <p className=" text-white-800  cursor-pointer text-base">
                &copy; 2024 American
              </p>

             
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-8 text-xl uppercase tracking-wider text-blue-100">
              About Us
            </h4>

            <ul className="flex flex-col gap-5 text-gray-300 text-base font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Contact
                </a>
              </li>

            
            
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-8 text-xl uppercase tracking-wider text-blue-100">
              Follow Us
            </h4>

            <div className="flex gap-6">
              {/* Facebook */}
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-blue-600/50 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

       
       
      </div>
    </footer>
  );
}