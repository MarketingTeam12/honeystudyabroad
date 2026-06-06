import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'When should I start preparing for studying abroad?',
    answer: 'Ideally, start preparing 12-18 months before your intended start date. This gives you enough time for test preparation, university research, application writing, visa processing, and financial planning.',
  },
  {
    category: 'General',
    question: 'How much does it cost to study abroad?',
    answer: 'Costs vary significantly by country and university. On average, expect $20,000-$70,000/year for tuition, plus $12,000-$40,000/year for living expenses. Countries like Germany offer free or low-cost education at public universities.',
  },
  {
    category: 'Applications',
    question: 'How many universities should I apply to?',
    answer: 'We recommend applying to 6-8 universities: 2 reach schools (competitive), 3-4 target schools (good fit), and 2 safety schools (high acceptance probability). This strategy maximizes your chances of admission.',
  },
  {
    category: 'Applications',
    question: 'What is the difference between SOP and Personal Statement?',
    answer: 'A Statement of Purpose (SOP) focuses on your academic goals, research interests, and why you want to pursue that specific program. A Personal Statement is more about your personal journey, experiences, and character development.',
  },
  {
    category: 'Tests',
    question: 'Which English test is better: IELTS, TOEFL, or PTE?',
    answer: 'All three are widely accepted. IELTS is popular for UK/Australia, TOEFL for USA, and PTE for Australia/UK. Choose based on your strengths: IELTS has face-to-face speaking, TOEFL is computer-based, PTE is fastest for results.',
  },
  {
    category: 'Tests',
    question: 'Do I need GRE/GMAT for all postgraduate programs?',
    answer: 'Not always. Many universities are waiving GRE/GMAT requirements, especially for professional programs. However, a good GRE/GMAT score can strengthen your application and improve scholarship chances.',
  },
  {
    category: 'Visa',
    question: 'How long does visa processing take?',
    answer: 'Processing times vary: USA (2-8 weeks), UK (3-6 weeks), Canada (4-8 weeks), Australia (4-6 weeks). Always apply early and avoid peak seasons (June-August) when processing times are longer.',
  },
  {
    category: 'Visa',
    question: 'What if my visa application gets rejected?',
    answer: 'You can reapply after addressing the rejection reasons. Common causes include incomplete documentation, insufficient funds proof, or unclear study plans. Our visa experts will help you understand the rejection and prepare a stronger reapplication.',
  },
  {
    category: 'Finance',
    question: 'Can I get a scholarship as an international student?',
    answer: 'Yes! Many universities offer merit-based scholarships ranging from $5,000-$30,000/year. There are also government scholarships (Fulbright, Chevening, DAAD), country-specific scholarships, and need-based aid at some universities.',
  },
  {
    category: 'Finance',
    question: 'How do education loans work for studying abroad?',
    answer: 'Education loans cover tuition and living expenses. You can get loans from Indian banks (₹10-40 lakhs) or international lenders (up to full amount). Interest rates vary 8-14%. Repayment typically starts 6-12 months after course completion.',
  },
  {
    category: 'Work',
    question: 'Can I work while studying abroad?',
    answer: 'Yes, most countries allow part-time work: USA (20 hrs/week on-campus), UK (20 hrs/week), Canada (20 hrs/week), Australia (40 hrs/fortnight). This helps cover living expenses and gain work experience.',
  },
  {
    category: 'Work',
    question: 'What are post-study work rights?',
    answer: 'Most countries offer work permits after graduation: USA (12-36 months OPT), UK (2 years PSW), Canada (8 months-3 years PGWP), Australia (2-4 years depending on degree). This allows you to gain international work experience.',
  },
  {
    category: 'Accommodation',
    question: 'Should I stay on-campus or off-campus?',
    answer: 'On-campus (dorms) is convenient and helps you make friends, but can be expensive. Off-campus apartments are cheaper and offer more independence, but require more planning. First year, we recommend on-campus to ease transition.',
  },
  {
    category: 'Accommodation',
    question: 'When should I start looking for accommodation?',
    answer: 'Start 2-3 months before your course begins. On-campus housing applications open 3-6 months early. For off-campus, start searching after getting your visa. We provide accommodation assistance to help you find safe, affordable options.',
  },
];

const categories = ['All', 'General', 'Applications', 'Tests', 'Visa', 'Finance', 'Work', 'Accommodation'];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4C430] text-[13px] font-semibold uppercase tracking-[3px] mb-4">
            GOT QUESTIONS?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#CBD5E1] text-[18px] max-w-3xl mx-auto">
            Find answers to common questions about studying abroad
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#F4C430] text-[#0A2472] shadow-lg'
                  : 'bg-white/10 text-white border border-white/20 hover:border-[#F4C430]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)]"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-6 text-left hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-[#1A73E8]/10 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[#1A73E8]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#1A73E8]/10 text-[#1A73E8]">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#1C1C1C] leading-relaxed pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <ChevronDown
                    className={`w-6 h-6 text-[#6B7280] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-12 pr-10 pt-2 border-t border-[#F0F0F0]">
                    <p className="text-[#6B7280] text-[15px] leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-[0px_8px_32px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#F4C430] rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-[#0A2472]" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-[#6B7280] text-[15px] mb-5">
                  Our expert counselors are here to help you with personalized guidance
                </p>
              </div>
              <button
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A73E8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0D5DBD] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
