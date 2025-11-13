// components/cta-section.tsx
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-sky-600 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-700 rounded-2xl shadow-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Tell us your requirements and we'll get back to you with the best quotes within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/enquiry" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sky-600 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Send Enquiry
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}