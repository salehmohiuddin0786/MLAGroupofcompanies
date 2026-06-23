import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./componet/header";
import Footer from "./componet/footer";
import SiteMotion from "./componet/site-motion";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: { default: "MLA Group of Companies", template: "%s | MLA Group" },
  description: "Construction, interiors and building materials in Hyderabad—delivered with quality, transparency and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body><Header /><main><SiteMotion>{children}</SiteMotion></main><Footer /></body>
    </html>
  );
}
