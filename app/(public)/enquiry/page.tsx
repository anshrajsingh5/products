'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    message: ''
  });
  const [ok, setOk] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); 
    setOk(null);
    
    try {
      const res = await fetch('/api/enquiries', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(formData) 
      });
      
      if (!res.ok) throw new Error(await res.text());
      
      setOk('Thank you! Your enquiry has been submitted successfully. We will get back to you within 24 hours.');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '',
        productInterest: '',
        quantity: '',
        message: '' 
      });
    } catch { 
      setOk('Failed to submit your enquiry. Please try again or contact us directly.'); 
    } finally { 
      setLoading(false); 
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Header Section */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
              <span className="text-sm font-semibold text-sky-800">GET QUICK QUOTE</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Product <span className="text-sky-600">Enquiry</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us your requirements and get competitive pricing within 24 hours. 
              We specialize in bulk orders and custom solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information & Features */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us Directly</h3>
                      {/* <p className="text-gray-600 mb-2">Available Mon-Fri, 9AM-6PM</p> */}
                      <a href="tel:+919000000000" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                        +91-90000 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      {/* <p className="text-gray-600 mb-2">Send detailed requirements</p> */}
                      <a href="mailto:sales@exportnow.com" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                        sales@exportnow.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                      {/* <p className="text-gray-600 mb-2">Meet us in person</p> */}
                      <p className="text-gray-700 font-medium">
                        Rishikesh, Uttarakhand, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: "⚡", title: "Fast Response", desc: "24-48 hour response time guaranteed" },
                    { icon: "💰", title: "Best Pricing", desc: "Competitive wholesale & retail prices" },
                    { icon: "🛡️", title: "Quality Assured", desc: "100% HSN compliant products" },
                    { icon: "🚚", title: "Quick Delivery", desc: "Pan-India shipping available" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-2xl mt-1">{item.icon}</span>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sky-100 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-sky-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-sky-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Avg. Response</div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Quick Quote Request</h2>
                  <p className="text-sky-100">Fill out this form and we'll get back to you with the best pricing</p>
                </div>

                <form onSubmit={submit} className="p-8 space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2 hidden">
                        <label className="text-sm font-semibold text-gray-700">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className='hidden'>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Product Interest
                        </label>
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-white"
                        >
                          <option value="">Select product category</option>
                          <option value="packaging">Packaging Materials</option>
                          <option value="daily-use">Daily Use Products</option>
                          <option value="office">Office Supplies</option>
                          <option value="custom">Custom Requirements</option>
                          <option value="multiple">Multiple Products</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Estimated Quantity
                        </label>
                        <select
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-white"
                        >
                          <option value="">Select quantity range</option>
                          <option value="sample">Sample Units</option>
                          <option value="small">100-500 units</option>
                          <option value="medium">500-5000 units</option>
                          <option value="large">5000+ units</option>
                          <option value="bulk">Bulk Order</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Detailed Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 resize-none"
                      placeholder="Please provide detailed information about:
• Specific products you're interested in
• Quantity requirements
• Delivery timeline
• Any special requirements
• Budget constraints (if any)"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      The more details you provide, the better we can assist you
                    </p>
                  </div>

                  {/* Success/Error Message */}
                  {ok && (
                    <div className={`p-6 rounded-2xl ${
                      ok.includes('Thank you') 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      <div className="flex items-start space-x-3">
                        {ok.includes('Thank you') ? (
                          <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                        <div>
                          <p className="font-semibold">
                            {ok.includes('Thank you') ? 'Enquiry Submitted Successfully!' : 'Submission Failed'}
                          </p>
                          <p className="text-sm mt-1">{ok}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Your Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Enquiry & Get Quote
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <Link 
                      href="/products"
                      className="inline-flex items-center justify-center px-8 py-4 text-gray-700 bg-white border border-gray-300 font-semibold rounded-xl shadow-sm hover:shadow-md hover:border-sky-300 hover:text-sky-600 transition-all duration-200"
                    >
                      Browse Products First
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">Trusted by 500+ Businesses Across India</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">
              {[
                { label: "Fast Response", value: "< 24h" },
                { label: "Quality Products", value: "100% HSN" },
                { label: "Competitive Pricing", value: "Best Rates" },
                { label: "Customer Support", value: "24/7" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-sky-600 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}