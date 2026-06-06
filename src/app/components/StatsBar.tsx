export function StatsBar() {
  const stats = [
    { number: '5000+', label: 'Students Placed' },
    { number: '30+', label: 'Countries' },
    { number: '200+', label: 'Universities' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <section className="py-16 bg-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-[0px_8px_24px_rgba(0,0,0,0.15)]">
              <div className="text-4xl md:text-5xl font-bold text-[#1A73E8] mb-2">
                {stat.number}
              </div>
              <div className="text-[#6B7280] text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
