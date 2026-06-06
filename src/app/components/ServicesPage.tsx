import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'india-admission',
    icon: '🇮🇳',
    title: 'India Admission',
    description: 'Complete guidance for admissions to top Indian universities and institutions.',
    includes: [
      'IIT, NIT & IIIT admissions',
      'Medical & Engineering counselling',
      'Management entrance support',
      'State & Central university guidance',
    ],
    route: '#india-page',
  },
  {
    id: 'visa',
    icon: '✈️',
    title: 'Visa Assistance',
    description: 'Expert guidance through the entire visa application process for student visas.',
    includes: [
      'Visa documentation checklist',
      'Application form assistance',
      'Interview preparation',
      'Embassy appointment guidance',
    ],
    searchUrl: 'https://www.google.com/search?q=student+visa+assistance+study+abroad+process',
  },
  {
    id: 'admissions',
    icon: '🎓',
    title: 'University Admissions',
    description: 'End-to-end support for university applications across top global institutions.',
    includes: [
      'University shortlisting',
      'SOP & LOR guidance',
      'Application submission',
      'Offer letter follow-up',
    ],
    searchUrl: 'https://www.google.com/search?q=university+admissions+abroad+application+process',
  },
  {
    id: 'scholarship',
    icon: '🏅',
    title: 'Scholarship Guidance',
    description: 'Find and apply for scholarships that fund your international education dream.',
    includes: [
      'Scholarship search by country',
      'Eligibility assessment',
      'Application assistance',
      'Merit & need-based options',
    ],
    searchUrl: 'https://www.google.com/search?q=scholarships+for+international+students+study+abroad',
  },
  {
    id: 'language',
    icon: '📝',
    title: 'Language Test Prep',
    description: 'Comprehensive coaching for all major English proficiency examinations.',
    includes: [
      'IELTS preparation',
      'TOEFL coaching',
      'PTE practice tests',
      'Mock test sessions',
    ],
    searchUrl: 'https://www.google.com/search?q=IELTS+TOEFL+PTE+language+test+preparation+study+abroad',
  },
  {
    id: 'departure',
    icon: '🧳',
    title: 'Pre-Departure Briefing',
    description: 'Complete orientation to prepare students for life in their destination country.',
    includes: [
      'Cultural orientation',
      'Accommodation guidance',
      'Travel & insurance tips',
      'Banking & SIM setup advice',
    ],
    searchUrl: 'https://www.google.com/search?q=pre+departure+briefing+for+international+students+study+abroad',
  },
  {
    id: 'career',
    icon: '💼',
    title: 'Career Counseling',
    description: 'Strategic career planning aligned with your chosen course and destination country.',
    includes: [
      'Career path assessment',
      'Course & country matching',
      'Post-study work options',
      'Resume & LinkedIn guidance',
    ],
    searchUrl: 'https://www.google.com/search?q=career+counseling+for+study+abroad+students+post+study+work',
  },
];

const processSteps = [
  'Counseling',
  'University Selection',
  'Application',
  'Visa',
  'Departure',
];

export function ServicesPage() {

  const handleKnowMore = (service: typeof servicesData[0]) => {
    if (service.route) {
      window.location.hash = service.route.substring(1);
    } else if (service.searchUrl) {
      window.open(service.searchUrl, '_blank');
    }
  };

  return (
    <div id="services">
      {/* Page Header */}
      <section className="bg-[#0A2472] text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm mb-4 text-white/80">
            <a href="#home" className="hover:text-white">Home</a> / <span>Services</span>
          </div>
          <h1 className="text-5xl">Our Services</h1>
          <p className="text-xl text-white/80 mt-4">
            Everything you need for your study abroad journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A2472]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0px_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-t-[3px] hover:border-t-[#F4C430] border-t-[3px] border-t-transparent"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#F4C430] rounded-full flex items-center justify-center mb-6 text-3xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl mb-4 text-[#1A73E8] font-bold">{service.title}</h3>

                {/* Description */}
                <p className="text-[#6B7280] mb-4 leading-relaxed text-[15px]">{service.description}</p>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="text-[#1C1C1C] font-semibold mb-3 text-sm">What's included:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#6B7280] text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Know More Button */}
                <button
                  onClick={() => handleKnowMore(service)}
                  className="w-full bg-[#1A73E8] text-white py-3 rounded-lg hover:bg-[#0D5DBD] transition-all flex items-center justify-center gap-2 font-medium"
                >
                  {service.route ? 'Explore Details' : 'Know More'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#1A3A8F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-white">
              Our Process
            </h2>
            <p className="text-xl text-white/80">
              Step-by-step guidance from start to finish
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F4C430] text-[#1C1C1C] rounded-full flex items-center justify-center mb-4 mx-auto text-2xl font-bold shadow-xl">
                    {index + 1}
                  </div>
                  <div className="text-lg font-semibold text-white">{step}</div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-16 h-1 bg-white/30 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
