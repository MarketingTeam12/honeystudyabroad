import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, FileText, GraduationCap, Calendar, DollarSign, MessageCircle } from 'lucide-react';
import { DocumentChecklist } from './DocumentChecklist';
import { AcademicCredentials } from './AcademicCredentials';
import { IntakeCalendar } from './IntakeCalendar';
import { CostOfLiving } from './CostOfLiving';
import { FAQ } from './FAQ';

type Section = 'documents' | 'credentials' | 'intakes' | 'cost' | 'faq' | null;

interface PlanAndPrepareProps {
  openSection?: Section;
  onSectionChange?: (section: Section) => void;
}

export function PlanAndPrepare({ openSection, onSectionChange }: PlanAndPrepareProps) {
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    if (openSection) {
      setActiveSection(openSection);
      // Scroll to the section after a brief delay to allow rendering
      setTimeout(() => {
        const element = document.getElementById('plan-and-prepare');
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [openSection]);

  const toggleSection = (section: Section) => {
    const newSection = activeSection === section ? null : section;
    setActiveSection(newSection);
    onSectionChange?.(newSection);
  };

  const sections = [
    {
      id: 'documents' as Section,
      title: 'Document Checklist',
      icon: FileText,
      description: 'Essential documents required for your application',
      component: DocumentChecklist,
      color: 'from-[#3B82F6] to-[#2563EB]'
    },
    {
      id: 'credentials' as Section,
      title: 'Academic Credentials',
      icon: GraduationCap,
      description: 'Understand academic requirements and qualifications',
      component: AcademicCredentials,
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      id: 'intakes' as Section,
      title: 'Intake Calendar',
      icon: Calendar,
      description: 'Plan your application timeline with intake dates',
      component: IntakeCalendar,
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      id: 'cost' as Section,
      title: 'Cost of Living',
      icon: DollarSign,
      description: 'Budget planning for studying abroad',
      component: CostOfLiving,
      color: 'from-[#F59E0B] to-[#D97706]'
    },
    {
      id: 'faq' as Section,
      title: 'FAQs',
      icon: MessageCircle,
      description: 'Frequently asked questions about studying abroad',
      component: FAQ,
      color: 'from-[#14B8A6] to-[#0D9488]'
    }
  ];

  return (
    <section id="plan-and-prepare" className="py-20 bg-gradient-to-br from-[#0A2472] via-[#0E1B4D] to-[#0A2472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Plan & Prepare
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know to prepare for your study abroad journey
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-300 hover:border-[#1A73E8]"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{section.title}</h3>
                      <p className="text-sm text-white/70 hidden sm:block">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isActive ? (
                      <ChevronUp className="w-6 h-6 text-[#1A73E8]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/60" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'max-h-[5000px] opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-4 md:px-8 pb-8">
                    <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                      <section.component />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Click on any section above to expand and view detailed information
          </p>
        </div>
      </div>
    </section>
  );
}
