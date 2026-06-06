import { ArrowRight, Plane, Globe } from 'lucide-react';

interface StudyAbroadHeroProps {
  onTalkToExpertClick?: () => void;
}

export function StudyAbroadHero({ onTalkToExpertClick }: StudyAbroadHeroProps) {
  const countries = [
    { name: 'USA', flag: '🇺🇸', link: '#usa', angle: 0 },
    { name: 'UK', flag: '🇬🇧', link: '#uk', angle: 36 },
    { name: 'Canada', flag: '🇨🇦', link: '#canada', angle: 72 },
    { name: 'Australia', flag: '🇦🇺', link: '#australia', angle: 108 },
    { name: 'Germany', flag: '🇩🇪', link: '#germany', angle: 144 },
    { name: 'France', flag: '🇫🇷', link: '#france', angle: 180 },
    { name: 'Ireland', flag: '🇮🇪', link: '#ireland', angle: 216 },
    { name: 'New Zealand', flag: '🇳🇿', link: '#new-zealand', angle: 252 },
    { name: 'Singapore', flag: '🇸🇬', link: '#singapore', angle: 288 },
    { name: 'Europe', flag: '🇪🇺', link: '#europe', angle: 324 }
  ];

  // Calculate position based on angle for circular arrangement
  const getPosition = (angle: number, radius: number = 280) => {
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    return { x, y };
  };

  return (
    <section className="relative min-h-screen bg-white pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#60A5FA]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              Study Abroad Consultants
              <span className="block text-[#2563EB] mt-2">In India</span>
            </h1>

            {/* Content removed as requested */}

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onTalkToExpertClick}
                className="group bg-gradient-to-r from-[#2563EB] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#1E3A8A] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>TALK TO AN EXPERT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">15,000+</div>
                <div className="text-sm text-[#64748B]">Students Placed</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">25+</div>
                <div className="text-sm text-[#64748B]">Countries</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">99%</div>
                <div className="text-sm text-[#64748B]">Visa Success</div>
              </div>
            </div>
          </div>

          {/* Right Side - Central Image with Orbital Country Flags */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Faint World Map Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
              <Globe className="w-[700px] h-[700px] text-[#2563EB]" strokeWidth={0.3} />
            </div>

            {/* Dotted Circle Orbits */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 2px 8px rgba(37,99,235,0.08))' }}>
              {/* Outer orbit circle */}
              <circle
                cx="50%"
                cy="50%"
                r="280"
                stroke="#2563EB"
                strokeWidth="2"
                strokeDasharray="8,12"
                fill="none"
                opacity="0.15"
              />

              {/* Inner orbit circle */}
              <circle
                cx="50%"
                cy="50%"
                r="200"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeDasharray="6,10"
                fill="none"
                opacity="0.1"
              />

              {/* Connecting dotted lines between countries */}
              {countries.map((country, index) => {
                const nextCountry = countries[(index + 1) % countries.length];
                const pos1 = getPosition(country.angle);
                const pos2 = getPosition(nextCountry.angle);
                return (
                  <line
                    key={`line-${index}`}
                    x1={`calc(50% + ${pos1.x}px)`}
                    y1={`calc(50% + ${pos1.y}px)`}
                    x2={`calc(50% + ${pos2.x}px)`}
                    y2={`calc(50% + ${pos2.y}px)`}
                    stroke="#2563EB"
                    strokeWidth="1"
                    strokeDasharray="4,6"
                    opacity="0.2"
                  />
                );
              })}
            </svg>

            {/* Animated Airplanes on Routes */}
            <div className="absolute top-[25%] right-[30%] animate-airplane-fly-1">
              <div className="bg-white rounded-full p-2 shadow-lg border border-[#DBEAFE]">
                <Plane className="w-4 h-4 text-[#2563EB] rotate-45" />
              </div>
            </div>
            <div className="absolute bottom-[35%] left-[25%] animate-airplane-fly-2">
              <div className="bg-white rounded-full p-2 shadow-lg border border-[#DBEAFE]">
                <Plane className="w-4 h-4 text-[#2563EB] -rotate-30" />
              </div>
            </div>
            <div className="absolute top-[50%] left-[20%] animate-airplane-fly-3">
              <div className="bg-white rounded-full p-2 shadow-lg border border-[#DBEAFE]">
                <Plane className="w-4 h-4 text-[#2563EB] rotate-90" />
              </div>
            </div>

            {/* Central Student Image */}
            <div className="relative z-20">
              <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
                {/* Decorative ring around image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#60A5FA]/5 blur-xl"></div>

                {/* Image container with shadow */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/src/imports/download__3_.jpg"
                    alt="Study Abroad Student"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/10 to-transparent"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EB]/20 to-[#60A5FA]/20 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Orbital Country Cards - Positioned in Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              {countries.map((country, index) => {
                const position = getPosition(country.angle);
                return (
                  <a
                    key={index}
                    href={country.link}
                    className="absolute animate-float-orbit cursor-pointer group"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-3 border-2 border-gray-100 hover:border-[#2563EB] hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[100px]">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                          {country.flag}
                        </div>
                        <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
                          {country.name}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Decorative floating elements */}
            <div className="absolute top-12 right-16 w-20 h-20 bg-[#2563EB]/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-12 w-24 h-24 bg-[#60A5FA]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes airplane-fly-1 {
          0%, 100% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          50% {
            transform: translate(30px, -20px) rotate(45deg);
            opacity: 0.6;
          }
        }

        @keyframes airplane-fly-2 {
          0%, 100% {
            transform: translate(0, 0) rotate(-30deg);
            opacity: 1;
          }
          50% {
            transform: translate(-25px, -25px) rotate(-30deg);
            opacity: 0.6;
          }
        }

        @keyframes airplane-fly-3 {
          0%, 100% {
            transform: translate(0, 0) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translate(20px, 30px) rotate(90deg);
            opacity: 0.6;
          }
        }

        @keyframes float-orbit {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }

        .animate-airplane-fly-1 {
          animation: airplane-fly-1 10s ease-in-out infinite;
        }

        .animate-airplane-fly-2 {
          animation: airplane-fly-2 12s ease-in-out infinite 1s;
        }

        .animate-airplane-fly-3 {
          animation: airplane-fly-3 11s ease-in-out infinite 2s;
        }

        .animate-float-orbit {
          animation: float-orbit 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
