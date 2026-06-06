import { useState } from 'react';
import { DollarSign, Home, Coffee, Bus, Zap, ShoppingBag, TrendingUp } from 'lucide-react';

interface CostCategory {
  icon: any;
  category: string;
  description: string;
}

interface CountryCost {
  country: string;
  flag: string;
  currency: string;
  costs: {
    accommodation: string;
    food: string;
    transport: string;
    utilities: string;
    entertainment: string;
    total: string;
  };
  tuitionRange: string;
  partTimeWage: string;
}

const categories: CostCategory[] = [
  {
    icon: Home,
    category: 'Accommodation',
    description: 'Rent, utilities, internet',
  },
  {
    icon: Coffee,
    category: 'Food & Groceries',
    description: 'Meals, groceries, dining',
  },
  {
    icon: Bus,
    category: 'Transportation',
    description: 'Public transit, bike, taxi',
  },
  {
    icon: Zap,
    category: 'Utilities',
    description: 'Electricity, water, heating',
  },
  {
    icon: ShoppingBag,
    category: 'Entertainment',
    description: 'Movies, events, shopping',
  },
];

const countryCosts: CountryCost[] = [
  {
    country: 'USA',
    flag: '🇺🇸',
    currency: 'USD',
    costs: {
      accommodation: '$800 - $2,000',
      food: '$300 - $600',
      transport: '$100 - $200',
      utilities: '$150 - $250',
      entertainment: '$200 - $400',
      total: '$1,550 - $3,450/month',
    },
    tuitionRange: '$30,000 - $70,000/year',
    partTimeWage: '$15 - $20/hour',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    costs: {
      accommodation: '$600 - $1,500',
      food: '$250 - $500',
      transport: '$80 - $150',
      utilities: '$100 - $200',
      entertainment: '$150 - $300',
      total: '$1,180 - $2,650/month',
    },
    tuitionRange: '$15,000 - $35,000/year',
    partTimeWage: '$15 - $18/hour',
  },
  {
    country: 'UK',
    flag: '🇬🇧',
    currency: 'GBP',
    costs: {
      accommodation: '£500 - £1,200',
      food: '£200 - £400',
      transport: '£60 - £120',
      utilities: '£80 - £150',
      entertainment: '£100 - £250',
      total: '£940 - £2,120/month',
    },
    tuitionRange: '£12,000 - £35,000/year',
    partTimeWage: '£10 - £13/hour',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    costs: {
      accommodation: '$800 - $1,800',
      food: '$300 - $550',
      transport: '$100 - $180',
      utilities: '$120 - $220',
      entertainment: '$150 - $350',
      total: '$1,470 - $3,100/month',
    },
    tuitionRange: '$20,000 - $45,000/year',
    partTimeWage: '$20 - $25/hour',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR',
    costs: {
      accommodation: '€400 - €900',
      food: '€200 - €350',
      transport: '€60 - €100',
      utilities: '€100 - €180',
      entertainment: '€100 - $200',
      total: '€860 - €1,730/month',
    },
    tuitionRange: '€0 - €20,000/year (Many public unis free)',
    partTimeWage: '€10 - €15/hour',
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    costs: {
      accommodation: '$600 - $1,500',
      food: '$250 - $500',
      transport: '$80 - $120',
      utilities: '$100 - $180',
      entertainment: '$150 - $300',
      total: '$1,180 - $2,600/month',
    },
    tuitionRange: '$15,000 - $40,000/year',
    partTimeWage: '$8 - $12/hour',
  },
];

