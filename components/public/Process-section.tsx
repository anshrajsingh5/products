// components/process-section.tsx

const steps = [
  {
    number: "01",
    title: "Browse Products",
    description: "Explore our catalog of eco-friendly products with transparent pricing",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Send Enquiry", 
    description: "Submit your requirements and quantity needs with one click",
    icon: "📧",
    color: "from-cyan-500 to-sky-500"
  },
  {
    number: "03",
    title: "Get Quote",
    description: "Receive competitive pricing and availability within 24 hours",
    icon: "💰",
    color: "from-sky-500 to-blue-500"
  },
  {
    number: "04",
    title: "Place Order",
    description: "Confirm your order and get ready for fast delivery",
    icon: "🚚",
    color: "from-blue-600 to-sky-600"
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6">
            <span className="text-sm font-semibold text-sky-800">HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From browsing to delivery, we've made the entire process seamless and efficient
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number and Connector */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}