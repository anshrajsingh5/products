// components/pricing-section.tsx

const pricingPlans = [
  {
    name: "Retail",
    description: "Perfect for individual customers and small purchases",
    price: "Best Retail",
    features: [
      "Single unit pricing",
      "Ideal for personal use", 
      "Small quantity orders",
      "Standard packaging",
      "Regular delivery"
    ],
    highlighted: false,
    color: "border-gray-200"
  },
  {
    name: "Wholesale",
    description: "Designed for businesses and bulk purchases",
    price: "Bulk Discounts",
    features: [
      "Volume-based pricing",
      "Minimum order quantity",
      "Bulk packaging",
      "Priority processing", 
      "Express delivery options",
      "Dedicated account manager"
    ],
    highlighted: true,
    color: "border-sky-300 bg-sky-50/50"
  }
];

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
            <span className="text-sm font-semibold text-sky-800">TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Retail vs Wholesale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear pricing structure designed to meet both individual and business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 ${plan.color} p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.highlighted ? 'lg:scale-105 lg:-translate-y-4' : 'hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-sky-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-bold text-sky-600">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                plan.highlighted 
                  ? 'bg-sky-600 text-white hover:bg-sky-700 hover:shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-sky-300 hover:text-sky-600'
              }`}>
                View {plan.name} Products
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need custom pricing for large volumes?
          </p>
          <button className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors">
            Contact for Enterprise Pricing
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}