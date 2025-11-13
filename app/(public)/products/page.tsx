import Link from 'next/link';

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, { 
    cache: "no-store" 
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Header Section */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
              <span className="text-sm font-semibold text-sky-800">PRODUCT CATALOG</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-sky-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of eco-friendly products with transparent retail and wholesale pricing
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 w-full lg:w-80 transition-all duration-200"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <select className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white transition-all duration-200">
                <option value="">All Categories</option>
                <option value="packaging">Packaging</option>
                <option value="daily-use">Daily Use</option>
                <option value="office">Office Supplies</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{products.length} products found</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="text-sky-600 hover:text-sky-700 font-medium">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                Filter
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product: any) => (
                <article 
                  key={product._id} 
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    {product.imageBase64 ? (
                      <img 
                        src={product.imageBase64} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">No image</span>
                      </div>
                    )}
                    
                    {/* HSN Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                        HSN: {product.hsn}
                      </span>
                    </div>

                    {/* Quick Action Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Link 
                          href="/enquiry"
                          className="inline-flex items-center px-4 py-2 bg-white text-sky-600 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                          Enquire Now
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Pricing */}
                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                        <div className="text-sm text-gray-600">Retail Price</div>
                        <div className="text-lg font-bold text-gray-900">
                          ₹{Number(product.retailMrp).toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">Wholesale Price</div>
                        <div className="text-lg font-bold text-sky-600">
                          ₹{Number(product.wholesaleMrp).toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link 
                      href="/enquiry"
                      className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 hover:shadow-lg transition-all duration-200 group-hover:scale-105"
                    >
                      Get Quote
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Available</h3>
                <p className="text-gray-600 mb-8">
                  We're currently updating our product catalog. Please check back later or contact us for more information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/enquiry"
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 hover:shadow-lg transition-all duration-200"
                  >
                    Contact Sales
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                  <Link 
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-gray-700 bg-white border border-gray-300 font-semibold rounded-xl hover:border-sky-300 hover:text-sky-600 transition-all duration-200"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Load More Button (if needed) */}
          {products.length > 0 && (
            <div className="text-center mt-16">
              <button className="inline-flex items-center px-8 py-4 text-gray-700 bg-white border border-gray-300 font-semibold rounded-2xl shadow-sm hover:shadow-lg hover:border-sky-300 hover:text-sky-600 transition-all duration-200">
                Load More Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            We specialize in custom eco-friendly solutions. Contact us with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/enquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Send Custom Enquiry
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold bg-transparent border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}