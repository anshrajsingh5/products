// components/categories-section.tsx
import Link from 'next/link';

const categories = [
  {
    name: "Packaging Materials",
    description: "Eco-friendly packaging solutions for all needs",
    items: "25+ Products",
    icon: "📦",
    color: "bg-blue-500",
    href: "/products?category=packaging"
  },
  {
    name: "Daily Use Items", 
    description: "Sustainable products for everyday use",
    items: "18+ Products",
    icon: "🏠",
    color: "bg-sky-500",
    href: "/products?category=daily-use"
  },
  {
    name: "Office Supplies",
    description: "Green alternatives for your workspace",
    items: "12+ Products", 
    icon: "💼",
    color: "bg-cyan-500",
    href: "/products?category=office"
  },
  {
    name: "Retail Products",
    description: "Items perfect for retail businesses",
    items: "30+ Products",
    icon: "🏪",
    color: "bg-blue-600",
    href: "/products?category=retail"
  }
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of eco-friendly products across different categories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`inline-flex size-12 items-center justify-center rounded-xl ${category.color} text-white text-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded-full">
                    {category.items}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}