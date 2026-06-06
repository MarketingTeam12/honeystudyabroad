import { Plane, GraduationCap, Award } from 'lucide-react';

export function ServicesBrief() {
  const services = [
    {
      icon: Plane,
      title: 'Visa Assistance',
      description: 'Complete visa support with 98% success rate. Document preparation, interview coaching, and application tracking.',
    },
    {
      icon: GraduationCap,
      title: 'University Admissions',
      description: 'Expert guidance for admission to 200+ top universities. Application support, SOP writing, and more.',
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description: 'Help securing scholarships and financial aid. Maximize your funding opportunities abroad.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#1f2150] font-extrabold">
            Our Services
          </h2>
          <p className="text-xl text-[#5a5c8e] max-w-2xl mx-auto">
            Comprehensive support for your study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e8e8f5] hover:border-[#d0d0e8]"
              >
                <div className="w-16 h-16 bg-[#e8e8f5] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#2b2d72]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#1f2150] font-bold">{service.title}</h3>
                <p className="text-[#5a5c8e] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-block bg-[#2b2d72] text-white px-8 py-3 rounded-lg hover:bg-[#1f2150] transition-all font-semibold"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
