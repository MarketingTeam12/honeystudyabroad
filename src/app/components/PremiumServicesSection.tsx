import { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  FileText,
  BookOpen,
  Briefcase,
  Plus,
  ArrowRight,
  CheckCircle,
  Plane,
  DollarSign,
  Home,
  Globe,
  CreditCard,
  Languages
} from 'lucide-react';

interface Service {
  title: string;
  items: string[];
}

interface ServiceCategory {
  id: string;
  icon: any;
  title: string;
  services: Service[];
  color: string;
  gradient: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'admission',
    icon: GraduationCap,
    title: 'Admission Services',
    color: '#1A73E8',
    gradient: 'from-[#1A73E8] to-[#0D5DBD]',
    services: [
      {
        title: 'Complete Application Support',
        items: [
          'University shortlisting based on profile',
          'SOP (Statement of Purpose) writing',
          'LOR (Letter of Recommendation) guidance',
          'Application filing & tracking',
        ],
      },
    ],
  },
  {
    id: 'visa',
    icon: Plane,
    title: 'Visa Services',
    color: '#F4C430',
    gradient: 'from-[#F4C430] to-[#E5B528]',
    services: [
      {
        title: 'End-to-End Visa Support',
        items: [
          'Complete visa documentation',
          'Mock visa interview preparation',
          'Financial documentation guidance',
          'Embassy appointment scheduling',
        ],
      },
    ],
  },
  {
    id: 'test',
    icon: BookOpen,
    title: 'Test Preparation',
    color: '#10B981',
    gradient: 'from-[#10B981] to-[#059669]',
    services: [
      {
        title: 'Expert Coaching',
        items: [
          'IELTS, TOEFL, PTE preparation',
          'GRE & GMAT coaching',
          'Mock tests & score prediction',
          'Personalized study plans',
        ],
      },
    ],
  },
  {
    id: 'career',
    icon: Briefcase,
    title: 'Career Services',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    services: [
      {
        title: 'Professional Development',
        items: [
          'Resume building & optimization',
          'LinkedIn profile enhancement',
          'Interview preparation',
          'Career counseling sessions',
        ],
      },
    ],
  },
  {
    id: 'additional',
    icon: Plus,
    title: 'Additional Services',
    color: '#F59E0B',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    services: [
      {
        title: 'Complete Support Package',
        items: [
          'Education loan assistance',
          'Forex & banking services',
          'Accommodation support',
          'Airport pickup & travel assistance',
          'Translation services',
          'Transcript evaluation',
        ],
      },
    ],
  },
];

export function PremiumServicesSection() {
  const [activeTab, setActiveTab] = useState('admission');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0A2472] via-[#0F2D5E] to-[#0A2472] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1A73E8]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F4C430] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Offer
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything You Need,<br />In One Place
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto mb-6"></div>
          <p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From your first application to your first day abroad — we've got you covered with comprehensive support at every step of your journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                  group px-6 py-3 rounded-full border-2 transition-all duration-300
                  ${
                    activeTab === category.id
                      ? 'bg-white border-white shadow-xl scale-105'
                      : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      activeTab === category.id ? 'text-[#0A2472]' : 'text-white'
                    }`}
                  />
                  <span
                    className={`font-semibold transition-colors ${
                      activeTab === category.id ? 'text-[#0A2472]' : 'text-white'
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {category.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories
            .filter((cat) => cat.id === activeTab)
            .map((category) => {
              const Icon = category.icon;
              return category.services.map((service, serviceIndex) => (
                <div
                  key={`${category.id}-${serviceIndex}`}
                  className="lg:col-span-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Service Card */}
                    <div
                      className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/10 hover:border-[#F4C430] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(244,196,48,0.3)] hover:-translate-y-2"
                      style={{
                        animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                        opacity: isVisible ? 1 : 0,
                        animationDelay: '200ms',
                      }}
                    >
                      {/* Icon */}
                      <div className="relative inline-block mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F4C430] rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#0A2472]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-3xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-white/80 mb-8 leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {service.title}
                      </p>

                      {/* CTA Button */}
                      <button
                        className="w-full bg-white text-[#0A2472] px-6 py-4 rounded-xl font-semibold hover:bg-[#F4C430] hover:text-[#0A2472] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group-hover:shadow-xl"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Service Items Cards */}
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#F4C430]/50 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(244,196,48,0.2)] hover:-translate-y-1"
                        style={{
                          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                          opacity: isVisible ? 1 : 0,
                          animationDelay: `${300 + itemIndex * 100}ms`,
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-[#F4C430]/20 flex items-center justify-center group-hover:bg-[#F4C430] transition-colors duration-300">
                              <CheckCircle className="w-5 h-5 text-[#F4C430] group-hover:text-[#0A2472] transition-colors" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-white font-medium leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {item}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Learn More Card */}
                    <div
                      className="group bg-gradient-to-br from-[#F4C430]/10 to-[#F4C430]/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#F4C430]/30 hover:border-[#F4C430] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(244,196,48,0.3)] hover:-translate-y-1 flex flex-col items-center justify-center text-center cursor-pointer"
                      style={{
                        animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                        opacity: isVisible ? 1 : 0,
                        animationDelay: `${300 + service.items.length * 100}ms`,
                      }}
                      onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className="w-16 h-16 bg-[#F4C430] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-8 h-8 text-[#0A2472]" />
                      </div>
                      <h4
                        className="text-white font-bold text-lg mb-2"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Learn More
                      </h4>
                      <p className="text-white/70 text-sm">
                        Get detailed information
                      </p>
                    </div>
                  </div>
                </div>
              ));
            })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20"
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0,
              animationDelay: '800ms',
            }}
          >
            <Globe className="w-6 h-6 text-[#F4C430]" />
            <p className="text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="font-semibold">98% Visa Success Rate</span> • <span className="font-semibold">5000+ Students</span> • <span className="font-semibold">Trusted Since 2010</span>
            </p>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
