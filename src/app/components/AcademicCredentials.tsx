import { ArrowRight } from 'lucide-react';

interface Credential {
  abbr: string;
  fullName: string;
  icon: string;
  searchUrl: string;
}

const credentials: Credential[] = [
  {
    abbr: 'WES',
    fullName: 'World Education Services',
    icon: '🌍',
    searchUrl: 'https://www.google.com/search?q=World+Education+Services+WES+credential+evaluation',
  },
  {
    abbr: 'NACES',
    fullName: 'National Association of Credential Evaluation Services',
    icon: '🎓',
    searchUrl: 'https://www.google.com/search?q=NACES+credential+evaluation+international+students',
  },
  {
    abbr: 'AICE',
    fullName: 'Association of International Credential Evaluators',
    icon: '📋',
    searchUrl: 'https://www.google.com/search?q=AICE+credential+evaluators+study+abroad',
  },
  {
    abbr: 'AEA',
    fullName: 'American Evaluation Association',
    icon: '🏛️',
    searchUrl: 'https://www.google.com/search?q=American+Evaluation+Association+AEA+academic+credentials',
  },
  {
    abbr: 'EAIE',
    fullName: 'European Association of International Education',
    icon: '🇪🇺',
    searchUrl: 'https://www.google.com/search?q=EAIE+European+Association+International+Education',
  },
  {
    abbr: 'ATA',
    fullName: 'American Translation Association',
    icon: '📝',
    searchUrl: 'https://www.google.com/search?q=American+Translation+Association+ATA+document+translation',
  },
  {
    abbr: 'NAFSA',
    fullName: 'Association of International Educators',
    icon: '👨‍🏫',
    searchUrl: 'https://www.google.com/search?q=NAFSA+Association+International+Educators+study+abroad',
  },
  {
    abbr: 'AACRAO',
    fullName: 'American Association of Collegiate Registrars and Admissions Officers',
    icon: '🏫',
    searchUrl: 'https://www.google.com/search?q=AACRAO+admissions+credential+evaluation+study+abroad',
  },
  {
    abbr: 'AMIDEAST',
    fullName: 'America-Mideast Educational and Training Services Inc.',
    icon: '🌐',
    searchUrl: 'https://www.google.com/search?q=AMIDEAST+educational+training+services+study+abroad',
  },
];

export function AcademicCredentials() {
  const handleKnowMore = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4C430] text-[13px] font-semibold uppercase tracking-[3px] mb-4">
            CREDENTIAL EVALUATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight leading-tight mb-4">
            Academic Credentials
          </h2>
          <p className="text-[#CBD5E1] text-[18px] max-w-3xl mx-auto">
            Recognized credential evaluation bodies accepted by global universities
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-7 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:border-t-[3px] hover:border-t-[#F4C430] border-t-[3px] border-t-transparent group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#F4C430] rounded-full flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform duration-300">
                {credential.icon}
              </div>

              {/* Abbreviation */}
              <h3 className="text-[18px] font-bold text-[#1A73E8] mb-3">
                {credential.abbr}
              </h3>

              {/* Full Name */}
              <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5 min-h-[42px]">
                {credential.fullName}
              </p>

              {/* Know More Link */}
              <button
                onClick={() => handleKnowMore(credential.searchUrl)}
                className="text-[#1A73E8] hover:text-[#F4C430] font-medium text-[14px] flex items-center gap-2 transition-colors group-hover:gap-3"
              >
                Know More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
            <p className="text-white/90 text-[14px]">
              <span className="font-semibold text-[#F4C430]">💡 Pro Tip:</span> Different universities accept different credential evaluation services. Our counselors will guide you to choose the right one for your target universities.
            </p>
          </div>
        </div>
      </div>
  );
}
