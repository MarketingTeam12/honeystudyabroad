import { Building2, CheckCircle, Euro, FileText, Shield, Target } from 'lucide-react';

interface CountryAdmissionTimelineProps {
  countryName: string;
  sectionId?: string;
  subtitle?: string;
  layout?: 'section' | 'steps';
}

type AdmissionTheme = {
  line: string;
  node: string;
  stepBadge: string;
};

const DEFAULT_THEME: AdmissionTheme = {
  line: 'linear-gradient(180deg, #1D4ED8 0%, #60A5FA 100%)',
  node: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
  stepBadge: '#F4C430',
};

const COUNTRY_THEMES: Record<string, AdmissionTheme> = {
  USA: {
    line: 'linear-gradient(180deg, #0F766E 0%, #22C55E 100%)',
    node: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
    stepBadge: '#06B6D4',
  },
  UK: {
    line: 'linear-gradient(180deg, #0A2472 0%, #3B82F6 100%)',
    node: 'linear-gradient(135deg, #0A2472 0%, #1D4ED8 100%)',
    stepBadge: '#F4C430',
  },
  Canada: {
    line: 'linear-gradient(180deg, #D9480F 0%, #F59E0B 100%)',
    node: 'linear-gradient(135deg, #C81E1E 0%, #EF4444 100%)',
    stepBadge: '#2563EB',
  },
  Australia: {
    line: 'linear-gradient(180deg, #0F766E 0%, #06B6D4 100%)',
    node: 'linear-gradient(135deg, #059669 0%, #14B8A6 100%)',
    stepBadge: '#F59E0B',
  },
  France: {
    line: 'linear-gradient(180deg, #4F46E5 0%, #A855F7 100%)',
    node: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
    stepBadge: '#F97316',
  },
  Ireland: {
    line: 'linear-gradient(180deg, #15803D 0%, #22C55E 100%)',
    node: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
    stepBadge: '#F4C430',
  },
  'New Zealand': {
    line: 'linear-gradient(180deg, #0F766E 0%, #38BDF8 100%)',
    node: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    stepBadge: '#0A2472',
  },
  Europe: {
    line: 'linear-gradient(180deg, #7C3AED 0%, #2563EB 100%)',
    node: 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 100%)',
    stepBadge: '#F4C430',
  },
  Singapore: {
    line: 'linear-gradient(180deg, #C81E1E 0%, #F97316 100%)',
    node: 'linear-gradient(135deg, #DC2626 0%, #FB7185 100%)',
    stepBadge: '#0F172A',
  },
};

export function CountryAdmissionTimeline({
  countryName,
  sectionId = 'admission-process',
  subtitle,
  layout = 'section',
}: CountryAdmissionTimelineProps) {
  const theme = COUNTRY_THEMES[countryName] || DEFAULT_THEME;

  const steps = [
    {
      step: '1',
      title: 'Document Preparation',
      description: 'We help you prepare, organize, and verify all required academic and supporting documents.',
      icon: FileText,
    },
    {
      step: '2',
      title: 'University Selection',
      description: 'We shortlist the best-fit universities based on your course goals, profile, and budget.',
      icon: Building2,
    },
    {
      step: '3',
      title: 'Application Submission',
      description: 'We submit your application through the right portal or directly to the selected university.',
      icon: CheckCircle,
    },
    {
      step: '4',
      title: 'Profile Evaluation',
      description: `We review your academic profile and suggest the right admission route for ${countryName}.`,
      icon: Target,
    },
    {
      step: '5',
      title: 'Blocked Account Setup',
      description: 'Assistance with opening your blocked account for visa requirements and fund proof.',
      icon: Euro,
    },
    {
      step: '6',
      title: 'Visa Processing',
      description: 'Complete visa support with document verification, appointment booking, and follow-up.',
      icon: Shield,
    },
  ];

  const content = (
    <div className="relative">
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden lg:block"
        style={{ background: theme.line }}
      ></div>

      <div className="space-y-12">
        {steps.map((item, index) => (
          <div key={item.step} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                style={{ background: theme.node }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                style={{ background: theme.stepBadge }}
              >
                {item.step}
              </div>
            </div>

            <div className="flex-1 hidden lg:block"></div>
          </div>
        ))}
      </div>
    </div>
  );

  if (layout === 'steps') {
    return content;
  }

  return (
    <section id={sectionId} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Admission Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle || `Your journey to ${countryName} in simple, guided steps`}
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
