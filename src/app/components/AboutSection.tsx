import { Shield, Award, Users, TrendingUp, Globe, Clock } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <Shield size={22} />,
      title: 'ISO Certified',
      description: 'Accredited consultancy with proven track record',
      color: 'bg-blue-50 text-[#2b2d72]'
    },
    {
      icon: <Users size={22} />,
      title: '15,000+ Students',
      description: 'Successfully placed worldwide',
      color: 'bg-blue-50 text-[#2b2d72]'
    },
    {
      icon: <TrendingUp size={22} />,
      title: '99% Success Rate',
      description: 'Industry-leading visa approvals',
      color: 'bg-blue-50 text-[#2b2d72]'
    },
    {
      icon: <Globe size={22} />,
      title: '25+ Countries',
      description: 'Global university partnerships',
      color: 'bg-blue-50 text-[#2b2d72]'
    },
    {
      icon: <Award size={22} />,
      title: '₹40Cr+ Scholarships',
      description: 'Financial aid secured for students',
      color: 'bg-blue-50 text-[#2b2d72]'
    },
    {
      icon: <Clock size={22} />,
      title: '10+ Years',
      description: 'Of trusted expertise',
      color: 'bg-blue-50 text-[#2b2d72]'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2b2d72] rounded-full px-4 py-1.5 text-xs font-extrabold mb-3 uppercase tracking-wide">
            <Award size={12} /> About Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#2b2d72] mb-3 leading-tight">
            India's Most Trusted Study Abroad Partner
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            At <span className="font-bold text-[#2b2d72]">Honey Translations Services</span>, we don't just help students get admissions — we transform dreams into reality. With over a decade of expertise, we've guided 15,000+ students to prestigious universities across 25+ countries, maintaining an industry-leading 99% visa success rate.
          </p>
        </div>

        {/* Stats Grid - Modern White Cards with Blue Theme */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-100 rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#2b2d72]/10 hover:-translate-y-1 hover:border-[#2b2d72]/30"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base mb-1 leading-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement - Orange Highlight */}
        <div className="bg-gradient-to-br from-[#2b2d72] to-[#1e3a8a] rounded-2xl p-8 lg:p-10 text-center relative overflow-hidden shadow-lg">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/30">
              <Award size={28} className="text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-white mb-3 leading-tight">Our Mission</h3>
            <p className="text-white/75 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              To empower every Indian student with world-class education opportunities by providing personalized guidance, transparent processes, and unwavering support — from the first consultation to landing in their dream country. We believe that studying abroad should be accessible, affordable, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
