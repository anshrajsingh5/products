// import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Shop And",
  description: "Public website + admin with product CRUD",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0ea5e9" }, // sky-blue mask
    ],
  },
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
