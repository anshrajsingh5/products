// components/stats-section.tsx

const stats = [
  { number: "500+", label: "Orders Fulfilled" },
  { number: "100%", label: "HSN Compliant" },
  { number: "< 24h", label: "Average Response Time" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-sky-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}