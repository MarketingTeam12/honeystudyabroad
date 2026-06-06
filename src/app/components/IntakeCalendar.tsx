import { Calendar, Clock, CheckCircle } from 'lucide-react';

interface Intake {
  season: string;
  countries: string[];
  applicationPeriod: string;
  startDate: string;
  color: string;
  icon: string;
}

const intakes: Intake[] = [
  {
    season: 'Spring Intake',
    countries: ['USA', 'Canada', 'UK'],
    applicationPeriod: 'August - October',
    startDate: 'January - February',
    color: '#10B981',
    icon: '🌸',
  },
  {
    season: 'Summer Intake',
    countries: ['USA', 'Canada', 'Australia'],
    applicationPeriod: 'November - March',
    startDate: 'May - June',
    color: '#F59E0B',
    icon: '☀️',
  },
  {
    season: 'Fall Intake (Main)',
    countries: ['USA', 'Canada', 'UK', 'Germany', 'Australia'],
    applicationPeriod: 'December - April',
    startDate: 'September - October',
    color: '#EF4444',
    icon: '🍂',
  },
  {
    season: 'Winter Intake',
    countries: ['Australia', 'New Zealand'],
    applicationPeriod: 'May - August',
    startDate: 'July - August',
    color: '#3B82F6',
    icon: '❄️',
  },
];

interface CountryIntake {
  country: string;
  flag: string;
  mainIntake: string;
  otherIntakes: string[];
  bestTime: string;
}

const countryIntakes: CountryIntake[] = [
  {
    country: 'USA',
    flag: '🇺🇸',
    mainIntake: 'Fall (September)',
    otherIntakes: ['Spring (January)', 'Summer (May)'],
    bestTime: 'Apply 8-12 months before',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    mainIntake: 'Fall (September)',
    otherIntakes: ['Winter (January)', 'Summer (May)'],
    bestTime: 'Apply 6-10 months before',
  },
  {
    country: 'UK',
    flag: '🇬🇧',
    mainIntake: 'Fall (September)',
    otherIntakes: ['Spring (January)'],
    bestTime: 'Apply 9-12 months before',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    mainIntake: 'February',
    otherIntakes: ['July'],
    bestTime: 'Apply 6-9 months before',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    mainIntake: 'Winter (October)',
    otherIntakes: ['Summer (April)'],
    bestTime: 'Apply 4-6 months before',
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    mainIntake: 'August',
    otherIntakes: ['January'],
    bestTime: 'Apply 6-12 months before',
  },
];

export function IntakeCalendar() {
  return (
    <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4C430] text-[13px] font-semibold uppercase tracking-[3px] mb-4">
            PLAN YOUR ADMISSION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight leading-tight mb-4">
            University Intake Calendar
          </h2>
          <p className="text-[#CBD5E1] text-[18px] max-w-3xl mx-auto">
            Plan your applications around major university intakes worldwide
          </p>
        </div>

        {/* Seasonal Intakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {intakes.map((intake, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1.5 border-t-4"
              style={{ borderTopColor: intake.color }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-3xl"
                style={{ backgroundColor: `${intake.color}20` }}
              >
                {intake.icon}
              </div>

              {/* Season */}
              <h3
                className="text-[20px] font-bold mb-3"
                style={{ color: intake.color }}
              >
                {intake.season}
              </h3>

              {/* Countries */}
              <div className="mb-4">
                <p className="text-[#6B7280] text-[12px] font-semibold uppercase mb-2">
                  Popular In
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {intake.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="text-[12px] px-2 py-1 rounded-full bg-[#F3F4F6] text-[#1C1C1C]"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Application Period */}
              <div className="mb-3 flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#6B7280] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6B7280] text-[12px] font-semibold">Apply</p>
                  <p className="text-[#1C1C1C] text-[14px] font-semibold">
                    {intake.applicationPeriod}
                  </p>
                </div>
              </div>

              {/* Start Date */}
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#6B7280] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#6B7280] text-[12px] font-semibold">Starts</p>
                  <p className="text-[#1C1C1C] text-[14px] font-semibold">
                    {intake.startDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Country-Specific Intakes */}
        <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] p-8">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#F0F0F0]">
            <div className="w-14 h-14 bg-[#F4C430] rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-7 h-7 text-[#0A2472]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-[#1A73E8]">
                Country-Wise Intake Timeline
              </h3>
              <p className="text-[#6B7280] text-[14px]">
                Major intakes by destination country
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryIntakes.map((country, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border-2 border-[#F0F0F0] hover:border-[#1A73E8] transition-all duration-300 hover:shadow-[0px_4px_16px_rgba(26,115,232,0.1)]"
              >
                {/* Country Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <h4 className="text-[18px] font-bold text-[#1C1C1C]">
                    {country.country}
                  </h4>
                </div>

                {/* Main Intake */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#1A73E8]" />
                    <p className="text-[#6B7280] text-[12px] font-semibold uppercase">
                      Main Intake
                    </p>
                  </div>
                  <p className="text-[#1A73E8] text-[15px] font-bold ml-6">
                    {country.mainIntake}
                  </p>
                </div>

                {/* Other Intakes */}
                <div className="mb-4">
                  <p className="text-[#6B7280] text-[12px] font-semibold uppercase mb-2">
                    Other Intakes
                  </p>
                  <div className="flex flex-wrap gap-1.5 ml-0">
                    {country.otherIntakes.map((intake, idx) => (
                      <span
                        key={idx}
                        className="text-[12px] px-2.5 py-1 rounded-full bg-[#E8F3FF] text-[#1A73E8] font-medium"
                      >
                        {intake}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div className="pt-3 border-t border-[#F0F0F0]">
                  <p className="text-[#F59E0B] text-[13px] font-semibold">
                    ⏰ {country.bestTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div className="mt-12 bg-[#F4C430] rounded-xl p-6 text-center">
          <p className="text-[#0A2472] text-[15px] leading-relaxed">
            <span className="font-bold">💡 Pro Tip:</span> Apply as early as possible! Many universities process applications on a rolling basis and popular programs fill up quickly. Our experts will help you plan your timeline perfectly.
          </p>
        </div>
      </div>
  );
}
