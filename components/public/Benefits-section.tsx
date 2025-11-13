// components/benefits-section.tsx

const benefits = [
  {
    icon: "🌱",
    title: "Eco-Friendly",
    description: "All our products are sustainable and environmentally conscious",
    features: ["Biodegradable", "Recyclable Materials", "Low Carbon Footprint"]
  },
  {
    icon: "💰", 
    title: "Cost Effective",
    description: "Get the best value with our transparent pricing model",
    features: ["No Hidden Costs", "Bulk Discounts", "Price Match Guarantee"]
  },
  {
    icon: "⚡",
    title: "Fast Delivery", 
    description: "Quick processing and reliable shipping across India",
    features: ["24-48 Hour Dispatch", "Pan-India Shipping", "Real-time Tracking"]
  },
  {
    icon: "🛡️",
    title: "Quality Assured",
    description: "Every product meets our strict quality standards",
    features: ["Quality Checks", "HSN Compliant", "Warranty Support"]
  }
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best products and service experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group text-center"
            >
              <div className="inline-flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 text-sky-600 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}