'use client';
import { useState } from 'react';
import ProductForm from '@/components/ProductForm';
import ProductTable from '@/components/ProductTable';
import type { ProductType } from '@/models/Product';
import LogoutButton from '@/components/LogoutButton';
import Link from 'next/link';

export default function AdminProductsPage() {
  const [editing, setEditing] = useState<ProductType | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const onSaved = () => { 
    setEditing(null); 
    setRefreshKey(k => k + 1); 
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
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
                      link.href === '/admin/products'
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
                Product Management
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Product Management
              </h1>
              <p className="text-lg text-gray-600">
                Create, update and manage your product catalog
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:border-sky-300 hover:text-sky-600 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">-</p>
              </div>
              <div className="p-3 bg-sky-100 rounded-xl">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">With Images</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">-</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Products</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">-</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">-</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Form & Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Product Form */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  {editing ? 'Edit Product' : 'Add New Product'}
                </h2>
                <p className="text-sky-100 text-sm">
                  {editing ? 'Update product details' : 'Create a new product entry'}
                </p>
              </div>
              <div className="p-6">
                <ProductForm onSaved={onSaved} editing={editing} />
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-200 p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-sky-100 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Tips</h3>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Use clear, descriptive product names",
                  "Enter valid HSN codes for compliance",
                  "Set competitive retail & wholesale pricing",
                  "Upload high-quality product images",
                  "Keep product descriptions concise"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-sky-200">
                <div className="flex items-center text-sm text-sky-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Images are stored as base64 for demo simplicity
                </div>
              </div>
            </div>
          </div>

          {/* Product Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">All Products</h2>
                    <p className="text-sm text-gray-600 mt-1">Manage your product catalog</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Showing all products
                  </div>
                </div>
              </div>
              
              <div key={refreshKey}>
                <ProductTable onEdit={setEditing} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 grid place-items-center p-4">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200">
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Edit Product</h3>
                  <button 
                    onClick={() => setEditing(null)}
                    className="text-sky-100 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <ProductForm editing={editing} onSaved={onSaved} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}