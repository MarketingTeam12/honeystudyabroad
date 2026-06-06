import { Users, Plane, GraduationCap, Award } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert Counseling',
      description: 'Personalized guidance from experienced education consultants',
    },
    {
      icon: Plane,
      title: 'Visa Support',
      description: '98% visa success rate with complete application assistance',
    },
    {
      icon: GraduationCap,
      title: 'University Selection',
      description: 'Access to 200+ top universities across 30+ countries',
    },
    {
      icon: Award,
      title: 'Scholarship Help',
      description: 'Expert assistance in securing scholarships and financial aid',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1A3A8F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white font-extrabold">
            Why Choose Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your trusted partner for international education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0px_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-[#F4C430]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#1A73E8]" />
                </div>
                <h3 className="text-xl mb-3 text-[#1C1C1C] font-bold">{feature.title}</h3>
                <p className="text-[#6B7280]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
