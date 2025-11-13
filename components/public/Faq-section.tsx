// components/faq-section.tsx
'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "What is the minimum order quantity for wholesale pricing?",
    answer: "The minimum order quantity varies by product. Generally, we require a minimum order value of ₹5,000 for wholesale pricing. Specific product MOQs are listed on each product page."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days across India. Express shipping (1-2 days) is available for most locations. We process orders within 24 hours of confirmation."
  },
  {
    question: "Are your products really eco-friendly?",
    answer: "Yes! All our products are made from sustainable materials, are biodegradable or recyclable, and we maintain strict environmental standards throughout our supply chain."
  },
  {
    question: "Can I get custom products manufactured?",
    answer: "Absolutely! We offer custom manufacturing for bulk orders. Contact our sales team with your requirements, and we'll provide a custom quote within 48 hours."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including bank transfers, UPI, credit/debit cards, and corporate payments. Payment terms can be discussed for large orders."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg 
                  className={`flex-shrink-0 w-6 h-6 text-sky-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="w-12 h-0.5 bg-sky-100 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-6 py-3 text-sky-600 font-semibold bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors duration-200">
            Contact Support
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}