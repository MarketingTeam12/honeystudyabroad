import {
  GraduationCap,
  FileText,
  Building2,
  Globe,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Users,
  CheckCircle,
  Building
} from 'lucide-react';

interface ServicesSectionProps {
  onEnquiryClick: () => void;
  onExpertClick: () => void;
}

const SERVICES = [
  {
    icon: <GraduationCap size={24} />,
    title: 'University Admissions',
    description: 'Expert guidance for securing admissions to top universities worldwide with personalized application support.',
    stat: '2,500+ Admissions',
    statIcon: <Users size={12} />,
    badge: 'Most Popular',
    href: '/university-admissions',
  },
  {
    icon: <FileText size={24} />,
    title: 'Visa Assistance',
    description: 'End-to-end visa processing with document preparation, interview coaching, and application tracking.',
    stat: '98% Visa Success',
    statIcon: <TrendingUp size={12} />,
    badge: null,
    href: '/visa-assistance',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Campus Admission',
    description: 'Direct campus placement assistance with on-ground support for university visits and enrollment.',
    stat: '150+ Universities',
    statIcon: <Building size={12} />,
    badge: null,
    href: '/campus-admission',
  },
  {
    icon: <Globe size={24} />,
    title: 'Online Admission',
    description: 'Seamless online application processing for distance learning and hybrid programs globally.',
    stat: '100% Digital',
    statIcon: <CheckCircle size={12} />,
    badge: null,
    href: '/online-admission',
  },
  {
    icon: <Award size={24} />,
    title: 'Scholarship Guidance',
    description: 'Identify and apply for merit-based, need-based, and country-specific scholarships and financial aid.',
    stat: '₹40Cr+ Secured',
    statIcon: <Award size={12} />,
    badge: null,
    href: '/scholarship-guidance',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'IELTS / Test Prep',
    description: 'Comprehensive test preparation for IELTS, TOEFL, GRE, GMAT, and other standardized exams.',
    stat: '7.5+ Avg Score',
    statIcon: <TrendingUp size={12} />,
    badge: null,
    href: '/ielts-test-prep',
  },
];

export function ServicesSection({ onEnquiryClick, onExpertClick }: ServicesSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2b2d72] rounded-full px-4 py-1.5 text-xs font-extrabold mb-3 uppercase tracking-wide">
            <CheckCircle size={12} /> Complete Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#2b2d72] mb-3 leading-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From university selection to landing in your dream country — we provide complete end-to-end support at every step.
          </p>
        </div>

        {/* Services Grid - Premium Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2b2d72]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2b2d72]/10 h-full flex flex-col"
            >
              {/* Top colored border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b2d72] to-[#3b4ab8]" />

              {/* Most Popular Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-[#2b2d72] group-hover:bg-[#2b2d72] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-[1.05rem] font-extrabold text-[#2b2d72] mb-2.5 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Stats Badge */}
                <div className="flex items-center gap-1.5 mb-4 px-3 py-2 bg-blue-50 rounded-lg w-fit">
                  <span className="text-[#2b2d72] flex-shrink-0">{service.statIcon}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2b2d72]">{service.stat}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-4" />

                {/* CTA */}
                <div className="flex items-center justify-between text-[#2b2d72] font-extrabold text-sm group-hover:text-[#1e206b] transition-colors pt-1">
                  <span>Explore Details</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0"
                  />
                </div>
              </div>

              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b2d72]/0 via-transparent to-transparent group-hover:from-[#2b2d72]/[0.02] transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative bg-gradient-to-br from-[#2b2d72] to-[#1e3a8a] rounded-2xl overflow-hidden shadow-lg">
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 px-6 lg:px-10 py-7 lg:py-8">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl lg:text-[1.4rem] font-extrabold text-white mb-1.5 leading-tight">
                Not sure which service you need?
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Our experts will analyze your profile and recommend the perfect pathway for you.
              </p>
            </div>

            {/* Right CTA */}
            <button
              onClick={onExpertClick}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Talk to Expert FREE
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
