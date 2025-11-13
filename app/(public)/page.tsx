// app/page.tsx
import CategoriesSection from "@/components/public/Categories-section";
import CTASection from "@/components/public/Cta-section";
import PricingSection from "@/components/public/Pricing-section";
import ProcessSection from "@/components/public/Process-section";
import ProductsPreview from "@/components/public/Products-preview";
import StatsSection from "@/components/public/Stats-section";
import TestimonialsSection from "@/components/public/Testimonials-section";
import BenefitsSection from "@/components/public/Benefits-section";
import FaqSection from "@/components/public/Faq-section";
import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
    cache: "no-store",
  });
  try { return await res.json(); } catch { return []; }
}
const features = [
  {
    title: "Transparent Pricing",
    description: "Retail & Wholesale MRP side-by-side for complete pricing clarity and transparency.",
    icon: "💱",
  },
  {
    title: "Fast Enquiries", 
    description: "Share your requirements and get quick responses with availability and pricing details.",
    icon: "⚡",
  },
  {
    title: "Admin Control",
    description: "Full control to add, edit, and manage products with images and HSN codes.",
    icon: "🛠️",
  },
];


export default async function Home() {
  const products = await getProducts();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
      
      {/* Animated Background Blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full blur-3xl bg-gradient-to-br from-blue-200/60 to-purple-300/40 animate-pulse-slow" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 size-80 rounded-full blur-3xl bg-gradient-to-tr from-amber-200/50 to-pink-300/30 animate-pulse-slow delay-1000" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full blur-3xl bg-gradient-to-r from-emerald-200/40 to-cyan-300/30 animate-pulse-slow delay-500" />

      

    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-sky-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sky-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-8">
              <span className="flex size-2 rounded-full bg-green-500 mr-3"></span>
              <span className="text-sm font-medium text-sky-800">
                In-stock products with retail & wholesale pricing
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Beautiful Eco-friendly{' '}
              <span className="text-sky-600">Products</span>
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Discover sustainable packaging and daily-use items with transparent 
              Retail & Wholesale MRP. Enquire in one click—no hassle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Browse Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/enquiry" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200"
              >
                Send Enquiry
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { number: "500+", label: "Happy Orders" },
                { number: "100%", label: "HSN Compliant" },
                { number: "< 24h", label: "Fast Response" }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-0 border border-gray-200">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-50 to-gray-100 flex items-center justify-center">
                <div className="text-6xl text-sky-600">
                  <img src="bg.jpg"/>
                </div>
              </div>
              <div className="mt-6 space-y-4 px-6 pb-4">
                <h3 className="text-xl font-semibold text-gray-900">Simple Product Management</h3>
                <div className="space-y-3">
                  {[
                    { color: "bg-sky-500", text: "Add products with ease" },
                    { color: "bg-sky-400", text: "Upload high-quality images" },
                    { color: "bg-sky-600", text: "Manage retail & wholesale pricing" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <span className={`flex-shrink-0 size-2 rounded-full ${item.color}`} />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make product sourcing simple, transparent, and efficient for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex size-16 items-center justify-center rounded-xl bg-sky-100 text-sky-600 text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      


      {/* PRODUCTS PREVIEW */}
     <ProductsPreview/> 
      {/* STATS SECTION */}
      
      <ProcessSection/>
      <CategoriesSection/>
      <PricingSection/>
      <BenefitsSection/>
      <StatsSection />
      
      <TestimonialsSection/>
      <FaqSection/>
      <CTASection/>


    </main>
  );
}