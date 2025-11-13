"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

const items: { href: Route; label: string }[] = [
  { label: "Products", href: "/admin/products" },
  { label: "Enquiries", href: "/admin/enquiries" },
];

async function fetchEnquiries() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/enquiries`, { 
    cache: "no-store",
    next: { revalidate: 0 }
  });
  if (!res.ok) throw new Error('Failed to fetch enquiries');
  return res.json();
}

export default async function AdminNav() {
  const pathname = usePathname();
    let enquiries = [];
  try {
    enquiries = await fetchEnquiries();
  } catch (error) {
    console.error('Error fetching enquiries:', error);
  }

  return (
   
<div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/admin" className="flex items-center space-x-3 group">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-lg">
                  <span className="text-lg font-bold">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">Admin</span>
                  <span className="text-xs text-gray-500 -mt-1">Panel</span>
                </div>
              </a>
              
              <nav className="hidden md:flex items-center space-x-1 ml-8">
                {[
                  { href: '/admin/products', label: 'Products' },
                  { href: '/admin/enquiries', label: 'Enquiries' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      link.href === '/admin/enquiries'
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-gray-700 hover:text-sky-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 hidden sm:block">
                {enquiries.length} total leads
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
  );
}
