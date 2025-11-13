// components/products-preview.tsx
import Link from 'next/link';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
    cache: "no-store",
  });
  try { return await res.json(); } catch { return []; }
}

export default async function ProductsPreview() {
  const products = await getProducts();

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-lg text-gray-600">
              A curated selection of our most popular items available right now
            </p>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-sky-600 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200"
          >
            View All Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(products) && products.slice(0, 6).map((product) => (
            <div 
              key={product._id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                {product.imageBase64 ? (
                  <img 
                    src={product.imageBase64} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    <div className="text-4xl">📦</div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-mono mb-4">
                  HSN: {product.hsn}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Retail</div>
                    <div className="text-lg font-bold text-gray-900">
                      ₹{Number(product.retailMrp).toFixed(2)}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Wholesale</div>
                    <div className="text-lg font-bold text-sky-600">
                      ₹{Number(product.wholesaleMrp).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {(!products || products.length === 0) && (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4 text-gray-300">📦</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No products yet
              </h3>
              <p className="text-gray-600 mb-6">
                Start by adding your first product to the catalog
              </p>
              <Link 
                href="/admin/products" 
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 hover:shadow-xl transition-all duration-200"
              >
                Add First Product
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}