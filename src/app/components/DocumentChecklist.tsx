import { useState } from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';

interface ChecklistItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    icon: '📘',
    title: 'Passport',
    description: 'Valid passport with minimum 6 months validity required',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Updated Resume / CV',
    description: 'Academic & professional achievements highlighted',
  },
  {
    id: 3,
    icon: '📝',
    title: 'Marksheets',
    description: '10th | 12th | Degree certificates with official transcripts',
  },
  {
    id: 4,
    icon: '🗣️',
    title: 'Language Certificates',
    description: 'IELTS / PTE / TOEFL / Duolingo (English proficiency proof)',
  },
  {
    id: 5,
    icon: '🌐',
    title: 'Other Language Certificates',
    description: 'Additional language proof if required by university',
  },
  {
    id: 6,
    icon: '📊',
    title: 'Standardized Tests',
    description: 'GRE / GMAT / SAT / ACT scores as per program',
  },
  {
    id: 7,
    icon: '✍️',
    title: 'SOP',
    description: 'Statement of Purpose — university specific essay',
  },
  {
    id: 8,
    icon: '📩',
    title: "LOR's",
    description: 'Letters of Recommendation from college / workplace',
  },
  {
    id: 9,
    icon: '💰',
    title: 'Financial Documents',
    description: 'Assets / FDs / Bank Balance / Loan approval letters',
  },
];

export function DocumentChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const handleDownloadPDF = () => {
    // In a real application, this would trigger a PDF download
    alert('PDF download functionality will be implemented. For now, please contact us for the checklist.');
  };

  return (
    <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F4C430] text-[13px] font-semibold uppercase tracking-[3px] mb-4">
            PLAN YOUR APPLICATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight leading-tight mb-4">
            Document Checklist
          </h2>
          <p className="text-[#CBD5E1] text-[18px] max-w-3xl mx-auto">
            Gather these essential documents before applying to any university abroad
          </p>
        </div>

        {/* Checklist Card */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] p-10">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#F0F0F0]">
              <div className="w-14 h-14 bg-[#F4C430] rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-[#0A2472]" />
              </div>
              <h3 className="text-[22px] font-bold text-[#1A73E8]">
                Required Documents
              </h3>
            </div>

            {/* Checklist Items */}
            <div className="space-y-0">
              {checklistItems.map((item, index) => (
                <div key={item.id}>
                  <div
                    className="py-5 cursor-pointer hover:bg-[#F9FAFB] transition-colors rounded-lg px-4 -mx-4"
                    onClick={() => toggleCheck(item.id)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className={`w-5 h-5 rounded border-2 transition-all duration-200 cursor-pointer ${
                            checkedItems.has(item.id)
                              ? 'bg-[#1A73E8] border-[#1A73E8]'
                              : 'border-[#1A73E8] hover:border-[#0D5DBD]'
                          }`}
                        >
                          {checkedItems.has(item.id) && (
                            <svg
                              className="w-full h-full text-white p-0.5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Number */}
                      <div className="flex-shrink-0 w-8 text-[#6B7280] font-semibold">
                        {item.id}.
                      </div>

                      {/* Icon */}
                      <div className="flex-shrink-0 text-2xl">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-[#1C1C1C] font-semibold text-[16px] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#6B7280] text-[14px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider (not for last item) */}
                  {index < checklistItems.length - 1 && (
                    <div className="border-b border-[#F0F0F0]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-8 pt-6 border-t-2 border-[#F0F0F0] text-center">
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1A73E8] text-[#1A73E8] rounded-lg hover:bg-[#1A73E8] hover:text-white transition-all duration-300 font-semibold text-[16px]"
              >
                <Download className="w-5 h-5" />
                Download Checklist PDF
              </button>
            </div>
          </div>

          {/* Note Banner */}
          <div className="mt-6 bg-[#F4C430] rounded-xl p-6">
            <div className="flex items-start gap-3 text-[#0A2472]">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-[14px] leading-relaxed">
                <span className="font-semibold">⚠️ Please Note:</span> Document requirements may vary by country and university. Our counselors will guide you with a personalized list tailored to your chosen destination and program.
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold">Your Progress</span>
              <span className="text-[#F4C430] font-bold text-lg">
                {checkedItems.size} / {checklistItems.length}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#F4C430] h-full rounded-full transition-all duration-500"
                style={{ width: `${(checkedItems.size / checklistItems.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-white/70 text-sm mt-3 text-center">
              {checkedItems.size === checklistItems.length
                ? "🎉 All documents checked! You're ready to apply."
                : `${checklistItems.length - checkedItems.size} documents remaining`}
            </p>
          </div>
        </div>
      </div>
  );
}
