export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Header Section */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
              <span className="text-sm font-semibold text-sky-800">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-sky-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you find the perfect eco-friendly products for your needs. 
              Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions about our products or need custom solutions? 
                  Our team is ready to assist you with expert guidance and quick responses.
                </p>

                <div className="space-y-6">
                  {/* Email */}
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
                      <p className="text-gray-600 mb-2">Send us an email anytime</p>
                      <a href="mailto:hello@exportnow" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                        hello@exportnow.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm</p>
                      <a href="tel:+919000000000" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                        +91-90000 00000
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-2">Come say hello at our office</p>
                      <p className="text-gray-700 font-medium">
                        Rishikesh, Uttarakhand, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href="/enquiry" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-sky-600 text-white font-semibold rounded-xl shadow-lg hover:bg-sky-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Send Detailed Enquiry
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-sky-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-sky-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-8">
              {/* Map Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4">
                  <h2 className="text-xl font-semibold text-white">Our Location</h2>
                  <p className="text-sky-100 text-sm">Visit us in beautiful Rishikesh, Uttarakhand</p>
                </div>
                
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <iframe 
                      title="Practivoo Office Location"
                      src="https://maps.google.com/maps?q=Rishikesh%20Uttarakhand&t=&z=12&ie=UTF8&iwloc=&output=embed" 
                      className="w-full h-96 lg:h-[500px] border-0"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>Rishikesh, Uttarakhand, India</span>
                    </div>
                    <a 
                      href="https://maps.google.com/maps?q=Rishikesh%20Uttarakhand" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                    >
                      Open in Maps
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get the best eco-friendly products for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/enquiry" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Send Enquiry
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
            <a 
              href="tel:+919000000000" 
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold bg-transparent border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Call Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}