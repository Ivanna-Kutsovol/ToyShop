import type { Metadata } from "next";
import "../app/styles/App.scss";
import { ReactNode } from "react"; 
import { CartProvider } from "@/components/forMain/Basket/BasketCatalogy/BasketCatalogy";
import Header from "@/components/Header/Header";
import ButtonBasket from "@/components/forMain/Basket/ButtonBasket/ButtonBasket";
import Footer from "@/components/Footer/Footer";
import ToTopButton from "@/components/UI/ToTopButton/ToTopButton";
import { JostFont } from "@public/font/font_Jost";

export const metadata: Metadata = {
  title: "Toy House",
  description: "Generated by create next app",
  keywords: "toys, play, children, education",
  authors: [{ name: "Toy House Team"}],
  icons: {
    icon: "/favicon.ico"
  }
};

export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
});

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={JostFont.className}>
        <CartProvider>
          <Header />
          <ButtonBasket />
          {children}
          <Footer />
          <ToTopButton />
        </CartProvider>
      </body>
    </html>
  );
}

