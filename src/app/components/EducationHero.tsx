import { ArrowRight, Plane, GraduationCap, Globe2, CheckCircle, Shield, Users, Award } from 'lucide-react';

interface EducationHeroProps {
  onGetStartedClick?: () => void;
}

export function EducationHero({ onGetStartedClick }: EducationHeroProps) {
  const countries = [
    { name: 'USA', flag: '🇺🇸', position: 'top-[20%] right-[15%]' },
    { name: 'UK', flag: '🇬🇧', position: 'top-[35%] right-[8%]' },
    { name: 'Canada', flag: '🇨🇦', position: 'top-[15%] right-[35%]' },
    { name: 'Australia', flag: '🇦🇺', position: 'bottom-[25%] right-[10%]' },
    { name: 'Germany', flag: '🇩🇪', position: 'top-[45%] right-[25%]' }
  ];

  return (
    <section className="relative min-h-screen bg-white pt-24 pb-16 overflow-hidden">
      {/* Background Gradient Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2563EB]/10 via-[#DBEAFE]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#93C5FD]/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#DBEAFE]/10 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] text-[#2563EB] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm border border-[#93C5FD]/20">
              <GraduationCap className="w-4 h-4" />
              <span>Trusted by 20,000+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F172A] leading-[1.1]">
              Start Your Global
              <span className="block bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent mt-2">
                Education Journey Today
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-[#64748B] leading-relaxed max-w-xl">
              We help you secure admissions, visas, and scholarships worldwide with expert guidance every step of the way.
            </p>

            {/* Trust Elements */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#2563EB]" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0F172A] text-center">Certified Consultants</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]/30 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#2563EB]" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0F172A] text-center">20K+ Trusted</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]/30 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#2563EB]" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#0F172A] text-center">Global Partners</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onGetStartedClick}
                className="group bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-xl font-bold hover:bg-[#2563EB] hover:text-white transition-all duration-200 flex items-center justify-center">
                Explore Universities
              </button>
            </div>

            {/* Stats Cards (Horizontal) */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent mb-1">
                  20K+
                </div>
                <div className="text-sm text-[#64748B] font-medium">Students</div>
              </div>
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent mb-1">
                  99%
                </div>
                <div className="text-sm text-[#64748B] font-medium">Visa Success</div>
              </div>
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent mb-1">
                  250+
                </div>
                <div className="text-sm text-[#64748B] font-medium">Universities</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* World Map Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-8">
              <Globe2 className="w-[500px] h-[500px] text-[#2563EB]" strokeWidth={0.5} />
            </div>

            {/* Dotted Travel Routes - Curved paths */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 2px 4px rgba(37,99,235,0.1))' }}>
              {/* Route 1 */}
              <path
                d="M 50,100 Q 200,50 350,150"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
              {/* Route 2 */}
              <path
                d="M 80,300 Q 250,250 400,350"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
              {/* Route 3 */}
              <path
                d="M 100,450 Q 280,400 420,480"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
              />
              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Airplane Illustrations with motion curves */}
            <div className="absolute top-[15%] right-[20%] animate-float-slow">
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-3 rounded-full shadow-xl border border-[#DBEAFE]">
                <Plane className="w-6 h-6 text-[#2563EB] rotate-45" />
              </div>
            </div>
            <div className="absolute bottom-[30%] right-[15%] animate-float-delayed">
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-2.5 rounded-full shadow-xl border border-[#DBEAFE]">
                <Plane className="w-5 h-5 text-[#2563EB] rotate-12" />
              </div>
            </div>
            <div className="absolute top-[40%] left-[10%] animate-float-very-slow">
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-2 rounded-full shadow-xl border border-[#DBEAFE]">
                <Plane className="w-4 h-4 text-[#2563EB] -rotate-45" />
              </div>
            </div>

            {/* Central Student Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-w-sm z-10">
              {/* Student with Laptop Illustration */}
              <div className="bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]/30 rounded-2xl p-8 mb-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full -ml-8 -mb-8"></div>

                <div className="text-center relative z-10">
                  {/* Student avatar with gradient */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  {/* Laptop representation */}
                  <div className="bg-white rounded-xl p-4 shadow-xl">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-full"></div>
                      <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded w-3/4"></div>
                      <div className="h-2 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] rounded w-1/2 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-[#0F172A] text-lg mb-1">Your Dream University Awaits</h3>
                <p className="text-sm text-[#64748B]">Expert guidance from application to arrival</p>
              </div>

              {/* Popular Destinations */}
              <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-[#64748B] mb-3 uppercase tracking-wide">Popular Destinations</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border-2 border-[#DBEAFE] px-3 py-2 rounded-lg text-sm font-semibold text-[#2563EB] shadow-sm hover:shadow-md transition-shadow">
                    🇺🇸 USA
                  </span>
                  <span className="bg-white border-2 border-[#DBEAFE] px-3 py-2 rounded-lg text-sm font-semibold text-[#2563EB] shadow-sm hover:shadow-md transition-shadow">
                    🇬🇧 UK
                  </span>
                  <span className="bg-white border-2 border-[#DBEAFE] px-3 py-2 rounded-lg text-sm font-semibold text-[#2563EB] shadow-sm hover:shadow-md transition-shadow">
                    🇨🇦 Canada
                  </span>
                  <span className="bg-white border-2 border-[#DBEAFE] px-3 py-2 rounded-lg text-sm font-semibold text-[#2563EB] shadow-sm hover:shadow-md transition-shadow">
                    🇦🇺 Australia
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Country Flag Cards */}
            {countries.map((country, index) => (
              <div
                key={index}
                className={`absolute ${country.position} animate-float-slow`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 border-2 border-[#DBEAFE] hover:scale-110 hover:border-[#2563EB] transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <div className="text-xs font-bold text-[#2563EB]">{country.name}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative Gradient Shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD]/30 rounded-3xl rotate-12 blur-sm"></div>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#2563EB]/20 to-[#1E40AF]/10 rounded-3xl -rotate-12 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(12deg);
          }
        }

        @keyframes float-very-slow {
          0%, 100% {
            transform: translateY(0px) rotate(-45deg);
          }
          50% {
            transform: translateY(-25px) rotate(-45deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-very-slow {
          animation: float-very-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
