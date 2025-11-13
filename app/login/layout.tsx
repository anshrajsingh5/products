// import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Practivoo Shop",
  description: "Public website + admin with product CRUD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
      <>
        <Nav />
        {children}
        <Footer />
      </>
    // {/* </html> */}
  );
}