export function CostOfLiving() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  return (
    <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4C430] text-[13px] font-semibold uppercase tracking-[3px] mb-4">
            BUDGET PLANNING
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight leading-tight mb-4">
            Cost of Living Comparison
          </h2>
          <p className="text-[#CBD5E1] text-[18px] max-w-3xl mx-auto">
            Understand monthly expenses and plan your budget for studying abroad
          </p>
        </div>

        {/* Expense Categories Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#F4C430]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#F4C430] rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#0A2472]" />
                </div>
                <h4 className="text-white font-semibold text-[14px] mb-1">
                  {cat.category}
                </h4>
                <p className="text-white/60 text-[12px] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Country Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {countryCosts.map((country, index) => (
            <button
              key={index}
              onClick={() => setSelectedCountry(index)}
              className={`px-6 py-3 rounded-lg font-semibold text-[15px] transition-all duration-300 ${
                selectedCountry === index
                  ? 'bg-[#F4C430] text-[#0A2472] shadow-lg scale-105'
                  : 'bg-white/10 text-white border border-white/20 hover:border-[#F4C430]/50'
              }`}
            >
              <span className="mr-2">{country.flag}</span>
              {country.country}
            </button>
          ))}
        </div>

        {/* Cost Breakdown Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] p-8">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-[#F0F0F0]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1A73E8] rounded-full flex items-center justify-center">
                  <span className="text-3xl">{countryCosts[selectedCountry].flag}</span>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#1C1C1C]">
                    {countryCosts[selectedCountry].country}
                  </h3>
                  <p className="text-[#6B7280] text-[14px]">
                    Monthly Living Expenses ({countryCosts[selectedCountry].currency})
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#6B7280] text-[12px] font-semibold uppercase mb-1">
                  Total/Month
                </p>
                <p className="text-[#1A73E8] text-[24px] font-bold">
                  {countryCosts[selectedCountry].costs.total}
                </p>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-[#1A73E8]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-[15px]">Accommodation</p>
                    <p className="text-[#6B7280] text-[13px]">Rent & Housing</p>
                  </div>
                </div>
                <p className="text-[#1A73E8] font-bold text-[16px]">
                  {countryCosts[selectedCountry].costs.accommodation}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-[15px]">Food & Groceries</p>
                    <p className="text-[#6B7280] text-[13px]">Meals & Dining</p>
                  </div>
                </div>
                <p className="text-[#10B981] font-bold text-[16px]">
                  {countryCosts[selectedCountry].costs.food}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-[15px]">Transportation</p>
                    <p className="text-[#6B7280] text-[13px]">Public Transit</p>
                  </div>
                </div>
                <p className="text-[#F59E0B] font-bold text-[16px]">
                  {countryCosts[selectedCountry].costs.transport}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-[15px]">Utilities</p>
                    <p className="text-[#6B7280] text-[13px]">Power, Water, Internet</p>
                  </div>
                </div>
                <p className="text-[#8B5CF6] font-bold text-[16px]">
                  {countryCosts[selectedCountry].costs.utilities}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-[15px]">Entertainment</p>
                    <p className="text-[#6B7280] text-[13px]">Leisure & Shopping</p>
                  </div>
                </div>
                <p className="text-[#EF4444] font-bold text-[16px]">
                  {countryCosts[selectedCountry].costs.entertainment}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t-2 border-[#F0F0F0]">
              <div className="p-4 rounded-lg bg-[#E8F3FF]">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#1A73E8]" />
                  <p className="text-[#1A73E8] font-semibold text-[14px]">Tuition Fees</p>
                </div>
                <p className="text-[#1C1C1C] font-bold text-[16px]">
                  {countryCosts[selectedCountry].tuitionRange}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FEF3E2]">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#F59E0B]" />
                  <p className="text-[#F59E0B] font-semibold text-[14px]">Part-Time Work</p>
                </div>
                <p className="text-[#1C1C1C] font-bold text-[16px]">
                  {countryCosts[selectedCountry].partTimeWage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#F4C430]/10 backdrop-blur-sm rounded-xl p-6 border border-[#F4C430]/30">
            <p className="text-white text-[14px] leading-relaxed">
              <span className="font-bold text-[#F4C430]">💰 Budget Tip:</span> These are average estimates. Costs vary by city (major cities are more expensive). Always budget 15-20% extra for unexpected expenses.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white text-[14px] leading-relaxed">
              <span className="font-bold text-[#F4C430]">📊 Funding Options:</span> Explore scholarships, education loans, and part-time work opportunities to manage your expenses. Our counselors will help you plan your finances.
            </p>
          </div>
        </div>
      </div>
  );
}
