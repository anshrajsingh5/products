// components/testimonials-section.tsx

const testimonials = [
  {
    quote: "Great quality products and fast response time exceeded our expectations. Highly recommended for business sourcing!",
    author: "Owner, Café Hilltop",
  },
  {
    quote: "Transparent wholesale pricing saved us countless hours of negotiation and paperwork. Very professional service.",
    author: "Ops Lead, GreenMart", 
  },
  {
    quote: "Super simple to manage our entire catalog. The admin interface is intuitive and saves us so much time.",
    author: "Founder, LocalCo",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed their sourcing with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl text-sky-600 mb-4">"</div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="text-sm font-semibold text-gray-900">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}