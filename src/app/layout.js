import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Whatbytes Store",
  description: "Modern ecommerce frontend assignment"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}