
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Export Now",
    template: "%s | Export Now",
  },
  description:
    "Export Now — Public website + admin with product CRUD. Export and sell your products worldwide.",
  metadataBase: new URL("https://your-domain.example"), // change to your domain (optional)
  applicationName: "Export Now",
  authors: [{ name: "Ansh Raj Singh" }],
  keywords: [
    "export",
    "ecommerce",
    "product CRUD",
    "admin panel",
    "export now",
    "shop",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E6F2FF" }, // light sky-ish
    { media: "(prefers-color-scheme: dark)", color: "#062E49" },  // dark sky-ish
  ],
//   manifest: "/site.webmanifest",
  openGraph: {
    title: "Export Now",
    description:
      "Export Now — Public website + admin with product CRUD. Export and sell your products worldwide.",
    url: "https://your-domain.example",
    siteName: "Export Now",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Export Now — Sell your products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Now",
    description:
      "Export Now — Public website + admin with product CRUD. Export and sell your products worldwide.",
    images: ["/twitter-card.png"],
    creator: "@your_twitter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
    //   { rel: "ma
    // nifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0ea5e9" }, // sky-blue mask
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="sky">
      <body className="min-h-screen bg-sky-gradient text-slate-900">
        {/* You can add a global navbar here if you want */}
        {children}
      </body>
    </html>
  );
}
